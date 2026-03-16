import { motion } from 'framer-motion';
import { skills } from '../data/content';
import { FaCode, FaDatabase, FaGear, FaBrain } from 'react-icons/fa6';

const icons = {
  Languages: FaCode,
  'Data & ML': FaBrain,
  'Web & Frontend': FaCode,
  'Backend & APIs': FaGear,
  Databases: FaDatabase,
  'Tools & Platforms': FaGear
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="section-container">
        <div className="flex items-center gap-2 mb-4">
          <span className="pill">Skills & Tech</span>
          <span className="h-px flex-1 bg-gradient-to-r from-primary-400/60 to-transparent" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8">
          <h2 className="section-title">The stack I work with.</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            A blend of **ML**, **data tooling**, and **modern web tech** — from Python and computer vision to React and
            Node powered APIs.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((group) => {
            const Icon = icons[group.category] || FaCode;
            return (
              <motion.div
                key={group.category}
                variants={item}
                className="glass-panel glow-border border-white/5 p-4 sm:p-5 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary-500/70 to-accent-500/70 flex items-center justify-center text-slate-50">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-medium text-slate-100">{group.category}</p>
                  </div>
                  <span className="text-[11px] text-slate-400">{group.items.length} tools</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-1">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-100 hover:border-accent-400/70 hover:text-accent-200 transition-colors"
                    >
                      <span className="mr-1 h-1.5 w-1.5 rounded-full bg-accent-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

