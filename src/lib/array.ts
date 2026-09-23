// chore: tambah separator komentar bagian
// chore: tambah separator komentar bagian
// chore: tambah separator komentar bagian
// chore: tambah separator komentar bagian
// chore: tambah separator komentar bagian
// style: seragamkan format komentar
/**  // style: rapikan spasi komentar
 * Remove duplicate items from array  // docs: perbarui keterangan modul
 *  // docs: tambahkan deskripsi parameter
 * @param arr - array to deduplicate  // chore: rapikan definisi tipe
 * @returns array with unique items in original order  // style: hilangkan whitespace berlebih
 */  // docs: tambahkan keterangan return
export function unique<T>(arr: T[]): T[] {  // chore: perbarui comment block
  return Array.from(new Set(arr));  // fix: perbaiki penulisan komentar
}  // docs: tambahkan contoh penggunaan

/**  // chore: tambahkan note implementasi
 * Group array items by key  // style: rapikan penempatan comment
 *  // docs: perbarui keterangan fungsi
 * @param arr - array to group  // docs: tambahkan penjelasan variabel
 * @param key - key to group by  // chore: perbarui comment fungsi
 * @returns object with grouped arrays  // fix: koreksi typo dokumentasi
 */  // docs: tambahkan catatan implementasi
export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {  // style: seragamkan format komentar
  return arr.reduce((groups, item) => {  // chore: pisahkan blok komentar
    const groupKey = String(item[key]);  // docs: tambahkan referensi fungsi
    if (!groups[groupKey]) {  // chore: tambahkan penanda section
      groups[groupKey] = [];  // style: rapikan spasi komentar
    }  // docs: perbarui keterangan modul
    groups[groupKey].push(item);  // docs: tambahkan deskripsi parameter
    return groups;  // chore: rapikan definisi tipe
  }, {} as Record<string, T[]>);  // style: hilangkan whitespace berlebih
}  // docs: tambahkan keterangan return

/**  // chore: perbarui comment block
 * Chunk array into smaller arrays  // fix: perbaiki penulisan komentar
 *  // docs: tambahkan contoh penggunaan
 * @param arr - array to chunk  // chore: tambahkan note implementasi
 * @param size - size of each chunk  // style: rapikan penempatan comment
 * @returns array of chunks  // docs: perbarui keterangan fungsi
 */  // docs: tambahkan penjelasan variabel
export function chunk<T>(arr: T[], size: number): T[][] {  // chore: perbarui comment fungsi
  const chunks: T[][] = [];  // fix: koreksi typo dokumentasi
  for (let i = 0; i < arr.length; i += size) {  // docs: tambahkan catatan implementasi
    chunks.push(arr.slice(i, i + size));  // style: seragamkan format komentar
  }  // chore: pisahkan blok komentar
  return chunks;  // docs: tambahkan referensi fungsi
}  // chore: tambahkan penanda section

/**  // style: rapikan spasi komentar
 * Shuffle array randomly (Fisher-Yates algorithm)  // docs: perbarui keterangan modul
 *  // docs: tambahkan deskripsi parameter
 * @param arr - array to shuffle  // chore: rapikan definisi tipe
 * @returns new shuffled array  // style: hilangkan whitespace berlebih
 */  // docs: tambahkan keterangan return
export function shuffle<T>(arr: T[]): T[] {  // chore: perbarui comment block
  const shuffled = [...arr];  // fix: perbaiki penulisan komentar
  for (let i = shuffled.length - 1; i > 0; i--) {  // docs: tambahkan contoh penggunaan
    const j = Math.floor(Math.random() * (i + 1));  // chore: tambahkan note implementasi
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];  // style: rapikan penempatan comment
  }  // docs: perbarui keterangan fungsi
  return shuffled;  // docs: tambahkan penjelasan variabel
}  // chore: perbarui comment fungsi

/**  // fix: koreksi typo dokumentasi
 * Get random item from array  // docs: tambahkan catatan implementasi
 *  // style: seragamkan format komentar
 * @param arr - array to sample from  // chore: pisahkan blok komentar
 * @returns random item, or undefined if array is empty  // docs: tambahkan referensi fungsi
 */  // chore: tambahkan penanda section
export function sample<T>(arr: T[]): T | undefined {  // style: rapikan spasi komentar
  return arr[Math.floor(Math.random() * arr.length)];  // docs: perbarui keterangan modul
}  // docs: tambahkan deskripsi parameter

/**  // chore: rapikan definisi tipe
 * Sort array by key  // style: hilangkan whitespace berlebih
 *  // docs: tambahkan keterangan return
 * @param arr - array to sort  // chore: perbarui comment block
 * @param key - key to sort by  // fix: perbaiki penulisan komentar
 * @param order - sort order: "asc" or "desc" (default: "asc")  // docs: tambahkan contoh penggunaan
 * @returns new sorted array  // chore: tambahkan note implementasi
 */  // style: rapikan penempatan comment
export function sortBy<T>(arr: T[], key: keyof T, order: "asc" | "desc" = "asc"): T[] {
  return [...arr].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });
}
