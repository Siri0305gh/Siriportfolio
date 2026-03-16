import { motion } from 'framer-motion';
import { hero, socialLinks } from '../data/content';
import { FaDownload, FaGithub, FaPaperPlane } from 'react-icons/fa6';

const container = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative pt-20 pb-24 sm:pb-28">
      <div className="section-container grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6 sm:space-y-8 relative"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to internships & projects</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              Hi, I&apos;m <span className="gradient-text">{hero.name}</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl">
              {hero.title} — {hero.tagline}
            </p>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">{hero.summary}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => (window.location.href = '/resume.pdf')}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 px-5 py-2.5 text-sm font-medium text-white shadow-glow-primary hover:shadow-glow-accent transition-shadow"
            >
              <FaDownload className="h-4 w-4" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-100 border border-white/10 hover:border-accent-400/70 hover:text-accent-300 transition-colors glow-border"
            >
              <FaGithub className="h-4 w-4" />
              <span>View Projects</span>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-2.5 text-sm font-medium text-slate-100 border border-white/10 hover:border-primary-500/80 hover:text-primary-300 transition-colors"
            >
              <FaPaperPlane className="h-4 w-4" />
              <span>Contact Me</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
            <div className="flex -space-x-2">
              <div className="h-7 w-7 rounded-full border border-slate-900 bg-gradient-to-br from-primary-500 to-accent-500" />
              <div className="h-7 w-7 rounded-full border border-slate-900 bg-gradient-to-br from-emerald-500 to-teal-500" />
              <div className="h-7 w-7 rounded-full border border-slate-900 bg-gradient-to-br from-fuchsia-500 to-violet-500" />
            </div>
            <span>Building with AI, data, and code — one project at a time.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative"
        >
          <div className="glass-panel glow-border p-6 sm:p-7 lg:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-transparent to-accent-500/10 pointer-events-none" />
            <div className="relative flex flex-col items-center gap-4">
              <div className="relative">
                <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow-primary flex items-center justify-center text-3xl font-semibold">
                  SIRI
                </div>
                <div className="absolute -bottom-2 -right-2 rounded-full bg-emerald-400 px-2 py-0.5 text-[10px] font-semibold text-emerald-950">
                  AI & DS
                </div>
              </div>

              <div className="text-center space-y-1">
                <p className="text-sm font-medium text-slate-100">
                  B.Tech · Artificial Intelligence & Data Science
                </p>
                <p className="text-xs text-slate-400">B.V. Raju Institute of Technology · CGPA 8.62</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs w-full">
                <div className="glass-panel border-white/5 px-3 py-2.5 text-left">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Focus</p>
                  <p className="mt-1 text-slate-100">ML · CV · NLP · Full‑stack</p>
                </div>
                <div className="glass-panel border-white/5 px-3 py-2.5 text-left">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Stack</p>
                  <p className="mt-1 text-slate-100">Python · Java · React</p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full text-[11px] text-slate-400 pt-1 border-t border-white/5 mt-1">
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="hover:text-accent-300 transition-colors truncate max-w-[55%]"
                >
                  {socialLinks.email}
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent-300 transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

