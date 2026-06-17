import Kicker from "@/components/ui/Kicker";

const ProblemSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-5 sm:px-8 py-24 text-center">
      <Kicker className="justify-center">The moment before the scroll</Kicker>
      <p className="mt-6 font-display text-3xl sm:text-[2.5rem] leading-[1.18] text-ink-deep">
        Most apps just say <span className="text-ink-faint">no.</span> They
        block the door and leave you standing there — so you find another door.
      </p>
      <p className="mt-7 text-lg text-ink-mid leading-relaxed max-w-2xl mx-auto">
        Drift gives you a better next move. Instead of fighting your willpower,
        it turns the urge to scroll into a small, real-world task. Do the thing,
        earn the time, and watch the habit quietly shift.
      </p>
    </section>
  );
};

export default ProblemSection;
