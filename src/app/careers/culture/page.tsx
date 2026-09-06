"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Users, ChevronRight, Check } from "lucide-react";
const DATA = [
  { id: "1", nama: "Remote-First", desc: "Kerja dari mana saja, hasil yang diukur.", kategori: "kerja", meta: "120+ staf remote" },
  { id: "2", nama: "Transparan", desc: "Gaji terbuka & update mingguan.", kategori: "nilai", meta: "Sejak 2022" },
  { id: "3", nama: "Belajar Terus", desc: "Budget kursus Rp10jt/tahun.", kategori: "growth", meta: "92% ikut" },
  { id: "4", nama: "Sehat & Seimbang", desc: "Cuti 15 hari + cuti mental.", kategori: "wellbeing", meta: "4,9/5 survei" },
  { id: "5", nama: "Milik Bersama", desc: "ESOP untuk karyawan tetap.", kategori: "kepemilikan", meta: "100% eligible" },
  { id: "6", nama: "Berani Coba", desc: "Eksperimen mingguan & demo day.", kategori: "inovasi", meta: "Tiap Jumat" }
];

export default function Page() {
  const [q, setQ] = useState(""); const f = useMemo(() => DATA.filter((x) =>( (x.nama + " " + x.desc).toLowerCase().includes(q.toLowerCase()))), [q]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Karier</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Budaya Kerja</h1>
        <p className="text-lg text-zinc-300">Nilai dan keseharian tim XVPNX.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari nilai budaya..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((x) => (
          <div key={x.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Users className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{x.nama}</h2>
            <p className="text-zinc-600 dark:text-zinc-400">{x.desc}</p>
            <p className="text-sm text-zinc-500 mt-2 flex items-center gap-1"><Check className="h-4 w-4 text-green-500" />{x.meta}</p>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada hasil yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/careers/apply" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Lamar Sekarang <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
