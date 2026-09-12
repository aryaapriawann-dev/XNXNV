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
