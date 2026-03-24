
import { motion } from "framer-motion";
import { Github, ExternalLink, Utensils, Monitor, Car } from "lucide-react";

const projects = [
  {
    title: "Food Delivery App",
    description:
      "A dynamic food menu system with category-based filtering and keyword search to optimize order flow.",
    tech: ["React.js", "Node.js", "MongoDB"],
    icon: <Utensils className="w-6 h-6 text-purple-400" />,
    github: "https://github.com/AyushRaj89/FOOD_DEL",
    live: "#",
  },
  {
    title: "3D Portfolio",
    description:
      "An immersive 3D digital portfolio featuring real-time models and smooth Framer Motion animations.",
    tech: ["Three.js", "React.js", "Tailwind"],
    icon: <Monitor className="w-6 h-6 text-blue-400" />,
    github: "https://github.com/AyushRaj89",
    live: "#",
  },
  {
    title: "ParkEase",
    description:
      "Real-time parking management system with occupancy updates and intuitive slot maps.",
    tech: ["PHP", "MySQL", "JavaScript"],
    icon: <Car className="w-6 h-6 text-pink-400" />,
    github: "https://github.com/AyushRaj89/Online-Parking-System",
    live: "#",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-500"
    >
      {/* Subtle top-right glow */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col h-full">
        {/* Icon Header */}
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          {project.icon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-medium uppercase tracking-wider px-3 py-1 bg-white/5 border border-white/5 text-slate-500 rounded-lg group-hover:text-slate-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors ml-auto"
          >
            Live Demo <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-[#030303] relative overflow-hidden"
    >
      {/* Background Ambient light */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-purple-500 font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
          >
            Featured <span className="text-slate-500 italic">Projects</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
