import Image from 'next/image';
import Link from 'next/link';

export default function CompanyCard({ imageUrl, companyName, title }) {
  const slug = `${companyName}-${title}`.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link
      href={`/company/${slug}`}
      passHrefn
      className="card group cursor-pointer overflow-hidden relative border rounded-lg shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 bg-black bg-opacity-80 hover:bg-opacity-90"
    >
      <div className="relative w-full h-48 bg-white">
        {/* Image with padding */}
        <div className="absolute inset-2 group-hover:blur-sm">
          <Image
            src={imageUrl}
            alt={companyName}
            layout="fill"
            objectFit="contain"
            className="transition-all duration-300 ease-in-out"
          />
        </div>
        {/* Button that appears on hover */}
        <div className="card-description-button absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <button className="py-2 px-4 bg-purple-500 text-white font-bold rounded-md transition-opacity duration-300 ease-in-out hover:bg-purple-600">
            Full Description
          </button>
        </div>
      </div>
      <div className="card-content p-4">
        <h3 className="card-title text-lg text-white font-bold">
          {companyName}
        </h3>
        <p className="card-role text-gray-300">{title}</p>
      </div>
    </Link>
  );
}
