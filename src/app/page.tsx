import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Counter from "@/components/Counter";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
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
      <TestimonialsSection />
      <section className="py-20 bg-zinc-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Pertanyaan Umum</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">Jawaban cepat sebelum hubungi kami.</p>
          </div>
          <FAQSection />
        </div>
      </section>
      <Contact />
    </div>
  );
}