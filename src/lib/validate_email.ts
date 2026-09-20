// chore: rapikan import urutan
// chore: rapikan import urutan
/** @format */

/**
 * Validate email format.
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
