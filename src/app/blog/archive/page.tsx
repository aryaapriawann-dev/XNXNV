"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Calendar,
  Tag,
  ChevronLeft,
  ChevronRight,
  Archive,
  Newspaper,
  RotateCcw,
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  year: number;
  date: string;
  readTime: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "tutorial", label: "Tutorial" },
  { id: "keamanan", label: "Keamanan" },
  { id: "berita", label: "Berita" },
  { id: "tips", label: "Tips" },
] as const;

const YEARS = ["all", "2026", "2025", "2024"] as const;

const POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Cara Memilih VPN Terbaik untuk Kerja Remote 2026",
    excerpt: "Panduan lengkap memilih layanan VPN yang cepat, aman, dan stabil untuk menunjang produktivitas kerja dari mana saja.",
    category: "tutorial",
    year: 2026,
    date: "2026-08-20",
    readTime: "8 mnt",
  },
  {
    id: "2",
    title: "5 Ancaman Keamanan Siber yang Wajib Diwaspadai Tahun Ini",
    excerpt: "Kenali modus phishing, ransomware, dan pencurian data terbaru beserta cara sederhana melindungi diri Anda.",
    category: "keamanan",
    year: 2026,
    date: "2026-07-11",
    readTime: "6 mnt",
  },
  {
    id: "3",
    title: "XVPNX Rilis Server Baru di 3 Kota Indonesia",
    excerpt: "Ekspansi infrastruktur untuk latensi lebih rendah: Jakarta, Surabaya, dan Medan kini online dengan kapasitas ganda.",
    category: "berita",
    year: 2026,
    date: "2026-06-02",
    readTime: "4 mnt",
  },
  {
    id: "4",
    title: "Tips Menghemat Kuota Saat Streaming dengan VPN",
    excerpt: "Trik memilih server dan pengaturan kompresi agar nonton tetap lancar tanpa boros kuota internet.",
    category: "tips",
    year: 2026,
    date: "2026-04-18",
    readTime: "5 mnt",
  },
  {
    id: "5",
    title: "Memahami Enkripsi AES-256 dengan Bahasa Sederhana",
    excerpt: "Apa itu enkripsi kelas militer dan mengapa ia menjadi standar keamanan data modern? Simak penjelasan ringkasnya.",
    category: "keamanan",
    year: 2025,
    date: "2025-11-25",
    readTime: "7 mnt",
  },
  {
    id: "6",
    title: "Tutorial Setup VPN di Router Rumah dalam 10 Menit",
    excerpt: "Lindungi semua perangkat di rumah sekaligus dengan menginstal VPN langsung di router. Ikuti langkah mudahnya.",
    category: "tutorial",
    year: 2025,
    date: "2025-09-14",
    readTime: "10 mnt",
  },
  {
    id: "7",
    title: "Rekap 2025: Pencapaian dan Terima Kasih untuk Pengguna",
    excerpt: "Setahun penuh pertumbuhan: 500 ribu pengguna baru, 12 server tambahan, dan uptime 99,9%. Ini cerita kami.",
    category: "berita",
    year: 2025,
    date: "2025-12-30",
    readTime: "5 mnt",
  },
  {
    id: "8",
    title: "7 Kebiasaan Browsing Aman untuk Pemula",
    excerpt: "Dari password manager hingga verifikasi dua langkah, bangun kebiasaan digital yang aman mulai hari ini.",
    category: "tips",
    year: 2025,
    date: "2025-08-05",
    readTime: "6 mnt",
  },
  {
    id: "9",
    title: "Sejarah Singkat VPN: Dari Kantor ke Kantong Anda",
    excerpt: "Perjalanan teknologi VPN dari alat korporat mahal hingga aplikasi harian yang terjangkau semua orang.",
    category: "berita",
    year: 2024,
    date: "2024-10-12",
    readTime: "8 mnt",
  },
  {
    id: "10",
    title: "Panduan Split Tunneling: Atur Jalur Aplikasi Tertentu",
    excerpt: "Maksimalkan kecepatan dengan mengatur aplikasi mana yang lewat VPN dan mana yang lewat koneksi biasa.",
    category: "tutorial",
    year: 2024,
    date: "2024-06-28",
    readTime: "7 mnt",
  },
];

const POSTS_PER_PAGE = 6;

export default function BlogArchivePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return POSTS.filter((p) => {
      const matchCat = selectedCategory === "all" || p.category === selectedCategory;
      const matchYear = selectedYear === "all" || String(p.year) === selectedYear;
      const matchSearch =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return matchCat && matchYear && matchSearch;
    });
  }, [searchQuery, selectedCategory, selectedYear]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const currentPosts = filtered.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE
  );

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedYear("all");
    setCurrentPage(1);
  };

  const categoryLabel = (id: string) =>
    CATEGORIES.find((c) => c.id === id)?.label ?? id;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Arsip Blog
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Jelajahi {POSTS.length} artikel tutorial, keamanan, dan berita dari tim XVPNX.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 space-y-5">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari artikel (mis. VPN, keamanan, tutorial)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

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

          <div className="flex flex-wrap gap-3 justify-center">
            {YEARS.map((y) => (
              <button
                key={y}
                onClick={() => {
                  setSelectedYear(y);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg text-sm transition-all border ${
                  selectedYear === y
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {y === "all" ? "Semua Tahun" : y}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Archive className="w-4 h-4" />
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

        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400">
                      <Tag className="w-3 h-3" /> {categoryLabel(post.category)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-100 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-800 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Newspaper className="w-3 h-3" /> {post.readTime} baca
                    </span>
                    <span className="text-blue-400 font-medium">Baca selengkapnya →</span>
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
            <h3 className="text-xl font-semibold mb-2">Tidak ada artikel ditemukan</h3>
            <p className="text-slate-400">Coba ubah filter, tahun, atau kata kunci pencarian Anda</p>
            <button
              onClick={resetFilters}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}

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
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
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
