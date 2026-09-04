"use client";

import { useState, useMemo } from "react";
import { Code, Smartphone, Globe, CheckCircle2, ArrowRight, Search } from "lucide-react";
import Link from "next/link";

const categories = [
  { id: "all", name: "Semua" },
  { id: "web", name: "Web Development" },
  { id: "mobile", name: "Mobile App" },
  { id: "ecommerce", name: "E-commerce" },
  { id: "dashboard", name: "Dashboard" },
];

const projects = [
  {
    id: "1",
    title: "E-commerce Platform",
    category: "ecommerce",
    image: "https://placehold.co/600x400/18181b/ffffff?text=E-commerce+Platform",
    description: "Full-stack e-commerce platform dengan payment gateway integration.",
    technologies: ["Next.js", "Stripe", "Supabase"],
  },
  {
    id: "2",
    title: "Mobile Banking App",
    category: "mobile",
    image: "https://placehold.co/600x400/3b82f6/ffffff?text=Mobile+Banking",
    description: "Cross-platform banking application untuk mobile banking.",
    technologies: ["Flutter", "Firebase", "Node.js"],
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    category: "dashboard",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Analytics+Dashboard",
    description: "Real-time analytics dashboard dengan data visualization.",
    technologies: ["React", "D3.js", "PostgreSQL"],
  },
  {
    id: "4",
    title: "Corporate Website",
    category: "web",
    image: "https://placehold.co/600x400/6366f1/ffffff?text=Corporate+Website",
    description: "Modern corporate website dengan SEO optimization.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "5",
    title: "Food Delivery App",
    category: "mobile",
    image: "https://placehold.co/600x400/ef4444/ffffff?text=Food+Delivery",
    description: "Food delivery app dengan real-time tracking.",
    technologies: ["React Native", "Google Maps API", "AWS"],
  },
  {
    id: "6",
    title: "SaaS Dashboard",
    category: "dashboard",
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=SaaS+Dashboard",
    description: "Complete SaaS dashboard dengan subscription management.",
    technologies: ["Next.js", "Prisma", "Redis"],
  },
  {
    id: "7",
    title: "Healthcare Portal",
    category: "web",
    image: "https://placehold.co/600x400/0ea5e9/ffffff?text=Healthcare+Portal",
    description: "Patient management portal dengan telemedicine integration.",
    technologies: ["Next.js", "WebRTC", "PostgreSQL"],
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === "all" || project.category === activeCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Hero */}
      <section className="bg-zinc-900 dark:bg-zinc-950 py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Portofolio Kami
          </h1>
          <p className="text-lg text-zinc-300 mb-8">
            Lihat hasil kerja terbaik kami dalam membangun solusi digital berkualitas.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Cari project..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-lg font-medium text-sm transition-all ${
                  activeCategory === category.id
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md"
                    : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              {filteredProjects.length} project ditemukan
            </h2>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-zinc-500 text-lg">Tidak ada project yang ditemukan.</p>
              <button
                onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}
                className="mt-4 text-indigo-600 hover:underline"
              >
                Reset filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl overflow-hidden bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:shadow-2xl hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-zinc-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="px-6 py-2 rounded-lg bg-white text-zinc-900 font-semibold hover:bg-zinc-100 transition-colors">
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {project.category === "web" && <Globe className="h-4 w-4 text-blue-500" />}
                      {project.category === "mobile" && <Smartphone className="h-4 w-4 text-purple-500" />}
                      {project.category === "ecommerce" && <Code className="h-4 w-4 text-green-500" />}
                      {project.category === "dashboard" && <Code className="h-4 w-4 text-indigo-500" />}
                      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 capitalize">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-700 text-xs text-zinc-600 dark:text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 dark:bg-zinc-950 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ingin Membangun Project Seperti Ini?
          </h2>
          <p className="text-lg text-zinc-300 mb-8">
            Hubungi kami sekarang dan wujudkan ide project Anda menjadi kenyataan.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-zinc-900 font-bold hover:bg-zinc-100 transition-colors"
          >
            Hubungi Kami Sekarang
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
