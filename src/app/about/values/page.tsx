"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Award,
  Compass,
  Heart,
  Leaf,
  Lightbulb,
  Search,
  Shield,
  Target,
  Users,
} from "lucide-react";

interface CompanyValue {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
}

const values: CompanyValue[] = [
  {
    id: "1",
    title: "Keunggulan",
    description:
      "Berusaha memberikan hasil terbaik di setiap pekerjaan, dari kualitas kode hingga pelayanan kepada klien.",
    category: "Kualitas",
    icon: <Award className="h-7 w-7 text-yellow-500" />,
  },
  {
    id: "2",
    title: "Integritas",
    description:
      "Bekerja jujur, transparan, dan memegang etika dalam setiap interaksi dengan klien dan sesama tim.",
    category: "Budaya",
    icon: <Shield className="h-7 w-7 text-green-500" />,
  },
  {
    id: "3",
    title: "Inovasi",
    description:
      "Merangkul ide baru dan teknologi terkini untuk menyelesaikan masalah klien dengan cara yang lebih cerdas.",
    category: "Kualitas",
    icon: <Lightbulb className="h-7 w-7 text-purple-500" />,
  },
  {
    id: "4",
    title: "Fokus Pelanggan",
    description:
      "Klien adalah pusat dari semua yang kami lakukan. Kesuksesan mereka adalah ukuran kesuksesan kami.",
    category: "Pelayanan",
    icon: <Heart className="h-7 w-7 text-blue-500" />,
  },
  {
    id: "5",
    title: "Kolaborasi",
    description:
      "Percaya pada kekuatan kerja tim. Hasil hebat lahir dari komunikasi terbuka dan saling mendukung.",
    category: "Budaya",
    icon: <Users className="h-7 w-7 text-teal-500" />,
  },
  {
    id: "6",
    title: "Keberlanjutan",
    description:
      "Berkomitmen pada praktik kerja yang bertanggung jawab dan ramah lingkungan untuk jangka panjang.",
    category: "Budaya",
    icon: <Leaf className="h-7 w-7 text-green-500" />,
  },
  {
    id: "7",
    title: "Fokus Hasil",
    description:
      "Setiap proyek diukur dari dampaknya: pertumbuhan bisnis, efisiensi, dan kepuasan pengguna akhir.",
    category: "Kualitas",
    icon: <Target className="h-7 w-7 text-orange-500" />,
  },
  {
    id: "8",
    title: "Bertumbuh Bersama",
    description:
      "Terus belajar, berbagi pengetahuan, dan membuka jalan bagi setiap anggota tim untuk berkembang.",
    category: "Pelayanan",
    icon: <Compass className="h-7 w-7 text-indigo-500" />,
  },
];

const categories = ["Semua", ...Array.from(new Set(values.map((v) => v.category)))];

export default function AboutValuesPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return values.filter((v) => {
      const matchCategory = activeCategory === "Semua" || v.category === activeCategory;
      const matchQuery =
        q.length === 0 ||
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Nilai-Nilai Perusahaan
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Prinsip yang memandu setiap keputusan kami dan membentuk budaya kerja XNXNV.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/about/team"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              Kenali Tim Kami
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-zinc-800 text-white rounded-full font-semibold text-lg hover:bg-zinc-700 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Search + Filter */}
      <section className="py-10 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari nilai perusahaan..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-500 text-sm outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-4 text-center">
            Menampilkan {filtered.length} nilai dari kategori &ldquo;{activeCategory}&rdquo;
            {query.trim() && <> dengan kata kunci &ldquo;{query.trim()}&rdquo;</>}
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg">
              <p className="text-zinc-600 dark:text-zinc-300 text-lg mb-4">
                Tidak ada nilai yang cocok dengan pencarian.
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setActiveCategory("Semua");
                }}
                className="inline-flex items-center justify-center px-6 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                Atur ulang filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((value) => (
                <div
                  key={value.id}
                  className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 mb-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center shadow-sm">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-6">
                    {value.description}
                  </p>
                  <span className="text-xs font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-400 px-3 py-1 rounded-full">
                    {value.category}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Tertarik bekerja dengan nilai yang sama?
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Mari diskusikan bagaimana kami bisa membantu mencapai tujuan bisnis Anda.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-600 rounded-full font-medium hover:bg-zinc-100 transition-colors"
          >
            Mulai Diskusi
          </Link>
        </div>
      </section>
    </div>
  );
}
