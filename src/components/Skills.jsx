
import { motion } from "framer-motion";
import { Code2, Wrench, Layers, Brain, CheckCircle2 } from "lucide-react";

const skillGroups = [
  {
    title: "Core Development",
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
    description: "Building robust logic and scalable architectures.",
    skills: [
      { name: "Java", img: "java/java-original.svg" },
      { name: "C++", img: "cplusplus/cplusplus-original.svg" },
      { name: "Node.js", img: "nodejs/nodejs-original.svg" },
    ],
    className: "md:col-span-2 lg:col-span-2", // Large Card
  },
  {
    title: "Frontend",
    icon: <Layers className="w-5 h-5 text-purple-400" />,
    description: "Crafting beautiful, responsive interfaces.",
    skills: [
      { name: "React.js", img: "react/react-original.svg" },
      { name: "Tailwind", img: "tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5", img: "html5/html5-original.svg" },
    ],
    className: "md:col-span-1 lg:col-span-1", // Small Card
  },
  {
    title: "Infrastructure",
    icon: <Wrench className="w-5 h-5 text-pink-400" />,
    description: "Data management and version control.",
    skills: [
      { name: "MongoDB", img: "mongodb/mongodb-original.svg" },
      { name: "MySQL", img: "mysql/mysql-original.svg" },
      { name: "GitHub", img: "github/github-original.svg" },
    ],
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Human Skills",
    icon: <Brain className="w-5 h-5 text-emerald-400" />,
    description: "Collaborating and solving complex problems.",
    skills: [
      { name: "Problem Solving" },
      { name: "Adaptability" },
      { name: "Leadership" },
    ],
    className: "md:col-span-1 lg:col-span-2",
  },
];

const SkillCard = ({ group, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 ${group.className}`}
  >
    {/* Decorative corner glow */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-purple-500/10 transition-colors" />

    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-500">
          {group.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{group.title}</h3>
          <p className="text-xs text-slate-500">{group.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-8">
        {group.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            {skill.img ? (
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.img}`}
                className="w-4 h-4"
                alt={skill.name}
              />
            ) : (
              <CheckCircle2 size={14} className="text-emerald-500" />
            )}
            <span className="font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-[#030303] relative overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              Technical <span className="text-slate-500 italic">Arsenal</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm leading-relaxed">
            Continuously evolving my stack to build performant and beautiful
            digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;