import { ArrowRight, Code, Layout, Zap } from "lucide-react";
import Link from "next/link";

/**
 * Hero section component
 * Displays features with icons, title, description, and CTA buttons
 */
export default function Hero() {
  const features = [
    { icon: Code, title: "Developer", desc: "Clean, scalable code" },
    { icon: Layout, title: "Designer", desc: "Modern, intuitive UI" },
    { icon: Zap, title: "Fast", desc: "Optimized performance" },
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-900 py-24 sm:py-32">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-600/20 to-transparent" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Next generation platform
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Build faster.{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Ship smarter.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A modern, full-featured Next.js starter with every component you need.
            Clean code, dark mode, and built for scale.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="#get-started"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              View Features
            </Link>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50"
              >
                <feature.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-3" />
                <h3 className="font-medium text-zinc-900 dark:text-zinc-50">{feature.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
