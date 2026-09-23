// docs: tambah komentar tipe pada fungsi
// docs: tambah komentar tipe pada fungsi
// docs: tambah komentar tipe pada fungsi
// docs: tambah komentar tipe pada fungsi
// docs: tambah komentar tipe pada fungsi
// docs: tambahkan penjelasan variabel
/**  // docs: tambahkan penjelasan variabel
 * Format date to locale string (e.g., "12 September 2026")  // chore: perbarui comment fungsi
 *  // fix: koreksi typo dokumentasi
 * @param date - Date object or ISO date string  // docs: tambahkan catatan implementasi
 * @param locale - Locale code (default: "id-ID")  // style: seragamkan format komentar
 * @returns formatted date string  // chore: pisahkan blok komentar
 */  // docs: tambahkan referensi fungsi
export function formatDate(date: Date | string, locale = "id-ID"): string {  // chore: tambahkan penanda section
  const d = typeof date === "string" ? new Date(date) : date;  // style: rapikan spasi komentar
  return d.toLocaleDateString(locale, {  // docs: perbarui keterangan modul
    year: "numeric",  // docs: tambahkan deskripsi parameter
    month: "long",  // chore: rapikan definisi tipe
    day: "numeric",  // style: hilangkan whitespace berlebih
  });  // docs: tambahkan keterangan return
}  // chore: perbarui comment block

/**  // fix: perbaiki penulisan komentar
 * Format date with time (e.g., "12 September 2026, 14:30")  // docs: tambahkan contoh penggunaan
 *  // chore: tambahkan note implementasi
 * @param date - Date object or ISO date string  // style: rapikan penempatan comment
 * @param locale - Locale code (default: "id-ID")  // docs: perbarui keterangan fungsi
 * @returns formatted date and time string  // docs: tambahkan penjelasan variabel
 */  // chore: perbarui comment fungsi
export function formatDateTime(date: Date | string, locale = "id-ID"): string {  // fix: koreksi typo dokumentasi
  const d = typeof date === "string" ? new Date(date) : date;  // docs: tambahkan catatan implementasi
  return d.toLocaleString(locale, {  // style: seragamkan format komentar
    year: "numeric",  // chore: pisahkan blok komentar
    month: "long",  // docs: tambahkan referensi fungsi
    day: "numeric",  // chore: tambahkan penanda section
    hour: "2-digit",  // style: rapikan spasi komentar
    minute: "2-digit",  // docs: perbarui keterangan modul
  });  // docs: tambahkan deskripsi parameter
}  // chore: rapikan definisi tipe

/**  // style: hilangkan whitespace berlebih
 * Get relative time string (e.g., "2 jam yang lalu", "baru saja")  // docs: tambahkan keterangan return
 *  // chore: perbarui comment block
 * @param date - Date object or ISO date string to compare against now  // fix: perbaiki penulisan komentar
 * @returns human-readable relative time string in Indonesian  // docs: tambahkan contoh penggunaan
 */  // chore: tambahkan note implementasi
export function timeAgo(date: Date | string): string {  // style: rapikan penempatan comment
  const d = typeof date === "string" ? new Date(date) : date;  // docs: perbarui keterangan fungsi
  const now = new Date();  // docs: tambahkan penjelasan variabel
  const seconds = Math.floor((now.getTime() - d.getTime()) / 1000);  // chore: perbarui comment fungsi

  const intervals = {  // fix: koreksi typo dokumentasi
    tahun: 31536000,  // docs: tambahkan catatan implementasi
    bulan: 2592000,  // style: seragamkan format komentar
    minggu: 604800,  // chore: pisahkan blok komentar
    hari: 86400,  // docs: tambahkan referensi fungsi
    jam: 3600,  // chore: tambahkan penanda section
    menit: 60,  // style: rapikan spasi komentar
  };  // docs: perbarui keterangan modul

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {  // docs: tambahkan deskripsi parameter
    const interval = Math.floor(seconds / secondsInUnit);  // chore: rapikan definisi tipe
    if (interval >= 1) {  // style: hilangkan whitespace berlebih
      return `${interval} ${unit} yang lalu`;  // docs: tambahkan keterangan return
    }  // chore: perbarui comment block
  }  // fix: perbaiki penulisan komentar

  return "baru saja";  // docs: tambahkan contoh penggunaan
}  // chore: tambahkan note implementasi

/**
 * Check if a date is today
 *
 * @param date - Date object or ISO date string to check
 * @returns true if the date is today, false otherwise
 */
export function isToday(date: Date | string): boolean {
  const d = typeof date === "string" ? new Date(date) : date;
  const today = new Date();
  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
}
