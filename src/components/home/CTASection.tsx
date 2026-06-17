import Kicker from "@/components/ui/Kicker";
import BlurText from "@/components/ui/BlurText";
import WaitlistForm from "@/components/ui/WaitlistForm";
import Sprout from "@/components/decorative/Sprout";

const CTASection = () => {
  return (
    <section id="waitlist" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="relative overflow-hidden rounded-sheet bg-paper-card border border-line shadow-soft px-7 sm:px-14 py-16 text-center">
          {/* decorative sprouts */}
          <Sprout
            className="pointer-events-none absolute -left-6 -bottom-6 h-44 w-44 opacity-[0.07]"
            stroke="var(--clay)"
            leaf="transparent"
          />
          <Sprout
            className="pointer-events-none absolute -right-6 -top-10 h-40 w-40 opacity-[0.06] rotate-12"
            stroke="var(--bark)"
            leaf="transparent"
          />

          <div className="relative max-w-xl mx-auto">
            <div className="flex justify-center">
              <Sprout className="h-16 w-16 animate-sway" />
            </div>
            <Kicker className="justify-center mt-6">Private beta</Kicker>
            <BlurText
              as="h2"
              text="Plant your first seed."
              animateBy="words"
              direction="top"
              delay={110}
              className="mt-5 font-display text-4xl sm:text-5xl leading-tight text-ink-deep justify-center"
            />
            <p className="mt-5 text-lg text-ink-mid leading-relaxed">
              Join the Drift early-access list and be among the first to trade
              mindless scrolling for something that grows.
            </p>
            <div className="mt-9 max-w-md mx-auto">
              <WaitlistForm stacked />
              <p className="mt-3 text-sm text-ink-faint">
                iOS now · Android coming soon · No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
