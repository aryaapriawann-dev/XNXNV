"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Play, ChevronRight } from "lucide-react";
const VIDEO = [
  { id: "1", judul: "Tour Dashboard Analitik v2", durasi: "8:24", ditonton: 12400, kategori: "produk", deskripsi: "Walkthrough fitur dashboard terbaru." },
  { id: "2", judul: "Wawancara CEO: Visi 2030", durasi: "12:10", ditonton: 8600, kategori: "perusahaan", deskripsi: "Arah perusahaan lima tahun ke depan." },
  { id: "3", judul: "Tutorial Checkout QRIS", durasi: "5:42", ditonton: 15200, kategori: "tutorial", deskripsi: "Aktifkan pembayaran QRIS dalam 5 menit." },
  { id: "4", judul: "Kisah Sukses Koperasi Jatim", durasi: "9:15", ditonton: 6300, kategori: "klien", deskripsi: "50 ribu pengguna dalam 6 bulan." },
  { id: "5", judul: "Di Balik Layar Hackathon", durasi: "6:30", ditonton: 4100, kategori: "perusahaan", deskripsi: "48 jam membangun prototipe AI." },
  { id: "6", judul: "Optimasi Web Vitals Praktis", durasi: "11:05", ditonton: 9800, kategori: "tutorial", deskripsi: "Dari skor merah ke hijau selamanya." },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "produk", label: "Produk" }, { id: "tutorial", label: "Tutorial" }, { id: "klien", label: "Klien" }, { id: "perusahaan", label: "Perusahaan" }] as const;
export default function NewsVideosPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => VIDEO.filter((v) => (cat === "all" || v.kategori === cat) && (v.judul + v.deskripsi).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Berita</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Video Berita</h1>
        <p className="text-lg text-zinc-300">Tonton kabar terbaru dalam format video.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari video..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((v) => (
          <div key={v.id} className="rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="aspect-video bg-zinc-900 flex items-center justify-center relative">
              <Play className="h-12 w-12 text-white" />
              <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1 rounded bg-black/70 text-white">{v.durasi}</span>
            </div>
            <div className="p-5"><h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{v.judul}</h2>
              <p className="text-sm text-zinc-500 mb-2">{v.ditonton.toLocaleString("id-ID")} ditonton</p>
              <p className="text-zinc-600 dark:text-zinc-400">{v.deskripsi}</p></div>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada video yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/news/trending" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Berita Trending <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
