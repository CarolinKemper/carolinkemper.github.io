import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-fade-in">
        About Me
      </h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          I'm Carolin Kemper, a professional passionate about my field. This page shares more about my background, education, and professional journey.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Background</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Education</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Experience</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Research Interests</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default About;