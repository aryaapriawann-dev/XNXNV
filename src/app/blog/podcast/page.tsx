"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Mic, ChevronRight } from "lucide-react";
const EP = [
  { id: "1", judul: "Ep. 24 — Skala Tim Remote 100 Orang", durasi: "42 mnt", didengar: 3200, kategori: "manajemen" },
  { id: "2", judul: "Ep. 23 — SEO Setelah Era AI", durasi: "35 mnt", didengar: 5100, kategori: "pemasaran" },
  { id: "3", judul: "Ep. 22 — Harga Jasa Web yang Sehat", durasi: "38 mnt", didengar: 2800, kategori: "bisnis" },
  { id: "4", judul: "Ep. 21 — Dari Freelance ke Agency", durasi: "45 mnt", didengar: 4600, kategori: "bisnis" },
  { id: "5", judul: "Ep. 20 — Design System Anti Ribet", durasi: "31 mnt", didengar: 2400, kategori: "desain" },
  { id: "6", judul: "Ep. 19 — Keamanan Web untuk Pemula", durasi: "40 mnt", didengar: 3900, kategori: "teknis" },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "bisnis", label: "Bisnis" }, { id: "pemasaran", label: "Pemasaran" }, { id: "desain", label: "Desain" }, { id: "teknis", label: "Teknis" }, { id: "manajemen", label: "Manajemen" }] as const;
export default function PodcastPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => EP.filter((e) => (cat === "all" || e.kategori === cat) && e.judul.toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Blog</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Podcast</h1>
        <p className="text-lg text-zinc-300">Obrolan santai soal digital, bisnis, dan teknologi.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-4xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari episode..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <ul className="space-y-4">{f.map((e) => (
          <li key={e.id} className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <span className="w-12 h-12 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center shrink-0"><Mic className="h-5 w-5 text-white dark:text-zinc-900" /></span>
            <div className="flex-1"><h2 className="text-lg font-bold text-zinc-900 dark:text-white">{e.judul}</h2>
              <p className="text-sm text-zinc-500">{e.durasi} • {e.didengar.toLocaleString("id-ID")} didengar</p></div>
          </li>))}</ul>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada episode yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/blog/series" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Seri Artikel <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
