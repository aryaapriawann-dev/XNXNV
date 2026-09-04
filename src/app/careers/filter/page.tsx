"use client";

import { useState } from "react";
import { Briefcase, MapPin, Clock, CheckCircle, ChevronRight, Filter, Search, UserCheck, DollarSign } from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance";
  experience: "Entry" | "Mid" | "Senior" | "Lead";
  salary: string;
  description: string;
  requirements: string[];
  postedAt: string;
  featured: boolean;
}

const departments = [
  { id: "all", name: "All Departments" },
  { id: "engineering", name: "Engineering" },
  { id: "design", name: "Design" },
  { id: "marketing", name: "Marketing" },
  { id: "sales", name: "Sales" },
  { id: "customer-success", name: "Customer Success" },
  { id: "operations", name: "Operations" },
];

const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Freelance"];
const experienceLevels = ["All", "Entry", "Mid", "Senior", "Lead"];

const jobOpenings: JobOpening[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote / Jakarta",
    type: "Full-time",
    experience: "Senior",
    salary: "Rp 15-25 juta/bulan",
    description: "We're looking for an experienced Frontend Developer to lead our product development team. You'll be working with modern technologies and building exceptional user experiences.",
    requirements: ["5+ years React experience", "Expert in TypeScript", "Strong UI/UX understanding", "Experience with state management", "Team leadership skills"],
    postedAt: "2 hari lalu",
    featured: true
  },
  {
    id: "2",
    title: "Product Designer",
    department: "Design",
    location: "Jakarta",
    type: "Full-time",
    experience: "Mid",
    salary: "Rp 10-18 juta/bulan",
    description: "Join our design team to create beautiful and intuitive interfaces for our products. You'll work closely with product managers and developers.",
    requirements: ["3+ years design experience", "Expert in Figma", "Portfolio showing strong UI skills", "Understanding of design systems", "User research experience"],
    postedAt: "4 hari lalu",
    featured: true
  },
  {
    id: "3",
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    experience: "Senior",
    salary: "Rp 12-20 juta/bulan",
    description: "Lead our marketing strategy and execution. You'll be responsible for developing and implementing marketing campaigns across multiple channels.",
    requirements: ["7+ years marketing experience", "Proven track record of growth", "Experience with digital marketing tools", "Leadership skills", "Analytical mindset"],
    postedAt: "1 minggu lalu",
    featured: false
  },
  {
    id: "4",
    title: "Junior Developer",
    department: "Engineering",
    location: "Bandung",
    type: "Full-time",
    experience: "Entry",
    salary: "Rp 5-8 juta/bulan",
    description: "Perfect opportunity for recent graduates to start their career. You'll work alongside senior developers and learn from experienced mentors.",
    requirements: ["Fresh graduate or 1 year experience", "Basic React knowledge", "Willingness to learn", "Problem-solving skills", "Team player"],
    postedAt: "3 hari lalu",
    featured: false
  },
  {
    id: "5",
    title: "Sales Representative",
    department: "Sales",
    location: "Surabaya",
    type: "Full-time",
    experience: "Entry",
    salary: "Rp 6-10 juta/bulan",
    description: "Join our sales team and help us bring our solutions to more businesses. Competitive commission structure and career growth opportunities.",
    requirements: ["0-2 years sales experience", "Excellent communication skills", "Results-driven mindset", "CRM experience", "Self-motivated"],
    postedAt: "5 hari lalu",
    featured: true
  },
  {
    id: "6",
    title: "UX Researcher",
    department: "Design",
    location: "Remote",
    type: "Contract",
    experience: "Mid",
    salary: "Rp 8-12 juta/project",
    description: "Conduct user research to inform product decisions. You'll work on various projects and help us understand our users better.",
    requirements: ["3+ years research experience", "Qualitative and quantitative methods", "Research synthesis skills", "Presentation skills", "UX knowledge"],
    postedAt: "2 minggu lalu",
    featured: false
  },
  {
    id: "7",
    title: "Technical Lead",
    department: "Engineering",
    location: "Jakarta",
    type: "Full-time",
    experience: "Lead",
    salary: "Rp 25-40 juta/bulan",
    description: "Lead our technical team and architecture decisions. You'll be responsible for technical excellence and team development.",
    requirements: ["8+ years development experience", "3+ years team leadership", "Architecture design skills", "Technical mentoring", "Agile methodology"],
    postedAt: "1 minggu lalu",
    featured: true
  },
  {
    id: "8",
    title: "Content Marketer",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    experience: "Mid",
    salary: "Rp 8-14 juta/bulan",
    description: "Create compelling content that tells our story and engages our audience. You'll work on blog posts, whitepapers, and social media.",
    requirements: ["3+ years content experience", "Excellent writing skills", "SEO knowledge", "Content strategy", "Analytics understanding"],
    postedAt: "3 hari lalu",
    featured: false
  },
  {
    id: "9",
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Jakarta",
    type: "Full-time",
    experience: "Mid",
    salary: "Rp 10-16 juta/bulan",
    description: "Ensure our customers achieve their goals with our product. You'll be the voice of the customer and help drive retention.",
    requirements: ["3+ years customer success", "Strong communication skills", "Problem resolution skills", "CRM experience", "Empathy"],
    postedAt: "2 minggu lalu",
    featured: false
  },
  {
    id: "10",
    title: "Backend Developer",
    department: "Engineering",
    location: "Bandung",
    type: "Full-time",
    experience: "Mid",
    salary: "Rp 12-20 juta/bulan",
    description: "Build scalable backend services and APIs. You'll work with modern cloud infrastructure and distributed systems.",
    requirements: ["3+ years backend experience", "Node.js or Python", "Database design", "API development", "Cloud services experience"],
    postedAt: "1 minggu lalu",
    featured: false
  },
  {
    id: "11",
    title: "Data Analyst",
    department: "Operations",
    location: "Remote",
    type: "Part-time",
    experience: "Entry",
    salary: "Rp 5-8 juta/bulan",
    description: "Analyze business data and provide insights to drive decision making. You'll work with various data sources and tools.",
    requirements: ["Data analysis skills", "SQL proficiency", "Excel/Google Sheets", "Data visualization", "Analytical mindset"],
    postedAt: "4 hari lalu",
    featured: false
  },
  {
    id: "12",
    title: "Product Manager",
    department: "Engineering",
    location: "Jakarta",
    type: "Full-time",
    experience: "Senior",
    salary: "Rp 18-30 juta/bulan",
    description: "Lead product strategy and execution. You'll work with cross-functional teams to deliver great products.",
    requirements: ["5+ years product management", "Product strategy skills", "Roadmap planning", "Agile methodology", "User-centric thinking"],
    postedAt: "1 minggu lalu",
    featured: true
  }
];

export default function CareersFilterPage() {
  const [activeDepartment, setActiveDepartment] = useState<string>("all");
  const [activeJobType, setActiveJobType] = useState<string>("All");
  const [activeExperience, setActiveExperience] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [onlyFeatured, setOnlyFeatured] = useState<boolean>(false);

  const filteredJobs = jobOpenings.filter((job) => {
    const departmentMatch = activeDepartment === "all" || job.department.toLowerCase() === activeDepartment.toLowerCase();
    const jobTypeMatch = activeJobType === "All" || job.type === activeJobType;
    const experienceMatch = activeExperience === "All" || job.experience === activeExperience;
    const searchMatch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        job.location.toLowerCase().includes(searchQuery.toLowerCase());
    const featuredMatch = !onlyFeatured || job.featured;
    return departmentMatch && jobTypeMatch && experienceMatch && searchMatch && featuredMatch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Bergabunglah dengan Kami
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Kami mencari orang-orang berbakat yang ingin membuat dampak nyata.
            Lihat posisi yang tersedia dan jadilah bagian dari tim kami.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{jobOpenings.length}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Posisi Terbuka</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {jobOpenings.filter(j => j.featured).length}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Posisi Unggulan</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {new Set(jobOpenings.map(j => j.department)).size}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Departemen</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {new Set(jobOpenings.map(j => j.location)).size}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Lokasi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Department Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeDepartment === dept.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          {/* Job Type & Experience Filter */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Tipe:</span>
              <div className="flex flex-wrap gap-2">
                {jobTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveJobType(type)}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                      activeJobType === type
                        ? "bg-indigo-600 text-white"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Level:</span>
              <div className="flex flex-wrap gap-2">
                {experienceLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setActiveExperience(level)}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                      activeExperience === level
                        ? "bg-indigo-600 text-white"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <Search className="h-5 w-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Cari posisi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-900 dark:text-white placeholder-zinc-400"
                />
              </div>
            </div>

            <div className="flex items-center justify-between bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <UserCheck className="h-5 w-5 text-zinc-400" />
                <label htmlFor="featured" className="text-sm text-zinc-700 dark:text-zinc-300">
                  Hanya Posisi Unggulan
                </label>
              </div>
              <input
                type="checkbox"
                id="featured"
                checked={onlyFeatured}
                onChange={(e) => setOnlyFeatured(e.target.checked)}
                className="h-5 w-5 rounded text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {activeDepartment === "all" ? "Semua Posisi" : departments.find(d => d.id === activeDepartment)?.name}
              {activeJobType !== "All" && ` • ${activeJobType}`}
              {activeExperience !== "All" && ` • ${activeExperience}`}
              {onlyFeatured && " (Unggulan)"}
            </h2>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm">
              Menampilkan {filteredJobs.length} dari {jobOpenings.length} posisi
            </div>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className={`group bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border ${
                    job.featured
                      ? "border-indigo-600 shadow-lg shadow-indigo-600/20"
                      : "border-zinc-100 dark:border-zinc-800"
                  }`}
                >
                  {job.featured && (
                    <div className="absolute top-6 left-6 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
                      UNGGULAN
                    </div>
                  )}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                        {job.title}
                      </h3>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        {job.postedAt}
                      </span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                      {job.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <MapPin className="h-4 w-4 text-zinc-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <Clock className="h-4 w-4 text-zinc-400" />
                      {job.type} • {job.experience} Level
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <Briefcase className="h-4 w-4 text-zinc-400" />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <DollarSign className="h-4 w-4 text-zinc-400" />
                      {job.salary}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">Persyaratan:</h4>
                    <ul className="space-y-2">
                      {job.requirements.slice(0, 4).map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
                    Lamar Sekarang <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-10 w-10 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Tidak ada posisi ditemukan
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Coba ubah filter department, tipe, atau kata kunci pencarian
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Beli Posisi yang Tepat?
          </h2>
          <p className="text-indigo-100 text-xl mb-10">
            Hubungi kami untuk mengetahui lebih lanjut tentang budaya kerja kami
            dan peluang karir yang tersedia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors">
              Hubungi HR
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition-colors">
              Pelajari Budaya Kami
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
