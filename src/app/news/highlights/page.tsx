"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Star, ChevronRight, TrendingUp, Award, Eye, Clock } from "lucide-react";

const HIGHLIGHTS = [
  { id: "1", title: "Kolaborasi Strategis dengan Universitas", date: "15 Sep 2026", category: "mitra", deskripsi: "Kerjaa sama dengan universitas untuk program sertifikasi digital dan magang.", views: 1250, highlighted: true },
  { id: "2", title: "Peluncuran Fitur Analitik Real-time", date: "10 Sep 2026", category: "produk", deskripsi: "Fitur analitik real-time memungkinkan pengguna memantau performa aplikasi secara langsung.", views: 980, highlighted: true },
  { id: "3", title: "Ekspansi ke 3 Kota Baru", date: "5 Sep 2026", category: "bisnis", deskripsi: "Ekspansi ke Yogyakarta, Surabaya, dan Medan untuk memperluas jangkauan layanan.", views: 1520, highlighted: true },
  { id: "4", title: "Program Magang Teknologi 2026", date: "28 Agu 2026", category: "karir", deskripsi: "Penerimaan 50 magang teknologi untuk program pengembangan talenta digital.", views: 890, highlighted: false },
  { id: "5", title: "Penyempurnaan Keamanan Siber", date: "20 Agu 2026", category: "keamanan", deskripsi: "Upgrade keamanan dengan implementasi enkripsi generasi terbaru.", views: 1100, highlighted: false },
  { id: "6", title: "Rilis Versi 2.0 dengan Fitur Baru", date: "15 Agu 2026", category: "produk", deskripsi: "Versi 2.0 hadir dengan antarmuka baru, fitur kolaborasi real-time, dan integrasi API.", views: 1850, highlighted: true },
  { id: "7", title: "Kemitraan dengan Provider Cloud", date: "10 Agu 2026", category: "mitra", deskripsi: "Kemitraan strategis dengan provider cloud untuk infrastruktur yang lebih andal.", views: 760, highlighted: false },
  { id: "8", title: "Workshop Keamanan Siber Nasional", date: "5 Agu 2026", category: "karir", deskripsi: "Workshop keamanan siber tingkat nasional untuk 200 peserta dari berbagai instansi.", views: 1340, highlighted: false },
];

const CATS = [
  { id: "all", label: "Semua" },
  { id: "mitra", label: "Mitra" },
  { id: "produk", label: "Produk" },
  { id: "bisnis", label: "Bisnis" },
  { id: "karir", label: "Karir" },
  { id: "keamanan", label: "Keamanan" },
];

export default function HighlightsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [sortBy, setSortBy] = useState<"default" | "views" | "newest">("default");

  const filtered = useMemo(() => {
    let result = HIGHLIGHTS.filter((item) => {
      const matchCat = cat === "all" || item.category === cat;
      const matchSearch = item.title.toLowerCase().includes(q.toLowerCase()) || item.deskripsi.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchSearch;
    });

    if (sortBy === "views") {
      result = [...result].sort((a, b) => b.views - a.views);
    } else if (sortBy === "newest") {
      result = [...result].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return result;
  }, [q, cat, sortBy]);

  const stats = useMemo(() => ({
    total: HIGHLIGHTS.length,
    totalViews: HIGHLIGHTS.reduce((acc, h) => acc + h.views, 0),
    highlighted: HIGHLIGHTS.filter((h) => h.highlighted).length,
    avgViews: Math.round(HIGHLIGHTS.reduce((acc, h) => acc + h.views, 0) / HIGHLIGHTS.length),
  }), []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">News</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Highlight Berita</h1>
          <p className="text-lg text-zinc-300">Berita dan pengumuman terbaru dari tim kami.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <TrendingUp className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.total}</p>
              <p className="text-sm text-zinc-500">Total Highlight</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Eye className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.totalViews.toLocaleString("id-ID")}</p>
              <p className="text-sm text-zinc-500">Total Dilihat</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Award className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.highlighted}</p>
              <p className="text-sm text-zinc-500">Highlighted</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Clock className="w-5 h-5 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.avgViews}</p>
              <p className="text-sm text-zinc-500">Rata-rata Views</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari highlight..."
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
              <option value="newest">Terbaru</option>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((item) => (
              <article
                key={item.id}
                className={`p-6 rounded-2xl border transition-shadow ${
                  item.highlighted
                    ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-500 shadow-lg shadow-indigo-600/20"
                    : "border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 capitalize">
                      {item.category}
                    </span>
                    {item.highlighted && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                        Highlighted
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-zinc-400">{item.date}</span>
                </div>
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{item.deskripsi}</p>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>{item.views.toLocaleString("id-ID")} views</span>
                  <Link
                    href="/news/detail"
                    className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                  >
                    Baca selengkapnya →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada highlight yang cocok.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/news/press"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Liputan Media <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
