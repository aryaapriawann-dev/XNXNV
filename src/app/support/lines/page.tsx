"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Phone, ChevronRight } from "lucide-react";
const KONTAK = [
  { id: "1", tim: "Penjualan", nomor: "(021) 555-0101", jam: "Senin-Jumat 09.00-17.00", kategori: "bisnis", deskripsi: "Konsultasi paket dan penawaran harga." },
  { id: "2", tim: "Dukungan Teknis", nomor: "(021) 555-0102", jam: "Setiap hari 08.00-22.00", kategori: "teknis", deskripsi: "Bantuan troubleshooting produk." },
  { id: "3", tim: "Kemitraan", nomor: "(021) 555-0103", jam: "Senin-Jumat 09.00-17.00", kategori: "bisnis", deskripsi: "Kerja sama reseller dan afiliasi." },
  { id: "4", tim: "Keuangan & Tagihan", nomor: "(021) 555-0104", jam: "Senin-Jumat 09.00-17.00", kategori: "billing", deskripsi: "Invoice, pembayaran, dan refund." },
  { id: "5", tim: "Darurat Server", nomor: "(021) 555-0199", jam: "24/7", kategori: "teknis", deskripsi: "Gangguan kritis layanan produksi." },
  { id: "6", tim: "Karier & Magang", nomor: "(021) 555-0106", jam: "Senin-Jumat 09.00-17.00", kategori: "bisnis", deskripsi: "Info lowongan dan program magang." },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "bisnis", label: "Bisnis" }, { id: "teknis", label: "Teknis" }, { id: "billing", label: "Billing" }] as const;
export default function SupportLinesPage() {
  const tel = (n: string) => `tel:+62${n.replace(/\D/g, "").slice(1)}`;
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => KONTAK.filter((k) => (cat === "all" || k.kategori === cat) && (k.tim + k.deskripsi).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Dukungan</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Layanan Telepon</h1>
        <p className="text-lg text-zinc-300">Hubungi tim yang tepat sesuai kebutuhan Anda.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari layanan..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((k) => (
          <a key={k.id} href={tel(k.nomor)} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg transition-shadow">
            <Phone className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{k.tim}</h2>
            <p className="font-mono font-bold text-lg text-zinc-700 dark:text-zinc-300">{k.nomor}</p>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">{k.deskripsi}</p>
            <p className="text-sm text-zinc-500 mt-2">{k.jam}</p>
          </a>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada layanan yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/support/help" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Pusat Bantuan <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
