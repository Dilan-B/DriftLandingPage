"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface WaitlistFormProps {
  className?: string;
  /** stack vertically (used in the closing CTA panel) */
  stacked?: boolean;
}

const WaitlistForm = ({ className, stacked = false }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus("err");
      return;
    }
    // Non-functional placeholder — wire to your provider later.
    setStatus("ok");
    setEmail("");
  };

  if (status === "ok") {
    return (
      <div
        className={cn(
          "rounded-btn bg-earn-sage-lo border border-line px-5 py-4 text-earn-sage text-[15px]",
          className
        )}
      >
        You're on the list 🌱 We'll email you when your spot opens.
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className={cn(
        "w-full",
        stacked ? "flex flex-col gap-3" : "flex flex-col sm:flex-row gap-3",
        className
      )}
      noValidate
    >
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "err") setStatus("idle");
        }}
        placeholder="you@example.com"
        className={cn(
          "flex-1 rounded-btn bg-paper-card border px-4 py-3.5 text-[15px] text-ink-deep placeholder:text-ink-faint transition-colors focus:outline-none",
          status === "err"
            ? "border-clay focus:border-clay"
            : "border-line focus:border-earn-sage"
        )}
        aria-invalid={status === "err"}
      />
      <button
        type="submit"
        className="rounded-btn bg-cta-bg text-cta-text font-medium px-6 py-3.5 text-[15px] shadow-soft hover:bg-cta-bg-hi hover:-translate-y-[1px] active:scale-[0.98] transition-all"
      >
        Get early access
      </button>
      {status === "err" && (
        <p className="text-sm text-clay sm:absolute sm:-bottom-6">
          Please enter a valid email.
        </p>
      )}
    </form>
  );
};

export default WaitlistForm;
