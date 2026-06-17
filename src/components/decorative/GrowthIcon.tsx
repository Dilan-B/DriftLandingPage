import { cn } from "@/lib/cn";

interface GrowthIconProps {
  /** 0 = Seedling … 6 = Old Growth */
  stage: number;
  className?: string;
  active?: boolean;
}

/**
 * A plant that visibly grows across the seven Drift levels.
 * Higher stages add height, leaves, and a fuller canopy.
 */
const GrowthIcon = ({ stage, className, active = false }: GrowthIconProps) => {
  const stroke = active ? "var(--cta-text)" : "var(--earn-deep)";
  const fill = active ? "rgba(255,255,255,0.18)" : "var(--earn-sage-lo)";
  const soil = active ? "rgba(255,255,255,0.4)" : "var(--clay)";

  // Stem grows taller with stage.
  const stemTop = 96 - stage * 11; // 96 → 30

  return (
    <svg
      viewBox="0 0 80 110"
      fill="none"
      className={cn(className)}
      aria-hidden="true"
    >
      {/* pot / soil */}
      <path
        d="M16 100 Q40 94 64 100"
        stroke={soil}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 7"
        opacity="0.55"
      />
      {/* stem */}
      <path
        d={`M40 100 C40 ${80 - stage * 4} 40 ${stemTop + 20} 40 ${stemTop}`}
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* first pair of leaves — always present */}
      <path
        d={`M40 ${stemTop + 28} C28 ${stemTop + 26} 20 ${stemTop + 16} 19 ${stemTop + 4} C32 ${stemTop + 4} 40 ${stemTop + 14} 40 ${stemTop + 28} Z`}
        fill={fill}
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {stage >= 1 && (
        <path
          d={`M40 ${stemTop + 20} C52 ${stemTop + 18} 60 ${stemTop + 8} 61 ${stemTop - 4} C48 ${stemTop - 4} 40 ${stemTop + 6} 40 ${stemTop + 20} Z`}
          fill={fill}
          stroke={stroke}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      )}

      {/* canopy crown for the upper levels */}
      {stage >= 3 && (
        <circle
          cx="40"
          cy={stemTop - 2}
          r={6 + stage * 2}
          fill={fill}
          stroke={stroke}
          strokeWidth="2.4"
        />
      )}
      {stage >= 5 && (
        <>
          <circle
            cx={40 - (8 + stage)}
            cy={stemTop + 4}
            r={5 + stage}
            fill={fill}
            stroke={stroke}
            strokeWidth="2.2"
          />
          <circle
            cx={40 + (8 + stage)}
            cy={stemTop + 4}
            r={5 + stage}
            fill={fill}
            stroke={stroke}
            strokeWidth="2.2"
          />
        </>
      )}
    </svg>
  );
};

export default GrowthIcon;
