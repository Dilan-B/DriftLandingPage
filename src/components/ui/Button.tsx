import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      as = "button",
      href,
      onClick,
      disabled,
      className,
      type = "button",
    },
    ref
  ) => {
    const base =
      "font-body font-medium rounded-btn inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200 ease-out active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      // Primary action is ALWAYS deep forest green with off-white text.
      primary:
        "bg-cta-bg text-cta-text shadow-soft hover:bg-cta-bg-hi hover:-translate-y-[1px]",
      // Soft sage pill.
      secondary:
        "bg-earn-sage-lo text-earn-sage hover:brightness-[0.97]",
      // Quiet outline.
      ghost:
        "border border-line text-ink-deep hover:bg-paper-sand",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2.5 text-[15px]",
      lg: "px-7 py-3.5 text-base",
    };

    const classes = cn(
      base,
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className
    );

    if (as === "a" && href) {
      // next/link for internal routes only; plain anchor for external /
      // mailto / unresolved placeholders (avoids dynamic-href errors).
      const isInternal = href.startsWith("/") && !href.includes("[");
      if (isInternal) {
        return (
          <Link href={href} className={classes} ref={ref as never}>
            {children}
          </Link>
        );
      }
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          ref={ref as never}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        className={classes}
        onClick={onClick}
        disabled={disabled}
        type={type}
        ref={ref as never}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
