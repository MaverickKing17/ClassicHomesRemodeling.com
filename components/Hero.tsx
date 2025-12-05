import React, { useState, useEffect } from 'react';
import { Play, X, CheckCircle } from 'lucide-react';
import HeroVideoBackground from './HeroVideoBackground';
import OfferForm from './OfferForm';

const Hero: React.FC = () => {
  const [headline, setHeadline] = useState("The Authority in Luxury Remodeling");
  const [showVideo, setShowVideo] = useState(false);

  // Video URL matches the background video for consistency, 
  // but in a real scenario, this would be the version with Voiceover/Audio.
  const VIDEO_URL = "https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-corridor-with-columns-31892-large.mp4";
  
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
          
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-8 font-light leading-relaxed">
            Own the category-defining domain for high-end home renovations. 
            Establish instant credibility, dominate search results, and capture the premium market.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center mb-8 lg:mb-0">
            {/* Watch Video CTA */}
            <button 
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md rounded-full transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-5 h-5 text-primary fill-current ml-1" />
              </div>
              <span className="text-white font-bold tracking-wide uppercase text-sm">Watch Brand Video</span>
            </button>

            {/* Trust Badges */}
            <div className="flex gap-4 text-xs font-semibold text-gold tracking-widest uppercase border-l border-white/20 pl-4 ml-2">
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3" /> Verified Available
                </span>
                <span className="flex items-center gap-1.5 opacity-80">
                  <CheckCircle className="w-3 h-3" /> Instant Transfer
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end w-full">
           <OfferForm variant="hero" />
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
          <button 
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            aria-label="Close Video"
          >
            <X className="w-10 h-10" />
          </button>
          
          <div className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
            <video 
              src={VIDEO_URL} 
              className="w-full h-full object-cover"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Hero;