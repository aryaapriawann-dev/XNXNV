"use client";

import { useState } from "react";
import { MessageCircle, Search, ChevronDown, ChevronUp, Shield, Zap, Award, HelpCircle, CheckCircle, ArrowRight } from "lucide-react";

interface FAQItem {
  id: string;
  category: "general" | "pricing" | "security" | "technical" | "support";
  question: string;
  answer: string;
  popular?: boolean;
}

const CATEGORIES = [
  { id: "all", label: "Semua Kategori" },
  { id: "general", label: "Umum & Pengenalan" },
  { id: "pricing", label: "Harga & Pembayaran" },
  { id: "security", label: "Keamanan & Privasi" },
  { id: "technical", label: "Integrasi & Teknis" },
  { id: "support", label: "Layanan & Support" },
] as const;

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "1",
    category: "general",
    question: "Apa itu platform Next.js Monolith dan apa keunggulannya?",
    answer: "Next.js Monolith menggabungkan API backend, background jobs, dan SSR frontend dalam satu codebase terpadu, mengurangi kompleksitas deploy dan latensi antar-service secara drastis.",
    popular: true
  },
  {
    id: "2",
    category: "pricing",
    question: "Apakah tersedia paket uji coba gratis sebelum berlangganan?",
    answer: "Ya, kami menyediakan free tier 14 hari penuh dengan semua fitur enterprise tanpa perlu memasukkan informasi kartu kredit terlebih dahulu.",
    popular: true
  },
  {
    id: "3",
    category: "security",
    question: "Bagaimana data kami dienkripsi dan dilindungi?",
    answer: "Semua data diamankan dengan enkripsi AES-256 saat tersimpan (at-rest) dan TLS 1.3 saat transmisi (in-transit), serta audit sertifikasi SOC-2 reguler.",
    popular: true
  },
  {
    id: "4",
    category: "technical",
    question: "Bagaimana cara melakukan migrasi dari backend lama ke arsitektur ini?",
    answer: "Kami menyediakan migration toolkit otomatis dan database bridge untuk sinkronisasi zero-downtime selama periode transisi sistem.",
    popular: false
  },
  {
    id: "5",
    category: "support",
    question: "Berapa lama SLA waktu respon untuk technical support?",
    answer: "Pelanggan Enterprise mendapatkan garansi SLA respon < 15 menit 24/7/365 dengan dedicated technical account manager.",
    popular: true
  },
  {
    id: "6",
    category: "pricing",
    question: "Apakah ada biaya tambahan untuk lonjakan traffic mendadak?",
    answer: "Tidak ada biaya penalti tersembunyi. Skema harga kami berbasis fair usage dan auto-tiering yang transparan.",
    popular: false
  },
  {
    id: "7",
    category: "technical",
    question: "Apakah mendukung multi-region deployment?",
    answer: "Ya, arsitektur edge proxy kami mendukung deployment multi-region otomatis di lebih dari 35 edge location di seluruh dunia.",
    popular: false
  }
];

export default function FAQCategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "1": true });

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Header */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4 border border-blue-500/20">
            <HelpCircle className="w-4 h-4" />
            <span>Pusat Bantuan & FAQ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Temukan jawaban cepat mengenai fitur, harga, keamanan, dan integrasi teknis platform kami.
          </p>

          {/* Search Bar in Hero */}
          <div className="relative max-w-xl mx-auto mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Ketik pertanyaan atau kata kunci bantuan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/90 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl transition-all text-slate-200"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                className={`bg-slate-900/70 border rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen ? "border-blue-500/50 shadow-lg shadow-blue-500/5" : "border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    {faq.popular && (
                      <span className="px-2 py-0.5 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full shrink-0 border border-blue-500/30">
                        Populer
                      </span>
                    )}
                    <h3 className="text-base font-semibold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-blue-400" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800">
            <HelpCircle className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-slate-300">Tidak ada pertanyaan yang cocok</p>
            <p className="text-sm text-slate-500 mt-1">Silakan hubungi tim dukungan kami jika butuh bantuan lebih lanjut</p>
          </div>
        )}

        {/* Bottom Support CTA */}
        <div className="mt-14 p-8 bg-gradient-to-r from-blue-900/20 via-slate-900 to-indigo-900/20 border border-slate-800 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Masih butuh bantuan?</h4>
            <p className="text-sm text-slate-400">Tim teknis kami siap menjawab kebutuhan spesifik arsitektur Anda.</p>
          </div>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 shrink-0">
            <span>Hubungi Technical Support</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
