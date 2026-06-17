import Kicker from "@/components/ui/Kicker";
import BlurText from "@/components/ui/BlurText";
import GrowthIcon from "@/components/decorative/GrowthIcon";
import DotField from "@/components/decorative/DotField";
import { GROWTH_LEVELS } from "@/lib/colors";

const GrowthLadderSection = () => {
  return (
    <section
      id="ladder"
      className="bg-earn-deep text-cta-text scroll-mt-20 relative overflow-hidden"
    >
      {/* soft gradient blends so the deep-green panel melts into the
          cream sections above and below instead of hard-cutting */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-28 z-[1]"
        style={{
          background: "linear-gradient(to bottom, var(--paper-warm), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 z-[1]"
        style={{
          background: "linear-gradient(to top, var(--paper-warm), transparent)",
        }}
      />

      {/* interactive dot field — glowing growth field on the deep-green panel */}
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <DotField
          dotRadius={1.7}
          dotSpacing={18}
          bulgeStrength={62}
          glowRadius={210}
          gradientFrom="rgba(168, 201, 154, 0.45)"
          gradientTo="rgba(127, 190, 150, 0.16)"
          glowColor="rgba(200, 224, 180, 0.28)"
        />
      </div>

      {/* faint growth-ring watermark */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-cta-text/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-72 w-72 rounded-full border border-cta-text/10"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 relative z-10">
        <div className="max-w-2xl">
          <Kicker className="text-cta-text/70">The growth ladder</Kicker>
          <BlurText
            as="h2"
            text="Watch yourself grow, level by level."
            animateBy="words"
            direction="top"
            delay={90}
            className="mt-5 font-display text-4xl sm:text-5xl leading-tight"
          />
          <p className="mt-5 text-lg text-cta-text/75 leading-relaxed">
            Every task earns XP. As you stack consistent days, your plant climbs
            seven living stages — from a single Seedling to ancient Old Growth.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-10">
          {GROWTH_LEVELS.map((level, i) => (
            <div key={level} className="flex flex-col items-center text-center">
              <div className="relative h-24 flex items-end justify-center">
                <GrowthIcon stage={i} active className="h-24 w-20" />
              </div>
              <span className="mt-4 font-kicker uppercase text-[9px] tracking-[0.16em] text-cta-text/60">
                Lv {i + 1}
              </span>
              <span className="mt-1.5 font-display text-base text-cta-text">
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthLadderSection;
