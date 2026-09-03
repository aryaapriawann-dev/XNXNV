/**
 * Format number with thousand separators
 */
export function formatNumber(num: number, locale = "id-ID"): string {
  return num.toLocaleString(locale);
}

/**
 * Format currency (Rupiah by default)
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
 * Format file size (bytes to human-readable)
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

/**
 * Format percentage
 */
export function formatPercentage(value: number, decimals = 1): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Compact number format (1000 -> 1K, 1000000 -> 1M)
 */
export function formatCompactNumber(num: number): string {
  const formatter = new Intl.NumberFormat("id-ID", {
    notation: "compact",
    compactDisplay: "short",
  });
  return formatter.format(num);
}

/**
 * Clamp number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
