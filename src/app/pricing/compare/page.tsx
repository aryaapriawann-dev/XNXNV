"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Zap,
  TrendingUp,
  Shield,
  Award,
  Star,
  Calendar,
} from "lucide-react";

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

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "1",
    name: "Starter",
    description: "Untuk individu dan startup yang baru mulai",
    price: 299000,
    period: "monthly",
    rating: 4.5,
    category: "starter",
    features: [
      "1 Project",
      "5GB Storage",
      "Basic Analytics",
      "Email Support",
      "Mobile Responsive",
    ],
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
    features: [
      "5 Projects",
      "20GB Storage",
      "Advanced Analytics",
      "Priority Support",
      "API Access",
      "Custom Domain",
    ],
  },
  {
    id: "3",
    name: "Enterprise",
    description: "Untuk perusahaan besar dengan kebutuhan khusus",
    price: 2999000,
    period: "monthly",
    rating: 4.9,
    category: "enterprise",
    features: [
      "Unlimited Projects",
      "100GB Storage",
      "Real-time Analytics",
      "24/7 Dedicated Support",
      "API Access",
      "Custom Domain",
      "SSO Integration",
      "SLA Guarantee",
    ],
  },
  {
    id: "4",
    name: "Custom",
    description: "Solusi tailor-made sesuai kebutuhan Anda",
    price: 0,
    period: "custom",
    rating: 5,
    category: "custom",
    features: [
      "Full Customization",
      "Unlimited Storage",
      "Custom Analytics",
      "Dedicated Account Manager",
      "API Access",
      "White-label Solution",
      "Training & Onboarding",
    ],
  },
  {
    id: "5",
    name: "Freelancer",
    description: "Untuk freelancer dan konsultan independen",
    price: 499000,
    period: "monthly",
    rating: 4.3,
    category: "starter",
    features: [
      "3 Projects",
      "10GB Storage",
      "Basic Analytics",
      "Priority Support",
      "Mobile Responsive",
      "Team Collaboration",
    ],
  },
  {
    id: "6",
    name: "Agency",
    description: "Untuk agency yang melayani banyak klien",
    price: 1999000,
    period: "monthly",
    rating: 4.7,
    category: "business",
    features: [
      "Unlimited Projects",
      "50GB Storage",
      "Advanced Analytics",
      "Priority Support",
      "Client Portal",
      "White-label Solution",
      "Multi-user Access",
    ],
  },
  {
    id: "7",
    name: "Non-profit",
    description: "Diskon khusus untuk organisasi nirlaba",
    price: 149000,
    period: "monthly",
    rating: 4.6,
    category: "custom",
    features: [
      "2 Projects",
      "10GB Storage",
      "Basic Analytics",
      "Email Support",
      "Mobile Responsive",
      "Educational Resources",
    ],
  },
];

// Union of all feature strings for comparison table
const ALL_FEATURES = [
  "Projects",
  "Storage",
  "Analytics",
  "Support",
  "Mobile Responsive",
  "API Access",
  "Custom Domain",
  "SSO Integration",
  "SLA Guarantee",
  "Team Collaboration",
  "Client Portal",
  "White-label Solution",
  "Multi-user Access",
  "Full Customization",
  "Training & Onboarding",
  "Dedicated Account Manager",
  "Educational Resources",
] as const;

function getFeatureValue(plan: PricingPlan, feature: string): string | boolean {
  // Match feature to plan.features and return detail or false
  const match = plan.features.find((f) =>
    f.toLowerCase().includes(feature.toLowerCase())
  );
  if (!match) return false;

  // For features with quantity prefix, return the detail text
  if (
    feature === "Projects" ||
    feature === "Storage" ||
    feature === "Analytics" ||
    feature === "Support"
  ) {
    return match;
  }
  return true;
}

const formatPrice = (price: number, period: string): string => {
  if (price === 0) return "Hubungi Kami";
  if (period === "monthly") return `Rp ${price.toLocaleString("id-ID")}`;
  if (period === "yearly") return `Rp ${price.toLocaleString("id-ID")}`;
  return "Hubungi Kami";
};

const CategoryIcon = ({
  category,
}: {
  category: PricingPlan["category"];
}) => {
  switch (category) {
    case "starter":
      return <Zap className="w-4 h-4" />;
    case "business":
      return <TrendingUp className="w-4 h-4" />;
    case "enterprise":
      return <Shield className="w-4 h-4" />;
    default:
      return <Award className="w-4 h-4" />;
  }
};

export default function PricingComparePage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const getPrice = (plan: PricingPlan): number => {
    if (plan.period === "custom") return 0;
    return billingPeriod === "yearly"
      ? Math.round(plan.price * 0.8)
      : plan.price;
  };

  const getPeriodLabel = (): string => {
    return billingPeriod === "monthly" ? "/bulan" : "/tahun";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Bandingkan Paket
          </h1>
          <p className="text-center text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            Lihat perbandingan fitur lengkap untuk memilih paket terbaik Anda
          </p>
          <div className="flex justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Pricing
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-slate-400" />
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
                <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                  Hemat 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {/* Header: Plan names + prices */}
            <thead>
              <tr>
                <th className="sticky left-0 z-20 bg-slate-950 text-left p-4 min-w-[200px] border-b border-slate-800">
                  <span className="text-slate-400 text-sm font-normal">
                    Fitur
                  </span>
                </th>
                {PRICING_PLANS.map((plan) => (
                  <th
                    key={plan.id}
                    className={`relative p-4 min-w-[160px] text-center border-b ${
                      plan.popular
                        ? "border-blue-500 bg-blue-500/5"
                        : "border-slate-800"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-b-lg">
                        POPULER
                      </div>
                    )}
                    <div className="flex flex-col items-center gap-2 pt-2">
                      <div
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                          plan.category === "starter"
                            ? "bg-purple-500/10 text-purple-400"
                            : plan.category === "business"
                              ? "bg-blue-500/10 text-blue-400"
                              : plan.category === "enterprise"
                                ? "bg-green-500/10 text-green-400"
                                : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        <CategoryIcon category={plan.category} />
                        <span className="capitalize">{plan.category}</span>
                      </div>
                      <span className="text-base font-semibold text-slate-100">
                        {plan.name}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-500 text-xs">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{plan.rating}</span>
                      </div>
                      <div className="mt-1">
                        <span className="text-xl font-bold text-white">
                          {formatPrice(getPrice(plan), plan.period)}
                        </span>
                        {plan.period !== "custom" && (
                          <span className="text-slate-500 text-xs block">
                            {getPeriodLabel()}
                          </span>
                        )}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Feature Rows */}
            <tbody>
              {ALL_FEATURES.map((feature, idx) => (
                <tr
                  key={feature}
                  className={
                    idx % 2 === 0 ? "bg-slate-950" : "bg-slate-900/30"
                  }
                >
                  <td className="sticky left-0 z-10 bg-inherit p-4 text-sm text-slate-300 border-b border-slate-800/50 font-medium">
                    {feature}
                  </td>
                  {PRICING_PLANS.map((plan) => {
                    const value = getFeatureValue(plan, feature);
                    return (
                      <td
                        key={plan.id}
                        className={`p-4 text-center text-sm border-b border-slate-800/50 ${
                          plan.popular ? "bg-blue-500/5" : ""
                        }`}
                      >
                        {value === false ? (
                          <XCircle className="w-4 h-4 text-slate-600 mx-auto" />
                        ) : value === true ? (
                          <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-slate-200 font-medium">
                            {value}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>

            {/* Footer: CTA buttons */}
            <tfoot>
              <tr>
                <td className="sticky left-0 z-10 bg-slate-950 p-4"></td>
                {PRICING_PLANS.map((plan) => (
                  <td
                    key={plan.id}
                    className={`p-4 text-center ${
                      plan.popular ? "bg-blue-500/5" : ""
                    }`}
                  >
                    <button
                      className={`w-full py-2.5 rounded-lg font-medium text-sm transition-all ${
                        plan.popular
                          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
                          : "bg-slate-800 hover:bg-slate-700 text-slate-200"
                      }`}
                    >
                      {plan.price === 0 ? "Hubungi Kami" : "Pilih Paket"}
                    </button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Butuh bantuan memilih paket yang tepat?
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Lihat Semua Paket
          </Link>
        </div>
      </div>
    </div>
  );
}
