"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Lightbulb, ChevronRight } from "lucide-react";
const TIPS = [
  { id: "1", judul: "Percepat Website dalam 1 Jam", kategori: "teknis", level: "Pemula", isi: "Kompres gambar, aktifkan cache, dan hapus plugin tak terpakai." },
  { id: "2", judul: "Judul Iklan yang Diklik", kategori: "pemasaran", level: "Menengah", isi: "Pakai angka spesifik dan janji manfaat yang jelas." },
  { id: "3", judul: "Invoice Tepat Waktu Dibayar", kategori: "bisnis", level: "Pemula", isi: "Tenggat jelas, denda transparan, dan pengingat otomatis." },
  { id: "4", judul: "Backup Sebelum Update", kategori: "teknis", level: "Pemula", isi: "Selalu backup penuh sebelum memperbarui apapun." },
  { id: "5", judul: "Konten 1 Jadi 5 Format", kategori: "pemasaran", level: "Menengah", isi: "Daur ulang artikel jadi video, carousel, dan newsletter." },
  { id: "6", judul: "Brief Desain Anti Revisi", kategori: "bisnis", level: "Lanjutan", isi: "Sertakan contoh, batasan, dan definisi selesai." },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "teknis", label: "Teknis" }, { id: "pemasaran", label: "Pemasaran" }, { id: "bisnis", label: "Bisnis" }] as const;
export default function TipsPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => TIPS.filter((t) => (cat === "all" || t.kategori === cat) && (t.judul + t.isi).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">FAQ</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Tips Cepat</h1>
        <p className="text-lg text-zinc-300">Solusi singkat untuk masalah sehari-hari.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-4xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari tips..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{f.map((t) => (
          <div key={t.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Lightbulb className="h-6 w-6 text-yellow-500 mb-3" />
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{t.judul}</h2>
            <p className="text-xs font-bold text-zinc-500 mb-2">{t.level}</p>
            <p className="text-zinc-600 dark:text-zinc-400">{t.isi}</p>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada tips yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/faq/search" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Cari FAQ <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
