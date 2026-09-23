"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { translations } from "@/lib/translations";
import { Globe } from "lucide-react";

/**
 * Inline language switcher pill. Opens a small menu with ID / EN.
 * Because state is in localStorage, switching re-renders every
 * component that calls useTranslation().
 */
export default function LanguageToggle() {
  const { locale, setLocale } = useTranslation();
  const next = locale === "id" ? "en" : "id";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setLocale(next)}
        className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
        aria-label={`Switch to ${translations[next].localeLabel[next]}`}
      >
        <Globe className="h-3.5 w-3.5" aria-hidden="true" />
        <span>{locale === "id" ? "ID" : "EN"}</span>
      </button>
    </div>
  );
}
