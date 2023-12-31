import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
          <div className="bg-gray-800 bg-opacity-90 py-12 px-10 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-56 h-44 mb-4 md:mb-0 md:mr-16">
                {' '}
                {/* Slightly bigger dimensions for the logo */}
                <Image
                  src={experience.imageUrl}
                  alt={`${experience.companyName} logo`}
                  width={240} // Adjusted width for the logo
                  height={240} // Adjusted height for the logo
                  className="shadow-lg bg-white p-4 rounded-md" // Added background and padding to emphasize the logo
                />
              </div>
              <div className="flex-grow">
                <h1 className="text-3xl font-bold mb-2">
                  {experience.companyName}
                </h1>
                <p className="text-xl italic">{experience.title}</p>
                <p className="mb-4">
                  {experience.location} - {experience.period}
                </p>
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
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
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
      <Footer />
    </>
  );
}
