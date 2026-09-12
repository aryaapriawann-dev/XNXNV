import { cookies } from "next/headers";
import { THEME_KEY, CONSENT_KEY } from "./constants";

/**
 * Theme type for light, dark, or system preference.
 */
export type Theme = "light" | "dark" | "system";

/**
 * Get current theme from cookie.
 * Returns "system" if no theme cookie is set or value is invalid.
 *
 * @returns current theme value ("light", "dark", or "system")
 */
export function getTheme(): string {
  if (typeof window === "undefined") return "system";
  const cookieStore = cookies();
  return cookieStore.get(THEME_KEY)?.value || "system";
}

/**
 * Set theme preference in cookie.
 * Cookie expires after 1 year (365 days).
 *
 * @param theme - theme to set ("light", "dark", or "system")
 */
export function setTheme(theme: Theme): void {
  if (typeof window === "undefined") return;
  cookies().set(THEME_KEY, theme, { maxAge: 60 * 60 * 24 * 365, path: "/" });
}

/**
 * Get user consent preferences from cookie.
 * Returns empty object if no consent cookie is set or parsing fails.
 *
 * @returns consent preferences as record of key-value pairs
 */
export function getConsent(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  const cookieStore = cookies();
  const value = cookieStore.get(CONSENT_KEY)?.value;
  if (!value) return {};
  try {
    return JSON.parse(value) as Record<string, boolean>;
  } catch {
    return {};
  }
}

/**
 * Set user consent preferences in cookie.
 * Cookie expires after 1 year (365 days).
 *
 * @param consent - consent preferences as record of key-value boolean pairs
 */
export function setConsent(consent: Record<string, boolean>): void {
  if (typeof window === "undefined") return;
  cookies().set(CONSENT_KEY, JSON.stringify(consent), {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
}

/**
 * Remove a specific consent key from the consent cookie.
 *
 * @param key - consent key to remove
 */
export function removeConsent(key: string): void {
  const current = getConsent();
  delete current[key];
  setConsent(current);
}
