// Single source of truth for the Drift palette (light theme — primary).
// These mirror the app's theme.js tokens. Dark equivalents live in theme.css.
export const COLORS = {
  paper: {
    warm: "#F7F7F4",
    card: "#FFFFFF",
    cream: "#FBFBF9",
    sand: "#F1F2EE",
    dash: "rgba(26,40,32,0.16)",
  },
  ink: {
    void: "#0B1A11",
    deep: "#1A2820",
    mid: "#6B7A6E",
    faint: "#A8B0A8",
    border: "rgba(26,40,32,0.08)",
    hairline: "rgba(26,40,32,0.06)",
  },
  earn: {
    deep: "#1F3A2A",
    deepHi: "#2A4D38",
    sage: "#3E6B4E",
    sageLo: "#E4ECE0",
    sageDot: "#5B8A6D",
    terra: "#2D7A52",
    terraLo: "#E8F0E5",
    green: "#2D6B47",
    greenLo: "#E4ECE0",
    blue: "#5A8FA4",
    blueLo: "#E8EFF1",
  },
  clay: { base: "#B0764E", lo: "#EEE0CF" },
  bark: { base: "#8A6F58", lo: "rgba(138,111,88,0.10)" },
  category: {
    work: "#3A7AB8",
    physical: "#2FAB72",
    outdoor: "#3DA870",
    learning: "#7B6EC8",
    life: "#5AB4D4",
    social: "#3A9BB5",
  },
} as const;

// The seven growth levels, in order.
export const GROWTH_LEVELS = [
  "Seedling",
  "Sprout",
  "Sapling",
  "Grove",
  "Canopy",
  "Forest",
  "Old Growth",
] as const;
