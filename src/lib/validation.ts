/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Validate phone number (Indonesian format)
 */
export function isValidPhone(phone: string): boolean {
  const regex = /^(\+62|62|0)[0-9]{9,12}$/;
  return regex.test(phone.replace(/[\s-]/g, ""));
}

/**
 * Validate URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if string is empty or whitespace
 */
export function isEmpty(str: string): boolean {
  return !str || str.trim().length === 0;
}

/**
 * Validate password strength
 * Returns: { valid: boolean, errors: string[] }
 */
export function validatePassword(password: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Password minimal 8 karakter");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password harus mengandung huruf besar");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Password harus mengandung huruf kecil");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Password harus mengandung angka");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
