import localFont from "next/font/local";

// Self-hosted from the @fontsource-variable packages (OFL-1.1) instead of
// next/font/google. Google Fonts intermittently returns font URLs without a
// file extension, which crashes `next build` on a fresh machine (every
// Cloudflare build). Self-hosting makes builds offline and deterministic, and
// visitors' browsers never contact Google.
//
// Variable fonts: one latin file per family covers every weight we use
// (400-700).

export const newsreader = localFont({
  src: "../../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-wght-normal.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-newsreader",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const oswald = localFont({
  src: "../../node_modules/@fontsource-variable/oswald/files/oswald-latin-wght-normal.woff2",
  weight: "200 700",
  style: "normal",
  variable: "--font-oswald",
  display: "swap",
  fallback: ["sans-serif"],
});

export const manrope = localFont({
  src: "../../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-manrope",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
