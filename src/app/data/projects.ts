export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'A modern web application built with Next.js and TypeScript.',
    image: '/project1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1.com',
  },
  {
    title: 'Project 2',
    description:
      'Full-stack application with real-time features and authentication.',
    image: '/project2.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2.com',
  },
  {
    title: 'Project 3',
    description: 'Mobile-first responsive design with advanced animations.',
    image: '/project3.jpg',
    technologies: ['React', 'Framer Motion', 'Styled Components'],
    github: 'https://github.com/yourusername/project3',
    demo: 'https://project3.com',
  },
];
