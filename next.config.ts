import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static site in ./out — upload that folder to any host
  // (Bluehost public_html, Netlify, GitHub Pages, etc.). No Node server needed.
  output: "export",
  // Apache-friendly: /privacy → /privacy/index.html
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // next/image optimization needs a server; static export serves raw images
    unoptimized: true,
  },
};

export default nextConfig;
