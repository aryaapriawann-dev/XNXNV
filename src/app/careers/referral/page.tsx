"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Gift, ChevronRight, Copy } from "lucide-react";
const TIERS = [
  { id: "1", nama: "Perunggu", referral: "1-2 teman", hadiah: "Voucher Rp250rb", deskripsi: "Untuk setiap teman yang berlangganan paket apapun." },
  { id: "2", nama: "Perak", referral: "3-5 teman", hadiah: "Voucher Rp750rb + kaos", deskripsi: "Plus akses prioritas ke webinar premium." },
  { id: "3", nama: "Emas", referral: "6-10 teman", hadiah: "Gratis 3 bulan layanan", deskripsi: "Perpanjangan gratis paket aktif Anda." },
  { id: "4", nama: "Platina", referral: "11-20 teman", hadiah: "Gratis 6 bulan + konsultasi", deskripsi: "Sesi strategi digital 1-on-1 dengan konsultan." },
  { id: "5", nama: "Berlian", referral: "21+ teman", hadiah: "Gratis 1 tahun layanan", deskripsi: "Status mitra VIP dengan manajer khusus." },
];
export default function ReferralPage() {
  const kode = "XNXNV-ARYA-2026";
  const [q, setQ] = useState("");
  const [disalin, setDisalin] = useState(false);
  const f = useMemo(() => TIERS.filter((t) => (t.nama + t.hadiah).toLowerCase().includes(q.toLowerCase())), [q]);
  const salin = () => { navigator.clipboard?.writeText(kode).catch(() => {}); setDisalin(true); setTimeout(() => setDisalin(false), 2000); };
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center"><div className="max-w-4xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Karier</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Program Referral</h1>
        <p className="text-lg text-zinc-300">Ajak teman, raih hadiah hingga gratis 1 tahun.</p>
        <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/20">
          <span className="font-mono font-bold text-lg">{kode}</span>
          <button onClick={salin} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white text-zinc-900 text-sm font-bold hover:bg-zinc-200 transition-colors">
            <Copy className="h-4 w-4" /> {disalin ? "Tersalin!" : "Salin"}</button>
        </div></div></section>
      <section className="py-12 bg-white dark:bg-slate-950"><div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-8"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari tier..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" /></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{f.map((t) => (
          <div key={t.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <Gift className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{t.nama}</h2>
            <p className="text-sm font-semibold text-zinc-500 mb-2">{t.referral}</p>
            <p className="font-bold text-zinc-900 dark:text-white mb-1">{t.hadiah}</p>
            <p className="text-zinc-600 dark:text-zinc-400">{t.deskripsi}</p>
          </div>))}</div>
        {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada tier yang cocok.</p>}
        <div className="flex justify-center mt-12"><Link href="/careers/remote" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Lowongan Remote <ChevronRight className="h-5 w-5" /></Link></div>
      </div></section>
    </div>
  );
}
