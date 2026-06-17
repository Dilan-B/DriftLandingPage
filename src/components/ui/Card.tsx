import React from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  /** flat sand inset rather than a raised white card */
  inset?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, hover = false, inset = false }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-card border border-line p-6",
          inset ? "bg-paper-sand" : "bg-paper-card shadow-soft",
          hover &&
            "transition-all duration-300 ease-out hover:shadow-lift hover:-translate-y-1",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
