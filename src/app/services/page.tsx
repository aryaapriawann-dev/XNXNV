"use client";

import { Code, Smartphone, BarChart3, Shield, Zap, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description: "Pengembangan web modern dengan Next.js, React, dan Tailwind CSS. Sitemap terstruktur, SEO-friendly, dan performa tinggi.",
    features: ["Responsive Design", "SEO Optimization", "CMS Integration", "Performance Tuning"],
    icon: Code,
    color: "bg-blue-500",
  },
  {
    title: "Mobile App Development",
    description: "Aplikasi mobile cross-platform dengan Flutter dan React Native. iOS & Android dalam satu kodebase.",
    features: ["Cross-Platform", "Native Performance", "Offline Support", "Push Notifications"],
    icon: Smartphone,
    color: "bg-purple-500",
  },
  {
    title: "Data Analytics",
    description: "Analisis data dan dashboard interaktif untuk pengambilan keputusan berbasis data real-time.",
    features: ["Real-time Dashboard", "Custom Reports", "Data Visualization", "Predictive Analytics"],
    icon: BarChart3,
    color: "bg-green-500",
  },
  {
    title: "Cyber Security",
    description: "Keamanan digital dengan implementasi best practice dan encryption untuk proteksi data Anda.",
    features: ["Penetration Testing", "Security Audit", "Data Encryption", "24/7 Monitoring"],
    icon: Shield,
    color: "bg-red-500",
  },
  {
    title: "Cloud Solutions",
    description: "Infrastruktur cloud scalable dengan AWS, Vercel, dan Supabase untuk pertumbuhan bisnis Anda.",
    features: ["Cloud Deployment", "Auto-scaling", "CDN Integration", "Disaster Recovery"],
    icon: Globe,
    color: "bg-indigo-500",
  },
  {
    title: "Business Automation",
    description: "Solusi otomasi bisnis dengan workflow dan API integration untuk efisiensi operasional.",
    features: ["Workflow Automation", "API Integration", "RPA Implementation", "System Integration"],
    icon: Zap,
    color: "bg-yellow-500",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Hero */}
      <section className="bg-zinc-900 dark:bg-zinc-950 py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Layanan Digital Lengkap
          </h1>
          <p className="text-lg text-zinc-300 mb-8">
            Solusi teknologi terintegrasi untuk mengakselerasi pertumbuhan bisnis Anda.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white text-zinc-900 font-semibold hover:bg-zinc-100 transition-colors"
            >
              Konsultasi Gratis
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:shadow-2xl hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300"
              >
                <div className={`${service.color} h-14 w-14 rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-zinc-400 shrink-0" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-6 text-zinc-900 dark:text-zinc-50 font-semibold hover:text-zinc-600 dark:hover:text-zinc-300"
                >
                  Pelajari Detail
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 dark:bg-zinc-950 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-lg text-zinc-300 mb-8">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi teknologi terbaik untuk bisnis Anda.
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
