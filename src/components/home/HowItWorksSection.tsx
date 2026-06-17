import Kicker from "@/components/ui/Kicker";
import Badge from "@/components/ui/Badge";
import BlurText from "@/components/ui/BlurText";
import Reveal from "@/components/ui/Reveal";

const HowItWorksSection = () => {
  const steps = [
    {
      n: "01",
      pill: "Set up",
      title: "Choose what to block",
      body: "Pick the apps that pull you in. Drift uses the iOS Screen Time shield to keep them behind a gentle lock.",
    },
    {
      n: "02",
      pill: "Earn",
      title: "Complete real tasks for time",
      body: "Walk, read, tidy, call a friend. Each finished task adds minutes to your balance — small wins that actually count.",
    },
    {
      n: "03",
      pill: "Unlock",
      title: "Time drains only while you use them",
      body: "Open a blocked app and your earned minutes tick down. Hit zero and the shield returns. No guilt, just a clear edge.",
    },
  ];

  return (
    <section id="how" className="bg-paper-cream border-y border-line scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="max-w-2xl">
          <Kicker>How it works</Kicker>
          <BlurText
            as="h2"
            text="Three steps. One calmer phone."
            animateBy="words"
            direction="top"
            delay={90}
            className="mt-5 font-display text-4xl sm:text-5xl leading-tight text-ink-deep"
          />
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
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
