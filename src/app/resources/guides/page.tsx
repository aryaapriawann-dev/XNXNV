"use client";

import { useMemo, useState } from "react";
import {
  Search,
  BookOpen,
  Tag,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Library,
  RotateCcw,
  Clock,
  ArrowRight,
} from "lucide-react";

interface Guide {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  level: string;
  date: string;
  readTime: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "setup", label: "Setup" },
  { id: "keamanan", label: "Keamanan" },
  { id: "troubleshoot", label: "Troubleshoot" },
  { id: "optimasi", label: "Optimasi" },
  { id: "privasi", label: "Privasi" },
] as const;

const LEVELS = [
  { id: "all", label: "Semua Level" },
  { id: "pemula", label: "Pemula" },
  { id: "menengah", label: "Menengah" },
  { id: "lanjutan", label: "Lanjutan" },
] as const;

const GUIDES: Guide[] = [
  {
    id: "1",
    title: "Panduan Instalasi XVPNX di Windows, Mac, dan Linux",
    excerpt:
      "Langkah demi langkah menginstal dan mengonfigurasi XVPNX pertama kali di semua sistem operasi desktop.",
    category: "setup",
    level: "pemula",
    date: "2026-08-15",
    readTime: "10 mnt",
  },
  {
    id: "2",
    title: "Mengaktifkan Kill Switch untuk Perlindungan Maksimal",
    excerpt:
      "Cegah kebocoran data saat koneksi VPN terputus dengan fitur kill switch yang tersedia di XVPNX.",
    category: "keamanan",
    level: "menengah",
    date: "2026-07-22",
    readTime: "6 mnt",
  },
  {
    id: "3",
    title: "Mengatasi Koneksi Lambat: Diagnosis dan Solusi",
    excerpt:
      "Identifikasi penyebab utama koneksi VPN lambat dan pelajari cara mengoptimalkan kecepatan Anda.",
    category: "troubleshoot",
    level: "menengah",
    date: "2026-06-30",
    readTime: "8 mnt",
  },
  {
    id: "4",
    title: "Konfigurasi Split Tunneling untuk Performa Optimal",
    excerpt:
      "Atur aplikasi mana yang melewati VPN dan mana yang langsung agar kecepatan tetap maksimal.",
    category: "optimasi",
    level: "lanjutan",
    date: "2026-06-10",
    readTime: "7 mnt",
  },
  {
    id: "5",
    title: "Menyembunyikan Jejak Digital: DNS Leak Protection",
    excerpt:
      "Pahami risiko kebocoran DNS dan cara memastikan privasi Anda benar-benar terlindungi saat browsing.",
    category: "privasi",
    level: "menengah",
    date: "2026-05-18",
    readTime: "9 mnt",
  },
  {
    id: "6",
    title: "Setup VPN di Router Rumah: Lindungi Semua Perangkat",
    excerpt:
      "Panduan lengkap menginstal XVPNX langsung di router agar seluruh perangkat di jaringan rumah terlindungi.",
    category: "setup",
    level: "lanjutan",
    date: "2026-04-25",
    readTime: "12 mnt",
  },
  {
    id: "7",
    title: "Pertama Kali Pakai VPN? Mulai dari Sini",
    excerpt:
      "Pengenalan konsep VPN untuk pemula absolut: apa itu, mengapa penting, dan cara langsung menggunakannya.",
    category: "setup",
    level: "pemula",
    date: "2026-03-14",
    readTime: "5 mnt",
  },
  {
    id: "8",
    title: "Mengatasi Error Autentikasi dan Gagal Login",
    excerpt:
      "Solusi cepat untuk masalah login paling umum di aplikasi XVPNX, dari reset kredensial hingga cache.",
    category: "troubleshoot",
    level: "pemula",
    date: "2026-02-20",
    readTime: "6 mnt",
  },
  {
    id: "9",
    title: "Menggunakan Obfuscation Mode di Jaringan Ketat",
    excerpt:
      "Bypas firewall dan inspeksi DPI dengan mode obfuscation agar VPN tetap berjalan di jaringan terbatas.",
    category: "keamanan",
    level: "lanjutan",
    date: "2026-01-08",
    readTime: "11 mnt",
  },
  {
    id: "10",
    title: "Optimasi Streaming: Server Tercepat untuk Netflix & YouTube",
    excerpt:
      "Tips memilih server dan protokol ideal agar streaming video lancar tanpa buffering.",
    category: "optimasi",
    level: "pemula",
    date: "2025-11-30",
    readTime: "7 mnt",
  },
];

const LEVEL_COLORS: Record<string, string> = {
  pemula: "bg-emerald-500/10 text-emerald-400",
  menengah: "bg-amber-500/10 text-amber-400",
  lanjutan: "bg-rose-500/10 text-rose-400",
};

const POSTS_PER_PAGE = 6;

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return GUIDES.filter((g) => {
      const matchCat =
        selectedCategory === "all" || g.category === selectedCategory;
      const matchLevel =
        selectedLevel === "all" || g.level === selectedLevel;
      const matchSearch =
        q === "" ||
        g.title.toLowerCase().includes(q) ||
        g.excerpt.toLowerCase().includes(q);
      return matchCat && matchLevel && matchSearch;
    });
  }, [searchQuery, selectedCategory, selectedLevel]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const currentGuides = filtered.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE
  );

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedLevel("all");
    setCurrentPage(1);
  };

  const categoryLabel = (id: string) =>
    CATEGORIES.find((c) => c.id === id)?.label ?? id;

  const levelLabel = (id: string) =>
    LEVELS.find((l) => l.id === id)?.label ?? id;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Panduan Pengguna
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Temukan {GUIDES.length} panduan lengkap — dari instalasi dasar hingga
            konfigurasi lanjutan XVPNX.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 space-y-5">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari panduan (mis. instalasi, kill switch, streaming)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCategory(c.id);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === c.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Level filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {LEVELS.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  setSelectedLevel(l.id);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg text-sm transition-all border ${
                  selectedLevel === l.id
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5" />
                  {l.label}
                </span>
              </button>
            ))}
          </div>

          {/* Result count + reset */}
          <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Library className="w-4 h-4" />
              Hasil: <strong className="text-slate-200">{filtered.length}</strong>
            </span>
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
          </div>
        </div>

        {/* Guide cards */}
        {currentGuides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentGuides.map((guide) => (
              <article
                key={guide.id}
                className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400">
                      <Tag className="w-3 h-3" /> {categoryLabel(guide.category)}
                    </span>
                    <span
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                        LEVEL_COLORS[guide.level] ?? "bg-slate-800 text-slate-400"
                      }`}
                    >
                      <BarChart3 className="w-3 h-3" /> {levelLabel(guide.level)}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-100 mb-2 leading-snug">
                    {guide.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    {guide.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-800 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {guide.readTime} baca
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {new Date(guide.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1 text-blue-400 font-medium">
                      Baca <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-4">
              <Search className="w-8 h-8 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Tidak ada panduan ditemukan
            </h3>
            <p className="text-slate-400">
              Coba ubah filter level, kategori, atau kata kunci pencarian Anda
            </p>
            <button
              onClick={resetFilters}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
              aria-label="Halaman sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                  safePage === page
                    ? "bg-blue-600 text-white"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages, p + 1))
              }
              disabled={safePage === totalPages}
              aria-label="Halaman berikutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
