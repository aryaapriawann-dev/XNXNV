import { ArrowRight, Code, Layout, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const features = [
    { icon: Code, title: "Developer", desc: "Clean, scalable code" },
    { icon: Layout, title: "Designer", desc: "Modern, intuitive UI" },
    { icon: Zap, title: "Fast", desc: "Optimized performance" },
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-900 py-24 sm:py-32">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
          Solusi Digital <br className="hidden sm:block" />
          <span className="text-indigo-600 dark:text-indigo-400">
            Berkualitas untuk Bisnis Anda
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-10">
          Kami membantu bisnis tumbuh dengan website modern, aplikasi digital,
          dan solusi teknologi yang terintegrasi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Hubungi Kami
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            Lihat Portfolio
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-12">
          {[
            { label: "Project Selesai", value: "100+" },
            { label: "Klien Puas", value: "80+" },
            { label: "Tahun Pengalaman", value: "5+" },
            { label: "Team Ahli", value: "10+" },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
