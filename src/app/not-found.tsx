import type { Metadata } from "next";
import Link from "next/link";

// Overrides the root "index, follow" so 404s carry a single, unambiguous
// noindex signal.
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-40 pb-24 text-center">
      <p className="font-kicker uppercase text-xs tracking-[0.16em] text-ink-faint">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl sm:text-5xl text-ink-deep">
        This page drifted off.
      </h1>
      <p className="mt-5 text-ink-mid">
        The link may be old or mistyped. Head back home or visit support.
      </p>
      <div className="mt-8 flex justify-center gap-4 text-earn-deep">
        <Link href="/" className="underline underline-offset-4">
          Home
        </Link>
        <Link href="/support/" className="underline underline-offset-4">
          Support &amp; FAQ
        </Link>
      </div>
    </section>
  );
}
