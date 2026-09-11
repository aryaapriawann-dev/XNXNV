"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Mic, Clock, ChevronRight, Play } from "lucide-react";

const EP = [
  { id: "1", judul: "Ep. 24 — Skala Tim Remote 100 Orang", durasi: "42 mnt", didengar: 3200, kategori: "manajemen", tanggal: "2026-09-01" },
  { id: "2", judul: "Ep. 23 — SEO Setelah Era AI", durasi: "35 mnt", didengar: 5100, kategori: "pemasaran", tanggal: "2026-08-25" },
  { id: "3", judul: "Ep. 22 — Harga Jasa Web yang Sehat", durasi: "38 mnt", didengar: 2800, kategori: "bisnis", tanggal: "2026-08-18" },
  { id: "4", judul: "Ep. 21 — Dari Freelance ke Agency", durasi: "45 mnt", didengar: 4600, kategori: "bisnis", tanggal: "2026-08-11" },
  { id: "5", judul: "Ep. 20 — Design System Anti Ribet", durasi: "31 mnt", didengar: 2400, kategori: "desain", tanggal: "2026-08-04" },
  { id: "6", judul: "Ep. 19 — Keamanan Web untuk Pemula", durasi: "40 mnt", didengar: 3900, kategori: "teknis", tanggal: "2026-07-28" },
  { id: "7", judul: "Ep. 18 — Produktivitas Tanpa Burnout", durasi: "36 mnt", didengar: 3100, kategori: "manajemen", tanggal: "2026-07-21" },
  { id: "8", judul: "Ep. 17 — Copywriting yang Menjual", durasi: "29 mnt", didengar: 2700, kategori: "pemasaran", tanggal: "2026-07-14" },
];

const CATS = [
  { id: "all", label: "Semua" },
  { id: "bisnis", label: "Bisnis" },
  { id: "pemasaran", label: "Pemasaran" },
  { id: "desain", label: "Desain" },
  { id: "teknis", label: "Teknis" },
  { id: "manajemen", label: "Manajemen" },
];

export default function PodcastPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [sortBy, setSortBy] = useState<"default" | "newest" | "popular">("default");

  const filtered = useMemo(() => {
    let result = EP.filter((e) => {
      const matchCat = cat === "all" || e.kategori === cat;
      const matchSearch = e.judul.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchSearch;
    });

    if (sortBy === "newest") {
      result = [...result].sort((a, b) => new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime());
    } else if (sortBy === "popular") {
      result = [...result].sort((a, b) => b.didengar - a.didengar);
    }

    return result;
  }, [q, cat, sortBy]);

  const stats = useMemo(() => ({
    total: EP.length,
    totalDengarkan: EP.reduce((acc, e) => acc + e.didengar, 0),
    totalDurasi: EP.reduce((acc, e) => {
      const mnt = parseInt(e.durasi);
      return acc + (isNaN(mnt) ? 0 : mnt);
    }, 0),
  }), []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Podcast</h1>
          <p className="text-lg text-zinc-300">Obrolan santai soal digital, bisnis, dan teknologi.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Mic className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.total}</p>
              <p className="text-sm text-zinc-500">Episode</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Play className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.totalDengarkan.toLocaleString("id-ID")}</p>
              <p className="text-sm text-zinc-500">Total Dengarkan</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Clock className="w-5 h-5 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{Math.round(stats.totalDurasi / 60)} jam</p>
              <p className="text-sm text-zinc-500">Konten</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari episode..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            >
              <option value="default">Urutan Default</option>
              <option value="newest">Terbaru</option>
              <option value="popular">Paling Dengar</option>
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

          <ul className="space-y-4">
            {filtered.map((e) => (
              <li key={e.id} className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
                <span className="w-12 h-12 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center shrink-0">
                  <Mic className="h-5 w-5 text-white dark:text-zinc-900" />
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-white truncate">{e.judul}</h2>
                  <div className="flex items-center gap-3 mt-1 text-sm text-zinc-500">
                    <span>{e.durasi}</span>
                    <span>•</span>
                    <span>{e.didengar.toLocaleString("id-ID")} didengar</span>
                  </div>
                </div>
                <span className="text-xs text-zinc-400 shrink-0">{e.tanggal}</span>
              </li>
            ))}
          </ul>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada episode yang cocok.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/blog/series"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Seri Artikel <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
