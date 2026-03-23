import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "August 2023 - Present",
    score: "CGPA: 7.03",
    color: "accent",
  },
  {
    degree: "Intermediate (12th)",
    field: "Science",
    institution: "Nathu Koshi +2 High School Dagmara",
    location: "Supaul, Bihar",
    duration: "April 2021 - March 2023",
    score: "Percentage: 80.3%",
    color: "highlight",
  },
  {
    degree: "Matriculation (10th)",
    field: "",
    institution: "Jageswar High School Kunauli",
    location: "Supaul, Bihar",
    duration: "April 2020 - March 2021",
    score: "Percentage: 87%",
    color: "accent",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen py-40 px-6 bg-primary relative"
    >
      {/* Decorative background */}
      <div
        data-gsap="glow"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none -z-10"
      ></div>

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
            My <span className="text-gradient">Education</span>.
          </h2>
          <div
            data-gsap="divider"
            className="w-24 h-1.5 bg-gradient-to-r from-accent to-highlight"
          ></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div
            data-gsap="timeline-line"
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-highlight to-accent/20"
          ></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-80px" }}
              className={`relative flex items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className={`w-4 h-4 rounded-full border-[3px] ${
                    edu.color === "accent"
                      ? "bg-accent border-accent/50 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                      : "bg-highlight border-highlight/50 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                  }`}
                ></motion.div>
              </div>

              {/* Content Card */}
              <div
                className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-0" : "md:pl-0"} pl-16 md:pl-0`}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group glass-card relative overflow-hidden"
                >
                  {/* Glow */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 ${
                      edu.color === "accent"
                        ? "bg-accent/5 group-hover:bg-accent/15"
                        : "bg-highlight/5 group-hover:bg-highlight/15"
                    } blur-[40px] rounded-full -z-10 transition-all`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 transition-all duration-300 ${
                      edu.color === "accent"
                        ? "bg-accent/10 border-accent/20 text-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                        : "bg-highlight/10 border-highlight/20 text-highlight group-hover:bg-highlight group-hover:text-white group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                    }`}
                  >
                    <GraduationCap className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tight group-hover:text-accent transition-colors">
                    {edu.degree}
                  </h3>
                  {edu.field && (
                    <p className="text-lg text-white/70 font-semibold mb-2">
                      {edu.field}
                    </p>
                  )}
                  <p className="text-slate-400 text-lg mb-4 italic">
                    {edu.institution}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </span>
                  </div>

                  {/* Score Badge */}
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-bold tracking-wide ${
                      edu.color === "accent"
                        ? "bg-accent/10 border border-accent/20 text-accent"
                        : "bg-highlight/10 border border-highlight/20 text-highlight"
                    }`}
                  >
                    {edu.score}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
