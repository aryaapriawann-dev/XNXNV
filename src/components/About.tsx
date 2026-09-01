import Image from "next/image";
import { Award, Users, TrendingUp, Target } from "lucide-react";

const stats = [
  { icon: Award, label: "Kualitas Terbaik", value: "Premium" },
  { icon: Users, label: "Klien Puas", value: "25+" },
  { icon: TrendingUp, label: "Pertumbuhan", value: "200%" },
  { icon: Target, label: "Proyek Selesai", value: "50+" },
];

export default function About() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50">
                tentang XNXNV
              </h2>
              <div className="h-1.5 w-24 bg-zinc-900 dark:bg-zinc-50 rounded" />
            </div>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              XNXNV adalah perusahaan teknologi digital yang berfokus pada penyediaan
              solusi teknologi berkualitas tinggi untuk bisnis modern.
            </p>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Dengan tim profesional dan berpengalaman, kami membantu organisasi
              mencapai tujuan digital mereka melalui pengembangan web, aplikasi mobile,
              dan transformasi digital yang efektif.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                    <stat.icon className="h-5 w-5 text-zinc-900 dark:text-zinc-50" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      {stat.value}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-full w-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="h-3 w-48 bg-zinc-300 dark:bg-zinc-700 mx-auto rounded" />
                    <div className="h-2 w-32 bg-zinc-200 dark:bg-zinc-800 mx-auto rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-zinc-300 dark:bg-zinc-700 rounded" />
                    <div className="h-2 w-5/6 bg-zinc-300 dark:bg-zinc-700 rounded" />
                    <div className="h-2 w-4/6 bg-zinc-300 dark:bg-zinc-700 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-700 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Tim Profesional
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Siap membantu Anda
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Kami hadir untuk memberikan solusi terbaik sesuai kebutuhan Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
