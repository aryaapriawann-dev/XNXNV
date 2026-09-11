"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Image, ChevronRight, Heart, Eye, Users } from "lucide-react";

const KOLEKSI = [
  { id: "1", nama: "Koleksi Logo Terbaru", deskripsi: "Kumpulan logo terbaru dari berbagai industri yang sedang tren.", gambar: "https://picsum.photos/seed/logo1/800/600", views: 2400, kategori: "desain" },
  { id: "2", nama: "Foto Produk Retail", deskripsi: "Foto produk retail dengan pencahayaan dan sudut yang menarik.", gambar: "https://picsum.photos/seed/retail1/800/600", views: 1800, kategori: "komersial" },
  { id: "3", nama: "Gambar Alam Indonesia", deskripsi: "Keindahan alam Indonesia dari berbagai daerah yang menakjubkan.", gambar: "https://picsum.photos/seed/alam1/800/600", views: 3200, kategori: "alam" },
  { id: "4", nama: "Koleksi Makanan", deskripsi: "Foto makanan enak dan menggugah selera dari berbagai restoran.", gambar: "https://picsum.photos/seed/makanan1/800/600", views: 2100, kategori: "kuliner" },
  { id: "5", nama: "Portrait Fotografi", deskripsi: "Portrait fotografi dengan pencahayaan artistik dan ekspresi autentik.", gambar: "https://picsum.photos/seed/portrait1/800/600", views: 1500, kategori: "fotografi" },
  { id: "6", nama: "Arsitektur Modern", deskripsi: "Gedung dan struktur arsitektur modern dengan detail yang menakjubkan.", gambar: "https://picsum.photos/seed/arsitektur1/800/600", views: 2800, kategori: "arsitektur" },
];

const CATS = [
  { id: "all", label: "Semua" },
  { id: "desain", label: "Desain" },
  { id: "komersial", label: "Komersial" },
  { id: "alam", label: "Alam" },
  { id: "kuliner", label: "Kuliner" },
  { id: "fotografi", label: "Fotografi" },
  { id: "arsitektur", label: "Arsitektur" },
];

export default function ShowcasePage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [sortBy, setSortBy] = useState<"default" | "views" | "a-z">("default");

  const filtered = useMemo(() => {
    let result = KOLEKSI.filter((item) => {
      const matchCat = cat === "all" || item.kategori === cat;
      const matchSearch = item.nama.toLowerCase().includes(q.toLowerCase()) || item.deskripsi.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchSearch;
    });

    if (sortBy === "views") {
      result = [...result].sort((a, b) => b.views - a.views);
    } else if (sortBy === "a-z") {
      result = [...result].sort((a, b) => a.nama.localeCompare(b.nama));
    }

    return result;
  }, [q, cat, sortBy]);

  const stats = useMemo(() => ({
    total: KOLEKSI.length,
    totalViews: KOLEKSI.reduce((acc, k) => acc + k.views, 0),
    categories: [...new Set(KOLEKSI.map((k) => k.kategori))].length,
  }), []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Galeri</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Tampilan Galeri</h1>
          <p className="text-lg text-zinc-300">Koleksi visual yang menginspirasi dari berbagai kategori.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Image className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.total}</p>
              <p className="text-sm text-zinc-500">Koleksi</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Eye className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.totalViews.toLocaleString("id-ID")}</p>
              <p className="text-sm text-zinc-500">Total Dilihat</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Heart className="w-5 h-5 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.categories}</p>
              <p className="text-sm text-zinc-500">Kategori</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari koleksi..."
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
              <option value="a-z">A-Z</option>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div key={item.id} className="group rounded-2xl overflow-hidden border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{item.nama}</h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">{item.deskripsi}</p>
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {item.views.toLocaleString("id-ID")} views
                    </span>
                    <span className="px-2 py-1 rounded-full bg-zinc-100 dark:bg-slate-800 text-zinc-600 dark:text-zinc-300 capitalize">
                      {item.kategori}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada koleksi yang cocok.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/gallery/collections"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Koleksi Lainnya <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
