"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, Tech Corp",
      company: "Tech Corp",
      content: "Working with this team has been transformative for our business. Their attention to detail and technical expertise is unmatched.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=John+Doe&background=3B82F6&color=white"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "CTO, Startup Inc",
      company: "Startup Inc",
      content: "The best investment we've made this year. The team delivered beyond our expectations and the results speak for themselves.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Jane+Smith&background=8B5CF6&color=white"
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Director, Enterprise Solutions",
      company: "Enterprise Solutions",
      content: "Professional, timely, and incredibly skilled. They helped us build a platform that our customers love to use.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Michael+Johnson&background=10B981&color=white"
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Product Manager, Innovate Co",
      company: "Innovate Co",
      content: "Their understanding of our needs and ability to execute was remarkable. The final product exceeded all our expectations.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Sarah+Williams&background=EC4899&color=white"
    },
    {
      id: 5,
      name: "David Brown",
      role: "Founder, Growth Labs",
      company: "Growth Labs",
      content: "From strategy to execution, this team delivered excellence at every step. Highly recommended for any digital project.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=David+Brown&background=F59E0B&color=white"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients who have trusted us with their digital transformation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg">
                {testimonials[currentSlide].name}
              </div>
            </div>

            <div className="mt-8">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < testimonials[currentSlide].rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-slate-300 dark:text-slate-600"
                    }`}
                  />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed italic mb-8">
                "{testimonials[currentSlide].content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {testimonials[currentSlide].role} at {testimonials[currentSlide].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white dark:bg-slate-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-slate-900 dark:text-white hover:bg-blue-600 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white dark:bg-slate-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-slate-900 dark:text-white hover:bg-blue-600 hover:text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-blue-600 w-8" : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
