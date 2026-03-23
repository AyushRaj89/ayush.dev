import React from 'react';
import ThreeBackground from './components/ThreeBackground';
import ScrollAnimations from './components/ScrollAnimations';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CVSection from './components/CVSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-accent/30 selection:text-white">
      {/* 3D Background sits behind everything */}
      <ThreeBackground />

      {/* GSAP ScrollTrigger Animations + Progress Bar */}
      <ScrollAnimations />

      {/* Scrollable Content */}
      <main className="relative z-0">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <CVSection />
        <Contact />
      </main>

      <footer className="text-center py-6 text-gray-500 text-sm relative z-0">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
