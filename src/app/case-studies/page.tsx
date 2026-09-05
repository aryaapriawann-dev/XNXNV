"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Search, ArrowRight, Clock, Award, SlidersHorizontal } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  readTime: number;
  featured?: boolean;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "1",
    title: "Meningkatkan Kecepatan Transaksi 300% untuk Bank Digital",
    client: "Bank Digital Nusantara",
    industry: "Fintech",
    summary: "Modernisasi backend event-driven dan microservices untuk mengatasi lonjakan beban transaksi harian.",
    readTime: 6,
    featured: true,
  },
  {
    id: "2",
    title: "Otomasi Rekam Medis & Manajemen Pasien Terpadu",
    client: "RS Medika Utama",
    industry: "Healthcare",
    summary: "Platform rekam medis elektronik terenkripsi dengan antrean otomatis dan integrasi BPJS.",
    readTime: 5,
    featured: true,
  },
  {
    id: "3",
    title: "Skalabilitas Flash Sale hingga 50.000 TPS",
    client: "TokoPedia Raya",
    industry: "E-Commerce",
    summary: "Caching multi-tier dan auto-scaling cluster untuk program belanja nasional tanpa downtime.",
    readTime: 7,
  },
  {
    id: "4",
    title: "Manajemen Armada Real-Time dengan AI Tracking",
    client: "Logistik Cepat Bersama",
    industry: "Logistics",
    summary: "IoT gateway dan dynamic routing berbasis kondisi lalu lintas real-time untuk 1.200+ armada.",
    readTime: 4,
  },
  {
    id: "5",
    title: "Transformasi Work-from-Anywhere untuk SaaS Enterprise",
    client: "CloudSuite Global",
    industry: "SaaS",
    summary: "Keamanan zero-trust dan edge routing untuk pengguna korporat di 14 negara.",
    readTime: 5,
  },
  {
    id: "6",
    title: "Credit Scoring AI untuk Pinjaman UMKM",
    client: "Dana Cerdas Nusantara",
    industry: "Fintech",
    summary: "Model machine learning untuk profiling risiko peminjam UMKM dalam waktu kurang dari 3 menit.",
    readTime: 6,
  },
];

export default function CaseStudiesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = CASE_STUDIES.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4 border border-blue-500/20">
            <Award className="w-4 h-4" />
            <span>Studi Kasus</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Studi Kasus Klien
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">
            Kumpulan cerita sukses transformasi digital dari berbagai industri di Indonesia.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/case-studies/filter"
              className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter & Cari Studi Kasus
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="relative max-w-2xl mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari berdasarkan judul atau klien..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((study) => (
            <div
              key={study.id}
              className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-xl p-6 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs uppercase tracking-wider text-blue-400 font-semibold border border-slate-700">
                    {study.industry}
                  </span>
                  {study.featured && (
                    <span className="text-xs font-semibold text-amber-400">★ Unggulan</span>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{study.title}</h3>
                <p className="text-sm text-slate-400 mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-500" />
                  {study.client}
                </p>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{study.summary}</p>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {study.readTime} min baca
                </span>
                <Link href="/case-studies/filter" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium">
                  Lihat <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800 mt-6">
            <Search className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-slate-300">Tidak ada studi kasus yang cocok</p>
            <p className="text-sm text-slate-500 mt-1">Coba kata kunci lain</p>
          </div>
        )}
      </div>
    </div>
  );
}
