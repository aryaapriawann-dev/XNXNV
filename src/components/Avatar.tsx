import { User } from "lucide-react";

/**
 * Avatar component with image or fallback initials
 * Supports multiple sizes
 */
interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-16 w-16 text-lg",
  xl: "h-24 w-24 text-2xl",
};

export default function Avatar({
  src,
  alt,
  name,
  size = "md",
  className = "",
}: AvatarProps) {
  const initials = name?.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) || "?";

  if (src) {
    return (
      <img
        src={src}
        alt={alt || name || "Avatar"}
        className={`rounded-full object-cover ${sizeClasses[size]} ${className}`}
      />
    );
  }

  return (
    <div
      className={`rounded-full bg-zinc-900 text-white flex items-center justify-center font-medium ${sizeClasses[size]} ${className}`}
      aria-label={name}
    >
      {initials}
    </div>
  );
}
