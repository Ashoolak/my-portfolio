import { useRouter } from 'next/router';

const WorkExperienceDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch work experience details based on the slug
  // This could be a call to an API or a database query
  // For static generation, use getStaticProps or getStaticPaths

  return (
    <div>
      <h1>{`Details for ${slug}`}</h1>
      {/* Render details of the work experience here */}
    </div>
  );
};

export default WorkExperienceDetails;
