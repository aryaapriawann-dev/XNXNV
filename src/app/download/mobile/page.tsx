"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Smartphone, ChevronRight, Check, Monitor, Tablet } from "lucide-react";

const DATA = [
  { id: "1", nama: "Android 8.0+", desc: "APK 25MB, update otomatis.", kategori: "android", meta: "v5.2", ukuran: "25 MB" },
  { id: "2", nama: "iOS 15+", desc: "Face ID & widget cepat.", kategori: "ios", meta: "v5.2", ukuran: "42 MB" },
  { id: "3", nama: "Mode TV Android", desc: "Untuk smart TV & stick.", kategori: "tv", meta: "v4.8", ukuran: "18 MB" },
  { id: "4", nama: "Beta Program", desc: "Coba fitur duluan.", kategori: "beta", meta: "Open", ukuran: "-" },
  { id: "5", nama: "Catatan Izin", desc: "Tanpa akses kontak/galeri.", kategori: "privasi", meta: "Terverifikasi", ukuran: "-" },
  { id: "6", nama: "Windows Service", desc: "Auto-start & kill-switch.", kategori: "desktop", meta: "v5.2", ukuran: "15 MB" },
  { id: "7", nama: "macOS Native", desc: "Menu bar & shortcut.", kategori: "desktop", meta: "v5.2", ukuran: "22 MB" },
];

const CATS = ["Semua", "android", "ios", "tv", "beta", "privasi", "desktop"];
const ICONS: Record<string, React.ReactNode> = {
  android: <Smartphone className="h-6 w-6 text-green-500" />,
  ios: <Tablet className="h-6 w-6 text-blue-500" />,
  tv: <Monitor className="h-6 w-6 text-purple-500" />,
  beta: <Smartphone className="h-6 w-6 text-yellow-500" />,
  privasi: <Check className="h-6 w-6 text-emerald-500" />,
  desktop: <Monitor className="h-6 w-6 text-zinc-500" />,
};

export default function DownloadMobilePage() {
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
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Unduh</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Aplikasi Mobile</h1>
          <p className="text-lg text-zinc-300">VPN cepat untuk Android & iOS.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari info aplikasi..."
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
              <li key={x.id} className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-zinc-400 transition-colors">
                <div className="shrink-0">{ICONS[x.kategori] || <Smartphone className="h-6 w-6 text-zinc-400" />}</div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-white">{x.nama}</h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{x.desc}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">{x.meta}</p>
                  <p className="text-xs text-zinc-400">{x.ukuran}</p>
                </div>
                <Check className="h-5 w-5 text-green-500 shrink-0" />
              </li>
            ))}
          </ul>
          {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada hasil yang cocok.</p>}
          <div className="flex justify-center mt-12">
            <Link href="/download/guides" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Panduan Instal <ChevronRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}