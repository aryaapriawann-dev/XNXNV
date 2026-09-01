import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-900 py-20 lg:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-zinc-100 dark:bg-zinc-800 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-zinc-50 dark:bg-zinc-950 blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <Zap className="h-4 w-4" />
              <span>Solusi Digital Terpercaya</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Membangun masa depan digital <br />
              <span className="text-zinc-900 dark:text-zinc-50">
                yang lebih baik bersama XNXNV
              </span>
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
              Kami menyediakan layanan digital lengkap mulai dari pengembangan web,
              aplikasi mobile, hingga solusi teknologi yang inovatif untuk bisnis Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Mulai Sekarang
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-950 transition-colors"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <div>
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">50+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Proyek Selesai</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">25+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Klien Puas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">5+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Tahun Pengalaman</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden shadow-2xl">
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-zinc-900 dark:bg-zinc-50 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-white dark:text-zinc-900" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-3 w-32 bg-zinc-300 dark:bg-zinc-700 rounded" />
                    <div className="h-2 w-24 bg-zinc-200 dark:bg-zinc-800 rounded" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-full bg-zinc-300 dark:bg-zinc-700 rounded" />
                  <div className="h-3 w-5/6 bg-zinc-300 dark:bg-zinc-700 rounded" />
                  <div className="h-3 w-4/6 bg-zinc-300 dark:bg-zinc-700 rounded" />
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    Kepuasan 100%
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Klien puas dengan hasil kerja
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
