import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { manrope, newsreader, oswald } from "@/lib/fonts";
import "@/styles/globals.css";
import CardNav from "@/components/shared/CardNav";
import Footer from "@/components/shared/Footer";
import MotionProvider from "@/components/shared/MotionProvider";
import ScrollThread from "@/components/decorative/ScrollThread";

export const metadata: Metadata = {
  metadataBase: new URL("https://driftproductivity.com"),
  title: {
    default: "Drift - Earn Your Screen Time",
    template: "%s - Drift",
  },
  description:
    "Drift blocks distracting apps until you finish the tasks you meant to do first.",
  keywords: [
    "screen time",
    "app blocker",
    "digital wellbeing",
    "productivity",
    "focus app",
    "iOS Screen Time",
  ],
  authors: [{ name: "Drift" }],
  creator: "Drift",
  publisher: "Drift",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://driftproductivity.com",
    siteName: "Drift",
    title: "Drift - Earn Your Screen Time",
    description:
      "Block distracting apps, earn minutes back, and keep your phone from running the day.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drift - Earn Your Screen Time",
    description:
      "Block distracting apps, earn minutes back, and keep your phone from running the day.",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F7F4",
  width: "device-width",
  initialScale: 1,
};

const themeScript = `
(function(){try{var t=localStorage.getItem('drift-theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark');}}catch(e){}})();
`;

const gaScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${oswald.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <MotionProvider>
          <ScrollThread />
          <CardNav />
          <main>{children}</main>
          <Footer />
        </MotionProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {gaScript}
        </Script>
      </body>
    </html>
  );
}
