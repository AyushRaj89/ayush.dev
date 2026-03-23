import { motion } from 'framer-motion';
import { Github, ExternalLink, Utensils, Monitor, Car } from 'lucide-react';

const projects = [
  {
    title: "Food Delivery Web Application",
    description:
      "Designed and implemented a dynamic food menu system with category-based filtering and keyword search functionality to optimize order processing and user flow.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    icon: <Utensils className="w-10 h-10 text-accent mb-6" />,
    github: "https://github.com/AyushRaj89/FOOD_DEL",
    live: "#",
  },
  {
    title: "3D Web Developer Portfolio",
    description:
      "An interactive 3D digital personal portfolio featuring real-time models and immersive UX animations to showcase technical skills and creative software engineering.",
    tech: ["Three.js", "React.js", "Framer Motion", "Tailwind"],
    icon: <Monitor className="w-10 h-10 text-highlight mb-6" />,
    github: "https://github.com/AyushRaj89",
    live: "#",
  },
  {
    title: "Parking Finder (ParkEase)",
    description:
      "A web-based parking management system that provides real-time occupancy updates and color-coded slot maps for intuitive and stress-free user navigation.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    icon: <Car className="w-10 h-10 text-white mb-6" />,
    github: "https://github.com/AyushRaj89/Online-Parking-System",
    live: "#",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -15, scale: 1.02 }}
      className="group glass-card relative flex flex-col justify-between overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border-white/5 hover:border-accent/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-500"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] rounded-full -z-10 group-hover:bg-accent/15 transition-all"></div>
      
      <div>
        {project.icon}
        <h3 className="text-3xl font-black mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-slate-400 mb-8 leading-relaxed text-lg line-clamp-3 italic">
          "{project.description}"
        </p>
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((tag, tagIndex) => (
            <span key={tagIndex} className="text-[10px] font-black uppercase tracking-[0.15em] px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/50 group-hover:border-accent/30 group-hover:text-accent transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 btn-secondary !py-3 !px-4 text-xs group/btn relative overflow-hidden">
          <Github className="w-4 h-4" /> Codebase
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 btn-primary !py-3 !px-4 text-xs !shadow-none hover:bg-white hover:text-black">
          <ExternalLink className="w-4 h-4" /> Live Demo
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-40 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
           viewport={{ once: true }}
           className="mb-24"
        >
           <h2 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter">My <span className="text-gradient">Creations</span>.</h2>
           <div data-gsap="divider" className="w-24 h-1.5 bg-gradient-to-r from-accent to-highlight"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
