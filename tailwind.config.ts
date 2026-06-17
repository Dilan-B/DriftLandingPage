import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cream / green-neutral surfaces (never beige/brown)
        paper: {
          warm: "var(--paper-warm)",
          card: "var(--paper-card)",
          cream: "var(--paper-cream)",
          sand: "var(--paper-sand)",
        },
        // Text / ink
        ink: {
          void: "var(--ink-void)",
          deep: "var(--ink-deep)",
          mid: "var(--ink-mid)",
          faint: "var(--ink-faint)",
        },
        // Brand greens
        earn: {
          deep: "var(--earn-deep)",
          "deep-hi": "var(--earn-deep-hi)",
          sage: "var(--earn-sage)",
          "sage-lo": "var(--earn-sage-lo)",
          "sage-dot": "var(--earn-sage-dot)",
          terra: "var(--earn-terra)",
          "terra-lo": "var(--earn-terra-lo)",
          green: "var(--earn-green)",
          "green-lo": "var(--earn-green-lo)",
          blue: "var(--earn-blue)",
          "blue-lo": "var(--earn-blue-lo)",
        },
        // Warm earth — GRAPHIC ACCENTS ONLY
        clay: {
          DEFAULT: "var(--clay)",
          lo: "var(--clay-lo)",
        },
        bark: {
          DEFAULT: "var(--bark)",
          lo: "var(--bark-lo)",
        },
        // Hairlines / dashed outlines
        line: {
          DEFAULT: "var(--ink-border)",
          hair: "var(--ink-hairline)",
          dash: "var(--paper-dash)",
        },
        // Task category accents
        cat: {
          work: "#3A7AB8",
          physical: "#2FAB72",
          outdoor: "#3DA870",
          learning: "#7B6EC8",
          life: "#5AB4D4",
          social: "#3A9BB5",
        },
        // CTA pairing (flips in dark)
        cta: {
          bg: "var(--cta-bg)",
          "bg-hi": "var(--cta-bg-hi)",
          text: "var(--cta-text)",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        wordmark: ["var(--font-oswald)", "sans-serif"],
        kicker: ["var(--font-orbitron)", "sans-serif"],
      },
      borderRadius: {
        chip: "10px",
        btn: "13px",
        card: "18px",
        sheet: "22px",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        lift: "var(--shadow-lift)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        grow: {
          "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease forwards",
        riseIn: "riseIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        sway: "sway 6s ease-in-out infinite",
        grow: "grow 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
