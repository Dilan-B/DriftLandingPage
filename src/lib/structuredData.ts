import { APP_STORE_URL } from "./links";
import { HOME_FAQS } from "./faqs";
import { SITE_NAME, SITE_URL, SOCIAL_PROFILES } from "./site";

// schema.org JSON-LD. Only describe what is actually on the page —
// no ratings, reviews, or claims we can't back up.

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  alternateName: "Drift Productivity",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  sameAs: SOCIAL_PROFILES,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE_ID,
  name: SITE_NAME,
  alternateName: "Drift Productivity",
  url: SITE_URL,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-US",
};

export const appSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": APP_ID,
  name: "Drift: Earn Your Screen Time",
  alternateName: ["Drift", "Drift Productivity"],
  description:
    "Drift is an iPhone app blocker that locks distracting apps until you finish tasks you choose, so you earn your screen time back. Includes a Family plan for parents to assign tasks and approve kids' screen time.",
  url: SITE_URL,
  downloadUrl: APP_STORE_URL,
  installUrl: APP_STORE_URL,
  operatingSystem: "iOS",
  applicationCategory: "LifestyleApplication",
  applicationSubCategory: "Productivity",
  image: `${SITE_URL}/og-image.png`,
  publisher: { "@id": ORG_ID },
  offers: [
    {
      "@type": "Offer",
      name: "Personal (monthly)",
      price: "4.99",
      priceCurrency: "USD",
      url: APP_STORE_URL,
    },
    {
      "@type": "Offer",
      name: "Personal (yearly)",
      price: "29.99",
      priceCurrency: "USD",
      url: APP_STORE_URL,
    },
    {
      "@type": "Offer",
      name: "Family (one child, monthly)",
      price: "7.99",
      priceCurrency: "USD",
      url: APP_STORE_URL,
    },
  ],
};

export const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export const breadcrumbSchema = (name: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name, item: url },
  ],
});
