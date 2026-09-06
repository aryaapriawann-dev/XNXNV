"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Mic2, ChevronRight } from "lucide-react";
const PEMBICARA = [
  { id: "1", nama: "Arya Apriawan", peran: "Founder & CEO", topik: "teknologi", sesi: 24, bio: "Membangun produk digital sejak 2018." },
  { id: "2", nama: "Dewi Lestari", peran: "Head of Marketing", topik: "pemasaran", sesi: 18, bio: "Spesialis SEO dan growth untuk UMKM." },
  { id: "3", nama: "Rizky Pratama", peran: "Lead Designer", topik: "desain", sesi: 15, bio: "Advokat design system dan aksesibilitas." },
  { id: "4", nama: "Andi Wijaya", peran: "CTO", topik: "teknologi", sesi: 21, bio: "Arsitek cloud dan performa web." },
  { id: "5", nama: "Sari Utami", peran: "Head of Product", topik: "produk", sesi: 12, bio: "Strategi produk berbasis data." },
  { id: "6", nama: "Budi Santoso", peran: "Security Engineer", topik: "teknologi", sesi: 9, bio: "Praktisi keamanan aplikasi." },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "teknologi", label: "Teknologi" }, { id: "pemasaran", label: "Pemasaran" }, { id: "desain", label: "Desain" }, { id: "produk", label: "Produk" }] as const;
export default function SpeakersPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => PEMBICARA.filter((p) => (cat === "all" || p.topik === cat) && (p.nama + p.bio).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Acara</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Pembicara Kami</h1>
        <p className="text-lg text-zinc-300">Praktisi yang berbagi dari pengalaman nyata.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari pembicara..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((p) => (
          <div key={p.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <span className="w-12 h-12 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center mb-3"><Mic2 className="h-5 w-5 text-white dark:text-zinc-900" /></span>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{p.nama}</h2>
            <p className="text-sm text-zinc-500 mb-2">{p.peran} • {p.sesi} sesi</p>
            <p className="text-zinc-600 dark:text-zinc-400">{p.bio}</p>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada pembicara yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/events/past" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Acara Lalu <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
