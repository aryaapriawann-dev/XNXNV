"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Building, ChevronRight } from "lucide-react";
const KLIEN = [
  { id: "1", nama: "Batik Solo Asli", industri: "ritel", proyek: 3, sejak: "2022", testimoni: "Penjualan naik 240%." },
  { id: "2", nama: "Koperasi Jatim Makmur", industri: "keuangan", proyek: 2, sejak: "2023", testimoni: "50 ribu pengguna aktif." },
  { id: "3", nama: "KursusOnline.id", industri: "edukasi", proyek: 4, sejak: "2021", testimoni: "120 ribu siswa." },
  { id: "4", nama: "Kopi Nusantara", industri: "ritel", proyek: 2, sejak: "2023", testimoni: "85 gerai terpantau." },
  { id: "5", nama: "BPR Maju Bersama", industri: "keuangan", proyek: 1, sejak: "2024", testimoni: "NPL turun 60%." },
  { id: "6", nama: "Sekolah Cerdas Bangsa", industri: "edukasi", proyek: 2, sejak: "2022", testimoni: "PPDB tanpa antre." },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "ritel", label: "Ritel" }, { id: "keuangan", label: "Keuangan" }, { id: "edukasi", label: "Edukasi" }] as const;
export default function ClientsPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => KLIEN.filter((k) => (cat === "all" || k.industri === cat) && k.nama.toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Portofolio</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Klien Kami</h1>
        <p className="text-lg text-zinc-300">Dipercaya 200+ perusahaan Indonesia.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari klien..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((k) => (
          <div key={k.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Building className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{k.nama}</h2>
            <p className="text-sm text-zinc-500 mb-2">Klien sejak {k.sejak} • {k.proyek} proyek</p>
            <p className="font-semibold text-green-600 dark:text-green-400">{k.testimoni}</p>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada klien yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/portfolio/gallery" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Galeri Karya <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
