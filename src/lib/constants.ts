// chore: tambah baris dokumentasi
// chore: tambah baris dokumentasi
// chore: tambah baris dokumentasi
// chore: tambah baris dokumentasi
// chore: tambah baris dokumentasi
// fix: koreksi typo dokumentasi
/**  // docs: tambahkan penjelasan variabel
 * Application name constant.  // chore: perbarui comment fungsi
 */  // fix: koreksi typo dokumentasi
export const APP_NAME = "WEB PROFIL COMPENI";  // docs: tambahkan catatan implementasi

/**  // style: seragamkan format komentar
 * Application version constant.  // chore: pisahkan blok komentar
 */  // docs: tambahkan referensi fungsi
export const APP_VERSION = "1.0.0";  // chore: tambahkan penanda section

/**  // style: rapikan spasi komentar
 * Application description constant.  // docs: perbarui keterangan modul
 */  // docs: tambahkan deskripsi parameter
export const APP_DESCRIPTION = "Solusi Digital Berkualitas untuk Bisnis Anda";  // chore: rapikan definisi tipe

/**  // style: hilangkan whitespace berlebih
 * Support email address.  // docs: tambahkan keterangan return
 */  // chore: perbarui comment block
export const SUPPORT_EMAIL = "support@webprofilcompeni.com";  // fix: perbaiki penulisan komentar

/**  // docs: tambahkan contoh penggunaan
 * Contact phone number.  // chore: tambahkan note implementasi
 */  // style: rapikan penempatan comment
export const CONTACT_PHONE = "+62 21 555 0100";  // docs: perbarui keterangan fungsi

/**  // docs: tambahkan penjelasan variabel
 * Office address.  // chore: perbarui comment fungsi
 */  // fix: koreksi typo dokumentasi
export const OFFICE_ADDRESS = "Jakarta Selatan, Indonesia";  // docs: tambahkan catatan implementasi

/**  // style: seragamkan format komentar
 * Social media links for the application.
 */
export const SOCIAL_LINKS = {
  github: "https://github.com/aryaapriawann-dev",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  youtube: "https://youtube.com",
};

/**
 * Application route paths for navigation.
 */
export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  portfolio: "/portfolio",
  blog: "/blog",
  contact: "/contact",
  pricing: "/pricing",
  faq: "/faq",
  security: "/security",
  analytics: "/analytics",
  events: "/events",
  careers: "/careers",
  partners: "/partners",
  resources: "/resources",
  stats: "/stats",
  support: "/support",
  newsletter: "/newsletter",
  testimonials: "/testimonials",
  team: "/team",
  gallery: "/gallery",
  download: "/download",
  news: "/news",
  caseStudies: "/case-studies",
};

/**
 * Cookie key for theme preference storage.
 */
export const THEME_KEY = "theme";

/**
 * Cookie key for language preference storage.
 */
export const LANGUAGE_KEY = "language";

/**
 * Cookie key for user consent storage.
 */
export const CONSENT_KEY = "consent";

/**
 * Available items per page options for pagination.
 */
export const PER_PAGE_OPTIONS = [6, 12, 24, 48];

/**
 * Date format type constants.
 */
export const DATE_FORMATS = {
  full: "full",
  medium: "medium",
  short: "short",
  relative: "relative",
} as const;
