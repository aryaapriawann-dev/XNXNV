"use client";

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

export function Skeleton({
  width = "100%",
  height = "20px",
  borderRadius = "4px",
  className = ""
}: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-zinc-200 dark:bg-zinc-700 rounded ${className}`}
      style={{
        width,
        height,
        borderRadius
      }}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-sm">
      <Skeleton height="160px" className="w-full rounded-none" />
      <div className="p-4">
        <Skeleton width="60%" height="20px" className="mb-3" />
        <Skeleton width="100%" height="16px" className="mb-2" />
        <Skeleton width="80%" height="16px" className="mb-4" />
        <div className="flex gap-2">
          <Skeleton width="60px" height="24px" />
          <Skeleton width="40px" height="24px" />
        </div>
      </div>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
      <Skeleton height="180px" className="w-full" />
      <div className="p-4">
        <Skeleton width="40%" height="14px" className="mb-2 text-indigo-600" />
        <Skeleton width="90%" height="20px" className="mb-2" />
        <Skeleton width="70%" height="18px" className="mb-4" />
        <Skeleton width="30%" height="24px" className="mb-4" />
        <div className="flex gap-3">
          <Skeleton width="48px" height="48px" borderRadius="50%" />
          <Skeleton width="48px" height="48px" borderRadius="50%" />
          <Skeleton width="48px" height="48px" borderRadius="50%" />
        </div>
      </div>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
      <Skeleton height="200px" className="w-full" />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Skeleton width="32px" height="32px" borderRadius="50%" />
          <Skeleton width="80px" height="16px" />
        </div>
        <Skeleton width="90%" height="24px" className="mb-3" />
        <Skeleton width="100%" height="16px" className="mb-2" />
        <Skeleton width="95%" height="16px" className="mb-4" />
        <Skeleton width="50%" height="20px" />
      </div>
    </div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-100 dark:border-zinc-700">
      <div className="w-14 h-14 rounded-xl bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center mb-4">
        <Skeleton width="28px" height="28px" />
      </div>
      <Skeleton width="70%" height="20px" className="mb-3" />
      <Skeleton width="90%" height="16px" className="mb-2" />
      <Skeleton width="85%" height="16px" className="mb-2" />
    </div>
  );
}

export function TeamCardSkeleton() {
  return (
    <div className="flex flex-col items-center text-center">
      <Skeleton width="120px" height="120px" borderRadius="50%" className="mb-4" />
      <Skeleton width="80%" height="20px" className="mb-2" />
      <Skeleton width="60%" height="16px" className="mb-3" />
      <Skeleton width="100%" height="14px" className="mb-2" />
    </div>
  );
}

export function StatsCardSkeleton() {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 text-center shadow-sm">
      <Skeleton width="48px" height="48px" className="mx-auto mb-4" />
      <Skeleton width="60%" height="32px" className="mb-2" />
      <Skeleton width="40%" height="16px" />
    </div>
  );
}

export function SectionSkeleton({ title, items = 3 }: { title: string; items?: number }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Skeleton width="30%" height="28px" className="mx-auto mb-4" />
        <Skeleton width="60%" height="16px" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: items }).map((_, i) => (
          <div key={i}>
            <ServiceCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
}
