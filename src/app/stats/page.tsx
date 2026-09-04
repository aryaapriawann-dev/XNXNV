import AnimatedCounter from "@/components/AnimatedCounter";
import StatsSection from "@/components/StatsSection";

export default function StatsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Our Impact by Numbers
            </h1>
            <p className="text-xl text-slate-400 mb-12">
              Real results, measurable outcomes, and a track record of excellence that speaks for itself.
            </p>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Delivering Excellence Since 2012
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Our journey began with a simple mission: to provide top-notch solutions that drive real business growth. Today, we're proud to serve over 1,250 clients worldwide, completing more than 890 projects with 100% client satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">
                    <AnimatedCounter value={1250} />+
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">Happy Clients</p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                  <h3 className="text-4xl font-bold text-purple-600 mb-2">
                    <AnimatedCounter value={890} />+
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">Projects Done</p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                  <h3 className="text-4xl font-bold text-pink-600 mb-2">
                    <AnimatedCounter value={12} />+
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">Years of Excellence</p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                  <h3 className="text-4xl font-bold text-teal-600 mb-2">
                    <AnimatedCounter value={45} />+
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">Industry Awards</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Growth Metrics</h3>
                <div className="space-y-6">
                  {[
                    { label: "Client Retention", value: 95, color: "bg-blue-600" },
                    { label: "Project Success", value: 98, color: "bg-purple-600" },
                    { label: "On-Time Delivery", value: 92, color: "bg-pink-600" },
                    { label: "Customer Satisfaction", value: 97, color: "bg-teal-600" },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700 dark:text-slate-300">{item.label}</span>
                        <span className="text-slate-900 dark:text-white font-bold">{item.value}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${item.color}`}
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
