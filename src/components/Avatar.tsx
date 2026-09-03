import { User } from "lucide-react";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function Avatar({ 
  src, 
  alt, 
  name, 
  size = "md", 
  className = "" 
}: AvatarProps) {
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-16 w-16 text-lg",
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center overflow-hidden ${className}`}
    >
      {src ? (
        <img src={src} alt={alt || name || "Avatar"} className="h-full w-full object-cover" />
      ) : name ? (
        <span className="font-semibold text-white">{getInitials(name)}</span>
      ) : (
        <User className="h-1/2 w-1/2 text-white" />
      )}
    </div>
  );
}
