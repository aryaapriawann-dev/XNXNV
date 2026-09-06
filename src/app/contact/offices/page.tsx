"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Building2, ChevronRight } from "lucide-react";
const KANTOR = [
  { id: "1", kota: "Jakarta", alamat: "Jl. Sudirman Kav. 52-53, Jakarta Selatan", jam: "Senin-Jumat 09.00-17.00", telp: "(021) 555-0101", wilayah: "jawa" },
  { id: "2", kota: "Bandung", alamat: "Jl. Dago No. 88, Bandung", jam: "Senin-Jumat 09.00-17.00", telp: "(022) 555-0102", wilayah: "jawa" },
  { id: "3", kota: "Surabaya", alamat: "Jl. Tunjungan No. 45, Surabaya", jam: "Senin-Jumat 09.00-17.00", telp: "(031) 555-0103", wilayah: "jawa" },
  { id: "4", kota: "Medan", alamat: "Jl. Gatot Subroto No. 12, Medan", jam: "Senin-Jumat 09.00-17.00", telp: "(061) 555-0104", wilayah: "luar-jawa" },
  { id: "5", kota: "Makassar", alamat: "Jl. AP Pettarani No. 7, Makassar", jam: "Senin-Jumat 09.00-17.00", telp: "(0411) 555-0105", wilayah: "luar-jawa" },
  { id: "6", kota: "Denpasar", alamat: "Jl. Teuku Umar No. 99, Denpasar", jam: "Senin-Sabtu 09.00-17.00", telp: "(0361) 555-0106", wilayah: "luar-jawa" },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "jawa", label: "Jawa" }, { id: "luar-jawa", label: "Luar Jawa" }] as const;
export default function OfficesPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => KANTOR.filter((k) => (cat === "all" || k.wilayah === cat) && (k.kota + k.alamat).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Kontak</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Kantor Kami</h1>
        <p className="text-lg text-zinc-300">Kunjungi kami di 6 kota Indonesia.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari kota..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((k) => (
          <div key={k.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Building2 className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{k.kota}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-2">{k.alamat}</p>
            <p className="text-sm text-zinc-500">{k.jam}</p><p className="text-sm text-zinc-500">{k.telp}</p>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada kantor yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Hubungi Kami <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
