"use client";

import { useState } from "react";
import { Zap, Cpu, TrendingUp, UserCheck, Shield, Layout, Filter, ChevronRight, CheckCircle, Search } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  category: "Development" | "Design" | "Marketing" | "Consulting";
  tags: string[];
  featured: boolean;
  rating: number;
  clients: number;
}

const categories = [
  { id: "all", name: "All Services", icon: Layout },
  { id: "development", name: "Development", icon: CodeIcon },
  { id: "design", name: "Design", icon: Layout },
  { id: "marketing", name: "Marketing", icon: TrendingUp },
  { id: "consulting", name: "Consulting", icon: UserCheck },
];

function CodeIcon({ className }: { className?: string }) {
  return <span className={className}>💻</span>;
}

const services: Service[] = [
  {
    id: "1",
    title: "Custom Web Application Development",
    description: "Built robust, scalable web applications using modern technologies like Next.js, React, and Node.js. Perfect for businesses needing custom digital solutions.",
    category: "Development",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    featured: true,
    rating: 5,
    clients: 45
  },
  {
    id: "2",
    title: "Mobile App Development",
    description: "Create native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
    category: "Development",
    tags: ["Flutter", "React Native", "iOS", "Android"],
    featured: true,
    rating: 5,
    clients: 32
  },
  {
    id: "3",
    title: "UI/UX Design",
    description: "Design intuitive and visually stunning interfaces that delight users and drive engagement. We focus on user-centered design principles.",
    category: "Design",
    tags: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    featured: true,
    rating: 5,
    clients: 38
  },
  {
    id: "4",
    title: "Digital Marketing Strategy",
    description: "Develop comprehensive digital marketing strategies that drive traffic, generate leads, and increase conversions across all channels.",
    category: "Marketing",
    tags: ["SEO", "Content Marketing", "Social Media", "Analytics"],
    featured: false,
    rating: 4,
    clients: 28
  },
  {
    id: "5",
    title: "Tech Consultation",
    description: "Expert technology consultation to help you choose the right tools, architectures, and strategies for your business goals.",
    category: "Consulting",
    tags: ["Architecture Review", "Technology Assessment", "Roadmap Planning"],
    featured: true,
    rating: 5,
    clients: 22
  },
  {
    id: "6",
    title: "E-commerce Solutions",
    description: "End-to-end e-commerce development with payment integration, inventory management, and customer management systems.",
    category: "Development",
    tags: ["Shopify", "WooCommerce", "Stripe", "Inventory"],
    featured: true,
    rating: 5,
    clients: 52
  },
  {
    id: "7",
    title: "Brand Identity Design",
    description: "Create cohesive brand identities including logos, color schemes, typography, and brand guidelines that resonate with your audience.",
    category: "Design",
    tags: ["Logo Design", "Brand Guidelines", "Visual Identity", "Typography"],
    featured: false,
    rating: 4,
    clients: 35
  },
  {
    id: "8",
    title: "Social Media Management",
    description: "Full-service social media management including content creation, scheduling, community management, and performance analytics.",
    category: "Marketing",
    tags: ["Content Creation", "Community Management", "Analytics", "Strategy"],
    featured: false,
    rating: 4,
    clients: 41
  },
  {
    id: "9",
    title: "Software Architecture Consulting",
    description: "Expert software architecture consultation to ensure your systems are scalable, maintainable, and built to last.",
    category: "Consulting",
    tags: ["System Design", "Microservices", "Cloud Architecture", "Performance"],
    featured: true,
    rating: 5,
    clients: 18
  },
  {
    id: "10",
    title: "Product Design Sprints",
    description: "Rapid product design sprints to validate ideas, create prototypes, and gather user feedback before full development.",
    category: "Design",
    tags: ["Design Sprints", "Prototyping", "User Testing", "Validation"],
    featured: false,
    rating: 5,
    clients: 29
  },
  {
    id: "11",
    title: "Growth Hacking",
    description: "Data-driven growth strategies to accelerate user acquisition and retention through creative marketing techniques.",
    category: "Marketing",
    tags: ["A/B Testing", "Funnel Optimization", "Performance Marketing"],
    featured: false,
    rating: 4,
    clients: 33
  },
  {
    id: "12",
    title: "DevOps & Cloud Services",
    description: "Complete DevOps implementation including CI/CD pipelines, cloud infrastructure setup, and monitoring solutions.",
    category: "Development",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    featured: true,
    rating: 5,
    clients: 24
  }
];

export default function ServicesFilterPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [minRating, setMinRating] = useState<number>(0);
  const [onlyFeatured, setOnlyFeatured] = useState<boolean>(false);

  const filteredServices = services.filter((service) => {
    const categoryMatch = activeCategory === "all" || service.category.toLowerCase() === activeCategory;
    const searchMatch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const ratingMatch = service.rating >= minRating;
    const featuredMatch = !onlyFeatured || service.featured;
    return categoryMatch && searchMatch && ratingMatch && featuredMatch;
  });

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${
          i < rating ? "text-amber-400" : "text-zinc-300 dark:text-zinc-600"
        }`}
      >
        ★
      </span>
    ));
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      development: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      design: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
      marketing: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      consulting: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    };
    return colors[category as keyof typeof colors] || "bg-zinc-100 text-zinc-700";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Comprehensive solutions to help your business grow and succeed in the digital age.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{services.length}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Services Offered</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {services.reduce((acc, s) => acc + s.clients, 0)}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {(services.reduce((acc, s) => acc + s.rating, 0) / services.length).toFixed(1)}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Average Rating</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {services.filter(s => s.featured).length}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Featured Services</div>
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
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-900 dark:text-white placeholder-zinc-400"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-4 flex-wrap">
                <Filter className="h-5 w-5 text-zinc-400" />
                <span className="font-medium text-zinc-900 dark:text-white">Minimum Rating:</span>
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
                      {rating === 0 ? "All" : `${rating}+`}
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
                    Only Featured
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {activeCategory === "all" ? "All Services" : `${categories.find(c => c.id === activeCategory)?.name} Services`}
              {minRating > 0 && ` (Min ${minRating} stars)`}
              {onlyFeatured && " (Featured Only)"}
            </h2>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm">
              Menampilkan {filteredServices.length} dari {services.length} layanan
            </div>
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800 ${
                    service.featured ? "border-indigo-200 dark:border-indigo-800/50" : ""
                  }`}
                >
                  {service.featured && (
                    <div className="absolute -top-3 left-6 px-4 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
                      FEATURED
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white line-clamp-1">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {getRatingStars(service.rating)}
                    <span className="text-sm text-zinc-500 dark:text-zinc-400 ml-2">
                      ({service.clients} clients)
                    </span>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(service.category)}`}>
                    {service.category}
                  </span>
                  <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                    <span className="text-xs text-zinc-400">View Details</span>
                    <ChevronRight className="h-4 w-4 text-zinc-400" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Layout className="h-10 w-10 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Tidak ada layanan ditemukan
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-indigo-100 text-xl mb-10">
            Let's discuss how we can help your business achieve its goals with our comprehensive services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors">
              Contact Us Now
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
