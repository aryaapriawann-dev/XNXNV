/**
 * Breadcrumbs component for navigation path display
 */
export default function Breadcrumbs({
  items,
  className = "",
}: {
  items: Array<{ label: string; href?: string }>;
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-1 text-sm ${className}`}>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          {index > 0 && (
            <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          {item.href ? (
            <a href={item.href} className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              {item.label}
            </a>
          ) : (
            <span className="text-zinc-900 dark:text-zinc-50 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
