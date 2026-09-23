// chore: hilangkan spasi berlebih
// chore: hilangkan spasi berlebih
// chore: hilangkan spasi berlebih
// chore: hilangkan spasi berlebih
// chore: hilangkan spasi berlebih
// chore: hilangkan spasi berlebih
import { Metadata } from "next";  // style: rapikan penempatan comment

/**  // docs: perbarui keterangan fungsi
 * Site metadata configuration for the WEB PROFIL COMPENI website.  // docs: tambahkan penjelasan variabel
 * Contains title, description, keywords, and social media image.  // chore: perbarui comment fungsi
 */  // fix: koreksi typo dokumentasi
export const siteMetadata = {  // docs: tambahkan catatan implementasi
  title: "WEB PROFIL COMPENI - Agency Digital Marketing & Web Development",  // style: seragamkan format komentar
  description:  // chore: pisahkan blok komentar
    "Kami adalah agency digital marketing dan web development yang membantu bisnis Anda tumbuh dengan solusi teknologi terbaik.",  // docs: tambahkan referensi fungsi
  keywords:  // chore: tambahkan penanda section
    "digital agency, web development, mobile app, ui/ux design, digital marketing, nextjs, react",  // style: rapikan spasi komentar
  author: "WEB PROFIL COMPENI Team",  // docs: perbarui keterangan modul
  url: "https://webprofilcompeni.id",
  image: "https://webprofilcompeni.id/og-image.jpg",
};  // docs: tambahkan deskripsi parameter

/**  // chore: rapikan definisi tipe
 * Generate Next.js Metadata object for SEO and social sharing.
 * Uses siteMetadata for consistent site-wide metadata.
 *
 * @returns Next.js Metadata object with title, description, open graph, twitter card, and robots settings
 */
export function generateMetadata(): Metadata {
  return {
    title: {
      default: siteMetadata.title,
      template: `%s | ${siteMetadata.title}`,
    },
    description: siteMetadata.description,
    keywords: siteMetadata.keywords,
    authors: [{ name: siteMetadata.author }],
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: siteMetadata.url,
      title: siteMetadata.title,
      description: siteMetadata.description,
      images: [{ url: siteMetadata.image, alt: siteMetadata.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: siteMetadata.title,
      description: siteMetadata.description,
      images: [siteMetadata.image],
    },
    alternates: {
      canonical: siteMetadata.url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
