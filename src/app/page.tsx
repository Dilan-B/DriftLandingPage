import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import GrowthLadderSection from "@/components/home/GrowthLadderSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import ScrollSection from "@/components/ui/ScrollSection";

export const metadata: Metadata = {
  title: "Drift – Stop Mindless Scrolling",
  description:
    "Trade tasks for screen time. Replace mindless scrolling with real things to do.",
  openGraph: {
    title: "Drift – Stop Mindless Scrolling",
    description:
      "Trade tasks for screen time. Replace mindless scrolling with real things to do.",
    url: "https://joindrift.app",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero stays un-wrapped so it paints instantly above the fold */}
      <HeroSection />
      <ScrollSection>
        <ProblemSection />
      </ScrollSection>
      <ScrollSection>
        <HowItWorksSection />
      </ScrollSection>
      <ScrollSection>
        <FeaturesSection />
      </ScrollSection>
      <ScrollSection>
        <GrowthLadderSection />
      </ScrollSection>
      <ScrollSection>
        <PricingSection />
      </ScrollSection>
      <ScrollSection>
        <FAQSection />
      </ScrollSection>
      <ScrollSection>
        <CTASection />
      </ScrollSection>
    </>
  );
}
