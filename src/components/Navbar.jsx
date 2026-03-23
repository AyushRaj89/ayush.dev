import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  GraduationCap,
  Award,
  FileUser,
  MessageSquare,
} from "lucide-react";

const navLinks = [
  {
    name: "Projects",
    href: "#projects",
    icon: <ArrowRight className="w-4 h-4" />,
  },
  {
    name: "Education",
    href: "#education",
    icon: <GraduationCap className="w-4 h-4" />,
  },
  {
    name: "Certificates",
    href: "#certifications",
    icon: <Award className="w-4 h-4" />,
  },
  { name: "Resume", href: "#CVSection", icon: <FileUser className="w-4 h-4" /> },
  {
    name: "Contact",
    href: "#contact",
    icon: <MessageSquare className="w-4 h-4" />,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-primary/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-black tracking-tight">
          Ayush<span className="text-gradient">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden px-6"
      >
        <div className="flex flex-col gap-4 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-base font-semibold text-slate-300 hover:text-white transition"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
