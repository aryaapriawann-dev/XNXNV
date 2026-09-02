"use client";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = ""
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${className} ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
        {title}
      </h2>
      <div className={`h-1.5 w-20 bg-indigo-600 rounded-full ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
