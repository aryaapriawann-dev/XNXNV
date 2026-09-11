"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Star, ChevronRight, Award, Users, Heart, Eye, Zap } from "lucide-react";

const SPOTLIGHT = [
  { id: "1", title: "Mitra Terbaik 2026 — TechVision", deskripsi: "TechVision Indonesia menjadi mitra terbaik 2026 untuk kontribusi luar biasa dalam pengembangan infrastruktur cloud.", views: 3200, rating: 5, category: "teknologi", location: "Jakarta", joined: "2020" },
  { id: "2", title: "Mitra Terbaik 2026 — Nusantara Digital", deskripsi: "Nusantara Digital memenangkan penghargaan mitra terbaik untuk inovasi produk digital yang berdampak luas.", views: 2800, rating: 5, category: "digital", location: "Bandung", joined: "2021" },
  { id: "3", title: "Mitra Terkemuka — CyberShield Labs", deskripsi: "CyberShield Labs diakui sebagai mitra terkemuka dalam keamanan siber dan penetrasi testing.", views: 2400, rating: 4, category: "keamanan", location: "Surabaya", joined: "2022" },
  { id: "4", title: "Mitra Berkinerja Tinggi — DataPragmatika", deskripsi: "DataPragmatika menjadi mitra berkinerja tinggi dengan solusi data science yang membantu banyak klien.", views: 1950, rating: 4, category: "data", location: "Yogyakarta", joined: "2023" },
  { id: "5", title: "Mitra Berkinerja Tinggi — startupX", deskripsi: "startupX berhasil membawa pendekatan inovatif dalam solusi enterprise dan mendapatkan penghargaan mitra berkinerja tinggi.", views: 1780, rating: 4, category: "startup", location: "Medan", joined: "2023" },
];

const CATS = [
  { id: "all", label: "Semua" },
  { id: "teknologi", label: "Teknologi" },
  { id: "digital", label: "Digital" },
  { id: "keamanan", label: "Keamanan" },
  { id: "data", label: "Data" },
  { id: "startup", label: "Startup" },
];

export default function SpotlightPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [sortBy, setSortBy] = useState<"default" | "views" | "rating">("default");

  const filtered = useMemo(() => {
    let result = SPOTLIGHT.filter((item) => {
      const matchCat = cat === "all" || item.category === cat;
      const matchSearch = item.title.toLowerCase().includes(q.toLowerCase()) || item.deskripsi.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchSearch;
    });

    if (sortBy === "views") {
      result = [...result].sort((a, b) => b.views - a.views);
    } else if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [q, cat, sortBy]);

  const stats = useMemo(() => ({
    total: SPOTLIGHT.length,
    totalViews: SPOTLIGHT.reduce((acc, s) => acc + s.views, 0),
    avgRating: (SPOTLIGHT.reduce((acc, s) => acc + s.rating, 0) / SPOTLIGHT.length).toFixed(1),
  }), []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Partners</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Sorotan Mitra</h1>
          <p className="text-lg text-zinc-300">Mitra-mitra yang menonjol dengan kontribusi luar biasa.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Star className="w-5 h-5 text-yellow-500 mx-auto mb-2 fill-yellow-500" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.total}</p>
              <p className="text-sm text-zinc-500">Sorotan</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Eye className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.totalViews.toLocaleString("id-ID")}</p>
              <p className="text-sm text-zinc-500">Total Dilihat</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Award className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.avgRating}</p>
              <p className="text-sm text-zinc-500">Rating Rata-rata</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari sorotan mitra..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            >
              <option value="default">Urutan Default</option>
              <option value="views">Paling Dilihat</option>
              <option value="rating">Rating Tertinggi</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {CATS.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === c.id
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div key={item.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 capitalize">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 ml-auto">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-zinc-900 dark:text-white">{item.rating}</span>
                  </div>
                </div>
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{item.deskripsi}</p>
                <div className="flex items-center justify-between text-xs text-zinc-500 pt-3 border-t border-zinc-200 dark:border-slate-700">
                  <div className="flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Bergabung {item.joined}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{item.views.toLocaleString("id-ID")} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada sorotan yang cocok.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/partners/stories"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Cerita Mitra <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
