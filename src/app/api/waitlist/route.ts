import { createSign } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validation";

export const runtime = "nodejs";

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

const rateLimitMap = new Map<string, number[]>();

class WaitlistError extends Error {
  code: string;
  status: number;

  constructor(code: string, message: string, status = 500) {
    super(message);
    this.name = "WaitlistError";
    this.code = code;
    this.status = status;
  }
}

const base64Url = (value: string | Buffer) =>
  Buffer.from(value)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

const getClientIp = (request: NextRequest) =>
  request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
  request.headers.get("x-real-ip") ||
  "unknown";

const checkRateLimit = (ip: string) => {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  const recentRequests = requests.filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
};

const getRequiredEnv = (name: string) => {
  const value = process.env[name];
  if (!value) {
    throw new WaitlistError(
      `missing_${name.toLowerCase()}`,
      `Missing required environment variable: ${name}`
    );
  }
  return value;
};

const normalizePrivateKey = (value: string) => {
  let key = value.trim();
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }

  key = key.replace(/\\n/g, "\n").replace(/\r\n/g, "\n");

  if (!key.includes("BEGIN PRIVATE KEY") || !key.includes("END PRIVATE KEY")) {
    throw new WaitlistError(
      "invalid_google_private_key",
      "Google private key is missing its PEM header or footer"
    );
  }

  return key;
};

const createJwtAssertion = () => {
  const clientEmail = getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  const privateKey = normalizePrivateKey(getRequiredEnv("GOOGLE_PRIVATE_KEY"));
  const now = Math.floor(Date.now() / 1000);

  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  const claimSet = {
    iss: clientEmail,
    scope: GOOGLE_SHEETS_SCOPE,
    aud: GOOGLE_TOKEN_URL,
    exp: now + 3600,
    iat: now,
  };

  const unsignedJwt = `${base64Url(JSON.stringify(header))}.${base64Url(
    JSON.stringify(claimSet)
  )}`;
  let signature: Buffer;
  try {
    signature = createSign("RSA-SHA256").update(unsignedJwt).sign(privateKey);
  } catch (error) {
    throw new WaitlistError(
      "invalid_google_private_key",
      error instanceof Error ? error.message : "Google private key is invalid"
    );
  }

  return `${unsignedJwt}.${base64Url(signature)}`;
};

const parseGoogleError = (details: string) => {
  try {
    return JSON.parse(details) as {
      error?: {
        code?: number;
        message?: string;
        status?: string;
        error?: string;
        error_description?: string;
        details?: Array<{
          reason?: string;
          metadata?: Record<string, string>;
        }>;
      };
    };
  } catch {
    return null;
  }
};

const classifyGoogleError = (details: string, fallbackCode: string) => {
  const parsed = parseGoogleError(details);
  const googleError = parsed?.error;
  const message =
    googleError?.message ||
    googleError?.error_description ||
    googleError?.error ||
    details;
  const reason = googleError?.details?.find((detail) => detail.reason)?.reason;

  if (reason === "SERVICE_DISABLED") return "google_sheets_api_disabled";
  if (googleError?.status === "PERMISSION_DENIED") {
    return "google_sheet_permission_denied";
  }
  if (googleError?.status === "NOT_FOUND") return "google_sheet_not_found";
  if (/Unable to parse range|cannot find range|No grid with id/i.test(message)) {
    return "google_sheet_tab_not_found";
  }
  if (/invalid_grant|Invalid JWT|Invalid Credentials/i.test(message)) {
    return "google_auth_failed";
  }

  return fallbackCode;
};

const getGoogleAccessToken = async () => {
  const assertion = createJwtAssertion();
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion,
  });

  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    const details = await response.text();
    throw new WaitlistError(
      classifyGoogleError(details, "google_auth_failed"),
      `Google auth failed: ${details}`
    );
  }

  const data = (await response.json()) as { access_token?: string };
  if (!data.access_token) {
    throw new WaitlistError(
      "google_auth_failed",
      "Google auth did not return an access token"
    );
  }

  return data.access_token;
};

const appendWaitlistRow = async ({
  email,
  source,
  ip,
  userAgent,
}: {
  email: string;
  source: string;
  ip: string;
  userAgent: string;
}) => {
  const spreadsheetId = getRequiredEnv("GOOGLE_SHEETS_SPREADSHEET_ID");
  const sheetName = process.env.GOOGLE_SHEETS_WAITLIST_TAB || "Waitlist";
  const accessToken = await getGoogleAccessToken();
  const range = encodeURIComponent(`${sheetName}!A:E`);
  const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      values: [[new Date().toISOString(), email, source, ip, userAgent]],
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new WaitlistError(
      classifyGoogleError(details, "google_sheets_append_failed"),
      `Google Sheets append failed: ${details}`
    );
  }
};

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const validation = waitlistSchema.safeParse(await request.json());
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid email", details: validation.error.errors },
        { status: 400 }
      );
    }

    await appendWaitlistRow({
      email: validation.data.email.toLowerCase(),
      source: validation.data.source || "homepage-waitlist",
      ip,
      userAgent: request.headers.get("user-agent") || "unknown",
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Waitlist submission error:", error);
    if (error instanceof WaitlistError) {
      return NextResponse.json(
        {
          error: "Failed to join waitlist",
          code: error.code,
        },
        { status: error.status }
      );
    }

    return NextResponse.json(
      { error: "Failed to join waitlist", code: "waitlist_unknown_error" },
      { status: 500 }
    );
  }
}
