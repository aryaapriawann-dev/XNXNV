import { Metadata } from "next";
import { CheckCircle, HelpCircle } from "lucide-react";

import Accordion from "@/components/Accordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Pertanyaan Umum | XNXNV",
  description: "Pertanyaan yang sering diajukan tentang layanan dan produk kami",
  openGraph: {
    title: "Pertanyaan Umum",
    description: "Pertanyaan yang sering diajukan tentang layanan dan produk kami",
    type: "website"
  }
};

const faqItems = [
  {
    id: "1",
    title: "Apa saja layanan yang ditawarkan oleh XNXNV?",
    content: "Kami menawarkan berbagai layanan teknologi informasi termasuk pengembangan web, mobile app development, cloud solutions, dan digital marketing services."
  },
  {
    id: "2",
    title: "Berapa lama waktu pengerjaan proyek?",
    content: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Proyek kecil dapat diselesaikan dalam 1-2 minggu, sementara proyek besar mungkin memerlukan 2-3 bulan."
  },
  {
    id: "3",
    title: "Bagaimana proses pembayaran?",
    content: "Kami menggunakan sistem pembayaran 50% di awal dan 50% setelah proyek selesai. Untuk proyek besar, kami bisa menyepakati milestone payment."
  },
  {
    id: "4",
    title: "Apakah ada garansi untuk layanan yang diberikan?",
    content: "Ya, kami memberikan garansi 3 bulan untuk semua layanan pengembangan. Dalam periode garansi, kami akan memperbaiki bug tanpa biaya tambahan."
  },
  {
    id: "5",
    title: "Bagaimana jika saya tidak puas dengan hasil akhir?",
    content: "Kami menerapkan proses kerja yang transparan dengan review point di setiap tahap. Jika ada ketidakpuasan, kami akan bekerja sama mencari solusi terbaik."
  },
  {
    id: "6",
    title: "Apakah Anda menerima proyek dari luar kota/negara?",
    content: "Ya, kami melayani proyek dari seluruh Indonesia bahkan internasional. Komunikasi dilakukan melalui email, call, dan video conference."
  },
  {
    id: "7",
    title: "Bagaimana cara menghubungi tim support?",
    content: "Anda dapat menghubungi kami melalui email support@xnxnv.com, WhatsApp di 0812-3456-7890, atau melalui form kontak yang tersedia di website."
  }
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <Breadcrumbs 
        items={[
          { label: "Beranda", href: "/" },
          { label: "Pertanyaan Umum" }
        ]}
        className="mb-8"
      />
      
      <SectionTitle 
        title="Pertanyaan Umum" 
        subtitle="Temukan jawaban untuk pertanyaan yang sering diajukan"
      />
      
      <div className="mt-12 max-w-3xl mx-auto">
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-6 mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 mb-4">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
            Belum menemukan jawaban Anda?
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Jika pertanyaan Anda tidak terdaftar di sini, silakan hubungi tim kami
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            <CheckCircle className="h-5 w-5" />
            Hubungi Kami
          </a>
        </div>
        
        <Accordion items={faqItems} />
      </div>
    </div>
  );
}
