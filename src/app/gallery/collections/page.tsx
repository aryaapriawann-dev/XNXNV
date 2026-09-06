"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Images, ChevronRight } from "lucide-react";
const KOLEKSI = [
  { id: "1", nama: "Peluncuran Produk", jumlah: 48, kategori: "produk", deskripsi: "Dokumentasi peluncuran dan demo produk terbaru." },
  { id: "2", nama: "Di Balik Layar", jumlah: 36, kategori: "tim", deskripsi: "Keseharian tim engineering, desain, dan marketing." },
  { id: "3", nama: "Acara & Komunitas", jumlah: 64, kategori: "acara", deskripsi: "Momen webinar, workshop, dan meetup komunitas." },
  { id: "4", nama: "Kantor & Budaya", jumlah: 29, kategori: "tim", deskripsi: "Suasana kerja dan perayaan di kantor kami." },
  { id: "5", nama: "Showcase Klien", jumlah: 52, kategori: "produk", deskripsi: "Hasil proyek yang dibanggakan bersama klien." },
  { id: "6", nama: "Penghargaan", jumlah: 18, kategori: "acara", deskripsi: "Pencapaian dan apresiasi yang kami terima." },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "produk", label: "Produk" }, { id: "tim", label: "Tim" }, { id: "acara", label: "Acara" }] as const;
export default function CollectionsPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => KOLEKSI.filter((k) => (cat === "all" || k.kategori === cat) && (k.nama + k.deskripsi).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Galeri</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Koleksi Foto</h1>
        <p className="text-lg text-zinc-300">Jelajahi momen terbaik kami dalam koleksi tematik.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari koleksi..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((k) => (
          <Link key={k.id} href="/gallery/detail" className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg transition-shadow">
            <Images className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{k.nama}</h2>
            <p className="text-sm text-zinc-500 mb-2">{k.jumlah} foto</p>
            <p className="text-zinc-600 dark:text-zinc-400">{k.deskripsi}</p>
          </Link>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada koleksi yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/gallery/detail" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Lihat Galeri <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
