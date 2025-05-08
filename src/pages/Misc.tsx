import React from 'react';

const Misc: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-fade-in">
        Misc.
      </h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This page contains various other activities, projects, and interests not covered in the other sections.
        </p>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Teaching</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Course 1: Introduction to Subject, University Name, Year</li>
              <li>Course 2: Advanced Topics in Subject, University Name, Year</li>
              <li>Workshop: Title of Workshop, Conference Name, Year</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Side Projects</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Project Name 1</h3>
                <p className="text-gray-700">Brief description of the project and its significance.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Project Name 2</h3>
                <p className="text-gray-700">Brief description of the project and its significance.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Media & Press</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Interview: "Title of Interview", Publication Name, Date</li>
              <li>Article: "Title of Article", Publication Name, Date</li>
              <li>Podcast: "Title of Podcast Episode", Podcast Name, Date</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hobbies & Interests</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Misc;