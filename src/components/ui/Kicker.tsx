import { cn } from "@/lib/cn";

interface KickerProps {
  children: React.ReactNode;
  className?: string;
  /** show a small terra dot before the label */
  dot?: boolean;
}

/**
 * Tiny uppercase Orbitron eyebrow label. The ONLY place Orbitron is used.
 */
const Kicker = ({ children, className, dot = true }: KickerProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-kicker uppercase text-[10px] tracking-[0.18em] text-earn-sage",
        className
      )}
    >
      {dot && (
        <span className="h-[5px] w-[5px] rounded-full bg-earn-terra" />
      )}
      {children}
    </span>
  );
};

export default Kicker;
