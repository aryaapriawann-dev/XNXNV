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
 * @param size - size of each chunk
 * @returns array of chunks
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * Shuffle array randomly (Fisher-Yates algorithm)
 *
 * @param arr - array to shuffle
 * @returns new shuffled array
 */
export function shuffle<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get random item from array
 *
 * @param arr - array to sample from
 * @returns random item, or undefined if array is empty
 */
export function sample<T>(arr: T[]): T | undefined {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Sort array by key
 *
 * @param arr - array to sort
 * @param key - key to sort by
 * @param order - sort order: "asc" or "desc" (default: "asc")
 * @returns new sorted array
 */
export function sortBy<T>(arr: T[], key: keyof T, order: "asc" | "desc" = "asc"): T[] {
  return [...arr].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });
}
