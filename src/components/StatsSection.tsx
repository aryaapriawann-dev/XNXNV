export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "Users", label: "Total Clients", value: 1250 },
            { icon: "CheckCircle", label: "Projects Completed", value: 890 },
            { icon: "Award", label: "Years Experience", value: 12 },
            { icon: "Trophy", label: "Awards Won", value: 45 },
          ].map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {stat.value.toLocaleString()}
              </h3>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
