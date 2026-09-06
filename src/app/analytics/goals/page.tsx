"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Flag, ChevronRight } from "lucide-react";
const GOALS = [
  { id: "1", nama: "Trafik 1 Juta/Bulan", progres: 72, kategori: "trafik", deskripsi: "Kunjungan organik bulanan situs utama." },
  { id: "2", nama: "Konversi Checkout 5%", progres: 64, kategori: "konversi", deskripsi: "Rasio pengunjung menjadi pembeli." },
  { id: "3", nama: "MRR Rp500 Juta", progres: 58, kategori: "pendapatan", deskripsi: "Pendapatan berulang bulanan semua layanan." },
  { id: "4", nama: "NPS di Atas 60", progres: 81, kategori: "engagement", deskripsi: "Skor kepuasan pelanggan triwulanan." },
  { id: "5", nama: "Bounce Rate <35%", progres: 47, kategori: "trafik", deskripsi: "Menurunkan pentalan halaman landing." },
  { id: "6", nama: "Retensi 85%", progres: 69, kategori: "engagement", deskripsi: "Pelanggan bertahan setelah 12 bulan." },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "trafik", label: "Trafik" }, { id: "konversi", label: "Konversi" }, { id: "pendapatan", label: "Pendapatan" }, { id: "engagement", label: "Engagement" }] as const;
export default function GoalsPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => GOALS.filter((g) => (cat === "all" || g.kategori === cat) && (g.nama + g.deskripsi).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Analitik</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Target & Progres</h1>
        <p className="text-lg text-zinc-300">Pantau pencapaian target bisnis 2026.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-4xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari target..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <ul className="space-y-4">{f.map((g) => (
          <li key={g.id} className="p-5 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex items-center gap-3 mb-2"><Flag className="h-5 w-5 text-zinc-900 dark:text-white" />
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex-1">{g.nama}</h2>
              <span className="font-bold text-zinc-900 dark:text-white">{g.progres}%</span></div>
            <p className="text-sm text-zinc-500 mb-3">{g.deskripsi}</p>
            <div className="h-2.5 rounded-full bg-zinc-100 dark:bg-slate-800 overflow-hidden">
              <div className="h-full rounded-full bg-zinc-900 dark:bg-white transition-all" style={{ width: `${g.progres}%` }} /></div>
          </li>))}</ul>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada target yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/analytics/export" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Ekspor Data <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
