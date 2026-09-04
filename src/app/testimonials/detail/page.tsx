import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialDetailPage() {
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "CTO",
      company: "Tech Indonesia",
      content: "Our partnership with XNXNV transformed our digital presence. Their team delivered beyond expectations with innovative solutions and exceptional support.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Budi+Santoso&background=0D8ABC&color=fff"
    },
    {
      id: 2,
      name: "Siti Aminah",
      role: "Marketing Director",
      company: "Global Solutions",
      content: "The team's expertise in web development and UX design helped us increase our conversion rate by 150%. Highly recommended!",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Siti+Aminah&background=10B981&color=fff"
    },
    {
      id: 3,
      name: "Ahmad Rizki",
      role: "Product Manager",
      company: "Innovation Hub",
      content: "Working with XNXNV was a game-changer for our startup. Their Agile approach and technical excellence made all the difference.",
      rating: 4,
      image: "https://ui-avatars.com/api/?name=Ahmad+Rizki&background=F59E0B&color=fff"
    },
    {
      id: 4,
      name: "Dewi Lestari",
      role: "CEO",
      company: "StartUp Inc",
      content: "From concept to launch, the XNXNV team demonstrated professionalism and creativity. Our platform now serves 10,000+ users monthly.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Dewi+Lestari&background=EC4899&color=fff"
    },
    {
      id: 5,
      name: "Eko Pratama",
      role: "Operations Director",
      company: "Logistics Pro",
      content: "Their mobile app development skills are outstanding. The app received 4.8 stars on both app stores with excellent performance.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Eko+Pratama&background=8B5CF6&color=fff"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              What Our Clients Say
            </h1>
            <p className="text-xl text-slate-400 mb-12">
              Real stories from real businesses. See how we've helped companies achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <TestimonialCard
                key={item.id}
                name={item.name}
                role={item.role}
                company={item.company}
                content={item.content}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with XNXNV.
          </p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
}
