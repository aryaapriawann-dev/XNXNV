"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Tag,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface AskForm {
  name: string;
  email: string;
  kategori: string;
  pertanyaan: string;
}

type AskFormKey = keyof AskForm;

const initialFormState: AskForm = {
  name: "",
  email: "",
  kategori: "",
  pertanyaan: "",
};

const CATEGORIES = [
  { value: "", label: "Pilih kategori pertanyaan" },
  { value: "akun", label: "Akun & Langganan" },
  { value: "koneksi", label: "Koneksi & Performa" },
  { value: "pembayaran", label: "Pembayaran & Tagihan" },
  { value: "keamanan", label: "Keamanan & Privasi" },
  { value: "lainnya", label: "Lainnya" },
];

const FAQ_LIST = [
  {
    question: "Berapa banyak perangkat yang bisa terhubung sekaligus?",
    answer:
      "Paket standar XVPNX mendukung hingga 5 perangkat bersamaan. Paket Pro mendukung hingga 10 perangkat tanpa batas.",
  },
  {
    question: "Apakah XVPNX menyimpan log aktivitas saya?",
    answer:
      "Tidak. XVPNX menerapkan kebijakan no-log ketat — kami tidak mencatat, menyimpan, atau membagikan aktivitas internet Anda kepada siapa pun.",
  },
  {
    question: "Bagaimana cara membatalkan langganan?",
    answer:
      "Masuk ke dasbor akun Anda, buka menu Langganan, lalu klik Batalkan Langganan. Akses tetap aktif hingga akhir periode tagihan berjalan.",
  },
  {
    question: "VPN XVPNX mendukung protokol apa saja?",
    answer:
      "XVPNX mendukung WireGuard, OpenVPN, dan IKEv2/IPSec. WireGuard direkomendasikan untuk kecepatan dan keamanan terbaik.",
  },
  {
    question: "Apakah ada uji coba gratis?",
    answer:
      "Ya, kami menyediakan uji coba gratis 7 hari tanpa perlu memasukkan informasi kartu kredit.",
  },
];

export default function FaqAskPage() {
  const [formData, setFormData] = useState<AskForm>(initialFormState);
  const [errors, setErrors] = useState<Partial<AskForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as AskFormKey]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<AskForm> = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email tidak valid";
    }
    if (!formData.kategori) newErrors.kategori = "Pilih kategori pertanyaan";
    if (!formData.pertanyaan.trim()) {
      newErrors.pertanyaan = "Pertanyaan wajib diisi";
    } else if (formData.pertanyaan.length < 10) {
      newErrors.pertanyaan = "Pertanyaan minimal 10 karakter";
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

  const errorClass = (field: AskFormKey) =>
    errors[field]
      ? "border-red-500 focus:ring-red-500"
      : "border-zinc-300 dark:border-zinc-700 focus:ring-indigo-500";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-indigo-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Ada Pertanyaan?
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Tanyakan langsung kepada tim dukungan XVPNX. Kami akan menjawab
            pertanyaan Anda dalam 1 hari kerja.
          </p>
        </div>
      </section>

      {/* FAQ singkat */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="max-w-3xl mx-auto space-y-3 mb-16">
            {FAQ_LIST.map((faq, i) => (
              <div
                key={i}
                className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left gap-3"
                >
                  <span className="flex items-center gap-3 font-medium text-zinc-900 dark:text-white">
                    <HelpCircle className="h-5 w-5 text-indigo-500 shrink-0" />
                    {faq.question}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp className="h-4 w-4 text-zinc-400 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-zinc-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-zinc-600 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-3xl mx-auto bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              Kirim Pertanyaan
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8">
              Tidak menemukan jawaban di atas? Kirim pertanyaan Anda dan kami
              akan segera merespons.
            </p>

            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Pertanyaan Terkirim!
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Terima kasih telah menghubungi kami. Tim dukungan XVPNX akan
                  menjawab pertanyaan Anda melalui email dalam 1 hari kerja.
                </p>
                <button
                  onClick={() => {
                    setSubmitStatus("idle");
                    setFormData(initialFormState);
                  }}
                  className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Ajukan Pertanyaan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nama */}
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
                        className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass(
                          "name"
                        )} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Alamat Email
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
                        className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass(
                          "email"
                        )} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Kategori — full width */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="kategori"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Kategori Pertanyaan
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                        <Tag className="h-5 w-5" />
                      </div>
                      <select
                        id="kategori"
                        name="kategori"
                        value={formData.kategori}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass(
                          "kategori"
                        )} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white`}
                      >
                        {CATEGORIES.map((c) => (
                          <option key={c.value} value={c.value}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.kategori && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.kategori}
                      </p>
                    )}
                  </div>
                </div>

                {/* Pertanyaan */}
                <div>
                  <label
                    htmlFor="pertanyaan"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Pertanyaan Anda
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-zinc-400 pointer-events-none">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <textarea
                      id="pertanyaan"
                      name="pertanyaan"
                      value={formData.pertanyaan}
                      onChange={handleChange}
                      placeholder="Tuliskan pertanyaan Anda dengan jelas..."
                      rows={5}
                      className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass(
                        "pertanyaan"
                      )} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400 resize-none`}
                    />
                  </div>
                  {errors.pertanyaan && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.pertanyaan}
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
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" /> Kirim Pertanyaan
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
