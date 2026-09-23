"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { translations, Locale } from "@/lib/translations";
import { LANGUAGE_KEY } from "@/lib/constants";

/**
 * Returns the active locale + a `t` helper for dot-path lookups
 * (e.g. t("hero.tagline")) and a `setLocale` setter.
 */
export function useTranslation() {
  const [locale, setLocaleRaw] = useLocalStorage<Locale>(LANGUAGE_KEY, "id");

  const setLocale = (next: Locale) => {
    setLocaleRaw(next);
  };

  function t(key: string): string {
    const dict = translations[locale];
    const parts = key.split(".");
    let value: unknown = dict;
    for (const part of parts) {
      if (value && typeof value === "object" && part in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[part];
      } else {
        return key;
      }
    }
    return typeof value === "string" ? value : key;
  }

  return { locale, setLocale, t };
}
