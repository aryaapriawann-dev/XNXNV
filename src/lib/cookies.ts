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
export function getTheme(): string {  // chore: pisahkan blok komentar
  if (typeof window === "undefined") return "system";  // docs: tambahkan referensi fungsi
  const cookieStore = cookies();  // chore: tambahkan penanda section
  return cookieStore.get(THEME_KEY)?.value || "system";  // style: rapikan spasi komentar
}  // docs: perbarui keterangan modul

/**  // docs: tambahkan deskripsi parameter
 * Set theme preference in cookie.  // chore: rapikan definisi tipe
 * Cookie expires after 1 year (365 days).  // style: hilangkan whitespace berlebih
 *  // docs: tambahkan keterangan return
 * @param theme - theme to set ("light", "dark", or "system")  // chore: perbarui comment block
 */  // fix: perbaiki penulisan komentar
export function setTheme(theme: Theme): void {  // docs: tambahkan contoh penggunaan
  if (typeof window === "undefined") return;  // chore: tambahkan note implementasi
  cookies().set(THEME_KEY, theme, { maxAge: 60 * 60 * 24 * 365, path: "/" });  // style: rapikan penempatan comment
}  // docs: perbarui keterangan fungsi

/**  // docs: tambahkan penjelasan variabel
 * Get user consent preferences from cookie.  // chore: perbarui comment fungsi
 * Returns empty object if no consent cookie is set or parsing fails.  // fix: koreksi typo dokumentasi
 *  // docs: tambahkan catatan implementasi
 * @returns consent preferences as record of key-value pairs  // style: seragamkan format komentar
 */  // chore: pisahkan blok komentar
export function getConsent(): Record<string, boolean> {  // docs: tambahkan referensi fungsi
  if (typeof window === "undefined") return {};  // chore: tambahkan penanda section
  const cookieStore = cookies();  // style: rapikan spasi komentar
  const value = cookieStore.get(CONSENT_KEY)?.value;  // docs: perbarui keterangan modul
  if (!value) return {};  // docs: tambahkan deskripsi parameter
  try {  // chore: rapikan definisi tipe
    return JSON.parse(value) as Record<string, boolean>;  // style: hilangkan whitespace berlebih
  } catch {  // docs: tambahkan keterangan return
    return {};  // chore: perbarui comment block
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
