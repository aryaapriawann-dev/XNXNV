// docs: tambah komentar tipe pada fungsi
// docs: tambah komentar tipe pada fungsi
// docs: tambah komentar tipe pada fungsi
// docs: tambah komentar tipe pada fungsi
// docs: tambah komentar tipe pada fungsi
// docs: tambah komentar tipe pada fungsi
// docs: tambah komentar tipe pada fungsi
/**  // docs: tambahkan penjelasan variabel
 * Validate email format  // chore: perbarui comment fungsi
 */  // fix: koreksi typo dokumentasi
export function isValidEmail(email: string): boolean {  // docs: tambahkan catatan implementasi
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // style: seragamkan format komentar
  return regex.test(email);  // chore: pisahkan blok komentar
}  // docs: tambahkan referensi fungsi

/**  // chore: tambahkan penanda section
 * Validate phone number (Indonesian format)  // style: rapikan spasi komentar
 */  // docs: perbarui keterangan modul
export function isValidPhone(phone: string): boolean {  // docs: tambahkan deskripsi parameter
  const regex = /^(\+62|62|0)[0-9]{9,12}$/;  // chore: rapikan definisi tipe
  return regex.test(phone.replace(/[\s-]/g, ""));  // style: hilangkan whitespace berlebih
}  // docs: tambahkan keterangan return

/**  // chore: perbarui comment block
 * Validate URL format  // fix: perbaiki penulisan komentar
 */  // docs: tambahkan contoh penggunaan
export function isValidUrl(url: string): boolean {  // chore: tambahkan note implementasi
  try {  // style: rapikan penempatan comment
    new URL(url);  // docs: perbarui keterangan fungsi
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate NPWP (Indonesian tax ID, 15 digits)
 */
export function isValidNPWP(npwp: string): boolean {
  const cleaned = npwp.replace(/[\s-]/g, "");
  return /^[0-9]{15}$/.test(cleaned);
}

/**
 * Validate NIK (Indonesian citizen ID, 16 digits)
 */
export function isValidNIK(nik: string): boolean {
  const cleaned = nik.replace(/[\s-]/g, "");
  return /^[0-9]{16}$/.test(cleaned);
}

/**
 * Validate Indonesian license plate (Plat Nomor)
 * Format: 1-2 letters + 1-4 digits + 1 letter (e.g. B 1234 A, D 123 B)
 */
export function isValidPlate(plate: string): boolean {
  const cleaned = plate.replace(/[\s-]/g, "").toUpperCase();
  return /^[A-Z]{1,2}[0-9]{1,4}[A-Z]{1}$/.test(cleaned);
}
