import ShareButtons from "@/components/ShareButtons";

export default function NewsDetailPage() {
  const news = {
    id: 1,
    title: "Digital Transformation: The Future of Business",
    category: "Technology",
    author: "John Smith",
    date: "September 3, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    content: `
      <p class="mb-6 text-lg leading-relaxed">
        In today's rapidly evolving business landscape, digital transformation has become not just an option, but a necessity for survival and growth. Companies across all industries are embracing digital technologies to improve efficiency, enhance customer experiences, and drive innovation.
      </p>
      
      <h2 class="text-3xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Why Digital Transformation Matters</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Digital transformation is about more than just adopting new tools—it's about fundamentally changing how organizations operate and deliver value to customers. This comprehensive approach integrates digital technology into all areas of a business, fundamentally changing how it operates and delivers value to customers.
      </p>
      
      <h2 class="text-3xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Key Benefits</h2>
      <ul class="list-disc list-inside mb-6 space-y-2 text-lg">
        <li>Increased operational efficiency</li>
        <li>Better customer experiences</li>
        <li>Enhanced data analytics capabilities</li>
        <li>Faster time to market</li>
        <li>Improved decision-making processes</li>
      </ul>
      
      <h2 class="text-3xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Getting Started</h2>
      <p class="mb-6 text-lg leading-relaxed">
        Starting your digital transformation journey doesn't have to be overwhelming. Begin with a clear strategy, assess your current capabilities, and identify quick wins that demonstrate value. Partnering with experienced technology providers can help ensure your transformation efforts align with business goals and deliver measurable results.
      </p>
    `
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                {news.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {news.title}
            </h1>
            <div className="flex items-center gap-6 text-slate-400 text-lg">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                {news.author}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {news.date}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {news.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <ShareButtons
                url={`https://xnxv.com/news/${news.id}`}
                title={news.title}
              />
            </div>
          </div>

          <div
            className="prose dark:prose-invert prose-lg max-w-none text-slate-700 dark:text-slate-300"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Share this article</h3>
            <ShareButtons
              url={`https://xnxv.com/news/${news.id}`}
              title={news.title}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <a
                key={i}
                href={`/news/detail/${i}`}
                className="group block bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80`}
                    alt={`Article ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-blue-600 text-sm font-medium mb-2 block">
                    Technology
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    The Future of Digital Innovation
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    Discover how digital transformation is reshaping industries and creating new opportunities for businesses worldwide.
                  </p>
                  <span className="text-slate-500 dark:text-slate-500 text-sm">
                    Read more →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
