import Kicker from "@/components/ui/Kicker";
import FAQItem from "@/components/ui/FAQItem";
import { HOME_FAQS } from "@/lib/faqs";

const FAQSection = () => {


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
          {HOME_FAQS.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
