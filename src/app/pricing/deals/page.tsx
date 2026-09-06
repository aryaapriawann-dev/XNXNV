"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, BadgePercent, ChevronRight } from "lucide-react";
const PROMO = [
  { id: "1", kode: "HEMAT30", diskon: "30%", syarat: "Paket Professional tahunan", berlaku: "s/d 31 Okt 2026", kategori: "layanan" },
  { id: "2", kode: "UMKM50", diskon: "50%", syarat: "Website company profile UMKM", berlaku: "s/d 15 Okt 2026", kategori: "layanan" },
  { id: "3", kode: "GRATISAI", diskon: "Gratis 3 bln", syarat: "Add-on AI copywriter", berlaku: "s/d 30 Sep 2026", kategori: "addon" },
  { id: "4", kode: "BUNDLE25", diskon: "25%", syarat: "Bundle website + maintenance", berlaku: "s/d 30 Nov 2026", kategori: "bundle" },
  { id: "5", kode: "REFERRAL20", diskon: "20%", syarat: "Referensikan teman bisnis", berlaku: "tanpa batas", kategori: "layanan" },
  { id: "6", kode: "STARTUP40", diskon: "40%", syarat: "MVP aplikasi untuk startup <2 thn", berlaku: "s/d 31 Des 2026", kategori: "bundle" },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "layanan", label: "Layanan" }, { id: "addon", label: "Add-on" }, { id: "bundle", label: "Bundle" }] as const;
export default function DealsPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => PROMO.filter((p) => (cat === "all" || p.kategori === cat) && (p.kode + p.syarat).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  const salin = (kode: string) => { navigator.clipboard?.writeText(kode).catch(() => {}); alert(`Kode ${kode} disalin!`); };
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Harga</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Promo & Diskon</h1>
        <p className="text-lg text-zinc-300">Klik kartu untuk menyalin kode promo.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari promo..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((p) => (
          <button key={p.id} onClick={() => salin(p.kode)} className="text-left p-6 rounded-2xl border-2 border-dashed border-zinc-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-zinc-900 dark:hover:border-white transition-colors">
            <BadgePercent className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
            <p className="text-3xl font-bold text-zinc-900 dark:text-white">{p.diskon}</p>
            <p className="font-mono font-bold text-lg text-zinc-700 dark:text-zinc-300">{p.kode}</p>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">{p.syarat}</p>
            <p className="text-sm text-zinc-500 mt-2">Berlaku {p.berlaku}</p>
          </button>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada promo yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/pricing/calculator" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Hitung Harga <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
