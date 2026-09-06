"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, PackageOpen, ChevronRight } from "lucide-react";
const PAKET = [
  { id: "1", nama: "Paket Website UMKM", harga: "Mulai Rp2,5jt", kategori: "website", isi: ["Domain + hosting 1 thn", "5 halaman + blog", "WhatsApp chat"], estimasi: "7 hari" },
  { id: "2", nama: "Paket Toko Online", harga: "Mulai Rp5jt", kategori: "ecommerce", isi: ["Katalog + QRIS", "Ongkir otomatis", "Laporan penjualan"], estimasi: "14 hari" },
  { id: "3", nama: "Paket Aplikasi MVP", harga: "Mulai Rp25jt", kategori: "aplikasi", isi: ["Android + iOS / web", "Auth + database", "Deploy production"], estimasi: "45 hari" },
  { id: "4", nama: "Paket SEO 3 Bulan", harga: "Rp9jt", kategori: "marketing", isi: ["Audit + 12 artikel", "Optimasi teknis", "Laporan bulanan"], estimasi: "90 hari" },
  { id: "5", nama: "Paket Maintenance", harga: "Rp500rb/bln", kategori: "support", isi: ["Update + backup", "Monitoring 24/7", "2 jam revisi/bln"], estimasi: "Aktif segera" },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "website", label: "Website" }, { id: "ecommerce", label: "E-commerce" }, { id: "aplikasi", label: "Aplikasi" }, { id: "marketing", label: "Marketing" }, { id: "support", label: "Support" }] as const;
export default function PackagesPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => PAKET.filter((p) => (cat === "all" || p.kategori === cat) && (p.nama + p.isi.join(" ")).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Layanan</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Paket Layanan</h1>
        <p className="text-lg text-zinc-300">Harga transparan, isi jelas, tanpa biaya siluman.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari paket..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((p) => (
          <div key={p.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <PackageOpen className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{p.nama}</h2>
            <p className="font-bold text-zinc-900 dark:text-white my-1">{p.harga}</p>
            <p className="text-sm text-zinc-500 mb-3">Estimasi: {p.estimasi}</p>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400">{p.isi.map((x, i) => <li key={i}>{x}</li>)}</ul>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada paket yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/services/compare" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Bandingkan Layanan <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
