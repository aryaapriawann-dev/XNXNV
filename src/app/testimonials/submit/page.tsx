"use client";

import { useState } from "react";
import {
  Star,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquareQuote,
  User,
  Quote,
} from "lucide-react";

interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  message: string;
  date: string;
}

interface SubmitForm {
  name: string;
  rating: number;
  message: string;
}

const initialFormState: SubmitForm = { name: "", rating: 5, message: "" };

const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Budi Santoso",
    rating: 5,
    message: "Layanan XVPNX sangat cepat dan stabil. Koneksi tidak pernah putus selama kerja remote seharian penuh.",
    date: "2026-08-15",
  },
  {
    id: "2",
    name: "Siti Rahayu",
    rating: 5,
    message: "Tim support-nya responsif banget, masalah saya diselesaikan dalam hitungan menit. Recommended!",
    date: "2026-07-20",
  },
  {
    id: "3",
    name: "Agus Wijaya",
    rating: 4,
    message: "Harga terjangkau dengan kualitas premium. Cocok untuk kebutuhan bisnis kecil seperti kami.",
    date: "2026-06-10",
  },
  {
    id: "4",
    name: "Dewi Lestari",
    rating: 5,
    message: "Aplikasinya mudah dipakai bahkan untuk orang awam. Tutorialnya jelas dan lengkap.",
    date: "2026-05-05",
  },
  {
    id: "5",
    name: "Eko Prasetyo",
    rating: 4,
    message: "Sudah coba banyak layanan sejenis, XVPNX yang paling konsisten kecepatannya di jam sibuk.",
    date: "2026-04-12",
  },
  {
    id: "6",
    name: "Rina Marlina",
    rating: 5,
    message: "Fitur keamanannya lengkap dan transparan. Merasa aman berselancar untuk transaksi penting.",
    date: "2026-03-22",
  },
];

function Stars({ value, size = "w-4 h-4" }: { value: number; size?: string }) {
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className={`${size} ${i < value ? "fill-current" : "text-zinc-600"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSubmitPage() {
  const [formData, setFormData] = useState<SubmitForm>(initialFormState);
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(INITIAL_TESTIMONIALS);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: { name?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.message.trim()) {
      newErrors.message = "Testimoni wajib diisi";
    } else if (formData.message.length < 10) {
      newErrors.message = "Testimoni minimal 10 karakter";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const baru: TestimonialItem = {
      id: String(Date.now()),
      name: formData.name.trim(),
      rating: formData.rating,
      message: formData.message.trim(),
      date: new Date().toISOString().slice(0, 10),
    };
    setTestimonials((prev) => [baru, ...prev]);
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData(initialFormState);
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const avg =
    testimonials.length > 0
      ? testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length
      : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Kirim Testimoni
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Bagikan pengalaman Anda memakai XVPNX dan bantu pengguna lain makin yakin.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
            <MessageSquareQuote className="w-6 h-6 text-blue-400" />
            Tulis Testimoni Anda
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Testimoni Anda langsung tampil di daftar bawah setelah dikirim.
          </p>

          {submitStatus === "success" ? (
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Testimoni Terkirim!</h3>
              <p className="text-slate-400 mb-6">
                Terima kasih! Testimoni Anda sudah tampil di daftar bawah.
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Kirim Lagi
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Nama Anda
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama lengkap"
                    className={`w-full pl-12 pr-4 py-3 bg-slate-950 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-800 focus:ring-blue-500"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <span className="block text-sm font-medium text-slate-300 mb-2">
                  Rating Kepuasan
                </span>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, rating: n }))}
                      aria-label={`Rating ${n}`}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          n <= formData.rating
                            ? "text-yellow-500 fill-current"
                            : "text-slate-700"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-slate-400">
                    {formData.rating}/5
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Cerita Pengalaman Anda
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ceritakan pengalaman terbaik Anda memakai XVPNX..."
                  rows={4}
                  className={`w-full px-4 py-3 bg-slate-950 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-800 focus:ring-blue-500"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

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
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Kirim Testimoni
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Quote className="w-6 h-6 text-blue-400" />
            Testimoni Pengguna ({testimonials.length})
          </h2>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Stars value={Math.round(avg)} />
            <span>{avg.toFixed(1)}/5</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-slate-900 rounded-xl border border-slate-800 p-6 hover:border-blue-500/50 transition-all"
            >
              <Stars value={t.rating} />
              <p className="text-slate-300 leading-relaxed italic my-4">
                &ldquo;{t.message}&rdquo;
              </p>
              <div className="pt-4 border-t border-slate-800">
                <p className="font-semibold text-slate-200">{t.name}</p>
                <p className="text-xs text-slate-500">
                  {new Date(t.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
