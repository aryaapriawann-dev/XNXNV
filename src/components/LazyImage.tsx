"use client";

import { useState, useEffect } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loader?: "default" | "blur" | "shimmer";
  placeholderColor?: string;
}

const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  loader = "default",
  placeholderColor = "#f0f0f0",
  ...props 
}: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  if (error) {
    return (
      <div className={`bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center rounded-lg overflow-hidden ${className}`}>
        <div className="text-center p-6">
          <div className="mx-auto w-16 h-16 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center mb-3">
            <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">Gagal memuat gambar</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {/* Placeholder */}
      {!loaded && (
        <div 
          className="absolute inset-0 w-full h-full transition-opacity duration-300"
          style={{
            backgroundColor: placeholderColor,
            opacity: loader === "shimmer" ? 1 : 0.5
          }}
        >
          {loader === "shimmer" && (
            <div className="w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-0 -left-[100%]" />
          )}
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
