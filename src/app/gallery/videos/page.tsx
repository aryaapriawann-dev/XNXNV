"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Clapperboard, ChevronRight } from "lucide-react";
const VIDS = [
  { id: "1", judul: "Behind the Code Ep.1", durasi: "12:40", kategori: "tim", deskripsi: "Sehari bersama tim engineering." },
  { id: "2", judul: "Peluncuran v3.4", durasi: "6:15", kategori: "produk", deskripsi: "Highlight fitur dashboard baru." },
  { id: "3", judul: "Hackathon 48 Jam", durasi: "9:30", kategori: "acara", deskripsi: "Kompilasi momen hackathon internal." },
  { id: "4", judul: "Culture Day 2026", durasi: "7:50", kategori: "tim", deskripsi: "Perayaan dan games kantor." },
  { id: "5", judul: "Tour Kantor Baru", durasi: "5:20", kategori: "tim", deskripsi: "Lihat workspace baru kami." },
  { id: "6", judul: "Testimoni Klien", durasi: "8:44", kategori: "produk", deskripsi: "Kata klien tentang hasil proyek." },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "produk", label: "Produk" }, { id: "tim", label: "Tim" }, { id: "acara", label: "Acara" }] as const;
export default function GalleryVideosPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => VIDS.filter((v) => (cat === "all" || v.kategori === cat) && (v.judul + v.deskripsi).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Galeri</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Video Galeri</h1>
        <p className="text-lg text-zinc-300">Momen bergerak dari tim dan produk kami.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari video..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((v) => (
          <div key={v.id} className="rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="aspect-video bg-zinc-900 flex items-center justify-center relative">
              <Clapperboard className="h-12 w-12 text-white" />
              <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1 rounded bg-black/70 text-white">{v.durasi}</span>
            </div>
            <div className="p-5"><h2 className="text-lg font-bold text-zinc-900 dark:text-white">{v.judul}</h2>
              <p className="text-zinc-600 dark:text-zinc-400">{v.deskripsi}</p></div>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada video yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/gallery/collections" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Koleksi Foto <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
