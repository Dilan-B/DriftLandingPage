// Content model for long-form pages (comparisons and guides).
//
// Inline text supports two tiny markups, rendered by ArticleBody:
//   [label](/path)   internal or external link
//   **bold**         emphasis
//
// Every claim about Drift must match what the app actually does. Claims about
// other products should be things a reader can check in that product.

import type { Faq } from "@/lib/faqs";

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "note"; text: string }
  | {
      type: "table";
      caption: string;
      columns: [string, string, string];
      rows: [string, string, string][];
    };

export interface Section {
  /** Becomes the h2 and the in-page anchor. */
  heading: string;
  id: string;
  blocks: Block[];
}

export interface Article {
  path: string;
  /** Breadcrumb middle level, e.g. "Guides" or "Compare". */
  section: string;
  /** <title> (the layout template appends " | Drift"). */
  title: string;
  description: string;
  kicker: string;
  h1: string;
  intro: string;
  published: string;
  updated: string;
  sections: Section[];
  faqs: Faq[];
  /** Closing call to action shown above the FAQ. */
  cta: { heading: string; text: string };
  related: { href: string; label: string }[];
}
