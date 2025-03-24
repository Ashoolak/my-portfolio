'use client';

import { motion } from 'framer-motion';

const technologiesData = [
  {
    category: 'Frontend',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'Firebase',
      'MongoDB',
      'PostgreSQL',
      'REST APIs',
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: ['AWS', 'CI/CD', 'Docker', 'Git', 'GitHub Actions', 'Puppeteer'],
  },
  {
    category: 'Data & Analytics',
    skills: [
      'Algolia',
      'Google Analytics',
      'Web Scraping',
      'Data Cleaning',
      'AI/ML',
    ],
  },
];

export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {technologiesData.map((category, index) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="glass-effect p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold mb-4 gradient-text">
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill) => (
              <motion.div
                key={skill}
                className="px-4 py-2 bg-[hsl(var(--primary))]/10 rounded-full text-[hsl(var(--primary))] font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
