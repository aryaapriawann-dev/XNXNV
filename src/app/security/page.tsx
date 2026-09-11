"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Shield, Lock, Monitor, Globe, ChevronRight, CheckCircle, AlertTriangle, Clock } from "lucide-react";

const SECURITY_PILLARS = [
  {
    id: "1",
    title: "Enkripsi End-to-End",
    description: "Data Anda terenkripsi dari sumber hingga tujuan. Kunci enkripsi dikelola sepenuhnya oleh Anda.",
    features: [
      { name: "AES-256", desc: "Standar enkripsi tingkat militer untuk data tidak bergerak." },
      { name: "ChaCha20-Poly1305", desc: "Enkripsi modern untuk koneksi real-time." },
      { name: "Kunci User-Controlled", desc: "Anda yang mengelola kunci enkripsi, bukan kami." },
    ],
    stats: { standard: "AES-256 / ChaCha20", testing: "Rutin setiap 6 bulan", verifiedBy: "Auditor independen" },
  },
  {
    id: "2",
    title: "Privasi & No-Logs",
    description: "Kami tidak menyimpan log aktivitas Anda. Privasi Anda adalah prioritas utama.",
    features: [
      { name: "No-Logs Policy", desc: "Tidak ada catatan aktivitas yang disimpan." },
      { name: "RAM-Only Servers", desc: "Server yang melewati data hanya di memori sementara." },
      { name: "Audit Berkala", desc: "Audit independen untuk memverifikasi compliance." },
    ],
    stats: { policy: "No-Logs Verified", auditFrequency: "2x setahun", complianceLevel: "SOC 2 Type II" },
  },
  {
    id: "3",
    title: "Keamanan Aplikasi",
    description: "Aplikasi kami dibangun dengan keamanan sebagai fondasi utama dari awal.",
    features: [
      { name: "Autentikasi 2FA", desc: "Lapisan keamanan tambahan untuk akun Anda." },
      { name: "Biometrik Support", desc: "Login menggunakan sidik jari atau face recognition." },
      { name: "Session Management", desc: "Manajemen sesi yang ketat dengan timeout otomatis." },
    ],
    stats: { features: "3 lapisan keamanan", updates: "Bulanan", scope: "Windows, macOS, iOS, Android" },
  },
];

export default function SecurityPage() {
  const [q, setQ] = useState("");
  const [selectedPillar, setSelectedPillar] = useState(0);

  const filteredFeatures = useMemo(() => {
    const pillar = SECURITY_PILLARS[selectedPillar];
    const query = q.toLowerCase();
    if (!query) return pillar.features;
    return pillar.features.filter((f) =>
      f.name.toLowerCase().includes(query) ||
      f.desc.toLowerCase().includes(query)
    );
  }, [q, selectedPillar]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Keamanan</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Pusat Keamanan</h1>
          <p className="text-lg text-zinc-300">Transparansi penuh tentang praktik keamanan dan privasi kami.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {SECURITY_PILLARS.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(idx)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                  selectedPillar === idx
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"
                }`}
              >
                {pillar.title}
              </button>
            ))}
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari fitur keamanan..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            />
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-6 w-6 text-zinc-900 dark:text-white" />
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {SECURITY_PILLARS[selectedPillar].title}
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              {SECURITY_PILLARS[selectedPillar].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFeatures.map((feature) => (
              <div
                key={feature.name}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-6 w-6 text-green-500 mb-3" />
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{feature.name}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          {filteredFeatures.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada fitur yang ditemukan.</p>
          )}

          <div className="mt-8 p-6 rounded-2xl bg-zinc-100 dark:bg-slate-800">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Ringkasan Keamanan</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">{SECURITY_PILLARS[selectedPillar].stats.standard}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Standar Enkripsi</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">{SECURITY_PILLARS[selectedPillar].stats.testing}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Testing Rutin</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">{SECURITY_PILLARS[selectedPillar].stats.verifiedBy}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Verifikasi</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/security/audits"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Lihat Laporan Audit <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
