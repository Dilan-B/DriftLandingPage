import Kicker from "@/components/ui/Kicker";
import Badge from "@/components/ui/Badge";
import BlurText from "@/components/ui/BlurText";
import Reveal from "@/components/ui/Reveal";

const HowItWorksSection = () => {
  const steps = [
    {
      n: "01",
      pill: "Block",
      title: "Choose the apps",
      body: "Pick the places you lose time. Drift uses Apple's Screen Time shield, so the block lives at the system level.",
    },
    {
      n: "02",
      pill: "Do",
      title: "Finish a task",
      body: "Walk, read, tidy, stretch, call someone back. You decide what counts and how much time it earns.",
    },
    {
      n: "03",
      pill: "Use",
      title: "Spend the minutes",
      body: "Open a blocked app and the balance starts ticking down. When it runs out, the shield comes back.",
    },
  ];

  return (
    <section id="how" className="bg-paper-cream border-y border-line scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="max-w-2xl">
          <Kicker>How it works</Kicker>
          <BlurText
            as="h2"
            text="Block first. Earn access back."
            animateBy="words"
            direction="top"
            delay={90}
            className="mt-5 font-display text-4xl sm:text-5xl leading-tight text-ink-deep"
          />
        </div>

        <div className="mobile-card-rail mt-14 md:grid md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 0.08}
              className="rounded-card bg-paper-card border border-line shadow-soft p-7 flex flex-col h-full"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl text-earn-sage-lo leading-none select-none">
                  {step.n}
                </span>
                <Badge variant="sage" kicker>
                  {step.pill}
                </Badge>
              </div>
              <h3 className="mt-6 font-display text-xl text-ink-deep">
                {step.title}
              </h3>
              <p className="mt-3 text-ink-mid leading-relaxed">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
