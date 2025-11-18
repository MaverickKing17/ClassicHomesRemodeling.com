import React, { useEffect, useState } from 'react';

const HeroVideoBackground: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const POSTER_URL = "https://i.ibb.co/gbY4JfYQ/classic-homes-remodeling-logo.png"; // Fallback logic as requested
  const VIDEO_URL = "https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-corridor-with-columns-31892-large.mp4";

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-primary">
      {prefersReducedMotion ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0F172A]">
           <img 
             src={POSTER_URL} 
             alt="Classic Homes Remodeling Logo" 
             className="w-64 opacity-20"
           />
        </div>
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={POSTER_URL}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src={VIDEO_URL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {/* High contrast overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      
      {/* Subtle gradient at bottom for text readability transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent" />
    </div>
  );
};

export default HeroVideoBackground;