import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import aboutStyles from '../styles/Home.module.css';
import CompanyCard from '@/components/CompanyCard';
import ProjectCard from '@/components/ProjectCard';
import workExperiences from '@/data/workExperience';
import projects from '@/data/projects';

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Hello there,', "I'm Ashkan Yazdi Zadeh"],
      typeSpeed: 50,
      backSpeed: 35,
      smartBackspace: true,
      showCursor: false,
      onComplete: () => {
        document.querySelector(`.${aboutStyles.shortAbout}`).style.opacity = 1;
        setTimeout(() => {
          document.querySelector(`.${aboutStyles.myStory}`).style.opacity = 1;
          document.querySelector(
            `.${aboutStyles.myStoryText}`
          ).style.opacity = 1;
        }, 2000);
      },
    };

    // elRef refers to the element with class 'typed'
    typedRef.current = new Typed('.typed', options);

    // Clean up Typed instance on component unmount
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
              <p className={`${aboutStyles.shortAbout} ${aboutStyles.hidden}`}>
                A Third year Computer Science student at the University of
                British Columbia, and a current software engineering intern at
                KPMG. I'm passionate about software development and problem
                solving.
              </p>
              <h2
                className={`${aboutStyles.subheader} ${aboutStyles.hidden} ${aboutStyles.myStory}`}
              >
                My story
              </h2>
              <p className={`${aboutStyles.hidden} ${aboutStyles.myStoryText}`}>
                From moving to Canada all by myself at the age 15, to starting
                the programming club at my high school, interning as a financial
                analyst at a tech start-up, and taking on a software engineer
                intern position at KPMG I have always been passionate about
                innovation and eager to take on new challenges.
                <br />
                <br />
                As I look to the future, my aim is to support fellow students
                who are navigating the tricky waters of professional
                development. By sharing resources and offering mentorship, I
                hope to help others build valuable connections and find their
                footing in their desired careers.
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
        <section id="Work-Experience" className="min-h-screen pt-28">
          <h2 className="text-center text-5xl font-bold text-white mb-20">
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

        <section id="Projects" className="min-h-screen pt-28">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-5xl font-bold text-white mb-20 text-center">
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
      <Footer />
    </>
  );
}
