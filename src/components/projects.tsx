'use client';

import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Intern Insider Newsletter',
    description:
      'A weekly newsletter with 77,000+ subscribers featuring curated internship opportunities for students across Canada.',
    image: '/companies/InternInsider.png',
    technologies: ['Next.js', 'Firebase', 'Email Marketing', 'SparkLoop'],
    github: 'https://github.com/AshhWu/intern-insider-newsletter',
    demo: 'https://interninsider.me',
  },
  {
    title: 'Intern Insider Job Board',
    description:
      'A job board featuring 7,000+ active internships scraped directly from company websites, updated every 15 minutes.',
    image: '/companies/InternInsider.png',
    technologies: ['Next.js', 'Firebase', 'Algolia', 'AWS', 'Puppeteer'],
    github: 'https://github.com/AshhWu/intern-insider-jobboard',
    demo: 'https://app.interninsider.me',
  },
  {
    title: 'University BD Tool',
    description:
      'A SaaS platform for university career centers to find internship opportunities and recruiter contacts for employer outreach.',
    image: '/companies/InternInsider.png',
    technologies: ['React', 'Firebase', 'Node.js', 'AI', 'Data Processing'],
    github: 'https://github.com/AshhWu/intern-insider-bdtool',
    demo: 'https://bd.interninsider.me',
  },
];

const tiltOptions = {
  scale: 1.05,
  speed: 1000,
  max: 10,
};

export function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Tilt options={tiltOptions} className="h-full">
            <div className="glass-effect h-full rounded-xl overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(var(--background))]/80 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-[hsl(var(--muted-foreground))] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  );
}
