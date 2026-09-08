"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Zap, ChevronRight, Clock, Bookmark, Share2 } from "lucide-react";

const EDISI = [
  { id: "1", judul: "3 AI Tools Wajib Coba", tanggal: "5 Okt 2026", baca: "3 mnt", ringkasan: "Ringkasan mingguan: tool AI, update produk, dan 1 tips.", tag: "AI" },
  { id: "2", judul: "Kenapa Checkout Gagal?", tanggal: "28 Sep 2026", baca: "4 mnt", ringkasan: "Data 1.000 transaksi dan cara memperbaikinya.", tag: "E-Commerce" },
  { id: "3", judul: "Harga vs Nilai", tanggal: "21 Sep 2026", baca: "3 mnt", ringkasan: "Cara mengkomunikasikan harga tanpa perang diskon.", tag: "Strategi" },
  { id: "4", judul: "Remote yang Produktif", tanggal: "14 Sep 2026", baca: "5 mnt", ringkasan: "Ritual async yang menghemat 6 jam meeting/minggu.", tag: "Kerja" },
  { id: "5", judul: "Desain 80/20", tanggal: "7 Sep 2026", baca: "3 mnt", ringkasan: "20% usaha desain yang memberi 80% hasil.", tag: "Desain" },
];

const TAGS = ["Semua", "AI", "E-Commerce", "Strategi", "Kerja", "Desain"];

export default function DigestPage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("Semua");

  const f = useMemo(() => {
    const qc = q.toLowerCase();
    return EDISI.filter((e) => {
      const cocokTag = tag === "Semua" || e.tag === tag;
      const cocokCari = (e.judul + e.ringkasan).toLowerCase().includes(qc);
      return cocokTag && cocokCari;
    });
  }, [q, tag]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Newsletter</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Ringkasan Mingguan</h1>
          <p className="text-lg text-zinc-300">Intisari 5 menit setiap Senin pagi.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari edisi..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" />
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {TAGS.map((t) => (
              <button key={t} onClick={() => setTag(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${tag === t ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{t}</button>
            ))}
          </div>

          <ul className="space-y-4">
            {f.map((e) => (
              <li key={e.id} className="group flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-zinc-400 transition-colors">
                <div className="shrink-0 mt-1 flex flex-col items-center gap-1">
                  <Zap className="h-6 w-6 text-yellow-500" />
                  <Clock className="h-3 w-3 text-zinc-400 mt-1" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-white">{e.judul}</h2>
                    <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 text-xs font-medium">{e.tag}</span>
                  </div>
                  <p className="text-sm text-zinc-500 mb-1">{e.tanggal} • {e.baca} baca</p>
                  <p className="text-zinc-600 dark:text-zinc-400">{e.ringkasan}</p>
                </div>
                <div className="shrink-0 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-slate-800" aria-label="Bookmark"><Bookmark className="h-4 w-4 text-zinc-400" /></button>
                  <button className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-slate-800" aria-label="Share"><Share2 className="h-4 w-4 text-zinc-400" /></button>
                </div>
              </li>
            ))}
          </ul>
          {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada edisi yang cocok.</p>}
          <div className="flex justify-center mt-12">
            <Link href="/newsletter/archive" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Semua Arsip <ChevronRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}