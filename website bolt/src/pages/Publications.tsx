import React from 'react';

const Publications: React.FC = () => {
  const publications = [
    {
      id: 1,
      title: "Sample Publication Title 1",
      authors: "Kemper, C., Smith, J., & Johnson, A.",
      journal: "Journal of Important Research",
      year: 2023,
      doi: "10.1234/example.1",
      abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title: "Sample Publication Title 2",
      authors: "Kemper, C., & Williams, B.",
      journal: "Conference on Significant Studies",
      year: 2022,
      doi: "10.1234/example.2",
      abstract: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      title: "Sample Publication Title 3",
      authors: "Johnson, A., Kemper, C., & Davis, M.",
      journal: "International Journal of Research",
      year: 2021,
      doi: "10.1234/example.3",
      abstract: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-fade-in">
        Publications
      </h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Below is a list of my academic publications. Each entry includes the title, authors, journal or conference, publication year, and DOI link.
        </p>
        
        <div className="space-y-8">
          {publications.map((pub) => (
            <div key={pub.id} className="border-l-4 border-[#452aa2] pl-4 py-1 hover:shadow-md transition-shadow rounded p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{pub.title}</h2>
              <p className="text-gray-700 mb-1"><strong>Authors:</strong> {pub.authors}</p>
              <p className="text-gray-700 mb-1"><strong>Journal/Conference:</strong> {pub.journal}</p>
              <p className="text-gray-700 mb-1"><strong>Year:</strong> {pub.year}</p>
              <p className="text-gray-700 mb-1">
                <strong>DOI:</strong> <a href={`https://doi.org/${pub.doi}`} className="text-[#452aa2] hover:underline" target="_blank" rel="noopener noreferrer">{pub.doi}</a>
              </p>
              <p className="text-gray-700 mt-2"><strong>Abstract:</strong> {pub.abstract}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;

export default Publications