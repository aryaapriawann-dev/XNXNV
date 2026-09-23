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
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
