"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, GraduationCap, ChevronRight, Check, Star, Zap } from "lucide-react";

const DATA = [
  { id: "1", nama: "Pelajar 1 Bulan", desc: "Rp15rb — verifikasi NISN.", kategori: "bulanan", meta: "-50%", populer: false },
  { id: "2", nama: "Semester 6 Bulan", desc: "Rp75rb — hemat 17%.", kategori: "semester", meta: "Terlaris", populer: true },
  { id: "3", nama: "Tahunan Siswa", desc: "Rp120rb — 2 bulan gratis.", kategori: "tahunan", meta: "Hemat", populer: false },
  { id: "4", nama: "Kampus Bundle", desc: "Rp50rb/org min 10 orang.", kategori: "grup", meta: "Kampus", populer: false },
  { id: "5", nama: "Guru & Dosen", desc: "Rp99rb/tahun.", kategori: "edukasi", meta: "-60%", populer: false },
];

const CATS = ["Semua", "bulanan", "semester", "tahunan", "grup", "edukasi"];

export default function StudentsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Semua");

  const f = useMemo(() => DATA.filter((x) => {
    const cocokCat = cat === "Semua" || x.kategori === cat;
    const cocokCari = (x.nama + " " + x.desc).toLowerCase().includes(q.toLowerCase());
    return cocokCat && cocokCari;
  }), [q, cat]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Harga</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Paket Pelajar</h1>
          <p className="text-lg text-zinc-300">Harga khusus pelajar & mahasiswa.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari paket..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATS.map((c) => (
                <button key={c} onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>{c}</button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {f.map((x) => (
              <div key={x.id} className={`p-6 rounded-2xl border bg-white dark:bg-slate-900 hover:border-zinc-400 transition-colors ${x.populer ? "border-amber-300 dark:border-amber-700 shadow-md" : "border-zinc-200 dark:border-slate-800"}`}>
                {x.populer && <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold mb-2"><Star className="h-3 w-3" /> Terlaris</div>}
                <GraduationCap className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{x.nama}</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{x.desc}</p>
                <p className={`text-sm font-medium ${x.meta === "-50%" || x.meta === "-60%" ? "text-green-600" : "text-zinc-500"}`}>{x.meta}</p>
                {x.populer && <div className="mt-3 flex items-center gap-1 text-xs text-amber-600 font-medium"><Zap className="h-3 w-3" /> Paling populer</div>}
              </div>
            ))}
          </div>
          {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada hasil yang cocok.</p>}
          <div className="flex justify-center mt-12">
            <Link href="/pricing/deals" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Lihat Promo <ChevronRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}