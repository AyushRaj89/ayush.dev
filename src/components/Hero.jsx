import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    // min-h-[90vh] ensures it doesn't fight with your Navbar height
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#050505] overflow-hidden px-6 pt-20">
      {/* BACKGROUND GLOWS - These are "absolute" so they don't move other elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* SMALL BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs font-medium mb-6"
        >
          ✨ Available for Freelance & Full-time
        </motion.div>

        {/* MAIN TITLE - "font-light" makes it feel less heavy */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6"
        >
          Crafting{" "}
          <span className="font-bold italic text-purple-400">Scalable</span>{" "}
          <br />
          Web Applications.
        </motion.h1>

        {/* DESCRIPTION - slate-400 is softer than pure white */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I'm Ayush Raj. I build modern, high-performance web solutions using
          the MERN stack with a focus on clean UI.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >

          <div className="flex gap-2">
            <a
              href="https://github.com/ayushraj89"
              className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush8027/"
              className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
