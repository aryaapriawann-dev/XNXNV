// style: rapikan indentasi docstring
// style: rapikan indentasi docstring
// style: rapikan indentasi docstring
// style: rapikan indentasi docstring
// style: rapikan indentasi docstring
// style: rapikan indentasi docstring
// style: rapikan indentasi docstring
/**  // docs: tambahkan contoh penggunaan
 * Theme type for light, dark, or system preference.  // chore: tambahkan note implementasi
 */  // style: rapikan penempatan comment
export type Theme = "light" | "dark" | "system";  // docs: perbarui keterangan fungsi
// chore: rapikan import urutan

/**  // docs: tambahkan penjelasan variabel
 * Storage key for theme preference in localStorage.  // chore: perbarui comment fungsi
 */  // fix: koreksi typo dokumentasi
export const THEME_STORAGE_KEY = "webprofilcompeni-theme";  // docs: tambahkan catatan implementasi

/**  // style: seragamkan format komentar
 * Storage key for language preference in localStorage.  // chore: pisahkan blok komentar
 */  // docs: tambahkan referensi fungsi
export const LANGUAGE_STORAGE_KEY = "webprofilcompeni-language";  // chore: tambahkan penanda section

/**  // style: rapikan spasi komentar
 * Storage key for user consent in localStorage.  // docs: perbarui keterangan modul
 */  // docs: tambahkan deskripsi parameter
export const CONSENT_STORAGE_KEY = "webprofilcompeni-consent";  // chore: rapikan definisi tipe

/**  // style: hilangkan whitespace berlebih
 * Default theme value when no preference is stored.  // docs: tambahkan keterangan return
 */  // chore: perbarui comment block
export const DEFAULT_THEME: Theme = "system";  // fix: perbaiki penulisan komentar

/**  // docs: tambahkan contoh penggunaan
 * Check if a given theme should render as dark mode.  // chore: tambahkan note implementasi
 * "system" resolves to user's system preference.  // style: rapikan penempatan comment
 * "dark" always returns true. "light" always returns false.  // docs: perbarui keterangan fungsi
 *  // docs: tambahkan penjelasan variabel
 * @param theme - theme to check ("light", "dark", or "system")  // chore: perbarui comment fungsi
 * @returns true if theme should be dark, false otherwise  // fix: koreksi typo dokumentasi
 */  // docs: tambahkan catatan implementasi
export function isDarkTheme(theme: Theme): boolean {  // style: seragamkan format komentar
  if (theme === "system") {  // chore: pisahkan blok komentar
    if (typeof window === "undefined") return false;  // docs: tambahkan referensi fungsi
    return window.matchMedia("(prefers-color-scheme: dark)").matches;  // chore: tambahkan penanda section
  }  // style: rapikan spasi komentar
  return theme === "dark";  // docs: perbarui keterangan modul
}  // docs: tambahkan deskripsi parameter

/**  // chore: rapikan definisi tipe
 * Get theme preference from localStorage.  // style: hilangkan whitespace berlebih
 * Returns DEFAULT_THEME if no stored value or parsing fails.  // docs: tambahkan keterangan return
 *  // chore: perbarui comment block
 * @returns stored theme value or default  // fix: perbaiki penulisan komentar
 */  // docs: tambahkan contoh penggunaan
export function getThemeFromStorage(): Theme {  // chore: tambahkan note implementasi
  if (typeof window === "undefined") return DEFAULT_THEME;  // style: rapikan penempatan comment
  try {  // docs: perbarui keterangan fungsi
    const stored = localStorage.getItem(THEME_STORAGE_KEY);  // docs: tambahkan penjelasan variabel
    if (stored && ["light", "dark", "system"].includes(stored)) {  // chore: perbarui comment fungsi
      return stored as Theme;  // fix: koreksi typo dokumentasi
    }  // docs: tambahkan catatan implementasi
  } catch {  // style: seragamkan format komentar
    // ignore storage errors
  }  // chore: pisahkan blok komentar
  return DEFAULT_THEME;  // docs: tambahkan referensi fungsi
}  // chore: tambahkan penanda section

/**  // style: rapikan spasi komentar
 * Save theme preference to localStorage.  // docs: perbarui keterangan modul
 *  // docs: tambahkan deskripsi parameter
 * @param theme - theme to save  // chore: rapikan definisi tipe
 */  // style: hilangkan whitespace berlebih
export function setThemeToStorage(theme: Theme): void {  // docs: tambahkan keterangan return
  if (typeof window === "undefined") return;  // chore: perbarui comment block
  try {  // fix: perbaiki penulisan komentar
    localStorage.setItem(THEME_STORAGE_KEY, theme);  // docs: tambahkan contoh penggunaan
  } catch {  // chore: tambahkan note implementasi
    // ignore storage errors
  }  // style: rapikan penempatan comment
}  // docs: perbarui keterangan fungsi

/**  // docs: tambahkan penjelasan variabel
 * Get language preference from localStorage.  // chore: perbarui comment fungsi
 * Returns "id" if no stored value or value is invalid.  // fix: koreksi typo dokumentasi
 *  // docs: tambahkan catatan implementasi
 * @returns stored language code or default "id"  // style: seragamkan format komentar
 */  // chore: pisahkan blok komentar
export function getLanguageFromStorage(): string {  // docs: tambahkan referensi fungsi
  if (typeof window === "undefined") return "id";  // chore: tambahkan penanda section
  try {  // style: rapikan spasi komentar
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);  // docs: perbarui keterangan modul
    if (stored && stored.length === 2) {  // docs: tambahkan deskripsi parameter
      return stored;  // chore: rapikan definisi tipe
    }  // style: hilangkan whitespace berlebih
  } catch {  // docs: tambahkan keterangan return
    // ignore storage errors
  }  // chore: perbarui comment block
  return "id";  // fix: perbaiki penulisan komentar
}  // docs: tambahkan contoh penggunaan

/**  // chore: tambahkan note implementasi
 * Save language preference to localStorage.  // style: rapikan penempatan comment
 *  // docs: perbarui keterangan fungsi
 * @param lang - language code to save (e.g. "id", "en")  // docs: tambahkan penjelasan variabel
 */  // chore: perbarui comment fungsi
export function setLanguageToStorage(lang: string): void {  // fix: koreksi typo dokumentasi
  if (typeof window === "undefined") return;  // docs: tambahkan catatan implementasi
  try {  // style: seragamkan format komentar
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);  // chore: pisahkan blok komentar
  } catch {  // docs: tambahkan referensi fungsi
    // ignore storage errors
  }  // chore: tambahkan penanda section
}  // style: rapikan spasi komentar

/**  // docs: perbarui keterangan modul
 * Get consent preferences from localStorage.  // docs: tambahkan deskripsi parameter
 * Returns empty object if no stored value or parsing fails.  // chore: rapikan definisi tipe
 *  // style: hilangkan whitespace berlebih
 * @returns consent preferences as record of key-value pairs  // docs: tambahkan keterangan return
 */  // chore: perbarui comment block
export function getConsentFromStorage(): Record<string, boolean> {  // fix: perbaiki penulisan komentar
  if (typeof window === "undefined") return {};  // docs: tambahkan contoh penggunaan
  try {  // chore: tambahkan note implementasi
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);  // style: rapikan penempatan comment
    if (stored) {  // docs: perbarui keterangan fungsi
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
