import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
  Mail,
  Github,
  MessageSquare,
  Phone,
  Send,
  User,
  Linkedin,
  ArrowUpRight,
  Globe,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_6hhdjff",
        "template_mu918bi",
        formData,
        "LQ-pSHgBng7gATklU",
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => alert("Failed to send. Check console."))
      .finally(() => setIsSending(false));
  };

  const contactDetails = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "ayushraj3864@gmail.com",
      link: "mailto:ayushraj3864@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91 8084386427",
      link: "tel:+918084386427",
      color: "text-emerald-400",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      link: "https://github.com/AyushRaj89",
      color: "hover:text-white",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ayush8027/",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-32 px-6 bg-[#030303] relative overflow-hidden flex items-center"
    >
      {/* Dynamic Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        {/* LEFT SIDE: INFO & SOCIALS */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8">
            Let's{" "}
            <span className="text-slate-500 italic font-light">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-md mb-12 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>

          <div className="space-y-6 mb-12">
            {contactDetails.map((item, i) => (
              <a
                href={item.link}
                key={i}
                className="group flex items-center gap-6 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    {item.label}
                  </p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="ml-auto text-slate-600 group-hover:text-white transition-colors"
                />
              </a>
            ))}
          </div>

          {/* SOCIALS GRID */}
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/5 bg-white/[0.02] text-slate-400 ${social.color} transition-all grow justify-center font-bold text-sm`}
              >
                {social.icon} {social.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <User className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-400 size-4 transition-colors" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                  className="w-full pl-8 py-4 bg-transparent border-b border-white/10 focus:border-purple-500 outline-none transition-all text-white placeholder:text-slate-600"
                />
              </div>
              <div className="relative group">
                <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-400 size-4 transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full pl-8 py-4 bg-transparent border-b border-white/10 focus:border-purple-500 outline-none transition-all text-white placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="relative group">
              <MessageSquare className="absolute left-0 top-4 text-slate-500 group-focus-within:text-purple-400 size-4 transition-colors" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
                rows="4"
                className="w-full pl-8 py-4 bg-transparent border-b border-white/10 focus:border-purple-500 outline-none transition-all text-white placeholder:text-slate-600 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSending}
              className="w-full py-5 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-3 hover:bg-purple-50 transition-colors disabled:opacity-50"
            >
              {isSending ? "Sending..." : "Send Message"}
              <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
