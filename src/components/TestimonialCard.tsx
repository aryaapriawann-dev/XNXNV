export default function TestimonialCard({ name, role, company, content, rating = 5 }: { name: string; role: string; company: string; content: string; rating?: number }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg italic">"{content}"</p>
      <div className="flex items-center">
        <div className="flex-1">
          <h4 className="font-bold text-slate-900 dark:text-white">{name}</h4>
          <p className="text-slate-500 dark:text-slate-400">{role} at {company}</p>
        </div>
      </div>
    </div>
  );
}
