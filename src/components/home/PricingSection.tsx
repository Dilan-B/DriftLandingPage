import Link from "next/link";
import Kicker from "@/components/ui/Kicker";
import BlurText from "@/components/ui/BlurText";
import TiltCard from "@/components/ui/TiltCard";
import { APP_STORE_URL } from "@/lib/links";

const PricingSection = () => {
  // Two paid plans, no free tier.
  const personal = [
    "Block apps with iOS Screen Time",
    "Earn time with everyday tasks",
    "Difficulty tiers & live countdown",
    "Seedling to Old Growth levels",
    "Recurring tasks & routines",
    "Blocked hours (bedtime, deep work)",
    "Advanced streaks & XP insights",
  ];
  const family = [
    "Link up to 5 kids' devices",
    "Send tasks straight to their phone",
    "Kids finish the task and tap Done",
    "You approve — their screen time unlocks",
  ];

  return (
    <section
      id="pricing"
      className="dot-transition-panel dot-transition-panel-below scroll-mt-20"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="max-w-2xl">
          <Kicker>Pricing</Kicker>
          <BlurText
            as="h2"
            text="One person or the whole house."
            animateBy="words"
            direction="top"
            delay={90}
            className="mt-5 font-display text-4xl sm:text-5xl leading-tight text-ink-deep"
          />
          <p className="mt-5 text-lg text-ink-mid leading-relaxed">
            No free tier. Go solo with Personal, or set up parent-and-kids
            accountability across separate devices with Family.
          </p>
        </div>

        <div className="mobile-card-rail mt-14 md:grid md:grid-cols-2 md:gap-6 max-w-4xl">
          {/* Personal — highlighted deep green, with tactile 3D tilt */}
          <TiltCard radius={18} glowColor="rgba(127, 190, 150, 0.55)" featured>
            <div className="relative h-full rounded-card bg-earn-deep text-cta-text shadow-lift p-8 flex flex-col overflow-hidden">
              <div className="absolute right-5 top-5">
                <span className="inline-flex items-center rounded-full bg-cta-text/15 px-3 py-1.5 font-kicker uppercase tracking-[0.14em] text-[10px] text-cta-text">
                  Most popular
                </span>
              </div>
              <h3 className="font-display text-2xl">Personal</h3>
              <p className="mt-1 text-cta-text/70">For one person, all in.</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-[14px] border border-cta-text/15 bg-cta-text/8 p-4">
                  <p className="font-kicker text-[10px] uppercase tracking-[0.14em] text-cta-text/60">
                    Monthly
                  </p>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="font-display text-4xl">$4.99</span>
                    <span className="text-sm text-cta-text/70">/mo</span>
                  </div>
                </div>
                <div className="rounded-[14px] border border-cta-text/25 bg-cta-text/14 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-kicker text-[10px] uppercase tracking-[0.14em] text-cta-text/60">
                      Yearly
                    </p>
                    <span className="rounded-full bg-cta-text/20 px-2 py-0.5 text-[9px] font-medium text-cta-text">
                      Save 50%
                    </span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="font-display text-4xl">$29.99</span>
                    <span className="text-sm text-cta-text/70">/yr</span>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-cta-text/70">
                Choose monthly or yearly inside the app.
              </p>
              <ul className="mt-7 space-y-3 flex-1">
                {personal.map((item) => (
                  <FeatureLine key={item} light>
                    {item}
                  </FeatureLine>
                ))}
              </ul>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 rounded-btn bg-cta-text text-earn-deep font-medium px-6 py-3.5 text-[15px] text-center hover:-translate-y-[1px] active:scale-[0.98] transition-all"
              >
                Download Drift
              </a>
            </div>
          </TiltCard>

          {/* Family — clean paper card with a subtle tilt */}
          <TiltCard radius={18} glowColor="rgba(127, 190, 150, 0.35)">
            <div className="relative h-full rounded-card bg-paper-card border border-line shadow-soft p-8 flex flex-col">
              <div className="absolute right-5 top-5">
                <span className="inline-flex items-center rounded-full bg-earn-sage-lo px-3 py-1.5 font-kicker uppercase tracking-[0.14em] text-[10px] text-earn-sage">
                  Parents & kids
                </span>
              </div>
              <h3 className="font-display text-2xl text-ink-deep">Family</h3>
              <p className="mt-1 text-ink-mid">Parent-and-kids, own devices.</p>
              <div className="mt-6 flex items-baseline gap-1 flex-wrap">
                <span className="text-ink-mid text-lg">From</span>
                <span className="font-display text-5xl text-ink-deep">$7.99</span>
                <span className="text-ink-mid">/mo</span>
              </div>
              <p className="mt-2 text-sm text-ink-mid">
                $7.99 for one child, up to $19.99 for five.
              </p>
              <ul className="mt-7 space-y-3 flex-1">
                {family.map((item) => (
                  <FeatureLine key={item}>{item}</FeatureLine>
                ))}
              </ul>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 rounded-btn bg-cta-bg text-cta-text font-medium px-6 py-3.5 text-[15px] text-center hover:-translate-y-[1px] active:scale-[0.98] transition-all"
              >
                Download Drift
              </a>
            </div>
          </TiltCard>
        </div>

        <p className="mt-10 text-center text-ink-mid">
          Bringing Drift to a team, school or audience?{" "}
          <Link
            href="/partners"
            className="text-earn-deep font-medium hover:text-earn-deep-hi"
          >
            See partner options &rarr;
          </Link>
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
