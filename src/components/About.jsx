import { motion } from 'framer-motion';
import { about, leadership } from '../data/content';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' }
  })
};

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
          <div className="flex items-center gap-2 mb-4">
            <span className="pill">About</span>
            <span className="h-px flex-1 bg-gradient-to-r from-accent-400/60 to-transparent" />
          </div>
          <h2 className="section-title mb-4">
            <span className="gradient-text">Who I am</span> & how I think.
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-slate-300">
            {about.bio.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="mt-6 grid gap-3 text-xs sm:text-sm text-slate-300">
            <div className="glass-panel px-4 py-3 flex items-center justify-between border-white/5">
              <span className="text-slate-400">Current degree</span>
              <span className="font-medium text-slate-100">
                B.Tech AI &amp; Data Science · 2023–2027
              </span>
            </div>
            <div className="glass-panel px-4 py-3 flex items-center justify-between border-white/5">
              <span className="text-slate-400">Interests</span>
              <span className="font-medium text-slate-100">
                ML · NLP · Computer Vision · Real‑time Apps
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeIn} custom={1} className="glass-panel p-4 sm:p-5 glow-border">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-xl font-semibold">
                SN
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-100">Profile snapshot</p>
                <p className="text-xs text-slate-400">
                  AI &amp; Data Science student with hands‑on ML, CV, NLP, and full‑stack experience.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} custom={2} className="glass-panel p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">
              Leadership &amp; community
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {leadership.map((item) => (
                <li key={item.title} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-400" />
                  <span>
                    <span className="font-medium text-slate-100">{item.title}</span> · {item.org}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeIn} custom={3} className="glass-panel p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">
              Education overview
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              {about.education.slice(0, 2).map((edu) => (
                <div key={edu.degree}>
                  <p className="font-medium text-slate-100">{edu.degree}</p>
                  <p className="text-slate-400">
                    {edu.institute} · {edu.duration} · {edu.note}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

