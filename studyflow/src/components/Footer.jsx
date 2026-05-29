import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/60 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-cream font-display font-bold text-xs">S</span>
              </div>
              <span className="font-display font-bold text-cream text-lg">StudyFlow</span>
            </div>
            <p className="text-sm leading-relaxed">
              A smart academic task manager built for students who want to stay organized and focused.
            </p>
          </div>

          <div>
            <h4 className="text-cream font-semibold mb-4 text-sm uppercase tracking-wider">Pages</h4>
            <ul className="space-y-2 text-sm">
              {["/", "/features", "/about", "/contact"].map((path, i) => (
                <li key={path}>
                  <Link to={path} className="hover:text-accent transition-colors">
                    {["Home", "Features", "About", "Contact"][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-semibold mb-4 text-sm uppercase tracking-wider">Built With</h4>
            <ul className="space-y-2 text-sm">
              {["React JS", "Tailwind CSS", "React Router", "GitHub Pages"].map(tech => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-10 pt-6 text-xs text-center">
          © 2026 StudyFlow — CSCI390 Web Programming Project · All rights reserved.
        </div>
      </div>
    </footer>
  );
}
