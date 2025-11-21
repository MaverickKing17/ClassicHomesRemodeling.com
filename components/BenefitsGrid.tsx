import React from 'react';
import { TrendingUp, Search, Users, Award, MousePointerClick, DollarSign, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';
import { Benefit } from '../types';

const BenefitsGrid: React.FC = () => {
  const benefits: Benefit[] = [
    {
      title: "Instant Authority",
      description: "Position your brand as the market leader instantly with a name that defines the industry.",
      icon: Award
    },
    {
      title: "SEO Dominance",
      description: "Exact match keywords 'Classic Homes Remodeling' drive organic traffic worth thousands monthly.",
      icon: Search
    },
    {
      title: "Trust & Credibility",
      description: "Premium .com domains convey stability and luxury, increasing conversion rates by up to 40%.",
      icon: Users
    },
    {
      title: "Lower Ad Costs",
      description: "Higher Quality Score in Google Ads leads to significantly lower CPC for renovation keywords.",
      icon: TrendingUp
    },
    {
      title: "Type-in Traffic",
      description: "Capture customers who bypass search engines and type the service directly into their browser.",
      icon: MousePointerClick
    },
    {
      title: "Asset Appreciation",
      description: "Premium digital real estate historically appreciates, serving as a secure digital asset.",
      icon: DollarSign
    }
  ];

  // Luxury Living Room Background - Direct image link
  const BG_IMAGE = "https://i.ibb.co/BHzWjHpW/luxury-living-room.jpg";
  const DOMAIN_URL = "https://classichomesremodeling.com";
  const SHARE_TEXT = "Dominate the luxury renovation market with the category-defining asset: ClassicHomesRemodeling.com";

  return (
    <section className="py-24 relative bg-primary" id="benefits">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Vignette Overlay: Dark top/bottom for text legibility, Transparent center for maximum image clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90 z-0" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 drop-shadow-2xl">Why This Domain Wins</h2>
          <p className="text-white text-lg font-medium drop-shadow-2xl mb-8">
            In the high-ticket remodeling industry, trust is everything. 
            <span className="font-bold text-gold"> ClassicHomesRemodeling.com</span> isn't just a URL; it's a competitive moat.
          </p>

          {/* Social Sharing Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100">
            <span className="text-white/80 text-sm font-medium uppercase tracking-widest mr-2 flex items-center gap-2 drop-shadow-md">
              <Share2 className="w-4 h-4" /> Share Asset:
            </span>
            
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(DOMAIN_URL)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full text-white hover:bg-gold hover:text-primary transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-gold hover:-translate-y-1 shadow-lg group"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
            </a>
            
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(DOMAIN_URL)}&text=${encodeURIComponent(SHARE_TEXT)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full text-white hover:bg-gold hover:text-primary transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-gold hover:-translate-y-1 shadow-lg group"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
            </a>
            
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(DOMAIN_URL)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full text-white hover:bg-gold hover:text-primary transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-gold hover:-translate-y-1 shadow-lg group"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-xl shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gold/50 group transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors border border-gray-100">
                {/* Solid/Filled Icon Style using fill-current and heavier stroke where appropriate */}
                <benefit.icon className="w-7 h-7 text-primary fill-current stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;