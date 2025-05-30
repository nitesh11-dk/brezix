import React from 'react';

interface SlideUpTextProps {
  content: string;
}

const SlideUpText: React.FC<SlideUpTextProps> = ({ content }) => {
  return (
    <div className="h-6 overflow-hidden z-10">
     <div className="relative flex flex-col top-0 transition-all duration-[1500ms] ease-in-out group-hover:-top-6">
  {content}
  <span>{content}</span>
</div>

    </div>
  );
};

export default SlideUpText;
