"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Newspaper, ChevronRight } from "lucide-react";
const PRESS = [
  { id: "1", judul: "XNXNV Bantu 5.000 UMKM Go-Digital", media: "TechDaily.id", tanggal: "28 Sep 2026", kategori: "teknologi" },
  { id: "2", judul: "Startup Lokal Raih Pendanaan Seri A", media: "BisnisKita", tanggal: "15 Sep 2026", kategori: "bisnis" },
  { id: "3", judul: "AI Berbahasa Indonesia Meluncur", media: "StartupNews", tanggal: "2 Sep 2026", kategori: "teknologi" },
  { id: "4", judul: "Wawancara: Membangun Tim Remote 100 Orang", media: "KerjaFleksibel", tanggal: "20 Agu 2026", kategori: "budaya" },
  { id: "5", judul: "Dashboard Analitik Lokal Saingi Global", media: "DataInsight", tanggal: "8 Agu 2026", kategori: "teknologi" },
  { id: "6", judul: "Program Magang Cetak 500 Lulusan", media: "EdukasiPlus", tanggal: "25 Jul 2026", kategori: "budaya" },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "teknologi", label: "Teknologi" }, { id: "bisnis", label: "Bisnis" }, { id: "budaya", label: "Budaya" }] as const;
export default function PressPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => PRESS.filter((p) => (cat === "all" || p.kategori === cat) && (p.judul + p.media).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Tentang Kami</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Liputan Media</h1>
        <p className="text-lg text-zinc-300">Apa kata media tentang kami.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-4xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari liputan..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <ul className="space-y-4">{f.map((p) => (
          <li key={p.id} className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Newspaper className="h-6 w-6 text-zinc-900 dark:text-white shrink-0 mt-1" />
            <div><h2 className="text-lg font-bold text-zinc-900 dark:text-white">{p.judul}</h2>
              <p className="text-sm text-zinc-500">{p.media} • {p.tanggal}</p></div>
          </li>))}</ul>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada liputan yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/about/awards" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Penghargaan <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
