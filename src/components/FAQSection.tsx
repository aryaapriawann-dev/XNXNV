"use client";

import { useState } from "react";

/**
 * Accordion section component for displaying frequently asked questions
 */
export default function FAQSection({ items }: { items: Array<{ question: string; answer: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="text-left font-medium text-zinc-900 dark:text-zinc-50 pr-4">{item.question}</span>
            <svg
              className={`w-5 h-5 text-zinc-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
