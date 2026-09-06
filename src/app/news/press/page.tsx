"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Megaphone, ChevronRight } from "lucide-react";
const SIARAN = [
  { id: "1", judul: "XNXNV Luncurkan Dashboard v2", tanggal: "28 Sep 2026", kategori: "produk", isi: "Fitur drag-and-drop dan ekspor terjadwal resmi tersedia." },
  { id: "2", judul: "Kemitraan 5 Kampus Baru", tanggal: "15 Sep 2026", kategori: "kemitraan", isi: "Program magang diperluas ke 5 kampus di Jawa dan Sumatra." },
  { id: "3", judul: "Raih 10.000 Pelanggan", tanggal: "1 Sep 2026", kategori: "pencapaian", isi: "Tonggak pelanggan ke-10 ribu dirayakan bersama tim." },
  { id: "4", judul: "Buka Kantor Makassar", tanggal: "18 Agu 2026", kategori: "ekspansi", isi: "Kantor keenam melayani Indonesia Timur." },
  { id: "5", judul: "Sertifikasi ISO 27001", tanggal: "5 Agu 2026", kategori: "pencapaian", isi: "Komitmen keamanan informasi tersertifikasi." },
  { id: "6", judul: "AI Copywriter Beta Dibuka", tanggal: "20 Jul 2026", kategori: "produk", isi: "1.000 pengguna pertama diundang mencoba gratis." },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "produk", label: "Produk" }, { id: "kemitraan", label: "Kemitraan" }, { id: "pencapaian", label: "Pencapaian" }, { id: "ekspansi", label: "Ekspansi" }] as const;
export default function PressReleasePage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => SIARAN.filter((s) => (cat === "all" || s.kategori === cat) && (s.judul + s.isi).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Berita</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Siaran Pers</h1>
        <p className="text-lg text-zinc-300">Pengumuman resmi dari XNXNV.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-4xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari siaran pers..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <ul className="space-y-4">{f.map((s) => (
          <li key={s.id} className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Megaphone className="h-6 w-6 text-zinc-900 dark:text-white shrink-0 mt-1" />
            <div><h2 className="text-lg font-bold text-zinc-900 dark:text-white">{s.judul}</h2>
              <p className="text-sm text-zinc-500 mb-1">{s.tanggal}</p>
              <p className="text-zinc-600 dark:text-zinc-400">{s.isi}</p></div>
          </li>))}</ul>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada siaran yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/news/videos" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Video Berita <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
