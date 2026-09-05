"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Star,
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
  Palette,
  Megaphone,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

interface ShowcaseProject {
  id: string;
  title: string;
  client: string;
  category: "web" | "mobile" | "design" | "marketing" | "consulting";
  description: string;
  tags: string[];
  highlight: string;
  rating: number;
  year: number;
}

const CATEGORIES = [
  { id: "all", label: "Semua Kategori", icon: Sparkles },
  { id: "web", label: "Web Development", icon: Globe },
  { id: "mobile", label: "Mobile App", icon: Smartphone },
  { id: "design", label: "Desain", icon: Palette },
  { id: "marketing", label: "Pemasaran", icon: Megaphone },
  { id: "consulting", label: "Konsultasi", icon: Lightbulb },
] as const;

const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "1",
    title: "Platform E-Commerce Skala Enterprise",
    client: "MegaMart Digital",
    category: "web",
    description:
      "Arsitektur microservices untuk marketplace dengan 50k+ produk, pembayaran multi-gateway, dan dashboard analitik real-time.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    highlight: "50k TPS saat flash sale",
    rating: 5,
    year: 2025,
  },
  {
    id: "2",
    title: "Aplikasi Kesehatan & Telemedicine",
    client: "SehatKu App",
    category: "mobile",
    description:
      "Aplikasi mobile terintegrasi untuk konsultasi dokter online, manajemen resep, dan monitoring kesehatan harian.",
    tags: ["Flutter", "Firebase", "WebRTC", "FHIR API"],
    highlight: "200k+ pengguna aktif",
    rating: 5,
    year: 2025,
  },
  {
    id: "3",
    title: "Rebranding & Design System Korporat",
    client: "Nusantara Corp",
    category: "design",
    description:
      "Perancangan ulang identitas visual lengkap termasuk design system, component library, dan brand guideline untuk 12 anak perusahaan.",
    tags: ["Figma", "Design Tokens", "Storybook", "Brand Strategy"],
    highlight: "12 brand terpadu",
    rating: 5,
    year: 2024,
  },
  {
    id: "4",
    title: "Kampanye Digital Peluncuran Produk",
    client: "GadgetPro Indonesia",
    category: "marketing",
    description:
      "Strategi pemasaran digital omnichannel untuk peluncuran smartphone flagship, mencapai 10M impressions dalam 72 jam pertama.",
    tags: ["SEO", "Social Media", "Google Ads", "Influencer"],
    highlight: "10M impressions / 72 jam",
    rating: 5,
    year: 2025,
  },
  {
    id: "5",
    title: "Transformasi Digital UMKM",
    client: "Asosiasi UMKM Jawa Barat",
    category: "consulting",
    description:
      "Program konsultasi digitalisasi 500+ UMKM meliputi adopsi POS digital, marketplace onboarding, dan pelatihan e-commerce.",
    tags: ["Digital Strategy", "Training", "POS System", "Marketplace"],
    highlight: "500+ UMKM terdigitalisasi",
    rating: 5,
    year: 2024,
  },
  {
    id: "6",
    title: "Sistem Manajemen Logistik AI",
    client: "CargoNet Logistics",
    category: "web",
    description:
      "Platform manajemen armada dengan optimasi rute berbasis AI, pelacakan real-time, dan prediksi permintaan untuk 2000+ kendaraan.",
    tags: ["Next.js", "Python", "TensorFlow", "IoT"],
    highlight: "-30% biaya operasional",
    rating: 5,
    year: 2025,
  },
  {
    id: "7",
    title: "Super App Keuangan Pribadi",
    client: "WalletWise",
    category: "mobile",
    description:
      "Aplikasi pengelolaan keuangan all-in-one dengan budgeting otomatis, investasi reksa dana, dan credit scoring berbasis AI.",
    tags: ["React Native", "Node.js", "Plaid", "Machine Learning"],
    highlight: "Rp 2T+ dana terkelola",
    rating: 5,
    year: 2025,
  },
  {
    id: "8",
    title: "UI/UX Redesign Platform Edukasi",
    client: "EduNusa Online",
    category: "design",
    description:
      "Redesign pengalaman belajar online yang meningkatkan completion rate kursus dari 23% menjadi 67% dengan gamifikasi dan adaptive learning path.",
    tags: ["UX Research", "Figma", "Prototyping", "A/B Testing"],
    highlight: "+191% completion rate",
    rating: 4,
    year: 2024,
  },
  {
    id: "9",
    title: "Growth Hacking SaaS B2B",
    client: "CloudHR Pro",
    category: "marketing",
    description:
      "Implementasi strategi growth hacking untuk platform HR SaaS yang meningkatkan MRR 340% dalam 6 bulan melalui content marketing dan referral program.",
    tags: ["Growth Strategy", "Content Marketing", "Referral", "Analytics"],
    highlight: "+340% MRR / 6 bulan",
    rating: 4,
    year: 2025,
  },
  {
    id: "10",
    title: "Audit & Migrasi Cloud Infrastructure",
    client: "DataCenter Prima",
    category: "consulting",
    description:
      "Audit infrastruktur on-premise dan migrasi bertahap ke multi-cloud (AWS + GCP) untuk 150+ layanan enterprise dengan zero downtime.",
    tags: ["Cloud Migration", "AWS", "GCP", "Kubernetes"],
    highlight: "Zero downtime migrasi",
    rating: 5,
    year: 2024,
  },
];

function getRatingStars(rating: number) {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-3.5 h-3.5 ${
        i < rating
          ? "fill-amber-400 text-amber-400"
          : "fill-slate-700 text-slate-700"
      }`}
    />
  ));
}

function getCategoryStyle(category: string) {
  const styles: Record<string, string> = {
    web: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    mobile: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    design: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    marketing: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    consulting: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  };
  return styles[category] || "bg-slate-500/10 text-slate-400 border-slate-500/20";
}

function getCategoryLabel(category: string) {
  const labels: Record<string, string> = {
    web: "Web Development",
    mobile: "Mobile App",
    design: "Desain",
    marketing: "Pemasaran",
    consulting: "Konsultasi",
  };
  return labels[category] || category;
}

export default function PortfolioShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredItems = SHOWCASE_PROJECTS.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.client.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tags.some((tag) => tag.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const featuredCount = SHOWCASE_PROJECTS.filter((p) => p.rating === 5).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm mb-4 border border-indigo-500/20">
            <Sparkles className="w-4 h-4" />
            <span>Showcase</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Karya Unggulan Kami
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-6">
            Koleksi proyek terbaik yang menunjukkan keahlian dan dampak nyata
            dalam berbagai industri dan domain teknologi.
          </p>
          <Link
            href="/portfolio/filter"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
          >
            Lihat semua portfolio dengan filter lengkap
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">
                {SHOWCASE_PROJECTS.length}
              </div>
              <div className="text-xs text-slate-500 mt-1">Karya Unggulan</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">
                {featuredCount}
              </div>
              <div className="text-xs text-slate-500 mt-1">Rating Bintang 5</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">5</div>
              <div className="text-xs text-slate-500 mt-1">Kategori</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">
                {new Set(SHOWCASE_PROJECTS.map((p) => p.client)).size}
              </div>
              <div className="text-xs text-slate-500 mt-1">Klien Berbeda</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Controls */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari berdasarkan nama proyek, klien, atau teknologi..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-200 placeholder-slate-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setCurrentPage(1);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                      : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Result Count */}
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span>
                Menampilkan{" "}
                <strong className="text-slate-200">
                  {filteredItems.length}
                </strong>{" "}
                dari {SHOWCASE_PROJECTS.length} karya
              </span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-xl p-6 flex flex-col justify-between transition-all hover:shadow-xl group"
            >
              <div>
                {/* Category & Year */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryStyle(
                      project.category
                    )}`}
                  >
                    {getCategoryLabel(project.category)}
                  </span>
                  <span className="text-xs text-slate-500">{project.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                {/* Client */}
                <p className="text-sm text-slate-400 mb-3">
                  Klien: <span className="text-slate-300">{project.client}</span>
                </p>

                {/* Description */}
                <p className="text-sm text-slate-400 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Highlight */}
                <div className="flex items-center gap-2 px-3 py-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20 mb-4">
                  <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-sm font-medium text-indigo-300">
                    {project.highlight}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-slate-800 text-slate-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <div className="flex items-center gap-1">
                  {getRatingStars(project.rating)}
                </div>
                <button className="text-sm text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-1">
                  Detail
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800">
            <Search className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-slate-300">
              Tidak ada karya yang cocok
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Coba sesuaikan kata kunci atau filter kategori Anda
            </p>
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
                  currentPage === page
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages, p + 1))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* CTA ke filter */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl border border-indigo-500/20">
          <h2 className="text-2xl font-bold mb-3">
            Ingin Melihat Lebih Banyak?
          </h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Jelajahi seluruh portfolio kami dengan filter kategori, rating, dan
            pencarian yang lebih lengkap.
          </p>
          <Link
            href="/portfolio/filter"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors"
          >
            Buka Portfolio Lengkap
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
