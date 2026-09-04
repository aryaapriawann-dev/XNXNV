"use client";

import { useState } from "react";
import { Check, X, Star } from "lucide-react";

type PlanPeriod = "monthly" | "yearly";

interface Plan {
  id: string;
  name: string;
  price: { monthly: number; yearly: number };
  description: string;
  features: string[];
  highlight?: boolean;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: { monthly: 299000, yearly: 2990000 },
    description: "Ideal untuk usaha kecil dan startup yang baru memulai digital.",
    features: [
      "Website statis 5 halaman",
      "Desain responsif",
      "Contact form",
      "SEO basic optimization",
      " Hosting 1 tahun",
      "Dukungan technical 3 bulan",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: { monthly: 799000, yearly: 7990000 },
    description: "Paket lengkap untuk bisnis yang membutuhkan website profesional.",
    features: [
      "Website dinamis 10 halaman",
      "Desain custom & brand alignment",
      "CMS integration (WordPress)",
      "SEO full optimization",
      "Hosting & SSL 2 tahun",
      "Dukungan technical 1 tahun",
      "Social media integration",
      "Analytics & reporting",
      "Mobile app landing page",
      "Email marketing integration",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: { monthly: 1999000, yearly: 19990000 },
    description: "Solusi digital lengkap untuk perusahaan besar dan korporasi.",
    features: [
      "Web application custom development",
      "Full-featured CRM integration",
      "Multi-language support",
      "Advanced SEO & content strategy",
      "Cloud hosting & CDN 3 tahun",
      "24/7 dedicated support",
      "Team training & documentation",
      "Performance monitoring",
      "Security audit & hardening",
      "Third-party API integration",
      "Mobile native app development",
      "Digital marketing package",
    ],
    highlight: true,
  },
];

const comparison = [
  { feature: "Website Design", starter: true, professional: true, enterprise: true },
  { feature: "Responsive Design", starter: true, professional: true, enterprise: true },
  { feature: "Custom Features", starter: false, professional: true, enterprise: true },
  { feature: "CMS Integration", starter: false, professional: true, enterprise: true },
  { feature: "SEO Optimization", starter: "Basic", professional: "Full", enterprise: "Advanced" },
  { feature: "Hosting Duration", starter: "1 year", professional: "2 years", enterprise: "3 years" },
  { feature: "Technical Support", starter: "3 months", professional: "1 year", enterprise: "24/7" },
  { feature: "Social Media Integration", starter: false, professional: true, enterprise: true },
  { feature: "Mobile App Landing", starter: false, professional: true, enterprise: true },
  { feature: "Analytics & Reporting", starter: false, professional: true, enterprise: true },
  { feature: "Custom Development", starter: false, professional: false, enterprise: true },
  { feature: "Cloud Hosting", starter: false, professional: false, enterprise: true },
];

export default function Pricing() {
  const [period, setPeriod] = useState<PlanPeriod>("monthly");

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Harga Transparan</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Tidak ada biaya tersembunyi.
          </p>
        </div>
      </section>

      {/* Toggle */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg font-medium ${period === "monthly" ? "text-zinc-900 dark:text-white" : "text-zinc-500"}`}>
              Bulanan
            </span>
            <button
              onClick={() => setPeriod(period === "monthly" ? "yearly" : "monthly")}
              className="relative w-16 h-8 bg-zinc-200 dark:bg-zinc-700 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <div className={`w-6 h-6 bg-indigo-600 rounded-full shadow-md transform transition-transform ${period === "yearly" ? "translate-x-8" : "translate-x-0"}`} />
            </button>
            <span className={`text-lg font-medium ${period === "yearly" ? "text-zinc-900 dark:text-white" : "text-zinc-500"}`}>
              Tahunan
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Hemat 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl bg-white dark:bg-zinc-900 border ${
                  plan.popular
                    ? "border-indigo-600 shadow-2xl scale-105 z-10"
                    : plan.highlight
                    ? "border-purple-600 shadow-xl"
                    : "border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Paling Populer
                  </div>
                )}
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Premium
                  </div>
                )}

                <div className="p-8 flex-1">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-zinc-900 dark:text-white">
                      {period === "monthly" ? `Rp ${(plan.price.monthly / 1000).toFixed(0)}rb` : `Rp ${(plan.price.yearly / 1000000).toFixed(0)}jt`}
                    </span>
                    <span className="text-zinc-500 ml-2">/ {period === "monthly" ? "bulan" : "tahun"}</span>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-zinc-600 dark:text-zinc-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                        : plan.highlight
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white"
                    }`}
                  >
                    Pilih Paket
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Perbandingan Fitur
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Lihat perbedaan fitur antar paket untuk memilih yang paling tepat untuk bisnis Anda.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-zinc-100 dark:bg-zinc-800">
                  <th className="p-4 text-left font-semibold text-zinc-900 dark:text-white">Fitur</th>
                  <th className="p-4 text-center font-semibold text-zinc-900 dark:text-white">Starter</th>
                  <th className="p-4 text-center font-semibold text-indigo-600 dark:text-indigo-400">Professional</th>
                  <th className="p-4 text-center font-semibold text-purple-600 dark:text-purple-400">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {comparison.map((item, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 text-zinc-600 dark:text-zinc-300 font-medium">{item.feature}</td>
                    <td className="p-4 text-center text-zinc-600 dark:text-zinc-400">
                      {typeof item.starter === "boolean" ? (
                        item.starter ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-zinc-400 mx-auto" />
                      ) : (
                        <span className="text-sm">{item.starter}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                        {typeof item.professional === "boolean" ? (
                          item.professional ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-zinc-400 mx-auto" />
                        ) : (
                          <span className="text-sm">{item.professional}</span>
                        )}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        {typeof item.enterprise === "boolean" ? (
                          item.enterprise ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-zinc-400 mx-auto" />
                        ) : (
                          <span className="text-sm">{item.enterprise}</span>
                        )}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="space-y-4">
            {[
              { question: "Berapa lama waktu pengerjaan?", answer: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Starter: 7-14 hari, Professional: 2-4 minggu, Enterprise: 1-3 bulan." },
              { question: "Apakah ada biaya tersembunyi?", answer: "Tidak. Kami menerapkan transparansi penuh. Harga yang kami sampaikan adalah harga final, termasuk semua fitur yang tercantum." },
              { question: "Bagaimana dengan maintenance?", answer: "Kami menyediakan paket maintenance dengan harga terjangkau untuk memastikan website Anda selalu up-to-date dan aman." },
              { question: "Bisa customized sesuai kebutuhan?", answer: "Tentu! Kami menerima project custom sesuai kebutuhan bisnis Anda. Hubungi kami untuk konsultasi free." },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">{faq.question}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-indigo-100 text-xl mb-10">
            Hubungi kami hari ini untuk konsultasi gratis dan dapatkan penawaran terbaik untuk bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
            >
              Hubungi Kami Sekarang
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Pelajari Layanan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
