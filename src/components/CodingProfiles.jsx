import { motion } from 'framer-motion';
import { codingProfiles } from '../data/content';
import { FaGithub, FaCode, FaCodeBranch } from 'react-icons/fa6';

const platformIcon = (platform) => {
  if (platform === 'GitHub') return FaGithub;
  return FaCode;
};

export default function CodingProfiles() {
  return (
    <section id="coding" className="py-12 sm:py-16">
      <div className="section-container">
        <div className="flex items-center gap-2 mb-4">
          <span className="pill">Coding Profiles</span>
          <span className="h-px flex-1 bg-gradient-to-r from-accent-400/60 to-transparent" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8">
          <h2 className="section-title">Where I practice & share code.</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Competitive programming, problem solving, and open‑source experiments across multiple platforms.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid gap-4 sm:gap-5 md:grid-cols-3"
        >
          {codingProfiles.map((profile) => {
            const Icon = platformIcon(profile.platform);
            return (
              <a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                className="group glass-panel glow-border border-white/5 p-4 sm:p-5 flex flex-col gap-3 hover:border-accent-400/70 transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary-500/80 to-accent-500/80 flex items-center justify-center text-slate-50">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-50">{profile.platform}</p>
                      <p className="text-xs text-slate-400 truncate">@{profile.username}</p>
                    </div>
                  </div>
                  <FaCodeBranch className="h-4 w-4 text-slate-500 group-hover:text-accent-300 transition-colors" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                  <span>View profile</span>
                  <span className="opacity-0 group-hover:opacity-100 text-accent-300 transition-opacity">
                    Open ↗
                  </span>
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

