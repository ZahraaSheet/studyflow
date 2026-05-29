import { useState } from "react";

const featureList = [
  {
    icon: "📋",
    title: "Task Management",
    desc: "Add, edit, complete, and delete academic tasks. Set priorities and deadlines per course.",
  },
  {
    icon: "📅",
    title: "Deadline Tracker",
    desc: "Never miss a submission. Color-coded urgency levels keep your most pressing tasks front and center.",
  },
  {
    icon: "📊",
    title: "Progress Dashboard",
    desc: "Visualize your productivity week-by-week. Track completed vs pending tasks at a glance.",
  },
  {
    icon: "🔔",
    title: "Smart Reminders",
    desc: "Get notified before deadlines. Configure how early you want to be reminded per task.",
  },
];

const PRIORITIES = ["High", "Medium", "Low"];
const COURSES = ["CSCI390", "MATH201", "PHYS110", "BUS101", "ENG220"];

const initialTasks = [
  { id: 1, title: "Submit Phase 2 Report", course: "CSCI390", priority: "High", done: false, due: "2026-05-31" },
  { id: 2, title: "Chapter 5 Problems", course: "MATH201", priority: "Medium", done: false, due: "2026-05-28" },
  { id: 3, title: "Lab Report Write-up", course: "PHYS110", priority: "High", done: true, due: "2026-05-26" },
];

export default function Features() {
  const [tasks, setTasks] = useState(initialTasks);
  const [form, setForm] = useState({ title: "", course: "CSCI390", priority: "Medium", due: "" });
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (!form.title.trim()) return;
    setTasks(prev => [...prev, { ...form, id: Date.now(), done: false }]);
    setForm({ title: "", course: "CSCI390", priority: "Medium", due: "" });
  };

  const toggle = (id) => setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const remove = (id) => setTasks(prev => prev.filter(t => t.id !== id));

  const filtered = filter === "All" ? tasks : filter === "Done" ? tasks.filter(t => t.done) : tasks.filter(t => !t.done);
  const done = tasks.filter(t => t.done).length;

  const priorityColor = (p) =>
    p === "High" ? "bg-red-100 text-red-600" : p === "Medium" ? "bg-amber-100 text-amber-600" : "bg-emerald-100 text-emerald-600";

  return (
    <main className="pt-28 pb-24 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Features
          </span>
          <h1 className="font-display text-5xl font-black text-ink mb-4">Everything You Need</h1>
          <p className="text-ink/50 text-lg max-w-xl mx-auto">
            A focused set of tools built to reduce academic stress and boost output.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {featureList.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-ink/5 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-display font-bold text-ink mb-2">{title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Demo */}
        <div className="bg-white rounded-3xl border border-ink/5 shadow-xl overflow-hidden">
          <div className="bg-ink px-8 py-6 flex items-center justify-between">
            <div>
              <h2 className="font-display font-bold text-cream text-xl">Live Task Manager</h2>
              <p className="text-cream/50 text-sm mt-1">Try it out — add, complete, or delete tasks</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-display font-black text-accent">{done}/{tasks.length}</div>
              <div className="text-cream/50 text-xs">Completed</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 bg-ink/5">
            <div
              className="h-1.5 bg-accent transition-all duration-500"
              style={{ width: `${tasks.length ? (done / tasks.length) * 100 : 0}%` }}
            />
          </div>

          <div className="p-8">
            {/* Add form */}
            <div className="bg-cream rounded-2xl p-5 mb-6 border border-ink/5">
              <h3 className="font-semibold text-ink mb-4 text-sm uppercase tracking-wider">Add New Task</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                <input
                  className="col-span-full lg:col-span-2 px-4 py-2.5 rounded-xl border border-ink/15 text-sm text-ink bg-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="Task title..."
                  value={form.title}
                  onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                  onKeyDown={e => e.key === "Enter" && addTask()}
                />
                <select
                  className="px-4 py-2.5 rounded-xl border border-ink/15 text-sm text-ink bg-white focus:outline-none focus:border-accent transition-colors"
                  value={form.course}
                  onChange={e => setForm(f => ({ ...f, course: e.target.value }))}
                >
                  {COURSES.map(c => <option key={c}>{c}</option>)}
                </select>
                <select
                  className="px-4 py-2.5 rounded-xl border border-ink/15 text-sm text-ink bg-white focus:outline-none focus:border-accent transition-colors"
                  value={form.priority}
                  onChange={e => setForm(f => ({ ...f, priority: e.target.value }))}
                >
                  {PRIORITIES.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div className="flex gap-3">
                <input
                  type="date"
                  className="px-4 py-2.5 rounded-xl border border-ink/15 text-sm text-ink bg-white focus:outline-none focus:border-accent transition-colors"
                  value={form.due}
                  onChange={e => setForm(f => ({ ...f, due: e.target.value }))}
                />
                <button
                  onClick={addTask}
                  className="bg-accent text-cream px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-ink transition-colors duration-200"
                >
                  + Add Task
                </button>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 mb-4">
              {["All", "Pending", "Done"].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    filter === f ? "bg-ink text-cream" : "bg-cream text-ink/50 hover:text-ink"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Task list */}
            <div className="space-y-2">
              {filtered.length === 0 && (
                <div className="text-center py-12 text-ink/30 text-sm">No tasks here. Add one above!</div>
              )}
              {filtered.map(task => (
                <div
                  key={task.id}
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-200 ${
                    task.done ? "bg-cream/50 border-ink/5 opacity-60" : "bg-white border-ink/10 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggle(task.id)}
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                      task.done ? "bg-teal border-teal" : "border-ink/20 hover:border-teal"
                    }`}
                  >
                    {task.done && <span className="text-white text-xs">✓</span>}
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${task.done ? "line-through text-ink/40" : "text-ink"}`}>
                      {task.title}
                    </p>
                    <p className="text-xs text-muted">{task.course}{task.due && ` · Due ${task.due}`}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${priorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                  <button onClick={() => remove(task.id)} className="text-ink/20 hover:text-red-400 transition-colors text-lg leading-none">
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
