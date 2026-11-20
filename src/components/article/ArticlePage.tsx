import Link from "next/link";
import Kicker from "@/components/ui/Kicker";
import FAQItem from "@/components/ui/FAQItem";
import JsonLd from "@/components/seo/JsonLd";
import { APP_STORE_URL } from "@/lib/links";
import { canonical } from "@/lib/site";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/structuredData";
import type { Article, Block } from "@/content/types";

// Shared template for guides and comparison pages. Content lives in
// src/content/*.ts; this file only decides how it looks and which
// structured data it emits (Article, BreadcrumbList, FAQPage), all of which
// mirror the visible page.

const INLINE = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;

const Inline = ({ text }: { text: string }) => (
  <>
    {text.split(INLINE).map((part, i) => {
      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const [, label, href] = link;
        const cls =
          "text-earn-deep font-medium underline decoration-earn-sage/40 underline-offset-2 hover:text-earn-deep-hi";
        return href.startsWith("/") ? (
          <Link key={i} href={href} className={cls}>
            {label}
          </Link>
        ) : (
          <a key={i} href={href} className={cls} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        );
      }
      const bold = part.match(/^\*\*([^*]+)\*\*$/);
      if (bold) {
        return (
          <strong key={i} className="font-semibold text-ink-deep">
            {bold[1]}
          </strong>
        );
      }
      return part;
    })}
  </>
);

const BlockView = ({ block }: { block: Block }) => {
  switch (block.type) {
    case "p":
      return (
        <p className="text-[17px] leading-relaxed text-ink-mid">
          <Inline text={block.text} />
        </p>
      );
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag
          className={`space-y-2.5 pl-5 text-[17px] leading-relaxed text-ink-mid ${
            block.ordered ? "list-decimal" : "list-disc marker:text-earn-terra"
          }`}
        >
          {block.items.map((item) => (
            <li key={item} className="pl-1">
              <Inline text={item} />
            </li>
          ))}
        </Tag>
      );
    }
    case "steps":
      return (
        <ol className="grid sm:grid-cols-2 gap-4">
          {block.items.map((s, i) => (
            <li
              key={s.title}
              className="rounded-card bg-paper-sand border border-line p-5"
            >
              <span className="font-display text-2xl text-earn-deep">
                {i + 1}
              </span>
              <p className="mt-1 font-medium text-ink-deep">{s.title}</p>
              <p className="mt-1.5 text-ink-mid leading-relaxed">
                <Inline text={s.text} />
              </p>
            </li>
          ))}
        </ol>
      );
    case "note":
      return (
        <p className="rounded-card border border-line bg-earn-sage-lo/60 px-5 py-4 text-ink-mid leading-relaxed">
          <Inline text={block.text} />
        </p>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-card border border-line bg-paper-card">
          <table className="w-full min-w-[560px] text-left text-[15px]">
            <caption className="sr-only">{block.caption}</caption>
            <thead>
              <tr className="border-b border-line">
                {block.columns.map((c, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="px-4 py-3 font-kicker uppercase text-[10px] tracking-[0.14em] text-ink-faint"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map(([label, a, b]) => (
                <tr key={label} className="border-b border-line last:border-0 align-top">
                  <th scope="row" className="px-4 py-3 font-medium text-ink-deep">
                    {label}
                  </th>
                  <td className="px-4 py-3 text-ink-mid">{a}</td>
                  <td className="px-4 py-3 text-ink-mid">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
};

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

const ArticlePage = ({ article }: { article: Article }) => {
  const url = canonical(article.path);
  const schemas = [
    articleSchema({
      headline: article.h1,
      description: article.description,
      url,
      published: article.published,
      updated: article.updated,
    }),
    // No /guides or /vs index page exists yet, so the trail is Home → page.
    breadcrumbSchema([{ name: article.h1, url }]),
    faqSchema(article.faqs),
  ];

  return (
    <article className="bg-paper-warm">
      <JsonLd data={schemas} />

      <header className="bg-paper-cream border-b border-line">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-28 pb-12">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-faint">
            <Link href="/" className="hover:text-earn-deep">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span>{article.section}</span>
          </nav>
          <Kicker className="mt-6">{article.kicker}</Kicker>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-tight text-ink-deep">
            {article.h1}
          </h1>
          <p className="mt-5 text-lg text-ink-mid leading-relaxed">
            {article.intro}
          </p>
          <p className="mt-6 text-sm text-ink-faint">
            Updated{" "}
            <time dateTime={article.updated}>{formatDate(article.updated)}</time>
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14">
        {article.sections.length > 3 && (
          <nav
            aria-label="On this page"
            className="mb-14 rounded-card border border-line bg-paper-card px-6 py-5"
          >
            <p className="font-kicker uppercase text-[10px] tracking-[0.16em] text-ink-faint">
              On this page
            </p>
            <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
              {article.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-[15px] text-ink-mid hover:text-earn-deep"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="space-y-14">
          {article.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl text-ink-deep">
                {s.heading}
              </h2>
              <div className="mt-5 space-y-5">
                {s.blocks.map((b, i) => (
                  <BlockView key={i} block={b} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="mt-16 rounded-card bg-earn-deep text-cta-text p-8 sm:p-10">
          <h2 className="font-display text-2xl sm:text-3xl">
            {article.cta.heading}
          </h2>
          <p className="mt-3 text-cta-text/80 leading-relaxed">
            {article.cta.text}
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-btn bg-cta-text text-earn-deep font-medium px-6 py-3.5 text-[15px] hover:-translate-y-[1px] active:scale-[0.98] transition-all"
          >
            Download Drift for iPhone
          </a>
        </aside>

        <section className="mt-16">
          <Kicker>Questions</Kicker>
          <h2 className="mt-4 font-display text-2xl text-ink-deep">
            Frequently asked
          </h2>
          <div className="mt-4 rounded-card bg-paper-card border border-line px-6">
            {article.faqs.map((f) => (
              <FAQItem key={f.question} {...f} />
            ))}
          </div>
        </section>

        <nav aria-label="Related" className="mt-14">
          <p className="font-kicker uppercase text-[10px] tracking-[0.16em] text-ink-faint">
            Keep reading
          </p>
          <ul className="mt-3 space-y-2">
            {article.related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="text-earn-deep font-medium hover:text-earn-deep-hi"
                >
                  {r.label} &rarr;
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </article>
  );
};

export default ArticlePage;
