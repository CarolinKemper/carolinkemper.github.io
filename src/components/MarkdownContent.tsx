import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkCallouts from 'remark-callouts';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-[#452aa2] prose-a:no-underline hover:prose-a:underline">
      <ReactMarkdown 
        remarkPlugins={[remarkCallouts]}
        components={{
          div: ({ className, children, ...props }) => {
            if (className?.includes('callout')) {
              const type = className.split('-')[1];
              const styles = {
                note: 'bg-blue-50 border-blue-500',
                warning: 'bg-yellow-50 border-yellow-500',
                important: 'bg-purple-50 border-purple-500',
                tip: 'bg-green-50 border-green-500',
              }[type] || 'bg-gray-50 border-gray-500';
              
              return (
                <div className={`p-4 my-4 border-l-4 rounded-r ${styles}`} {...props}>
                  {children}
                </div>
              );
            }
            return <div className={className} {...props}>{children}</div>;
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;