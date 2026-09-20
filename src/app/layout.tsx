import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CookieConsent from "@/components/CookieConsent";
import ToastContainer from "@/components/Toast";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "WEB PROFIL COMPENI - Solusi Digital Berkualitas untuk Bisnis Anda",
    template: "%s | WEB PROFIL COMPENI",
  },
  description: "Kami membantu bisnis tumbuh dengan website modern, aplikasi digital, dan solusi teknologi yang terintegrasi.",
  keywords: [
    "digital solution",
    "web development",
    "mobile app",
    "UI/UX design",
    "digital marketing",
    "cybersecurity",
    "cloud solutions",
    "next.js",
    "react",
  ],
  authors: [{ name: "WEB PROFIL COMPENI Team" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "WEB PROFIL COMPENI",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@webprofilcompeni",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <PageTransition />
        <CookieConsent />
        <ToastContainer />
        <BackToTop />
      </body>
    </html>
  );
}
