export const metadata = { title: 'Testimoni-12' }
export default function Page12() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Testimoni #12</h2>
        <blockquote className="mt-6 border-l-4 border-indigo-500 pl-6 italic text-zinc-600 dark:text-zinc-400 text-lg">
          "Pengalaman yang luar biasa. Tim kami langsung paham apa yang kami butuhkan."
        </blockquote>
        <div className="mt-8 flex gap-4 items-center">
          <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold">P12</div>
          <div>
            <p className="font-semibold text-zinc-800 dark:text-white">Pengguna 12</p>
            <p className="text-sm text-zinc-500">Pengguna Setia XNXNV</p>
          </div>
        </div>
      </div>
    </section>
  );
}
