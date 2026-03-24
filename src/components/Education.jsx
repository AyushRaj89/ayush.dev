
import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { useRef } from "react";

const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "2023 - Present",
    score: "CGPA: 7.03",
    color: "from-blue-500 to-cyan-400",
  },
  {
    degree: "Intermediate (12th)",
    field: "Science",
    institution: "Nathu Koshi +2 High School",
    location: "Supaul, Bihar",
    duration: "2021 - 2023",
    score: "Percentage: 80.3%",
    color: "from-purple-500 to-pink-400",
  },
  {
    degree: "Matriculation (10th)",
    field: "General Science",
    institution: "Jageswar High School",
    location: "Supaul, Bihar",
    duration: "2020 - 2021",
    score: "Percentage: 87%",
    color: "from-blue-500 to-indigo-400",
  },
];

const Education = () => {
  const containerRef = useRef(null);

  // This handles the "line going down with page" logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="education"
      ref={containerRef}
      className="py-32 px-6 bg-[#030303] relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Academic{" "}
            <span className="text-slate-500 italic font-light">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* THE ANIMATED LINE: scaleY drives the "3D scrolling" effect */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent origin-top z-0"
          />

          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-24 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline Dot with Pulse Effect */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white border-4 border-[#030303] z-10" />
                  <div
                    className={`absolute w-8 h-8 rounded-full bg-white/10 animate-ping`}
                  />
                </div>
              </div>

              {/* Card Container */}
              <div
                className={`w-full md:w-[45%] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="group p-8 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">
                    <Calendar size={14} />
                    {edu.duration}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1 leading-tight group-hover:text-purple-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-slate-300 font-medium mb-4">
                    {edu.field}
                  </p>

                  <div className="flex items-start gap-2 text-slate-500 mb-6">
                    <MapPin size={16} className="mt-1 flex-shrink-0" />
                    <span className="text-sm">
                      {edu.institution}, {edu.location}
                    </span>
                  </div>

                  {/* Refined Score Badge */}
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${edu.color} bg-opacity-10 text-white text-sm font-bold shadow-lg shadow-purple-500/10`}
                  >
                    <Award size={16} />
                    {edu.score}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;