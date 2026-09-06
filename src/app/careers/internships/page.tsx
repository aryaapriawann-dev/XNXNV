"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, GraduationCap, MapPin, Clock, ChevronRight } from "lucide-react";

interface Magang {
  id: string;
  title: string;
  divisi: string;
  lokasi: string;
  durasi: string;
  deskripsi: string;
  uangSaku: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "teknik", label: "Teknik" },
  { id: "desain", label: "Desain" },
  { id: "bisnis", label: "Bisnis" },
] as const;

const MAGANG: Magang[] = [
  { id: "1", title: "Frontend Developer Intern", divisi: "teknik", lokasi: "Remote", durasi: "6 bulan", deskripsi: "Belajar React/Next.js dengan mentor senior lewat proyek nyata.", uangSaku: "Rp1,5jt/bln" },
  { id: "2", title: "UI Designer Intern", divisi: "desain", lokasi: "Hibrida Jakarta", durasi: "4 bulan", deskripsi: "Merancang antarmuka produk didampingi lead designer.", uangSaku: "Rp1,5jt/bln" },
  { id: "3", title: "Backend Developer Intern", divisi: "teknik", lokasi: "Remote", durasi: "6 bulan", deskripsi: "Membangun API dan integrasi database skala produksi.", uangSaku: "Rp1,5jt/bln" },
  { id: "4", title: "Digital Marketing Intern", divisi: "bisnis", lokasi: "Remote", durasi: "3 bulan", deskripsi: "Mengelola kampanye konten dan analisis performa iklan.", uangSaku: "Rp1,2jt/bln" },
  { id: "5", title: "QA Engineer Intern", divisi: "teknik", lokasi: "Remote", durasi: "4 bulan", deskripsi: "Menulis test case dan otomatisasi pengujian produk.", uangSaku: "Rp1,2jt/bln" },
  { id: "6", title: "Content Writer Intern", divisi: "bisnis", lokasi: "Remote", durasi: "3 bulan", deskripsi: "Menulis artikel blog dan studi kasus bersama tim.", uangSaku: "Rp1,2jt/bln" },
];

export default function InternshipsPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("all");
  const filtered = useMemo(
    () => MAGANG.filter((m) => (cat === "all" || m.divisi === cat) && (m.title + m.deskripsi).toLowerCase().includes(query.toLowerCase())),
    [query, cat]
  );

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Karier</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Program Magang</h1>
          <p className="text-lg text-zinc-300">Mulai karier digital Anda bersama mentor terbaik.</p>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari posisi magang..."
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
            {filtered.map((m) => (
              <div key={m.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <GraduationCap className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{m.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{m.deskripsi}</p>
                <div className="flex flex-wrap gap-3 text-sm text-zinc-500 mb-4">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{m.lokasi}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{m.durasi}</span>
                </div>
                <p className="font-bold text-zinc-900 dark:text-white">{m.uangSaku}</p>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada posisi yang cocok.</p>}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link href="/careers/apply" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">
              Lamar Sekarang <ChevronRight className="h-5 w-5" />
            </Link>
            <Link href="/careers/remote" className="inline-flex items-center justify-center px-6 py-3 border border-zinc-300 dark:border-slate-700 rounded-full font-semibold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-slate-800 transition-colors">
              Kerja Remote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
