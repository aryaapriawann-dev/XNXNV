/**
 * TestimonialSection component displaying testimonials with stats summary.
 * Includes rating display and client satisfaction metrics.
 */
import { Star, Quote } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Testimoni Klien
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Banyak klien puas yang sudah mencoba layanan kami.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800">
              <Quote className="w-8 h-8 text-zinc-200 dark:text-zinc-800 mb-4" />
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">Testimoni klien {i}</p>
              <div className="font-semibold text-zinc-900 dark:text-white">Nama Klien {i}</div>
              <div className="text-sm text-zinc-500">Perusahaan</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
