"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle, AlertCircle, User, Globe, Building, Shield, UserCheck } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

const initialFormState: ContactForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

type ContactFormKey = keyof ContactForm;

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>(initialFormState);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as ContactFormKey]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<ContactForm> = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email tidak valid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon wajib diisi";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subjek wajib diisi";
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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData(initialFormState);

    setTimeout(() => {
      setSubmitStatus("idle");
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "info@xvpnx.com",
      subtitle: "hubungi kami kapan saja",
      link: "mailto:info@xvpnx.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telepon",
      content: "+62 812 3456 7890",
      subtitle: "senin-jumat 09:00-18:00 WIB",
      link: "tel:+6281234567890"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Alamat",
      content: "Jl. Teknologi No. 123",
      subtitle: "Jakarta Selatan, 12345",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Jam Operasional",
      content: "Senin - Jumat",
      subtitle: "09:00 - 18:00 WIB",
      link: ""
    }
  ];

  const formFields = [
    { name: "name", label: "Nama Lengkap", type: "text", placeholder: "John Doe", icon: <User className="h-5 w-5" /> },
    { name: "email", label: "Email", type: "email", placeholder: "john@example.com", icon: <Mail className="h-5 w-5" /> },
    { name: "phone", label: "Nomor Telepon", type: "tel", placeholder: "+62 812 3456 7890", icon: <Phone className="h-5 w-5" /> },
    { name: "company", label: "Perusahaan", type: "text", placeholder: "Nama Perusahaan", icon: <Building className="h-5 w-5" /> },
    { name: "subject", label: "Subjek", type: "text", placeholder: "Saya ingin bertanya tentang...", icon: <MessageCircle className="h-5 w-5" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Kami siap membantu Anda menemukan solusi terbaik untuk bisnis Anda.
            Hubungi kami melalui channel yang paling nyaman bagi Anda.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">99%</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Tingkat Responsivitas</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Dukungan Online</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Klien Puas</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10+</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              Saluran Kontak Kami
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Pilih metode komunikasi yang paling cocok untuk kebutuhan Anda.
              Tim kami siap melayani Anda dengan cepat dan profesional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="group bg-white dark:bg-zinc-900 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-600"
              >
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  {contact.title}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                  {contact.content}
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  {contact.subtitle}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-800 rounded-2xl overflow-hidden h-96 relative">
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-700">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-zinc-500 mx-auto mb-4" />
                <p className="text-zinc-400">Google Maps Integration</p>
                <p className="text-zinc-500 text-sm mt-2">Jl. Teknologi No. 123, Jakarta Selatan</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-white dark:bg-zinc-900 px-4 py-2 rounded-lg shadow-lg text-sm">
              <p className="font-semibold text-zinc-900 dark:text-white">Lihat di Google Maps</p>
              <p className="text-zinc-500 text-xs">Jl. Teknologi No. 123, Jakarta Selatan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                Kirim Pesan
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-lg">
                Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam kerja.
                Kami berkomitmen untuk memberikan respons terbaik bagi setiap pertanyaan dan kebutuhan Anda.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center flex-shrink-0 text-indigo-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                      Respons Cepat
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                      Kami menjamin respons dalam 24 jam kerja untuk semua pertanyaan yang diajukan.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center flex-shrink-0 text-indigo-600">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                      Privasi Terjamin
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                      Semua informasi pribadi Anda dilindungi dan tidak akan dibagikan ke pihak ketiga.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center flex-shrink-0 text-indigo-600">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                      Tim Ahli
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                      Pertanyaan Anda akan dijawab langsung oleh tim ahli kami yang berpengalaman.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              {submitStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Terima kasih atas pesan Anda. Kami akan segera menghubungi Anda melalui email atau telepon yang telah Anda berikan.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitStatus("idle");
                      setFormData(initialFormState);
                    }}
                    className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Kirim Pesan Lagi
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {formFields.map((field) => (
                      <div key={field.name} className="relative">
                        <label
                          htmlFor={field.name}
                          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                        >
                          {field.label}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                            {field.icon}
                          </div>
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name as ContactFormKey]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${
                              errors[field.name as ContactFormKey]
                                ? "border-red-500 focus:ring-red-500"
                                : "border-zinc-300 dark:border-zinc-700 focus:ring-indigo-500"
                            } rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400`}
                          />
                        </div>
                        {errors[field.name as ContactFormKey] && (
                          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors[field.name as ContactFormKey]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Pesan Anda
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tulis pesan Anda di sini..."
                      rows={5}
                      className={`w-full px-4 py-3 bg-white dark:bg-zinc-800 border ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : "border-zinc-300 dark:border-zinc-700 focus:ring-indigo-500"
                      } rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400 resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message}
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
                        <Send className="h-5 w-5" />
                        Kirim Pesan
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                    Dengan mengirim pesan ini, Anda menyetujui{" "}
                    <a href="/privacy" className="text-indigo-600 hover:text-indigo-700">
                      Kebijakan Privasi
                    </a>{" "}
                    dan{" "}
                    <a href="/terms" className="text-indigo-600 hover:text-indigo-700">
                      Syarat & Ketentuan
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
