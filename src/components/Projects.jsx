import { motion } from 'framer-motion';
import { projects } from '../data/content';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="section-container">
        <div className="flex items-center gap-2 mb-4">
          <span className="pill">Projects</span>
          <span className="h-px flex-1 bg-gradient-to-r from-fuchsia-400/60 to-transparent" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8">
          <h2 className="section-title">Projects that reflect my learning journey.</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            From satellite imagery compression and liveness‑aware attendance to smart parking and peer‑learning
            platforms.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={card}
              className="glass-panel glow-border border-white/5 p-5 sm:p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50">{project.title}</h3>
                    {project.highlight && (
                      <p className="mt-1 text-xs text-accent-300/90">{project.highlight}</p>
                    )}
                  </div>
                  <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-2 py-1 text-[11px] text-emerald-300 border border-emerald-400/30">
                    Featured
                  </span>
                </div>
                <p className="text-sm text-slate-300">{project.description}</p>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-slate-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                    <span>End‑to‑end ownership — from idea to deployment‑ready code.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-slate-100 hover:border-accent-400/70 hover:text-accent-200 transition-colors"
                      >
                        <FaGithub className="h-3 w-3" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-slate-100 hover:border-primary-400/70 hover:text-primary-200 transition-colors"
                      >
                        <FaArrowUpRightFromSquare className="h-3 w-3" />
                        <span>Live demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

