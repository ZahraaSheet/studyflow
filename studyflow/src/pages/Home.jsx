import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const stats = [
  { value: "4+", label: "Core Features" },
  { value: "100%", label: "Responsive" },
  { value: "0", label: "Distractions" },
];

const testimonials = [
  { name: "Sara K.", role: "CS Student", text: "StudyFlow helped me organize my deadlines across 5 courses. I finally stopped missing submissions!" },
  { name: "Omar R.", role: "Engineering Student", text: "The task prioritization is perfect for exam season. Clean UI, no clutter." },
  { name: "Lina M.", role: "Business Student", text: "I love how simple and beautiful it is. It feels like a premium app." },
];

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-cream">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block bg-accent/15 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Academic Task Manager
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black text-ink leading-tight mb-6">
              Study Smarter,<br />
              <span className="text-accent">Not Harder.</span>
            </h1>
            <p className="text-ink/60 text-lg leading-relaxed mb-8 max-w-md">
              StudyFlow is your all-in-one academic organizer. Manage assignments, track deadlines, and stay on top of your courses — all in one beautiful place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/features"
                className="bg-ink text-cream px-7 py-3 rounded-full font-medium hover:bg-accent transition-all duration-200 shadow-lg hover:shadow-accent/30"
              >
                Explore Features
              </Link>
              <Link
                to="/contact"
                className="border border-ink/20 text-ink px-7 py-3 rounded-full font-medium hover:border-accent hover:text-accent transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Hero card visual */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-ink/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-lg">Today's Tasks</h3>
                <span className="text-xs text-muted font-mono">May 26, 2026</span>
              </div>
              {[
                { title: "Submit Math Assignment", course: "MATH201", due: "Today", priority: "high" },
                { title: "Read Chapter 7", course: "CSCI390", due: "Tomorrow", priority: "medium" },
                { title: "Group Project Meeting", course: "BUS101", due: "Wed", priority: "low" },
                { title: "Prepare for Physics Quiz", course: "PHYS110", due: "Thu", priority: "medium" },
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-3 py-3 border-b border-ink/5 last:border-0">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                    task.priority === "high" ? "bg-red-400" :
                    task.priority === "medium" ? "bg-amber-400" : "bg-emerald-400"
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{task.title}</p>
                    <p className="text-xs text-muted">{task.course}</p>
                  </div>
                  <span className="text-xs text-muted whitespace-nowrap">{task.due}</span>
                </div>
              ))}
              <div className="mt-4 bg-accent/10 rounded-xl p-3 text-center">
                <p className="text-accent text-sm font-semibold">3 tasks due this week 🎯</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink py-16">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="font-display text-4xl font-black text-accent mb-1">{value}</div>
              <div className="text-cream/50 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-ink mb-3">Loved by Students</h2>
            <p className="text-ink/50">Real feedback from real users.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text }) => (
              <div key={name} className="bg-white rounded-2xl p-6 shadow-sm border border-ink/5 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <p className="text-ink/70 text-sm leading-relaxed mb-4">"{text}"</p>
                <div>
                  <p className="font-semibold text-ink text-sm">{name}</p>
                  <p className="text-xs text-muted">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-black text-cream mb-4">Ready to take control?</h2>
          <p className="text-cream/80 mb-8 text-lg">Join thousands of students who study with purpose.</p>
          <Link
            to="/features"
            className="bg-cream text-ink font-bold px-8 py-3 rounded-full hover:bg-ink hover:text-cream transition-all duration-200 inline-block"
          >
            See All Features →
          </Link>
        </div>
      </section>
    </main>
  );
}
