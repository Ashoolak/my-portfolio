'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Nav } from '../components/nav';
import { InternInsider } from '../components/intern-insider';
import { WorkExperience } from '../components/work-experience';
import { Skills } from '../components/skills';
import { Contact } from '../components/contact';

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function Home() {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: theme === 'dark' ? '#ffffff' : '#000000',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.3,
            random: false,
          },
          size: {
            value: 3,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: theme === 'dark' ? '#ffffff' : '#000000',
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.5,
              },
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      });
    }
  }, [theme]);

  return (
    <>
      <Nav />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          id="home"
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div id="particles-js" className="absolute inset-0" />

          <div className="relative z-10 text-center px-4">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold gradient-text">
                Ashkan Yazdi Zadeh
              </h1>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[hsl(var(--primary))]">
                <img
                  src="/me.png"
                  alt="Ashkan Yazdi Zadeh"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
                Full Stack Developer & Builder
              </p>
              <div className="flex justify-center gap-4">
                <motion.a
                  href="https://github.com/ashoolak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-effect hover-lift"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/ashkan-yazdi-zadeh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-effect hover-lift"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://x.com/Ashoolak82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-effect hover-lift"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTwitter className="w-6 h-6" />
                </motion.a>
              </div>
              <motion.div
                className="mt-8"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-6 h-10 border-2 border-[hsl(var(--primary))] rounded-full p-1 mx-auto">
                  <div className="w-1.5 h-1.5 bg-[hsl(var(--primary))] rounded-full mx-auto" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold gradient-text mb-4">
                About Me
              </h2>
              <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
                I like building stuff and scrolling on reels
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intern Insider Section */}
        <section
          id="intern-insider"
          className="py-20 px-4 bg-[hsl(var(--muted))]/30"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold gradient-text mb-4">
                My Company
              </h2>
              <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
                Changing how students find internships and universities connect
                with employers.
              </p>
            </motion.div>
            <InternInsider />
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold gradient-text mb-4">
                Other Work Experience
              </h2>
              <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
                My professional journey has equipped me with a diverse set of
                skills and experiences beyond Intern Insider.
              </p>
            </motion.div>
            <WorkExperience />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-[hsl(var(--muted))]/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold gradient-text mb-4">
                Skills & Technologies
              </h2>
              <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
                The tools and technologies I use to bring ideas to life.
              </p>
            </motion.div>
            <Skills />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold gradient-text mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
                Hit me up with any ideas, opportunities, or questions you have!
              </p>
            </motion.div>
            <Contact />
          </div>
        </section>
      </main>
    </>
  );
}
