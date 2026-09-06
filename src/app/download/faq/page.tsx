"use client";

import { useState } from "react";
import { Download, Search, ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";

interface FAQItem {
  id: string;
  category: "umum" | "akun" | "teknis" | "premium" | "pembayaran";
  question: string;
  answer: string;
  popular?: boolean;
}

const CATEGORIES = [
  { id: "all", label: "Semua Kategori" },
  { id: "umum", label: "Umum & Unduhan" },
  { id: "akun", label: "Akun & Akses" },
  { id: "teknis", label: "Format & Teknis" },
  { id: "premium", label: "Premium & Lisensi" },
  { id: "pembayaran", label: "Pembayaran" },
] as const;

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "1",
    category: "umum",
    question: "Bagaimana cara mengunduh file dari halaman Download?",
    answer: "Pilih file yang diinginkan di halaman Download, klik tombol Unduh, lalu tunggu hingga tautan unduhan siap. File akan tersimpan otomatis di folder unduhan perangkat Anda.",
    popular: true,
  },
  {
    id: "2",
    category: "akun",
    question: "Apakah saya harus login untuk mengunduh file gratis?",
    answer: "File gratis bisa diunduh tanpa login, tetapi dengan akun gratis Anda mendapat riwayat unduhan, kecepatan lebih stabil, dan notifikasi saat file diperbarui.",
    popular: true,
  },
  {
    id: "3",
    category: "teknis",
    question: "Format file apa saja yang tersedia untuk diunduh?",
    answer: "Kami menyediakan format PDF, EPUB, ZIP, MP4, DOCX, XLSX, dan PPTX. Setiap kartu file menampilkan format dan ukuran agar Anda bisa memilih sesuai kebutuhan.",
    popular: true,
  },
  {
    id: "4",
    category: "teknis",
    question: "Unduhan saya terputus di tengah jalan, apa yang harus dilakukan?",
    answer: "Coba gunakan koneksi yang stabil lalu klik tombol Unduh ulang. Riwayat unduhan tersimpan di akun Anda sehingga tautan bisa dibuat ulang tanpa mengurangi kuota unduhan.",
    popular: false,
  },
  {
    id: "5",
    category: "premium",
    question: "Apa keuntungan paket Premium untuk unduhan?",
    answer: "Pengguna Premium mendapat kecepatan unduhan prioritas, tanpa antrean, akses ke file eksklusif, unduhan massal (bulk), dan pembaruan file otomatis via email.",
    popular: true,
  },
  {
    id: "6",
    category: "pembayaran",
    question: "Metode pembayaran apa yang didukung untuk upgrade Premium?",
    answer: "Kami mendukung transfer bank, e-wallet (GoPay, OVO, DANA), QRIS, dan kartu kredit. Semua pembayaran diproses aman dan lisensi aktif otomatis setelah pembayaran terverifikasi.",
    popular: false,
  },
  {
    id: "7",
    category: "teknis",
    question: "Apakah ada batas ukuran atau kuota unduhan harian?",
    answer: "Akun gratis dibatasi 5 file per hari dengan ukuran maksimal 100 MB per file. Akun Premium tanpa batas jumlah file dan mendukung file hingga 2 GB per unduhan.",
    popular: false,
  },
  {
    id: "8",
    category: "umum",
    question: "Bagaimana cara meminta file atau melaporkan tautan rusak?",
    answer: "Gunakan tombol Minta File di halaman Download atau hubungi tim support. Sertakan judul file dan pesan error yang muncul agar tim kami bisa memperbaiki dalam 1x24 jam.",
    popular: false,
  },
];

export default function DownloadFaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "1": true });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Header */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4 border border-blue-500/20">
            <Download className="w-4 h-4" />
            <span>FAQ Unduhan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Pertanyaan Seputar Download
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Jawaban cepat tentang cara mengunduh, format file, akun, kuota, Premium, dan pembayaran.
          </p>

          {/* Search Bar in Hero */}
          <div className="relative max-w-xl mx-auto mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari pertanyaan seputar unduhan..."
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
                    <h3 className="text-base font-semibold text-white">{faq.question}</h3>
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
            <p className="text-sm text-slate-500 mt-1">Coba kata kunci lain atau hubungi tim dukungan kami</p>
          </div>
        )}

        {/* Bottom Support CTA */}
        <div className="mt-14 p-8 bg-gradient-to-r from-blue-900/20 via-slate-900 to-indigo-900/20 border border-slate-800 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Masih terkendala unduhan?</h4>
            <p className="text-sm text-slate-400">Tim support kami siap membantu masalah file, akun, dan Premium Anda.</p>
          </div>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 shrink-0">
            <span>Hubungi Support Download</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
