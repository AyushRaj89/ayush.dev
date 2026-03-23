

// const Hero = () => {
//   return (
//     <section className="h-screen flex items-center justify-center relative px-6 overflow-hidden">
//       <div className="text-center max-w-5xl mx-auto z-10">
//         <h1 className="text-7xl md:text-9xl font-black mb-8">
//           Ayush <span className="text-gradient">Raj</span>.
//         </h1>

//         <h2 className="text-2xl md:text-4xl font-bold text-white/90 mb-8">
//           Full Stack Developer
//         </h2>

//         <p className="text-lg md:text-xl text-slate-400 mb-14 max-w-2xl mx-auto">
//           Building scalable and interactive web experiences with a focus on
//           performance, aesthetics, and user-centric design.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <section className="min-h-[85vh] pt-28 flex items-center justify-center relative px-6 overflow-hidden">
      {/* Background overlay (fixes grid dominance) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/60 to-primary -z-10"></div>

      <div className="text-center max-w-4xl mx-auto z-10">
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
          Ayush <span className="text-gradient">Raj</span>.
        </h1>

        <h2 className="text-xl md:text-3xl font-semibold text-white/90 mb-6">
          Full Stack Developer
        </h2>

        <p className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Building scalable and interactive web experiences with a focus on
          performance, aesthetics, and user-centric design.
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary to-transparent"></div>
    </section>
  );
};

export default Hero;