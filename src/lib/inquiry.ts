import { INQUIRY_ENDPOINT } from "./links";

/**
 * Send a form submission to the site-inquiry edge function.
 * `website` is the honeypot field: humans leave it empty.
 * Throws on any non-2xx so the form can show its error state.
 */
export async function sendInquiry(
  form: "partner" | "contact",
  fields: Record<string, string | undefined>,
  website: string
): Promise<void> {
  const res = await fetch(INQUIRY_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ form, website, ...fields }),
  });
  if (!res.ok) throw new Error(`Inquiry failed with status ${res.status}`);
}
