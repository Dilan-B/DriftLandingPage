import type { Metadata, Viewport } from "next";
import { manrope, newsreader, oswald } from "@/lib/fonts";
import "@/styles/globals.css";
import CardNav from "@/components/shared/CardNav";
import Footer from "@/components/shared/Footer";
import MotionProvider from "@/components/shared/MotionProvider";
import ScrollThread from "@/components/decorative/ScrollThread";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import { OG_IMAGES } from "@/lib/pageMetadata";
import { organizationSchema, websiteSchema } from "@/lib/structuredData";

const DEFAULT_TITLE = "Drift: App Blocker That Makes You Earn Screen Time";
const DEFAULT_DESCRIPTION =
  "Drift is an iPhone app blocker that locks distracting apps until you finish your tasks. Earn your screen time back and stop doomscrolling.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Drift",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "Drift",
  keywords: [
    "Drift app",
    "Drift productivity",
    "app blocker",
    "app blocker for iPhone",
    "earn screen time",
    "reduce screen time",
    "stop doomscrolling",
    "screen time app",
    "parental screen time",
    "focus app",
  ],
  authors: [{ name: "Drift", url: SITE_URL }],
  creator: "Drift",
  publisher: "Drift",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Drift",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.png"],
  },
  itunes: { appId: "6778215875" },
};

export const viewport: Viewport = {
  themeColor: "#F7F7F4",
  width: "device-width",
  initialScale: 1,
};

const themeScript = `
(function(){try{var t=localStorage.getItem('drift-theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark');}}catch(e){}})();
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

        <JsonLd data={[organizationSchema, websiteSchema]} />
      </body>
    </html>
  );
}
