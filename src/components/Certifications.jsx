import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "ChatGPT-4 Prompt Engineering",
    subtitle: "ChatGPT, Generative AI & LLM",
    provider: "Infosys",
    date: "Aug 2025",
    color: "accent",
    link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_014157693153288192147/1-59c838ca-5da5-4736-a284-b49f233e3058.pdf",
  },
  {
    title: "Computational Theory",
    subtitle: "Language Principle & Finite Automata Theory",
    provider: "Infosys",
    date: "Aug 2025",
    color: "highlight",
    link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0135015511562403847605/1-cb289662-f43c-4d96-9be5-72861f1b8ff7.pdf",
  },
  {
    title: "Implementing Deep Learning",
    subtitle: "Optimized Deep Learning Applications",
    provider: "Infosys",
    date: "Aug 2025",
    color: "accent",
    link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01350158699744460812095/1-516e0d62-e694-4dc5-865a-371f7369904c.pdf",
  },
  {
    title: "Responsive Web Design",
    subtitle: "Certification",
    provider: "freeCodeCamp",
    date: "Oct 2023",
    color: "highlight",
    link: "https://www.freecodecamp.org/certification/fcc4c83bd4b-b528-4b85-9ca8-2e5f44d16c10/responsive-web-design",
  },
];

const CertCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      delay: index * 0.15,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{ once: true, margin: "-80px" }}
    whileHover={{ y: -15, scale: 1.02 }}
    className="group glass-card relative overflow-hidden flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)] border-white/5 hover:border-accent/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-500"
  >
    {/* Glow */}
    <div
      className={`absolute top-0 right-0 w-32 h-32 ${
        cert.color === "accent"
          ? "bg-accent/5 group-hover:bg-accent/15"
          : "bg-highlight/5 group-hover:bg-highlight/15"
      } blur-[40px] rounded-full -z-10 transition-all`}
    ></div>

    <div>
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 transition-all duration-300 ${
          cert.color === "accent"
            ? "bg-accent/10 border-accent/20 text-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            : "bg-highlight/10 border-highlight/20 text-highlight group-hover:bg-highlight group-hover:text-white group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
        }`}
      >
        <Award className="w-7 h-7" />
      </div>

      <h3 className="text-2xl font-black mb-2 tracking-tight leading-tight group-hover:text-accent transition-colors">
        {cert.title}
      </h3>
      <p className="text-slate-400 text-base mb-4 italic leading-relaxed">
        {cert.subtitle}
      </p>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between pt-6 border-t border-white/5">
      <div className="flex items-center gap-2">
        <span
          className={`inline-block px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] ${
            cert.color === "accent"
              ? "bg-accent/10 border border-accent/20 text-accent"
              : "bg-highlight/10 border border-highlight/20 text-highlight"
          }`}
        >
          {cert.provider}
        </span>
      </div>

      {/* 🔗 Certificate Link */}
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-accent transition"
      >
        View <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen py-40 px-6 bg-primary relative">
      {/* Decorative background */}
      <div data-gsap="glow" className="absolute bottom-1/3 left-0 w-[40vw] h-[40vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div data-gsap="glow" className="absolute top-1/4 right-0 w-[30vw] h-[30vw] bg-highlight/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter">
            My <span className="text-gradient">Certifications</span>.
          </h2>
          <div data-gsap="divider" className="w-24 h-1.5 bg-gradient-to-r from-accent to-highlight"></div>
        </motion.div>

        {/* Cert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {certifications.map((cert, index) => (
            <CertCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
