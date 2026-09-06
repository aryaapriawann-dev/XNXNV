"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  Calculator,
  CheckCircle,
  Database,
  FolderOpen,
  Search,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

interface BasePlan {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "starter" | "business" | "enterprise" | "custom";
  popular?: boolean;
}

interface Addon {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "fitur" | "keamanan" | "dukungan" | "integrasi";
  popular?: boolean;
}

const BASE_PLANS: BasePlan[] = [
  { id: "starter", name: "Starter", description: "Individu & startup baru", price: 299000, category: "starter" },
  { id: "nonprofit", name: "Non-profit", description: "Diskon organisasi nirlaba", price: 149000, category: "custom" },
  { id: "freelancer", name: "Freelancer", description: "Freelancer & konsultan", price: 499000, category: "starter" },
  { id: "business", name: "Business", description: "Bisnis berkembang", price: 999000, category: "business", popular: true },
  { id: "agency", name: "Agency", description: "Agency multi-klien", price: 1999000, category: "business" },
  { id: "enterprise", name: "Enterprise", description: "Perusahaan besar", price: 2999000, category: "enterprise" },
  { id: "custom", name: "Custom", description: "Tailor-made, hubungi kami", price: 0, category: "custom" },
];

const ADDONS: Addon[] = [
  { id: "a1", name: "Domain Kustom", description: "Domain sendiri + SSL otomatis", price: 50000, category: "fitur" },
  { id: "a2", name: "Analitik Real-time", description: "Dashboard real-time + ekspor CSV", price: 200000, category: "fitur", popular: true },
  { id: "a3", name: "API Access Lanjutan", description: "Rate limit 10x + webhook", price: 150000, category: "integrasi" },
  { id: "a4", name: "Backup Otomatis Harian", description: "Retensi 30 hari + restore 1-klik", price: 99000, category: "keamanan" },
  { id: "a5", name: "SSO Integration", description: "Google, Microsoft, SAML", price: 250000, category: "keamanan" },
  { id: "a6", name: "SLA Prioritas 99,9%", description: "Respons < 1 jam, 24/7", price: 300000, category: "dukungan", popular: true },
  { id: "a7", name: "White-label Solution", description: "Logo & brand sendiri", price: 175000, category: "fitur" },
  { id: "a8", name: "Training & Onboarding", description: "2 sesi live + panduan tim", price: 500000, category: "dukungan" },
];

const CATEGORIES = [
  { id: "semua", label: "Semua" },
  { id: "fitur", label: "Fitur" },
  { id: "keamanan", label: "Keamanan" },
  { id: "dukungan", label: "Dukungan" },
  { id: "integrasi", label: "Integrasi" },
] as const;

const PRICE_PER_USER = 25000;
const PRICE_PER_PROJECT = 50000;
const PRICE_PER_GB = 10000;
const FREE_USERS = 5;
const FREE_PROJECTS = 3;

const formatRp = (n: number): string =>
  n === 0 ? "Rp 0" : `Rp ${Math.round(n).toLocaleString("id-ID")}`;

const PlanIcon = ({ category }: { category: BasePlan["category"] }) => {
  switch (category) {
    case "starter":
      return <Zap className="h-4 w-4" />;
    case "business":
      return <TrendingUp className="h-4 w-4" />;
    case "enterprise":
      return <Shield className="h-4 w-4" />;
    default:
      return <Award className="h-4 w-4" />;
  }
};

export default function PricingCalculatorPage() {
  const [basePlanId, setBasePlanId] = useState("business");
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [users, setUsers] = useState(10);
  const [projects, setProjects] = useState(5);
  const [storageGb, setStorageGb] = useState(50);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("semua");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["a2"]);

  const basePlan = BASE_PLANS.find((p) => p.id === basePlanId) ?? BASE_PLANS[3];
  const discount = billingPeriod === "yearly" ? 0.8 : 1;

  const filteredAddons = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ADDONS.filter((a) => {
      const matchCat = category === "semua" || a.category === category;
      const matchQ =
        q === "" ||
        a.name.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const calc = useMemo(() => {
    const base = basePlan.price * discount;
    const extraUsers = Math.max(0, users - FREE_USERS) * PRICE_PER_USER * discount;
    const extraProjects =
      Math.max(0, projects - FREE_PROJECTS) * PRICE_PER_PROJECT * discount;
    const extraStorage = storageGb * PRICE_PER_GB * discount;
    const addonsList = ADDONS.filter((a) => selectedAddons.includes(a.id));
    const addonsTotal = addonsList.reduce((s, a) => s + a.price * discount, 0);
    const monthly = base + extraUsers + extraProjects + extraStorage + addonsTotal;
    const yearlyTotal = billingPeriod === "yearly" ? monthly * 12 : monthly;
    return { base, extraUsers, extraProjects, extraStorage, addonsTotal, addonsList, monthly, yearlyTotal };
  }, [basePlan, discount, users, projects, storageGb, selectedAddons, billingPeriod]);

  const reset = () => {
    setBasePlanId("business");
    setBillingPeriod("monthly");
    setUsers(10);
    setProjects(5);
    setStorageGb(50);
    setSelectedAddons(["a2"]);
    setQuery("");
    setCategory("semua");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
            <Calculator className="h-4 w-4" />
            Kalkulator Harga Interaktif
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
            Hitung Kebutuhan Anda
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-center text-lg text-slate-400">
            Pilih paket dasar, atur pengguna, proyek, penyimpanan, dan tambah
            add-on. Estimasi dihitung otomatis.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Pricing
            </Link>
            <Link
              href="/pricing/compare"
              className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-slate-200"
            >
              Bandingkan Paket
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Kiri: kontrol */}
          <div className="space-y-8">
            {/* Periode */}
            <section className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-white">
                1. Periode Tagihan
              </h2>
              <div className="inline-flex rounded-lg bg-slate-900 p-1">
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`rounded-md px-6 py-2 text-sm font-medium transition-all ${
                    billingPeriod === "monthly"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Bulanan
                </button>
                <button
                  onClick={() => setBillingPeriod("yearly")}
                  className={`rounded-md px-6 py-2 text-sm font-medium transition-all ${
                    billingPeriod === "yearly"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Tahunan
                  <span className="ml-2 rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400">
                    Hemat 20%
                  </span>
                </button>
              </div>
            </section>

            {/* Paket dasar */}
            <section className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h2 className="mb-1 text-lg font-semibold text-white">
                2. Paket Dasar
              </h2>
              <p className="mb-4 text-sm text-slate-400">
                {BASE_PLANS.length} paket tersedia. Paket Custom gratis,
                hubungi tim kami.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {BASE_PLANS.map((plan) => {
                  const active = plan.id === basePlanId;
                  return (
                    <button
                      key={plan.id}
                      onClick={() => setBasePlanId(plan.id)}
                      className={`relative rounded-lg border p-4 text-left transition-all ${
                        active
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-slate-800 bg-slate-950 hover:border-slate-700"
                      }`}
                    >
                      {plan.popular && (
                        <span className="absolute -top-2 right-3 flex items-center gap-1 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white">
                          <Star className="h-3 w-3 fill-current" /> POPULER
                        </span>
                      )}
                      <div className="mb-1 flex items-center gap-2 text-xs text-slate-400">
                        <PlanIcon category={plan.category} />
                        <span className="capitalize">{plan.category}</span>
                      </div>
                      <div className="font-semibold text-white">{plan.name}</div>
                      <div className="text-xs text-slate-500">
                        {plan.description}
                      </div>
                      <div className="mt-2 text-lg font-bold text-white">
                        {plan.price === 0
                          ? "Hubungi Kami"
                          : formatRp(plan.price)}
                        {plan.price !== 0 && (
                          <span className="text-xs font-normal text-slate-500">
                            /bulan
                          </span>
                        )}
                      </div>
                      {active && (
                        <CheckCircle className="absolute bottom-3 right-3 h-5 w-5 text-blue-500" />
                      )}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Kebutuhan */}
            <section className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-white">
                3. Kebutuhan Tim
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-slate-300">
                      <Users className="h-4 w-4 text-blue-400" />
                      Pengguna ({users})
                    </span>
                    <span className="text-xs text-slate-500">
                      {FREE_USERS} gratis, selebihnya {formatRp(PRICE_PER_USER)}
                      /user
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={100}
                    value={users}
                    onChange={(e) => setUsers(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-slate-300">
                      <FolderOpen className="h-4 w-4 text-blue-400" />
                      Proyek ({projects})
                    </span>
                    <span className="text-xs text-slate-500">
                      {FREE_PROJECTS} gratis, selebihnya{" "}
                      {formatRp(PRICE_PER_PROJECT)}/proyek
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={projects}
                    onChange={(e) => setProjects(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-slate-300">
                      <Database className="h-4 w-4 text-blue-400" />
                      Penyimpanan Tambahan ({storageGb} GB)
                    </span>
                    <span className="text-xs text-slate-500">
                      {formatRp(PRICE_PER_GB)}/GB
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={500}
                    step={10}
                    value={storageGb}
                    onChange={(e) => setStorageGb(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
              </div>
            </section>

            {/* Add-on */}
            <section className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h2 className="mb-1 text-lg font-semibold text-white">
                4. Add-on ({selectedAddons.length} dipilih)
              </h2>
              <p className="mb-4 text-sm text-slate-400">
                {ADDONS.length} add-on tersedia. Cari atau filter berdasarkan
                kategori.
              </p>
              <div className="mb-4 flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Cari add-on, mis. SSO, backup..."
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-600 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setCategory(c.id)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                        category === c.id
                          ? "bg-blue-600 text-white"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
              {filteredAddons.length === 0 ? (
                <p className="rounded-lg border border-dashed border-slate-800 p-6 text-center text-sm text-slate-500">
                  Tidak ada add-on yang cocok untuk &ldquo;{query}&rdquo;.
                </p>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2">
                  {filteredAddons.map((addon) => {
                    const active = selectedAddons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`relative rounded-lg border p-4 text-left transition-all ${
                          active
                            ? "border-green-500 bg-green-500/10"
                            : "border-slate-800 bg-slate-950 hover:border-slate-700"
                        }`}
                      >
                        {addon.popular && (
                          <span className="absolute -top-2 right-3 rounded-full bg-green-600 px-2 py-0.5 text-[10px] font-bold text-white">
                            POPULER
                          </span>
                        )}
                        <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                          {addon.category}
                        </div>
                        <div className="font-semibold text-white">
                          {addon.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          {addon.description}
                        </div>
                        <div className="mt-2 text-sm font-bold text-white">
                          {formatRp(addon.price)}
                          <span className="text-xs font-normal text-slate-500">
                            /bulan
                          </span>
                        </div>
                        <div
                          className={`absolute bottom-3 right-3 flex h-6 w-6 items-center justify-center rounded-full border text-xs ${
                            active
                              ? "border-green-500 bg-green-500 text-white"
                              : "border-slate-700 text-transparent"
                          }`}
                        >
                          ✓
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </section>
          </div>

          {/* Kanan: hasil */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-xl border border-blue-500/30 bg-slate-900 p-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                <Calculator className="h-5 w-5 text-blue-400" />
                Estimasi Biaya
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Paket {basePlan.name}</span>
                  <span className="font-medium text-white">
                    {formatRp(calc.base)}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Pengguna tambahan ({Math.max(0, users - FREE_USERS)})</span>
                  <span className="font-medium text-white">
                    {formatRp(calc.extraUsers)}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Proyek tambahan ({Math.max(0, projects - FREE_PROJECTS)})</span>
                  <span className="font-medium text-white">
                    {formatRp(calc.extraProjects)}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Storage ({storageGb} GB)</span>
                  <span className="font-medium text-white">
                    {formatRp(calc.extraStorage)}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Add-on ({calc.addonsList.length})</span>
                  <span className="font-medium text-white">
                    {formatRp(calc.addonsTotal)}
                  </span>
                </div>
                {calc.addonsList.length > 0 && (
                  <ul className="rounded-lg bg-slate-950 p-3 text-xs text-slate-400">
                    {calc.addonsList.map((a) => (
                      <li key={a.id} className="flex justify-between py-0.5">
                        <span>{a.name}</span>
                        <span>{formatRp(a.price * discount)}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {billingPeriod === "yearly" && (
                  <p className="rounded-lg bg-green-500/10 p-2 text-xs text-green-400">
                    Diskon tahunan 20% sudah diterapkan.
                  </p>
                )}
              </div>
              <div className="mt-4 border-t border-slate-800 pt-4">
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  Total per bulan
                </div>
                <div className="text-3xl font-bold text-white">
                  {formatRp(calc.monthly)}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  {billingPeriod === "yearly"
                    ? `Ditagih tahunan: ${formatRp(calc.yearlyTotal)}/tahun`
                    : "Ditagih bulanan, tanpa kontrak"}
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <button className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700">
                  Pilih Konfigurasi Ini
                </button>
                <button
                  onClick={reset}
                  className="w-full rounded-lg bg-slate-800 py-2.5 text-sm font-medium text-slate-200 transition-all hover:bg-slate-700"
                >
                  Atur Ulang
                </button>
              </div>
              <p className="mt-3 text-center text-[11px] text-slate-600">
                Estimasi belum termasuk PPN. Hubungi tim untuk penawaran resmi.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
