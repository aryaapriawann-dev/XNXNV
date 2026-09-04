"use client";

import { useState } from "react";
import Accordion from "@/components/Accordion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: "1",
    category: "Umum",
    question: "Apa itu XNXNV?",
    answer: "XNXNV adalah perusahaan jasa digital yang menyediakan solusi lengkap untuk transformasi bisnis Anda, mulai dari pengembangan web, mobile application, cloud solutions, hingga digital marketing.",
  },
  {
    id: "2",
    category: "Umum",
    question: "Di mana lokasi kantor XNXNV?",
    answer: "Kami berlokasi di Jakarta, Indonesia dengan tim yang tersebar di berbagai kota di Indonesia. Kami juga melayani klien secara remote dari seluruh Indonesia dan mancanegara.",
  },
  {
    id: "3",
    category: "Umum",
    question: "Bagaimana cara memesan jasa XNXNV?",
    answer: "Anda bisa menghubungi kami melalui form kontak, WhatsApp, atau email. Tim kami akan segera menghubungi Anda untuk melakukan konsultasi gratis dan mengidentifikasi kebutuhan Anda.",
  },
  {
    id: "4",
    category: "Pengembangan",
    question: "Berapa lama waktu pengerjaan proyek?",
    answer: "Waktu pengerjaan bervariasi tergantung kompleksitas dan skala proyek. Untuk website statis: 7-14 hari, website dinamis: 2-4 minggu, dan web application custom: 1-3 bulan.",
  },
  {
    id: "5",
    category: "Pengembangan",
    question: "Teknologi apa yang digunakan XNXNV?",
    answer: "Kami menggunakan teknologi terkini seperti Next.js, React, TypeScript, Node.js, PostgreSQL, MongoDB, dan berbagai tools modern lainnya untuk memastikan hasil terbaik.",
  },
  {
    id: "6",
    category: "Pengembangan",
    question: "Apakah Anda menyediakan maintenance setelah proyek selesai?",
    answer: "Ya, kami menyediakan paket maintenance dengan harga terjangkau untuk memastikan sistem Anda selalu up-to-date, aman, dan berjalan dengan optimal.",
  },
  {
    id: "7",
    category: "Harga",
    question: "Apakah ada biaya tersembunyi?",
    answer: "Tidak. Kami menerapkan transparansi penuh dalam harga. Harga yang kami sampaikan di awal adalah harga final, termasuk semua fitur yang tercantum dalam paket.",
  },
  {
    id: "8",
    category: "Harga",
    question: "Bagaimana sistem pembayaran yang Anda gunakan?",
    answer: "Kami menggunakan sistem 30% di awal, 60% saat progress 70%, dan 10% setelah proyek selesai dan diserahkan. Untuk proyek kecil, bisa讨论 dengan pembayaran penuh di awal.",
  },
  {
    id: "9",
    category: "Harga",
    question: "Apakah harga bisa dinegosiasikan?",
    answer: "Harga kami sudah disesuaikan dengan kualitas dan value yang diberikan. Namun, untuk proyek skala besar atau kerja sama jangka panjang, kami terbuka untuk diskusi lebih lanjut.",
  },
  {
    id: "10",
    category: "Dukungan",
    question: "Berapa lama masa dukungan technical?",
    answer: "Masa dukungan technical bervariasi tergantung paket yang dipilih: Starter (3 bulan), Professional (1 tahun), dan Enterprise (24/7 dedicated support).",
  },
  {
    id: "11",
    category: "Dukungan",
    question: "Bagaimana sistem support yang Anda sediakan?",
    answer: "Kami menyediakan support melalui email, WhatsApp, dan ticketing system. Untuk paket Enterprise, tersedia dedicated account manager dan responsive time 1 jam.",
  },
  {
    id: "12",
    category: "Dukungan",
    question: "Apakah support tersedia hari libur?",
    answer: "Untuk paket Enterprise, support 24/7 tersedia. Untuk paket lain, support tersedia hari kerja (Senin-Jumat) jam 09:00-18:00 WIB.",
  },
];

const categories = ["Semua", ...Array.from(new Set(faqs.map((faq) => faq.category)))];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredFAQs = selectedCategory === "Semua" ? faqs : faqs.filter((faq) => faq.category === selectedCategory);

  const accordionItems = filteredFAQs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: <p className="text-zinc-600 dark:text-zinc-300">{faq.answer}</p>,
  }));

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555421689-492607396535?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Pertanyaan Umum</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan dan produk kami.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Menampilkan {filteredFAQs.length} pertanyaan dari kategori "{selectedCategory}"
            </p>
          </div>
          <Accordion items={accordionItems} />
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
            Masih Ada Pertanyaan?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-10 text-lg">
            Jika jawaban yang Anda cari tidak ada di sini, jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Hubungi Kami
            </a>
            <a
              href="mailto:info@xnxv.id"
              className="px-8 py-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-lg font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              Kirim Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
