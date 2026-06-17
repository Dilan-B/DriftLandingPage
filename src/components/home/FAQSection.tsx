import Kicker from "@/components/ui/Kicker";
import FAQItem from "@/components/ui/FAQItem";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Drift?",
      answer:
        "Drift is an iOS app that helps you scroll less by making screen time something you earn. You block the apps that distract you, then complete real-world tasks to unlock minutes. It's gentle accountability — encouraging, never shaming.",
    },
    {
      question: "Does Drift block apps?",
      answer:
        "Yes. Drift uses Apple's Screen Time shield to block the apps you choose. They stay locked until you've earned time by completing tasks, and the shield returns when your earned time runs out.",
    },
    {
      question: "How does task verification work?",
      answer:
        "When you finish a task you mark it complete or submit a quick bit of proof. Drift may use AI to help review submissions and give feedback. AI isn't perfect — you can always appeal a decision through support.",
    },
    {
      question: "What data does Drift collect?",
      answer:
        "Only what's needed to run the app: your account info, task activity, and any proof you choose to submit. We don't sell your data. Full details live in our Privacy Policy.",
    },
    {
      question: "How do I manage my account?",
      answer:
        "Account settings, data controls, and account deletion are handled directly inside the Drift app through Settings. This website does not require a login.",
    },
    {
      question: "Is Drift for students?",
      answer:
        "Drift works for anyone who wants a calmer relationship with their phone — students, professionals, parents. The task system adapts to whatever your day looks like.",
    },
    {
      question: "Is Drift free?",
      answer:
        "There's a free plan with the core blocking and earn-to-unlock features. Pro adds recurring tasks, blocked hours, and deeper insights. You can join the beta for free today.",
    },
  ];

  return (
    <section className="bg-paper-cream border-y border-line">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-24">
        <div className="text-center">
          <Kicker className="justify-center">Questions</Kicker>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-tight text-ink-deep">
            Good to know.
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
