import React from 'react';
import { TrendingUp, Search, Users, Award, MousePointerClick, DollarSign } from 'lucide-react';
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

  return (
    <section className="py-20 relative bg-primary" id="benefits">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark Overlay - Reduced opacity to make image VERY clear as requested */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-shadow-lg drop-shadow-md">Why This Domain Wins</h2>
          <p className="text-white text-lg font-medium drop-shadow-md">
            In the high-ticket remodeling industry, trust is everything. 
            <span className="font-bold text-gold"> ClassicHomesRemodeling.com</span> isn't just a URL; it's a competitive moat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 group transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary transition-colors" />
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