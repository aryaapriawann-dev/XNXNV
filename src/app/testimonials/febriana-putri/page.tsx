import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimoni - Febriana Putri',
  description: 'Febriana Putri, CTO TechVision Indonesia, membagikan pengalamannya bekerja sama dengan XNXNV.',
}

export default function TestimonyFebrianaPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <blockquote className="border-l-4 border-indigo-600 pl-6 italic text-lg text-zinc-700 dark:text-zinc-300">
        "XNXNV berhasil mengubah ide kami menjadi produk digital yang solid. Tim yang komunikatif, kode bersih, dan hasilnya lebih cepat dari estimasi awal."
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-indigo-200 dark:bg-indigo-800 flex items-center justify-center text-indigo-700 dark:text-indigo-200 font-bold text-sm">FP</div>
        <div>
          <p className="font-semibold text-zinc-900 dark:text-white">Febriana Putri</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Chief Technology Officer — TechVision Indonesia</p>
        </div>
      </div>
    </section>
  )
}
