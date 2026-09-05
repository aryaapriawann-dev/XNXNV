"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Building,
  Tag,
  Send,
  CheckCircle,
  AlertCircle,
  Handshake,
  Rocket,
  Users,
} from "lucide-react";

interface PartnerForm {
  name: string;
  email: string;
  company: string;
  category: string;
  message: string;
}

const initialFormState: PartnerForm = {
  name: "",
  email: "",
  company: "",
  category: "",
  message: "",
};

type PartnerFormKey = keyof PartnerForm;

const CATEGORIES = [
  { value: "", label: "Pilih kategori kemitraan" },
  { value: "teknologi", label: "Partner Teknologi" },
  { value: "reseller", label: "Reseller / Distributor" },
  { value: "komunitas", label: "Komunitas / Edukasi" },
  { value: "enterprise", label: "Enterprise / Korporat" },
  { value: "startup", label: "Startup / Inkubator" },
];

const BENEFITS = [
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Akses Produk Prioritas",
    desc: "Dapatkan akses awal ke fitur dan produk terbaru XVPNX sebelum dirilis publik.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Dukungan Co-Marketing",
    desc: "Materi promosi bersama, eksposur di blog, dan dukungan kampanye pemasaran.",
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Skema Komisi Menarik",
    desc: "Komisi kompetitif untuk setiap rujukan dan penjualan yang berhasil closing.",
  },
];

export default function PartnersJoinPage() {
  const [formData, setFormData] = useState<PartnerForm>(initialFormState);
  const [errors, setErrors] = useState<Partial<PartnerForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as PartnerFormKey]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<PartnerForm> = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email tidak valid";
    }
    if (!formData.company.trim()) newErrors.company = "Nama perusahaan wajib diisi";
    if (!formData.category) newErrors.category = "Pilih kategori kemitraan";
    if (!formData.message.trim()) {
      newErrors.message = "Pesan wajib diisi";
    } else if (formData.message.length < 10) {
      newErrors.message = "Pesan minimal 10 karakter";
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

  const errorClass = (field: PartnerFormKey) =>
    errors[field]
      ? "border-red-500 focus:ring-red-500"
      : "border-zinc-300 dark:border-zinc-700 focus:ring-indigo-500";

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-indigo-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Gabung Jadi Partner
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Mari bertumbuh bersama XVPNX. Isi formulir kemitraan dan tim kami akan
            menghubungi Anda dalam 2 hari kerja.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800"
              >
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-5 text-indigo-600">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  {b.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Pengajuan Terkirim!
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Terima kasih atas minat kemitraan Anda. Tim partnership kami akan
                  menghubungi Anda melalui email dalam 2 hari kerja.
                </p>
                <button
                  onClick={() => {
                    setSubmitStatus("idle");
                    setFormData(initialFormState);
                  }}
                  className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Ajukan Kemitraan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
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
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Email Bisnis
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
                        placeholder="nama@perusahaan.com"
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
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Perusahaan / Organisasi
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                        <Building className="h-5 w-5" />
                      </div>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="PT Maju Bersama"
                        className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass("company")} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400`}
                      />
                    </div>
                    {errors.company && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Kategori Kemitraan
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                        <Tag className="h-5 w-5" />
                      </div>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass("category")} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white`}
                      >
                        {CATEGORIES.map((c) => (
                          <option key={c.value} value={c.value}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.category && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.category}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Pesan / Rencana Kolaborasi
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan rencana kolaborasi Anda..."
                    rows={5}
                    className={`w-full px-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass("message")} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400 resize-none`}
                  />
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
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" /> Ajukan Kemitraan
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
