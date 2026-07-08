import Kicker from "@/components/ui/Kicker";
import Reveal from "@/components/ui/Reveal";

const FeaturesSection = () => {
  const features = [
    {
      title: "Real iOS blocking",
      body: "Drift uses Screen Time, not a fake overlay. The apps you pick stay behind the shield.",
      icon: "shield",
    },
    {
      title: "Minutes you earn",
      body: "Finish a task, get time back. Open the app, spend the balance.",
      icon: "coin",
    },
    {
      title: "Task difficulty",
      body: "A ten-minute walk and a deep-clean session should not pay the same. Drift lets you weight the work.",
      icon: "tiers",
    },
    {
      title: "Live balance",
      body: "Your timer only drains while a blocked app is open, so the number always means something.",
      icon: "clock",
    },
    {
      title: "Repeating routines",
      body: "Set chores, workouts, reading, or bedtime resets once. Drift brings them back on schedule.",
      icon: "repeat",
    },
    {
      title: "Protected hours",
      body: "Keep bedtime, school, or deep work locked even if you have minutes saved up.",
      icon: "moon",
    },
  ];

  return (
    <section
      id="features"
      className="dot-transition-panel dot-transition-panel-above scroll-mt-20"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="max-w-2xl">
          <Kicker>Inside Drift</Kicker>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-tight text-ink-deep">
            Built for the moment you reach for your phone.
          </h2>
          <p className="mt-5 text-lg text-ink-mid leading-relaxed">
            No giant dashboard. No guilt loop. Just blocks, tasks, minutes, and
            a clear reason to put the phone down first.
          </p>
        </div>

        <div className="feature-card-rail mt-14 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 0.08}
              className="group rounded-card bg-paper-card border border-line shadow-soft p-7 h-full transition-all duration-300 hover:shadow-lift hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="grid place-items-center h-11 w-11 rounded-[14px] bg-earn-sage-lo text-earn-sage">
                  <FeatureIcon name={f.icon} />
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl text-ink-deep">
                {f.title}
              </h3>
              <p className="mt-2.5 text-ink-mid leading-relaxed">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureIcon = ({ name }: { name: string }) => {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "coin":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v8M9.5 10h3.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 0 0 3h4" />
        </svg>
      );
    case "tiers":
      return (
        <svg {...common}>
          <path d="M5 18h4V8H5zM10 18h4V4h-4zM15 18h4v-7h-4z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
    case "repeat":
      return (
        <svg {...common}>
          <path d="M4 9l3-3 3 3M7 6v6a3 3 0 0 0 3 3h7" />
          <path d="M20 15l-3 3-3-3M17 18v-6a3 3 0 0 0-3-3H7" />
        </svg>
      );
    case "moon":
      return (
        <svg {...common}>
          <path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z" />
        </svg>
      );
    default:
      return null;
  }
};

export default FeaturesSection;
