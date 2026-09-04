"use client";

import { useState } from "react";
import { Briefcase, MapPin, Clock, DollarSign, CheckCircle, ArrowRight, Share2, MessageCircle } from "lucide-react";
import Link from "next/link";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Technology",
    location: "Remote / Jakarta",
    type: "Full-time",
    salary: "Rp 15-25 Juta",
    posted: "2024-09-01",
    description: "We are looking for an experienced Senior Frontend Developer to lead our web application projects. You will work with a talented team to build scalable and performant web applications using modern technologies.",
    requirements: [
      "5+ years of experience with React/Next.js",
      "Deep understanding of TypeScript",
      "Experience with state management (Redux, Zustand)",
      "Knowledge of CI/CD pipelines",
      "Strong problem-solving skills",
    ],
    benefits: [
      "Health insurance",
      "Performance bonuses",
      "Flexible working hours",
      "Remote work options",
      "Professional development budget",
    ],
  },
  {
    id: "2",
    title: "Backend Engineer",
    department: "Technology",
    location: "Jakarta",
    type: "Full-time",
    salary: "Rp 12-20 Juta",
    posted: "2024-09-02",
    description: "Join our backend team to build robust APIs and microservices. You will work with Node.js, Python, and various databases to create scalable backend solutions.",
    requirements: [
      "3+ years of backend development experience",
      "Proficiency in Node.js or Python",
      "Experience with PostgreSQL or MongoDB",
      "Knowledge of Docker and cloud platforms",
      "Understanding of RESTful APIs",
    ],
    benefits: [
      "Transportation allowance",
      "Meal subsidies",
      "Gym membership",
      "Annual leave 12+ days",
      "Bonus structure",
    ],
  },
  {
    id: "3",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Contract",
    salary: "Rp 8-15 Juta/bulan",
    posted: "2024-09-03",
    description: "We need a creative UI/UX designer to improve our product interfaces. You will collaborate with product managers and developers to create intuitive and beautiful user experiences.",
    requirements: [
      "Portfolio demonstrating strong design skills",
      "Proficiency in Figma or Adobe XD",
      "Understanding of design systems",
      "Knowledge of user research methodologies",
      "Ability to work in agile environment",
    ],
    benefits: [
      "Project-based payments",
      "Flexible schedule",
      "Collaborative team environment",
      "Opportunity for long-term collaboration",
      "Creative freedom",
    ],
  },
  {
    id: "4",
    title: "Product Manager",
    department: "Product",
    location: "Jakarta",
    type: "Full-time",
    salary: "Rp 20-35 Juta",
    posted: "2024-09-01",
    description: "We are seeking a strategic Product Manager to drive our product roadmap. You will work closely with engineering, design, and marketing teams to deliver successful products.",
    requirements: [
      "5+ years of product management experience",
      "Strong analytical skills",
      "Experience with SaaS products",
      "Knowledge of agile methodologies",
      "Excellent communication skills",
    ],
    benefits: [
      "Comprehensive insurance",
      "Stock options",
      "Executive travel budget",
      "Conference attendance",
      "Career advancement opportunities",
    ],
  },
  {
    id: "5",
    title: "DevOps Engineer",
    department: "Technology",
    location: "Remote / Bandung",
    type: "Full-time",
    salary: "Rp 18-28 Juta",
    posted: "2024-09-02",
    description: "Join our infrastructure team to build and maintain scalable cloud infrastructure. You will work with AWS, Kubernetes, and modern DevOps practices.",
    requirements: [
      "4+ years of DevOps experience",
      "Expertise with AWS or Google Cloud",
      "Experience with Kubernetes",
      "Knowledge of Terraform",
      "Strong scripting skills",
    ],
    benefits: [
      "Cloud credits",
      "Hardware allowance",
      "Learning budget",
      "Work-from-home setup",
      "Performance rewards",
    ],
  },
  {
    id: "6",
    title: "QA Engineer",
    department: "Technology",
    location: "Jakarta",
    type: "Full-time",
    salary: "Rp 10-18 Juta",
    posted: "2024-09-03",
    description: "We need a meticulous QA Engineer to ensure the quality of our products. You will develop and execute test plans to deliver high-quality software.",
    requirements: [
      "3+ years of QA experience",
      "Experience with automated testing",
      "Knowledge of testing frameworks",
      "Understanding of software development lifecycle",
      "Attention to detail",
    ],
    benefits: [
      "Overtime pay",
      "Performance bonuses",
      "Team outings",
      "Professional training",
      "Career growth",
    ],
  },
];

const departments = ["Semua", "Technology", "Design", "Product", "Marketing", "Operations"];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("Semua");

  const filteredJobs = selectedDepartment === "Semua"
    ? jobs
    : jobs.filter((job) => job.department === selectedDepartment);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Gabung Tim Kami</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Temukan peluang karier di XNXV. Kami mencari talenta berbakat yang bersemangat untuk membangun solusi digital inovatif.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">{jobs.length}</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Posisi Terbuka</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">5+</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Department</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Remote Friendly</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">4.8</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Employee Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Kenapa Pilih XNXV?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Kami menciptakan lingkungan kerja yang mendukung pertumbuhan profesional dan pribadi Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Briefcase />, title: "Kesempatan Berkembang", description: "Akses pelatihan dan pengembangan karier yang terstruktur" },
              { icon: <DollarSign />, title: "Kompetitif Compensation", description: "Gaji dan benefit yang kompetitif sesuai industri" },
              { icon: <Clock />, title: "Work-Life Balance", description: "Jadwal kerja fleksibel dan budaya kerja seimbang" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg">
                <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Posisi Terbuka</h2>
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedDepartment === dept
                      ? "bg-indigo-600 text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                        <Briefcase className="h-3 w-3" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                        <Clock className="h-3 w-3" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-emerald-600">{job.salary}</div>
                    <div className="text-sm text-zinc-500">Diposting: {new Date(job.posted).toLocaleDateString("id-ID")}</div>
                  </div>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">{job.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-indigo-600" />
                      Kualifikasi
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      Benefit
                    </h4>
                    <ul className="space-y-2">
                      {job.benefits.map((ben, idx) => (
                        <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          {ben}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-4">
                  <button className="flex items-center gap-2 text-zinc-500 hover:text-indigo-600 transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span className="text-sm">Share</span>
                  </button>
                  <Link
                    href={`/careers/${job.id}`}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-500 dark:text-zinc-400">Tidak ada lowongan yang sesuai dengan kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Belum Menemukan Posisi yang Cocok?</h2>
          <p className="text-indigo-100 mb-10 text-lg">
            Kirimkan CV Anda ke kami. Kami akan menyimpannya dan menghubungi Anda jika ada lowongan yang cocok.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
          >
            Kirim CV spontaneous
          </Link>
        </div>
      </section>
    </div>
  );
}
