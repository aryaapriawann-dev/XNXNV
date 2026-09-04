export default function ResourceDetailPage() {
  const resources = [
    {
      id: 1,
      title: "Complete Web Development Guide 2026",
      category: "E-Book",
      author: "XNXNV Team",
      date: "September 1, 2026",
      downloads: 1250,
      size: "4.5 MB",
      type: "PDF",
      description: "A comprehensive guide covering everything you need to know about modern web development in 2026.",
      icon: "Download"
    },
    {
      id: 2,
      title: "React Best Practices & Patterns",
      category: "E-Book",
      author: "Jane Doe",
      date: "August 28, 2026",
      downloads: 890,
      size: "3.2 MB",
      type: "PDF",
      description: "Learn the top patterns and practices for building scalable React applications.",
      icon: "Download"
    },
    {
      id: 3,
      title: "Next.js 16 Advanced Techniques",
      category: "Video Course",
      author: "John Smith",
      date: "August 25, 2026",
      downloads: 650,
      size: "1.2 GB",
      type: "MP4",
      description: "Master advanced Next.js concepts including server components, routing, and optimization.",
      icon: "Play"
    },
    {
      id: 4,
      title: "Tailwind CSS Cheat Sheet",
      category: "Reference",
      author: "XNXNV Team",
      date: "August 20, 2026",
      downloads: 2100,
      size: "0.8 MB",
      type: "PDF",
      description: "A complete reference guide for Tailwind CSS utility classes and components.",
      icon: "Book"
    },
    {
      id: 5,
      title: "TypeScript for Beginners",
      category: "Video Course",
      author: "Bob Wilson",
      date: "August 15, 2026",
      downloads: 780,
      size: "850 MB",
      type: "MP4",
      description: "Get started with TypeScript from scratch with this beginner-friendly course.",
      icon: "Play"
    },
    {
      id: 6,
      title: "API Design Standards Template",
      category: "Template",
      author: "XNXNV Team",
      date: "August 10, 2026",
      downloads: 420,
      size: "0.5 MB",
      type: "DocX",
      description: "Professional API documentation template following OpenAPI 3.0 standards.",
      icon: "FileText"
    },
    {
      id: 7,
      title: "Performance Optimization Checklist",
      category: "Checklist",
      author: "Sarah Johnson",
      date: "August 5, 2026",
      downloads: 950,
      size: "0.3 MB",
      type: "PDF",
      description: "Essential checklist for optimizing web application performance.",
      icon: "CheckCircle"
    },
    {
      id: 8,
      title: "Accessibility Guidelines",
      category: "Guide",
      author: "Mike Brown",
      date: "July 28, 2026",
      downloads: 560,
      size: "2.1 MB",
      type: "PDF",
      description: "Comprehensive accessibility guidelines for creating inclusive web experiences.",
      icon: "Shield"
    }
  ];

  const categories = ["All", "E-Book", "Video Course", "Reference", "Template", "Checklist", "Guide"];

  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Free Resources & Assets
            </h1>
            <p className="text-xl text-slate-400 mb-12">
              Download our collection of guides, templates, and courses to accelerate your development workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-6 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-colors font-medium"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold">
                      {resource.category}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">
                      {resource.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm line-clamp-2">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                      {resource.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      {resource.downloads.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 0s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 0s8-1.79 8-4M4 7c0-2.21 3.582-4 8 0s8 1.79 8 4m0 5c0 2.21-3.582 4-8 0s-8-1.79-8-4"></path>
                      </svg>
                      {resource.size}
                    </span>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    Download Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Want More Resources?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive access to premium resources and updates.
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-white text-blue-600 font-bold hover:bg-slate-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
