"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, MonitorPlay, ChevronRight } from "lucide-react";
const DEMO = [
  { id: "1", nama: "Demo Website Company Profile", durasi: "30 mnt", kategori: "website", deskripsi: "Lihat cara website mengubah pengunjung jadi prospek." },
  { id: "2", nama: "Demo Toko Online", durasi: "45 mnt", kategori: "ecommerce", deskripsi: "Dari katalog hingga pembayaran dalam satu alur." },
  { id: "3", nama: "Demo Dashboard Analitik", durasi: "30 mnt", kategori: "saas", deskripsi: "Pahami data bisnis Anda secara real-time." },
  { id: "4", nama: "Demo Aplikasi Kasir", durasi: "45 mnt", kategori: "saas", deskripsi: "Kelola banyak gerai dari satu layar." },
  { id: "5", nama: "Demo Aplikasi Mobile", durasi: "60 mnt", kategori: "mobile", deskripsi: "Pengalaman native iOS dan Android." },
  { id: "6", nama: "Demo Integrasi API", durasi: "30 mnt", kategori: "teknis", deskripsi: "Untuk tim teknis: webhook, SDK, dan dokumentasi." },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "website", label: "Website" }, { id: "ecommerce", label: "E-commerce" }, { id: "saas", label: "SaaS" }, { id: "mobile", label: "Mobile" }, { id: "teknis", label: "Teknis" }] as const;
export default function DemoPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => DEMO.filter((d) => (cat === "all" || d.kategori === cat) && (d.nama + d.deskripsi).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Kontak</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Jadwalkan Demo</h1>
        <p className="text-lg text-zinc-300">Lihat produk beraksi sebelum memutuskan.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari jenis demo..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((d) => (
          <div key={d.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <MonitorPlay className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{d.nama}</h2>
            <p className="text-sm text-zinc-500 mb-2">{d.durasi} • via Zoom</p>
            <p className="text-zinc-600 dark:text-zinc-400">{d.deskripsi}</p>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada demo yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/contact/offices" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Kantor Kami <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
