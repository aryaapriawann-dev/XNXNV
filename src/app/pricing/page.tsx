import { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Pricing - XNXNV",
  description: "Lihat harga dan paket layanan XNXNV untuk bisnis Anda.",
};

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "2.500.000",
      period: "/bulan",
      description: "Cocok untuk UMKM yang baru memulai",
      features: [
        "1 Website statis",
        "2 halaman",
        "Hosting 6 bulan",
        "Domain .com",
        "Support via email",
      ],
      cta: "Mulai Dasar",
    },
    {
      name: "Professional",
      price: "5.000.000",
      period: "/bulan",
      description: "Untuk bisnis yang butuh fitur lengkap",
      features: [
        "5 Website",
        "10 halaman per situs",
        "Hosting 1 tahun",
        "Domain .com & .id",
        "Priority support",
        "Analytics dashboard",
      ],
      cta: "Pilih Profesional",
    },
    {
      name: "Enterprise",
      price: "15.000.000",
      period: "/bulan",
      description: "Solusi custom untuk perusahaan besar",
      features: [
        "Website unlimited",
        "Custom features",
        "Dedicated server",
        "SSL custom",
        "SLA 99.9%",
        "Dedicated account manager",
        "24/7 support",
      ],
      cta: "Hubungi Sales",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-zinc-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white text-center">Harga & Paket</h1>
            <p className="mt-4 text-lg text-indigo-100 text-center max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  index === 1 ? "bg-indigo-600 text-white shadow-2xl scale-105" : "bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                }`}
              >
                <h2 className={`text-2xl font-bold ${index === 1 ? "text-white" : "text-zinc-900 dark:text-zinc-50"}`}>
                  {plan.name}
                </h2>
                <p className={`mt-2 text-sm ${index === 1 ? "text-indigo-100" : "text-zinc-600 dark:text-zinc-400"}`}>
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${index === 1 ? "text-white" : "text-zinc-900 dark:text-zinc-50"}`}>
                    Rp {plan.price}
                  </span>
                  <span className={`text-sm ${index === 1 ? "text-indigo-200" : "text-zinc-500"}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className={`flex items-start gap-2 ${index === 1 ? "text-indigo-100" : "text-zinc-700 dark:text-zinc-300"}`}>
                      <svg className={`w-5 h-5 flex-shrink-0 ${index === 1 ? "text-indigo-300" : "text-indigo-600 dark:text-indigo-400"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 rounded-xl font-medium transition-colors ${
                    index === 1
                      ? "bg-white text-indigo-600 hover:bg-indigo-50"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 text-center mb-8">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="space-y-4">
            {[
              { q: "Berapa lama waktu pengembangan?", a: "Tergantung kompleksitas proyek. Proyek sederhana 2-4 minggu, proyek menengah 4-8 minggu, proyek besar 8-16 minggu." },
              { q: "Apakah ada biaya tersembunyi?", a: "Tidak. Semua biaya sudah termasuk dalam harga paket. Biaya tambahan hanya jika Anda meminta fitur custom di luar paket." },
              { q: "Bagaimana jika saya ingin upgrade paket?", a: "Anda bisa upgrade kapan saja. Selisih harga akan dihitung secara prorata untuk sisa periode berlangganan." },
            ].map((faq, index) => (
              <div key={index} className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 mb-2">{faq.q}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-zinc-900 dark:bg-zinc-950 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Siap Memulai?</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik untuk bisnis Anda.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
