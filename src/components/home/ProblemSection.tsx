import Kicker from "@/components/ui/Kicker";

const ProblemSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-5 sm:px-8 py-24 text-center">
      <Kicker className="justify-center">The problem</Kicker>
      <p className="mt-6 font-display text-3xl sm:text-[2.5rem] leading-[1.18] text-ink-deep">
        Blocking apps is easy. Staying honest after the block is the hard part.
      </p>
      <p className="mt-7 text-lg text-ink-mid leading-relaxed max-w-2xl mx-auto">
        Drift gives the impulse somewhere useful to go: take a walk, clean up,
        read a few pages, finish the thing you were avoiding. Then your apps
        open again.
      </p>
    </section>
  );
};

export default ProblemSection;
