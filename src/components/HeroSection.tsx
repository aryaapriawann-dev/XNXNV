"use client";

import { ChevronRight, Zap, Shield, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

/**
 * Hero section component
 * Displays a full-screen hero with background effects, headline, and CTA buttons
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"></div>

      {/* Animated Background Shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            Next generation platform
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Build faster.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Ship smarter.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl">
            A modern, full-featured Next.js starter with every component you need.
            Clean code, dark mode, and built for scale.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="#get-started"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 font-medium rounded-xl hover:bg-white/90 transition-colors"
            >
              Get Started
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
            >
              View Features
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="mt-12 flex flex-wrap gap-3">
            {[
              { icon: <Shield className="w-4 h-4" />, label: "Secure by default" },
              { icon: <TrendingUp className="w-4 h-4" />, label: "Scalable growth" },
              { icon: <Users className="w-4 h-4" />, label: "Team collaboration" },
            ].map((feature) => (
              <div
                key={feature.label}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm backdrop-blur-sm"
              >
                {feature.icon}
                {feature.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
