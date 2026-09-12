/**
 * Testimonials component displaying customer testimonials in a responsive grid.
 * Includes rating stars, avatar initials, and company info.
 */
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    id: "1",
    name: "Budi Santoso",
    role: "CEO",
    company: "TechStart Indonesia",
    content: "Testimoni 1",
    rating: 5,
  },
  {
    id: "2",
    name: "Siti Rahayu",
    role: "CTO",
    company: "E-Commerce Pro",
    content: "Testimoni 2",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 text-center">
          Testimoni Klien
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
}
