import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Counter from "@/components/Counter";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "XNXNV - Solusi Digital Berkualitas untuk Bisnis Anda",
  description: "Kami membantu bisnis tumbuh dengan website modern, aplikasi digital, dan solusi teknologi yang terintegrasi. Layanan profesional untuk pertumbuhan digital Anda.",
  keywords: "digital solution, web development, mobile app, UI/UX design, digital marketing, cybersecurity, cloud solutions",
  authors: [{ name: "XNXNV Team" }],
  openGraph: {
    title: "XNXNV - Solusi Digital Berkualitas",
    description: "Kami membantu bisnis tumbuh dengan solusi teknologi terbaik",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "XNXNV - Solusi Digital Berkualitas",
    description: "Kami membantu bisnis tumbuh dengan solusi teknologi terbaik",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Hero />
      <About />
      <Services />
      <Counter />
      <Testimonials />
      <Contact />
    </div>
  );
}
