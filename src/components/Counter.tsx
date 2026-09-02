"use client";

import { useState, useEffect } from "react";
import { Users, Code, Award, Coffee } from "lucide-react";

interface CounterData {
  users: number;
  projects: number;
  awards: number;
  cups: number;
}

const Counter = () => {
  const [counters, setCounters] = useState<CounterData>({
    users: 0,
    projects: 0,
    awards: 0,
    cups: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Start animation when component mounts
    setHasAnimated(true);
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    const targetValues: CounterData = {
      users: 150,
      projects: 234,
      awards: 48,
      cups: 1250,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;
    const startValues = { ...counters };
    let currentStep = 0;

    const animationInterval = setInterval(() => {
      currentStep++;
      
      const progress = Math.min(currentStep / steps, 1);
      
      // Easing function (easeOutQuad)
      const eased = 1 - (1 - progress) * (1 - progress);

      setCounters({
        users: Math.floor(startValues.users + (targetValues.users - startValues.users) * eased),
        projects: Math.floor(startValues.projects + (targetValues.projects - startValues.projects) * eased),
        awards: Math.floor(startValues.awards + (targetValues.awards - startValues.awards) * eased),
        cups: Math.floor(startValues.cups + (targetValues.cups - startValues.cups) * eased),
      });

      if (progress === 1) {
        clearInterval(animationInterval);
      }
    }, interval);

    return () => clearInterval(animationInterval);
  }, [hasAnimated, counters]);

  const formatNumber = (num: number) => {
    return num.toLocaleString("id-ID");
  };

  const stats = [
    { icon: Users, label: "Klien Puas", value: counters.users, suffix: "+" },
    { icon: Code, label: "Project Selesai", value: counters.projects, suffix: "+" },
    { icon: Award, label: "Penghargaan", value: counters.awards, suffix: "+" },
    { icon: Coffee, label: "Cangkir Kopi", value: counters.cups, suffix: "+" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-zinc-900 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {formatNumber(stat.value)}{stat.suffix}
              </div>
              <div className="text-zinc-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
