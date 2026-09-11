"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Star, ChevronRight, Quote, Heart, CheckCircle } from "lucide-react";

const DATA = [
  { id: "1", nama: "Klinik Sehat+", desc: "Koneksi antar-cabang stabil 99,9%.", kategori: "kesehatan", meta: "12 cabang", quote: "System kami yang sebelumnya sering down sekarang berjalan lancar setiap hari. Tim support sangat responsif.", rating: 5 },
  { id: "2", nama: "Kampus Digital", desc: "5000 mahasiswa ujian online lancar.", kategori: "edukasi", meta: "5rb pengguna", quote: "Mahasiswa kami bisa mengikuti ujian tanpa gangguan. Ini sudah menjadi harapan besar bagi kampus kami.", rating: 5 },
  { id: "3", nama: "Ritel Maju", desc: "Kasir cloud tanpa putus setahun.", kategori: "ritel", meta: "80 toko", quote: "Transaksi lancar tanpa putus selama 12 bulan terakhir. Pelanggan puas dan penjualan meningkat 30%.", rating: 4 },
  { id: "4", nama: "Studio Kreatif", desc: "Transfer file 4K 3x lebih cepat.", kategori: "kreatif", meta: "3x cepat", quote: "Workflow kami berubah total. File besar bisa dikirim dalam hitungan detik, bukan menit.", rating: 5 },
  { id: "5", nama: "Logistik Cepat", desc: "Tracking armada real-time.", kategori: "logistik", meta: "200 armada", quote: "Monitoring armada jadi jauh lebih mudah. Armada yang hilang bisa dilacak dalam waktu nyata.", rating: 4 },
];

const CATS = [
  { id: "all", label: "Semua" },
  { id: "kesehatan", label: "Kesehatan" },
  { id: "edukasi", label: "Edukasi" },
  { id: "ritel", label: "Ritel" },
  { id: "kreatif", label: "Kreatif" },
  { id: "logistik", label: "Logistik" },
];

export default function TestimonialsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [sortBy, setSortBy] = useState<"default" | "highest">("default");

  const filtered = useMemo(() => {
    let result = DATA.filter((item) => {
      const matchCat = cat === "all" || item.kategori === cat;
      const matchSearch = item.nama.toLowerCase().includes(q.toLowerCase()) || item.desc.toLowerCase().includes(q.toLowerCase()) || item.quote.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchSearch;
    });

    if (sortBy === "highest") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [q, cat, sortBy]);

  const stats = useMemo(() => ({
    total: DATA.length,
    avgRating: (DATA.reduce((acc, d) => acc + d.rating, 0) / DATA.length).toFixed(1),
    categories: [...new Set(DATA.map((d) => d.kategori))].length,
  }), []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Studi Kasus</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Testimoni Klien</h1>
          <p className="text-lg text-zinc-300">Cerita sukses dari pelanggan bisnis.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Star className="w-5 h-5 text-yellow-500 mx-auto mb-2 fill-yellow-500" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.total}</p>
              <p className="text-sm text-zinc-500">Testimoni</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Heart className="w-5 h-5 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.avgRating}</p>
              <p className="text-sm text-zinc-500">Rating Rata-rata</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Quote className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
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
                placeholder="Cari testimoni..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            >
              <option value="default">Urutan Default</option>
              <option value="highest">Rating Tertinggi</option>
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
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-zinc-900 dark:text-white">{item.rating} / 5</span>
                  <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{item.nama}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">{item.desc}</p>
                <p className="text-sm text-zinc-500 italic mb-3">"{item.quote}"</p>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <span className="px-2 py-1 rounded-full bg-zinc-100 dark:bg-slate-800 text-zinc-600 dark:text-zinc-300 capitalize">
                    {item.kategori}
                  </span>
                  <span className="text-zinc-400">•</span>
                  <span>{item.meta}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada hasil yang cocok.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/case-studies/featured"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Studi Unggulan <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
