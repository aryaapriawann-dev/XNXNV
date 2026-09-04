"use client";

import { useState } from "react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface Value {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function TeamSection() {
  const [activeMember, setActiveMember] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop",
      bio: "Visionary leader with over 20 years of experience in technology and business strategy."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=687&auto=format&fit=crop",
      bio: "Tech innovator driving our engineering excellence and technological advancements."
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop",
      bio: "Creative mind behind our award-winning user experiences and interface designs."
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Director of Operations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=687&auto=format&fit=crop",
      bio: "Ensures our operations run smoothly, delivering excellence in every project."
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=687&auto=format&fit=crop",
      bio: "Technical expert bringing innovative solutions to complex challenges."
    },
    {
      id: 6,
      name: "Jessica Brown",
      role: "Client Success Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=687&auto=format&fit=crop",
      bio: "Dedicated to ensuring every client achieves their goals with our solutions."
    }
  ];

  return (
    <section id="team" className="py-20 bg-zinc-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            The talented people behind our success, dedicated to delivering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden transition-all duration-300 ${
                activeMember === member.id ? "ring-2 ring-blue-500" : "hover:shadow-xl"
              }`}
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {activeMember === member.id ? member.bio : "Click to learn more"}
                </p>
                <button
                  onClick={() => setActiveMember(activeMember === member.id ? null : member.id)}
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
                >
                  {activeMember === member.id ? "Show less" : "Read bio"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValuesSection() {
  const values: Value[] = [
    {
      id: 1,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from the quality of our work to the service we provide.",
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices in all interactions.",
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Innovation",
      description: "We embrace creativity and new ideas to solve problems and drive progress for our clients.",
      icon: (
        <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Customer Focus",
      description: "Our clients are at the heart of everything we do, and we're committed to their success.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Collaboration",
      description: "We believe in the power of teamwork and work together to achieve great things.",
      icon: (
        <svg className="w-8 h-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Sustainability",
      description: "We are committed to sustainable practices and environmental responsibility.",
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="values" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            These principles guide our decisions and actions, shaping our company culture and guiding our path forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-zinc-50 dark:bg-slate-800 rounded-2xl p-8 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-slate-700/50 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mb-6 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center shadow-sm">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
              1000+
            </div>
            <div className="text-xl text-zinc-300">Projects Completed</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
              98%
            </div>
            <div className="text-xl text-zinc-300">Client Satisfaction</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
              50+
            </div>
            <div className="text-xl text-zinc-300">Team Members</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
              24/7
            </div>
            <div className="text-xl text-zinc-300">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
