// style: rapikan indentasi docstring
// style: rapikan indentasi docstring
// style: rapikan indentasi docstring
// style: rapikan indentasi docstring
// style: rapikan indentasi docstring
// docs: tambahkan catatan implementasi
import { cookies } from "next/headers";  // fix: koreksi typo dokumentasi
import { THEME_KEY } from "./constants";  // docs: tambahkan catatan implementasi

/**  // style: seragamkan format komentar
 * Theme type for light, dark, or system preference.  // chore: pisahkan blok komentar
 */  // docs: tambahkan referensi fungsi
export type Theme = "light" | "dark" | "system";  // chore: tambahkan penanda section

/**  // style: rapikan spasi komentar
 * Get current theme from cookie.  // docs: perbarui keterangan modul
 * Returns "system" if no theme cookie set or value is invalid.  // docs: tambahkan deskripsi parameter
 *  // chore: rapikan definisi tipe
 * @returns current theme value  // style: hilangkan whitespace berlebih
 */  // docs: tambahkan keterangan return
export function getTheme(): Theme {  // chore: perbarui comment block
  const cookieStore = cookies();  // fix: perbaiki penulisan komentar
  const cookie = cookieStore.get(THEME_KEY);  // docs: tambahkan contoh penggunaan
  const value = cookie?.value;  // chore: tambahkan note implementasi
  if (!value || !value) return "system";  // style: rapikan penempatan comment
  if (["light", "dark", "system"].includes(value)) {  // docs: perbarui keterangan fungsi
    return value as Theme;  // docs: tambahkan penjelasan variabel
  }  // chore: perbarui comment fungsi
  return "system";  // fix: koreksi typo dokumentasi
}  // docs: tambahkan catatan implementasi

/**  // style: seragamkan format komentar
 * Set theme preference in cookie.  // chore: pisahkan blok komentar
 * Cookie expires after 1 year (365 days).  // docs: tambahkan referensi fungsi
 *  // chore: tambahkan penanda section
 * @param theme - theme to set ("light", "dark", or "system")
 */
export function setTheme(theme: Theme): void {
  cookies().set(THEME_KEY, theme, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
}

/**
 * Get user's system preference for color scheme.
 * Returns "dark" if system prefers dark mode, "light" otherwise.
 * Returns "light" on server-side (no window access).
 *
 * @returns "light" or "dark" based on system preference
 */
export function getPreferredTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Resolve final theme value from theme preference.
 * If theme is "system", resolves to system preference.
 * Otherwise returns the specified theme value.
 *
 * @param theme - theme preference ("light", "dark", or "system")
 * @returns resolved theme value ("light" or "dark")
 */
export function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    return getPreferredTheme();
  }
  return theme;
}
