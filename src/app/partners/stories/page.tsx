"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Quote, ChevronRight } from "lucide-react";
const TESTI = [
  { id: "1", nama: "Hendra Gunawan", peran: "Owner, Batik Solo", tipe: "ritel", kutip: "Penjualan naik 240% dalam 4 bulan setelah katalog online jalan.", rating: 5 },
  { id: "2", nama: "Maria Chen", peran: "CFO, Koperasi Jatim", tipe: "keuangan", kutip: "Aplikasi koperasi dipakai 50 ribu anggota tanpa keluhan berarti.", rating: 5 },
  { id: "3", nama: "Fajar Nugroho", peran: "Founder, KursusOnline.id", tipe: "edukasi", kutip: "120 ribu siswa belajar tanpa downtime selama PPDB.", rating: 5 },
  { id: "4", nama: "Ratna Sari", peran: "CMO, Kopi Nusantara", tipe: "ritel", kutip: "85 gerai terpantau real-time dari satu dashboard.", rating: 4 },
  { id: "5", nama: "Dedi Kurniawan", peran: "Direktur, BPR Maju", tipe: "keuangan", kutip: "NPL turun 60% berkat skor kredit berbasis data.", rating: 5 },
  { id: "6", nama: "Lina Marlina", peran: "Kepala Sekolah, SD Cerdas", tipe: "edukasi", kutip: "PPDB online menghapus antrean ratusan orang tua.", rating: 4 },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "ritel", label: "Ritel" }, { id: "keuangan", label: "Keuangan" }, { id: "edukasi", label: "Edukasi" }] as const;
export default function StoriesPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => TESTI.filter((t) => (cat === "all" || t.tipe === cat) && (t.nama + t.kutip).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Mitra</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cerita Mitra</h1>
        <p className="text-lg text-zinc-300">Kata mereka yang tumbuh bersama kami.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari cerita..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((t) => (
          <div key={t.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Quote className="h-6 w-6 text-zinc-400 mb-3" />
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">“{t.kutip}”</p>
            <p className="font-bold text-zinc-900 dark:text-white">{t.nama}</p>
            <p className="text-sm text-zinc-500">{t.peran}</p>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada cerita yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/partners/join" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Jadi Mitra <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
