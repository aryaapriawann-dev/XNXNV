"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ShieldCheck, ChevronRight, Check } from "lucide-react";

const DATA = [
  { id: "1", nama: "Audit Keamanan Q4 2025", desc: "Verifikasi independen oleh Cure53 terhadap core infrastructure.", kategori: "audit", meta: "Passed 100%" },
  { id: "2", nama: "Pemeriksaan Kebijakan No-Logs", desc: "Audit forensik menyeluruh oleh PwC terhadap server memory-only.", kategori: "no-logs", meta: "Verified" },
  { id: "3", nama: "Penetration Testing Client App", desc: "Pengujian kerentanan berkala pada aplikasi Windows, macOS, iOS, Android.", kategori: "pentest", meta: "Zero Critical" },
  { id: "4", nama: "Sertifikasi Kriptografi AES-256", desc: "Validasi implementasi enkripsi standar militer dan ChaCha20-Poly1305.", kategori: "crypto", meta: "Certified" },
  { id: "5", nama: "SOC 2 Type II Compliance Audit", desc: "Kepatuhan tata kelola keamanan data privasi standar internasional.", kategori: "compliance", meta: "SOC 2 Type II" },
];

export default function Page() {
  const [q, setQ] = useState("");
  const f = useMemo(() => DATA.filter((x) => (x.nama + " " + x.desc).toLowerCase().includes(q.toLowerCase())), [q]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Keamanan & Kepercayaan</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Laporan Audit Independen</h1>
          <p className="text-lg text-zinc-300">Transparansi penuh melalui audit pihak ketiga terkemuka di dunia.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari audit atau sertifikasi..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {f.map((x) => (
              <div key={x.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-zinc-400 transition-colors">
                <ShieldCheck className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{x.nama}</h2>
                <p className="text-zinc-600 dark:text-zinc-400">{x.desc}</p>
                <p className="text-sm text-zinc-500 mt-2 flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  {x.meta}
                </p>
              </div>
            ))}
          </div>

          {f.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada laporan audit yang cocok.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/about/values"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Prinsip Privasi Kami <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
