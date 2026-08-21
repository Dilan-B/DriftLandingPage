import Kicker from "@/components/ui/Kicker";
import BlurText from "@/components/ui/BlurText";
import Button from "@/components/ui/Button";
import PhoneMockup from "@/components/decorative/PhoneMockup";
import Sprout from "@/components/decorative/Sprout";
import DotField from "@/components/decorative/DotField";
import { APP_STORE_URL } from "@/lib/links";

const HeroSection = () => {
  return (
    <section className="paper-grain relative overflow-hidden">
      {/* interactive dot field — recolored to Drift greens, subtle on cream */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <DotField
          dotRadius={1.6}
          dotSpacing={16}
          bulgeStrength={48}
          glowRadius={190}
          gradientFrom="rgba(31, 58, 42, 0.13)"
          gradientTo="rgba(46, 123, 82, 0.08)"
          glowColor="rgba(168, 201, 154, 0.4)"
        />
      </div>

      {/* soft radial wash + decorative watermark */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 75% 0%, var(--earn-sage-lo) 0%, transparent 55%)",
          opacity: 0.4,
        }}
      />
      <Sprout
        className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 opacity-[0.06] hidden lg:block"
        stroke="var(--clay)"
        leaf="transparent"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28 relative">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          {/* copy */}
          <div>
            <div className="reveal reveal-1">
              <Kicker>Now on the App Store</Kicker>
            </div>
            <h1 className="mt-5 font-display text-[2.75rem] sm:text-6xl leading-[1.04] text-ink-deep">
              <BlurText
                as="span"
                text="Make scrolling"
                animateBy="words"
                direction="top"
                delay={130}
              />
              <BlurText
                as="span"
                text="cost a little effort."
                animateBy="words"
                direction="top"
                delay={130}
              />
            </h1>
            <p className="reveal reveal-3 mt-6 text-lg text-ink-mid leading-relaxed max-w-md">
              Pick the apps you keep opening by accident. Drift locks them
              until you finish something you actually meant to do.
            </p>

            <div className="reveal reveal-4 mt-8 max-w-md relative">
              <Button as="a" href={APP_STORE_URL} size="lg">
                Download on the App Store
              </Button>
              <p className="mt-3 text-sm text-ink-faint">
                Available now for iPhone.
              </p>
            </div>

            <div className="reveal reveal-5 mt-10 flex items-center gap-6 text-sm text-ink-mid">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-earn-terra" />
                iOS Screen Time
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-earn-blue" />
                Android coming soon
              </span>
            </div>

            <div className="reveal reveal-6 mt-8">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper-card/70 px-4 py-2 text-sm text-ink-mid shadow-soft">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-earn-sage"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 3v6l-5 9a2 2 0 0 0 1.8 3h12.4A2 2 0 0 0 20 18l-5-9V3" />
                  <path d="M8 3h8M7 14h10" />
                </svg>
                <span>
                  The official tool in a{" "}
                  <span className="text-ink-deep font-medium">
                    Johns Hopkins
                  </span>{" "}
                  research study
                </span>
              </span>
            </div>
          </div>

          {/* mockup */}
          <div className="reveal reveal-4 flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
