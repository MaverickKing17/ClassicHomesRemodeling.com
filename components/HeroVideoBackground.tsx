import React from 'react';

const HeroVideoBackground: React.FC = () => {
  // Permanent High-Res Luxury Background (Unsplash - Modern Luxury Living Room)
  const BG_IMAGE_URL = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3";

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-primary">
      <img
        src={BG_IMAGE_URL}
        alt="Classic Homes Remodeling - Luxury Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Minimized overlay for maximum clarity while keeping text readable */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      
      {/* Subtle gradient at bottom for smooth visual transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
    </div>
  );
};

export default HeroVideoBackground;