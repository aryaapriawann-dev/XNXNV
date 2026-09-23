// chore: tambah baris dokumentasi
// chore: tambah baris dokumentasi
// chore: tambah baris dokumentasi
// chore: tambah baris dokumentasi
// chore: tambah baris dokumentasi
// chore: tambah baris dokumentasi
// chore: tambah baris dokumentasi
/**  // docs: tambahkan contoh penggunaan
 * Shared TypeScript utilities for WEB PROFIL COMPENI project.  // chore: tambahkan note implementasi
 * Includes formatting, validation, and helper functions.  // style: rapikan penempatan comment
 */  // docs: perbarui keterangan fungsi
// docs: tambah komentar tipe pada fungsi

/**  // docs: tambahkan penjelasan variabel
 * Format a date to Indonesian locale string.  // chore: perbarui comment fungsi
 */  // fix: koreksi typo dokumentasi
export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {  // docs: tambahkan catatan implementasi
  const d = typeof date === "string" ? new Date(date) : date;  // style: seragamkan format komentar
  return d.toLocaleDateString("id-ID", {  // chore: pisahkan blok komentar
    day: "numeric",  // docs: tambahkan referensi fungsi
    month: "long",  // chore: tambahkan penanda section
    year: "numeric",  // style: rapikan spasi komentar
    ...options,  // docs: perbarui keterangan modul
  });  // docs: tambahkan deskripsi parameter
}  // chore: rapikan definisi tipe

/**  // style: hilangkan whitespace berlebih
 * Format a date with time to Indonesian locale string.  // docs: tambahkan keterangan return
 */  // chore: perbarui comment block
export function formatDateTime(date: Date | string, options?: Intl.DateTimeFormatOptions): string {  // fix: perbaiki penulisan komentar
  const d = typeof date === "string" ? new Date(date) : date;  // docs: tambahkan contoh penggunaan
  return d.toLocaleString("id-ID", {  // chore: tambahkan note implementasi
    day: "numeric",  // style: rapikan penempatan comment
    month: "short",  // docs: perbarui keterangan fungsi
    year: "numeric",  // docs: tambahkan penjelasan variabel
    hour: "2-digit",  // chore: perbarui comment fungsi
    minute: "2-digit",  // fix: koreksi typo dokumentasi
    ...options,  // docs: tambahkan catatan implementasi
  });  // style: seragamkan format komentar
}  // chore: pisahkan blok komentar

/**  // docs: tambahkan referensi fungsi
 * Format a relative time string.  // chore: tambahkan penanda section
 */  // style: rapikan spasi komentar
export function formatRelativeTime(date: Date | string): string {  // docs: perbarui keterangan modul
  const d = typeof date === "string" ? new Date(date) : date;  // docs: tambahkan deskripsi parameter
  const now = new Date();  // chore: rapikan definisi tipe
  const diffMs = now.getTime() - d.getTime();  // style: hilangkan whitespace berlebih
  const diffSec = Math.floor(diffMs / 1000);  // docs: tambahkan keterangan return
  const diffMin = Math.floor(diffSec / 60);  // chore: perbarui comment block
  const diffHour = Math.floor(diffMin / 60);  // fix: perbaiki penulisan komentar
  const diffDay = Math.floor(diffHour / 24);  // docs: tambahkan contoh penggunaan
  const diffWeek = Math.floor(diffDay / 7);  // chore: tambahkan note implementasi
  const diffMonth = Math.floor(diffDay / 30);  // style: rapikan penempatan comment

  if (diffSec < 60) return "baru saja";  // docs: perbarui keterangan fungsi
  if (diffMin < 60) return `${diffMin} menit yang lalu`;  // docs: tambahkan penjelasan variabel
  if (diffHour < 24) return `${diffHour} jam yang lalu`;  // chore: perbarui comment fungsi
  if (diffDay < 7) return `${diffDay} hari yang lalu`;  // fix: koreksi typo dokumentasi
  if (diffWeek < 4) return `${diffWeek} minggu yang lalu`;  // docs: tambahkan catatan implementasi
  if (diffMonth < 12) return `${diffMonth} bulan yang lalu`;  // style: seragamkan format komentar
  return formatDate(d);  // chore: pisahkan blok komentar
}  // docs: tambahkan referensi fungsi

/**  // chore: tambahkan penanda section
 * Format currency to Indonesian Rupiah.  // style: rapikan spasi komentar
 */  // docs: perbarui keterangan modul
export function formatCurrency(amount: number, showSymbol = true): string {  // docs: tambahkan deskripsi parameter
  const formatter = new Intl.NumberFormat("id-ID", {  // chore: rapikan definisi tipe
    style: "currency",  // style: hilangkan whitespace berlebih
    currency: "IDR",  // docs: tambahkan keterangan return
    minimumFractionDigits: 0,  // chore: perbarui comment block
    maximumFractionDigits: 0,  // fix: perbaiki penulisan komentar
  });  // docs: tambahkan contoh penggunaan
  return formatter.format(amount);  // chore: tambahkan note implementasi
}  // style: rapikan penempatan comment

/**  // docs: perbarui keterangan fungsi
 * Format number with thousand separator.  // docs: tambahkan penjelasan variabel
 */  // chore: perbarui comment fungsi
export function formatNumber(num: number): string {  // fix: koreksi typo dokumentasi
  return new Intl.NumberFormat("id-ID").format(num);  // docs: tambahkan catatan implementasi
}  // style: seragamkan format komentar

/**  // chore: pisahkan blok komentar
 * Truncate string with ellipsis.  // docs: tambahkan referensi fungsi
 */  // chore: tambahkan penanda section
export function truncate(str: string, maxLength: number): string {  // style: rapikan spasi komentar
  if (str.length <= maxLength) return str;  // docs: perbarui keterangan modul
  return str.slice(0, maxLength - 3) + "...";  // docs: tambahkan deskripsi parameter
}  // chore: rapikan definisi tipe

/**  // style: hilangkan whitespace berlebih
 * Capitalize first letter of each word.  // docs: tambahkan keterangan return
 */  // chore: perbarui comment block
export function capitalize(str: string): string {  // fix: perbaiki penulisan komentar
  return str.replace(/\b\w/g, (c) => c.toUpperCase());  // docs: tambahkan contoh penggunaan
}  // chore: tambahkan note implementasi

/**  // style: rapikan penempatan comment
 * Slugify string for URL.  // docs: perbarui keterangan fungsi
 */  // docs: tambahkan penjelasan variabel
export function slugify(str: string): string {  // chore: perbarui comment fungsi
  return str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");  // fix: koreksi typo dokumentasi
}  // docs: tambahkan catatan implementasi

/**  // style: seragamkan format komentar
 * Generate unique ID.  // chore: pisahkan blok komentar
 */  // docs: tambahkan referensi fungsi
export function generateId(): string {  // chore: tambahkan penanda section
  return Date.now().toString(36) + Math.random().toString(36).substring(2);  // style: rapikan spasi komentar
}  // docs: perbarui keterangan modul

/**  // docs: tambahkan deskripsi parameter
 * Debounce function execution.  // chore: rapikan definisi tipe
 */  // style: hilangkan whitespace berlebih
export function debounce<T extends (...args: unknown[]) => unknown>(fn: T, delay: number): (...args: Parameters<T>) => void {  // docs: tambahkan keterangan return
  let timeoutId: ReturnType<typeof setTimeout>;  // chore: perbarui comment block
  return (...args: Parameters<T>) => {  // fix: perbaiki penulisan komentar
    clearTimeout(timeoutId);  // docs: tambahkan contoh penggunaan
    timeoutId = setTimeout(() => fn(...args), delay);  // chore: tambahkan note implementasi
  };  // style: rapikan penempatan comment
}  // docs: perbarui keterangan fungsi

/**  // docs: tambahkan penjelasan variabel
 * Throttle function execution.  // chore: perbarui comment fungsi
 */  // fix: koreksi typo dokumentasi
export function throttle<T extends (...args: unknown[]) => unknown>(fn: T, limit: number): (...args: Parameters<T>) => void {  // docs: tambahkan catatan implementasi
  let inThrottle = false;  // style: seragamkan format komentar
  return (...args: Parameters<T>) => {  // chore: pisahkan blok komentar
    if (!inThrottle) {  // docs: tambahkan referensi fungsi
      fn(...args);  // chore: tambahkan penanda section
      inThrottle = true;  // style: rapikan spasi komentar
      setTimeout(() => (inThrottle = false), limit);  // docs: perbarui keterangan modul
    }  // docs: tambahkan deskripsi parameter
  };  // chore: rapikan definisi tipe
}  // style: hilangkan whitespace berlebih

/**  // docs: tambahkan keterangan return
 * Check if value is empty.  // chore: perbarui comment block
 */  // fix: perbaiki penulisan komentar
export function isEmpty(value: unknown): boolean {  // docs: tambahkan contoh penggunaan
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}

/**
 * Group array items by key.
 */
export function groupBy<T>(items: T[], keyFn: (item: T) => string): Record<string, T[]> {
  return items.reduce((acc, item) => {
    const key = keyFn(item);
    if (!acc[key]) acc[key] = [];
    acc[key]!.push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

/**
 * Sort array items.
 */
export function sortBy<T>(items: T[], keyFn: (item: T) => string | number, direction: "asc" | "desc" = "asc"): T[] {
  return [...items].sort((a, b) => {
    const aVal = keyFn(a);
    const bVal = keyFn(b);
    const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    return direction === "asc" ? comparison : -comparison;
  });
}

/**
 * Paginate array.
 */
export function paginate<T>(items: T[], page: number, pageSize: number): { items: T[]; total: number; page: number; totalPages: number } {
  const total = items.length;
  const totalPages = Math.ceil(total / pageSize);
  const safePage = Math.max(1, Math.min(page, totalPages));
  const start = (safePage - 1) * pageSize;
  const end = start + pageSize;
  return { items: items.slice(start, end), total, page: safePage, totalPages };
}

/**
 * Class name utility.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Generate random string of specified length.
 */
export function randomString(length: number): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Format file size in human readable format.
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

/**
 * Check if element is in viewport.
 */
export function isInViewport(element: HTMLElement, offset = 0): boolean {
  if (typeof window === "undefined") return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
  );
}
