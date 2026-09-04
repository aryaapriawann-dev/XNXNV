"use client";

import { useState } from "react";
import { Search, Filter, Zap, Code, Palette, Globe } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "Web" | "Mobile" | "UI/UX" | "Branding";
  image: string;
  tags: string[];
  client: string;
  year: string;
}

const categories = ["Semua", "Web", "Mobile", "UI/UX", "Branding"];

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    category: "Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Dashboard"],
    client: "TechGlobal Inc",
    year: "2024",
  },
  {
    id: "2",
    title: "FinMobile App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Flutter", "Fintech", "Mobile"],
    client: "FinTech Solutions",
    year: "2024",
  },
  {
    id: "3",
    title: "Brand Identity System",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop",
    tags: ["Identity", "Logo", "Brand Guidelines"],
    client: "Creative Hub",
    year: "2023",
  },
  {
    id: "4",
    title: "Healthcare Portal",
    category: "Web",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "Healthcare", "Portal"],
    client: "MediCare Plus",
    year: "2024",
  },
  {
    id: "5",
    title: "Travel Booking App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?q=80&w=2070&auto=format&fit=crop",
    tags: ["React Native", "Travel", "Booking"],
    client: "Wanderlust App",
    year: "2023",
  },
  {
    id: "6",
    title: "SaaS Landing Page",
    category: "Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    tags: ["Landing Page", "SaaS", "Marketing"],
    client: "CloudWorks",
    year: "2024",
  },
  {
    id: "7",
    title: "Fintech Mobile App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1554224155-67bd0b6ca411?q=80&w=2070&auto=format&fit=crop",
    tags: ["Mobile App", "Fintech", "Finance"],
    client: "PayEasy",
    year: "2024",
  },
  {
    id: "8",
    title: "UX Research Platform",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1555421689-49084642ca33?q=80&w=2070&auto=format&fit=crop",
    tags: ["UX Research", "Platform", "Design"],
    client: "ResearchFirst",
    year: "2023",
  },
  {
    id: "9",
    title: "Luxury Fashion Brand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    tags: ["Luxury", "Fashion", "Brand Identity"],
    client: "Elegant Styles",
    year: "2024",
  },
  {
    id: "10",
    title: "Educational LMS",
    category: "Web",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6aaf6e?q=80&w=2070&auto=format&fit=crop",
    tags: ["LMS", "Education", "E-learning"],
    client: "LearnPro",
    year: "2024",
  },
  {
    id: "11",
    title: "Real Estate App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    tags: ["Real Estate", "Mobile", "Property"],
    client: "PropertyPro",
    year: "2023",
  },
  {
    id: "12",
    title: "Restaurant Management UI",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2070&auto=format&fit=crop",
    tags: ["UI Design", "Restaurant", "Management"],
    client: "FoodServe",
    year: "2024",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "Semua" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555421689-49084642ca33?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Portofolio Kami</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Lihat hasil karya terbaik kami dalam pengembangan web, mobile, dan desain UI/UX.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">{projects.length}</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Kepuasan Klien</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">5+</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Kategori</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Retry Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Cari proyek..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Menampilkan {filteredProjects.length} proyek dari kategori "{selectedCategory}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-black/80 text-zinc-900 dark:text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-md text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Filter className="h-16 w-16 text-zinc-300 dark:text-zinc-700 mx-auto mb-4" />
              <p className="text-zinc-500 dark:text-zinc-400 text-lg">Tidak ada proyek yang ditemukan</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Icons */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Kategori Keahlian
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Kami memiliki keahlian dalam berbagai bidang teknologi dan desain
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Code, title: "Web Development", count: 45, color: "bg-blue-500" },
              { icon: Globe, title: "Mobile Development", count: 32, color: "bg-green-500" },
              { icon: Palette, title: "UI/UX Design", count: 28, color: "bg-purple-500" },
              { icon: Zap, title: "Branding", count: 15, color: "bg-amber-500" },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-16 w-16 ${cat.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <cat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-2xl font-bold text-zinc-600 dark:text-zinc-400">{cat.count}+</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">Proyek Selesai</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Butuh Proyek Serupa?</h2>
          <p className="text-indigo-100 text-xl mb-10">
            Hubungi kami untuk membuat solusi digital yang sesuai dengan kebutuhan bisnis Anda.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
          >
            Mulai Proyek Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}
