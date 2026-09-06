"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Cpu, ChevronRight, Check } from "lucide-react";
const DATA = [
  { id: "1", nama: "VPN Corp Dashboard", desc: "Monitoring 10rb device.", kategori: "dashboard", meta: "Fintech" },
  { id: "2", nama: "Toko Online Hijau", desc: "Konversi naik 45%.", kategori: "ecommerce", meta: "Ritel" },
  { id: "3", nama: "App Absensi", desc: "50rb karyawan harian.", kategori: "aplikasi", meta: "Enterprise" },
  { id: "4", nama: "Portal Kampus", desc: "SSO 20rb mahasiswa.", kategori: "portal", meta: "Edukasi" },
  { id: "5", nama: "Site Klinik", desc: "Booking online 3 bahasa.", kategori: "website", meta: "Kesehatan" }
];
const CATS = [{ id: "all", label: "Semua" }, { id: "dashboard", label: "Dashboard" }, { id: "ecommerce", label: "E-commerce" }, { id: "aplikasi", label: "Aplikasi" }, { id: "portal", label: "Portal" }, { id: "website", label: "Website" }] as const;
export default function Page() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
 const f = useMemo(() => DATA.filter((x) =>( (cat === "all" || x.kategori === cat) && (x.nama + " " + x.desc).toLowerCase().includes(q.toLowerCase()))), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Portofolio</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Proyek Unggulan</h1>
        <p className="text-lg text-zinc-300">Pilihan terbaik tim kami.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari proyek..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((x) => (
          <div key={x.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Cpu className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{x.nama}</h2>
            <p className="text-zinc-600 dark:text-zinc-400">{x.desc}</p>
            <p className="text-sm text-zinc-500 mt-2">{x.kategori} • {x.meta}</p>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada hasil yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/portfolio/gallery" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Lihat Galeri <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
