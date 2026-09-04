"use client";

import { useState } from "react";
import { Building2, TrendingUp, Users, Award, Search, Filter, ChevronLeft, ChevronRight, ArrowRight, CheckCircle, Clock } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: "fintech" | "healthcare" | "ecommerce" | "saas" | "logistics";
  results: { metric: string; label: string }[];
  summary: string;
  readTime: number;
  featured?: boolean;
}

const INDUSTRIES = [
  { id: "all", label: "Semua Industri" },
  { id: "fintech", label: "Fintech" },
  { id: "healthcare", label: "Healthcare" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "saas", label: "SaaS" },
  { id: "logistics", label: "Logistics" },
] as const;

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "1",
    title: "Meningkatkan Kecepatan Transaksi 300% untuk Bank Digital",
    client: "Bank Digital Nusantara",
    industry: "fintech",
    results: [
      { metric: "+300%", label: "Kecepatan API" },
      { metric: "99.99%", label: "Uptime" },
      { metric: "2.4M", label: "Pengguna Aktif" }
    ],
    summary: "Modernisasi arsitektur backend dengan arsitektur event-driven dan microservices berbasis cloud untuk mengatasi lonjakan beban.",
    readTime: 6,
    featured: true
  },
  {
    id: "2",
    title: "Otomasi Rekam Medis & Manajemen Pasien Terpadu",
    client: "RS Medika Utama",
    industry: "healthcare",
    results: [
      { metric: "-45%", label: "Waktu Tunggu" },
      { metric: "100%", label: "Kepatuhan Regulasi" },
      { metric: "50k+", label: "Pasien/Bulan" }
    ],
    summary: "Implementasi platform rekam medis elektronik terenkripsi dengan modul antrean otomatis dan integrasi BPJS.",
    readTime: 5,
    featured: true
  },
  {
    id: "3",
    title: "Skalabilitas Flash Sale E-Commerce hingga 50,000 TPS",
    client: "TokoPedia Raya",
    industry: "ecommerce",
    results: [
      { metric: "50k", label: "Transaksi/Detik" },
      { metric: "0%", label: "Downtime Sale" },
      { metric: "+85%", label: "Konversi Checkout" }
    ],
    summary: "Optimasi sistem caching multi-tier dan auto-scaling cloud cluster untuk menyokong program belanja nasional.",
    readTime: 7
  },
  {
    id: "4",
    title: "Platform Manajemen Armada Real-Time dengan AI Tracking",
    client: "Logistik Cepat Bersama",
    industry: "logistics",
    results: [
      { metric: "-25%", label: "Konsumsi Bahan Bakar" },
      { metric: "+40%", label: "Efisiensi Rute" },
      { metric: "1,200+", label: "Armada Terhubung" }
    ],
    summary: "Pembangunan sistem IoT gateway dan dynamic routing engine berbasis data kondisi lalu lintas real-time.",
    readTime: 4
  },
  {
    id: "5",
    title: "Transformasi Work-from-Anywhere untuk Enterprise SaaS",
    client: "CloudSuite Global",
    industry: "saas",
    results: [
      { metric: "10x", label: "Skala Tim" },
      { metric: "<100ms", label: "Latensi Global" },
      { metric: "SOC-2", label: "Tersertifikasi" }
    ],
    summary: "Penguatan postur keamanan zero-trust dan edge routing untuk pengguna korporat di 14 negara.",
    readTime: 5
  },
  {
    id: "6",
    title: "Platform Pinjaman Peer-to-Peer Otomatis dengan Credit Scoring AI",
    client: "Dana Cerdas Nusantara",
    industry: "fintech",
    results: [
      { metric: "<3 Menit", label: "Approval Otomatis" },
      { metric: "-60%", label: "Default Rate" },
      { metric: "Rp 500M+", label: "Penyaluran Modal" }
    ],
    summary: "Pengembangan machine learning model untuk profiling risiko peminjam UMKM secara instan dan akurat.",
    readTime: 6
  }
];

export default function CaseStudiesFilterPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredItems = CASE_STUDIES.filter((item) => {
    const matchesIndustry = selectedIndustry === "all" || item.industry === selectedIndustry;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4 border border-blue-500/20">
            <Award className="w-4 h-4" />
            <span>Success Stories</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Studi Kasus & Hasil Nyata
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Lihat bagaimana solusi arsitektur dan teknologi kami membantu para pemimpin industri bertumbuh dan berekspansi.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Controls */}
        <div className="mb-8 space-y-6">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari studi kasus berdasarkan klien, teknologi, atau hasil..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-200"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => { setSelectedIndustry(ind.id); setCurrentPage(1); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedIndustry === ind.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {ind.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span>Total Hasil: <strong className="text-slate-200">{filteredItems.length}</strong></span>
            </div>
          </div>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentItems.map((study) => (
            <div
              key={study.id}
              className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-xl p-6 flex flex-col justify-between transition-all hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs uppercase tracking-wider text-blue-400 font-semibold border border-slate-700">
                    {study.industry}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{study.readTime} min baca</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white hover:text-blue-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm font-medium text-slate-400 mb-4 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-500" />
                  Klien: <span className="text-slate-200">{study.client}</span>
                </p>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {study.summary}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950/60 rounded-lg border border-slate-800/80 mb-6">
                  {study.results.map((res, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold text-blue-400">{res.metric}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800">
            <Search className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-slate-300">Tidak ada studi kasus yang cocok</p>
            <p className="text-sm text-slate-500 mt-1">Coba sesuaikan kata kunci atau filter industri Anda</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                  currentPage === page ? "bg-blue-600 text-white" : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
