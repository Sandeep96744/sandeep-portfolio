import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Link to="/" className="font-display text-xl font-semibold">
            Sandeep<span className="text-accent">.</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Software engineer building backend systems and full-stack products in Kolkata, India.
          </p>
        </div>

        <div>
          <p className="section-eyebrow">Sitemap</p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link to="/experience" className="text-muted-foreground hover:text-foreground">Experience</Link></li>
            <li><Link to="/projects" className="text-muted-foreground hover:text-foreground">Projects</Link></li>
            <li><Link to="/skills" className="text-muted-foreground hover:text-foreground">Skills</Link></li>
            <li><Link to="/certifications" className="text-muted-foreground hover:text-foreground">Certifications</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="section-eyebrow">Connect</p>
          <div className="mt-4 flex gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground">
              <Linkedin size={18} />
            </a>
            <a href="mailto:sandeepsharma96744@gmail.com" aria-label="Email" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground">
              <Mail size={18} />
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sandeep Sharma. Built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
