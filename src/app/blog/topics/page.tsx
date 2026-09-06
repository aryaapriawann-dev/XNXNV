"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Tag, ChevronRight } from "lucide-react";

interface Topik {
  id: string;
  nama: string;
  deskripsi: string;
  jumlah: number;
  tren: string;
}

const TOPIK: Topik[] = [
  { id: "1", nama: "Next.js", deskripsi: "Tutorial dan pola terbaik framework React modern.", jumlah: 24, tren: "+6 minggu ini" },
  { id: "2", nama: "SEO", deskripsi: "Optimasi mesin pencari untuk trafik organik.", jumlah: 18, tren: "+3 minggu ini" },
  { id: "3", nama: "UI/UX", deskripsi: "Prinsip desain antarmuka yang memikat pengguna.", jumlah: 21, tren: "+4 minggu ini" },
  { id: "4", nama: "AI", deskripsi: "Kecerdasan buatan untuk bisnis dan developer.", jumlah: 15, tren: "+8 minggu ini" },
  { id: "5", nama: "Bisnis Digital", deskripsi: "Strategi monetisasi dan pertumbuhan startup.", jumlah: 19, tren: "+2 minggu ini" },
  { id: "6", nama: "Keamanan", deskripsi: "Praktik keamanan web yang wajib diterapkan.", jumlah: 12, tren: "+1 minggu ini" },
];

export default function TopicsPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => TOPIK.filter((t) => (t.nama + t.deskripsi).toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Topik Artikel</h1>
          <p className="text-lg text-zinc-300">Jelajahi tulisan kami berdasarkan topik favorit Anda.</p>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari topik..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t) => (
              <Link key={t.id} href={`/blog/filter?topik=${t.nama.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="h-5 w-5 text-zinc-900 dark:text-white" />
                  <span className="text-xs font-bold text-zinc-500">{t.jumlah} artikel • {t.tren}</span>
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{t.nama}</h2>
                <p className="text-zinc-600 dark:text-zinc-400">{t.deskripsi}</p>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada topik yang cocok.</p>}
          <div className="flex justify-center mt-12">
            <Link href="/blog/bookmarks" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">
              Artikel Tersimpan <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
