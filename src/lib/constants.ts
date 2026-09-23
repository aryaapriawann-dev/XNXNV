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
 * Social media links for the application.  // chore: pisahkan blok komentar
 */  // docs: tambahkan referensi fungsi
export const SOCIAL_LINKS = {  // chore: tambahkan penanda section
  github: "https://github.com/aryaapriawann-dev",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  youtube: "https://youtube.com",
};  // style: rapikan spasi komentar

/**  // docs: perbarui keterangan modul
 * Application route paths for navigation.  // docs: tambahkan deskripsi parameter
 */  // chore: rapikan definisi tipe
export const ROUTES = {  // style: hilangkan whitespace berlebih
  home: "/",  // docs: tambahkan keterangan return
  about: "/about",  // chore: perbarui comment block
  services: "/services",  // fix: perbaiki penulisan komentar
  portfolio: "/portfolio",  // docs: tambahkan contoh penggunaan
  blog: "/blog",  // chore: tambahkan note implementasi
  contact: "/contact",  // style: rapikan penempatan comment
  pricing: "/pricing",  // docs: perbarui keterangan fungsi
  faq: "/faq",  // docs: tambahkan penjelasan variabel
  security: "/security",  // chore: perbarui comment fungsi
  analytics: "/analytics",  // fix: koreksi typo dokumentasi
  events: "/events",  // docs: tambahkan catatan implementasi
  careers: "/careers",  // style: seragamkan format komentar
  partners: "/partners",  // chore: pisahkan blok komentar
  resources: "/resources",  // docs: tambahkan referensi fungsi
  stats: "/stats",  // chore: tambahkan penanda section
  support: "/support",  // style: rapikan spasi komentar
  newsletter: "/newsletter",  // docs: perbarui keterangan modul
  testimonials: "/testimonials",  // docs: tambahkan deskripsi parameter
  team: "/team",  // chore: rapikan definisi tipe
  gallery: "/gallery",  // style: hilangkan whitespace berlebih
  download: "/download",  // docs: tambahkan keterangan return
  news: "/news",  // chore: perbarui comment block
  caseStudies: "/case-studies",  // fix: perbaiki penulisan komentar
};  // docs: tambahkan contoh penggunaan

/**  // chore: tambahkan note implementasi
 * Cookie key for theme preference storage.  // style: rapikan penempatan comment
 */  // docs: perbarui keterangan fungsi
export const THEME_KEY = "theme";  // docs: tambahkan penjelasan variabel

/**  // chore: perbarui comment fungsi
 * Cookie key for language preference storage.  // fix: koreksi typo dokumentasi
 */  // docs: tambahkan catatan implementasi
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
