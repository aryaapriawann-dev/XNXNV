"use client";

/**
 * Lazy image component with blur placeholder.
 * Uses Intersection Observer for lazy loading.
 */
import { useState, useEffect, useRef } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
}

export default function LazyImage({
  src,
  alt,
  className = "",
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2394a3b8'%3E%3Crect width='24' height='24' fill='%2394a3b8'/%3E%3C/svg%3E",
  width,
  height,
  priority = false,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div className={`relative inline-block ${className}`}>
      {!isLoaded && (
        <div
          className="w-full h-full animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded"
          style={{ width, height }}
        >
          <img
            src={placeholder}
            alt=""
            className="w-full h-full object-cover"
            style={{ width, height }}
          />
        </div>
      )}
      {isVisible && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`w-full h-full object-cover rounded transition-opacity ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ width, height }}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
      {hasError && (
        <div
          className="w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-400 text-sm rounded"
          style={{ width, height }}
        >
          Gambar tidak ditemukan
        </div>
      )}
    </div>
  );
}
