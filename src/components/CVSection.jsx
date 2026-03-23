import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

const CVSection = () => {
  // 👇 Path to your CV file
  const cvUrl = "/cv.pdf";

  return (
    <section id="CVSection" className="py-32 px-6 bg-primary relative">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black mb-10"
        >
          My <span className="text-gradient">Resume</span>
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          {/* 👁️ View CV */}
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold hover:scale-105 transition"
          >
            <Eye className="w-5 h-5" />
            View CV
          </a>

          {/* ⬇️ Download CV */}
          <a
            href={cvUrl}
            download
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-accent text-accent font-bold hover:bg-accent hover:text-white transition"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CVSection;
