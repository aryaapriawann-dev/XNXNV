"use client";
import { useState } from "react";
import Link from "next/link";
import { Clock, ChevronRight, Download, BookOpen, Code, Server } from "lucide-react";

const DATA = [
  { id: "1", nama: "Split Tunneling v2", desc: "Atur aplikasi per-jaringan secara selektif.", kategori: "Q1", meta: "Beta Jan" },
  { id: "2", nama: "Server Makassar", desc: "Latensi rendah untuk Indonesia timur.", kategori: "Q1", meta: "Feb 2027" },
  { id: "3", nama: "Mode Hemat Kuota", desc: "Kompresi cerdas hemat hingga 30%.", kategori: "Q2", meta: "Mar 2027" },
  { id: "4", nama: "Parental Control", desc: "Filter konten keluarga & jadwal waktu.", kategori: "Q2", meta: "Apr 2027" },
  { id: "5", nama: "Audit Publik Baru", desc: "Laporan keamanan independen terbaru.", kategori: "Q2", meta: "Mei 2027" },
  { id: "6", nama: "Dark Mode Sistem", desc: "Mengikuti preferensi OS secara otomatis.", kategori: "Q3", meta: "Jun 2027" },
  { id: "7", nama: "Multi-Device Sync", desc: "Sinkronisasi konfigurasi lintas device.", kategori: "Q3", meta: "Jul 2027" },
];

const CATS = ["Semua", "Q1", "Q2", "Q3"];

export default function UpcomingPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Semua");

  const f = DATA.filter((x) => {
    const cocokCat = cat === "Semua" || x.kategori === cat;
    const cocokCari = (x.nama + " " + x.desc).toLowerCase().includes(q.toLowerCase());
    return cocokCat && cocokCari;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Changelog</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Segera Hadir</h1>
          <p className="text-lg text-zinc-300">Fitur yang sedang kami kerjakan.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8">
            <div className="relative w-full md:w-80">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari fitur..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATS.map((c) => (
                <button key={c} onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c}</button>
              ))}
            </div>
          </div>

          <ul className="space-y-4">
            {f.map((x) => (
              <li key={x.id} className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-zinc-400 transition-colors">
                <div className="shrink-0 mt-1">
                  {x.kategori === "Q1" && <Download className="h-6 w-6 text-indigo-500" />}
                  {x.kategori === "Q2" && <Server className="h-6 w-6 text-emerald-500" />}
                  {x.kategori === "Q3" && <BookOpen className="h-6 w-6 text-amber-500" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-white">{x.nama}</h2>
                    <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 dark:bg-slate-800 dark:text-zinc-400 text-xs">{x.kategori}</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{x.desc}</p>
                  <p className="text-xs text-zinc-400 mt-1">{x.meta}</p>
                </div>
              </li>
            ))}
          </ul>
          {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada fitur yang cocok.</p>}
          <div className="flex justify-center mt-12">
            <Link href="/changelog/releases" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Lihat Rilis <ChevronRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}