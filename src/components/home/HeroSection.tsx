import Kicker from "@/components/ui/Kicker";
import BlurText from "@/components/ui/BlurText";
import WaitlistForm from "@/components/ui/WaitlistForm";
import PhoneMockup from "@/components/decorative/PhoneMockup";
import Sprout from "@/components/decorative/Sprout";
import DotField from "@/components/decorative/DotField";

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

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 relative">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          {/* copy */}
          <div>
            <div className="reveal reveal-1">
              <Kicker>Now in private beta</Kicker>
            </div>
            <h1 className="mt-5 font-display text-[2.75rem] sm:text-6xl leading-[1.04] text-ink-deep">
              <BlurText
                as="span"
                text="Earn your"
                animateBy="words"
                direction="top"
                delay={130}
              />
              <BlurText
                as="span"
                text="screen time."
                animateBy="words"
                direction="top"
                delay={130}
              />
            </h1>
            <p className="reveal reveal-3 mt-6 text-lg text-ink-mid leading-relaxed max-w-md">
              Drift blocks the apps that pull you in, then hands the time back
              only when you complete real tasks. Gentle accountability that
              helps you grow — never shames you.
            </p>

            <div className="reveal reveal-4 mt-8 max-w-md relative">
              <WaitlistForm />
              <p className="mt-3 text-sm text-ink-faint">
                Free to join the beta. No spam, just your invite.
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
