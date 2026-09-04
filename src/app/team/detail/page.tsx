"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Globe, Calendar, UserCheck, Award, Briefcase, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "Engineering" | "Design" | "Marketing" | "Sales" | "Management" | "Support";
  email: string;
  phone: string;
  location: string;
  joined: string;
  bio: string;
  skills: string[];
  projects: number;
  achievements: string[];
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const departments = ["Semua", "Engineering", "Design", "Marketing", "Sales", "Management", "Support"];

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Budi Santoso",
    role: "CTO & Co-Founder",
    department: "Management",
    email: "budi.santoso@xvpnx.com",
    phone: "+62 812 3456 7890",
    location: "Jakarta, Indonesia",
    joined: "2022",
    bio: "Tech visionary dengan pengalaman lebih dari 15 tahun di industri digital dan startup ecosystem.",
    skills: ["Leadership", "Tech Strategy", "AI & ML", "Product Development"],
    projects: 45,
    achievements: ["Scaled platform to 1M+ users", "Raised $5M in Series A", "Built 10+ successful products"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    social: { linkedin: "#", twitter: "#", website: "#" },
  },
  {
    id: "2",
    name: "Siti Rahayu",
    role: "Head of Design",
    department: "Design",
    email: "siti.rahayu@xvpnx.com",
    phone: "+62 812 3456 7891",
    location: "Bandung, Indonesia",
    joined: "2023",
    bio: "Award-winning designer dengan fokus pada user-centered design dan design systems.",
    skills: ["UI/UX Design", "Figma", "Design Systems", "Prototyping"],
    projects: 32,
    achievements: ["Won 3 design awards", "Built company design system", "Improved UX metrics by 40%"],
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "3",
    name: "Andi Wijaya",
    role: "Senior Frontend Developer",
    department: "Engineering",
    email: "andi.wijaya@xvpnx.com",
    phone: "+62 812 3456 7892",
    location: "Surabaya, Indonesia",
    joined: "2023",
    bio: "Passionate developer dengan expertise di React ecosystem dan modern web technologies.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    projects: 28,
    achievements: ["Leading 5+ projects", "Mentored 3 junior devs", "Optimized app performance by 60%"],
    avatar: "https://images.unsplash.com/photo-1519244703814-5e3e99389873?q=80&w=2070&auto=format&fit=crop",
    social: { linkedin: "#", twitter: "#", website: "#" },
  },
  {
    id: "4",
    name: "Dewi Lestari",
    role: "Product Manager",
    department: "Management",
    email: "dewi.lestari@xvpnx.com",
    phone: "+62 812 3456 7893",
    location: "Jakarta, Indonesia",
    joined: "2023",
    bio: "Strategic product leader dengan track record successful product launches di startup dan enterprise.",
    skills: ["Product Strategy", "Agile", "User Research", "Roadmapping"],
    projects: 15,
    achievements: ["Launched 5 successful products", "Increased revenue by 200%", "Built cross-functional teams"],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop",
    social: { linkedin: "#" },
  },
  {
    id: "5",
    name: "Rizki Pratama",
    role: "Marketing Specialist",
    department: "Marketing",
    email: "rizki.pratama@xvpnx.com",
    phone: "+62 812 3456 7894",
    location: "Denpasar, Indonesia",
    joined: "2024",
    bio: "Digital marketing enthusiast dengan expertise di SEO, content marketing, dan social media.",
    skills: ["SEO", "Content Marketing", "Social Media", "Analytics"],
    projects: 22,
    achievements: ["Grew social media by 300%", "Improved organic traffic by 150%", "Generated 500+ leads/month"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop",
    social: { linkedin: "#", twitter: "#", website: "#" },
  },
  {
    id: "6",
    name: "Putri Anggraini",
    role: "Customer Support Lead",
    department: "Support",
    email: "putri.anggraini@xvpnx.com",
    phone: "+62 812 3456 7895",
    location: "Medan, Indonesia",
    joined: "2024",
    bio: "Customer success advocate dengan komitmen tinggi terhadap customer satisfaction.",
    skills: ["Customer Support", "CRM", "Communication", "Problem Solving"],
    projects: 18,
    achievements: ["Achieved 98% CSAT", "Built support team from ground up", "Reduced response time by 50%"],
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2070&auto=format&fit=crop",
    social: { linkedin: "#", twitter: "#" },
  },
];

export default function TeamDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview");

  const member = teamMembers.find((m) => m.id === params.id);

  if (!member) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center py-24">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Member not found</h2>
        <Link href="/team" className="mt-4 text-indigo-600 hover:text-indigo-700">
          ← Back to Team
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/team"
          className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          Back to Team
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-48 h-48 rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 px-4 py-2 rounded-lg">
                <span className="font-semibold">{member.department}</span>
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{member.name}</h1>
              <p className="text-2xl text-indigo-300 mb-4">{member.role}</p>
              <p className="text-zinc-300 max-w-2xl mb-6">{member.bio}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {member.social.website && (
                  <a href={member.social.website} className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Globe className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-1">
            {[
              { id: "overview", label: "Overview", icon: UserCheck },
              { id: "projects", label: "Projects", icon: Briefcase },
              { id: "skills", label: "Skills", icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                        <Mail className="h-6 w-6 text-indigo-600" />
                        <div>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Email</p>
                          <a href={`mailto:${member.email}`} className="text-zinc-900 dark:text-white hover:text-indigo-600">
                            {member.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                        <Phone className="h-6 w-6 text-indigo-600" />
                        <div>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Phone</p>
                          <a href={`tel:${member.phone}`} className="text-zinc-900 dark:text-white hover:text-indigo-600">
                            {member.phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                        <MapPin className="h-6 w-6 text-indigo-600" />
                        <div>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Location</p>
                          <p className="text-zinc-900 dark:text-white">{member.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                        <Calendar className="h-6 w-6 text-indigo-600" />
                        <div>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Joined</p>
                          <p className="text-zinc-900 dark:text-white">{member.joined}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Achievements</h3>
                    <ul className="space-y-3">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                          <Award className="h-5 w-5 text-indigo-600 mt-0.5" />
                          <span className="text-zinc-700 dark:text-zinc-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "projects" && (
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Projects ({member.projects})</h3>
                  <div className="space-y-4">
                    {Array.from({ length: Math.min(5, member.projects) }).map((_, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                        <div>
                          <h4 className="font-semibold text-zinc-900 dark:text-white">Project {idx + 1}</h4>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Complex web application development</p>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                          Completed
                        </span>
                      </div>
                    ))}
                    {member.projects > 5 && (
                      <p className="text-center text-zinc-500 dark:text-zinc-400 py-4">
                        Showing 5 of {member.projects} projects
                      </p>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "skills" && (
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg text-center">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                    <div className="text-2xl font-bold text-indigo-600">{member.projects}</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">Projects</div>
                  </div>
                  <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                    <div className="text-2xl font-bold text-indigo-600">
                      {new Date().getFullYear() - parseInt(member.joined)}
                    </div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">Years</div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Connect</h3>
                <div className="space-y-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
                      <Linkedin className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">LinkedIn Profile</span>
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
                      <Twitter className="h-5 w-5 text-sky-500" />
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Twitter Profile</span>
                    </a>
                  )}
                  {member.social.website && (
                    <a href={member.social.website} className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
                      <Globe className="h-5 w-5 text-indigo-600" />
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Personal Website</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
