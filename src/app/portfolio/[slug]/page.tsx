import ShareButtons from "@/components/ShareButtons";

const portfolioItem = {
  id: "1",
  title: "E-Commerce Platform Redesign",
  category: "Web Development",
  client: "Retail Pro Indonesia",
  date: "August 2026",
  duration: "4 months",
  tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
  description: "A comprehensive redesign of a major Indonesian e-commerce platform focusing on user experience and conversion optimization.",
  results: [
    "45% increase in conversion rate",
    "30% reduction in page load time",
    "50% improvement in mobile user engagement",
    "24/7 customer support system implementation"
  ],
  images: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    "https://images.unsplash.com/photo-1556742049-0d83d7676543?w=800&q=80",
    "https://images.unsplash.com/photo-1566174053790-27e01a6127aa?w=800&q=80"
  ]
};

export default function PortfolioSlugPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              {portfolioItem.tags.map(tag => (
                <span key={tag} className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {portfolioItem.title}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg">
              <div>
                <p className="text-slate-400">Client</p>
                <p className="text-white font-medium">{portfolioItem.client}</p>
              </div>
              <div>
                <p className="text-slate-400">Date</p>
                <p className="text-white font-medium">{portfolioItem.date}</p>
              </div>
              <div>
                <p className="text-slate-400">Duration</p>
                <p className="text-white font-medium">{portfolioItem.duration}</p>
              </div>
              <div>
                <p className="text-slate-400">Category</p>
                <p className="text-white font-medium">{portfolioItem.category}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioItem.images.map((img, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden shadow-xl">
                    <img src={img} alt={`Project image ${idx + 1}`} className="w-full h-64 md:h-80 object-cover" />
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl overflow-hidden shadow-xl">
                <img src={portfolioItem.images[2]} alt="Project overview" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Project Overview</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {portfolioItem.description}
                </p>
                <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Key Results</h4>
                <ul className="space-y-3">
                  {portfolioItem.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {result}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                  <ShareButtons
                    url={`https://xnxv.com/portfolio/${portfolioItem.id}`}
                    title={portfolioItem.title}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready for Your Next Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's transform your ideas into reality. Our team is ready to help you achieve your digital goals.
            </p>
            <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg">
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
