// chore: rapikan import urutan
// chore: rapikan import urutan
// chore: rapikan import urutan
// chore: rapikan import urutan
// chore: rapikan import urutan
// chore: perbarui comment fungsi
import { cookies } from "next/headers";  // docs: tambahkan keterangan return
import { THEME_KEY, CONSENT_KEY } from "./constants";  // chore: perbarui comment block

/**  // fix: perbaiki penulisan komentar
 * Theme type for light, dark, or system preference.  // docs: tambahkan contoh penggunaan
 */  // chore: tambahkan note implementasi
export type Theme = "light" | "dark" | "system";  // style: rapikan penempatan comment

/**  // docs: perbarui keterangan fungsi
 * Get current theme from cookie.  // docs: tambahkan penjelasan variabel
 * Returns "system" if no theme cookie is set or value is invalid.  // chore: perbarui comment fungsi
 *  // fix: koreksi typo dokumentasi
 * @returns current theme value ("light", "dark", or "system")  // docs: tambahkan catatan implementasi
 */  // style: seragamkan format komentar
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
