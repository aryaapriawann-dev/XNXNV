// docs: jelaskan tujuan helper
// docs: jelaskan tujuan helper
// docs: jelaskan tujuan helper
// docs: jelaskan tujuan helper
// docs: jelaskan tujuan helper
// docs: jelaskan tujuan helper
// docs: jelaskan tujuan helper
/**  // docs: tambahkan catatan implementasi
 * Safely get item from localStorage with fallback  // style: seragamkan format komentar
 */  // chore: pisahkan blok komentar
export function getLocalStorage<T>(key: string, fallback: T): T {  // docs: tambahkan referensi fungsi
  if (typeof window === "undefined") return fallback;  // chore: tambahkan penanda section
  
  try {  // style: rapikan spasi komentar
    const item = window.localStorage.getItem(key);  // docs: perbarui keterangan modul
    return item ? JSON.parse(item) : fallback;  // docs: tambahkan deskripsi parameter
  } catch {  // chore: rapikan definisi tipe
    return fallback;  // style: hilangkan whitespace berlebih
  }  // docs: tambahkan keterangan return
}  // chore: perbarui comment block

/**  // fix: perbaiki penulisan komentar
 * Safely set item to localStorage  // docs: tambahkan contoh penggunaan
 */  // chore: tambahkan note implementasi
export function setLocalStorage<T>(key: string, value: T): void {  // style: rapikan penempatan comment
  if (typeof window === "undefined") return;  // docs: perbarui keterangan fungsi
  
  try {  // docs: tambahkan penjelasan variabel
    window.localStorage.setItem(key, JSON.stringify(value));  // chore: perbarui comment fungsi
  } catch (error) {  // fix: koreksi typo dokumentasi
    console.error("Failed to save to localStorage:", error);  // docs: tambahkan catatan implementasi
  }  // style: seragamkan format komentar
}  // chore: pisahkan blok komentar

/**  // docs: tambahkan referensi fungsi
 * Remove item from localStorage  // chore: tambahkan penanda section
 */  // style: rapikan spasi komentar
export function removeLocalStorage(key: string): void {
  if (typeof window === "undefined") return;
  
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error("Failed to remove from localStorage:", error);
  }
}

/**
 * Clear all localStorage items
 */
export function clearLocalStorage(): void {
  if (typeof window === "undefined") return;
  
  try {
    window.localStorage.clear();
  } catch (error) {
    console.error("Failed to clear localStorage:", error);
  }
}
