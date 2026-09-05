"use client";

import { useState } from "react";
import { Clock, Zap, Search, Sparkles } from "lucide-react";

interface ReleaseItem {
  id: string;
  version: string;
  title: string;
  date: string;
  type: "major" | "minor" | "patch";
  highlights: string[];
  changes: {
    category: "Features" | "Improvements" | "Security" | "Fixes";
    items: string[];
  }[];
}

const RELEASES: ReleaseItem[] = [
  {
    id: "1",
    version: "v2.5.0",
    title: "Turbopack Engine Upgrade & Edge Streaming Support",
    date: "04 September 2026",
    type: "major",
    highlights: [
      "Waktu kompilasi Turbopack 40% lebih cepat",
      "Dukungan penuh response streaming di Next.js Edge Runtime",
      "Modul enkripsi data at-rest otomatis"
    ],
    changes: [
      {
        category: "Features",
        items: [
          "Integrasi Edge caching otomatis untuk dynamic route handlers",
          "Komponen VideoShowcase baru dengan lazy loading bawaan"
        ]
      },
      {
        category: "Improvements",
        items: [
          "Optimasi bundle size Tailwind CSS v4 hingga 18%",
          "Pembaruan komponen navigasi filter di semua subfolder"
        ]
      },
      {
        category: "Security",
        items: [
          "Update dependency lucide-react ke versi kompatibel",
          "Penguatan CORS policy pada public API endpoints"
        ]
      }
    ]
  },
  {
    id: "2",
    version: "v2.4.2",
    title: "Multi-Filter Performance & Responsive Polish",
    date: "28 Agustus 2026",
    type: "patch",
    highlights: [
      "Perbaikan state pagination pada filter lowongan kerja",
      "Peningkatan kecepatan render tabel harga"
    ],
    changes: [
      {
        category: "Fixes",
        items: [
          "Perbaikan inkonsistensi index signature pada objek data dinamis",
          "Perbaikan overflow pada mobile view modal kontak"
        ]
      },
      {
        category: "Improvements",
        items: [
          "Penambahan visual state empty results di seluruh halaman katalog"
        ]
      }
    ]
  },
  {
    id: "3",
    version: "v2.4.0",
    title: "Dark Mode Ecosystem & Monolith Refactoring",
    date: "15 Agustus 2026",
    type: "minor",
    highlights: [
      "Konsolidasi struktur folder Next.js monolith",
      "Standarisasi palet warna slate-950/slate-900"
    ],
    changes: [
      {
        category: "Features",
        items: [
          "Halaman Events Calendar dengan deteksi status upcoming otomatis",
          "Halaman Studi Kasus & Portofolio terintegrasi"
        ]
      },
      {
        category: "Improvements",
        items: [
          "Peningkatan skor aksesibilitas (a11y) ke level 98+"
        ]
      }
    ]
  }
];

export default function ChangelogArchivePage() {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReleases = RELEASES.filter((rel) => {
    const matchesType = selectedType === "all" || rel.type === selectedType;
    const matchesSearch = rel.version.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rel.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Header */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4 border border-blue-500/20">
            <Sparkles className="w-4 h-4" />
            <span>Product Updates</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Changelog & Riwayat Rilis
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Semua pembaruan fitur, optimasi performa, dan patch keamanan yang dirilis ke platform.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Filter Controls */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari rilis atau fitur..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-200"
            />
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            {["all", "major", "minor", "patch"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedType === type
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-10">
          {filteredReleases.map((release) => (
            <div
              key={release.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-all shadow-xl"
            >
              {/* Release Top */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-white">{release.version}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase ${
                    release.type === "major" ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" :
                    release.type === "minor" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" :
                    "bg-slate-800 text-slate-400 border border-slate-700"
                  }`}>
                    {release.type}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{release.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-4">
                {release.title}
              </h3>

              {/* Highlights */}
              <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 mb-6">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Sorotan Utama:</h4>
                <ul className="space-y-1.5">
                  {release.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <Zap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-4">
                {release.changes.map((group, idx) => (
                  <div key={idx}>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 inline-block mb-2">
                      {group.category}
                    </span>
                    <ul className="space-y-1 pl-1">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-slate-600 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredReleases.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800">
            <Search className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-slate-300">Tidak ada rilis yang cocok</p>
            <p className="text-sm text-slate-500 mt-1">Coba sesuaikan kata kunci pencarian Anda</p>
          </div>
        )}
      </div>
    </div>
  );
}
