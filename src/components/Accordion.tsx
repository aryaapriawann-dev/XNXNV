"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: string;
  className?: string;
}

export default function Accordion({
  items,
  defaultOpen,
  className = ""
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | undefined>(defaultOpen);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? undefined : id);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden transition-all"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors"
          >
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              {item.question}
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
              {openId === item.id ? (
                <Minus className="h-4 w-4" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openId === item.id ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-4 text-zinc-600 dark:text-zinc-400">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
