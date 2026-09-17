export const metadata = { title: 'Artikel 123' }
export default function Article123Page() {
  return (
    <article className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Artikel #123</h1>
      <div className="mt-6 text-zinc-600 dark:text-zinc-400 space-y-3">
        <p>Artikel ini membahas topik menarik seputar teknologi dan bisnis digital.</p>
        <p>Konten yang informative dan relevan untuk pembaca modern.</p>
      </div>
    </article>
  );
}
