"use client";

import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
}

export default function Testimonials({ 
  testimonials, 
  className = "" 
}: TestimonialsProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700"
        >
          <div className="flex items-start gap-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-zinc-200 dark:fill-zinc-700 text-zinc-200 dark:text-zinc-700"
                    }`}
                  />
                ))}
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {testimonial.name}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
