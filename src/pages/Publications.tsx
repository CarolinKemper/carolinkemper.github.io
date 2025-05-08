import React, { useEffect, useState } from 'react';
import MarkdownContent from '../components/MarkdownContent';

const Publications: React.FC = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/src/content/publications.md')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading content:', error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <MarkdownContent content={content} />
      </div>
    </div>
  );
};

export default Publications;