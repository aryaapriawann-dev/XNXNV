// chore: tambah separator komentar bagian
// chore: tambah separator komentar bagian
// chore: tambah separator komentar bagian
// chore: tambah separator komentar bagian
// chore: tambah separator komentar bagian
// chore: tambah separator komentar bagian
// chore: tambah separator komentar bagian
/**  // style: rapikan penempatan comment
 * Capitalize first letter of a string  // docs: perbarui keterangan fungsi
 *  // docs: tambahkan penjelasan variabel
 * @param str - string to capitalize  // chore: perbarui comment fungsi
 * @returns string with first letter in uppercase  // fix: koreksi typo dokumentasi
 */  // docs: tambahkan catatan implementasi
export function capitalize(str: string): string {  // style: seragamkan format komentar
  return str.charAt(0).toUpperCase() + str.slice(1);  // chore: pisahkan blok komentar
}  // docs: tambahkan referensi fungsi

/**  // chore: tambahkan penanda section
 * Convert string to title case (each word capitalized)  // style: rapikan spasi komentar
 *  // docs: perbarui keterangan modul
 * @param str - string to convert  // docs: tambahkan deskripsi parameter
 * @returns title-cased string  // chore: rapikan definisi tipe
 */  // style: hilangkan whitespace berlebih
export function titleCase(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

/**
 * Truncate string with ellipsis
 *
 * @param str - string to truncate
 * @param maxLength - maximum length before truncation
 * @returns truncated string with "..." if exceeded
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + "...";
}

/**
 * Slugify string for URLs (lowercase, hyphens, no special chars)
 *
 * @param str - string to slugify
 * @returns URL-safe slug string
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Convert camelCase to kebab-case
 *
 * @param str - camelCase string
 * @returns kebab-case string
 */
export function camelToKebab(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Convert kebab-case to camelCase
 *
 * @param str - kebab-case string
 * @returns camelCase string
 */
export function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}
