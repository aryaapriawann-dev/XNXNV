import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "bordered" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  hoverable?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = "default",
  padding = "md",
  hoverable = false,
  className = "",
  onClick,
}: CardProps) {
  const variantClasses = {
    default: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800",
    bordered: "bg-transparent border-2 border-zinc-300 dark:border-zinc-700",
    elevated: "bg-white dark:bg-zinc-900 shadow-lg border border-zinc-100 dark:border-zinc-800",
  };

  const paddingClasses = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  const hoverClass = hoverable
    ? "transition-all hover:shadow-xl hover:scale-[1.02] cursor-pointer"
    : "";

  return (
    <div
      className={`rounded-xl ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
