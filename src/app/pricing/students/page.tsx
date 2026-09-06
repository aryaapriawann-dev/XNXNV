"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Building2, ChevronRight, Check } from "lucide-react";
const DATA = [
  { id: "1", nama: "Pelajar 1 Bulan", desc: "Rp15rb — verifikasi NISN.", kategori: "bulanan", meta: "-50%" },
  { id: "2", nama: "Semester 6 Bulan", desc: "Rp75rb — hemat 17%.", kategori: "semester", meta: "Terlaris" },
  { id: "3", nama: "Tahunan Siswa", desc: "Rp120rb — 2 bulan gratis.", kategori: "tahunan", meta: "Hemat" },
  { id: "4", nama: "Kampus Bundle", desc: "Rp50rb/org min 10.", kategori: "grup", meta: "Kampus" },
  { id: "5", nama: "Guru & Dosen", desc: "Rp99rb/tahun.", kategori: "edukasi", meta: "-60%" }
];

export default function Page() {
  const [q, setQ] = useState(""); const f = useMemo(() => DATA.filter((x) =>( (x.nama + " " + x.desc).toLowerCase().includes(q.toLowerCase()))), [q]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Harga</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Paket Pelajar</h1>
        <p className="text-lg text-zinc-300">Harga khusus pelajar & mahasiswa.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari paket..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((x) => (
          <div key={x.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Building2 className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{x.nama}</h2>
            <p className="text-zinc-600 dark:text-zinc-400">{x.desc}</p>
            <p className="text-sm text-zinc-500 mt-2 flex items-center gap-1"><Check className="h-4 w-4 text-green-500" />{x.meta}</p>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada hasil yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/pricing/deals" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Lihat Promo <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
