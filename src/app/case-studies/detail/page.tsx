"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Award,
  Search,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Shield,
  Zap,
  Clock,
  Star,
  TrendingUp,
  Building2,
} from "lucide-react";

interface Hasil {
  nilai: string;
  label: string;
}

interface Studi {
  id: string;
  judul: string;
  klien: string;
  industri: string;
  ringkasan: string;
  durasi: string;
  skala: string;
  hasil: Hasil[];
  poin: string[];
  unggulan?: boolean;
}

interface Faq {
  q: string;
  a: string;
}

const STUDIS: Studi[] = [
  {
    id: "1",
    judul: "Transaksi 300% Lebih Cepat untuk Bank Digital",
    klien: "Bank Digital Nusantara",
    industri: "Fintech",
    ringkasan: "Modernisasi backend event-driven dan microservices untuk lonjakan transaksi harian.",
    durasi: "6 bulan",
    skala: "12 jt transaksi/hari",
    hasil: [
      { nilai: "+300%", label: "Throughput" },
      { nilai: "99,99%", label: "Uptime" },
      { nilai: "-62%", label: "Biaya infra" },
    ],
    poin: ["Event-driven Kafka", "Microservices Go", "Zero-downtime migrasi", "Audit keamanan penuh"],
    unggulan: true,
  },
  {
    id: "2",
    judul: "Rekam Medis Terpadu & Antrean Otomatis",
    klien: "RS Medika Utama",
    industri: "Healthcare",
    ringkasan: "Rekam medis elektronik terenkripsi dengan antrean otomatis dan integrasi BPJS.",
    durasi: "5 bulan",
    skala: "8.000 pasien/hari",
    hasil: [
      { nilai: "-45%", label: "Waktu tunggu" },
      { nilai: "100%", label: "Data terenkripsi" },
      { nilai: "+92%", label: "Kepuasan pasien" },
    ],
    poin: ["RME terenkripsi AES-256", "Antrean otomatis", "Integrasi BPJS", "Dashboard dokter real-time"],
  },
  {
    id: "3",
    judul: "Flash Sale 50.000 TPS Tanpa Downtime",
    klien: "TokoPedia Raya",
    industri: "E-Commerce",
    ringkasan: "Caching multi-tier dan auto-scaling cluster untuk belanja nasional.",
    durasi: "3 bulan",
    skala: "50 rb TPS puncak",
    hasil: [
      { nilai: "50K", label: "TPS puncak" },
      { nilai: "0", label: "Downtime" },
      { nilai: "<120ms", label: "Latensi p95" },
    ],
    poin: ["Redis multi-tier", "Auto-scaling K8s", "Queue pembayaran", "Load test 2x lipat"],
  },
  {
    id: "4",
    judul: "Armada 1.200+ Unit Terpantau Real-Time",
    klien: "Logistik Cepat Bersama",
    industri: "Logistics",
    ringkasan: "IoT gateway dan dynamic routing berbasis lalu lintas real-time.",
    durasi: "4 bulan",
    skala: "1.200+ armada",
    hasil: [
      { nilai: "-28%", label: "Biaya BBM" },
      { nilai: "+35%", label: "Tepat waktu" },
      { nilai: "24/7", label: "Tracking live" },
    ],
    poin: ["IoT gateway GPS", "Dynamic routing", "Geofence alert", "Analitik pengemudi"],
  },
  {
    id: "5",
    judul: "Work-from-Anywhere Zero-Trust 14 Negara",
    klien: "CloudSuite Global",
    industri: "SaaS",
    ringkasan: "Keamanan zero-trust dan edge routing untuk pengguna korporat global.",
    durasi: "7 bulan",
    skala: "9.500 karyawan",
    hasil: [
      { nilai: "14", label: "Negara" },
      { nilai: "0", label: "Insiden bobol" },
      { nilai: "-40%", label: "Tiket IT" },
    ],
    poin: ["Zero-trust access", "Edge routing", "SSO + MFA", "DLP endpoint"],
  },
  {
    id: "6",
    judul: "Credit Scoring AI 3 Menit untuk UMKM",
    klien: "Dana Cerdas Nusantara",
    industri: "Fintech",
    ringkasan: "Model machine learning untuk profiling risiko peminjam UMKM.",
    durasi: "5 bulan",
    skala: "400 rb pengajuan",
    hasil: [
      { nilai: "<3 mnt", label: "Keputusan" },
      { nilai: "-31%", label: "NPL" },
      { nilai: "+2,4x", label: "Approval sehat" },
    ],
    poin: ["Model scoring ML", "Verifikasi e-KYC", "Pipeline data real-time", "Explainable AI"],
  },
  {
    id: "7",
    judul: "PPDB Online 200 Ribu Pendaftar Tanpa Antre",
    klien: "Dinas Pendidikan Kota",
    industri: "Pemerintahan",
    ringkasan: "Portal PPDB transparan dengan verifikasi berkas otomatis dan kuota real-time.",
    durasi: "3 bulan",
    skala: "200 rb pendaftar",
    hasil: [
      { nilai: "200K", label: "Pendaftar" },
      { nilai: "0", label: "Server down" },
      { nilai: "+88%", label: "Kepuasan ortu" },
    ],
    poin: ["Verifikasi OCR", "Kuota real-time", "Notifikasi WA", "Audit transparan"],
  },
  {
    id: "8",
    judul: "Smart Factory: Downtime Mesin Turun 52%",
    klien: "Manufaktur Maju Jaya",
    industri: "Manufaktur",
    ringkasan: "Predictive maintenance berbasis sensor IoT dan dashboard OEE.",
    durasi: "6 bulan",
    skala: "340 mesin",
    hasil: [
      { nilai: "-52%", label: "Downtime" },
      { nilai: "+19%", label: "OEE" },
      { nilai: "ROI 8 bln", label: "Payback" },
    ],
    poin: ["Sensor vibrasi IoT", "Prediksi failure", "Dashboard OEE", "Integrasi ERP"],
  },
];

const FAQS: Faq[] = [
  {
    q: "Bagaimana cara membaca detail setiap studi kasus?",
    a: "Gunakan kolom pencarian atau filter industri untuk menemukan studi yang relevan, lalu klik tombol Baca Detail untuk melihat ringkasan, hasil, dan poin implementasi.",
  },
  {
    q: "Apakah data klien ditampilkan apa adanya?",
    a: "Nama klien pada halaman ini adalah contoh dummy untuk keperluan desain. Angka hasil menggambarkan pola umum proyek, bukan klaim audit.",
  },
  {
    q: "Bisakah saya meminta studi kasus untuk industri saya?",
    a: "Ya. Hubungi tim kami melalui halaman kontak dan sebutkan industri serta skala sistem Anda agar kami siapkan referensi yang paling mirip.",
  },
  {
    q: "Apakah ada tautan ke arsip studi kasus?",
    a: "Ya, gunakan tombol Lihat Arsip di bawah untuk kembali ke daftar utama atau halaman filter studi kasus.",
  },
];

const INDUSTRIES = ["Semua", "Fintech", "Healthcare", "E-Commerce", "Logistics", "SaaS", "Pemerintahan", "Manufaktur"];

export default function CaseStudyDetailPage() {
  const [query, setQuery] = useState("");
  const [industri, setIndustri] = useState("Semua");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filtered = useMemo(
    () =>
      STUDIS.filter((s) => {
        const cocokIndustri = industri === "Semua" || s.industri === industri;
        const q = query.toLowerCase();
        const cocokQuery =
          q === "" ||
          s.judul.toLowerCase().includes(q) ||
          s.klien.toLowerCase().includes(q) ||
          s.ringkasan.toLowerCase().includes(q);
        return cocokIndustri && cocokQuery;
      }),
    [query, industri]
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4 border border-blue-500/20">
            <Award className="w-4 h-4" />
            <span>Detail Studi Kasus</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Cerita Sukses Transformasi Digital
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Bedah singkat 8 proyek lintas industri: tantangan, solusi teknis, dan hasil terukur yang bisa ditiru.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" /> Data Terenkripsi
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" /> 8 Studi Lintas Industri
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" /> Baca 4&ndash;7 Menit
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" /> Rating Klien 4,9/5
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search + filter */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-8">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari judul, klien, atau kata kunci..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-200"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind}
                onClick={() => setIndustri(ind)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  industri === ind
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-slate-900 border-slate-800 text-slate-300 hover:border-blue-500/50"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-slate-500 mb-6">
          Menampilkan {filtered.length} dari {STUDIS.length} studi kasus
          {industri !== "Semua" ? ` untuk industri ${industri}` : ""}
          {query ? ` dengan kata kunci "${query}"` : ""}.
        </p>

        {/* Daftar studi */}
        {filtered.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center mb-16">
            <Building2 className="w-10 h-10 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-300 font-medium mb-1">Tidak ada studi kasus yang cocok</p>
            <p className="text-slate-500 text-sm">Coba ubah kata kunci atau filter industri.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {filtered.map((s) => (
              <div
                key={s.id}
                className={`relative bg-slate-900 rounded-xl border p-6 flex flex-col transition-all ${
                  s.unggulan
                    ? "border-blue-500 shadow-lg shadow-blue-500/20"
                    : "border-slate-800 hover:border-blue-500/50"
                }`}
              >
                {s.unggulan && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                    UNGGULAN
                  </div>
                )}
                <span className="inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-3">
                  <Building2 className="w-3.5 h-3.5" /> {s.industri}
                </span>
                <h3 className="text-lg font-semibold mb-1 leading-snug">{s.judul}</h3>
                <p className="text-slate-500 text-xs mb-2">
                  {s.klien} &bull; {s.durasi} &bull; {s.skala}
                </p>
                <p className="text-slate-400 text-sm mb-4">{s.ringkasan}</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {s.hasil.map((h, i) => (
                    <div key={i} className="bg-slate-800/60 rounded-lg px-2 py-2 text-center">
                      <p className="text-sm font-bold text-white flex items-center justify-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                        {h.nilai}
                      </p>
                      <p className="text-[11px] text-slate-500">{h.label}</p>
                    </div>
                  ))}
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {s.poin.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/case-studies/filter"
                  className="w-full py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200"
                >
                  <span>Baca Detail</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* FAQ */}
        <h2 className="text-2xl font-bold mb-6">Pertanyaan Umum</h2>
        <div className="max-w-3xl space-y-3 mb-12">
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

        <div className="flex flex-wrap gap-3">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-semibold transition-colors"
          >
            Kembali ke Daftar
          </Link>
          <Link
            href="/case-studies/filter"
            className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            Lihat Arsip Filter <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
