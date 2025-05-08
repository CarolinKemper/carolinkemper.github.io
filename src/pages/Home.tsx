import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-fade-in">
        Welcome
      </h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to my personal website. I'm Carolin Kemper, a professional sharing my work, research, and interests with the world.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          This site contains information about my background, publications, talks, and other miscellaneous projects I've been involved with.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Please use the navigation links above to explore the different sections of the site, or reach out via the contact links below.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#452aa2] hover:shadow-lg transition-all">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Recent Publications</h2>
          <p className="text-gray-700">Check out my latest research and publications in the Publications section.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#452aa2] hover:shadow-lg transition-all">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Upcoming Talks</h2>
          <p className="text-gray-700">View my schedule of upcoming talks and presentations in the Talks section.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;