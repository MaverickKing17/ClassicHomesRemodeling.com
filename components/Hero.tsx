import React, { useState, useEffect } from 'react';
import HeroVideoBackground from './HeroVideoBackground';
import CountdownTimer from './CountdownTimer';
import OfferForm from './OfferForm';

const Hero: React.FC = () => {
  const [headline, setHeadline] = useState("The Authority in Luxury Remodeling");
  
  useEffect(() => {
    // Simple client-side A/B test / Rotation
    const variants = [
      "The Authority in Luxury Remodeling",
      "Dominate the High-End Renovation Market",
      "The Ultimate Asset for Home Remodeling"
    ];
    // Deterministic based on hour to prevent flicker during session, or random
    // Using random for true A/B simulation on load
    const selected = variants[Math.floor(Math.random() * variants.length)];
    setHeadline(selected);
  }, []);

  return (
    <header className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-12">
      <HeroVideoBackground />
      
      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <img 
            src="https://i.ibb.co/gbY4JfYQ/classic-homes-remodeling-logo.png" 
            alt="Classic Homes Remodeling Logo" 
            className="h-16 md:h-20 lg:h-24 w-auto mb-8 drop-shadow-lg"
          />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-2xl">
            {headline.split(' ').slice(0, -2).join(' ')} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
              {headline.split(' ').slice(-2).join(' ')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-6 font-light leading-relaxed">
            Own the category-defining domain for high-end home renovations. 
            Establish instant credibility, dominate search results, and capture the premium market.
          </p>

          <CountdownTimer />

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm font-semibold text-gold tracking-widest uppercase mb-8 lg:mb-0">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Verified Available
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> Instant Transfer
            </span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end w-full">
           <OfferForm variant="hero" />
        </div>
      </div>
    </header>
  );
};

export default Hero;