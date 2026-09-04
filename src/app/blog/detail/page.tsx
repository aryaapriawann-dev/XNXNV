import ShareButtons from "@/components/ShareButtons";

const blogPost = {
  id: 1,
  title: "The Future of Web Development in 2026",
  excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI integration to server-side rendering advancements.",
  category: "Web Development",
  author: "Jane Doe",
  authorImage: "https://ui-avatars.com/api/?name=Jane+Doe&background=0D8ABC&color=fff",
  date: "September 2, 2026",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=1200&q=80",
  content: `
    <p class="mb-6 text-lg leading-relaxed">
      The web development landscape is evolving at an unprecedented pace. As we move through 2026, several key trends are shaping how we build and deploy web applications. From artificial intelligence integration to advanced server-side rendering techniques, the possibilities are endless.
    </p>
    
    <h2 class="text-3xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Server-Side Rendering Evolution</h2>
    <p class="mb-6 text-lg leading-relaxed">
      Server-side rendering (SSR) has come a long way since its inception. With Next.js 16 and modern frameworks, developers can now achieve near-instant page loads with perfect SEO optimization. The combination of React 19's concurrent features with intelligent data fetching strategies is changing how we think about application performance.
    </p>
    
    <h2 class="text-3xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">AI-Driven Development</h2>
    <p class="mb-6 text-lg leading-relaxed">
      Artificial intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow. From code generation and debugging assistance to automated testing and performance optimization, AI tools are helping developers ship faster and with higher quality.
    </p>
    
    <h2 class="text-3xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">The Rise of Micro-Frontends</h2>
    <p class="mb-6 text-lg leading-relaxed">
      As applications grow in complexity, the micro-frontend architecture is gaining traction. This approach allows different teams to work on separate parts of the UI using their preferred technologies, while still maintaining a cohesive user experience. The modular nature of micro-frontends also makes deployment and scaling much more efficient.
    </p>
    
    <h2 class="text-3xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Performance Matters More Than Ever</h2>
    <p class="mb-6 text-lg leading-relaxed">
      With user attention spans decreasing and bounce rates increasing, performance has become a critical factor in web application success. Core Web Vitals, including LCP, FID, and CLS, are now key metrics that directly impact SEO rankings and user retention. Developers must prioritize performance from the very beginning of the development process.
    </p>
  `
};

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
              {blogPost.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              {blogPost.excerpt}
            </p>
            <div className="flex items-center justify-between border-t border-slate-700 pt-6">
              <div className="flex items-center gap-4">
                <img
                  src={blogPost.authorImage}
                  alt={blogPost.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold text-white">{blogPost.author}</p>
                  <div className="flex items-center gap-4 text-slate-400 text-sm">
                    <span>{blogPost.date}</span>
                    <span>•</span>
                    <span>{blogPost.readTime}</span>
                  </div>
                </div>
              </div>
              <ShareButtons
                url={`https://xnxv.com/blog/${blogPost.id}`}
                title={blogPost.title}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div
                className="prose dark:prose-invert prose-lg max-w-none text-slate-700 dark:text-slate-300"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
              
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Share this article</h3>
                <ShareButtons
                  url={`https://xnxv.com/blog/${blogPost.id}`}
                  title={blogPost.title}
                />
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">About the Author</h3>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={blogPost.authorImage}
                    alt={blogPost.author}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{blogPost.author}</p>
                    <p className="text-slate-500 dark:text-slate-400">Senior Developer</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                  Jane is a passionate web developer with 10+ years of experience in building modern web applications.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white hover:bg-slate-800">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            Read More Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <a
                key={i}
                href={`/blog/detail/${i}`}
                className="group block bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&q=80`}
                    alt={`Blog ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-blue-600 text-sm font-medium mb-2 block">
                    Web Development
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    Emerging Technologies in 2026
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    Discover the latest trends and innovations that will shape the future of technology and business.
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
