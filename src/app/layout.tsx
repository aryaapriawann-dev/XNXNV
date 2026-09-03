import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CookieConsent from "@/components/CookieConsent";
import { ToastProvider } from "@/components/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "XNXNV - Solusi Digital Berkualitas untuk Bisnis Anda",
    template: "%s | XNXNV",
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
  authors: [{ name: "XNXNV Team" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "XNXNV",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@xvnpnx",
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
        <ToastProvider />
      </body>
    </html>
  );
}
