import { socialLinks } from '../data/content';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Layout({ children }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <nav className="section-container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-glow-primary">
              <span className="text-sm font-semibold">SN</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight">Siri Nandyala</span>
              <span className="text-[11px] text-slate-400">AI & Software Developer</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs lg:text-sm">
            {[
              ['About', 'about'],
              ['Skills', 'skills'],
              ['Projects', 'projects'],
              ['Experience', 'experience'],
              ['Coding Profiles', 'coding'],
              ['Contact', 'contact']
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-slate-300 hover:text-accent-400 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-accent-400/60 hover:text-accent-400 transition-colors"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-accent-400/60 hover:text-accent-400 transition-colors"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-white/5 bg-slate-950/90">
        <div className="section-container py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Siri Nandyala. All rights reserved.</p>
          <p className="text-[11px]">
            Built with <span className="text-primary-400 font-medium">React</span> +{' '}
            <span className="text-accent-400 font-medium">Tailwind CSS</span>.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-primary-500/60 hover:text-primary-400 transition-colors"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-primary-500/60 hover:text-primary-400 transition-colors"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-primary-500/60 hover:text-primary-400 transition-colors"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

