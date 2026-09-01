"use client";

import { Award, Users, TrendingUp, Target, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Award, label: "Kualitas Terbaik", value: "Premium" },
  { icon: Users, label: "Klien Puas", value: "25+" },
  { icon: TrendingUp, label: "Pertumbuhan", value: "200%" },
  { icon: Target, label: "Proyek Selesai", value: "50+" },
];

const values = [
  {
    title: "Kualitas Unggulan",
    description: "Kami menjunjung tinggi kualitas dalam setiap proyek yang dikerjakan.",
  },
  {
    title: "Kepercayaan Klien",
    description: "Kepuasan klien adalah prioritas utama kami.",
  },
  {
    title: "Inovasi Teknologi",
    description: "Menggunakan teknologi terkini untuk solusi terbaik.",
  },
  {
    title: "Profesionalisme",
    description: "Tim yang berpengalaman dan siap memberikan hasil maksimal.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Hero */}
      <section className="bg-zinc-900 dark:bg-zinc-950 py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Tentang XNXNV
          </h1>
          <p className="text-lg text-zinc-300">
            Perusahaan teknologi digital yang berkomitmen memberikan solusi terbaik.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                tentang kami
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                XNXNV adalah perusahaan teknologi digital yang berfokus pada penyediaan
                solusi teknologi berkualitas tinggi untuk bisnis modern. Dengan tim profesional
                dan berpengalaman, kami membantu organisasi mencapai tujuan digital mereka.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Kami hadir untuk memberikan layanan yang tidak hanya memenuhi, tetapi melampaui
                ekspektasi klien kami. Dari pengembangan web hingga transformasi digital,
                kami membawa profesionalisme dan kreativitas dalam setiap proyek.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                  Hubungi Kami
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden shadow-2xl">
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-zinc-900 dark:bg-zinc-50 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-white dark:text-zinc-900" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-3 w-32 bg-zinc-300 dark:bg-zinc-700 rounded" />
                    <div className="h-2 w-24 bg-zinc-200 dark:bg-zinc-800 rounded" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-full bg-zinc-300 dark:bg-zinc-700 rounded" />
                  <div className="h-3 w-5/6 bg-zinc-300 dark:bg-zinc-700 rounded" />
                  <div className="h-3 w-4/6 bg-zinc-300 dark:bg-zinc-700 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-zinc-50 dark:bg-zinc-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="h-12 w-12 mx-auto mb-4 rounded-xl bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                </div>
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-zinc-900 dark:text-zinc-50 mb-16">
            Nilai-nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
              >
                <div className="h-10 w-10 rounded-lg bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-5 w-5 text-zinc-900 dark:text-zinc-50" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
                  {value.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
