import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";

const CVSection = () => {
  const cvUrl = "/cv.pdf"; // Path to your CV

  return (
    <section
      id="CVSection"
      className="py-20 px-6 bg-[#030303] relative overflow-hidden"
    >
      {/* Background Ambient Glow (Small & Focused) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-purple-500/20 transition-all duration-500"
        >
          {/* Left Side: Info */}
          <div className="flex items-center gap-6 text-center md:text-left">
            <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-500">
              <FileText size={32} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-1">
                Curriculum{" "}
                <span className="text-slate-500 italic font-light">Vitae</span>
              </h2>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
                Latest Update: Mar 2026
              </p>
            </div>
          </div>

          {/* Right Side: Compact Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* View Button */}
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-bold transition-all hover:bg-purple-50 shadow-lg shadow-white/5"
            >
              <Eye size={18} />
              View
            </motion.a>

            {/* Download Button */}
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={cvUrl}
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold transition-all hover:bg-white/10"
            >
              <Download size={18} />
              Download
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CVSection;
