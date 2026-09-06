"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Zap,
  TrendingUp,
  Shield,
  Award,
  Star,
  Search,
  Cpu,
  Cloud,
} from "lucide-react";

interface ServicePlan {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  duration: string;
  features: string[];
  category: "development" | "security" | "marketing" | "cloud" | "ai";
  popular?: boolean;
}

const SERVICES: ServicePlan[] = [
  {
    id: "1",
    name: "Web Development",
    description: "Website cepat dan responsif dengan Next.js & React",
    price: 5000000,
    rating: 4.8,
    duration: "2-4 minggu",
    category: "development",
    features: [
      "Konsultasi Gratis",
      "Desain Kustom",
      "Mobile Responsif",
      "SEO Dasar",
      "Integrasi API",
      "Deploy & Setup",
      "Dokumentasi",
      "Garansi 30 Hari",
      "Maintenance 3 Bulan",
      "Training",
    ],
  },
  {
    id: "2",
    name: "Cyber Security",
    description: "Proteksi aset digital dengan penetration testing",
    price: 8000000,
    rating: 4.9,
    duration: "1-3 minggu",
    category: "security",
    features: [
      "Konsultasi Gratis",
      "Audit Keamanan",
      "Penetration Testing",
      "Laporan Berkala",
      "Dokumentasi",
      "Training",
      "Support 24/7",
      "SLA",
      "Garansi 30 Hari",
    ],
  },
  {
    id: "3",
    name: "Digital Marketing",
    description: "SEO, konten, dan ads yang mendatangkan hasil",
    price: 3500000,
    rating: 4.6,
    duration: "Bulanan",
    category: "marketing",
    features: [
      "Konsultasi Gratis",
      "SEO Dasar",
      "Laporan Berkala",
      "Tim Dedicated",
      "Revisi Tanpa Batas",
      "Training",
      "Dokumentasi",
    ],
  },
  {
    id: "4",
    name: "Mobile Apps",
    description: "Aplikasi iOS & Android performa native",
    price: 12000000,
    rating: 4.7,
    duration: "4-8 minggu",
    category: "development",
    features: [
      "Konsultasi Gratis",
      "Desain Kustom",
      "Integrasi API",
      "Deploy & Setup",
      "Dokumentasi",
      "Garansi 30 Hari",
      "Maintenance 3 Bulan",
      "Training",
      "Support 24/7",
      "Tim Dedicated",
    ],
  },
  {
    id: "5",
    name: "Cloud Services",
    description: "Infrastruktur cloud skalabel dan migrasi aman",
    price: 6500000,
    rating: 4.7,
    duration: "2-6 minggu",
    category: "cloud",
    features: [
      "Konsultasi Gratis",
      "Deploy & Setup",
      "Integrasi API",
      "Monitoring 24/7",
      "Support 24/7",
      "SLA",
      "Dokumentasi",
      "Training",
      "Garansi 30 Hari",
      "Tim Dedicated",
    ],
  },
  {
    id: "6",
    name: "AI & Machine Learning",
    description: "Otomasi cerdas dan insight dari data Anda",
    price: 15000000,
    rating: 4.9,
    duration: "6-12 minggu",
    category: "ai",
    popular: true,
    features: [
      "Konsultasi Gratis",
      "Integrasi API",
      "Deploy & Setup",
      "Dokumentasi",
      "Training",
      "Support 24/7",
      "SLA",
      "Tim Dedicated",
      "Laporan Berkala",
      "Maintenance 3 Bulan",
      "Garansi 30 Hari",
    ],
  },
  {
    id: "7",
    name: "UI/UX Design",
    description: "Desain intuitif yang memikat pengguna",
    price: 4000000,
    rating: 4.8,
    duration: "2-3 minggu",
    category: "development",
    features: [
      "Konsultasi Gratis",
      "Desain Kustom",
      "Mobile Responsif",
      "Revisi Tanpa Batas",
      "Dokumentasi",
      "Training",
      "Garansi 30 Hari",
    ],
  },
];

const ALL_FEATURES = [
  "Konsultasi Gratis",
  "Desain Kustom",
  "Mobile Responsif",
  "SEO Dasar",
  "Integrasi API",
  "Deploy & Setup",
  "Audit Keamanan",
  "Penetration Testing",
  "Monitoring 24/7",
  "Support 24/7",
  "SLA",
  "Tim Dedicated",
  "Dokumentasi",
  "Training",
  "Laporan Berkala",
  "Maintenance 3 Bulan",
  "Garansi 30 Hari",
  "Revisi Tanpa Batas",
] as const;

const CATEGORIES = [
  { id: "semua", label: "Semua" },
  { id: "development", label: "Development" },
  { id: "security", label: "Keamanan" },
  { id: "marketing", label: "Marketing" },
  { id: "cloud", label: "Cloud" },
  { id: "ai", label: "AI" },
] as const;

function getFeatureValue(plan: ServicePlan, feature: string): string | boolean {
  const match = plan.features.find((f) =>
    f.toLowerCase().includes(feature.toLowerCase())
  );
  if (!match) return false;
  if (feature === "Support 24/7" || feature === "Monitoring 24/7") return match;
  return true;
}

const formatPrice = (price: number): string =>
  `Rp ${price.toLocaleString("id-ID")}`;

const CategoryIcon = ({ category }: { category: ServicePlan["category"] }) => {
  switch (category) {
    case "development":
      return <Zap className="w-4 h-4" />;
    case "security":
      return <Shield className="w-4 h-4" />;
    case "marketing":
      return <TrendingUp className="w-4 h-4" />;
    case "cloud":
      return <Cloud className="w-4 h-4" />;
    case "ai":
      return <Cpu className="w-4 h-4" />;
    default:
      return <Award className="w-4 h-4" />;
  }
};

export default function ServicesComparePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("semua");

  const visibleServices = useMemo(
    () =>
      category === "semua"
        ? SERVICES
        : SERVICES.filter((s) => s.category === category),
    [category]
  );

  const visibleFeatures = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_FEATURES;
    return ALL_FEATURES.filter((f) => f.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Bandingkan Layanan
          </h1>
          <p className="text-center text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            Lihat perbandingan fitur lengkap untuk memilih layanan yang tepat
            untuk bisnis Anda
          </p>
          <div className="flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Layanan
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari fitur, mis. SLA, training..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  category === c.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <p className="text-slate-500 text-sm mb-6">
          Menampilkan {visibleServices.length} layanan &times;{" "}
          {visibleFeatures.length} fitur
          {query.trim() && (
            <>
              {" "}
              untuk pencarian &ldquo;{query.trim()}&rdquo;
            </>
          )}
        </p>

        {/* Comparison Table */}
        {visibleServices.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            Tidak ada layanan pada kategori ini.
          </div>
        ) : visibleFeatures.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            Tidak ada fitur yang cocok dengan pencarian Anda.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Header: Service names + prices */}
              <thead>
                <tr>
                  <th className="sticky left-0 z-20 bg-slate-950 text-left p-4 min-w-[200px] border-b border-slate-800">
                    <span className="text-slate-400 text-sm font-normal">
                      Fitur
                    </span>
                  </th>
                  {visibleServices.map((plan) => (
                    <th
                      key={plan.id}
                      className={`relative p-4 min-w-[160px] text-center border-b ${
                        plan.popular
                          ? "border-blue-500 bg-blue-500/5"
                          : "border-slate-800"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-b-lg">
                          POPULER
                        </div>
                      )}
                      <div className="flex flex-col items-center gap-2 pt-2">
                        <div
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                            plan.category === "development"
                              ? "bg-purple-500/10 text-purple-400"
                              : plan.category === "security"
                                ? "bg-green-500/10 text-green-400"
                                : plan.category === "marketing"
                                  ? "bg-blue-500/10 text-blue-400"
                                  : plan.category === "cloud"
                                    ? "bg-cyan-500/10 text-cyan-400"
                                    : "bg-yellow-500/10 text-yellow-400"
                          }`}
                        >
                          <CategoryIcon category={plan.category} />
                          <span className="capitalize">{plan.category}</span>
                        </div>
                        <span className="text-base font-semibold text-slate-100">
                          {plan.name}
                        </span>
                        <span className="text-xs text-slate-500 max-w-[160px]">
                          {plan.description}
                        </span>
                        <div className="flex items-center gap-1 text-yellow-500 text-xs">
                          <Star className="w-3 h-3 fill-current" />
                          <span>{plan.rating}</span>
                        </div>
                        <div className="mt-1">
                          <span className="text-xs text-slate-500 block">
                            Mulai dari
                          </span>
                          <span className="text-xl font-bold text-white">
                            {formatPrice(plan.price)}
                          </span>
                          <span className="text-slate-500 text-xs block">
                            {plan.duration}
                          </span>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Feature Rows */}
              <tbody>
                {visibleFeatures.map((feature, idx) => (
                  <tr
                    key={feature}
                    className={
                      idx % 2 === 0 ? "bg-slate-950" : "bg-slate-900/30"
                    }
                  >
                    <td className="sticky left-0 z-10 bg-inherit p-4 text-sm text-slate-300 border-b border-slate-800/50 font-medium">
                      {feature}
                    </td>
                    {visibleServices.map((plan) => {
                      const value = getFeatureValue(plan, feature);
                      return (
                        <td
                          key={plan.id}
                          className={`p-4 text-center text-sm border-b border-slate-800/50 ${
                            plan.popular ? "bg-blue-500/5" : ""
                          }`}
                        >
                          {value === false ? (
                            <XCircle className="w-4 h-4 text-slate-600 mx-auto" />
                          ) : value === true ? (
                            <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-slate-200 font-medium">
                              {value}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>

              {/* Footer: CTA buttons */}
              <tfoot>
                <tr>
                  <td className="sticky left-0 z-10 bg-slate-950 p-4"></td>
                  {visibleServices.map((plan) => (
                    <td
                      key={plan.id}
                      className={`p-4 text-center ${
                        plan.popular ? "bg-blue-500/5" : ""
                      }`}
                    >
                      <Link
                        href="/contact"
                        className={`block w-full py-2.5 rounded-lg font-medium text-sm transition-all text-center ${
                          plan.popular
                            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
                            : "bg-slate-800 hover:bg-slate-700 text-slate-200"
                        }`}
                      >
                        Pilih Layanan
                      </Link>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Butuh bantuan memilih layanan yang tepat?
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Lihat Semua Layanan
          </Link>
        </div>
      </div>
    </div>
  );
}
