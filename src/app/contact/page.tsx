import type { Metadata } from "next";
import Link from "next/link";
import Kicker from "@/components/ui/Kicker";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Drift team.",
};

const ContactPage = () => {
  return (
    <div className="bg-paper-warm">
      <header className="bg-paper-cream border-b border-line">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-12 text-center">
          <Kicker className="justify-center">We&apos;re listening</Kicker>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl text-ink-deep">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-ink-mid max-w-xl mx-auto leading-relaxed">
            Questions, feedback, or a verification you&apos;d like to appeal —
            we&apos;d love to hear from you.
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          {/* info */}
          <div className="space-y-6">
            <div className="rounded-card bg-paper-card border border-line shadow-soft p-6">
              <p className="font-kicker uppercase text-[10px] tracking-[0.16em] text-ink-faint">
                Email
              </p>
              <a
                href="mailto:support@driftproductivity.com"
                className="mt-2 block text-earn-deep font-medium hover:text-earn-deep-hi break-all"
              >
                support@driftproductivity.com
              </a>
            </div>

            <div className="rounded-card bg-paper-card border border-line shadow-soft p-6">
              <p className="font-kicker uppercase text-[10px] tracking-[0.16em] text-ink-faint">
                Response time
              </p>
              <p className="mt-2 text-ink-mid">
                We typically reply within{" "}
                <span className="text-ink-deep font-medium">24–48 hours</span>.
              </p>
            </div>

            <div className="rounded-card bg-paper-sand border border-line p-6">
              <p className="font-kicker uppercase text-[10px] tracking-[0.16em] text-ink-faint mb-3">
                Quick links
              </p>
              <ul className="space-y-2">
                {[
                  { href: "/support", label: "Support & FAQ" },
                  { href: "/privacy", label: "Privacy Policy" },
                  { href: "/terms", label: "Terms of Service" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-ink-mid hover:text-earn-deep transition-colors"
                    >
                      {l.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* form */}
          <div className="rounded-card bg-paper-card border border-line shadow-soft p-7 sm:p-8">
            <h2 className="font-display text-2xl text-ink-deep mb-6">
              Send a message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
