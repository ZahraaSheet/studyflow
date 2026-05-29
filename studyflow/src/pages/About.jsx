const team = [
  { name: "Your Name", role: "Lead Developer & Designer", initials: "YN", color: "bg-accent" },
  { name: "Teammate 2", role: "Frontend Developer", initials: "T2", color: "bg-teal" },
  { name: "Teammate 3", role: "UI/UX Designer", initials: "T3", color: "bg-amber-400" },
];

const timeline = [
  { date: "Phase 1", title: "Project Planning & Design", desc: "Defined problem, wireframed UI, chose tech stack." },
  { date: "Phase 2", title: "Frontend Development", desc: "Built full React app with 4 responsive pages and interactive task manager." },
  { date: "Launch", title: "Deployment on GitHub Pages", desc: "Published live app with documentation and report." },
];

const tech = [
  { name: "React JS", icon: "⚛️", desc: "Component-based UI framework" },
  { name: "Tailwind CSS", icon: "🎨", desc: "Utility-first styling" },
  { name: "React Router", icon: "🔗", desc: "Client-side navigation" },
  { name: "GitHub Pages", icon: "🚀", desc: "Hosting & deployment" },
  { name: "Git", icon: "📁", desc: "Version control" },
  { name: "Vercel (alt)", icon: "▲", desc: "Alternative deployment" },
];

export default function About() {
  return (
    <main className="pt-28 pb-24 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            About
          </span>
          <h1 className="font-display text-5xl font-black text-ink mb-4">Why StudyFlow?</h1>
          <p className="text-ink/60 text-lg max-w-2xl leading-relaxed">
            StudyFlow was born from a simple observation: students juggle too many tools and not enough time.
            We built one clean, focused app to fix that.
          </p>
        </div>

        {/* Problem / Solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
            <div className="text-3xl mb-4">😓</div>
            <h3 className="font-display font-bold text-xl text-ink mb-3">The Problem</h3>
            <ul className="space-y-2 text-sm text-ink/70">
              {[
                "Students miss deadlines because of scattered task lists",
                "Existing tools are bloated and not student-focused",
                "No clear overview of priorities across multiple courses",
                "Hard to use on mobile during breaks or commutes",
              ].map(p => (
                <li key={p} className="flex gap-2"><span className="text-red-400 mt-0.5">✗</span>{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8">
            <div className="text-3xl mb-4">✅</div>
            <h3 className="font-display font-bold text-xl text-ink mb-3">Our Solution</h3>
            <ul className="space-y-2 text-sm text-ink/70">
              {[
                "One clean dashboard to manage all academic tasks",
                "Priority levels and deadlines per course",
                "Visual progress tracking to stay motivated",
                "Fully responsive — works great on phone and desktop",
              ].map(s => (
                <li key={s} className="flex gap-2"><span className="text-emerald-500 mt-0.5">✓</span>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="font-display text-3xl font-bold text-ink mb-10">Project Timeline</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-ink/10" />
            <div className="space-y-8">
              {timeline.map(({ date, title, desc }) => (
                <div key={date} className="flex gap-8 relative">
                  <div className="w-12 h-12 rounded-full bg-accent flex-shrink-0 flex items-center justify-center relative z-10 shadow-lg shadow-accent/30">
                    <span className="text-cream text-xs font-bold text-center leading-tight px-1">{date}</span>
                  </div>
                  <div className="pt-2.5">
                    <h4 className="font-bold text-ink">{title}</h4>
                    <p className="text-sm text-ink/60 mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="font-display text-3xl font-bold text-ink mb-8">Tech Stack</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tech.map(({ name, icon, desc }) => (
              <div key={name} className="bg-white rounded-2xl p-5 border border-ink/5 shadow-sm flex items-center gap-4 hover:-translate-y-0.5 transition-transform duration-200">
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="font-semibold text-ink text-sm">{name}</p>
                  <p className="text-xs text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="font-display text-3xl font-bold text-ink mb-8">Meet the Team</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {team.map(({ name, role, initials, color }) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-ink/5 shadow-sm text-center hover:shadow-md transition-shadow duration-200">
                <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-cream font-display font-bold text-xl`}>
                  {initials}
                </div>
                <h3 className="font-bold text-ink">{name}</h3>
                <p className="text-sm text-muted mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
