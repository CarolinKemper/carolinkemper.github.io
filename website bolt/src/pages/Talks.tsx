import React from 'react';

const Talks: React.FC = () => {
  const talks = [
    {
      id: 1,
      title: "Sample Talk Title 1",
      event: "International Conference on Important Topics",
      location: "Berlin, Germany",
      date: "June 15, 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title: "Sample Talk Title 2",
      event: "University Research Symposium",
      location: "Virtual Event",
      date: "March 22, 2023",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      title: "Sample Talk Title 3",
      event: "Industry Workshop on New Developments",
      location: "New York, USA",
      date: "November 10, 2022",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  const upcomingTalks = [
    {
      id: 4,
      title: "Upcoming Talk Title 1",
      event: "Annual Conference on Research Advances",
      location: "Paris, France",
      date: "September 5, 2024",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-fade-in">
        Talks
      </h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Talks</h2>
        
        {upcomingTalks.length > 0 ? (
          <div className="space-y-6 mb-8">
            {upcomingTalks.map((talk) => (
              <div key={talk.id} className="border-l-4 border-[#452aa2] pl-4 py-1 bg-gray-50 rounded p-4 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{talk.title}</h3>
                <p className="text-gray-700 mb-1"><strong>Event:</strong> {talk.event}</p>
                <p className="text-gray-700 mb-1"><strong>Location:</strong> {talk.location}</p>
                <p className="text-gray-700 mb-1"><strong>Date:</strong> {talk.date}</p>
                <p className="text-gray-700 mt-2">{talk.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-700 mb-8">No upcoming talks scheduled at this time.</p>
        )}
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Past Talks</h2>
        
        <div className="space-y-6">
          {talks.map((talk) => (
            <div key={talk.id} className="border-l-4 border-gray-300 pl-4 py-1 rounded p-4 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{talk.title}</h3>
              <p className="text-gray-700 mb-1"><strong>Event:</strong> {talk.event}</p>
              <p className="text-gray-700 mb-1"><strong>Location:</strong> {talk.location}</p>
              <p className="text-gray-700 mb-1"><strong>Date:</strong> {talk.date}</p>
              <p className="text-gray-700 mt-2">{talk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Talks;