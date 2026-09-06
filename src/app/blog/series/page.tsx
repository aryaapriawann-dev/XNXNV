"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Layers, ChevronRight } from "lucide-react";
const SERI = [
  { id: "1", nama: "Next.js dari Nol", episode: 12, kategori: "teknologi", deskripsi: "Seri lengkap membangun aplikasi produksi." },
  { id: "2", nama: "SEO 30 Hari", episode: 30, kategori: "pemasaran", deskripsi: "Satu taktik SEO setiap hari selama sebulan." },
  { id: "3", nama: "UMKM Go-Digital", episode: 8, kategori: "bisnis", deskripsi: "Langkah digitalisasi untuk usaha kecil." },
  { id: "4", nama: "Design System Praktis", episode: 10, kategori: "desain", deskripsi: "Membangun sistem desain dari komponen kecil." },
  { id: "5", nama: "AI untuk Pemula", episode: 6, kategori: "teknologi", deskripsi: "Memahami dan memakai AI tanpa latar teknis." },
  { id: "6", nama: "Copywriting Konversi", episode: 7, kategori: "pemasaran", deskripsi: "Menulis yang menjual tanpa terkesan menjual." },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "teknologi", label: "Teknologi" }, { id: "pemasaran", label: "Pemasaran" }, { id: "bisnis", label: "Bisnis" }, { id: "desain", label: "Desain" }] as const;
export default function SeriesPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => SERI.filter((s) => (cat === "all" || s.kategori === cat) && (s.nama + s.deskripsi).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Blog</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Seri Artikel</h1>
        <p className="text-lg text-zinc-300">Belajar tuntas lewat seri bersambung.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari seri..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((s) => (
          <div key={s.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Layers className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{s.nama}</h2>
            <p className="text-sm text-zinc-500 mb-2">{s.episode} episode</p>
            <p className="text-zinc-600 dark:text-zinc-400">{s.deskripsi}</p>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada seri yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/blog/podcast" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Podcast Kami <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
