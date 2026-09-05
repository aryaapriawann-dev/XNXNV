"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Users,
  CheckCircle,
} from "lucide-react";

interface Lowongan {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  deskripsi: string;
  syarat: string[];
  gaji: string;
  postedDate: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "development", label: "Development" },
  { id: "design", label: "Design" },
  { id: "product", label: "Product" },
  { id: "business", label: "Business" },
  { id: "support", label: "Support" },
] as const;

const LOWONGAN: Lowongan[] = [
  {
    id: "1",
    slug: "backend-developer",
    title: "Backend Developer",
    department: "development",
    location: "Jakarta / Remote",
    type: "Penuh Waktu",
    level: "Senior",
    deskripsi: "Bangun dan rawat layanan VPN inti yang cepat, aman, dan skalabel untuk jutaan pengguna.",
    syarat: ["Node.js", "PostgreSQL", "Docker"],
    gaji: "Rp12–18 jt/bln",
    postedDate: "2026-08-10",
  },
  {
    id: "2",
    slug: "frontend-developer",
    title: "Frontend Developer",
    department: "development",
    location: "Bandung / Remote",
    type: "Penuh Waktu",
    level: "Mid",
    deskripsi: "Kembangkan antarmuka web yang cepat dan mudah digunakan dengan Next.js dan React.",
    syarat: ["React", "Next.js", "Tailwind"],
    gaji: "Rp9–14 jt/bln",
    postedDate: "2026-08-12",
  },
  {
    id: "3",
    slug: "network-engineer",
    title: "Network Engineer",
    department: "development",
    location: "Jakarta",
    type: "Penuh Waktu",
    level: "Senior",
    deskripsi: "Kelola infrastruktur server VPN lintas negara dan optimalkan latensi jaringan.",
    syarat: ["WireGuard", "Linux", "Monitoring"],
    gaji: "Rp13–19 jt/bln",
    postedDate: "2026-08-15",
  },
  {
    id: "4",
    slug: "product-designer",
    title: "Product Designer",
    department: "design",
    location: "Remote",
    type: "Penuh Waktu",
    level: "Mid",
    deskripsi: "Rancang pengalaman aplikasi yang sederhana dan intuitif untuk pengguna awam hingga mahir.",
    syarat: ["Figma", "Prototyping", "Riset Pengguna"],
    gaji: "Rp9–13 jt/bln",
    postedDate: "2026-08-18",
  },
  {
    id: "5",
    slug: "product-manager",
    title: "Product Manager",
    department: "product",
    location: "Jakarta",
    type: "Penuh Waktu",
    level: "Senior",
    deskripsi: "Pimpin roadmap produk VPN dari riset, prioritas fitur, hingga peluncuran.",
    syarat: ["Agile", "Roadmap", "Analitik"],
    gaji: "Rp14–20 jt/bln",
    postedDate: "2026-08-20",
  },
  {
    id: "6",
    slug: "marketing-specialist",
    title: "Marketing Specialist",
    department: "business",
    location: "Surabaya / Remote",
    type: "Penuh Waktu",
    level: "Junior",
    deskripsi: "Kelola kampanye digital dan konten untuk memperluas jangkauan pengguna baru.",
    syarat: ["SEO", "Konten", "Ads"],
    gaji: "Rp6–9 jt/bln",
    postedDate: "2026-08-22",
  },
  {
    id: "7",
    slug: "customer-success",
    title: "Customer Success",
    department: "support",
    location: "Medan / Remote",
    type: "Penuh Waktu",
    level: "Junior",
    deskripsi: "Bantu pengguna lewat chat dan email serta pastikan masalah koneksi terselesaikan.",
    syarat: ["Komunikasi", "Troubleshooting", "CRM"],
    gaji: "Rp5–8 jt/bln",
    postedDate: "2026-08-25",
  },
];

const formatTanggal = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function TeamHiringPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  const filtered = LOWONGAN.filter((job) => {
    const cocokDivisi =
      selectedDepartment === "all" || job.department === selectedDepartment;
    const q = searchQuery.toLowerCase();
    const cocokCari =
      job.title.toLowerCase().includes(q) ||
      job.department.toLowerCase().includes(q) ||
      job.location.toLowerCase().includes(q) ||
      job.level.toLowerCase().includes(q);
    return cocokDivisi && cocokCari;
  });

  const totalPages = Math.ceil(filtered.length / perPage);
  const currentJobs = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Lowongan Tim Kami
          </h1>
          <p className="text-center text-lg text-slate-400 max-w-2xl mx-auto">
            Bergabunglah dengan tim dan bantu melindungi privasi jutaan pengguna
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari lowongan (mis. backend, design, remote)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedDepartment(cat.id);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  selectedDepartment === cat.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span>
                Divisi:{" "}
                <strong className="text-slate-200">
                  {selectedDepartment === "all"
                    ? "Semua"
                    : CATEGORIES.find((c) => c.id === selectedDepartment)?.label}
                </strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>
                Lowongan:{" "}
                <strong className="text-slate-200">{filtered.length}</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentJobs.map((job) => (
            <div
              key={job.id}
              className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <p className="text-blue-400 text-sm capitalize">
                        {job.department} &middot; {job.level}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {job.deskripsi}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {job.syarat.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-500"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3 text-slate-400">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span>
                      {job.type} &middot; {job.gaji}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Dibuka: {formatTanggal(job.postedDate)}</span>
                  </div>
                </div>

                <Link
                  href={`/careers/apply?position=${job.slug}`}
                  className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  Lamar Sekarang
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {currentJobs.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-4">
              <Search className="w-8 h-8 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Tidak ada lowongan ditemukan
            </h3>
            <p className="text-slate-400">
              Coba ubah filter divisi atau kata kunci pencarian Anda
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDepartment("all");
                setCurrentPage(1);
              }}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Atur Ulang Filter
            </button>
          </div>
        )}

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
                    ? "bg-blue-600 text-white"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800"
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
