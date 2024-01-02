const projects = [
  {
    id: 1,
    title: 'UBC Health and Wellness Online Quiz',
    techStack: ['React', 'Tailwind', 'MongoDB'],
    shortDescription:
      'An online Quiz educating students on sexual health created for UBC Health and Wellness Center @ https://health-quiz-853r-git-main-ashoolak.vercel.app/',
    longDescription:
      'Built a Next.js 13 website, integrating Tailwind CSS, and Hotjar for enhanced UX and user engagement analysis.;Conducted A/B testing on page aesthetics and navigational flow, optimizing background color and question transitions, which improved user engagement time by 30%.;Boosted monthly user count from 80 to 1000 and increased average site engagement from 1:19 to 5:38 minutes.;Added different types of cookie consent banners to analyze the behaviour of the users bsaed on the type of research received, contributing to an ongoing research at UBC',
    motivation:
      'While working closely with UBC Health and Wellness in a web development role, I learned about the challenges they faced in raising sexual health awareness through a PDF. Seeing an opportunity to blend my skills with a meaningful cause, I proposed transforming the PDF into an interactive quiz, making it both educational and enjoyable for students.',
    imageUrl: '/projects/HealthQuiz.png',
    images: [
      '/projects/HealthQuiz.png',
      '/projects/HealthQuiz2.png',
      '/projects/HealthQuiz3.png',
      '/projects/HealthQuiz4.png',
    ],
    link: 'https://health-quiz-853r-git-main-ashoolak.vercel.app/',
    github: 'https://github.com/Ashoolak/healthQuiz',
  },
  {
    id: 2,
    title: 'LinkedIn Networking Database',
    techStack: ['Oracle', 'PHP'],
    shortDescription:
      'A group project for CPSC 304, this initiative showcased our ability to efficiently create and query databases. We developed a robust system, demonstrating practical skills in database design and SQL querying.',
    longDescription:
      'Designed and normalized an Oracle-PHP database, producing a BCNF-compliant ER diagram with optimized data structures.;Developed 10+ efficient SQL queries for managing ISA hierarchies, weak entities, and aggregations.;Built a web application, integrating Oracle with PHP to handle user profiles, posts, and 1000s of social connections.',
    motivation:
      "The idea for this project hit me while I was scrolling through LinkedIn one day. I thought, 'Hey, why not create something like this for our CPSC 304 class at UBC?' I've always found LinkedIn super useful, and it seemed like a great way for us students to connect and share opportunities. So, I pitched this idea to my group, and we were all on board to work on this as our class project for CPSC 304",
    imageUrl: '/projects/LinkedInNetworking3.png',
    images: [
      '/projects/LinkedInNetworking3.png',
      '/projects/LinkedInNetworking1.png',
      '/projects/LinkedInNetworking2.png',
      '/projects/LinkedInNetworking4.png',
    ],
    link: 'https://www.students.cs.ubc.ca/~ashoolak/initial.php',
    github: 'https://github.com/Ashoolak/linkedInNetworkingDatabase',
  },
];

export default projects;
