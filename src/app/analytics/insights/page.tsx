"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, TrendingUp, ChevronRight, Check, BarChart3 } from "lucide-react";

const DATA = [
  { id: "1", nama: "Lonjakan Pengguna Malam", desc: "Traffic naik 32% pukul 19–22 WIB.", kategori: "traffic", meta: "Naik 32%" },
  { id: "2", nama: "Server Jakarta Terpadat", desc: "Utilisasi 87% — tambah kapasitas.", kategori: "server", meta: "+12% minggu ini" },
  { id: "3", nama: "Churn Turun", desc: "Retensi naik setelah onboarding baru.", kategori: "retensi", meta: "-8% churn" },
  { id: "4", nama: "Paket Keluarga Laris", desc: "Konversi 2x lipat via promo.", kategori: "konversi", meta: "2x lipat" },
  { id: "5", nama: "Error Rate Rendah", desc: "99,98% koneksi sukses minggu ini.", kategori: "kualitas", meta: "99,98%" },
  { id: "6", nama: "Wilayah Baru Tumbuh", desc: "Makassar & Balikpapan naik signifikan.", kategori: "wilayah", meta: "+21%" },
];

const CATS = [
  { id: "all", label: "Semua" },
  { id: "traffic", label: "Traffic" },
  { id: "server", label: "Server" },
  { id: "retensi", label: "Retensi" },
  { id: "konversi", label: "Konversi" },
  { id: "kualitas", label: "Kualitas" },
  { id: "wilayah", label: "Wilayah" },
];

export default function InsightsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");

  const filtered = useMemo(() => {
    const query = q.toLowerCase();
    return DATA.filter((item) => {
      const matchCategory = cat === "all" || item.kategori === cat;
      const matchSearch = item.nama.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query);
      return matchCategory && matchSearch;
    });
  }, [q, cat]);

  const stats = useMemo(() => ({
    total: DATA.length,
    categories: [...new Set(DATA.map((d) => d.kategori))].length,
    avgGrowth: DATA.reduce((acc, d) => acc + (parseFloat(d.meta) || 0), 0) / DATA.length,
  }), []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Analitik</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Wawasan Produk</h1>
          <p className="text-lg text-zinc-300">Temuan berbasis data untuk keputusan lebih cepat.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <BarChart3 className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.total}</p>
              <p className="text-sm text-zinc-500">Wawasan</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <TrendingUp className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.categories}</p>
              <p className="text-sm text-zinc-500">Kategori</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Check className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.avgGrowth.toFixed(1)}%</p>
              <p className="text-sm text-zinc-500">Rata-rata Growth</p>
            </div>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari wawasan..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            />
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
              <div
                key={item.id}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow"
              >
                <TrendingUp className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{item.nama}</h2>
                <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                <p className="text-sm text-zinc-500 mt-2 flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  {item.meta}
                </p>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada hasil yang cocok.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/analytics/reports"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Lihat Laporan <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
