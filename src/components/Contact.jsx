import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Mail, Github, MessageSquare, Phone, Send, User } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Handles input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handles form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6hhdjff", // replace
        "template_mu918bi", // replace
        formData,
        "LQ-pSHgBng7gATklU", // replace
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // clear form
      })
      .catch((error) => {
        console.error("EmailJS Error:", error); // This will tell you the REAL problem in the console
        alert("Failed to send message. Check console for details.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-40 px-6 relative bg-primary"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-24 lg:p-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 w-full text-center lg:text-left"
        >
          <h2 className="text-6xl md:text-8xl font-black mb-10">
            Let's <span className="text-gradient">Talk</span>.
          </h2>

          <p className="text-xl text-slate-400 mb-14">
            I'm open to projects, ideas, and collaborations.
          </p>

          <div className="space-y-6">
            <p className="text-lg">📧 ayushraj3864@gmail.com</p>
            <p className="text-lg">📞 +91 8084386427</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div className="lg:w-1/2 w-full glass-card p-10">
          {/* ✅ ONLY ONE FORM */}
          <form onSubmit={handleSubmit} className="space-y-8 flex flex-col">
            {/* NAME */}
            <div className="relative">
              <User className="absolute left-0 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full pl-8 border-b bg-transparent"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-0 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full pl-8 border-b bg-transparent"
              />
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <MessageSquare className="absolute left-0 top-2" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full pl-8 border-b bg-transparent"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="btn-primary flex items-center justify-center py-4"
            >
              Send Message <Send className="ml-2" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
