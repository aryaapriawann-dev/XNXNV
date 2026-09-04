"use client";

import { useState } from "react";
import { Star, Calendar, User, Image, CheckCircle, AlertCircle, Filter, Search, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  category: "client" | "employee" | "partner" | "user";
  image: string;
  date: string;
  project: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "client", label: "Klien" },
  { id: "employee", label: "Karyawan" },
  { id: "partner", label: "Mitras" },
  { id: "user", label: "Pengguna" },
] as const;

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Budi Santoso",
    role: "CTO",
    company: "Tech Innovate Indonesia",
    content: "Kerja sama dengan tim XNXNV sangat profesional. Mereka memahami kebutuhan bisnis kami dengan baik dan menghasilkan solusi yang melebihi ekspektasi.",
    rating: 5,
    category: "client",
    image: "https://placehold.co/100x100/1e293b/cbd5e1?text=BS",
    date: "2026-08-15",
    project: "Digital Transformation Platform",
  },
  {
    id: "2",
    name: "Siti Rahayu",
    role: "Frontend Developer",
    company: "XNXNV",
    content: "Bekerja di XNXNV memberikan banyak kesempatan untuk belajar teknologi terkini. Budaya kerjanya supportive dan kolaboratif.",
    rating: 4,
    category: "employee",
    image: "https://placehold.co/100x100/1e293b/cbd5e1?text=SR",
    date: "2026-07-20",
    project: "Internal Tools Development",
  },
  {
    id: "3",
    name: "Agus Wijaya",
    role: "Product Manager",
    company: "FinTech Solution",
    content: "Kualitas kode dan dokumentasi yang diberikan sangat bagus. Tim XNXNV responsif terhadap feedback dan mampu menyelesaikan project tepat waktu.",
    rating: 5,
    category: "partner",
    image: "https://placehold.co/100x100/1e293b/cbd5e1?text=AW",
    date: "2026-06-10",
    project: "Mobile Banking Application",
  },
  {
    id: "4",
    name: "Dewi Lestari",
    role: "Freelance Designer",
    company: "Personal Project",
    content: "Platform yang dibuat oleh XNXNV sangat user-friendly. Interface-nya modern dan responsif di semua device.",
    rating: 4,
    category: "user",
    image: "https://placehold.co/100x100/1e293b/cbd5e1?text=DL",
    date: "2026-05-05",
    project: "Design System Implementation",
  },
  {
    id: "5",
    name: "Eko Prasetyo",
    role: "Director",
    company: "Startup X",
    content: "XNXNV benar-benar menjadi tech partner yang andal. Mereka tidak hanya mengerjakan task, tapi juga memberikan insight teknis yang bernilai.",
    rating: 5,
    category: "client",
    image: "https://placehold.co/100x100/1e293b/cbd5e1?text=EP",
    date: "2026-04-12",
    project: "E-commerce Platform",
  },
  {
    id: "6",
    name: "Fajar Nugroho",
    role: "Backend Engineer",
    company: "XNXNV",
    content: "Environment kerja yang supportive dan tantangan teknis yang menarik membuat saya betah bekerja di XNXNV.",
    rating: 5,
    category: "employee",
    image: "https://placehold.co/100x100/1e293b/cbd5e1?text=FN",
    date: "2026-03-22",
    project: "Microservices Architecture",
  },
  {
    id: "7",
    name: "Hana Putri",
    role: "UX Researcher",
    company: "Design Agency",
    content: "Kolaborasi dengan XNXNV dalam project UX research sangat efektif. Mereka menghargai input dari tim desain dan mengimplementasikannya dengan baik.",
    rating: 4,
    category: "partner",
    image: "https://placehold.co/100x100/1e293b/cbd5e1?text=HP",
    date: "2026-02-18",
    project: "Fintech App Redesign",
  },
];

export default function TestimonialsFilterPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 6;

  const filteredTestimonials = TESTIMONIALS.filter((testimonial) => {
    const matchesCategory = selectedCategory === "all" || testimonial.category === selectedCategory;
    const matchesSearch = testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredTestimonials.length / testimonialsPerPage);
  const currentTestimonials = filteredTestimonials.slice(
    (currentPage - 1) * testimonialsPerPage,
    currentPage * testimonialsPerPage
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Testimonials
          </h1>
          <p className="text-center text-lg text-slate-400 max-w-2xl mx-auto">
            Dengarkan pengalaman dan cerita dari klien, karyawan, dan mitra kami
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters Section */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari testimonials (e.g. klien, company, content)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span>Kategori: <strong className="text-slate-200">{selectedCategory === "all" ? "Semua" : CATEGORIES.find(c => c.id === selectedCategory)?.label}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Results: <strong className="text-slate-200">{filteredTestimonials.length}</strong></span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                    testimonial.category === "client" ? "bg-purple-500/10 text-purple-400" :
                    testimonial.category === "employee" ? "bg-blue-500/10 text-blue-400" :
                    testimonial.category === "partner" ? "bg-green-500/10 text-green-400" :
                    "bg-yellow-500/10 text-yellow-400"
                  }`}>
                    <span className="capitalize">{testimonial.category}</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? "fill-current" : "text-slate-700"}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <p className="text-slate-300 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-700"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-200">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role} @ {testimonial.company}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(testimonial.date).toLocaleDateString("id-ID", { month: "short", year: "numeric" })}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {currentTestimonials.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-4">
              <Search className="w-8 h-8 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tidak ada testimonials ditemukan</h3>
            <p className="text-slate-400">Coba ubah filter atau kata kunci pencarian Anda</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
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
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
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
