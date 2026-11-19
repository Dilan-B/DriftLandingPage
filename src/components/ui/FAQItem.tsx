"use client";

import { useId, useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

// The answer is always rendered into the HTML (just collapsed visually) so
// search engines and FAQPage structured data see the same content.
const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-line last:border-b-0">
      <h3 className="font-display text-lg text-ink-deep">
        <button
          className="w-full py-5 flex items-center justify-between gap-4 text-left group"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="group-hover:text-earn-deep transition-colors">
            {question}
          </span>
          <span
            className={`flex-shrink-0 grid place-items-center h-7 w-7 rounded-full border border-line text-ink-mid transition-all duration-300 ${
              isOpen ? "rotate-45 bg-earn-sage-lo border-transparent text-earn-sage" : ""
            }`}
            aria-hidden="true"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1v12M1 7h12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        inert={!isOpen}
      >
        <div className="overflow-hidden">
          <p className="text-ink-mid leading-relaxed pb-5 pr-10">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
