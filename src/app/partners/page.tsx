"use client";

import { useState } from "react";
import { Shield, Check, Zap, Globe } from "lucide-react";
import Link from "next/link";

const partners = [
  {
    id: "1",
    name: "Tech Solutions Inc",
    logo: "https://images.unsplash.com/photo-1541872423-11416b5577f9?q=80&w=2070&auto=format&fit=crop",
    description: "Global technology solutions provider dengan fokus pada digital transformation.",
    level: "Platinum",
    joined: "2022",
    projects: 45,
  },
  {
    id: "2",
    name: "Digital Future",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Leading digital agency specializing in web development dan mobile applications.",
    level: "Gold",
    joined: "2023",
    projects: 32,
  },
  {
    id: "3",
    name: "Cloud Systems",
    logo: "https://images.unsplash.com/photo-1552664730-d38d7f51817e?q=80&w=2070&auto=format&fit=crop",
    description: "Cloud infrastructure provider dengan keahlian di AWS, Azure, dan GCP.",
    level: "Gold",
    joined: "2023",
    projects: 28,
  },
  {
    id: "4",
    name: "Data Analytics Pro",
    logo: "https://images.unsplash.com/photo-1559389049-98737db47935?q=80&w=2070&auto=format&fit=crop",
    description: "Specialist dalam data analytics dan business intelligence solutions.",
    level: "Silver",
    joined: "2024",
    projects: 18,
  },
  {
    id: "5",
    name: "Mobile First",
    logo: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070&auto=format&fit=crop",
    description: "Mobile app development company dengan portofolio 50+ aplikasi di App Store.",
    level: "Silver",
    joined: "2024",
    projects: 22,
  },
  {
    id: "6",
    name: "Security First",
    logo: "https://images.unsplash.com/photo-1536613944-754221316a38?q=80&w=2070&auto=format&fit=crop",
    description: "Cyber security consulting firm dengan sertifikasi internasional.",
    level: "Gold",
    joined: "2023",
    projects: 15,
  },
];

const benefits = [
  {
    title: "Kemitraan Strategis",
    description: "Kolaborasi jangka panjang untuk mencapai tujuan bisnis bersama.",
    icon: Shield,
  },
  {
    title: "Teknologi Terkini",
    description: "Akses ke teknologi dan tools terbaru di industri digital.",
    icon: Zap,
  },
  {
    title: "Global Reach",
    description: "Jaringan internasional untuk memperluas jangkauan bisnis Anda.",
    icon: Globe,
  },
  {
    title: "Dukungan 24/7",
    description: "Dukungan teknis dan konsultasi tersedia kapan saja.",
    icon: Check,
  },
];

export default function Partners() {
  const levels = ["Semua", ...Array.from(new Set(partners.map((p) => p.level)))];

  const [selectedLevel, setSelectedLevel] = useState("Semua");

  const filteredPartners =
    selectedLevel === "Semua"
      ? partners
      : partners.filter((p) => p.level === selectedLevel);

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Mitra Strategis Kami
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Kolaborasi dengan perusahaan-perusahaan terkemuka untuk menghadirkan solusi digital
            terbaik.
          </p>
        </div>
      </section>

      {/* Level Filter */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedLevel === level
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Menampilkan {filteredPartners.length} mitra dari kategori "{selectedLevel}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-32 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center p-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-24 object-contain mix-blend-multiply dark:mix-blend-screen transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        partner.level === "Platinum"
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                          : partner.level === "Gold"
                          ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                          : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      }`}
                    >
                      {partner.level}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                    {partner.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500 border-t border-zinc-200 dark:border-zinc-800 pt-4">
                    <span>Sejak {partner.joined}</span>
                    <span>{partner.projects} Proyek</span>
                  </div>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:text-indigo-700 dark:hover:text-indigo-300"
                  >
                    Lihat Profil
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mengapa Menjadi Mitra Kami?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Gabung dengan jaringan mitra kami dan dapatkan berbagai keuntungan eksklusif untuk
              pertumbuhan bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Tertarik menjadi mitra kami?</h2>
          <p className="text-lg text-indigo-100 mb-8">
            Hubungi kami untuk informasi lebih lanjut tentang program kemitraan kami.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-600 rounded-full font-medium hover:bg-zinc-100 transition-colors"
          >
            Hubungi Tim Kami
          </Link>
        </div>
      </section>
    </div>
  );
}
