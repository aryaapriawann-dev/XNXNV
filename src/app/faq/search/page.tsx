"use client";

import { useMemo, useState } from "react";
import { Search, X, HelpCircle, ChevronDown, ChevronUp, TrendingUp, ArrowRight, FileQuestion } from "lucide-react";

interface FAQItem {
  id: string;
  category: "umum" | "harga" | "keamanan" | "teknis" | "layanan";
  question: string;
  answer: string;
  keywords: string[];
  popular?: boolean;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "umum", label: "Umum" },
  { id: "harga", label: "Harga" },
  { id: "keamanan", label: "Keamanan" },
  { id: "teknis", label: "Teknis" },
  { id: "layanan", label: "Layanan" },
] as const;

const POPULAR_KEYWORDS = ["harga", "gratis", "enkripsi", "migrasi", "SLA", "multi-region", "deploy", "trial"];

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "1",
    category: "umum",
    question: "Apa itu platform Next.js Monolith dan apa keunggulannya?",
    answer: "Next.js Monolith menggabungkan API backend, background jobs, dan SSR frontend dalam satu codebase terpadu, mengurangi kompleksitas deploy dan latensi antar-service secara drastis.",
    keywords: ["monolith", "nextjs", "ssr", "backend", "deploy"],
    popular: true,
  },
  {
    id: "2",
    category: "harga",
    question: "Apakah tersedia paket uji coba gratis sebelum berlangganan?",
    answer: "Ya, kami menyediakan free tier 14 hari penuh dengan semua fitur enterprise tanpa perlu memasukkan informasi kartu kredit terlebih dahulu.",
    keywords: ["gratis", "trial", "free tier", "langganan", "harga"],
    popular: true,
  },
  {
    id: "3",
    category: "keamanan",
    question: "Bagaimana data kami dienkripsi dan dilindungi?",
    answer: "Semua data diamankan dengan enkripsi AES-256 saat tersimpan (at-rest) dan TLS 1.3 saat transmisi (in-transit), serta audit sertifikasi SOC-2 reguler.",
    keywords: ["enkripsi", "aes", "tls", "soc2", "privasi"],
    popular: true,
  },
  {
    id: "4",
    category: "teknis",
    question: "Bagaimana cara melakukan migrasi dari backend lama ke arsitektur ini?",
    answer: "Kami menyediakan migration toolkit otomatis dan database bridge untuk sinkronisasi zero-downtime selama periode transisi sistem.",
    keywords: ["migrasi", "backend", "database", "toolkit", "transisi"],
  },
  {
    id: "5",
    category: "layanan",
    question: "Berapa lama SLA waktu respon untuk technical support?",
    answer: "Pelanggan Enterprise mendapatkan garansi SLA respon < 15 menit 24/7/365 dengan dedicated technical account manager.",
    keywords: ["sla", "support", "respon", "enterprise", "bantuan"],
    popular: true,
  },
  {
    id: "6",
    category: "harga",
    question: "Apakah ada biaya tambahan untuk lonjakan traffic mendadak?",
    answer: "Tidak ada biaya penalti tersembunyi. Skema harga kami berbasis fair usage dan auto-tiering yang transparan.",
    keywords: ["biaya", "traffic", "harga", "tier", "fair usage"],
  },
  {
    id: "7",
    category: "teknis",
    question: "Apakah mendukung multi-region deployment?",
    answer: "Ya, arsitektur edge proxy kami mendukung deployment multi-region otomatis di lebih dari 35 edge location di seluruh dunia.",
    keywords: ["multi-region", "deploy", "edge", "deployment"],
  },
  {
    id: "8",
    category: "teknis",
    question: "Bagaimana cara deploy ke production dengan aman?",
    answer: "Gunakan pipeline CI/CD bawaan dengan preview deployment per pull request, rollback satu klik, dan health check otomatis sebelum traffic dialihkan.",
    keywords: ["deploy", "production", "cicd", "rollback", "preview"],
  },
];

function Highlight({ text, query }: { text: string; query: string }) {
  const q = query.trim();
  if (!q) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-yellow-500/30 text-yellow-200 rounded px-0.5">
        {text.slice(idx, idx + q.length)}
      </mark>
      {text.slice(idx + q.length)}
    </>
  );
}

export default function FAQSearchPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>("1");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_ITEMS.filter((item) => {
      const matchCat = category === "all" || item.category === category;
      if (!q) return matchCat;
      const hay = `${item.question} ${item.answer} ${item.keywords.join(" ")}`.toLowerCase();
      return matchCat && q.split(/\s+/).every((tok) => hay.includes(tok));
    });
  }, [query, category]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4 border border-blue-500/20">
            <HelpCircle className="w-4 h-4" />
            <span>Pencarian FAQ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Cari Jawaban Bantuan
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Ketik kata kunci, filter kategori, dan temukan jawaban tercepat dari basis pengetahuan kami.
          </p>

          <div className="relative max-w-xl mx-auto mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari: harga, enkripsi, migrasi, SLA..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-11 py-3.5 bg-slate-900/90 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl transition-all text-slate-200"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Hapus pencarian"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-5 max-w-xl mx-auto">
            <TrendingUp className="w-4 h-4 text-slate-500" />
            {POPULAR_KEYWORDS.map((kw) => (
              <button
                key={kw}
                onClick={() => setQuery(kw)}
                className="px-3 py-1 text-xs rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-300 hover:border-blue-500/40 transition-all"
              >
                {kw}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                category === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 mb-8">
          {query.trim() ? (
            <>
              Ditemukan <span className="text-slate-200 font-semibold">{results.length}</span> hasil untuk{" "}
              <span className="text-blue-400 font-medium">&ldquo;{query.trim()}&rdquo;</span>
            </>
          ) : (
            <>
              Menampilkan <span className="text-slate-200 font-semibold">{results.length}</span> pertanyaan bantuan
            </>
          )}
        </p>

        <div className="space-y-4">
          {results.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-slate-900/70 border rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen ? "border-blue-500/50 shadow-lg shadow-blue-500/5" : "border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    {faq.popular && (
                      <span className="px-2 py-0.5 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full shrink-0 border border-blue-500/30">
                        Populer
                      </span>
                    )}
                    <h3 className="text-base font-semibold text-white">
                      <Highlight text={faq.question} query={query} />
                    </h3>
                  </div>
                  <div className="shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-blue-400" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 mt-1">
                    <Highlight text={faq.answer} query={query} />
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {faq.keywords.map((kw) => (
                        <button
                          key={kw}
                          onClick={() => setQuery(kw)}
                          className="px-2 py-0.5 text-xs rounded bg-slate-800 text-slate-400 hover:text-blue-300 transition-colors"
                        >
                          #{kw}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {results.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800">
            <FileQuestion className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-slate-300">Tidak ada hasil untuk &ldquo;{query}&rdquo;</p>
            <p className="text-sm text-slate-500 mt-1">Coba kata kunci lain atau reset filter kategori</p>
            <button
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
              className="mt-5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-all"
            >
              Reset pencarian
            </button>
          </div>
        )}

        <div className="mt-14 p-8 bg-gradient-to-r from-blue-900/20 via-slate-900 to-indigo-900/20 border border-slate-800 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Tidak ketemu jawaban Anda?</h4>
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
