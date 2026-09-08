"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Check, ArrowLeft } from "lucide-react";

const TOPICS = [
  { id: "promo", nama: "Promo & Diskon", desc: "Info hemat tiap bulan.", frek: "Mingguan" },
  { id: "produk", nama: "Rilis Fitur", desc: "Update produk duluan.", frek: "Tiap rilis" },
  { id: "edukasi", nama: "Tips Keamanan", desc: "Edukasi praktis menjaga koneksi.", frek: "2x sebulan" },
  { id: "acara", nama: "Acara & Webinar", desc: "Undangan eksklusif komunitas.", frek: "Bulanan" },
  { id: "bisnis", nama: "Studi Kasus", desc: "Cerita pelanggan nyata.", frek: "Bulanan" },
];

export default function NewsletterPreferences() {
  const [selected, setSelected] = useState<string[]>(["promo", "produk"]);
  const [saved, setSaved] = useState(false);

  const toggle = (id: string) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Newsletter</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Preferensi Email</h1>
          <p className="text-lg text-zinc-300">Pilih topik yang Anda ingin terima.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {TOPICS.map((t) => (
              <button key={t.id} onClick={() => toggle(t.id)}
                className={`p-5 rounded-2xl border text-left transition-all ${selected.includes(t.id) ? "border-zinc-900 bg-zinc-50 dark:border-white dark:bg-slate-800" : "border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900"}`}>
                <h3 className="font-bold text-zinc-900 dark:text-white">{t.nama}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{t.desc}</p>
                <p className="text-xs text-zinc-400 mt-2">{t.frek}</p>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={handleSave} className="px-6 py-3 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-700 transition-colors">Simpan</button>
            {saved && <span className="text-green-600 font-medium flex items-center gap-1"><Check className="h-5 w-5" />Tersimpan</span>}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/newsletter/digest" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Kembali
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}