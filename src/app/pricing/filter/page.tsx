"use client";

import { useState } from "react";
import { CheckCircle, X, ChevronRight, Star, Zap, Shield, Clock } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: "month" | "year";
  features: string[];
  description: string;
  popular: boolean;
  rating: number;
  users: number;
  color: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "1",
    name: "Starter",
    price: 299000,
    period: "month",
    description: "Perfect for individuals and small projects starting out.",
    features: ["5 Projects", "10GB Storage", "Basic Analytics", "24/7 Support", "1 Team Member"],
    popular: false,
    rating: 4.5,
    users: 1250,
    color: "blue"
  },
  {
    id: "2",
    name: "Professional",
    price: 799000,
    period: "month",
    description: "For growing teams that need more power and flexibility.",
    features: ["Unlimited Projects", "50GB Storage", "Advanced Analytics", "Priority Support", "5 Team Members", "Custom Domain", "API Access"],
    popular: true,
    rating: 4.8,
    users: 3200,
    color: "indigo"
  },
  {
    id: "3",
    name: "Enterprise",
    price: 1999000,
    period: "month",
    description: "Maximum power and control for large organizations.",
    features: ["Unlimited Everything", "1TB Storage", "Real-time Analytics", "Dedicated Support", "Unlimited Team Members", "Custom Integrations", "SSO Authentication", "API Priority Access"],
    popular: false,
    rating: 4.9,
    users: 480,
    color: "purple"
  },
  {
    id: "4",
    name: "Basic",
    price: 149000,
    period: "month",
    description: "Entry-level plan for startups and freelancers.",
    features: ["3 Projects", "5GB Storage", "Basic Analytics", "Email Support", "1 Team Member"],
    popular: false,
    rating: 4.2,
    users: 890,
    color: "green"
  },
  {
    id: "5",
    name: "Premium",
    price: 1299000,
    period: "month",
    description: "Advanced features for scaling businesses.",
    features: ["Unlimited Projects", "200GB Storage", "Real-time Analytics", "24/7 Priority Support", "20 Team Members", "Custom Domain", "API Access", "Webhooks"],
    popular: true,
    rating: 4.7,
    users: 1560,
    color: "orange"
  },
  {
    id: "6",
    name: "Ultimate",
    price: 4999000,
    period: "month",
    description: "Complete solution for enterprise-level needs.",
    features: ["Unlimited Everything", "5TB Storage", "Predictive Analytics", "Dedicated Account Manager", "Unlimited Team Members", "Custom Development", "On-premise Option", "SLA Guarantee"],
    popular: false,
    rating: 5,
    users: 120,
    color: "red"
  },
  {
    id: "7",
    name: "Student",
    price: 0,
    period: "month",
    description: "Free plan for verified students and educators.",
    features: ["2 Projects", "2GB Storage", "Basic Analytics", "Community Support", "1 Team Member"],
    popular: true,
    rating: 4.3,
    users: 5600,
    color: "teal"
  }
];

export default function PricingFilterPage() {
  const [activePeriod, setActivePeriod] = useState<"month" | "year">("month");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [minRating, setMinRating] = useState<number>(0);
  const [onlyPopular, setOnlyPopular] = useState<boolean>(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(amount);
  };

  const filteredPlans = pricingPlans.filter((plan) => {
    const searchMatch = plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        plan.description.toLowerCase().includes(searchQuery.toLowerCase());
    const ratingMatch = plan.rating >= minRating;
    const popularMatch = !onlyPopular || plan.popular;
    return searchMatch && ratingMatch && popularMatch;
  });

  const getStars = (rating: number) => {
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

  const getPeriodPrice = (price: number, period: "month" | "year") => {
    if (period === "year") {
      return Math.round(price * 12 * 0.8); // 20% discount
    }
    return price;
  };

  const getPeriodLabel = (period: "month" | "year") => {
    return period === "month" ? "per bulan" : "per tahun";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2114&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Pilih Paket yang Tepat
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Transparan, fleksibel, dan cocok untuk semua kebutuhan bisnis Anda.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{pricingPlans.length}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Paket Tersedia</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {pricingPlans.reduce((acc, p) => acc + p.users, 0).toLocaleString()}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Pengguna Aktif</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {(pricingPlans.reduce((acc, p) => acc + p.rating, 0) / pricingPlans.length).toFixed(1)}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Rata-rata Rating</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {pricingPlans.filter(p => p.popular).length}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Paket Populer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Period Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white dark:bg-zinc-900 p-1 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <button
                onClick={() => setActivePeriod("month")}
                className={`px-8 py-3 rounded-lg text-sm font-medium transition-all ${
                  activePeriod === "month"
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                }`}
              >
                Bulanan
              </button>
              <button
                onClick={() => setActivePeriod("year")}
                className={`px-8 py-3 rounded-lg text-sm font-medium transition-all ${
                  activePeriod === "year"
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                }`}
              >
                Tahunan <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">-20%</span>
              </button>
            </div>
          </div>

          {/* Search & Rating Filter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="text-zinc-400">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Cari paket..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-900 dark:text-white placeholder-zinc-400"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="text-zinc-400">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>
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
                    id="popular"
                    checked={onlyPopular}
                    onChange={(e) => setOnlyPopular(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="popular" className="text-sm text-zinc-700 dark:text-zinc-300">
                    Hanya Populer
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {onlyPopular ? "Paket Populer" : "Semua Paket"}
              {minRating > 0 && ` (Min ${minRating}⭐)`}
            </h2>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm">
              Menampilkan {filteredPlans.length} dari {pricingPlans.length} paket
            </div>
          </div>

          {filteredPlans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlans.map((plan) => {
                const currentPrice = getPeriodPrice(plan.price, activePeriod);
                const discount = activePeriod === "year" ? 20 : 0;

                return (
                  <div
                    key={plan.id}
                    className={`relative bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border ${
                      plan.popular
                        ? "border-indigo-600 shadow-lg shadow-indigo-600/20"
                        : "border-zinc-100 dark:border-zinc-800"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
                        POPULER
                      </div>
                    )}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{plan.name}</h3>
                        <div className="flex items-center gap-1 text-amber-400">
                          {getStars(plan.rating)}
                          <span className="text-sm text-zinc-500 dark:text-zinc-400 ml-1">
                            {plan.rating}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                        {plan.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-zinc-900 dark:text-white">
                          {formatCurrency(currentPrice).replace(/\sIDR$/, "")}
                        </span>
                        <span className="text-zinc-500 dark:text-zinc-400">
                          {getPeriodLabel(activePeriod)}
                        </span>
                        {discount > 0 && (
                          <span className="text-green-600 text-sm font-bold ml-2">
                            Hemat {discount}%
                          </span>
                        )}
                      </div>
                      {activePeriod === "month" && plan.price > 0 && (
                        <div className="text-xs text-zinc-400 mt-1">
                          {formatCurrency(Math.round(plan.price * 12 * 0.8))} / tahun
                        </div>
                      )}
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.slice(0, 6).map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-zinc-700 dark:text-zinc-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                      <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                        plan.popular
                          ? "bg-indigo-600 text-white hover:bg-indigo-700"
                          : "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200"
                      }`}>
                        Pilih Paket
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Tidak ada paket ditemukan
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Coba ubah filter rating atau kata kunci pencarian
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-12">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Apakah bisa mengubah paket kapan saja?",
                a: "Ya, Anda bisa upgrade atau downgrade paket kapan saja. Perubahan akan berlaku di siklus pembayaran berikutnya."
              },
              {
                q: "Bagaimana dengan garansi uang kembali?",
                a: "Kami memberikan garansi uang kembali 30 hari untuk semua paket berbayar jika Anda tidak puas."
              },
              {
                q: "Apakah ada biaya tersembunyi?",
                a: "Tidak, harga yang tercantum sudah termasuk semua fitur. Tidak ada biaya tambahan atau biaya tersembunyi."
              },
              {
                q: "Bisa bayar per tahun dengan diskon?",
                a: "Ya, bayar per tahun Anda mendapatkan diskon 20% dari harga bulanan."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {item.q}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Perjalanan Digital Anda?
          </h2>
          <p className="text-indigo-100 text-xl mb-10">
            Bergabunglah dengan ribuan pelanggan yang sudah mempercayai kami untuk
            mengembangkan bisnis mereka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors">
              Mulai Sekarang
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition-colors">
              Hubungi Tim Penjualan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
