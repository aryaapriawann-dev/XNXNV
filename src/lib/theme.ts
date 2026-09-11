export type Theme = 'light' | 'dark' | 'system';

export const THEME_STORAGE_KEY = 'xvnpnx-theme';
export const LANGUAGE_STORAGE_KEY = 'xvnpnx-language';
export const CONSENT_STORAGE_KEY = 'xvnpnx-consent';

export const DEFAULT_THEME: Theme = 'system';

export function isDarkTheme(theme: Theme): boolean {
  if (theme === 'system') {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return theme === 'dark';
}

export function getThemeFromStorage(): Theme {
  if (typeof window === 'undefined') return DEFAULT_THEME;
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      return stored as Theme;
    }
  } catch {
    // ignore storage errors
  }
  return DEFAULT_THEME;
}

export function setThemeToStorage(theme: Theme): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // ignore storage errors
  }
}

export function getLanguageFromStorage(): string {
  if (typeof window === 'undefined') return 'id';
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && stored.length === 2) {
      return stored;
    }
  } catch {
    // ignore storage errors
  }
  return 'id';
}

export function setLanguageToStorage(lang: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // ignore storage errors
  }
}

export function getConsentFromStorage(): Record<string, boolean> {
  if (typeof window === 'undefined') return {};
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

export function setConsentToStorage(consent: Record<string, boolean>): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // ignore storage errors
  }
}
