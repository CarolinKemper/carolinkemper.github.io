import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-[#452aa2] py-4 px-6 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <Link to="/" className="text-white text-2xl font-semibold mb-4 md:mb-0 hover:text-white/90 transition-colors">
            Carolin Kemper
          </Link>
          <div className="flex flex-wrap gap-3 md:gap-8">
            <Link 
              to="/" 
              className={`text-white hover:text-white/80 transition-colors ${isActive('/') ? 'font-medium border-b-2 border-white' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-white hover:text-white/80 transition-colors ${isActive('/about') ? 'font-medium border-b-2 border-white' : ''}`}
            >
              About Me
            </Link>
            <Link 
              to="/publications" 
              className={`text-white hover:text-white/80 transition-colors ${isActive('/publications') ? 'font-medium border-b-2 border-white' : ''}`}
            >
              Publications
            </Link>
            <Link 
              to="/talks" 
              className={`text-white hover:text-white/80 transition-colors ${isActive('/talks') ? 'font-medium border-b-2 border-white' : ''}`}
            >
              Talks
            </Link>
            <Link 
              to="/misc" 
              className={`text-white hover:text-white/80 transition-colors ${isActive('/misc') ? 'font-medium border-b-2 border-white' : ''}`}
            >
              Misc.
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;