import Kicker from "@/components/ui/Kicker";
import FAQItem from "@/components/ui/FAQItem";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Drift?",
      answer:
        "Drift is an iPhone app that blocks distracting apps until you complete tasks you choose.",
    },
    {
      question: "Does Drift really block apps?",
      answer:
        "Yes. Drift uses Apple's Screen Time shield, so blocked apps stay locked at the system level.",
    },
    {
      question: "How does task verification work?",
      answer:
        "You mark tasks complete or submit quick proof when a task needs it. If something is reviewed incorrectly, you can appeal it.",
    },
    {
      question: "What data does Drift collect?",
      answer:
        "Drift stores the information needed to run your account, tasks, earned time, and proof you choose to submit. We do not sell your data.",
    },
    {
      question: "How do I manage my account?",
      answer:
        "Account settings, data controls, and deletion live inside the Drift app. This website does not have a login.",
    },
    {
      question: "Who is Drift for?",
      answer:
        "Anyone who keeps opening the same apps without meaning to: students, professionals, parents, or anyone trying to get a cleaner break from scrolling.",
    },
    {
      question: "Is Drift free?",
      answer:
        "Yes. Drift is free right now, and every feature is included — blocking, earned time, routines, blocked hours, and stats.",
    },
  ];

  return (
    <section className="bg-paper-cream border-y border-line">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-24">
        <div className="text-center">
          <Kicker className="justify-center">Questions</Kicker>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-tight text-ink-deep">
            The short version.
          </h2>
        </div>

        <div className="mt-12 rounded-card bg-paper-card border border-line shadow-soft px-7 sm:px-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
