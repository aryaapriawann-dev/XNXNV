// docs: perbarui deskripsi modul
// docs: perbarui deskripsi modul
// docs: perbarui deskripsi modul
// docs: perbarui deskripsi modul
// docs: perbarui deskripsi modul
// docs: perbarui deskripsi modul
/**  // chore: perbarui comment fungsi
 * Format number with thousand separators (e.g., 1000 → "1.000")  // fix: koreksi typo dokumentasi
 *  // docs: tambahkan catatan implementasi
 * @param num - number to format  // style: seragamkan format komentar
 * @param locale - locale code (default: "id-ID")  // chore: pisahkan blok komentar
 * @returns formatted number string  // docs: tambahkan referensi fungsi
 */  // chore: tambahkan penanda section
export function formatNumber(num: number, locale = "id-ID"): string {  // style: rapikan spasi komentar
  return num.toLocaleString(locale);  // docs: perbarui keterangan modul
}  // docs: tambahkan deskripsi parameter

/**  // chore: rapikan definisi tipe
 * Format currency (Rupiah by default)  // style: hilangkan whitespace berlebih
 *  // docs: tambahkan keterangan return
 * @param amount - amount to format  // chore: perbarui comment block
 * @param currency - currency code (default: "IDR")  // fix: perbaiki penulisan komentar
 * @param locale - locale code (default: "id-ID")  // docs: tambahkan contoh penggunaan
 * @returns formatted currency string (e.g., "Rp1.000")  // chore: tambahkan note implementasi
 */  // style: rapikan penempatan comment
export function formatCurrency(amount: number, currency = "IDR", locale = "id-ID"): string {  // docs: perbarui keterangan fungsi
  return new Intl.NumberFormat(locale, {  // docs: tambahkan penjelasan variabel
    style: "currency",  // chore: perbarui comment fungsi
    currency: currency,  // fix: koreksi typo dokumentasi
    minimumFractionDigits: 0,  // docs: tambahkan catatan implementasi
    maximumFractionDigits: 0,  // style: seragamkan format komentar
  }).format(amount);  // chore: pisahkan blok komentar
}  // docs: tambahkan referensi fungsi

/**  // chore: tambahkan penanda section
 * Format percentage  // style: rapikan spasi komentar
 *  // docs: perbarui keterangan modul
 * @param value - value between 0 and 1
 * @param decimals - number of decimal places (default: 1)
 * @returns formatted percentage string (e.g., "75.5%")
 */
export function formatPercent(value: number, decimals = 1): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Clamp number between min and max
 *
 * @param num - number to clamp
 * @param min - minimum value
 * @param max - maximum value
 * @returns clamped number
 */
export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

/**
 * Generate random integer between min and max (inclusive)
 *
 * @param min - minimum value
 * @param max - maximum value
 * @returns random integer
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
