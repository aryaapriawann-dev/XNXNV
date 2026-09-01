import { Code, Smartphone, BarChart3, Shield, Zap, Globe } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Pengembangan web modern dengan Next.js, React, dan Tailwind CSS.",
    icon: Code,
  },
  {
    title: "Mobile App",
    description: "Aplikasi mobile cross-platform dengan Flutter dan React Native.",
    icon: Smartphone,
  },
  {
    title: "Analytics",
    description: "Analisis data dan dashboard interaktif untuk pengambilan keputusan.",
    icon: BarChart3,
  },
  {
    title: "Cyber Security",
    description: "Keamanan digital dengan implementasi best practice dan encryption.",
    icon: Shield,
  },
  {
    title: "Cloud Solutions",
    description: "Infrastruktur cloud scalable dengan AWS, Vercel, dan Supabase.",
    icon: Globe,
  },
  {
    title: "Automation",
    description: "Solusi otomasi bisnis dengan workflow dan API integration.",
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Solusi teknologi lengkap untuk mengembangkan bisnis Anda dengan cepat dan efisien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Butuh solusi khusus? Hubungi kami untuk konsultasi gratis.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
