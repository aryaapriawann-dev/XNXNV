"use client";

import { ArrowLeft, Calendar, TrendingUp, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Portfolio {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  images: string[];
  client: string;
  date: string;
  duration: string;
  results: string[];
}

const portfolio: Portfolio = {
  id: "e-commerce-pro",
  title: "E-Commerce Platform",
  category: "Web Development",
  description: "Platform e-commerce lengkap dengan manajemen produk, pembayaran, dan analitik.",
  longDescription: "Kami mengembangkan platform e-commerce skalabel untuk E-Commerce Pro, sebuah startup yang ingin meningkatkan pengalaman belanja pelanggan secara digital. Solusi mencakup sistem manajemen produk, integrasi pembayaran, dan dashboard analitik yang komprehensif.",
  images: [
    "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522938095999-1067c432b977?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563237027-22132f83d98f?q=80&w=2070&auto=format&fit=crop",
  ],
  client: "E-Commerce Pro",
  date: "Mei 2024",
  duration: "3 bulan",
  results: [
    "Peningkatan konversi 45%",
    "Peningkatan penjualan 60%",
    "Reduksi churn rate 30%",
    "Waktu load halaman 2x lebih cepat",
  ],
};

export default function PortfolioDetail() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col min-h-full">
      {/* Breadcrumb */}
      <section className="py-6 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-zinc-400">/</span>
                  <Link href="/portfolio" className="ml-1 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                    Portfolio
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="text-zinc-400">/</span>
                  <span className="ml-1 text-zinc-900 dark:text-white font-medium">{portfolio.title}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Detail Header */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-zinc-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Kembali ke Portfolio
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">{portfolio.title}</h1>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium">
              {portfolio.category}
            </span>
            <span className="px-4 py-2 bg-zinc-800 rounded-lg text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {portfolio.date}
            </span>
            <span className="px-4 py-2 bg-zinc-800 rounded-lg text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {portfolio.duration}
            </span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Tentang Proyek</h2>
              <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                {portfolio.longDescription}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{portfolio.images.length}</div>
                  <div className="text-sm text-zinc-500">Gambar</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                  <div className="text-sm text-zinc-500">Modul Utama</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">99.9%</div>
                  <div className="text-sm text-zinc-500">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">10K+</div>
                  <div className="text-sm text-zinc-500">User Aktif</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">Detail Proyek</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-zinc-500">Klien</span>
                    <p className="font-medium text-zinc-900 dark:text-white">{portfolio.client}</p>
                  </div>
                  <div>
                    <span className="text-sm text-zinc-500">Kategori</span>
                    <p className="font-medium text-zinc-900 dark:text-white">{portfolio.category}</p>
                  </div>
                  <div>
                    <span className="text-sm text-zinc-500">Tahun</span>
                    <p className="font-medium text-zinc-900 dark:text-white">2024</p>
                  </div>
                  <div>
                    <span className="text-sm text-zinc-500">Tech Stack</span>
                    <p className="font-medium text-zinc-900 dark:text-white">Next.js, TypeScript, PostgreSQL, Stripe</p>
                  </div>
                  <div>
                    <span className="text-sm text-zinc-500">Duration</span>
                    <p className="font-medium text-zinc-900 dark:text-white">{portfolio.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">Galeri Proyek</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolio.images.map((image, idx) => (
              <div key={idx} className="relative group cursor-pointer" onClick={() => setActiveImage(idx)}>
                <img
                  src={image}
                  alt={`Portfolio ${idx + 1}`}
                  className="w-full aspect-square object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-zinc-900 font-bold">{idx + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Lightbox */}
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setActiveImage(-1)}>
            {activeImage >= 0 && (
              <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setActiveImage(-1)}
                  className="absolute -top-10 right-0 text-white text-2xl hover:text-zinc-300"
                >
                  ✕
                </button>
                <img src={portfolio.images[activeImage]} alt="Large view" className="w-full rounded-lg shadow-2xl" />
                <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                  <span className="bg-black/50 px-4 py-2 rounded-full text-sm">
                    Gambar {activeImage + 1} dari {portfolio.images.length}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Hasil yang Dicapai
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Dampak nyata dari transformasi digital yang telah kami implementasikan untuk klien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.results.map((result, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <p className="text-zinc-900 dark:text-white font-semibold text-lg">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Teknologi yang Digunakan</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "PostgreSQL",
              "Stripe",
              "Tailwind CSS",
              "Node.js",
              "Redis",
              "AWS",
              "Docker",
              "Jest",
              "Cypress",
            ].map((tech, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="text-yellow-400">★</div>
              ))}
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6">
            "Kerja sama yang luar biasa! Tim XNXNV sangat memahami kebutuhan bisnis kami dan hasilnya melebihi ekspektasi."
          </h3>
          <div>
            <div className="font-semibold text-zinc-900 dark:text-white">Budi Santoso</div>
            <div className="text-zinc-500">CEO, E-Commerce Pro</div>
          </div>
        </div>
      </section>
    </div>
  );
}
