import { motion } from 'framer-motion';
import { experience, timelineEducation, certifications } from '../data/content';

const item = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' }
  })
};

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="pill">Experience</span>
            <span className="h-px flex-1 bg-gradient-to-r from-emerald-400/60 to-transparent" />
          </div>
          <h2 className="section-title mb-6">Experience & timeline.</h2>

          <div className="relative pl-4">
            <div className="absolute left-1 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/70 via-slate-700 to-transparent" />
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  variants={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index + 1}
                  className="relative pl-4"
                >
                  <div className="absolute left-0 top-1 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-glow-accent" />
                  <div className="glass-panel border-white/5 p-4 sm:p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 mb-1">
                      {exp.type}
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-slate-50">{exp.role}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{exp.org}</p>
                    <p className="text-xs text-slate-400 mt-1">{exp.duration}</p>
                    <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-300">
                      {exp.details.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={item}
            custom={1}
            className="glass-panel border-white/5 p-4 sm:p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">
              Education timeline
            </p>
            <div className="space-y-3">
              {timelineEducation.map((edu) => (
                <div key={edu.degree}>
                  <p className="text-sm font-semibold text-slate-100">{edu.degree}</p>
                  <p className="text-xs text-slate-400">
                    {edu.institute} · {edu.duration}
                  </p>
                  <p className="text-xs text-slate-400">{edu.note}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={item}
            custom={2}
            className="glass-panel border-white/5 p-4 sm:p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">
              Certifications
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              {certifications.map((cert) => (
                <div key={cert.title} className="flex items-center justify-between gap-3">
                  <span className="font-medium text-slate-100">{cert.title}</span>
                  <span className="text-slate-400">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

