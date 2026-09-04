"use client";

import { useState } from "react";
import { Star, Users, TrendingUp, CheckCircle, Filter, ArrowRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  category: "Customer" | "Partner" | "Employee";
  rating: number;
  content: string;
  date: string;
  avatar: string;
}

const categories = [
  { id: "all", name: "All Testimonials", icon: Users },
  { id: "customer", name: "Customer", icon: CheckCircle },
  { id: "partner", name: "Partner", icon: TrendingUp },
  { id: "employee", name: "Employee", icon: Star },
];

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Budi Santoso",
    role: "CTO",
    company: "TechCorp Indonesia",
    category: "Customer",
    rating: 5,
    content: "Layanan mereka luar biasa! Platform yang mereka kembangkan meningkatkan efisiensi operasional kami hingga 40%. Tim sangat responsif dan professional.",
    date: "2026-08-15",
    avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=3b82f6&color=fff"
  },
  {
    id: "2",
    name: "Sarah Wijaya",
    role: "Product Manager",
    company: "InnovationLab",
    category: "Partner",
    rating: 5,
    content: "Bekerja sama dengan tim ini sangat menyenangkan. Mereka memahami kebutuhan bisnis kami dengan baik dan delivering yang melebihi ekspektasi.",
    date: "2026-08-10",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Wijaya&background=10b981&color=fff"
  },
  {
    id: "3",
    name: "Ahmad Fauzi",
    role: "Senior Developer",
    company: "Our Company",
    category: "Employee",
    rating: 5,
    content: "Culture di perusahaan ini sangat mendukung untuk pertumbuhan profesional. Banyak kesempatan belajar teknologi terkini dan work-life balance yang baik.",
    date: "2026-08-05",
    avatar: "https://ui-avatars.com/api/?name=Ahmad+Fauzi&background=8b5cf6&color=fff"
  },
  {
    id: "4",
    name: "Dewi Lestari",
    role: "Director",
    company: "Global Solutions",
    category: "Customer",
    rating: 4,
    content: "Solusi yang mereka berikan sangat tepat sasaran. ROI yang kita dapatkan dalam 6 bulan pertama sudah melebihi investasi awal.",
    date: "2026-07-28",
    avatar: "https://ui-avatars.com/api/?name=Dewi+Lestari&background=f59e0b&color=fff"
  },
  {
    id: "5",
    name: "Michael Chen",
    role: "Co-Founder",
    company: "StartupX",
    category: "Partner",
    rating: 5,
    content: "Teknologi yang mereka gunakan sangat canggih dan scalable. Ini adalah partner terbaik untuk ekspansi teknologi kami ke pasar Asia Tenggara.",
    date: "2026-07-20",
    avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=ef4444&color=fff"
  },
  {
    id: "6",
    name: "Putri Amelia",
    role: "UX Designer",
    company: "Our Company",
    category: "Employee",
    rating: 5,
    content: "Team yang supportive dan collaborative. Di sini saya bisa bereksperimen dengan design system baru dan mendapatkan feedback yang konstruktif.",
    date: "2026-07-15",
    avatar: "https://ui-avatars.com/api/?name=Putri+Amelia&background=ec4899&color=fff"
  },
  {
    id: "7",
    name: "Rizky Pratama",
    role: "Operations Manager",
    company: "Logistik Maju",
    category: "Customer",
    rating: 5,
    content: "Implementasi sistem tracking mereka menghemat waktu operasional hingga 15 jam per minggu. Sangat merekomendasikan untuk perusahaan logistik.",
    date: "2026-07-10",
    avatar: "https://ui-avatars.com/api/?name=Rizky+Pratama&background=6366f1&color=fff"
  },
  {
    id: "8",
    name: "Lisa Henderson",
    role: "VP of Sales",
    company: "Enterprise Corp",
    category: "Partner",
    rating: 4,
    content: "Kemitraan ini telah membuka peluang baru untuk bisnis kami. Komunikasi yang baik dan transparansi dalam setiap development stage.",
    date: "2026-06-25",
    avatar: "https://ui-avatars.com/api/?name=Lisa+Henderson&background=14b8a6&color=fff"
  },
  {
    id: "9",
    name: "Eko Susanto",
    role: "DevOps Engineer",
    company: "Our Company",
    category: "Employee",
    rating: 5,
    content: "Teknologi stack yang modern dan challenge yang menantang. Di sini saya bisa mengasah skill DevOps dan cloud computing secara langsung.",
    date: "2026-06-20",
    avatar: "https://ui-avatars.com/api/?name=Eko+Susanto&background=0d9488&color=fff"
  },
  {
    id: "10",
    name: "Nadine Johnson",
    role: "Marketing Director",
    company: "BrandName Inc",
    category: "Customer",
    rating: 5,
    content: "Landing page yang mereka buat meningkatkan conversion rate kami sebesar 25% dalam 3 bulan pertama. Design yang menarik dan SEO-friendly.",
    date: "2026-06-15",
    avatar: "https://ui-avatars.com/api/?name=Nadine+Johnson&background=84cc16&color=fff"
  }
];

export default function TestimonialsFilterPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [minRating, setMinRating] = useState<number>(0);

  const filteredTestimonials = testimonials.filter((t) => {
    const categoryMatch = activeCategory === "all" || t.category.toLowerCase() === activeCategory;
    const ratingMatch = t.rating >= minRating;
    return categoryMatch && ratingMatch;
  });

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-zinc-200 dark:fill-zinc-700 text-zinc-300 dark:text-zinc-600"}`}
      />
    ));
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      customer: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      partner: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      employee: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    };
    return colors[category as keyof typeof colors] || "bg-zinc-100 text-zinc-700";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Testimonials
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Dengarkan apa yang mereka katakan tentang pengalaman bekerja sama dengan kami.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">4.8/5</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Average Rating</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{testimonials.length}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Total Reviews</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Satisfaction Rate</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Repeat Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                      : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Rating Filter */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-zinc-400" />
              <span className="font-medium text-zinc-900 dark:text-white">Minimum Rating:</span>
              <div className="flex items-center gap-2">
                {[0, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setMinRating(rating)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      minRating === rating
                        ? "bg-indigo-600 text-white"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {rating === 0 ? "All" : `${rating}+`}
                    {rating > 0 && getRatingStars(rating)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {activeCategory === "all" ? "All Testimonials" : `${categories.find(c => c.id === activeCategory)?.name} Testimonials`}
              {minRating > 0 && ` (Min ${minRating} stars)`}
            </h2>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm">
              Menampilkan {filteredTestimonials.length} dari {testimonials.length} testimonial
            </div>
          </div>

          {filteredTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {getRatingStars(testimonial.rating)}
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-6 line-clamp-3">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white">{testimonial.name}</h4>
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                      <span className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(testimonial.category)}`}>
                        {testimonial.category}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                    <span className="text-xs text-zinc-400">
                      {new Date(testimonial.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                    <ArrowRight className="h-4 w-4 text-zinc-400" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Tidak ada testimonial ditemukan</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Coba ubah filter kategori atau rating
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Beri Kami Rating & Ulasan</h2>
          <p className="text-indigo-100 text-xl mb-10">
            Apakah Anda puas dengan layanan kami? Beri tahu dunia tentang pengalaman Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors">
              Write a Review
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition-colors">
              View More Reviews
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
