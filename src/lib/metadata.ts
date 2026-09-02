import { Metadata } from "next";

export const siteMetadata = {
  title: "XNXNV - Agency Digital Marketing & Web Development",
  description: "Kami adalah agency digital marketing dan web development yang membantu bisnis Anda tumbuh dengan solusi teknologi terbaik.",
  keywords: "digital agency, web development, mobile app, ui/ux design, digital marketing, nextjs, react",
  author: "XNXNV Team",
  url: "https://xvnpnx.id",
  image: "https://xvnpnx.id/og-image.jpg",
};

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
