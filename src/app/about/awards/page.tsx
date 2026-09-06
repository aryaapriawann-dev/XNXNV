"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Trophy, ChevronRight } from "lucide-react";
const AWARDS = [
  { id: "1", nama: "Startup Digital Terbaik 2026", pemberi: "Indonesia Tech Awards", tahun: "2026", kategori: "nasional" },
  { id: "2", nama: "Best Web Agency Asia", pemberi: "Asia Digital Excellence", tahun: "2025", kategori: "internasional" },
  { id: "3", nama: "Inovasi AI Lokal", pemberi: "Kemenkominfo", tahun: "2025", kategori: "nasional" },
  { id: "4", nama: "Top 50 SaaS APAC", pemberi: "SaaS Review Asia", tahun: "2024", kategori: "internasional" },
  { id: "5", nama: "Tempat Kerja Terbaik", pemberi: "HR Indonesia Survey", tahun: "2024", kategori: "nasional" },
  { id: "6", nama: "Open Source Contributor", pemberi: "GitHub Community", tahun: "2023", kategori: "internasional" },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "nasional", label: "Nasional" }, { id: "internasional", label: "Internasional" }] as const;
export default function AwardsPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => AWARDS.filter((a) => (cat === "all" || a.kategori === cat) && (a.nama + a.pemberi).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Tentang Kami</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Penghargaan</h1>
        <p className="text-lg text-zinc-300">{AWARDS.length} penghargaan yang kami raih.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari penghargaan..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((a) => (
          <div key={a.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Trophy className="h-8 w-8 text-yellow-500 mb-3" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{a.nama}</h2>
            <p className="text-zinc-600 dark:text-zinc-400">{a.pemberi}</p>
            <p className="text-sm text-zinc-500 mt-2">{a.tahun} • {a.kategori}</p>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada penghargaan yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/about/press" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Liputan Media <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
