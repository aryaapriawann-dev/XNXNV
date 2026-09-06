"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Wifi, ChevronRight } from "lucide-react";

interface Remote {
  id: string;
  title: string;
  tim: string;
  tipe: string;
  gaji: string;
  deskripsi: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "fulltime", label: "Full-time" },
  { id: "kontrak", label: "Kontrak" },
  { id: "freelance", label: "Freelance" },
] as const;

const REMOTE: Remote[] = [
  { id: "1", title: "Senior React Developer", tim: "Engineering", tipe: "fulltime", gaji: "Rp18-25jt", deskripsi: "Memimpin pengembangan frontend produk SaaS utama." },
  { id: "2", title: "Product Designer", tim: "Design", tipe: "fulltime", gaji: "Rp14-20jt", deskripsi: "Merancang pengalaman produk end-to-end secara remote." },
  { id: "3", title: "Content Strategist", tim: "Marketing", tipe: "kontrak", gaji: "Rp8-12jt", deskripsi: "Menyusun strategi konten 6 bulan untuk semua kanal." },
  { id: "4", title: "DevOps Engineer", tim: "Engineering", tipe: "fulltime", gaji: "Rp16-22jt", deskripsi: "Mengelola infrastruktur cloud dan pipeline CI/CD." },
  { id: "5", title: "Illustrator Freelance", tim: "Design", tipe: "freelance", gaji: "Per proyek", deskripsi: "Ilustrasi editorial untuk blog dan media sosial." },
  { id: "6", title: "Data Analyst", tim: "Product", tipe: "kontrak", gaji: "Rp10-14jt", deskripsi: "Analisis perilaku pengguna dan dashboard metrik." },
];

export default function RemotePage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("all");
  const filtered = useMemo(
    () => REMOTE.filter((r) => (cat === "all" || r.tipe === cat) && (r.title + r.deskripsi).toLowerCase().includes(query.toLowerCase())),
    [query, cat]
  );

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Karier</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Kerja Remote</h1>
          <p className="text-lg text-zinc-300">Bekerja dari mana saja dengan tim terdistribusi di seluruh Indonesia.</p>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari lowongan remote..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" />
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((c) => (
              <button key={c.id} onClick={() => setCat(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r) => (
              <div key={r.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-2 mb-3">
                  <Wifi className="h-5 w-5 text-green-500" />
                  <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{r.tim} • {r.tipe}</span>
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{r.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{r.deskripsi}</p>
                <p className="font-bold text-zinc-900 dark:text-white">{r.gaji}</p>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada lowongan yang cocok.</p>}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link href="/careers/apply" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">
              Lamar Sekarang <ChevronRight className="h-5 w-5" />
            </Link>
            <Link href="/careers/internships" className="inline-flex items-center justify-center px-6 py-3 border border-zinc-300 dark:border-slate-700 rounded-full font-semibold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-slate-800 transition-colors">
              Program Magang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
