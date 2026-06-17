"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Kicker from "@/components/ui/Kicker";
import BlurText from "@/components/ui/BlurText";
import GrowthIcon from "@/components/decorative/GrowthIcon";
import DotField from "@/components/decorative/DotField";
import { GROWTH_LEVELS } from "@/lib/colors";

const BLURBS = [
  "Where it all begins. The smallest start still counts.",
  "Roots taking hold. The habit finds its footing.",
  "Standing taller. A few good days become a rhythm.",
  "Branching out. Your streak starts to feel natural.",
  "Full and leafy. Focus becomes the default, not the effort.",
  "Deep and steady. The forest barely notices a storm.",
  "Ancient and unshakable. Years of small wins, grown wild.",
];

const LadderHeader = () => (
  <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full">
    <div className="max-w-2xl">
      <Kicker className="text-[color:var(--growth-muted)]">
        The growth ladder
      </Kicker>
      <BlurText
        as="h2"
        text="Watch yourself grow, level by level."
        animateBy="words"
        direction="top"
        delay={90}
        className="mt-5 font-display text-4xl sm:text-5xl leading-tight text-[color:var(--growth-text)]"
      />
      <p className="mt-5 text-lg text-[color:var(--growth-muted-strong)] leading-relaxed">
        Every task earns XP. As you stack consistent days, your plant climbs
        seven living stages - from a single Seedling to ancient Old Growth.
      </p>
    </div>
  </div>
);

const LevelCard = ({ level, i }: { level: string; i: number }) => (
  <div className="growth-level-card shrink-0 w-[78vw] sm:w-[340px] rounded-card p-7 backdrop-blur-sm">
    <div className="flex items-center justify-between">
      <span className="font-kicker uppercase text-[9px] tracking-[0.16em] text-[color:var(--growth-muted)]">
        Lv {i + 1}
      </span>
      <span className="h-2 w-2 rounded-full bg-earn-terra" />
    </div>
    <div className="mt-4 h-28 flex items-end">
      <GrowthIcon stage={i} active className="h-28 w-24" />
    </div>
    <h3 className="mt-5 font-display text-2xl text-[color:var(--growth-text)]">
      {level}
    </h3>
    <p className="mt-2 text-[color:var(--growth-muted-strong)] leading-relaxed">
      {BLURBS[i]}
    </p>
  </div>
);

const LadderBackdrop = () => (
  <>
    <div className="growth-ladder-vignette pointer-events-none absolute inset-0 z-[1]" />
    <div className="pointer-events-none absolute inset-0 opacity-90">
      <DotField
        dotRadius={2.2}
        dotSpacing={13}
        cursorRadius={420}
        bulgeStrength={54}
        glowRadius={230}
        gradientFrom="var(--growth-dot-from)"
        gradientTo="var(--growth-dot-to)"
        glowColor="var(--growth-dot-glow)"
      />
    </div>
  </>
);

const GrowthStrip = () => (
  <div className="growth-level-strip mt-14">
    {GROWTH_LEVELS.map((level, i) => (
      <div
        key={level}
        className="growth-level-tile flex flex-col items-center text-center"
      >
        <div className="relative h-24 flex items-end justify-center">
          <GrowthIcon stage={i} active className="h-24 w-20" />
        </div>
        <span className="mt-4 font-kicker uppercase text-[9px] tracking-[0.16em] text-[color:var(--growth-muted)]">
          Lv {i + 1}
        </span>
        <span className="mt-1.5 font-display text-base text-[color:var(--growth-text)]">
          {level}
        </span>
      </div>
    ))}
  </div>
);

const StaticLadder = () => (
  <section id="ladder" className="growth-ladder scroll-mt-20 relative overflow-hidden">
    <LadderBackdrop />
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 relative z-10">
      <LadderHeader />
      <GrowthStrip />
    </div>
  </section>
);

const PinnedLadder = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 40));
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section
      id="ladder"
      ref={sectionRef}
      className="growth-ladder relative"
      style={{ height: `calc(100vh + ${distance}px)` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <LadderBackdrop />
        <div className="relative z-10 pt-20 sm:pt-0">
          <LadderHeader />
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="mt-10 flex gap-6 pl-5 sm:pl-8 pr-[12vw] will-change-transform"
          >
            {GROWTH_LEVELS.map((level, i) => (
              <LevelCard key={level} level={level} i={i} />
            ))}
          </motion.div>
          <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <p className="mt-8 inline-flex items-center gap-2 text-sm text-[color:var(--growth-muted)]">
              <span className="h-px w-8 bg-[color:var(--growth-line)]" />
              Scroll to grow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const GrowthLadderSection = () => {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || reduce) return <StaticLadder />;
  return <PinnedLadder />;
};

export default GrowthLadderSection;
