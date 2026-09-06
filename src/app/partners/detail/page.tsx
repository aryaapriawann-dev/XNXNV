"use client";

import { useState } from "react";
import { Handshake, CheckCircle, ChevronDown, ArrowRight, Shield, Zap, Globe, Search, MapPin, Briefcase } from "lucide-react";

interface Mitra {
  id: string;
  nama: string;
  deskripsi: string;
  level: string;
  lokasi: string;
  bergabung: string;
  proyek: number;
  benefit: string[];
  populer?: boolean;
}

interface Faq {
  q: string;
  a: string;
}

const MITRAS: Mitra[] = [
  {
    id: "1",
    nama: "Tech Solutions Inc",
    deskripsi: "Penyedia solusi teknologi global fokus transformasi digital.",
    level: "Platinum",
    lokasi: "Jakarta",
    bergabung: "2022",
    proyek: 45,
    benefit: ["Akses API prioritas", "Dedicated manager", "Revenue share 30%", "Co-marketing global"],
    populer: true,
  },
  {
    id: "2",
    nama: "Digital Future",
    deskripsi: "Agensi digital spesialis web dan aplikasi mobile.",
    level: "Gold",
    lokasi: "Bandung",
    bergabung: "2023",
    proyek: 32,
    benefit: ["Akses API standar", "Support prioritas", "Revenue share 20%"],
  },
  {
    id: "3",
    nama: "Cloud Systems",
    deskripsi: "Provider infrastruktur cloud AWS, Azure, dan GCP.",
    level: "Gold",
    lokasi: "Surabaya",
    bergabung: "2023",
    proyek: 28,
    benefit: ["Kredit cloud bersama", "Support prioritas", "Revenue share 20%"],
  },
  {
    id: "4",
    nama: "Data Analytics Pro",
    deskripsi: "Spesialis analitik data dan business intelligence.",
    level: "Silver",
    lokasi: "Yogyakarta",
    bergabung: "2024",
    proyek: 18,
    benefit: ["Akses dashboard analitik", "Revenue share 15%"],
  },
  {
    id: "5",
    nama: "Mobile First",
    deskripsi: "Pengembang aplikasi mobile dengan 50+ aplikasi rilis.",
    level: "Silver",
    lokasi: "Denpasar",
    bergabung: "2024",
    proyek: 22,
    benefit: ["SDK mobile premium", "Revenue share 15%"],
  },
  {
    id: "6",
    nama: "Security First",
    deskripsi: "Konsultan keamanan siber bersertifikasi internasional.",
    level: "Gold",
    lokasi: "Jakarta",
    bergabung: "2023",
    proyek: 15,
    benefit: ["Audit keamanan bersama", "Support prioritas", "Revenue share 20%"],
  },
  {
    id: "7",
    nama: "Nusantara Hosting",
    deskripsi: "Provider hosting lokal dengan data center Tier III.",
    level: "Silver",
    lokasi: "Semarang",
    bergabung: "2024",
    proyek: 12,
    benefit: ["Server colocated", "Revenue share 10%"],
  },
  {
    id: "8",
    nama: "Edu Tech Asia",
    deskripsi: "Platform edukasi teknologi dengan 200 ribu peserta.",
    level: "Platinum",
    lokasi: "Makassar",
    bergabung: "2022",
    proyek: 38,
    benefit: ["Program co-training", "Dedicated manager", "Revenue share 30%", "Co-marketing global"],
  },
];

const FAQS: Faq[] = [
  {
    q: "Bagaimana cara menjadi mitra XVPNX?",
    a: "Isi formulir di halaman Gabung Mitra, tim kami akan menghubungi Anda dalam 3 hari kerja untuk proses verifikasi dan penandatanganan kerja sama.",
  },
  {
    q: "Apa perbedaan level Platinum, Gold, dan Silver?",
    a: "Platinum mendapat dedicated manager dan revenue share 30%, Gold mendapat support prioritas dan revenue share 20%, Silver mendapat akses standar dan revenue share 10-15%.",
  },
  {
    q: "Apakah ada biaya untuk bergabung?",
    a: "Tidak. Pendaftaran mitra gratis. Biaya hanya berlaku untuk layanan premium opsional seperti co-marketing khusus.",
  },
  {
    q: "Bagaimana sistem bagi hasil dihitung?",
    a: "Bagi hasil dihitung dari pendapatan bersih proyek kolaborasi setiap bulan dan dibayarkan maksimal tanggal 15 bulan berikutnya.",
  },
  {
    q: "Bisakah naik level kemitraan?",
    a: "Ya. Evaluasi level dilakukan tiap 6 bulan berdasarkan jumlah proyek, kepuasan klien, dan kontribusi co-marketing.",
  },
];

export default function PartnerDetailPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("Semua");

  const levels = ["Semua", ...Array.from(new Set(MITRAS.map((m) => m.level)))];

  const filtered = MITRAS.filter((m) => {
    const cocokSearch =
      m.nama.toLowerCase().includes(search.toLowerCase()) ||
      m.deskripsi.toLowerCase().includes(search.toLowerCase()) ||
      m.lokasi.toLowerCase().includes(search.toLowerCase());
    const cocokLevel = level === "Semua" || m.level === level;
    return cocokSearch && cocokLevel;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4 border border-blue-500/20">
            <Handshake className="w-4 h-4" />
            <span>Detail Mitra</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Mitra Terpercaya XVPNX
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Kenali lebih dekat para mitra strategis kami: profil lengkap, level kemitraan, lokasi, dan benefit kolaborasi.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" /> Verifikasi Ketat
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" /> {MITRAS.length} Mitra Aktif
            </span>
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" /> Jangkauan Nasional
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nama mitra, deskripsi, atau lokasi..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {levels.map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  level === l
                    ? "bg-blue-600 text-white"
                    : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-blue-500/50"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-slate-500 mb-6">
          Menampilkan {filtered.length} dari {MITRAS.length} mitra
        </p>

        {/* Daftar Mitra */}
        <h2 className="text-2xl font-bold mb-6">Profil Mitra</h2>
        {filtered.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-10 text-center text-slate-400 mb-16">
            Tidak ada mitra yang cocok dengan pencarian Anda.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {filtered.map((mitra) => (
              <div
                key={mitra.id}
                className={`relative bg-slate-900 rounded-xl border p-6 flex flex-col transition-all ${
                  mitra.populer
                    ? "border-blue-500 shadow-lg shadow-blue-500/20 scale-105 z-10"
                    : "border-slate-800 hover:border-blue-500/50"
                }`}
              >
                {mitra.populer && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                    UNGGULAN
                  </div>
                )}
                <span className="inline-flex w-fit items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
                  <Handshake className="w-3.5 h-3.5" /> {mitra.level}
                </span>
                <h3 className="text-xl font-semibold mb-1">{mitra.nama}</h3>
                <p className="text-slate-400 text-sm mb-3">{mitra.deskripsi}</p>
                <div className="flex flex-col gap-1.5 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {mitra.lokasi} &bull; Bergabung {mitra.bergabung}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" /> {mitra.proyek} proyek kolaborasi
                  </span>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {mitra.benefit.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{b}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200">
                  <span>Lihat Profil</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

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
