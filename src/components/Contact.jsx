import { motion } from 'framer-motion';
import { socialLinks } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="pill">Contact</span>
            <span className="h-px flex-1 bg-gradient-to-r from-primary-400/60 to-transparent" />
          </div>
          <h2 className="section-title mb-3">Let&apos;s build something together.</h2>
          <p className="text-sm sm:text-base text-slate-300 mb-6 max-w-xl">
            Whether it&apos;s an ML project, a research idea, or a full‑stack app, I&apos;m always excited to
            collaborate and learn.
          </p>

          <div className="space-y-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 w-20">Email</span>
              <a
                href={`mailto:${socialLinks.email}`}
                className="font-medium text-slate-100 hover:text-accent-300 transition-colors break-all"
              >
                {socialLinks.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 w-20">LinkedIn</span>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-slate-100 hover:text-accent-300 transition-colors truncate"
              >
                siri-nandyala
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 w-20">GitHub</span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-slate-100 hover:text-accent-300 transition-colors truncate"
              >
                @Siri0305gh
              </a>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass-panel border-white/5 p-4 sm:p-5 glow-border space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Contact form (demo)
          </p>
          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs text-slate-300">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400/60"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-slate-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400/60"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-slate-300">Message</label>
              <textarea
                rows={4}
                placeholder="Tell me a bit about your project or idea..."
                className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400/60 resize-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 px-4 py-2.5 text-sm font-semibold text-white shadow-glow-primary hover:shadow-glow-accent transition-shadow"
          >
            Send
          </button>
          <p className="text-[11px] text-slate-500">
            This form is a front‑end demo. To make it live, you can wire it to a service like Formspree, EmailJS, or a
            custom API.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

