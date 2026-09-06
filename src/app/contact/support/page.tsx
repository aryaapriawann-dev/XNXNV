"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Headset,
  Mail,
  Phone,
  MessageCircle,
  Send,
  BookOpen,
  Ticket,
  Users,
  Search,
  User,
  MessageSquare,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

interface Saluran {
  nama: string;
  deskripsi: string;
  kategori: string;
  kontak: string;
  link: string;
  jam: string;
  respons: string;
}

const saluranList: Saluran[] = [
  {
    nama: "Live Chat Aplikasi",
    deskripsi: "Chat langsung dengan tim support dari aplikasi XVPNX.",
    kategori: "Chat",
    kontak: "Buka aplikasi > Bantuan > Live Chat",
    link: "/contact",
    jam: "24/7",
    respons: "~2 menit",
  },
  {
    nama: "Email Support",
    deskripsi: "Kirim detail kendala beserta screenshot untuk investigasi.",
    kategori: "Email",
    kontak: "support@xvpnx.com",
    link: "mailto:support@xvpnx.com",
    jam: "24/7",
    respons: "~4 jam",
  },
  {
    nama: "Telepon Pusat Bantuan",
    deskripsi: "Hubungi agen support untuk kendala koneksi mendesak.",
    kategori: "Telepon",
    kontak: "+62 812 3456 7890",
    link: "tel:+6281234567890",
    jam: "Senin–Sabtu 08:00–21:00 WIB",
    respons: "~5 menit",
  },
  {
    nama: "WhatsApp Resmi",
    deskripsi: "Chat WhatsApp terverifikasi untuk panduan cepat.",
    kategori: "Chat",
    kontak: "+62 812 3456 7891",
    link: "https://wa.me/6281234567891",
    jam: "Senin–Sabtu 08:00–21:00 WIB",
    respons: "~10 menit",
  },
  {
    nama: "Pusat Bantuan Mandiri",
    deskripsi: "Artikel, panduan, dan video troubleshooting mandiri.",
    kategori: "Mandiri",
    kontak: "help.xvpnx.com",
    link: "/support/help",
    jam: "24/7",
    respons: "Instan",
  },
  {
    nama: "Sistem Tiket Prioritas",
    deskripsi: "Buat tiket untuk pelanggan paket Bisnis dan Enterprise.",
    kategori: "Tiket",
    kontak: "Tiket via dashboard akun",
    link: "/contact",
    jam: "24/7",
    respons: "~1 jam",
  },
  {
    nama: "Komunitas Pengguna",
    deskripsi: "Diskusi, tips, dan solusi dari sesama pengguna XVPNX.",
    kategori: "Komunitas",
    kontak: "komunitas.xvpnx.com",
    link: "/contact",
    jam: "24/7",
    respons: "Bervariasi",
  },
];

const kategoriList = ["Semua", "Chat", "Email", "Telepon", "Tiket", "Mandiri", "Komunitas"];

const infoDukungan = [
  {
    icon: <Headset className="h-5 w-5" />,
    label: "Rata-rata Respons",
    nilai: "< 10 menit (live chat)",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Jam Layanan",
    nilai: "24/7 untuk tiket & email",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    nilai: "support@xvpnx.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Telepon",
    nilai: "+62 812 3456 7890",
  },
];

interface SupportForm {
  name: string;
  email: string;
  kategori: string;
  prioritas: string;
  message: string;
}

const initialFormState: SupportForm = {
  name: "",
  email: "",
  kategori: "",
  prioritas: "Normal",
  message: "",
};

type SupportFormKey = keyof SupportForm;

const kategoriMasalah = [
  { value: "", label: "Pilih kategori masalah" },
  { value: "koneksi", label: "Koneksi / Server" },
  { value: "akun", label: "Akun & Langganan" },
  { value: "pembayaran", label: "Pembayaran / Tagihan" },
  { value: "aplikasi", label: "Aplikasi Error / Bug" },
  { value: "fitur", label: "Pertanyaan Fitur" },
  { value: "lainnya", label: "Lainnya" },
];

export default function ContactSupportPage() {
  const [query, setQuery] = useState("");
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [formData, setFormData] = useState<SupportForm>(initialFormState);
  const [errors, setErrors] = useState<Partial<SupportForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const filtered = saluranList.filter((s) => {
    const cocokKategori = kategoriAktif === "Semua" || s.kategori === kategoriAktif;
    const q = query.toLowerCase();
    const cocokQuery =
      !q ||
      s.nama.toLowerCase().includes(q) ||
      s.deskripsi.toLowerCase().includes(q) ||
      s.kontak.toLowerCase().includes(q);
    return cocokKategori && cocokQuery;
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as SupportFormKey]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<SupportForm> = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email tidak valid";
    }
    if (!formData.kategori) newErrors.kategori = "Pilih kategori masalah";
    if (!formData.message.trim()) {
      newErrors.message = "Deskripsi masalah wajib diisi";
    } else if (formData.message.length < 10) {
      newErrors.message = "Deskripsi minimal 10 karakter";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData(initialFormState);
    setTimeout(() => setSubmitStatus("idle"), 6000);
  };

  const errorClass = (field: SupportFormKey) =>
    errors[field]
      ? "border-red-500 focus:ring-red-500"
      : "border-zinc-300 dark:border-zinc-700 focus:ring-indigo-500";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-indigo-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Kontak
          </Link>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Hubungi Dukungan
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Tim support XVPNX siap membantu 24/7. Pilih saluran bantuan yang
              paling nyaman atau kirim formulir di bawah — kami balas secepatnya.
            </p>
          </div>
        </div>
      </section>

      {/* Info dukungan */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
            Informasi Layanan Dukungan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {infoDukungan.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800"
              >
                <div className="w-11 h-11 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="font-semibold text-zinc-900 dark:text-white text-sm">
                    {item.nilai}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saluran + search/filter */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              Pilih Saluran Bantuan
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
              {saluranList.length} saluran resmi — cari berdasarkan nama atau
              saring berdasarkan kategori layanan.
            </p>
          </div>

          {/* Search + filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari saluran bantuan..."
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {kategoriList.map((k) => (
                <button
                  key={k}
                  onClick={() => setKategoriAktif(k)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    kategoriAktif === k
                      ? "bg-indigo-600 text-white"
                      : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-600"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-zinc-500 dark:text-zinc-400 py-12">
              Tidak ada saluran yang cocok dengan pencarian Anda.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-xl hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-300"
                >
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 mb-4">
                    {s.kategori}
                  </span>
                  <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-2">
                    {s.nama}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                    {s.deskripsi}
                  </p>
                  <div className="space-y-2 text-sm mb-4">
                    <p className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                      <MessageCircle className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                      {s.kontak}
                    </p>
                    <p className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                      <Clock className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                      {s.jam} • Respons {s.respons}
                    </p>
                  </div>
                  <a
                    href={s.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                  >
                    {s.kategori === "Mandiri" ? (
                      <BookOpen className="h-4 w-4" />
                    ) : s.kategori === "Tiket" ? (
                      <Ticket className="h-4 w-4" />
                    ) : s.kategori === "Komunitas" ? (
                      <Users className="h-4 w-4" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    Hubungi via {s.nama}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              Kirim Permintaan Bantuan
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Jelaskan kendala Anda — tiket otomatis dibuat dan tim kami
              menghubungi via email.
            </p>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Permintaan Terkirim!
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Terima kasih telah menghubungi dukungan XVPNX. Nomor tiket
                  dikirim ke email Anda dan tim kami akan merespons sesuai
                  prioritas.
                </p>
                <button
                  onClick={() => {
                    setSubmitStatus("idle");
                    setFormData(initialFormState);
                  }}
                  className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Kirim Permintaan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                        <User className="h-5 w-5" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass("name")} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@email.com"
                        className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass("email")} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="kategori"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Kategori Masalah
                    </label>
                    <select
                      id="kategori"
                      name="kategori"
                      value={formData.kategori}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass("kategori")} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white`}
                    >
                      {kategoriMasalah.map((k) => (
                        <option key={k.value} value={k.value}>
                          {k.label}
                        </option>
                      ))}
                    </select>
                    {errors.kategori && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.kategori}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="prioritas"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Prioritas
                    </label>
                    <select
                      id="prioritas"
                      name="prioritas"
                      value={formData.prioritas}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-zinc-900 dark:text-white"
                    >
                      <option value="Rendah">Rendah</option>
                      <option value="Normal">Normal</option>
                      <option value="Tinggi">Tinggi</option>
                      <option value="Mendesak">Mendesak</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Deskripsi Masalah
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none text-zinc-400">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Jelaskan kendala: perangkat, paket, pesan error, langkah yang sudah dicoba..."
                      rows={5}
                      className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass("message")} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400 resize-none`}
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    isSubmitting
                      ? "bg-indigo-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/30"
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
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" /> Kirim Permintaan
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Butuh Jawaban Cepat?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Cek dulu pusat bantuan mandiri — banyak kendala umum sudah ada
            panduan langkah demi langkahnya.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
          >
            <ArrowLeft className="h-5 w-5" />
            Kembali ke Halaman Kontak
          </Link>
        </div>
      </section>
    </div>
  );
}
