/**
 * Format date to locale string (e.g., "12 September 2026")
 *
 * @param date - Date object or ISO date string
 * @param locale - Locale code (default: "id-ID")
 * @returns formatted date string
 */
export function formatDate(date: Date | string, locale = "id-ID"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Format date with time (e.g., "12 September 2026, 14:30")
 *
 * @param date - Date object or ISO date string
 * @param locale - Locale code (default: "id-ID")
 * @returns formatted date and time string
 */
export function formatDateTime(date: Date | string, locale = "id-ID"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Get relative time string (e.g., "2 jam yang lalu", "baru saja")
 *
 * @param date - Date object or ISO date string to compare against now
 * @returns human-readable relative time string in Indonesian
 */
export function timeAgo(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const seconds = Math.floor((now.getTime() - d.getTime()) / 1000);

  const intervals = {
    tahun: 31536000,
    bulan: 2592000,
    minggu: 604800,
    hari: 86400,
    jam: 3600,
    menit: 60,
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit} yang lalu`;
    }
  }

  return "baru saja";
}

/**
 * Check if a date is today
 *
 * @param date - Date object or ISO date string to check
 * @returns true if the date is today, false otherwise
 */
export function isToday(date: Date | string): boolean {
  const d = typeof date === "string" ? new Date(date) : date;
  const today = new Date();
  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
}
