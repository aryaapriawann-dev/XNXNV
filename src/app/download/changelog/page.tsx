"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Package, ChevronRight } from "lucide-react";
const RILIS = [
  { id: "1", versi: "v3.4.0", tanggal: "28 Sep 2026", ringkasan: "Dashboard analitik baru dan ekspor CSV terjadwal.", kanal: "stabil" },
  { id: "2", versi: "v3.3.2", tanggal: "15 Sep 2026", ringkasan: "Perbaikan bug checkout dan peningkatan kecepatan 30%.", kanal: "stabil" },
  { id: "3", versi: "v3.3.0", tanggal: "1 Sep 2026", ringkasan: "Mode offline aplikasi mobile dan sinkronisasi otomatis.", kanal: "stabil" },
  { id: "4", versi: "v3.2.0", tanggal: "18 Agu 2026", ringkasan: "Integrasi 10 payment gateway baru termasuk QRIS.", kanal: "stabil" },
  { id: "5", versi: "v4.0.0-beta", tanggal: "5 Okt 2026", ringkasan: "Beta AI copywriter berbahasa Indonesia.", kanal: "beta" },
  { id: "6", versi: "v3.5.0-beta", tanggal: "20 Sep 2026", ringkasan: "Beta marketplace template komunitas.", kanal: "beta" },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "stabil", label: "Stabil" }, { id: "beta", label: "Beta" }] as const;
export default function DlChangelogPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => RILIS.filter((r) => (cat === "all" || r.kanal === cat) && (r.versi + r.ringkasan).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Unduhan</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Catatan Rilis</h1>
        <p className="text-lg text-zinc-300">Riwayat versi dan apa yang berubah.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-4xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari versi..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <ul className="space-y-4">{f.map((r) => (
          <li key={r.id} className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Package className="h-6 w-6 text-zinc-900 dark:text-white shrink-0 mt-1" />
            <div className="flex-1"><div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white">{r.versi}</h2>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-zinc-100 dark:bg-slate-800 text-zinc-600 dark:text-zinc-300">{r.kanal}</span></div>
              <p className="text-zinc-600 dark:text-zinc-400">{r.ringkasan}</p>
              <p className="text-sm text-zinc-500 mt-1">{r.tanggal}</p></div>
          </li>))}</ul>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada rilis yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/download" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Halaman Unduh <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
