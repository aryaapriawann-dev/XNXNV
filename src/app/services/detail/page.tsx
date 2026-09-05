"use client";

import { useState } from "react";
import { Server, CheckCircle, ChevronDown, ArrowRight, Shield, Zap, Clock, Star } from "lucide-react";

interface Paket {
  id: string;
  nama: string;
  deskripsi: string;
  harga: number;
  durasi: string;
  fitur: string[];
  populer?: boolean;
}

interface Faq {
  q: string;
  a: string;
}

const PAKETS: Paket[] = [
  {
    id: "1",
    nama: "Basic VPN",
    deskripsi: "Untuk penggunaan pribadi sehari-hari",
    harga: 25000,
    durasi: "/bulan",
    fitur: ["1 Perangkat", "10+ Server", "Kecepatan 50 Mbps", "Dukungan Email"],
  },
  {
    id: "2",
    nama: "Pro VPN",
    deskripsi: "Untuk profesional dan remote worker",
    harga: 59000,
    durasi: "/bulan",
    fitur: ["5 Perangkat", "50+ Server Global", "Kecepatan 200 Mbps", "Kill Switch", "Prioritas Support"],
    populer: true,
  },
  {
    id: "3",
    nama: "Bisnis VPN",
    deskripsi: "Untuk tim dan perusahaan",
    harga: 149000,
    durasi: "/bulan",
    fitur: ["25 Perangkat", "100+ Server Global", "Kecepatan Tanpa Batas", "Dedicated IP", "Support 24/7", "Audit Keamanan"],
  },
  {
    id: "4",
    nama: "Enterprise",
    deskripsi: "Solusi khusus skala besar",
    harga: 0,
    durasi: "",
    fitur: ["Perangkat Tanpa Batas", "Server Privat", "SLA 99,99%", "Account Manager", "Onboarding Khusus"],
  },
];

const FAQS: Faq[] = [
  {
    q: "Apakah layanan ini legal digunakan di Indonesia?",
    a: "Ya. Layanan kami mematuhi regulasi yang berlaku dan ditujukan untuk keamanan data, privasi, serta akses kerja jarak jauh yang sah.",
  },
  {
    q: "Berapa banyak perangkat yang bisa terhubung?",
    a: "Tergantung paket: Basic 1 perangkat, Pro 5 perangkat, Bisnis 25 perangkat, dan Enterprise tanpa batas.",
  },
  {
    q: "Apakah ada garansi uang kembali?",
    a: "Ya, garansi 30 hari uang kembali tanpa syarat untuk semua paket berbayar.",
  },
  {
    q: "Metode pembayaran apa saja yang didukung?",
    a: "Transfer bank, e-wallet (OVO, GoPay, DANA), kartu kredit, dan QRIS.",
  },
  {
    q: "Apakah kecepatan internet menurun saat memakai VPN?",
    a: "Penurunan minimal (<5%) berkat server berkecepatan tinggi dan protokol modern WireGuard.",
  },
];

const formatHarga = (harga: number): string => {
  if (harga === 0) return "Hubungi Kami";
  return `Rp ${harga.toLocaleString("id-ID")}`;
};

export default function ServiceDetailPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4 border border-blue-500/20">
            <Server className="w-4 h-4" />
            <span>Layanan Unggulan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            VPN Cepat & Aman
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Lindungi privasi online Anda dengan enkripsi kelas militer, server global berkecepatan tinggi, dan kebijakan tanpa log.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" /> Enkripsi AES-256
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" /> 100+ Server Global
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" /> Uptime 99,99%
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" /> Rating 4,9/5
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Daftar Paket */}
        <h2 className="text-2xl font-bold mb-6">Pilih Paket Layanan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PAKETS.map((paket) => (
            <div
              key={paket.id}
              className={`relative bg-slate-900 rounded-xl border p-6 flex flex-col transition-all ${
                paket.populer
                  ? "border-blue-500 shadow-lg shadow-blue-500/20 scale-105 z-10"
                  : "border-slate-800 hover:border-blue-500/50"
              }`}
            >
              {paket.populer && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                  POPULER
                </div>
              )}
              <h3 className="text-xl font-semibold mb-1">{paket.nama}</h3>
              <p className="text-slate-400 text-sm mb-4">{paket.deskripsi}</p>
              <div className="mb-6">
                <span className="text-2xl font-bold text-white">{formatHarga(paket.harga)}</span>
                <span className="text-slate-500 text-sm">{paket.harga > 0 ? paket.durasi : ""}</span>
              </div>
              <ul className="space-y-2.5 mb-6 flex-1">
                {paket.fitur.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  paket.populer
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-200"
                }`}
              >
                <span>{paket.harga === 0 ? "Hubungi Kami" : "Pilih Paket"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mb-6">Pertanyaan Umum</h2>
        <div className="max-w-3xl space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-800/50 transition-colors"
              >
                <span className="font-medium text-slate-100">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-4 text-sm text-slate-400 leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
