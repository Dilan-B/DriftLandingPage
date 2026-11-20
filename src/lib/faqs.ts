// Single source of truth for the homepage FAQ. Rendered by FAQSection and
// mirrored into FAQPage structured data, so the two can never drift apart.
export interface Faq {
  question: string;
  answer: string;
}

export const HOME_FAQS: Faq[] = [
  {
    question: "What is Drift?",
    answer:
      "Drift is an app blocker for iPhone that locks distracting apps until you complete tasks you choose. You earn your screen time back by doing something first.",
  },
  {
    question: "Does Drift really block apps?",
    answer:
      "Yes. Drift uses Apple's Screen Time shield, so blocked apps stay locked at the system level.",
  },
  {
    question: "How is Drift different from Apple's built-in Screen Time limits?",
    answer:
      "Screen Time limits are easy to tap past. Drift uses the same system-level shield, but blocked apps only unlock after you finish a task, so the minutes are earned instead of ignored.",
  },
  {
    question: "How does task verification work?",
    answer:
      "You mark tasks complete or submit quick proof when a task needs it. If something is reviewed incorrectly, you can appeal it.",
  },
  {
    question: "Can parents use Drift to manage their kids' screen time?",
    answer:
      "Yes. With the Family plan, a parent assigns tasks to their kids' devices and approves them before screen time unlocks.",
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
      "Anyone who keeps opening the same apps without meaning to: students, professionals, parents, or anyone trying to cut down on doomscrolling and get a cleaner break from their phone.",
  },
  {
    question: "How much does Drift cost?",
    answer:
      "Personal is $4.99/month or $29.99/year. Family — where a parent assigns tasks to their kids' devices and approves them to unlock screen time — runs $7.99/month for one child up to $19.99/month for five. There's no free tier.",
  },
  {
    question: "Is Drift available on Android?",
    answer:
      "Drift is available now on iPhone. Android is coming soon.",
  },
  {
    question: "Is Drift used in research?",
    answer:
      "Yes. A research team at Johns Hopkins uses Drift as the official tool in their study, offering it to their study participants.",
  },
];
