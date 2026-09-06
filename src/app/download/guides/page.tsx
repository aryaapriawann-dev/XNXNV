"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, BookOpen, ChevronRight, Download } from "lucide-react";
const PANDUAN = [
  { id: "1", judul: "Panduan Memulai Website", halaman: 24, kategori: "pemula", deskripsi: "Dari domain hingga website tayang pertama." },
  { id: "2", judul: "Panduan SEO Lanjutan", halaman: 48, kategori: "pemasaran", deskripsi: "Teknik SEO teknis dan strategi konten." },
  { id: "3", judul: "Panduan Keamanan Web", halaman: 32, kategori: "teknis", deskripsi: "Checklist keamanan untuk pemilik situs." },
  { id: "4", judul: "Panduan Analitik Bisnis", halaman: 28, kategori: "bisnis", deskripsi: "Membaca data dan mengambil keputusan." },
  { id: "5", judul: "Panduan Toko Online", halaman: 40, kategori: "bisnis", deskripsi: "Membangun e-commerce yang laris." },
  { id: "6", judul: "Panduan Brand Kit", halaman: 20, kategori: "pemula", deskripsi: "Menyusun identitas merek yang konsisten." },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "pemula", label: "Pemula" }, { id: "pemasaran", label: "Pemasaran" }, { id: "teknis", label: "Teknis" }, { id: "bisnis", label: "Bisnis" }] as const;
export default function DlGuidesPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => PANDUAN.filter((p) => (cat === "all" || p.kategori === cat) && (p.judul + p.deskripsi).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Unduhan</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Panduan Gratis</h1>
        <p className="text-lg text-zinc-300">E-book praktis yang bisa langsung dipakai.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari panduan..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((p) => (
          <div key={p.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <BookOpen className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{p.judul}</h2>
            <p className="text-sm text-zinc-500 mb-2">{p.halaman} halaman • PDF</p>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">{p.deskripsi}</p>
            <span className="inline-flex items-center gap-1 text-sm font-bold text-zinc-900 dark:text-white"><Download className="h-4 w-4" /> Unduh Gratis</span>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada panduan yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/download/changelog" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Catatan Rilis <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
