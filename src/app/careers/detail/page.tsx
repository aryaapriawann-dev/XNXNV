export default function CareerDetailPage() {
  const job = {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Jakarta, Indonesia",
    type: "Full Time",
    experience: "5+ years",
    description: "We're looking for an experienced Full Stack Developer to join our growing engineering team. You'll work on cutting-edge web applications using Next.js, React, and modern backend technologies.",
    responsibilities: [
      "Develop and maintain high-quality web applications using Next.js and React",
      "Collaborate with product managers and designers to define and implement features",
      "Write clean, maintainable, and testable code",
      "Participate in code reviews and provide constructive feedback",
      "Optimize applications for maximum performance and scalability",
      "Troubleshoot and debug issues across the entire stack"
    ],
    requirements: [
      "5+ years of experience in full stack web development",
      "Strong proficiency in Next.js, React, and TypeScript",
      "Experience with RESTful APIs and GraphQL",
      "Knowledge of database systems (PostgreSQL, MongoDB)",
      "Understanding of modern frontend build tools and workflows",
      "Excellent problem-solving skills and attention to detail",
      "Strong communication and collaboration skills",
      "Experience with Docker and cloud platforms (AWS, GCP, or Azure)"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Health insurance and medical allowances",
      "Flexible working hours and remote work options",
      "Professional development budget",
      "Annual team retreats and team-building activities",
      "Modern office space with excellent facilities",
      "Opportunity to work on challenging and impactful projects"
    ]
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                {job.department}
              </span>
              <span className="bg-green-600 px-4 py-2 rounded-full text-sm font-medium">
                {job.type}
              </span>
              <span className="bg-purple-600 px-4 py-2 rounded-full text-sm font-medium">
                {job.location}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {job.title}
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Join our team and help shape the future of digital solutions
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
              About the Role
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {job.description}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
              Key Responsibilities
            </h2>
            <div className="space-y-4">
              {job.responsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-slate-700 dark:text-slate-300">{resp}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
              Requirements
            </h2>
            <div className="space-y-4">
              {job.requirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-slate-700 dark:text-slate-300">{req}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {job.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl"
                >
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-slate-700 dark:text-slate-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We'd love to hear from you. Submit your application and let's build something amazing together.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            Other Open Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <a
                key={i}
                href={`/careers/detail/${i}`}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    Engineering
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    Remote
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                  {i === 1 ? "Senior Frontend Developer" : "DevOps Engineer"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Join our team to build innovative web applications and infrastructure.
                </p>
                <div className="flex items-center gap-4 text-sm font-medium text-blue-600">
                  <span>View Details</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
