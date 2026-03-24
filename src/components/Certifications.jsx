

import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

const certifications = [
  {
    title: "ChatGPT-4 Prompt Engineering",
    subtitle: "ChatGPT, Generative AI & LLM",
    provider: "Infosys",
    date: "Aug 2025",
    color: "from-blue-500/20 to-cyan-500/20",
    link: "https://infyspringboard.onwingspan.com/...",
  },
  {
    title: "Computational Theory",
    subtitle: "Language Principle & Finite Automata",
    provider: "Infosys",
    date: "Aug 2025",
    color: "from-purple-500/20 to-pink-500/20",
    link: "https://infyspringboard.onwingspan.com/...",
  },
  {
    title: "Implementing Deep Learning",
    subtitle: "Optimized Deep Learning Applications",
    provider: "Infosys",
    date: "Aug 2025",
    color: "from-blue-500/20 to-indigo-500/20",
    link: "https://infyspringboard.onwingspan.com/...",
  },
  {
    title: "Responsive Web Design",
    subtitle: "Full Stack Certification",
    provider: "freeCodeCamp",
    date: "Oct 2023",
    color: "from-emerald-500/20 to-teal-500/20",
    link: "https://www.freecodecamp.org/...",
  },
];

const CertCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 20 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
    whileHover={{ y: -10, rotateX: 2, rotateY: -2 }} // Subtle 3D tilt
    className="group relative"
  >
    {/* Animated Border Glow */}
    <div
      className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-[2rem] opacity-20 group-hover:opacity-100 transition duration-500 blur`}
    ></div>

    <div className="relative bg-[#0a0a0a] border border-white/5 p-8 rounded-[2rem] h-full flex flex-col justify-between backdrop-blur-xl">
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/5 rounded-2xl border border-white/5 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-500">
            <Award size={24} />
          </div>
          <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase bg-white/5 px-3 py-1 rounded-full">
            {cert.date}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 leading-tight tracking-tight group-hover:text-purple-400 transition-colors">
          {cert.title}
        </h3>
        <p className="text-slate-400 text-sm mb-6 font-medium italic">
          {cert.subtitle}
        </p>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-white/5">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-emerald-500" />
          <span className="text-xs font-bold text-slate-300 uppercase tracking-tighter">
            {cert.provider}
          </span>
        </div>

        <motion.a
          whileHover={{ x: 3 }}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-bold text-purple-400"
        >
          Verify <ExternalLink size={14} />
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-32 px-6 bg-[#030303] relative overflow-hidden"
    >
      {/* Dynamic Background Auras */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            Milestones
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-4">
            Professional{" "}
            <span className="text-slate-500 italic font-light">Badges</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-sm">
            Validating technical expertise through industry-recognized
            certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-20">
          {certifications.map((cert, index) => (
            <CertCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;