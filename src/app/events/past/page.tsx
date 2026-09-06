"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, History, ChevronRight } from "lucide-react";
const ACARA = [
  { id: "1", nama: "Webinar SEO 2026", tanggal: "20 Sep 2026", peserta: 1250, kategori: "webinar", ringkasan: "Strategi SEO terbaru dengan studi kasus klien." },
  { id: "2", nama: "Workshop Next.js Pemula", tanggal: "12 Sep 2026", peserta: 320, kategori: "workshop", ringkasan: "Hands-on membangun aplikasi pertama dengan Next.js." },
  { id: "3", nama: "Konferensi Digital UMKM", tanggal: "30 Agu 2026", peserta: 2800, kategori: "konferensi", ringkasan: "2.800 pelaku UMKM belajar go-digital." },
  { id: "4", nama: "Meetup Developer Jakarta", tanggal: "15 Agu 2026", peserta: 150, kategori: "meetup", ringkasan: "Ngobrol santai soal AI dan web performance." },
  { id: "5", nama: "Webinar Copywriting", tanggal: "2 Agu 2026", peserta: 980, kategori: "webinar", ringkasan: "Teknik menulis landing page yang konversi." },
  { id: "6", nama: "Workshop UI Figma", tanggal: "20 Jul 2026", peserta: 210, kategori: "workshop", ringkasan: "Dari wireframe ke prototype siap handoff." },
];
const CATS = [{ id: "all", label: "Semua" }, { id: "webinar", label: "Webinar" }, { id: "workshop", label: "Workshop" }, { id: "konferensi", label: "Konferensi" }, { id: "meetup", label: "Meetup" }] as const;
export default function PastEventsPage() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState<string>("all");
  const f = useMemo(() => ACARA.filter((a) => (cat === "all" || a.kategori === cat) && (a.nama + a.ringkasan).toLowerCase().includes(q.toLowerCase())), [q, cat]);
  const total = useMemo(() => f.reduce((s, a) => s + a.peserta, 0), [f]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Acara</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Acara Lalu</h1>
        <p className="text-lg text-zinc-300">{total.toLocaleString("id-ID")} peserta telah bergabung.</p></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-6"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari acara..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="flex flex-wrap gap-2 mb-8">{CATS.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c.label}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((a) => (
          <div key={a.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <History className="h-6 w-6 text-zinc-900 dark:text-white mb-3" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{a.nama}</h2>
            <p className="text-sm text-zinc-500 mb-2">{a.tanggal} • {a.peserta.toLocaleString("id-ID")} peserta</p>
            <p className="text-zinc-600 dark:text-zinc-400">{a.ringkasan}</p>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada acara yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/events/register" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Daftar Acara Berikutnya <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
