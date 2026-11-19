import Kicker from "@/components/ui/Kicker";
import BlurText from "@/components/ui/BlurText";
import Button from "@/components/ui/Button";
import Sprout from "@/components/decorative/Sprout";
import { APP_STORE_URL } from "@/lib/links";

const CTASection = () => {
  return (
    <section id="download" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="relative overflow-hidden rounded-sheet bg-paper-card border border-line shadow-soft px-7 sm:px-14 py-16 text-center">
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
            <Kicker className="justify-center mt-6">Available now</Kicker>
            <BlurText
              as="h2"
              text="Download Drift today."
              animateBy="words"
              direction="top"
              delay={110}
              className="mt-5 font-display text-4xl sm:text-5xl leading-tight text-ink-deep justify-center"
            />
            <p className="mt-5 text-lg text-ink-mid leading-relaxed">
              Set your blocked apps, add a few tasks, and make your next scroll
              require a little buy-in.
            </p>
            <div className="mt-9 max-w-md mx-auto">
              <Button as="a" href={APP_STORE_URL} size="lg" fullWidth>
                Download on the App Store
              </Button>
              <p className="mt-3 text-sm text-ink-faint">
                iOS now. Android coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
