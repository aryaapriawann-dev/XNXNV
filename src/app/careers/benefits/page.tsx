"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Wallet,
  Clock,
  GraduationCap,
  Plane,
  Home,
  Dumbbell,
  Users,
  Search,
  Star,
} from "lucide-react";

interface Benefit {
  id: string;
  name: string;
  description: string;
  detail: string;
  category: "kesehatan" | "finansial" | "fleksibilitas" | "pengembangan" | "gaya-hidup";
  rating: number;
  popular?: boolean;
}

const BENEFITS: Benefit[] = [
  {
    id: "1",
    name: "Asuransi Kesehatan",
    description: "Proteksi kesehatan menyeluruh untuk Anda dan keluarga",
    detail: "BPJS + asuransi swasta, rawat inap & jalan",
    category: "kesehatan",
    rating: 4.9,
    popular: true,
  },
  {
    id: "2",
    name: "Bonus Kinerja",
    description: "Bonus tahunan berbasis pencapaian individu dan tim",
    detail: "Hingga 3x gaji bulanan per tahun",
    category: "finansial",
    rating: 4.8,
    popular: true,
  },
  {
    id: "3",
    name: "Jam Kerja Fleksibel",
    description: "Atur jam kerja sesuai ritme produktivitas Anda",
    detail: "Core hours 10.00-15.00 WIB",
    category: "fleksibilitas",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Remote Work",
    description: "Opsi kerja jarak jauh penuh atau hybrid",
    detail: "Tunjangan setup home office Rp 5 juta",
    category: "fleksibilitas",
    rating: 4.8,
    popular: true,
  },
  {
    id: "5",
    name: "Budget Pengembangan Diri",
    description: "Dana kursus, sertifikasi, dan konferensi tahunan",
    detail: "Rp 15 juta per tahun per karyawan",
    category: "pengembangan",
    rating: 4.6,
  },
  {
    id: "6",
    name: "Cuti Tahunan Plus",
    description: "Cuti tahunan lebih dari standar plus cuti bersama",
    detail: "15 hari cuti + 5 hari cuti personal",
    category: "gaya-hidup",
    rating: 4.7,
  },
  {
    id: "7",
    name: "Tunjangan Transport & Makan",
    description: "Uang transport dan subsidi makan harian",
    detail: "Rp 2 juta/bulan + makan siang kantor",
    category: "finansial",
    rating: 4.5,
  },
  {
    id: "8",
    name: "Gym & Wellness",
    description: "Membership gym dan program kesehatan mental",
    detail: "Gratis gym + konseling psikolog",
    category: "kesehatan",
    rating: 4.4,
  },
];

const CATEGORIES = [
  { id: "semua", label: "Semua" },
  { id: "kesehatan", label: "Kesehatan" },
  { id: "finansial", label: "Finansial" },
  { id: "fleksibilitas", label: "Fleksibilitas" },
  { id: "pengembangan", label: "Pengembangan" },
  { id: "gaya-hidup", label: "Gaya Hidup" },
] as const;

const CategoryIcon = ({ category }: { category: Benefit["category"] }) => {
  switch (category) {
    case "kesehatan":
      return <Heart className="w-4 h-4" />;
    case "finansial":
      return <Wallet className="w-4 h-4" />;
    case "fleksibilitas":
      return <Clock className="w-4 h-4" />;
    case "pengembangan":
      return <GraduationCap className="w-4 h-4" />;
    default:
      return <Plane className="w-4 h-4" />;
  }
};

const BenefitIcon = ({ id }: { id: string }) => {
  const cls = "w-8 h-8";
  switch (id) {
    case "1":
      return <Heart className={cls} />;
    case "2":
      return <Wallet className={cls} />;
    case "3":
      return <Clock className={cls} />;
    case "4":
      return <Home className={cls} />;
    case "5":
      return <GraduationCap className={cls} />;
    case "6":
      return <Plane className={cls} />;
    case "7":
      return <Users className={cls} />;
    default:
      return <Dumbbell className={cls} />;
  }
};

export default function CareersBenefitsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("semua");

  const filtered = BENEFITS.filter((b) => {
    const matchCategory =
      activeCategory === "semua" || b.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch =
      q === "" ||
      b.name.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Benefit & Fasilitas
          </h1>
          <p className="text-center text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            Kami peduli kesejahteraan tim — ini yang Anda dapatkan saat bergabung
          </p>
          <div className="flex justify-center">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Karier
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari benefit..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="bg-slate-900 p-1 rounded-lg inline-flex flex-wrap justify-center">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === c.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-slate-500 py-12">
            Tidak ada benefit yang cocok dengan pencarian Anda.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((b) => (
              <div
                key={b.id}
                className={`relative rounded-xl border p-6 transition-all ${
                  b.popular
                    ? "border-blue-500 bg-blue-500/5"
                    : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
                }`}
              >
                {b.popular && (
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-b-lg">
                    POPULER
                  </div>
                )}
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <BenefitIcon id={b.id} />
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500 text-xs">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{b.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 w-fit">
                    <CategoryIcon category={b.category} />
                    <span className="capitalize">
                      {b.category.replace("-", " ")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {b.name}
                  </h3>
                  <p className="text-sm text-slate-400">{b.description}</p>
                  <p className="text-sm text-slate-200 font-medium">
                    {b.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Tertarik bergabung dan menikmati semua benefit ini?
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Lihat Lowongan
            </Link>
            <Link
              href="/careers/apply"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Lamar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
