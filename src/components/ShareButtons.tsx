export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex flex-wrap gap-3">
      {[
        { name: "Facebook", icon: "Share2", url: `https://facebook.com/sharer/sharer.php?u=${encodedUrl}` },
        { name: "Twitter", icon: "Share2", url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}` },
        { name: "LinkedIn", icon: "Share2", url: `https://linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedTitle}` },
        { name: "Email", icon: "Mail", url: `mailto:?subject=${encodedTitle}&body=${encodedUrl}` },
      ].map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
        >
          <span>{social.name}</span>
        </a>
      ))}
    </div>
  );
}
