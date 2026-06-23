"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

// To collect emails in-page on a static host, create a free Formspree form
// and paste its endpoint here (e.g. "https://formspree.io/f/abcdwxyz").
// Left empty, the form falls back to opening the visitor's email client.
const FORMSPREE_ENDPOINT = "";

interface WaitlistFormProps {
  className?: string;
  /** stack vertically (used in the closing CTA panel) */
  stacked?: boolean;
}

const WaitlistForm = ({ className, stacked = false }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "ok" | "invalid" | "submitError"
  >("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    if (!valid) {
      setStatus("invalid");
      return;
    }

    setStatus("loading");

    try {
      if (FORMSPREE_ENDPOINT) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            email: trimmedEmail,
            source: "homepage-waitlist",
          }),
        });
        if (!response.ok) {
          setStatus("submitError");
          return;
        }
      } else {
        // No backend configured — open the email client as a graceful fallback.
        const subject = encodeURIComponent("Drift early access");
        const body = encodeURIComponent(
          `Please add me to the Drift waitlist: ${trimmedEmail}`
        );
        window.location.href = `mailto:driftappcontact@gmail.com?subject=${subject}&body=${body}`;
      }
    } catch {
      setStatus("submitError");
      return;
    }

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
        You're on the list. We'll email you when your spot opens.
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
          if (status === "invalid" || status === "submitError") {
            setStatus("idle");
          }
        }}
        placeholder="you@example.com"
        className={cn(
          "flex-1 rounded-btn bg-paper-card border px-4 py-3.5 text-[15px] text-ink-deep placeholder:text-ink-faint transition-colors focus:outline-none disabled:cursor-not-allowed disabled:opacity-70",
          status === "invalid" || status === "submitError"
            ? "border-clay focus:border-clay"
            : "border-line focus:border-earn-sage"
        )}
        aria-invalid={status === "invalid"}
        disabled={status === "loading"}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-btn bg-cta-bg text-cta-text font-medium px-6 py-3.5 text-[15px] shadow-soft hover:bg-cta-bg-hi hover:-translate-y-[1px] active:scale-[0.98] transition-all disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "loading" ? "Joining..." : "Get early access"}
      </button>
      {status === "invalid" && (
        <p className="text-sm text-clay sm:absolute sm:-bottom-6">
          Please enter a valid email.
        </p>
      )}
      {status === "submitError" && (
        <p className="text-sm text-clay sm:absolute sm:-bottom-6">
          That email is valid, but we could not save it yet. Try again soon.
        </p>
      )}
    </form>
  );
};

export default WaitlistForm;
