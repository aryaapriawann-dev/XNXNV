"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ChevronRight, Check, Star, Zap, Users, Award, Building2 } from "lucide-react";

const PAKET = [
  { id: "1", nama: "Enterprise Starter", harga: "Rp15jt/thn", pengguna: "s/d 50 pengguna", fitur: ["Semua fitur Professional", "SSO & audit log", "SLA 99,9%"], icon: Users },
  { id: "2", nama: "Enterprise Plus", harga: "Rp35jt/thn", pengguna: "s/d 200 pengguna", fitur: ["Semua Starter", "Server dedicated", "Manajer khusus"], icon: Award },
  { id: "3", nama: "Enterprise Custom", harga: "Hubungi kami", pengguna: "Tanpa batas", fitur: ["On-premise / VPC", "Kontrak & NDA khusus", "Tim support 24/7"], icon: Building2 },
];

export default function EnterprisePage() {
  const [q, setQ] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const f = useMemo(() => PAKET.filter((p) => (p.nama + p.fitur.join(" ")).toLowerCase().includes(q.toLowerCase())), [q]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Harga</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Paket Enterprise</h1>
          <p className="text-lg text-zinc-300">Solusi skala besar dengan jaminan layanan.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari paket atau fitur..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {f.map((p) => (
              <div key={p.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-zinc-400 transition-colors">
                <p.icon className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{p.nama}</h2>
                <p className="text-2xl font-bold text-zinc-900 dark:text-white my-2">{p.harga}</p>
                <p className="text-sm text-zinc-500 mb-4 flex items-center gap-1"><Users className="h-4 w-4" />{p.pengguna}</p>
                <ul className="space-y-2 mb-4">{p.fitur.map((ft, i) => (
                  <li key={i} className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400 text-sm"><Check className="h-5 w-5 text-green-500 shrink-0" />{ft}</li>))}</ul>
                <button onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                  className="w-full py-2 rounded-lg border border-zinc-200 dark:border-slate-700 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-slate-800 transition-colors">
                  {expanded === p.id ? "Sembunyian detail" : "Lihat detail"}
                </button>
                {expanded === p.id && (
                  <p className="text-xs text-zinc-400 mt-3">Nikmati fleksibilitas enterprise dengan SLA ketat dan dedicated account manager.</p>
                )}
              </div>
            ))}
          </div>
          {f.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada paket yang cocok.</p>}
          <div className="flex justify-center mt-12">
            <Link href="/pricing/deals" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">Lihat Promo <ChevronRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}