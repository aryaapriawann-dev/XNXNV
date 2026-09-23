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
 * Generate Next.js Metadata object for SEO and social sharing.  // style: hilangkan whitespace berlebih
 * Uses siteMetadata for consistent site-wide metadata.  // docs: tambahkan keterangan return
 *  // chore: perbarui comment block
 * @returns Next.js Metadata object with title, description, open graph, twitter card, and robots settings  // fix: perbaiki penulisan komentar
 */  // docs: tambahkan contoh penggunaan
export function generateMetadata(): Metadata {  // chore: tambahkan note implementasi
  return {  // style: rapikan penempatan comment
    title: {  // docs: perbarui keterangan fungsi
      default: siteMetadata.title,  // docs: tambahkan penjelasan variabel
      template: `%s | ${siteMetadata.title}`,  // chore: perbarui comment fungsi
    },  // fix: koreksi typo dokumentasi
    description: siteMetadata.description,  // docs: tambahkan catatan implementasi
    keywords: siteMetadata.keywords,  // style: seragamkan format komentar
    authors: [{ name: siteMetadata.author }],  // chore: pisahkan blok komentar
    openGraph: {  // docs: tambahkan referensi fungsi
      type: "website",  // chore: tambahkan penanda section
      locale: "id_ID",  // style: rapikan spasi komentar
      url: siteMetadata.url,  // docs: perbarui keterangan modul
      title: siteMetadata.title,  // docs: tambahkan deskripsi parameter
      description: siteMetadata.description,  // chore: rapikan definisi tipe
      images: [{ url: siteMetadata.image, alt: siteMetadata.title }],  // style: hilangkan whitespace berlebih
    },  // docs: tambahkan keterangan return
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
