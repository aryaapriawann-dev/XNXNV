"use client";

import { useState } from "react";
import { Star, Calendar, CheckCircle, AlertCircle, Filter, Search, ChevronLeft, ChevronRight, Zap, Shield, Award, TrendingUp } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  period: "monthly" | "yearly" | "custom";
  rating: number;
  features: string[];
  category: "starter" | "business" | "enterprise" | "custom";
  popular?: boolean;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "starter", label: "Starter" },
  { id: "business", label: "Business" },
  { id: "enterprise", label: "Enterprise" },
  { id: "custom", label: "Custom" },
] as const;

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "1",
    name: "Starter",
    description: "Untuk individu dan startup yang baru mulai",
    price: 299000,
    period: "monthly",
    rating: 4.5,
    category: "starter",
    features: ["1 Project", "5GB Storage", "Basic Analytics", "Email Support", "Mobile Responsive"],
  },
  {
    id: "2",
    name: "Business",
    description: "Untuk bisnis yang sedang berkembang",
    price: 999000,
    period: "monthly",
    rating: 4.8,
    category: "business",
    popular: true,
    features: ["5 Projects", "20GB Storage", "Advanced Analytics", "Priority Support", "API Access", "Custom Domain"],
  },
  {
    id: "3",
    name: "Enterprise",
    description: "Untuk perusahaan besar dengan kebutuhan khusus",
    price: 2999000,
    period: "monthly",
    rating: 4.9,
    category: "enterprise",
    features: ["Unlimited Projects", "100GB Storage", "Real-time Analytics", "24/7 Dedicated Support", "API Access", "Custom Domain", "SSO Integration", "SLA Guarantee"],
  },
  {
    id: "4",
    name: "Custom",
    description: "Solusi tailor-made sesuai kebutuhan Anda",
    price: 0,
    period: "custom",
    rating: 5,
    category: "custom",
    features: ["Full Customization", "Unlimited Storage", "Custom Analytics", "Dedicated Account Manager", "API Access", "White-label Solution", "Training & Onboarding"],
  },
  {
    id: "5",
    name: "Freelancer",
    description: "Untuk freelancer dan konsultan independen",
    price: 499000,
    period: "monthly",
    rating: 4.3,
    category: "starter",
    features: ["3 Projects", "10GB Storage", "Basic Analytics", "Priority Support", "Mobile Responsive", "Team Collaboration"],
  },
  {
    id: "6",
    name: "Agency",
    description: "Untuk agency yang melayani banyak klien",
    price: 1999000,
    period: "monthly",
    rating: 4.7,
    category: "business",
    features: ["Unlimited Projects", "50GB Storage", "Advanced Analytics", "Priority Support", "Client Portal", "White-label Solution", "Multi-user Access"],
  },
  {
    id: "7",
    name: "Non-profit",
    description: "Diskon khusus untuk organisasi nirlaba",
    price: 149000,
    period: "monthly",
    rating: 4.6,
    category: "custom",
    features: ["2 Projects", "10GB Storage", "Basic Analytics", "Email Support", "Mobile Responsive", "Educational Resources"],
  },
];

const formatPrice = (price: number, period: string): string => {
  if (price === 0) return "Hubungi Kami";
  if (period === "monthly") return `Rp ${price.toLocaleString("id-ID")}/bulan`;
  if (period === "yearly") return `Rp ${price.toLocaleString("id-ID")}/tahun`;
  return "Hubungi Kami";
};

export default function PricingFilterPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [currentPage, setCurrentPage] = useState(1);
  const plansPerPage = 6;

  const filteredPlans = PRICING_PLANS.filter((plan) => {
    const matchesCategory = selectedCategory === "all" || plan.category === selectedCategory;
    const matchesSearch = plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plan.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPlans.length / plansPerPage);
  const currentPlans = filteredPlans.slice(
    (currentPage - 1) * plansPerPage,
    currentPage * plansPerPage
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Pricing Plans
          </h1>
          <p className="text-center text-lg text-slate-400 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis atau project Anda
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-slate-900 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingPeriod === "yearly"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Tahunan
              <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Hemat 20%</span>
            </button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari paket (e.g. business, custom, enterprise)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span>Kategori: <strong className="text-slate-200">{selectedCategory === "all" ? "Semua" : CATEGORIES.find(c => c.id === selectedCategory)?.label}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Plans: <strong className="text-slate-200">{filteredPlans.length}</strong></span>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPlans.map((plan) => {
            const CategoryIcon = 
              plan.category === "starter" ? Zap :
              plan.category === "business" ? TrendingUp :
              plan.category === "enterprise" ? Shield :
              Award;

            const price = billingPeriod === "yearly" && plan.period !== "custom" 
              ? Math.round(plan.price * 0.8) 
              : plan.price;

            return (
              <div
                key={plan.id}
                className={`relative bg-slate-900 rounded-xl border overflow-hidden transition-all ${
                  plan.popular
                    ? "border-blue-500 shadow-lg shadow-blue-500/20 scale-105 z-10"
                    : "border-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-20">
                    RECOMMENDED
                  </div>
                )}

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                      plan.category === "starter" ? "bg-purple-500/10 text-purple-400" :
                      plan.category === "business" ? "bg-blue-500/10 text-blue-400" :
                      plan.category === "enterprise" ? "bg-green-500/10 text-green-400" :
                      "bg-yellow-500/10 text-yellow-400"
                    }`}>
                      <CategoryIcon className="w-3 h-3" />
                      <span className="capitalize">{plan.category}</span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-medium">{plan.rating}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white">{formatPrice(price, plan.period)}</div>
                    {plan.period !== "custom" && (
                      <div className="text-slate-500 text-sm">
                        {billingPeriod === "monthly" ? "Dibayar bulanan" : "Dibayar tahunan (diskon 20%)"}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action */}
                  <button className={`w-full py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
                      : "bg-slate-800 hover:bg-slate-700 text-slate-200"
                  }`}>
                    {plan.price === 0 ? "Hubungi Kami" : "Pilih Paket"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {currentPlans.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-4">
              <Search className="w-8 h-8 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tidak ada paket ditemukan</h3>
            <p className="text-slate-400">Coba ubah filter atau kata kunci pencarian Anda</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
