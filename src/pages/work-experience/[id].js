import Image from 'next/image';
import Header from '../../components/Header';
import workExperiences from '../../data/workExperience'; // Adjust the import path as needed

export async function getStaticPaths() {
  // Generate the paths for static generation based on work experience IDs
  const paths = workExperiences.map((experience) => ({
    params: { id: experience.id.toString() },
  }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  // Find the work experience by ID
  const experience = workExperiences.find((e) => e.id.toString() === params.id);

  // If the experience doesn't exist, return a 404
  if (!experience) {
    return { notFound: true };
  }

  // Return the experience as props
  return { props: { experience } };
}

export default function WorkExperienceDetails({ experience }) {
  // Split description into paragraphs
  const bulletPoints = experience.description
    .split(';')
    .map((point) => point.trim());

  return (
    <>
      <Header />
      <main className="min-h-screen p-4 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="container mx-auto p-4">
          <div className="bg-gray-800 bg-opacity-90 py-6 sm:py-12 px-4 sm:px-10 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
              <div className="w-32 h-32 sm:w-56 sm:h-56 mb-4 sm:mb-0 sm:mr-8">
                <Image
                  src={experience.imageUrl}
                  alt={`${experience.companyName} logo`}
                  width={224}
                  height={224}
                  className="shadow-lg bg-white p-2 rounded-md object-contain"
                />
              </div>
              <div className="flex-grow">
                <h1 className="text-3xl font-bold mb-2">
                  {experience.companyName}
                </h1>
                <p className="text-xl italic mb-4">{experience.title}</p>
                <div className="flex flex-col sm:flex-row justify-between mb-4 text-gray-400">
                  <p>{experience.location}</p>
                  <p className="italic">{experience.period}</p>
                </div>
                <div className="space-y-2">
                  {bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="transition duration-300 hover:text-green-300">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-6">
              <h2 className="text-2xl font-semibold mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-green-500 rounded-full px-4 py-1 text-sm font-semibold transform transition duration-300 hover:scale-110"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
