"use client";

/**
 * Section title component for page sections
 * Displays a main title with optional subtitle and centering
 */
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
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className={`text-3xl font-bold text-zinc-900 dark:text-zinc-50 ${centered ? "text-center" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 text-zinc-600 dark:text-zinc-400 ${centered ? "text-center" : "text-left"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
