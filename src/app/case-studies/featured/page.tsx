"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Star, ChevronRight } from "lucide-react";

interface Studi {
  id: string;
  title: string;
  industri: string;
  hasil: string;
  deskripsi: string;
  rating: number;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "ritel", label: "Ritel" },
  { id: "keuangan", label: "Keuangan" },
  { id: "edukasi", label: "Edukasi" },
] as const;

const STUDI: Studi[] = [
  { id: "1", title: "Toko Batik Go-Digital", industri: "ritel", hasil: "+240% penjualan", deskripsi: "Katalog online dan pembayaran digital untuk UMKM batik Solo.", rating: 5 },
  { id: "2", title: "Aplikasi Koperasi Simpan Pinjam", industri: "keuangan", hasil: "50rb pengguna", deskripsi: "Aplikasi mobile untuk 12.000 anggota koperasi di Jawa Timur.", rating: 5 },
  { id: "3", title: "Platform Kursus Online", industri: "edukasi", hasil: "120rb siswa", deskripsi: "LMS lengkap dengan video, kuis, dan sertifikat otomatis.", rating: 4 },
  { id: "4", title: "Kasir Cloud Waralaba Kopi", industri: "ritel", hasil: "85 gerai", deskripsi: "Sistem POS terpusat untuk jaringan waralaba kopi.", rating: 5 },
  { id: "5", title: "Dashboard Kredit Mikro", industri: "keuangan", hasil: "-60% NPL", deskripsi: "Skor kredit alternatif berbasis data transaksi.", rating: 4 },
  { id: "6", title: "PPDB Online Sekolah", industri: "edukasi", hasil: "30 sekolah", deskripsi: "Sistem penerimaan siswa baru tanpa antre.", rating: 5 },
];

export default function FeaturedPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("all");
  const filtered = useMemo(
    () => STUDI.filter((s) => (cat === "all" || s.industri === cat) && (s.title + s.deskripsi).toLowerCase().includes(query.toLowerCase())),
    [query, cat]
  );

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Studi Kasus</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Studi Unggulan</h1>
          <p className="text-lg text-zinc-300">Proyek pilihan yang paling berdampak bagi klien kami.</p>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari studi kasus..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" />
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((c) => (
              <button key={c.id} onClick={() => setCat(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s) => (
              <div key={s.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: s.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{s.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{s.deskripsi}</p>
                <p className="text-sm font-bold px-3 py-1 rounded-full bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 inline-block">{s.hasil}</p>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada studi yang cocok.</p>}
          <div className="flex justify-center mt-12">
            <Link href="/case-studies/detail" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">
              Semua Studi <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
