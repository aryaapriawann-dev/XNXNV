"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Hero */}
      <section className="bg-zinc-900 dark:bg-zinc-950 py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-lg text-zinc-300">
            Punya pertanyaan atau butuh konsultasi? Tim kami siap membantu Anda.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Informasi Kontak
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Isi form di bawah ini dan tim kami akan segera menghubungi Anda.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-zinc-900 dark:text-zinc-50" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Telepon
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400">
                    +62 812-3456-7890
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400">
                    +62 821-9876-5432
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-zinc-900 dark:text-zinc-50" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Email
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400">
                    info@xnxnv.com
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400">
                    hello@xnxnv.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-zinc-900 dark:text-zinc-50" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Alamat
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400">
                    Jl. Techno Park No. 123
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400">
                    Jakarta Selatan, 12345
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Jam Operasional:
              </div>
              <div className="mt-2 space-y-1">
                <div className="flex justify-between text-zinc-900 dark:text-zinc-50">
                  <span>Senin - Jumat</span>
                  <span>09:00 - 18:00 WIB</span>
                </div>
                <div className="flex justify-between text-zinc-900 dark:text-zinc-50">
                  <span>Sabtu</span>
                  <span>10:00 - 16:00 WIB</span>
                </div>
                <div className="flex justify-between text-zinc-900 dark:text-zinc-50">
                  <span>Minggu & Hari Libur</span>
                  <span>Tutup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-700 p-8">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                Kirim Pesan
              </h2>

              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                    <Send className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-green-900 dark:text-green-50">
                      Pesan Terkirim!
                    </div>
                    <div className="text-sm text-green-700 dark:text-green-400">
                      Terima kasih. Kami akan menghubungi Anda segera.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Nama Lengkap *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 focus:border-transparent outline-none transition-all"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 focus:border-transparent outline-none transition-all"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Pesan *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Mengirim..."
                  ) : (
                    <>
                      Kirim Pesan
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
