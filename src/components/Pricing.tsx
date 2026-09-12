"use client";

/**
 * Pricing component displaying subscription plans with features and pricing tiers.
 * Supports highlighted popular plan and multiple tiers.
 */
import { useState } from "react";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Basic",
    price: "29",
    period: "/bulan",
    description: "Untuk individu dan proyek kecil",
    features: ["1 user", "5GB storage", "Email support", "Basic analytics"],
    cta: "Mulai Basic",
  },
  {
    name: "Pro",
    price: "79",
    period: "/bulan",
    description: "Untuk bisnis yang sedang tumbuh",
    features: ["5 users", "50GB storage", "Priority support", "Advanced analytics", "Custom domain", "API access"],
    highlighted: true,
    cta: "Coba Pro",
  },
  {
    name: "Enterprise",
    price: "199",
    period: "/bulan",
    description: "Untuk organisasi besar",
    features: ["Unlimited users", "500GB storage", "24/7 phone support", "Custom integrations", "Dedicated account manager", "SLA guarantee"],
    cta: "Hubungi Sales",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Harga & Paket
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket termasuk fitur dasar.
          </p>
          <div className="inline-flex items-center gap-3">
            <span className={`text-sm font-medium ${!annual ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-500"}`}>
              Bulanan
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-11 h-6 rounded-full transition-colors ${
                annual ? "bg-indigo-600" : "bg-zinc-300 dark:bg-zinc-700"
              }`}
              aria-label="Toggle annual pricing"
            >
              <span
                className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  annual ? "translate-x-5" : ""
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-500"}`}>
              Tahunan <span className="text-green-600 dark:text-green-400 text-xs ml-1">Hemat 20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-indigo-600 text-white shadow-2xl scale-105 ring-2 ring-indigo-400"
                  : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                  Paling Populer
                </div>
              )}
              <h3 className={`text-xl font-bold ${plan.highlighted ? "text-white" : "text-zinc-900 dark:text-zinc-50"}`}>
                {plan.name}
              </h3>
              <p className={`mt-2 text-sm ${plan.highlighted ? "text-indigo-100" : "text-zinc-600 dark:text-zinc-400"}`}>
                {plan.description}
              </p>
              <div className={`mt-6 flex items-baseline gap-1 ${plan.highlighted ? "text-white" : ""}`}>
                <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-zinc-900 dark:text-zinc-50"}`}>
                  Rp{plan.price}
                  {annual ? "0.000" : ""}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-indigo-200" : "text-zinc-500"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-start gap-2 text-sm ${plan.highlighted ? "text-indigo-100" : "text-zinc-600 dark:text-zinc-400"}`}>
                    <svg className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-indigo-300" : "text-indigo-600 dark:text-indigo-400"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 rounded-xl font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
