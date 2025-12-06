import React from 'react';

const HeroVideoBackground: React.FC = () => {
  // Permanent High-Res Luxury Background (Unsplash)
  const BG_IMAGE_URL = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3";

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-primary">
      <img
        src={BG_IMAGE_URL}
        alt="Classic Homes Remodeling - Luxury Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* High contrast overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      
      {/* Subtle gradient at bottom for smooth visual transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent" />
    </div>
  );
};

export default HeroVideoBackground;