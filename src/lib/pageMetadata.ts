import type { Metadata } from "next";
import { canonical } from "./site";

export const OG_IMAGES = [
  {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Drift — the iPhone app blocker that makes you earn your screen time",
  },
];

/**
 * Metadata for an interior page: unique title/description, a self-referencing
 * canonical, and matching Open Graph / Twitter fields. Every page shares
 * public/og-image.png.
 */
export const pageMetadata = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata => {
  const url = canonical(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Drift",
      locale: "en_US",
      title: `${title} | Drift`,
      description,
      url,
      images: OG_IMAGES,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Drift`,
      description,
      images: ["/og-image.png"],
    },
  };
};
