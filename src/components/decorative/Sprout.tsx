import { cn } from "@/lib/cn";

interface SproutProps {
  className?: string;
  /** stem + leaf stroke color */
  stroke?: string;
  /** soft fill behind the leaves */
  leaf?: string;
}

/**
 * The Drift sprout — two leaves rising from a single stem.
 * Used as the hero accent and section dividers. Line-art, friendly, organic.
 */
const Sprout = ({
  className,
  stroke = "var(--earn-deep)",
  leaf = "var(--earn-sage-lo)",
}: SproutProps) => {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      className={cn(className)}
      aria-hidden="true"
    >
      {/* soil line */}
      <path
        d="M18 122 Q60 114 102 122"
        stroke="var(--clay)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 9"
        opacity="0.5"
      />
      {/* stem */}
      <path
        d="M60 122 C60 100 60 78 60 50"
        stroke={stroke}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* left leaf */}
      <path
        d="M60 78 C40 76 24 62 22 40 C46 40 60 56 60 78 Z"
        fill={leaf}
        stroke={stroke}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* right leaf */}
      <path
        d="M60 64 C80 60 96 44 98 22 C74 24 60 42 60 64 Z"
        fill={leaf}
        stroke={stroke}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* leaf veins */}
      <path
        d="M60 76 C48 70 38 58 30 46"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M60 62 C70 56 80 46 88 34"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
};

export default Sprout;
