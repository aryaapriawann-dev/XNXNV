"use client";

import { useState } from "react";
import { Building2, Globe, ChevronRight, Star, Filter, Search, Zap, TrendingUp, Users } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  description: string;
  category: "Technology" | "Marketing" | "Distribution" | "Finance" | "Support";
  plans: string[];
  rating: number;
  customers: number;
  imageUrl: string;
  featured: boolean;
}

const categories = [
  { id: "all", name: "All Categories", icon: Building2 },
  { id: "technology", name: "Technology", icon: Zap },
  { id: "marketing", name: "Marketing", icon: TrendingUp },
  { id: "distribution", name: "Distribution", icon: Users },
  { id: "finance", name: "Finance", icon: Zap },
  { id: "support", name: "Support", icon: Users },
];

const partners: Partner[] = [
  {
    id: "1",
    name: "TechGlobal Solutions",
    description: "Leading technology provider with comprehensive cloud infrastructure and enterprise solutions.",
    category: "Technology",
    plans: ["Basic", "Professional", "Enterprise"],
    rating: 5,
    customers: 5000,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    featured: true
  },
  {
    id: "2",
    name: "Digital Growth Agency",
    description: "Full-service digital marketing agency specializing in SEO, content marketing, and social media.",
    category: "Marketing",
    plans: ["Starter", "Growth", "Premium"],
    rating: 4.5,
    customers: 3200,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    featured: true
  },
  {
    id: "3",
    name: "Logistics Pro",
    description: "Efficient logistics and distribution network covering Southeast Asia with same-day delivery options.",
    category: "Distribution",
    plans: ["Standard", "Express", "Enterprise"],
    rating: 4.8,
    customers: 2800,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    featured: true
  },
  {
    id: "4",
    name: "FinTech Partner",
    description: "Payment processing and financial services partner with competitive rates and fast integration.",
    category: "Finance",
    plans: ["Standard", "Premium", "Custom"],
    rating: 4.7,
    customers: 4500,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    featured: false
  },
  {
    id: "5",
    name: "Customer Support Hub",
    description: "24/7 customer support services with multilingual agents and advanced ticketing system.",
    category: "Support",
    plans: ["Basic", "Pro", "Enterprise"],
    rating: 4.3,
    customers: 1500,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    featured: false
  },
  {
    id: "6",
    name: "Cloud Services Inc",
    description: "Advanced cloud computing services with AI-powered analytics and security solutions.",
    category: "Technology",
    plans: ["Starter", "Business", "Enterprise"],
    rating: 5,
    customers: 6200,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    featured: true
  },
  {
    id: "7",
    name: "Brand Creative",
    description: "Creative agency specializing in branding, design, and content production for modern businesses.",
    category: "Marketing",
    plans: ["Essential", "Growth", "Premium"],
    rating: 4.6,
    customers: 1800,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    featured: false
  },
  {
    id: "8",
    name: "Supply Chain Plus",
    description: "Comprehensive supply chain management with inventory optimization and demand forecasting.",
    category: "Distribution",
    plans: ["Basic", "Professional", "Enterprise"],
    rating: 4.9,
    customers: 2200,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    featured: true
  },
  {
    id: "9",
    name: "Payment Gateway",
    description: "Secure payment processing with multiple payment methods and fraud protection.",
    category: "Finance",
    plans: ["Standard", "Premium", "Enterprise"],
    rating: 4.4,
    customers: 8000,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    featured: false
  },
  {
    id: "10",
    name: "HelpDesk Pro",
    description: "Advanced help desk solution with AI-powered ticket classification and self-service portal.",
    category: "Support",
    plans: ["Basic", "Professional", "Enterprise"],
    rating: 4.5,
    customers: 1200,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    featured: false
  },
  {
    id: "11",
    name: "DevTools Plus",
    description: "Developer tools and API integration services for rapid application development.",
    category: "Technology",
    plans: ["Free", "Pro", "Enterprise"],
    rating: 4.8,
    customers: 15000,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    featured: true
  },
  {
    id: "12",
    name: "Influencer Network",
    description: "Social media influencer marketing platform with AI-powered matching and performance tracking.",
    category: "Marketing",
    plans: ["Starter", "Growth", "Enterprise"],
    rating: 4.2,
    customers: 900,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    featured: false
  }
];

export default function PartnersFilterPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [minRating, setMinRating] = useState<number>(0);
  const [onlyFeatured, setOnlyFeatured] = useState<boolean>(false);

  const filteredPartners = partners.filter((partner) => {
    const categoryMatch = activeCategory === "all" || partner.category.toLowerCase().replace(/\s+/g, "-") === activeCategory;
    const searchMatch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    const ratingMatch = partner.rating >= minRating;
    const featuredMatch = !onlyFeatured || partner.featured;
    return categoryMatch && searchMatch && ratingMatch && featuredMatch;
  });

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < Math.round(rating) ? "text-amber-400" : "text-zinc-300 dark:text-zinc-600"
        }`}
      >
        ★
      </span>
    ));
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "technology": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      "marketing": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      "distribution": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
      "finance": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
      "support": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
    };
    return colors[category as keyof typeof colors] || "bg-zinc-100 text-zinc-700";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Mitra Kami
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Bekerja sama dengan mitra terpercaya untuk memberikan solusi terbaik kepada pelanggan kami.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{partners.length}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Mitra Aktif</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {partners.reduce((acc, p) => acc + p.customers, 0).toLocaleString()}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Pelanggan Bersama</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {(partners.reduce((acc, p) => acc + p.rating, 0) / partners.length).toFixed(1)}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Rata-rata Rating</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {partners.filter(p => p.featured).length}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Mitra Unggulan</div>
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

          {/* Search & Rating Filter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <Search className="h-5 w-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Cari mitra..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-900 dark:text-white placeholder-zinc-400"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-4 flex-wrap">
                <Filter className="h-5 w-5 text-zinc-400" />
                <span className="font-medium text-zinc-900 dark:text-white">Minimal Rating:</span>
                <div className="flex items-center gap-2">
                  {[0, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setMinRating(rating)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        minRating === rating
                          ? "bg-indigo-600 text-white"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                      }`}
                    >
                      {rating === 0 ? "Semua" : `${rating}+`}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={onlyFeatured}
                    onChange={(e) => setOnlyFeatured(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="featured" className="text-sm text-zinc-700 dark:text-zinc-300">
                    Hanya Unggulan
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {activeCategory === "all" ? "Semua Mitra" : categories.find(c => c.id === activeCategory)?.name}
              {minRating > 0 && ` (Min ${minRating}⭐)`}
              {onlyFeatured && " (Unggulan)"}
            </h2>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm">
              Menampilkan {filteredPartners.length} dari {partners.length} mitra
            </div>
          </div>

          {filteredPartners.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPartners.map((partner) => {
                const Icon = categories.find(c => c.id === activeCategory)?.icon || Building2;
                return (
                  <div
                    key={partner.id}
                    className={`group bg-zinc-50 dark:bg-zinc-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border ${
                      partner.featured
                        ? "border-indigo-600 shadow-lg shadow-indigo-600/20"
                        : "border-zinc-100 dark:border-zinc-800"
                    }`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={partner.imageUrl}
                        alt={partner.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                      <div className="absolute top-4 left-4">
                        {partner.featured && (
                          <div className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
                            UNGGULAN
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                          {partner.name}
                        </h3>
                        <div className="flex items-center gap-1 text-amber-400">
                          {getRatingStars(partner.rating)}
                          <span className="text-sm text-zinc-500 dark:text-zinc-400 ml-1">
                            {partner.rating}
                          </span>
                        </div>
                      </div>
                      <p className="text-zinc-700 dark:text-zinc-300 mb-4 line-clamp-2">
                        {partner.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(partner.category)}`}>
                          {partner.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                          <span>{partner.customers.toLocaleString()} pelanggan</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {partner.plans.slice(0, 3).map((plan) => (
                          <span
                            key={plan}
                            className="px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded-full"
                          >
                            {plan}
                          </span>
                        ))}
                      </div>
                      <button className="w-full flex items-center justify-center gap-2 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
                        Lihat Detail <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-10 w-10 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Tidak ada mitra ditemukan
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Coba ubah filter kategori, rating, atau kata kunci pencarian
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-12">
            Mengapa Bekerja Sama dengan Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Inovasi Terdepan</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Kami selalu menggunakan teknologi terbaru dan metode terbaik untuk memberikan solusi inovatif.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Dukungan Komprehensif</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Kami memberikan dukungan penuh dan pelatihan untuk memastikan kesuksesan bersama.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Pertumbuhan Bersama</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Kami berkomitmen untuk pertumbuhan bersama melalui kolaborasi yang saling menguntungkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tertarik Menjadi Mitra?
          </h2>
          <p className="text-indigo-100 text-xl mb-10">
            Hubungi tim kami untuk mendiskusikan peluang kolaborasi dan bagaimana kami bisa membantu bisnis Anda tumbuh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors">
              Hubungi Tim Bisnis
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition-colors">
              Pelajari Program Mitra
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
