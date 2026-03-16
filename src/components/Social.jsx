import { motion } from 'framer-motion';
import { socialLinks } from '../data/content';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa6';

const socials = [
  {
    label: 'LinkedIn',
    key: 'linkedin',
    icon: FaLinkedin,
    accent: 'from-sky-500 to-sky-400'
  },
  {
    label: 'GitHub',
    key: 'github',
    icon: FaGithub,
    accent: 'from-slate-200 to-slate-100'
  },
  {
    label: 'Twitter / X',
    key: 'twitter',
    icon: FaXTwitter,
    accent: 'from-slate-200 to-slate-300'
  },
  {
    label: 'Instagram',
    key: 'instagram',
    icon: FaInstagram,
    accent: 'from-pink-500 to-rose-400'
  }
];

export default function Social() {
  return (
    <section id="social" className="py-12 sm:py-16">
      <div className="section-container">
        <div className="flex items-center gap-2 mb-4">
          <span className="pill">Social</span>
          <span className="h-px flex-1 bg-gradient-to-r from-fuchsia-400/60 to-transparent" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8">
          <h2 className="section-title">Let&apos;s stay connected.</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Find me on these platforms — I&apos;m always excited to talk about ML, AI, and building thoughtful products.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid gap-4 sm:gap-5 sm:grid-cols-2"
          >
            {socials.map((s) => {
              const Icon = s.icon;
              const href = socialLinks[s.key];
              if (!href) return null;
              return (
                <a
                  key={s.label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group glass-panel glow-border border-white/5 p-4 sm:p-5 flex items-center justify-between gap-3 hover:border-accent-400/70 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-9 w-9 rounded-xl bg-gradient-to-br ${s.accent} text-slate-950 flex items-center justify-center`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-50">{s.label}</p>
                      <p className="text-xs text-slate-400 truncate">
                        {s.key === 'github' ? '@Siri0305gh' : s.key === 'linkedin' ? 'siri-nandyala' : ''}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] text-accent-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    Visit ↗
                  </span>
                </a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="glass-panel border-white/5 p-4 sm:p-5 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 text-emerald-950 flex items-center justify-center">
                <FaEnvelope className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-50">Email</p>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="text-xs text-slate-300 hover:text-accent-300 transition-colors break-all"
                >
                  {socialLinks.email}
                </a>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              Prefer async communication? Drop me an email with context about your project or opportunity, and I&apos;ll
              get back soon.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

