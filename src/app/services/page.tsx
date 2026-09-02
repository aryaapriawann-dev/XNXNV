import { Webhook, Palette, Smartphone, BarChart3, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    { icon: Webhook, title: "Web Development", desc: "Modern websites dengan Next.js, React, dan Tailwind CSS", color: "bg-blue-500" },
    { icon: Palette, title: "UI/UX Design", desc: "Design yang user-friendly dan estetis untuk digital product", color: "bg-purple-500" },
    { icon: Smartphone, title: "Mobile App", desc: "Cross-platform mobile apps dengan Flutter dan React Native", color: "bg-green-500" },
    { icon: BarChart3, title: "Digital Marketing", desc: "SEO, social media, dan analytics untuk pertumbuhan bisnis", color: "bg-orange-500" },
    { icon: Shield, title: "Cyber Security", desc: "Security audit, penetration testing, dan solusi proteksi", color: "bg-red-500" },
    { icon: Zap, title: "Cloud Solutions", desc: "Infrastructure cloud, DevOps, dan scaling solutions", color: "bg-yellow-500" },
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero */}
      <section className="relative py-20 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Layanan Digital Kami</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Solusi lengkap untuk menghadirkan bisnis Anda ke dunia digital dengan 
            kualitas internasional.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-xl"
              >
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  {service.desc}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  Pelajari lebih lanjut &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Proses Kami
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Cara kerja kami yang terstruktur untuk hasil optimal
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-zinc-200 dark:bg-zinc-800 -z-10" />
            
            {[
              { step: "01", title: "Konsultasi", desc: "Diskusi kebutuhan dan goals bisnis Anda" },
              { step: "02", title: "Perencanaan", desc: "Buat strategi dan roadmap solusi" },
              { step: "03", title: "Eksekusi", desc: "Development dan design sesuai spesifikasi" },
              { step: "04", title: "Deploy", desc: "Lauch dan monitoring hasil akhir" },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="w-16 h-16 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Siap Membawa Bisnis ke Level Berikutnya?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Hubungi kami hari ini dan dapatkan konsultasi gratis untuk proyek Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-4 rounded-lg bg-white text-indigo-600 font-bold hover:bg-zinc-50 transition-colors"
            >
              Hubungi Kami Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
