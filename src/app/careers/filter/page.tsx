"use client";

import { useState } from "react";
import { Briefcase, MapPin, Clock, DollarSign, Search, Filter, ChevronLeft, ChevronRight, ArrowRight, Building2, CheckCircle } from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: "engineering" | "product" | "design" | "marketing" | "operations";
  location: string;
  type: "Full-Time" | "Part-Time" | "Remote" | "Contract";
  experience: "Junior" | "Mid-Level" | "Senior" | "Lead";
  salaryRange: string;
  postedAt: string;
  featured?: boolean;
}

const DEPARTMENTS = [
  { id: "all", label: "Semua Divisi" },
  { id: "engineering", label: "Engineering" },
  { id: "product", label: "Product" },
  { id: "design", label: "Design" },
  { id: "marketing", label: "Marketing" },
  { id: "operations", label: "Operations" },
] as const;

const JOB_OPENINGS: JobOpening[] = [
  {
    id: "1",
    title: "Senior Next.js Full Stack Engineer",
    department: "engineering",
    location: "Jakarta (Hybrid)",
    type: "Full-Time",
    experience: "Senior",
    salaryRange: "Rp 25.000.000 - Rp 38.000.000",
    postedAt: "2 hari yang lalu",
    featured: true
  },
  {
    id: "2",
    title: "Lead UI/UX Product Designer",
    department: "design",
    location: "Remote (Indonesia)",
    type: "Remote",
    experience: "Lead",
    salaryRange: "Rp 22.000.000 - Rp 32.000.000",
    postedAt: "3 hari yang lalu",
    featured: true
  },
  {
    id: "3",
    title: "DevOps & Cloud Infrastructure Specialist",
    department: "engineering",
    location: "Bandung / Remote",
    type: "Full-Time",
    experience: "Senior",
    salaryRange: "Rp 24.000.000 - Rp 35.000.000",
    postedAt: "1 minggu yang lalu"
  },
  {
    id: "4",
    title: "Technical Product Manager (B2B SaaS)",
    department: "product",
    location: "Jakarta (Hybrid)",
    type: "Full-Time",
    experience: "Mid-Level",
    salaryRange: "Rp 18.000.000 - Rp 26.000.000",
    postedAt: "4 hari yang lalu"
  },
  {
    id: "5",
    title: "Growth & Digital Marketing Lead",
    department: "marketing",
    location: "Jakarta / Remote",
    type: "Full-Time",
    experience: "Lead",
    salaryRange: "Rp 20.000.000 - Rp 30.000.000",
    postedAt: "5 hari yang lalu"
  },
  {
    id: "6",
    title: "QA Automation Engineer (Playwright/Cypress)",
    department: "engineering",
    location: "Remote (Indonesia)",
    type: "Remote",
    experience: "Mid-Level",
    salaryRange: "Rp 14.000.000 - Rp 20.000.000",
    postedAt: "1 minggu yang lalu"
  }
];

export default function CareersFilterPage() {
  const [selectedDept, setSelectedDept] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredJobs = JOB_OPENINGS.filter((job) => {
    const matchesDept = selectedDept === "all" || job.department === selectedDept;
    const matchesType = selectedType === "all" || job.type === selectedType;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.experience.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesType && matchesSearch;
  });

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Header */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4 border border-blue-500/20">
            <Briefcase className="w-4 h-4" />
            <span>Join Our Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Peluang Karir & Posisi Terbuka
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Bangun teknologi berkelas dunia bersama tim teknis berbakat yang mengutamakan craftmanship dan inovasi.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8 space-y-6">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari lowongan berdasarkan posisi, keahlian, atau kota..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-200"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => { setSelectedDept(dept.id); setCurrentPage(1); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedDept === dept.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  }`}
                >
                  {dept.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Tipe:</span>
              <select
                value={selectedType}
                onChange={(e) => { setSelectedType(e.target.value); setCurrentPage(1); }}
                className="bg-slate-900 border border-slate-800 text-slate-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Semua Tipe</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Remote">Remote</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job List */}
        <div className="space-y-4">
          {currentJobs.map((job) => (
            <div
              key={job.id}
              className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-xl p-6 transition-all hover:shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-semibold uppercase bg-slate-800 text-blue-400 border border-slate-700">
                    {job.department}
                  </span>
                  {job.featured && (
                    <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                      Urgently Hiring
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{job.type} • {job.experience}</span>
                  </div>
                  <div className="flex items-center gap-1 font-medium text-slate-300">
                    <span>{job.salaryRange}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 pt-4 md:pt-0 border-slate-800">
                <span className="text-xs text-slate-500 md:hidden">{job.postedAt}</span>
                <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all shadow-md shadow-blue-600/20 flex items-center gap-2">
                  <span>Lamar Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800">
            <Briefcase className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-slate-300">Tidak ada lowongan yang sesuai</p>
            <p className="text-sm text-slate-500 mt-1">Coba sesuaikan filter divisi atau tipe kerja Anda</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                  currentPage === page ? "bg-blue-600 text-white" : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
