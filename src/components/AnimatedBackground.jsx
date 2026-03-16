import { motion } from "framer-motion";
import Antigravity from "./Antigravity";

const blobs = [
  { size: 420, top: "-10%", left: "-10%", color: "from-primary-600/40 via-primary-500/10 to-transparent" },
  { size: 380, top: "50%", left: "60%", color: "from-accent-500/40 via-accent-400/10 to-transparent" },
  { size: 360, top: "80%", left: "-20%", color: "from-fuchsia-500/40 via-fuchsia-400/10 to-transparent" }
];

const floatingWords = ["AI", "Data", "Vision", "NLP", "React", "Node", "LLM", "Cloud"];

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 opacity-[0.07] bg-grid-slate-800" />

      <div className="fixed inset-0 -z-10 overflow-hidden">

  {/* background */}
  <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />

  {/* particles */}
  <div className="absolute inset-0">
    <Antigravity count={600} />
  </div>

</div>
      {/* Floating blobs */}
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-tr ${blob.color} blur-[120px] opacity-70`}
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left
          }}
          animate={{
            x: ["0%", "6%", "-5%", "0%"],
            y: ["0%", "-5%", "6%", "0%"],
            rotate: [0, 15, -10, 0]
          }}
          transition={{
            duration: 20 + index * 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Floating tech words */}
      <div className="absolute inset-0">
        {floatingWords.map((word, index) => (
          <motion.div
            key={word}
            className="absolute text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-slate-400/30"
            style={{
              top: `${10 + (index * 9) % 80}%`,
              left: `${(index * 17) % 90}%`
            }}
            animate={{
              y: ["0%", "-15%", "0%"],
              opacity: [0.15, 0.5, 0.15]
            }}
            transition={{
              duration: 14 + index * 1.7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

    </div>
  );
}