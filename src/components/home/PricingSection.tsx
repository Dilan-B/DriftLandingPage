import Link from "next/link";
import Kicker from "@/components/ui/Kicker";
import BlurText from "@/components/ui/BlurText";
import Button from "@/components/ui/Button";

const PricingSection = () => {
  const free = [
    "Block apps with iOS Screen Time",
    "Earn time with everyday tasks",
    "Difficulty tiers & live countdown",
    "Seedling → Old Growth levels",
  ];
  const pro = [
    "Everything in Free",
    "Recurring tasks & routines",
    "Blocked hours (bedtime, deep work)",
    "Advanced streaks & XP insights",
    "Priority support",
  ];

  return (
    <section id="pricing" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="max-w-2xl">
          <Kicker>Pricing</Kicker>
          <BlurText
            as="h2"
            text="Start free. Grow into Pro."
            animateBy="words"
            direction="top"
            delay={90}
            className="mt-5 font-display text-4xl sm:text-5xl leading-tight text-ink-deep"
          />
          <p className="mt-5 text-lg text-ink-mid leading-relaxed">
            Beta pricing — final numbers may change before launch.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl">
          {/* Free */}
          <div className="rounded-card bg-paper-card border border-line shadow-soft p-8 flex flex-col">
            <h3 className="font-display text-2xl text-ink-deep">Free</h3>
            <p className="mt-1 text-ink-mid">For building the habit.</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-5xl text-ink-deep">$0</span>
              <span className="text-ink-mid">/forever</span>
            </div>
            <ul className="mt-7 space-y-3 flex-1">
              {free.map((item) => (
                <FeatureLine key={item}>{item}</FeatureLine>
              ))}
            </ul>
            <Button
              as="a"
              href="/#waitlist"
              variant="ghost"
              size="lg"
              fullWidth
              className="mt-8"
            >
              Join the beta
            </Button>
          </div>

          {/* Pro — highlighted deep green */}
          <div className="relative rounded-card bg-earn-deep text-cta-text shadow-lift p-8 flex flex-col overflow-hidden">
            <div className="absolute right-5 top-5">
              <span className="inline-flex items-center rounded-full bg-cta-text/15 px-3 py-1.5 font-kicker uppercase tracking-[0.14em] text-[10px] text-cta-text">
                Most popular
              </span>
            </div>
            <h3 className="font-display text-2xl">Pro</h3>
            <p className="mt-1 text-cta-text/70">For going deeper.</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-5xl">$4.99</span>
              <span className="text-cta-text/70">/month</span>
            </div>
            <ul className="mt-7 space-y-3 flex-1">
              {pro.map((item) => (
                <FeatureLine key={item} light>
                  {item}
                </FeatureLine>
              ))}
            </ul>
            <Link
              href="/#waitlist"
              className="mt-8 rounded-btn bg-cta-text text-earn-deep font-medium px-6 py-3.5 text-[15px] text-center hover:-translate-y-[1px] active:scale-[0.98] transition-all"
            >
              Get early access to Pro
            </Link>
          </div>
        </div>
        <p className="mt-6 text-sm text-ink-faint max-w-4xl">
          * Placeholder pricing and feature split — edit before launch.
        </p>
      </div>
    </section>
  );
};

const FeatureLine = ({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) => (
  <li className="flex items-start gap-3">
    <svg
      className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
        light ? "text-cta-text" : "text-earn-terra"
      }`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        className={light ? "fill-cta-text/15" : "fill-earn-terra-lo"}
      />
      <path
        d="M6 10l2.5 2.5L14 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className={light ? "text-cta-text/90" : "text-ink-mid"}>
      {children}
    </span>
  </li>
);

export default PricingSection;
