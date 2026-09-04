"use client";

import { useState } from "react";
import { Star, Calendar, User, Briefcase, MapPin, Clock, Search, Filter, ChevronLeft, ChevronRight, Mail, Phone, Globe, Code, Zap, TrendingUp, CheckCircle } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  location: string;
  level: "junior" | "mid" | "senior" | "lead" | "manager";
  bio: string;
  skills: string[];
  avatar: string;
  email: string;
  phone: string;
  joinDate: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "development", label: "Development" },
  { id: "design", label: "Design" },
  { id: "product", label: "Product" },
  { id: "business", label: "Business" },
  { id: "support", label: "Support" },
] as const;

const LEVELS = [
  { id: "all", label: "Semua Level" },
  { id: "junior", label: "Junior" },
  { id: "mid", label: "Mid" },
  { id: "senior", label: "Senior" },
  { id: "lead", label: "Lead" },
  { id: "manager", label: "Manager" },
] as const;

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Senior Full Stack Developer",
    department: "development",
    location: "Jakarta, Indonesia",
    level: "senior",
    bio: "Expert in React, Next.js, and Node.js with 8+ years experience building scalable web applications.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    avatar: "https://placehold.co/200x200/1e293b/cbd5e1?text=JD",
    email: "john.doe@xnxnv.com",
    phone: "+62 812-3456-7890",
    joinDate: "2024-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Product Designer",
    department: "design",
    location: "Bandung, Indonesia",
    level: "senior",
    bio: "UI/UX designer specializing in creating intuitive and beautiful user interfaces for web and mobile applications.",
    skills: ["Figma", "Sketch", "Adobe XD", "Prototyping", "User Research"],
    avatar: "https://placehold.co/200x200/1e293b/cbd5e1?text=JS",
    email: "jane.smith@xnxnv.com",
    phone: "+62 812-3456-7891",
    joinDate: "2024-03-20",
  },
  {
    id: "3",
    name: "Bob Johnson",
    role: "Product Manager",
    department: "product",
    location: "Surabaya, Indonesia",
    level: "manager",
    bio: "Experienced product manager with track record of launching successful SaaS products in competitive markets.",
    skills: ["Agile", "Scrum", "Product Strategy", "Roadmapping", "Stakeholder Management"],
    avatar: "https://placehold.co/200x200/1e293b/cbd5e1?text=BJ",
    email: "bob.johnson@xnxnv.com",
    phone: "+62 812-3456-7892",
    joinDate: "2024-02-10",
  },
  {
    id: "4",
    name: "Alice Williams",
    role: "Junior Frontend Developer",
    department: "development",
    location: "Yogyakarta, Indonesia",
    level: "junior",
    bio: "Passionate frontend developer learning and growing with modern web technologies.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    avatar: "https://placehold.co/200x200/1e293b/cbd5e1?text=AW",
    email: "alice.williams@xnxnv.com",
    phone: "+62 812-3456-7893",
    joinDate: "2026-06-01",
  },
  {
    id: "5",
    name: "Charlie Brown",
    role: "Senior Backend Engineer",
    department: "development",
    location: "Jakarta, Indonesia",
    level: "senior",
    bio: "Backend specialist with expertise in microservices architecture and cloud infrastructure.",
    skills: ["Go", "Python", "Docker", "Kubernetes", "AWS"],
    avatar: "https://placehold.co/200x200/1e293b/cbd5e1?text=CB",
    email: "charlie.brown@xnxnv.com",
    phone: "+62 812-3456-7894",
    joinDate: "2024-04-05",
  },
  {
    id: "6",
    name: "Diana Prince",
    role: "UX Researcher",
    department: "design",
    location: "Bali, Indonesia",
    level: "mid",
    bio: "Data-driven UX researcher focused on creating user-centered designs based on real user insights.",
    skills: ["User Interviews", "Surveys", "A/B Testing", "Analytics", "User Testing"],
    avatar: "https://placehold.co/200x200/1e293b/cbd5e1?text=DP",
    email: "diana.prince@xnxnv.com",
    phone: "+62 812-3456-7895",
    joinDate: "2024-05-15",
  },
  {
    id: "7",
    name: "Eve Wilson",
    role: "Customer Success Manager",
    department: "support",
    location: "Medan, Indonesia",
    level: "lead",
    bio: "Dedicated to ensuring customer satisfaction and success through proactive relationship management.",
    skills: ["Customer Success", "Onboarding", "Training", "Account Management", "CRM"],
    avatar: "https://placehold.co/200x200/1e293b/cbd5e1?text=EW",
    email: "eve.wilson@xnxnv.com",
    phone: "+62 812-3456-7896",
    joinDate: "2024-07-20",
  },
];

const formatJoinDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString("id-ID", { 
    month: "long", 
    year: "numeric" 
  });
};

export default function TeamFilterPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 6;

  const filteredMembers = TEAM_MEMBERS.filter((member) => {
    const matchesDepartment = selectedDepartment === "all" || member.department === selectedDepartment;
    const matchesLevel = selectedLevel === "all" || member.level === selectedLevel;
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesLevel && matchesSearch;
  });

  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
  const currentMembers = filteredMembers.slice(
    (currentPage - 1) * membersPerPage,
    currentPage * membersPerPage
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-center text-lg text-slate-400 max-w-2xl mx-auto">
            Temui para ahli yang bekerja untuk membantu kesuksesan bisnis Anda
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters Section */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari anggota tim (e.g. name, role, department)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap gap-3 justify-center">
            {/* Department Filters */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedDepartment(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                    selectedDepartment === category.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Level Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {LEVELS.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  selectedLevel === level.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span>Department: <strong className="text-slate-200">{selectedDepartment === "all" ? "Semua" : CATEGORIES.find(c => c.id === selectedDepartment)?.label}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Level: <strong className="text-slate-200">{selectedLevel === "all" ? "Semua" : LEVELS.find(l => l.id === selectedLevel)?.label}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Members: <strong className="text-slate-200">{filteredMembers.length}</strong></span>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentMembers.map((member) => {
            const DepartmentIcon = 
              member.department === "development" ? Code :
              member.department === "design" ? Zap :
              member.department === "product" ? TrendingUp :
              member.department === "business" ? Briefcase :
              Mail;

            const LevelBadge = 
              member.level === "junior" ? "bg-purple-500/10 text-purple-400" :
              member.level === "mid" ? "bg-blue-500/10 text-blue-400" :
              member.level === "senior" ? "bg-green-500/10 text-green-400" :
              member.level === "lead" ? "bg-yellow-500/10 text-yellow-400" :
              "bg-red-500/10 text-red-400";

            return (
              <div
                key={member.id}
                className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
              >
                <div className="p-6">
                  {/* Avatar & Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-slate-700"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{member.name}</h3>
                        <p className="text-blue-400 text-sm">{member.role}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${LevelBadge}`}>
                      <span className="capitalize">{member.level}</span>
                    </div>
                  </div>

                  {/* Department Badge */}
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-medium mb-4 ${
                    member.department === "development" ? "bg-blue-500/10 text-blue-400" :
                    member.department === "design" ? "bg-purple-500/10 text-purple-400" :
                    member.department === "product" ? "bg-green-500/10 text-green-400" :
                    member.department === "business" ? "bg-yellow-500/10 text-yellow-400" :
                    "bg-orange-500/10 text-orange-400"
                  }`}>
                    <span className="capitalize">{member.department}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.skills.slice(0, 4).map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-500">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-3 text-slate-400">
                      <MapPin className="w-4 h-4" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span>Bergabung: {formatJoinDate(member.joinDate)}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <Mail className="w-4 h-4" />
                      <span className="truncate max-w-[200px]">{member.email}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-6">
                    <button className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </button>
                    <button className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {currentMembers.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-4">
              <Search className="w-8 h-8 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tidak ada anggota tim ditemukan</h3>
            <p className="text-slate-400">Coba ubah filter atau kata kunci pencarian Anda</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDepartment("all");
                setSelectedLevel("all");
              }}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
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
