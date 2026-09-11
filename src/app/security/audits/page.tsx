"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Shield, Lock, Monitor, Globe, Timer, ChevronRight, Check, AlertTriangle } from "lucide-react";

const SECURITY_AUDITS = [
  {
    id: "1",
    title: "Audit Keamanan Infrastruktur년생",
    desc: "Tim Cure53 melakukan audit menyeluruh terhadap infrastruktur server dan jaringan kami selama 3 minggu.",
    category: "Infrastruktur",
    year: "2025",
    status: "Passed 100%",
    findings: ["Tidak ada temuan kritis", "2 temuan minor diperbaiki", "Sistem monitoring ditingkatkan"],
    icon: Shield,
  },
  {
    id: "2",
    title: "Verifikasi Kebijakan No-Logs",
    desc: "PwC memverifikasi bahwa kebijakan no-logs kami konsisten diterapkan dalam operasional sehari-hari selama 6 bulan.",
    category: "Policy",
    year: "2025",
    status: "Verified",
    findings: ["Kebijakan no-logs ditegakkan", "Audit trail lengkap tersedia", "Pelatihan staf memperkuat kepatuhan"],
    icon: Lock,
  },
  {
    id: "3",
    title: "Penetration Testing Aplikasi",
    desc: "Tim penetration test independen menguji kerentanan aplikasi klien kami di berbagai platform termasuk web dan mobile.",
    category: "Security Testing",
    year: "2025",
    status: "Zero Critical",
    findings: ["Tidak ada kerentanan kritis", "5 temuan sedang diperbaiki", "Coverage 95%+aplikasi"],
    icon: Monitor,
  },
  {
    id: "4",
    title: "Validasi Implementasi Kriptografi",
    desc: "Audit terhadap implementasi AES-256 dan ChaCha20-Poly1305 di seluruh layanan kami oleh ahli kriptografi.",
    category: "Cryptografi",
    year: "2025",
    status: "Certified",
    findings: ["Implementasi sesuai standar", "Key management teruji", "Protocol keamanan terbit"],
    icon: Lock,
  },
  {
    id: "5",
    title: "Audit Kepatuhan SOC 2 Type II",
    desc: "Audit tata kelola keamanan dan privasi data sesuai standar SOC 2 Type II oleh auditor independen selama 12 bulan.",
    category: "Kepatuhan",
    year: "2025",
    status: "SOC 2 Type II",
    findings: ["Kepatuhan 100% terhadap 56 kontrol", "Tidak ada temuan material", "Rekomendasi perbaikan diterima"],
    icon: Globe,
  },
  {
    id: "6",
    title: "Evaluasi Keamanan Aplikasi Mobile",
    desc: "Audit keamanan aplikasi mobile kami di iOS dan Android oleh tim security spesialis mobile security.",
    category: "Mobile Security",
    year: "2025",
    status: "Passed",
    findings: ["Konsentrasi API aman", "Data storage terenkripsi", "Biometrik terintegrasi dengan baik"],
    icon: Monitor,
  },
];

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "Infrastruktur", label: "Infrastruktur" },
  { id: "Policy", label: "Policy" },
  { id: "Security Testing", label: "Security Testing" },
  { id: "Cryptografi", label: "Cryptografi" },
  { id: "Kepatuhan", label: "Kepatuhan" },
  { id: "Mobile Security", label: "Mobile Security" },
];

export default function AuditsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return SECURITY_AUDITS.filter((audit) => {
      const matchCategory = category === "all" || audit.category === category;
      const matchSearch = audit.title.toLowerCase().includes(query) ||
        audit.desc.toLowerCase().includes(query) ||
        audit.status.toLowerCase().includes(query);
      return matchCategory && matchSearch;
    });
  }, [search, category]);

  const stats = useMemo(() => ({
    total: SECURITY_AUDITS.length,
    passed: SECURITY_AUDITS.filter((a) => ["Passed 100%", "Verified", "Zero Critical", "Certified", "Passed"].includes(a.status)).length,
    criticalFound: SECURITY_AUDITS.filter((a) => a.status === "Zero Critical").length,
    soc2: SECURITY_AUDITS.filter((a) => a.status === "SOC 2 Type II").length,
  }), []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Keamanan</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Laporan Audit</h1>
          <p className="text-lg text-zinc-300">Transparansi penuh melalui audit pihak ketiga yang kami jalani secara berkala.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Shield className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.total}</p>
              <p className="text-sm text-zinc-500">Total Audit</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Check className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.passed}</p>
              <p className="text-sm text-zinc-500">Audit Tercapai</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <AlertTriangle className="w-5 h-5 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.criticalFound}</p>
              <p className="text-sm text-zinc-500">Tanpa Kerentanan Kritis</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Timer className="w-5 h-5 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.soc2}</p>
              <p className="text-sm text-zinc-500">Sertifikat SOC 2</p>
            </div>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari audit atau sertifikasi..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === c.id
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((audit) => (
              <div
                key={audit.id}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow"
              >
                <audit.icon className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{audit.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3">{audit.desc}</p>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="px-2 py-1 rounded-full bg-zinc-100 dark:bg-slate-800 text-zinc-600 dark:text-zinc-300">
                    {audit.category}
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-400">{audit.year}</span>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-zinc-900 dark:text-white">{audit.status}</span>
                </div>
                {audit.findings && audit.findings.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {audit.findings.map((f, i) => (
                      <li key={i} className="text-xs text-zinc-500 dark:text-zinc-400 flex items-start gap-1">
                        <Check className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada audit yang ditemukan.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/security"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Kembali ke Keamanan <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
