import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Header from '../components/Header';
import aboutStyles from '../styles/Home.module.css';
import CompanyCard from '@/components/CompanyCard';
import ProjectCard from '@/components/ProjectCard';
import workExperiences from '@/data/workExperience';
import projects from '@/data/projects';
import Divider from '@/components/Divider';

export default function Home() {
  const myStoryRef = useRef(null);
  const shortAboutRef = useRef(null);
  const myStoryTextRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Hello there,', "I'm Ashkan Yazdi Zadeh"],
      typeSpeed: 50,
      backSpeed: 35,
      smartBackspace: true,
      showCursor: false,
      onComplete: () => {
        if (myStoryRef.current) {
          myStoryRef.current.style.opacity = 1;
        }
        if (shortAboutRef.current) {
          shortAboutRef.current.style.opacity = 1;
        }
        setTimeout(() => {
          if (myStoryTextRef.current) {
            myStoryTextRef.current.style.opacity = 1;
          }
        }, 2000);
      },
    };

    typedRef.current = new Typed('.typed', options);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <section id="About" className="min-h-screen">
          <div className={aboutStyles.mainContainer}>
            <div className={aboutStyles.textContent}>
              <span className={`typed ${aboutStyles.typing}`} />
              <ul
                className={`${aboutStyles.shortAbout} ${aboutStyles.hidden}`}
                ref={shortAboutRef}
              >
                <li>4th year Computer Science student at the UBC</li>
                <li>
                  Founder of the largest tech/business internship newsletter in
                  North America
                </li>
                <li>Prev. Software Engineering Intern at KPMG</li>
                <li>Software Developer at UBC Launchpad</li>
                <li>
                  Passionate about software development and problem solving
                </li>
              </ul>
              <h2
                ref={myStoryRef}
                className={`${aboutStyles.subheader} ${aboutStyles.hidden}`}
              >
                My story
              </h2>
              <p
                ref={myStoryTextRef}
                className={`${aboutStyles.hidden} ${aboutStyles.myStoryText}`}
              >
                From moving to Canada all by myself at the age 15, to starting
                the programming club at my high school, interning as a financial
                analyst at a tech start-up, taking on a software engineer intern
                position at KPMG, and co-founding a newsletter with 10s of
                thousands of subscribers I have always been passionate about
                innovation and eager to take on new challenges.
                <br />
                <br />
                Looking ahead, I'm excited to put my computer science and
                programming skills to good use by developing practical solutions
                for individuals and businesses. More than that, I want to lend a
                helping hand to young people who are just beginning their
                careers. Whether it's through creating software in that field or
                simply sharing what I've learned, my goal is to make the journey
                a bit easier for those who are just starting out.
              </p>
            </div>
            <div className={aboutStyles.profileImageContainer}>
              <img
                src="../../me.png"
                alt="Ashkan Yazdi Zadeh"
                className={aboutStyles.profileImage}
              />
            </div>
          </div>
        </section>
        <Divider />
        <section
          id="Work-Experience"
          className="min-h-screen pt-8 md:pt-24 mb-12"
        >
          <h2 className="text-center md:text-5xl text-4xl font-bold text-white mb-10 md:pt-0 pt-8">
            Work Experience
          </h2>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              {workExperiences.map((experience, index) => (
                <CompanyCard
                  key={index}
                  id={experience.id}
                  imageUrl={experience.imageUrl}
                  companyName={experience.companyName}
                  title={experience.title}
                />
              ))}
            </div>
          </div>
        </section>
        <Divider />
        <section id="Projects" className="min-h-screen pt-8 md:pt-20">
          <div className="container mx-auto px-4 py-8">
            <h2 className="md:text-5xl text-4xl font-bold text-white mb-10 text-center">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  imageUrl={project.imageUrl}
                  projectTitle={project.title}
                  techStack={project.techStack}
                  description={project.shortDescription}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
