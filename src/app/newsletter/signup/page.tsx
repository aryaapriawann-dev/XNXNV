"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  BookOpen,
  Tag,
  Newspaper,
} from "lucide-react";

interface EdisiLampau {
  id: string;
  judul: string;
  topik: string;
  tanggal: string;
  ringkasan: string;
}

interface SignupForm {
  nama: string;
  email: string;
  topik: string;
}

const TOPIK_OPTIONS = [
  "Keamanan & Privasi",
  "Tips VPN",
  "Pembaruan Produk",
  "Tutorial Teknis",
  "Berita Industri",
];

const initialFormState: SignupForm = { nama: "", email: "", topik: "" };

const EDISI_LAMPAU: EdisiLampau[] = [
  {
    id: "1",
    judul: "5 Alasan VPN Wajib Dimiliki di 2026",
    topik: "Keamanan & Privasi",
    tanggal: "2026-08-01",
    ringkasan:
      "Kami bahas ancaman digital terbaru dan mengapa enkripsi end-to-end menjadi kebutuhan wajib di era kerja remote.",
  },
  {
    id: "2",
    judul: "Update Protokol WireGuard di XVPNX v3.2",
    topik: "Pembaruan Produk",
    tanggal: "2026-07-15",
    ringkasan:
      "WireGuard kini aktif secara default. Pelajari cara kerja dan benchmark performa dibanding OpenVPN.",
  },
  {
    id: "3",
    judul: "Cara Optimal Split Tunneling untuk Developer",
    topik: "Tutorial Teknis",
    tanggal: "2026-06-20",
    ringkasan:
      "Panduan langkah demi langkah mengonfigurasi split tunneling agar traffic lokal & asing dipisah dengan benar.",
  },
  {
    id: "4",
    judul: "Regulasi Internet Global: Apa yang Perlu Anda Tahu",
    topik: "Berita Industri",
    tanggal: "2026-05-10",
    ringkasan:
      "Rangkuman kebijakan internet terbaru dari UE, AS, dan Asia Tenggara yang berdampak bagi pengguna VPN.",
  },
  {
    id: "5",
    judul: "Tips Memilih Server VPN Paling Cepat",
    topik: "Tips VPN",
    tanggal: "2026-04-05",
    ringkasan:
      "Kami uji 30+ server di 15 negara. Temukan formula pemilihan server tercepat sesuai lokasi Anda.",
  },
  {
    id: "6",
    judul: "Kill Switch: Pelindung Saat Koneksi VPN Putus",
    topik: "Keamanan & Privasi",
    tanggal: "2026-03-18",
    ringkasan:
      "Fitur kill switch bekerja di balik layar. Edisi ini menjelaskan mekanisme dan cara mengaktifkannya.",
  },
  {
    id: "7",
    judul: "XVPNX untuk Tim Perusahaan: Panduan Admin",
    topik: "Tutorial Teknis",
    tanggal: "2026-02-28",
    ringkasan:
      "Cara mengelola akun multi-pengguna, monitor koneksi tim, dan menetapkan kebijakan akses dari panel admin.",
  },
];

export default function NewsletterSignupPage() {
  const [formData, setFormData] = useState<SignupForm>(initialFormState);
  const [errors, setErrors] = useState<{
    nama?: string;
    email?: string;
    topik?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: { nama?: string; email?: string; topik?: string } = {};
    if (!formData.nama.trim()) newErrors.nama = "Nama wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!formData.topik) newErrors.topik = "Pilih topik langganan";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData(initialFormState);
    setTimeout(() => setSubmitStatus("idle"), 6000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Langganan Newsletter
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Dapatkan tips keamanan, pembaruan produk, dan panduan teknis langsung
            di kotak masuk Anda setiap bulan.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Form Card */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
            <Mail className="w-6 h-6 text-blue-400" />
            Daftar Sekarang
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Gratis. Berhenti berlangganan kapan saja.
          </p>

          {submitStatus === "success" ? (
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Pendaftaran Berhasil!
              </h3>
              <p className="text-slate-400 mb-6">
                Selamat bergabung! Edisi pertama akan segera hadir di inbox Anda.
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Daftar Akun Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nama */}
              <div>
                <label
                  htmlFor="nama"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Nama lengkap Anda"
                    className={`w-full pl-12 pr-4 py-3 bg-slate-950 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.nama
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-800 focus:ring-blue-500"
                    }`}
                  />
                </div>
                {errors.nama && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.nama}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Alamat Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@contoh.com"
                    className={`w-full pl-12 pr-4 py-3 bg-slate-950 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-800 focus:ring-blue-500"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Topik */}
              <div>
                <label
                  htmlFor="topik"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Topik yang Diminati
                </label>
                <div className="relative">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                  <select
                    id="topik"
                    name="topik"
                    value={formData.topik}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 bg-slate-950 border rounded-lg focus:outline-none focus:ring-2 transition-all appearance-none ${
                      errors.topik
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-800 focus:ring-blue-500"
                    }`}
                  >
                    <option value="" disabled>
                      -- Pilih topik --
                    </option>
                    {TOPIK_OPTIONS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.topik && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.topik}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Mendaftar...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Daftar Sekarang
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Edisi Lampau */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Newspaper className="w-6 h-6 text-blue-400" />
            Edisi Lampau ({EDISI_LAMPAU.length})
          </h2>
          <span className="text-sm text-slate-400">Arsip Newsletter</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDISI_LAMPAU.map((edisi) => (
            <div
              key={edisi.id}
              className="bg-slate-900 rounded-xl border border-slate-800 p-6 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-start gap-3 mb-3">
                <BookOpen className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-100 leading-snug">
                    {edisi.judul}
                  </h3>
                  <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {edisi.topik}
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {edisi.ringkasan}
              </p>
              <p className="text-xs text-slate-500">
                {new Date(edisi.tanggal).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
