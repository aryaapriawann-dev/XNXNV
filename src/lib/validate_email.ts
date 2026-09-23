// chore: rapikan import urutan
// chore: rapikan import urutan
// chore: rapikan import urutan
// chore: rapikan import urutan
// chore: rapikan import urutan
// chore: rapikan import urutan
// chore: rapikan import urutan
/** @format */  // chore: tambahkan penanda section

/**  // style: rapikan spasi komentar
 * Validate email format.  // docs: perbarui keterangan modul
 */  // docs: tambahkan deskripsi parameter
export function isValidEmail(email: string): boolean {
  if (!email) return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
