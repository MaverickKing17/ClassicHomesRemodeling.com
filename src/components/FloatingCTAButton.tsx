import React, { useState, useEffect } from 'react';

const FloatingCTAButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block fixed bottom-8 right-8 z-40 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-gold hover:bg-yellow-500 text-primary font-bold py-4 px-8 rounded-full shadow-2xl transform hover:-translate-y-1 transition-all flex items-center gap-2 border-2 border-white/20"
      >
        <span>Make an Offer</span>
        <span className="bg-primary text-gold text-xs px-2 py-1 rounded-full">Dec 2 Deadline</span>
      </button>
    </div>
  );
};

export default FloatingCTAButton;
