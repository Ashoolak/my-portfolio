export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const workExperience: WorkExperience[] = [
  {
    company: 'Company 1',
    position: 'Senior Full Stack Developer',
    period: '2022 - Present',
    description: [
      'Led the development of a modern web application using Next.js and TypeScript',
      'Implemented real-time features and authentication system',
      'Optimized application performance and reduced load times by 40%',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
  },
  {
    company: 'Company 2',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description: [
      'Developed and maintained multiple client-facing applications',
      'Collaborated with design team to implement responsive UI components',
      'Reduced bug reports by 60% through improved testing practices',
    ],
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
  },
];
