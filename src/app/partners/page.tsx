import type { Metadata } from "next";
import Kicker from "@/components/ui/Kicker";
import Reveal from "@/components/ui/Reveal";
import FAQItem from "@/components/ui/FAQItem";
import PartnerForm from "@/components/ui/PartnerForm";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Bring Drift to your team, community or audience — free for marketing partners, custom plans for organizations.",
};

const tracks = [
  {
    name: "Marketing partner",
    badge: "Free",
    badgeClass: "bg-earn-sage-lo text-earn-sage",
    blurb: "Share Drift with your audience and your people get it free.",
    examples: "Creators, newsletters, communities",
    price: "Free",
    cta: "Become a partner",
  },
  {
    name: "Teams & organizations",
    badge: "Paid",
    badgeClass: "bg-earn-terra-lo text-earn-terra",
    blurb: "Give your staff, students or members Drift.",
    examples: "Companies, schools, clinics, clubs",
    price: "Custom — tell us your size.",
    cta: "Ask about your team",
  },
];

const steps = [
  "Tell us about your group",
  "We reply within a few days with a plan",
  "Your people redeem access codes in the App Store",
];

const faqs = [
  {
    question: "How do people redeem?",
    answer:
      "Each person gets an access code and redeems it in the App Store. Drift is on iPhone only.",
  },
  {
    question: "How long does free access last?",
    answer: "It's agreed with each partner.",
  },
  {
    question: "Is there a minimum size?",
    answer: "No. Tell us about your group and we'll take it from there.",
  },
];

const PartnersPage = () => {
  return (
    <div className="bg-paper-warm">
      <header className="bg-paper-cream border-b border-line">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-12 text-center">
          <Kicker className="justify-center">Partners</Kicker>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl text-ink-deep">
            Bring Drift to your people.
          </h1>
          <p className="mt-4 text-lg text-ink-mid max-w-xl mx-auto leading-relaxed">
            Promote Drift to your audience and they get it free, or set up
            access for your team, school or club with a plan that fits.
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 space-y-20">
        {/* tracks */}
        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-card bg-paper-card border border-line shadow-soft p-8 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-display text-2xl text-ink-deep">
                    {t.name}
                  </h2>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1.5 font-kicker uppercase tracking-[0.14em] text-[10px] ${t.badgeClass}`}
                  >
                    {t.badge}
                  </span>
                </div>
                <p className="mt-3 text-ink-mid leading-relaxed">{t.blurb}</p>
                <p className="mt-5 font-kicker uppercase text-[10px] tracking-[0.16em] text-ink-faint">
                  Good for
                </p>
                <p className="mt-1 text-ink-deep">{t.examples}</p>
                <p className="mt-5 font-display text-xl text-ink-deep flex-1">
                  {t.price}
                </p>
                <a
                  href="#inquire"
                  className="mt-6 rounded-btn bg-cta-bg text-cta-text font-medium px-6 py-3.5 text-[15px] text-center hover:-translate-y-[1px] active:scale-[0.98] transition-all"
                >
                  {t.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* how it works */}
        <section>
          <Kicker>How it works</Kicker>
          <ol className="mt-6 grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <li
                key={s}
                className="rounded-card bg-paper-sand border border-line p-6"
              >
                <span className="font-display text-3xl text-earn-deep">
                  {i + 1}
                </span>
                <p className="mt-2 text-ink-deep">{s}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* inquiry */}
        <section id="inquire" className="scroll-mt-20">
          <div className="rounded-card bg-paper-card border border-line shadow-soft p-6 sm:p-8 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl text-ink-deep">
              Tell us about your group
            </h2>
            <p className="mt-2 mb-6 text-ink-mid">
              A few details and we&apos;ll reply with next steps.
            </p>
            <PartnerForm />
          </div>
        </section>

        {/* faq */}
        <section className="max-w-2xl mx-auto">
          <Kicker>Questions</Kicker>
          <div className="mt-4 rounded-card bg-paper-card border border-line px-6">
            {faqs.map((f) => (
              <FAQItem key={f.question} {...f} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartnersPage;
