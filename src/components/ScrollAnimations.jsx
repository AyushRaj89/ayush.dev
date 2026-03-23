import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    // Small delay to ensure DOM is ready after Framer Motion hydration
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {

        // 1. Scroll Progress Bar — scrub-based
        if (progressRef.current) {
          gsap.to(progressRef.current, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: document.documentElement,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.3,
            },
          });
        }

        // 2. Gradient Divider Bars — grow from left on scroll
        gsap.utils.toArray('[data-gsap="divider"]').forEach((bar) => {
          gsap.fromTo(
            bar,
            { scaleX: 0, transformOrigin: 'left center' },
            {
              scaleX: 1,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: bar,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        // 3. Education Timeline Line — draw on scroll
        const timelineLine = document.querySelector('[data-gsap="timeline-line"]');
        if (timelineLine) {
          gsap.fromTo(
            timelineLine,
            { scaleY: 0, transformOrigin: 'top center' },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: timelineLine.closest('.relative'),
                start: 'top 65%',
                end: 'bottom 35%',
                scrub: 0.5,
              },
            }
          );
        }

        // 4. Parallax on section-level decorative glow/blur orbs
        gsap.utils.toArray('[data-gsap="glow"]').forEach((glow) => {
          gsap.to(glow, {
            yPercent: -25,
            ease: 'none',
            scrollTrigger: {
              trigger: glow.closest('section'),
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        });

        // 5. Footer fade-in
        const footer = document.querySelector('footer');
        if (footer) {
          gsap.fromTo(
            footer,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: footer,
                start: 'top 95%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        // 6. Section background subtle blur-sharpen on entry
        gsap.utils.toArray('section[id]').forEach((section) => {
          gsap.fromTo(
            section,
            { filter: 'blur(6px)', willChange: 'filter' },
            {
              filter: 'blur(0px)',
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left"
      style={{
        transform: 'scaleX(0)',
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)',
      }}
    />
  );
};

export default ScrollAnimations;
