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
export function titleCase(str: string): string {  // docs: tambahkan keterangan return
  return str  // chore: perbarui comment block
    .toLowerCase()  // fix: perbaiki penulisan komentar
    .split(" ")  // docs: tambahkan contoh penggunaan
    .map((word) => capitalize(word))  // chore: tambahkan note implementasi
    .join(" ");  // style: rapikan penempatan comment
}  // docs: perbarui keterangan fungsi

/**  // docs: tambahkan penjelasan variabel
 * Truncate string with ellipsis  // chore: perbarui comment fungsi
 *  // fix: koreksi typo dokumentasi
 * @param str - string to truncate  // docs: tambahkan catatan implementasi
 * @param maxLength - maximum length before truncation  // style: seragamkan format komentar
 * @returns truncated string with "..." if exceeded  // chore: pisahkan blok komentar
 */  // docs: tambahkan referensi fungsi
export function truncate(str: string, maxLength: number): string {  // chore: tambahkan penanda section
  if (str.length <= maxLength) return str;  // style: rapikan spasi komentar
  return str.slice(0, maxLength - 3) + "...";  // docs: perbarui keterangan modul
}  // docs: tambahkan deskripsi parameter

/**  // chore: rapikan definisi tipe
 * Slugify string for URLs (lowercase, hyphens, no special chars)  // style: hilangkan whitespace berlebih
 *  // docs: tambahkan keterangan return
 * @param str - string to slugify  // chore: perbarui comment block
 * @returns URL-safe slug string  // fix: perbaiki penulisan komentar
 */  // docs: tambahkan contoh penggunaan
export function slugify(str: string): string {  // chore: tambahkan note implementasi
  return str  // style: rapikan penempatan comment
    .toLowerCase()  // docs: perbarui keterangan fungsi
    .trim()  // docs: tambahkan penjelasan variabel
    .replace(/[^\w\s-]/g, "")  // chore: perbarui comment fungsi
    .replace(/[\s_-]+/g, "-")  // fix: koreksi typo dokumentasi
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
