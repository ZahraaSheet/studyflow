import { useState } from "react";

const faqs = [
  { q: "Is StudyFlow free to use?", a: "Yes! StudyFlow is a free academic tool built as part of a university project." },
  { q: "Does my data get saved?", a: "Tasks are saved in your browser's local session. No server-side storage is used in this version." },
  { q: "Can I use it on mobile?", a: "Absolutely. StudyFlow is fully responsive and optimized for all screen sizes." },
  { q: "How do I report a bug or suggest a feature?", a: "Use the contact form on this page, or open an issue on our GitHub repository." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSent(true);
  };

  return (
    <main className="pt-28 pb-24 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Contact
          </span>
          <h1 className="font-display text-5xl font-black text-ink mb-4">Get in Touch</h1>
          <p className="text-ink/50 text-lg max-w-xl mx-auto">
            Have a question, feedback, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl border border-ink/5 shadow-xl p-8">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-display text-2xl font-bold text-ink mb-2">Message Sent!</h3>
                <p className="text-ink/60 text-sm mb-6">Thanks for reaching out. We'll get back to you shortly.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="bg-accent text-cream px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-ink transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-display font-bold text-xl text-ink mb-6">Send a Message</h2>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-4">
                    {error}
                  </div>
                )}
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ink/50 uppercase tracking-wider mb-1.5">Name *</label>
                      <input
                        className="w-full px-4 py-3 rounded-xl border border-ink/15 text-sm text-ink bg-cream focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink/50 uppercase tracking-wider mb-1.5">Email *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-ink/15 text-sm text-ink bg-cream focus:outline-none focus:border-accent transition-colors"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink/50 uppercase tracking-wider mb-1.5">Subject</label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-ink/15 text-sm text-ink bg-cream focus:outline-none focus:border-accent transition-colors"
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink/50 uppercase tracking-wider mb-1.5">Message *</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-ink/15 text-sm text-ink bg-cream focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us what's on your mind..."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-ink text-cream py-3 rounded-xl font-semibold hover:bg-accent transition-colors duration-200"
                  >
                    Send Message →
                  </button>
                </div>
              </>
            )}
          </div>

          {/* FAQ + Info */}
          <div className="space-y-8">
            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "📍", label: "Location", val: "Beirut, Lebanon" },
                { icon: "🎓", label: "Course", val: "CSCI390 — Spring 2026" },
                { icon: "🐙", label: "GitHub", val: "github.com/studyflow" },
                { icon: "🕐", label: "Response time", val: "Within 24 hours" },
              ].map(({ icon, label, val }) => (
                <div key={label} className="bg-white rounded-2xl p-4 border border-ink/5 shadow-sm">
                  <div className="text-2xl mb-2">{icon}</div>
                  <p className="text-xs text-muted uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-semibold text-ink mt-0.5">{val}</p>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display font-bold text-xl text-ink mb-4">Frequently Asked</h2>
              <div className="space-y-2">
                {faqs.map(({ q, a }, i) => (
                  <div key={q} className="bg-white rounded-2xl border border-ink/5 overflow-hidden">
                    <button
                      className="w-full text-left px-5 py-4 text-sm font-semibold text-ink flex justify-between items-center hover:text-accent transition-colors"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      {q}
                      <span className={`text-lg transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 text-sm text-ink/60 leading-relaxed border-t border-ink/5 pt-3">
                        {a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
