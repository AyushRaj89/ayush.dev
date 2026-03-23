import { motion } from 'framer-motion';
import { Code2, Wrench, Layers, Brain } from 'lucide-react';

const skillGroups = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    color: "accent",
    skills: [
      {
        name: "Java",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg"
            className="w-5 h-5"
          />
        ),
      },
      {
        name: "C++",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
            className="w-5 h-5"
          />
        ),
      },
    ],
  },
  {
    title: "Frameworks & Technologies",
    icon: <Layers className="w-6 h-6" />,
    color: "highlight",
    // skills: ["HTML & CSS", "Tailwind CSS", "Node.js", "React.js"],
    skills: [
      {
        name: "HTML5",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            className="w-5 h-5"
          />
        ),
      },
      {
        name: "CSS3",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            className="w-5 h-5"
          />
        ),
      },
      {
        name: "Node.js",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
            className="w-5 h-5"
          />
        ),
      },
      {
        name: "React.js",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            className="w-5 h-5"
          />
        ),
      },
    ],
  },
  {
    title: "Tools & Databases",
    icon: <Wrench className="w-6 h-6" />,
    color: "accent",
    // skills: ["MySQL", "MongoDB"],
    skills: [
      {
        name: "MySQL",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            className="w-5 h-5"
          />
        ),
      },
      {
        name: "MongoDB",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
            className="w-5 h-5"
          />
        ),
      },
      {
        name: "Github",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            className="w-5 h-5"
          />
        ),
      },
    ],
  },
  {
    title: "Soft Skills",
    icon: <Brain className="w-6 h-6" />,
    color: "highlight",
    skills: [
      { name: "Problem-Solving" },
      { name: "Adaptability" },
      { name: "Time Management" },
      { name: "Decision-Making" },
    ],
  },
];

const SkillTag = ({ skill, index, color }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.1, y: -4 }}
    className={`inline-block px-5 py-2.5 rounded-full text-sm font-bold tracking-wide cursor-default transition-all duration-300
      ${
        color === "accent"
          ? "bg-accent/10 border border-accent/20 text-accent"
          : "bg-highlight/10 border border-highlight/20 text-highlight"
      }`}
  >
    <div className="flex items-center gap-2">
      {skill.icon}
      <span>{skill.name}</span>
    </div>
  </motion.span>
);

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-40 px-6 bg-primary relative">
      {/* Decorative background blur */}
      <div data-gsap="glow" className="absolute top-1/3 right-0 w-[40vw] h-[40vw] bg-highlight/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div data-gsap="glow" className="absolute bottom-1/4 left-0 w-[30vw] h-[30vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

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
            My <span className="text-gradient">Skills</span>.
          </h2>
          <div data-gsap="divider" className="w-24 h-1.5 bg-gradient-to-r from-accent to-highlight"></div>
        </motion.div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: groupIndex * 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              className="group glass-card relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${group.color === 'accent' ? 'bg-accent/5 group-hover:bg-accent/15' : 'bg-highlight/5 group-hover:bg-highlight/15'} blur-[40px] rounded-full -z-10 transition-all`}></div>
              
              {/* Group Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300
                  ${group.color === 'accent'
                    ? 'bg-accent/10 border-accent/20 text-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'
                    : 'bg-highlight/10 border-highlight/20 text-highlight group-hover:bg-highlight group-hover:text-white group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]'
                  }
                `}>
                  {group.icon}
                </div>
                <h3 className="text-2xl font-black tracking-tight">{group.title}</h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <SkillTag key={skill} skill={skill} index={skillIndex} color={group.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
