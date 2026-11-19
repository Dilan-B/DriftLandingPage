import { APP_STORE_URL } from "./links";

// Canonical origin. Apex domain, HTTPS, no www — every other variant
// (http://, www.) should 301 here at the Cloudflare edge.
export const SITE_URL = "https://driftproductivity.com";
export const SITE_NAME = "Drift";

export const SOCIAL_PROFILES = [
  "https://www.instagram.com/drift.productivity",
  "https://www.tiktok.com/@drift_productivity",
  APP_STORE_URL,
];

/** Absolute canonical URL for a route, matching `trailingSlash: true`. */
export const canonical = (path = "/") => {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
};
