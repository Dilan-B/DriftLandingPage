import React from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "sage" | "terra" | "blue" | "clay";
  className?: string;
  /** render label in uppercase Orbitron (level-badge style) */
  kicker?: boolean;
}

const Badge = ({
  children,
  variant = "sage",
  className,
  kicker = false,
}: BadgeProps) => {
  const variants = {
    sage: "bg-earn-sage-lo text-earn-sage",
    terra: "bg-earn-terra-lo text-earn-terra",
    blue: "bg-earn-blue-lo text-earn-blue",
    clay: "bg-clay-lo text-bark",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        kicker &&
          "font-kicker uppercase tracking-[0.14em] text-[10px] py-1.5",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
