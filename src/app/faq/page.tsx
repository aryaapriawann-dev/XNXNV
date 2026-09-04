"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Mail, Phone, MapPin, Clock, Zap, Shield, UserCheck, Globe } from "lucide-react";

const faqs = [
  {
    category: "Umum",
    items: [
      {
        question: "Apa itu XNXNV?",
        answer: "XNXNV adalah perusahaan teknologi yang menyediakan solusi digital lengkap mulai dari web development, mobile app, hingga sistem enterprise dengan teknologi terkini.",
      },
      {
        question: "Where are you located?",
        answer: "Kami berlokasi di Kendari, Sulawesi Tenggara, Indonesia. Kami melayani klien lokal maupun internasional dengan dukungan kerja jarak jauh.",
      },
      {
        question: "Berapa lama pengalaman tim Anda?",
        answer: "Tim kami memiliki pengalaman lebih dari 5 tahun dalam mengembangkan solusi digital untuk berbagai industri mulai dari UMKM hingga enterprise.",
      },
    ],
  },
  {
    category: "Layanan",
    items: [
      {
        question: "Apa saja layanan yang Anda tawarkan?",
        answer: "Kami menyediakan Web Development, Mobile App Development, UI/UX Design, Sistem Enterprise, Digital Transformation, dan Technical Consulting.",
      },
      {
        question: "Apakah Anda menerima project freelance?",
        answer: "Ya, kami menerima project freelance untuk berbagai skala mulai dari simple landing page hingga kompleks application development.",
      },
      {
        question: "Apakah Anda menyediakan maintenance setelah project selesai?",
        answer: "Tentu, kami menyediakan paket maintenance dan support agar aplikasi Anda tetap berjalan optimal dengan update berkala.",
      },
    ],
  },
  {
    category: "Teknologi",
    items: [
      {
        question: "Teknologi apa saja yang Anda kuasai?",
        answer: "Kamiahli dalam Next.js, React, Flutter, Node.js, Python, PostgreSQL, MongoDB, Supabase, dan berbagai teknologi modern lainnya.",
      },
      {
        question: "Apakah Anda bisa integrasi dengan sistem yang sudah ada?",
        answer: "Ya, kami berpengalaman dalam integrasi sistem legacy dengan teknologi modern serta pembuatan API integration yang robust.",
      },
      {
        question: "Apakah Anda menggunakan AI dalam pengembangan?",
        answer: "Ya, kami memanfaatkan AI/ML untuk optimasi performa, ancaman keamanan, dan pengalaman pengguna yang lebih personal.",
      },
    ],
  },
  {
    category: "Proses",
    items: [
      {
        question: "Bagaimana proses pengerjaan project?",
        answer: "Kami mengikuti metodologi agile dengan tahapan Discovery, Design, Development, Testing, Deployment, dan Maintenance.",
      },
      {
        question: "Berapa lama waktu pengerjaan project?",
        answer: "Waktu pengerjaan bervariasi tergantung kompleksitas. Project kecil 1-2 minggu, project menengah 1-3 bulan, dan project besar 3-6 bulan.",
      },
      {
        question: "Bagaimana komunikasi selama project berjalan?",
        answer: "Kami memberikan laporan progres mingguan dan menggunakan Slack/WhatsApp untuk komunikasi harian agar Anda selalu update.",
      },
    ],
  },
  {
    category: "Harga",
    items: [
      {
        question: "Berapa harga project Anda?",
        answer: "Harga disesuaikan dengan kompleksitas dan kebutuhan spesifik. Kami menawarkan paket Fixed Price untuk project jelas dan Time & Materials untuk project kompleks.",
      },
      {
        question: "Apa saja metode pembayaran yang Anda terima?",
        answer: "Kami menerima Transfer Bank, QRIS, dan untuk klien internasional melalui PayPal atau Wire Transfer.",
      },
      {
        question: "Apakah ada garansi untuk hasil kerja?",
        answer: "Ya, kami memberikan garansi bug fixing selama 30 hari setelah delivery tanpa biaya tambahan.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Umum");

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const activeFAQs = faqs.find((f) => f.category === activeCategory)?.items || [];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Hero */}
      <section className="bg-zinc-900 dark:bg-zinc-950 py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="text-lg text-zinc-300 mb-8">
            Temukan jawaban untuk pertanyaan umum tentang layanan dan proses kerja kami.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {faqs.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activeCategory === cat.category
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md"
                    : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {activeFAQs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors"
                  >
                    <span className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-zinc-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-zinc-500" />
                    )}
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {activeFAQs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-zinc-500">Belum ada pertanyaan di kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-zinc-900 dark:bg-zinc-950 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <Mail className="h-8 w-8 mx-auto mb-3 text-indigo-400" />
              <h3 className="font-semibold text-white mb-1">Email</h3>
              <p className="text-sm text-zinc-400">info@xnxnv.com</p>
            </div>
            <div>
              <Phone className="h-8 w-8 mx-auto mb-3 text-green-400" />
              <h3 className="font-semibold text-white mb-1">Telepon</h3>
              <p className="text-sm text-zinc-400">+62 812-3456-7890</p>
            </div>
            <div>
              <MapPin className="h-8 w-8 mx-auto mb-3 text-blue-400" />
              <h3 className="font-semibold text-white mb-1">Lokasi</h3>
              <p className="text-sm text-zinc-400">Kendari, Indonesia</p>
            </div>
            <div>
              <Clock className="h-8 w-8 mx-auto mb-3 text-purple-400" />
              <h3 className="font-semibold text-white mb-1">Jam Kerja</h3>
              <p className="text-sm text-zinc-400">09:00 - 18:00 WIB</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 dark:bg-indigo-900 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pertanyaan Lainnya?
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Hubungi kami kapan saja. Tim kami siap membantu Anda 24/7.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-indigo-600 font-bold hover:bg-indigo-50 transition-colors"
          >
            Hubungi Kami Sekarang
            <ChevronDown className="h-5 w-5 rotate-90" />
          </a>
        </div>
      </section>
    </div>
  );
}
