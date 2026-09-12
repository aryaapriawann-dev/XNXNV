/**
 * Format number with thousand separators (e.g., 1000 → "1.000")
 *
 * @param num - number to format
 * @param locale - locale code (default: "id-ID")
 * @returns formatted number string
 */
export function formatNumber(num: number, locale = "id-ID"): string {
  return num.toLocaleString(locale);
}

/**
 * Format currency (Rupiah by default)
 *
 * @param amount - amount to format
 * @param currency - currency code (default: "IDR")
 * @param locale - locale code (default: "id-ID")
 * @returns formatted currency string (e.g., "Rp1.000")
 */
export function formatCurrency(amount: number, currency = "IDR", locale = "id-ID"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format percentage
 *
 * @param value - value between 0 and 1
 * @param decimals - number of decimal places (default: 1)
 * @returns formatted percentage string (e.g., "75.5%")
 */
export function formatPercent(value: number, decimals = 1): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Clamp number between min and max
 *
 * @param num - number to clamp
 * @param min - minimum value
 * @param max - maximum value
 * @returns clamped number
 */
export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

/**
 * Generate random integer between min and max (inclusive)
 *
 * @param min - minimum value
 * @param max - maximum value
 * @returns random integer
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
