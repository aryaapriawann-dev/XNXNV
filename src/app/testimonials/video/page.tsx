"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Star, ChevronRight } from "lucide-react";

const ITEMS = [
  { id: "1", name: "Video Testimoni 1", desc: "Kumpulan video testimoni dari pengguna yang telah merasakan manfaat produk kami. Testimoni pertama.", kategori: "testimonials", meta: "Terbaru" },
  { id: "2", name: "Video Testimoni 2", desc: "Kumpulan video testimoni dari pengguna yang telah merasakan manfaat produk kami. Testimoni kedua.", kategori: "testimonials", meta: "Populer" },
  { id: "3", name: "Video Testimoni 3", desc: "Kumpulan video testimoni dari pengguna yang telah merasakan manfaat produk kami. Testimoni ketiga.", kategori: "testimonials", meta: "Terpilih" },
  { id: "4", name: "Video Testimoni 4", desc: "Kumpulan video testimoni dari pengguna yang telah merasakan manfaat produk kami. Testimoni keempat.", kategori: "testimonials", meta: "Rising" },
  { id: "5", name: "Video Testimoni 5", desc: "Kumpulan video testimoni dari pengguna yang telah merasakan manfaat produk kami. Testimoni kelima.", kategori: "testimonials", meta: "Top rated" },
  { id: "6", name: "Video Testimoni 6", desc: "Kumpulan video testimoni dari pengguna yang telah merasakan manfaat produk kami. Testimoni keenam.", kategori: "testimonials", meta: "Review" },
];

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "testimonials", label: "Testimoni" },
];

export default function Page() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const f = useMemo(() =>
    ITEMS.filter((i) =>
      (cat === "all" || i.kategori === cat) &&
      (i.name + i.desc).toLowerCase().includes(q.toLowerCase())
    ), [q, cat]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Testimoni</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Video Testimoni</h1>
          <p className="text-lg text-zinc-300">Kumpulan video testimoni dari pengguna yang telah merasakan manfaat produk kami.</p>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari video testimoni..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            />
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((c) => (
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
            {f.map((i) => (
              <div key={i.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-zinc-400 transition-colors">
                <Star className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{i.name}</h2>
                <p className="text-zinc-600 dark:text-zinc-400">{i.desc}</p>
                <p className="text-sm text-zinc-500 mt-2 flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                  {i.meta}
                </p>
              </div>
            ))}
          </div>
          {f.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada hasil yang cocok.</p>
          )}
          <div className="flex justify-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Kembali ke Testimoni <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
