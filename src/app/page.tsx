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
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import { OG_IMAGES } from "@/lib/pageMetadata";
import { appSchema, homeFaqSchema } from "@/lib/structuredData";

const TITLE = "Drift: App Blocker That Makes You Earn Screen Time";
const DESCRIPTION =
  "Drift is an iPhone app blocker that locks distracting apps until you finish your tasks. Earn your screen time back, stop doomscrolling, and set family limits.";

export const metadata: Metadata = {
  // absolute: the homepage title already leads with the brand
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    images: OG_IMAGES,
  },
  twitter: { title: TITLE, description: DESCRIPTION, images: ["/og-image.png"] },
};

export default function Home() {
  return (
    <>
      <JsonLd data={[appSchema, homeFaqSchema]} />
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
      {/* Not wrapped in ScrollSection: it pins/sticks, and a transformed
          ancestor would break position: sticky. */}
      <GrowthLadderSection />
      <PricingSection />
      <ScrollSection>
        <FAQSection />
      </ScrollSection>
      <ScrollSection>
        <CTASection />
      </ScrollSection>
    </>
  );
}
