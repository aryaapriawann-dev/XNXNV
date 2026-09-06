"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Download, ChevronRight } from "lucide-react";
const SETS = [
  { id: "1", nama: "Data Kunjungan Harian", baris: 365, kategori: "trafik", deskripsi: "Sesi, pengguna unik, dan bounce per hari 2026." },
  { id: "2", nama: "Data Transaksi", baris: 4820, kategori: "pendapatan", deskripsi: "Semua transaksi dengan status dan nominal." },
  { id: "3", nama: "Data Konversi Corong", baris: 120, kategori: "konversi", deskripsi: "Tahapan corong checkout per minggu." },
  { id: "4", nama: "Data Engagement Sosial", baris: 730, kategori: "engagement", deskripsi: "Like, share, komentar semua kanal." },
  { id: "5", nama: "Data Perilaku Mobile", baris: 890, kategori: "trafik", deskripsi: "Segmentasi perangkat dan durasi sesi." },
  { id: "6", nama: "Data Retensi Kohor", baris: 96, kategori: "engagement", deskripsi: "Retensi bulanan per kohor pendaftaran." },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "trafik", label: "Trafik" }, { id: "konversi", label: "Konversi" }, { id: "pendapatan", label: "Pendapatan" }, { id: "engagement", label: "Engagement" }] as const;
function csv(nama: string, baris: number): string {
  const rows = [`dataset,${nama}`, "no,nilai"];
  for (let i = 1; i <= Math.min(baris, 50); i++) rows.push(`${i},${(i * 137) % 1000}`);
  return rows.join("\n");
}
export default function ExportPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => SETS.filter((s) => (cat === "all" || s.kategori === cat) && (s.nama + s.deskripsi).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  const unduh = (nama: string, baris: number) => {
    const blob = new Blob([csv(nama, baris)], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `${nama.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.csv`; a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Analitik</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Ekspor Data</h1>
        <p className="text-lg text-zinc-300">Unduh dataset mentah dalam format CSV.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-4xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari dataset..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <ul className="space-y-4">{f.map((s) => (
          <li key={s.id} className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex-1"><h2 className="text-lg font-bold text-zinc-900 dark:text-white">{s.nama}</h2>
              <p className="text-sm text-zinc-500">{s.deskripsi}</p>
              <p className="text-sm text-zinc-500 mt-1">{s.baris.toLocaleString("id-ID")} baris</p></div>
            <button onClick={() => unduh(s.nama, s.baris)} className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-xl text-sm font-semibold hover:bg-zinc-700 transition-colors">
              <Download className="h-4 w-4" /> CSV</button>
          </li>))}</ul>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada dataset yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/analytics/goals" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Target & Progres <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
