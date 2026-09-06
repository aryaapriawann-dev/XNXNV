"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Video, ChevronRight } from "lucide-react";
const VIDS = [
  { id: "1", judul: "Dari Toko ke Online: Batik Solo", durasi: "7:12", ditonton: 9200, kategori: "ritel" },
  { id: "2", judul: "50 Ribu Anggota Koperasi Go-Digital", durasi: "9:48", ditonton: 6100, kategori: "keuangan" },
  { id: "3", judul: "120 Ribu Siswa Satu Platform", durasi: "8:05", ditonton: 7400, kategori: "edukasi" },
  { id: "4", judul: "85 Gerai Satu Dashboard", durasi: "6:33", ditonton: 5300, kategori: "ritel" },
  { id: "5", judul: "Menekan NPL dengan Data", durasi: "10:21", ditonton: 4800, kategori: "keuangan" },
  { id: "6", judul: "PPDB Tanpa Antre", durasi: "5:57", ditonton: 6900, kategori: "edukasi" },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "ritel", label: "Ritel" }, { id: "keuangan", label: "Keuangan" }, { id: "edukasi", label: "Edukasi" }] as const;
export default function CaseVideosPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => VIDS.filter((v) => (cat === "all" || v.kategori === cat) && v.judul.toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Studi Kasus</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Video Studi Kasus</h1>
        <p className="text-lg text-zinc-300">Kisah sukses klien dalam format video.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari video..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((v) => (
          <div key={v.id} className="rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="aspect-video bg-zinc-900 flex items-center justify-center relative">
              <Video className="h-12 w-12 text-white" />
              <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1 rounded bg-black/70 text-white">{v.durasi}</span>
            </div>
            <div className="p-5"><h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{v.judul}</h2>
              <p className="text-sm text-zinc-500">{v.ditonton.toLocaleString("id-ID")} ditonton</p></div>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada video yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/case-studies/featured" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Studi Unggulan <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
