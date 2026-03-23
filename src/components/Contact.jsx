import { motion } from 'framer-motion';
import { Mail, Github, MessageSquare, Phone, Send, User } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-40 px-6 relative bg-primary">
      {/* Background Decorative Element */}
      <div data-gsap="glow" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-24 lg:p-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full text-center lg:text-left"
        >
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-highlight/10 border border-highlight/20 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-highlight"
          >
             Available for work
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-tight">Let's <span className="text-gradient">Talk</span>.</h2>
          <p className="text-xl text-slate-400 mb-14 max-w-xl leading-relaxed italic mx-auto lg:mx-0">
            "I'm always open to discussing new projects, creative ideas, or being part of your vision."
          </p>

          <div className="space-y-8 flex flex-col items-center lg:items-start">
             <a href="mailto:ayushraj3864@gmail.com" className="flex items-center gap-4 group w-fit">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center border border-accent/20 transition-all group-hover:bg-accent group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                   <Mail className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                   <span className="block text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 mb-1">Email Me Directly</span>
                   <span className="block text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">ayushraj3864@gmail.com</span>
                </div>
             </a>

             <div className="flex items-center gap-4 group w-fit">
                <div className="w-14 h-14 bg-highlight/10 rounded-2xl flex items-center justify-center border border-highlight/20 transition-all group-hover:bg-highlight">
                   <Phone className="w-6 h-6 text-highlight group-hover:text-white transition-colors" />
                </div>
                <div>
                   <span className="block text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 mb-1">Let's Chat</span>
                   <span className="block text-2xl font-bold tracking-tight group-hover:text-highlight transition-colors">+91 8084386427</span>
                </div>
             </div>

             <div className="flex gap-4 pt-4">
                <a href="https://github.com/AyushRaj89" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all">
                   <Github className="w-6 h-6" />
                </a>
                <a href="http://www.linkedin.com/in/ayush8027" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all">
                   {/* Fallback to text if Lucide LinkedIn icon isn't available */}
                   <span className="font-black text-xs uppercase tracking-widest px-1">LI</span>
                </a>
             </div>
          </div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 w-full glass-card !p-12 shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-white/5"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <form className="space-y-10 flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              <User className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 transition-colors group-focus-within:text-accent" />
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full bg-transparent border-b-2 border-white/10 py-4 px-10 text-xl focus:outline-none focus:border-accent transition-all placeholder:text-slate-600 font-bold"
              />
            </div>
            
            <div className="relative group">
              <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 transition-colors group-focus-within:text-accent" />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-transparent border-b-2 border-white/10 py-4 px-10 text-xl focus:outline-none focus:border-accent transition-all placeholder:text-slate-600 font-bold"
              />
            </div>

            <div className="relative group">
              <MessageSquare className="absolute left-0 top-6 w-5 h-5 text-slate-600 transition-colors group-focus-within:text-accent" />
              <textarea 
                placeholder="Your Message"
                rows="4"
                className="w-full bg-transparent border-b-2 border-white/10 py-4 px-10 text-xl focus:outline-none focus:border-accent transition-all placeholder:text-slate-600 font-bold resize-none"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary flex items-center justify-center py-6 text-xl tracking-widest uppercase font-black overflow-hidden group/send">
              <span className="flex items-center gap-3">
                Forward Vision
                <Send className="w-6 h-6 group-hover/send:translate-x-1 group-hover/send:-translate-y-1 transition-transform" />
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
