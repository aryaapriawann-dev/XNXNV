"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, MailOpen, ChevronRight } from "lucide-react";
const ARSIP = [
  { id: "1", edisi: "Edisi #48 — AI untuk UMKM", tanggal: "4 Okt 2026", topik: "ai", ringkasan: "5 cara praktis memakai AI tanpa tim teknis." },
  { id: "2", edisi: "Edisi #47 — Checklist SEO", tanggal: "27 Sep 2026", topik: "seo", ringkasan: "27 poin audit SEO yang bisa dikerjakan sendiri." },
  { id: "3", edisi: "Edisi #46 — Pricing SaaS", tanggal: "20 Sep 2026", topik: "bisnis", ringkasan: "Menemukan harga yang pelanggan mau bayar." },
  { id: "4", edisi: "Edisi #45 — Design System", tanggal: "13 Sep 2026", topik: "desain", ringkasan: "Mulai kecil, konsisten, lalu skala." },
  { id: "5", edisi: "Edisi #44 — Keamanan Web", tanggal: "6 Sep 2026", topik: "teknis", ringkasan: "7 serangan umum dan cara menutupnya." },
  { id: "6", edisi: "Edisi #43 — Remote Work", tanggal: "30 Agu 2026", topik: "bisnis", ringkasan: "Ritual tim terdistribusi yang benar-benar jalan." },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "ai", label: "AI" }, { id: "seo", label: "SEO" }, { id: "bisnis", label: "Bisnis" }, { id: "desain", label: "Desain" }, { id: "teknis", label: "Teknis" }] as const;
export default function ArchivePage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => ARSIP.filter((a) => (cat === "all" || a.topik === cat) && (a.edisi + a.ringkasan).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Newsletter</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Arsip Newsletter</h1>
        <p className="text-lg text-zinc-300">Baca ulang semua edisi yang pernah terbit.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-4xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari edisi..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <ul className="space-y-4">{f.map((a) => (
          <li key={a.id} className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <MailOpen className="h-6 w-6 text-zinc-900 dark:text-white shrink-0 mt-1" />
            <div><h2 className="text-lg font-bold text-zinc-900 dark:text-white">{a.edisi}</h2>
              <p className="text-sm text-zinc-500 mb-1">{a.tanggal}</p>
              <p className="text-zinc-600 dark:text-zinc-400">{a.ringkasan}</p></div>
          </li>))}</ul>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada edisi yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/newsletter/signup" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Berlangganan <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
