import React from 'react';
import { Twitter, Linkedin, Globe, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#452aa2] py-6 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-white text-lg font-medium mb-4 md:mb-0">Contact me</p>
          <div className="flex space-x-6">
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://mastodon.social/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-transform hover:scale-110"
              aria-label="Mastodon"
            >
              <Globe size={24} />
            </a>
            <a 
              href="https://bsky.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-transform hover:scale-110"
              aria-label="Bluesky"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;