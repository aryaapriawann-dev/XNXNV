"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, Globe, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email tidak valid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subjek wajib diisi";
    if (!formData.message.trim()) newErrors.message = "Pesan wajib diisi";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset status after 5 seconds
    setTimeout(() => {
      setSubmitStatus("idle");
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["info@xvnpnx.id", "support@xvnpnx.id"],
      color: "bg-indigo-100 dark:bg-indigo-900/30",
      iconColor: "text-indigo-600 dark:text-indigo-400",
    },
    {
      icon: Phone,
      title: "Telepon / WhatsApp",
      details: ["+62 812-3456-7890"],
      color: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      icon: MapPin,
      title: "Alamat Kantor",
      details: ["Jl. Tech Park No. 123", "Jakarta Selatan", "Jakarta 12345"],
      color: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      icon: Globe,
      title: "Media Sosial",
      details: ["Instagram: @xvnpnx", "LinkedIn: /company/xvnpnx", "Twitter: @xvnpnx"],
      color: "bg-pink-100 dark:bg-pink-900/30",
      iconColor: "text-pink-600 dark:text-pink-400",
    },
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero */}
      <section className="relative py-20 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Punya proyek atau pertanyaan? Tim kami siap membantu Anda.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
              Hubungi Kami
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-12 text-lg">
              Isi form di samping atau hubungi kami melalui kontak di bawah ini.
              Kami siap membantu bisnis Anda tumbuh!
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <div className={`p-3 ${item.color} rounded-lg`}>
                    <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                      {item.title}
                    </h3>
                    {item.details.map((detail, dIdx) => (
                      <p key={dIdx} className="text-zinc-600 dark:text-zinc-400 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="mt-12 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  Jam Operasional
                </h3>
              </div>
              <div className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <div className="flex justify-between items-center p-3 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 rounded-lg transition-colors">
                  <span>Senin - Jumat</span>
                  <span className="font-medium">09:00 - 18:00 WIB</span>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 rounded-lg transition-colors">
                  <span>Sabtu</span>
                  <span className="font-medium">10:00 - 16:00 WIB</span>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 rounded-lg transition-colors">
                  <span>Minggu & Hari Libur</span>
                  <span className="font-medium">Tutup</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 relative h-64 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-zinc-400 mx-auto mb-4 opacity-50" />
                  <p className="text-zinc-500">Lokasi Peta Interaktif</p>
                  <p className="text-sm text-zinc-400 mt-2">Jl. Tech Park No. 123, Jakarta</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Jl.+Tech+Park+No.+123,+Jakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white dark:bg-zinc-700 px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:bg-zinc-50 dark:hover:bg-zinc-600 transition-colors"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700 shadow-lg">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
              Kirim Pesan
            </h2>

            {submitStatus === "success" ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2">
                  Pesan Terkirim!
                </h3>
                <p className="text-green-600 dark:text-green-400">
                  Terima kasih atas pesan Anda. Tim kami akan menghubungi Anda dalam 24 jam.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-zinc-200 dark:border-zinc-700"} bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-zinc-200 dark:border-zinc-700"} bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Subjek *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? "border-red-500" : "border-zinc-200 dark:border-zinc-700"} bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all`}
                    placeholder="Permintaan Informasi"
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-zinc-200 dark:border-zinc-700"} bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none`}
                    placeholder="Tulis pesan Anda di sini..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
