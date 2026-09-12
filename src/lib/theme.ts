/**
 * Theme type for light, dark, or system preference.
 */
export type Theme = "light" | "dark" | "system";

/**
 * Storage key for theme preference in localStorage.
 */
export const THEME_STORAGE_KEY = "xvnpnx-theme";

/**
 * Storage key for language preference in localStorage.
 */
export const LANGUAGE_STORAGE_KEY = "xvnpnx-language";

/**
 * Storage key for user consent in localStorage.
 */
export const CONSENT_STORAGE_KEY = "xvnpnx-consent";

/**
 * Default theme value when no preference is stored.
 */
export const DEFAULT_THEME: Theme = "system";

/**
 * Check if a given theme should render as dark mode.
 * "system" resolves to user's system preference.
 * "dark" always returns true. "light" always returns false.
 *
 * @param theme - theme to check ("light", "dark", or "system")
 * @returns true if theme should be dark, false otherwise
 */
export function isDarkTheme(theme: Theme): boolean {
  if (theme === "system") {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return theme === "dark";
}

/**
 * Get theme preference from localStorage.
 * Returns DEFAULT_THEME if no stored value or parsing fails.
 *
 * @returns stored theme value or default
 */
export function getThemeFromStorage(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && ["light", "dark", "system"].includes(stored)) {
      return stored as Theme;
    }
  } catch {
    // ignore storage errors
  }
  return DEFAULT_THEME;
}

/**
 * Save theme preference to localStorage.
 *
 * @param theme - theme to save
 */
export function setThemeToStorage(theme: Theme): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // ignore storage errors
  }
}

/**
 * Get language preference from localStorage.
 * Returns "id" if no stored value or value is invalid.
 *
 * @returns stored language code or default "id"
 */
export function getLanguageFromStorage(): string {
  if (typeof window === "undefined") return "id";
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && stored.length === 2) {
      return stored;
    }
  } catch {
    // ignore storage errors
  }
  return "id";
}

/**
 * Save language preference to localStorage.
 *
 * @param lang - language code to save (e.g. "id", "en")
 */
export function setLanguageToStorage(lang: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // ignore storage errors
  }
}

/**
 * Get consent preferences from localStorage.
 * Returns empty object if no stored value or parsing fails.
 *
 * @returns consent preferences as record of key-value pairs
 */
export function getConsentFromStorage(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as Record<string, boolean>;
    }
  } catch {
    // ignore parse errors
  }
  return {};
}

/**
 * Save consent preferences to localStorage.
 *
 * @param consent - consent preferences as record of key-value boolean pairs
 */
export function setConsentToStorage(consent: Record<string, boolean>): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // ignore storage errors
  }
}
