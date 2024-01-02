// pages/projects/[id].js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import projects from '../../data/projects'; // Adjust the import path as needed

export async function getStaticPaths() {
  // Generate the paths for static generation based on project IDs
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));
  return { paths, fallback: 'blocking' }; // Use 'blocking' to wait for the data if not generated at build time
}

export async function getStaticProps({ params }) {
  // Find the project by ID
  const project = projects.find((p) => p.id.toString() === params.id);

  // If the project doesn't exist, return a 404
  if (!project) {
    return { notFound: true };
  }

  // Return the project as props
  return { props: { project } };
}

export default function ProjectDetails({ project }) {
  // Initialize the selected image with the first image from the project or null if not available
  const [selectedImage, setSelectedImage] = useState(
    project?.images?.[0] || null
  );
  const [view, setView] = useState('motivation'); // 'motivation' or 'achievements'

  // Set the selected image when the project data changes
  useEffect(() => {
    if (project && project.images.length > 0) {
      setSelectedImage(project.images[0]);
    }
  }, [project]);

  // Guard clause for when the project data is loading (if fallback is 'blocking', this state will be skipped)
  if (!project) {
    return <div>Loading...</div>;
  }

  // Split long description into paragraphs
  const longDescriptionParagraphs = project.longDescription
    .split(';')
    .map((sentence) => sentence.trim());

  return (
    <>
      <Header />
      <main className="min-h-screen text-white p-4">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-start lg:items-center justify-between">
          {/* Image Gallery */}
          <div className="flex-1 mt-8">
            <div className="mb-4">
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                />
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} ${index}`}
                  className="w-full h-24 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out cursor-pointer hover:scale-110"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>
          {/* Project Details */}
          <div className="flex-1 mt-12 lg:mt-16 lg:mr-8">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-400 mb-4">
              {linkify(project.shortDescription)}
            </p>
            <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
            <ul className="list-disc pl-5 mb-4">
              {project.techStack.map((tech, index) => (
                <li key={index} className="text-green-400 mb-1">
                  {tech}
                </li>
              ))}
            </ul>
            {/* Project Details */}
            <div className="flex justify-center lg:justify-start mb-6 mt-8">
              <button
                onClick={() => setView('motivation')}
                className={`px-4 py-2 mx-2 text-lg rounded-md outline-1 ${
                  view === 'motivation'
                    ? 'bg-gray-500'
                    : 'text-white bg-transparent hover:bg-gray-700'
                } transition duration-300 ease-in-out focus:outline-none`}
              >
                Motivation
              </button>
              <button
                onClick={() => setView('achievements')}
                className={`px-4 py-2 mx-2 text-lg rounded-md outline-1 outline-purple-900 ${
                  view === 'achievements'
                    ? 'bg-gray-500'
                    : 'text-white bg-transparent hover:bg-gray-700'
                } transition duration-300 ease-in-out focus:outline-none`}
              >
                Achievements
              </button>
            </div>
            <div className="text-gray-400 w-full">
              {/* Dynamic Content Based on Selection */}
              {view === 'motivation' && (
                <div className="text-white mb-6">
                  <h2 className="text-2xl font-semibold mb-4">Motivation</h2>
                  <p>{project.motivation}</p>
                </div>
              )}
              {view === 'achievements' && (
                <div className="text-white">
                  <h2 className="text-2xl font-semibold mb-4">
                    Actions / Achievements
                  </h2>
                  {longDescriptionParagraphs.map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      - {paragraph}
                      {index < longDescriptionParagraphs.length - 1 && <br />}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function linkify(text) {
  const urlRegex =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  return text.split(' ').map((word, i) => {
    if (urlRegex.test(word)) {
      return (
        <a
          key={i}
          href={word}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {word}
        </a>
      );
    } else {
      return word + ' ';
    }
  });
}
