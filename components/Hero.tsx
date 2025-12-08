import React, { useState, useEffect } from 'react';
import { Play, X, CheckCircle } from 'lucide-react';
import HeroVideoBackground from './HeroVideoBackground';
import OfferForm from './OfferForm';

const Hero: React.FC = () => {
  const [headline, setHeadline] = useState("The Authority in Luxury Remodeling");
  const [showVideo, setShowVideo] = useState(false);

  // HGTV-Style "7-Star" Luxury Architectural Showcase (4K)
  const VIDEO_URL = "https://videos.pexels.com/video-files/7578552/7578552-uhd_3840_2160_30fps.mp4";
  
  // Matched to HeroVideoBackground for seamless transition
  const POSTER_URL = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3";

  useEffect(() => {
    // Simple client-side A/B test / Rotation
    const variants = [
      "The Authority in Luxury Remodeling",
      "Dominate the High-End Renovation Market",
      "The Ultimate Asset for Home Remodeling"
    ];
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
            className="h-16 md:h-20 lg:h-24 w-auto mb-8 drop-shadow-2xl"
          />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            {headline.split(' ').slice(0, -2).join(' ')} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200 drop-shadow-sm">
              {headline.split(' ').slice(-2).join(' ')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8 font-medium leading-relaxed drop-shadow-md">
            Own the category-defining domain for high-end home renovations. 
            Establish instant credibility, dominate search results, and capture the premium market.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center mb-8 lg:mb-0">
            {/* Watch Video CTA */}
            <button 
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-3 px-6 py-3 bg-black/40 hover:bg-black/60 border border-white/30 backdrop-blur-md rounded-full transition-all group shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-5 h-5 text-primary fill-current ml-1" />
              </div>
              <span className="text-white font-bold tracking-wide uppercase text-sm">Watch Brand Video</span>
            </button>

            {/* Trust Badges */}
            <div className="flex gap-4 text-xs font-semibold text-white tracking-widest uppercase border-l border-white/40 pl-4 ml-2 drop-shadow-md">
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-gold" /> Verified Available
                </span>
                <span className="flex items-center gap-1.5 opacity-90">
                  <CheckCircle className="w-3 h-3 text-gold" /> Instant Transfer
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end w-full">
           <OfferForm variant="hero" />
        </div>
      </div>

      {/* Video Modal - 7-Star Presentation */}
      {showVideo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
          <button 
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            aria-label="Close Video"
          >
            <X className="w-10 h-10" />
          </button>
          
          {/* Enhanced Container with Gold Glow and Border */}
          <div className="w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.3)] border-2 border-gold relative">
            <video 
              src={VIDEO_URL} 
              poster={POSTER_URL}
              className="w-full h-full object-cover"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Hero;