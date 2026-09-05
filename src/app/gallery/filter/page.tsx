"use client";

import { useState } from "react";
import { Search, Filter, ChevronLeft, ChevronRight, Image as ImageIcon, Tag } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: "kantor" | "event" | "produk" | "tim" | "workshop";
  date: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "kantor", label: "Kantor" },
  { id: "event", label: "Event" },
  { id: "produk", label: "Produk" },
  { id: "tim", label: "Tim" },
  { id: "workshop", label: "Workshop" },
] as const;

const GALLERY: GalleryItem[] = [
  {
    id: "1",
    title: "Suasana Kantor Pusat Jakarta",
    description: "Ruang kerja kolaboratif dengan konsep terbuka dan area hijau di lantai 12.",
    category: "kantor",
    date: "2026-08-20",
  },
  {
    id: "2",
    title: "Tech Summit 2026",
    description: "Dokumentasi panggung utama dan sesi keynote yang dihadiri 500+ peserta.",
    category: "event",
    date: "2026-08-15",
  },
  {
    id: "3",
    title: "Peluncuran Dasbor Analitik v3.2",
    description: "Tangkapan layar fitur dasbor analitik real-time terbaru kami.",
    category: "produk",
    date: "2026-08-28",
  },
  {
    id: "4",
    title: "Retreat Tim ke Bandung",
    description: "Kegiatan team building dan perencanaan produk semester dua.",
    category: "tim",
    date: "2026-07-30",
  },
  {
    id: "5",
    title: "Workshop React Lanjutan",
    description: "Sesi praktik langsung bersama 35 peserta di Bandung Tech Hub.",
    category: "workshop",
    date: "2026-07-22",
  },
  {
    id: "6",
    title: "Ruang Rapat Kreatif",
    description: "Ruang brainstorming dengan papan tulis interaktif dan pencahayaan alami.",
    category: "kantor",
    date: "2026-07-10",
  },
  {
    id: "7",
    title: "Meetup Founder Surabaya",
    description: "Momen networking santai bersama komunitas startup Jawa Timur.",
    category: "event",
    date: "2026-06-25",
  },
  {
    id: "8",
    title: "Sesi Foto Tim Produk",
    description: "Perkenalan wajah-wajah di balik pengembangan platform kami.",
    category: "tim",
    date: "2026-06-12",
  },
];

export default function GalleryFilterPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredItems = GALLERY.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-sm mb-4 border border-pink-500/20">
            <ImageIcon className="w-4 h-4" />
            <span>Galeri</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
            Galeri: Filter & Cari
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Jelajahi dokumentasi kantor, event, produk, dan tim kami dengan filter kategori.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 space-y-6">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari foto berdasarkan judul atau deskripsi..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-slate-200"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setSelectedCategory(cat.id); setCurrentPage(1); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-pink-600 text-white shadow-lg shadow-pink-600/20"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Filter className="w-4 h-4" />
            <span>Total Hasil: <strong className="text-slate-200">{filteredItems.length}</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden transition-all hover:shadow-xl"
            >
              <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-slate-700" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs uppercase tracking-wider text-pink-400 font-semibold border border-slate-700 flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {item.category}
                  </span>
                  <span className="text-xs text-slate-500">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800">
            <Search className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-slate-300">Tidak ada foto yang cocok</p>
            <p className="text-sm text-slate-500 mt-1">Coba kata kunci atau kategori lain</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                  currentPage === page ? "bg-pink-600 text-white" : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
