import { Metadata } from "next";

/**
 * Site metadata configuration for the XNXNV website.
 * Contains title, description, keywords, and social media image.
 */
export const siteMetadata = {
  title: "XNXNV - Agency Digital Marketing & Web Development",
  description:
    "Kami adalah agency digital marketing dan web development yang membantu bisnis Anda tumbuh dengan solusi teknologi terbaik.",
  keywords:
    "digital agency, web development, mobile app, ui/ux design, digital marketing, nextjs, react",
  author: "XNXNV Team",
  url: "https://xvnpnx.id",
  image: "https://xvnpnx.id/og-image.jpg",
};

/**
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
