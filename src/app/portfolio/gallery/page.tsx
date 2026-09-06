"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ImageIcon, ChevronRight } from "lucide-react";
const ITEMS = [
  { id: "1", nama: "Company Profile 2026", kategori: "website", deskripsi: "Website profil perusahaan manufaktur dengan 3 bahasa.", gambar: "profil" },
  { id: "2", nama: "Aplikasi Kasir Cloud", kategori: "aplikasi", deskripsi: "POS multi-gerai dengan laporan real-time.", gambar: "kasir" },
  { id: "3", nama: "Rebranding Kopi Lokal", kategori: "branding", deskripsi: "Logo, kemasan, dan panduan merek menyeluruh.", gambar: "kopi" },
  { id: "4", nama: "Toko Online Fashion", kategori: "website", deskripsi: "E-commerce dengan checkout 1-klik dan QRIS.", gambar: "fashion" },
  { id: "5", nama: "Dashboard Logistik", kategori: "aplikasi", deskripsi: "Pelacakan armada dan optimasi rute pengiriman.", gambar: "logistik" },
  { id: "6", nama: "Identitas Startup Fintech", kategori: "branding", deskripsi: "Nama, logo, dan sistem visual untuk aplikasi keuangan.", gambar: "fintech" },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "website", label: "Website" }, { id: "aplikasi", label: "Aplikasi" }, { id: "branding", label: "Branding" }] as const;
export default function GalleryPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => ITEMS.filter((i) => (cat === "all" || i.kategori === cat) && (i.nama + i.deskripsi).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Portofolio</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Galeri Karya</h1>
        <p className="text-lg text-zinc-300">Kumpulan karya terbaik lintas website, aplikasi, dan branding.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari karya..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((i) => (
          <div key={i.id} className="rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center">
              <ImageIcon className="h-12 w-12 text-white/70" />
            </div>
            <div className="p-5"><span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{i.kategori}</span>
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white">{i.nama}</h2>
              <p className="text-zinc-600 dark:text-zinc-400">{i.deskripsi}</p></div>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada karya yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/portfolio/showcase" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Showcase <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
