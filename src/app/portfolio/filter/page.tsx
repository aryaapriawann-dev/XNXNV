"use client";

import { useState } from "react";
import { Image, Code, Video, Globe, ChevronRight, Star, Filter, Search } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: "Web Development" | "Mobile App" | "Design" | "Marketing" | "Consulting";
  tags: string[];
  featured: boolean;
  rating: number;
  clients: number;
  imageUrl: string;
}

const categories = [
  { id: "all", name: "All Projects", icon: Image },
  { id: "web-development", name: "Web Development", icon: Globe },
  { id: "mobile-app", name: "Mobile App", icon: Image },
  { id: "design", name: "Design", icon: Image },
  { id: "marketing", name: "Marketing", icon: Code },
  { id: "consulting", name: "Consulting", icon: Code },
];

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "E-commerce Dashboard",
    description: "Comprehensive e-commerce management platform with real-time analytics, inventory tracking, and multi-channel integration.",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "Recharts", "Supabase"],
    featured: true,
    rating: 5,
    clients: 25,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Food Delivery App",
    description: "Mobile application for food ordering and delivery with real-time tracking, multiple payment options, and restaurant dashboard.",
    category: "Mobile App",
    tags: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
    featured: true,
    rating: 5,
    clients: 48,
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Brand Identity Suite",
    description: "Complete brand identity system including logo design, color palette, typography, and comprehensive brand guidelines.",
    category: "Design",
    tags: ["Figma", "Adobe Creative Suite", "Brand Strategy", "Visual Identity"],
    featured: true,
    rating: 5,
    clients: 32,
    imageUrl: "https://images.unsplash.com/photo-1600607686537-48bda2558671?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Social Media Marketing Platform",
    description: "All-in-one social media management tool with content scheduling, analytics, and team collaboration features.",
    category: "Marketing",
    tags: ["React", "Node.js", "MongoDB", "GraphQL"],
    featured: false,
    rating: 4,
    clients: 18,
    imageUrl: "https://images.unsplash.com/photo-1552664730-d3873f486494?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "Tech Startup Consultancy",
    description: "Comprehensive technology consultancy for startups including architecture design, tech stack selection, and scaling strategy.",
    category: "Consulting",
    tags: ["Strategy", "Architecture", "Mentorship", "Investor Pitch"],
    featured: true,
    rating: 5,
    clients: 15,
    imageUrl: "https://images.unsplash.com/photo-1552664730-d3873f486494?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Healthcare Portal",
    description: "Secure patient management system with appointment scheduling, medical records, and telemedicine integration.",
    category: "Web Development",
    tags: ["Next.js", "Auth0", "PostgreSQL", "Twilio"],
    featured: true,
    rating: 5,
    clients: 35,
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "7",
    title: "FinTech Mobile App",
    description: "Personal finance management app with budget tracking, investment portfolio, and automated savings features.",
    category: "Mobile App",
    tags: ["React Native", "Redux", "Firebase", "Plaid API"],
    featured: true,
    rating: 5,
    clients: 52,
    imageUrl: "https://images.unsplash.com/photo-1554224155-6796-392091c44ca3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "8",
    title: "Product Design System",
    description: "Scalable design system for enterprise applications with component library, design tokens, and documentation.",
    category: "Design",
    tags: ["Figma", "Style Dictionary", "Storybook", "Design Tokens"],
    featured: false,
    rating: 4,
    clients: 22,
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e3776b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "9",
    title: "Digital Marketing Campaign",
    description: "Full-stack digital marketing campaign including SEO optimization, content strategy, and performance analytics.",
    category: "Marketing",
    tags: ["SEO", "Content Marketing", "Analytics", "Conversion Optimization"],
    featured: false,
    rating: 4,
    clients: 41,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "10",
    title: "AI Consulting Project",
    description: "AI and machine learning consultation for businesses looking to implement AI solutions in their operations.",
    category: "Consulting",
    tags: ["AI Strategy", "Machine Learning", "Data Science", "Implementation"],
    featured: true,
    rating: 5,
    clients: 12,
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "11",
    title: "Educational Platform",
    description: "Comprehensive learning management system with video lessons, quizzes, progress tracking, and certification.",
    category: "Web Development",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Video Streaming"],
    featured: true,
    rating: 5,
    clients: 65,
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "12",
    title: "HR Management App",
    description: "Mobile application for employee management including attendance, payroll, leave requests, and performance reviews.",
    category: "Mobile App",
    tags: ["Flutter", "Firebase", "Push Notifications", "Biometric"],
    featured: false,
    rating: 4,
    clients: 28,
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function PortfolioFilterPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [minRating, setMinRating] = useState<number>(0);
  const [onlyFeatured, setOnlyFeatured] = useState<boolean>(false);

  const filteredItems = portfolioItems.filter((item) => {
    const categoryMatch = activeCategory === "all" || item.category.toLowerCase().replace(/\s+/g, "-") === activeCategory;
    const searchMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const ratingMatch = item.rating >= minRating;
    const featuredMatch = !onlyFeatured || item.featured;
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
      "web-development": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      "mobile-app": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
      "design": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
      "marketing": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      "consulting": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    };
    return colors[category as keyof typeof colors] || "bg-zinc-100 text-zinc-700";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555421689-492607a86c07?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Portfolio Kami
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Melihat hasil kerja terbaik kami yang telah membantu bisnis tumbuh dan berkembang.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{portfolioItems.length}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Proyek Selesai</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {portfolioItems.reduce((acc, p) => acc + p.clients, 0)}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Klien Puas</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {(portfolioItems.reduce((acc, p) => acc + p.rating, 0) / portfolioItems.length).toFixed(1)}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Rata-rata Rating</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {portfolioItems.filter(p => p.featured).length}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Proyek Unggulan</div>
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
                  placeholder="Cari proyek..."
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

      {/* Portfolio Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {activeCategory === "all" ? "Semua Proyek" : `${categories.find(c => c.id === activeCategory)?.name}`}
              {minRating > 0 && ` (Min ${minRating}⭐)`}
              {onlyFeatured && " (Unggulan)"}
            </h2>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm">
              Menampilkan {filteredItems.length} dari {portfolioItems.length} proyek
            </div>
          </div>

          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-zinc-50 dark:bg-zinc-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      {item.featured && (
                        <div className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
                          UNGGULAN
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white line-clamp-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 text-amber-400">
                        {getRatingStars(item.rating)}
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 ml-1">
                          {item.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                        <span>{item.clients} klien</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
                      Lihat Detail <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image className="h-10 w-10 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Tidak ada proyek ditemukan
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Coba ubah filter kategori, rating, atau kata kunci pencarian
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Butuh Solusi yang Sama?
          </h2>
          <p className="text-indigo-100 text-xl mb-10">
            Hubungi kami untuk mendiskusikan kebutuhan proyek Anda dan bagaimana kami bisa membantu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors">
              Hubungi Kami
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition-colors">
              Lihat Semua Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
