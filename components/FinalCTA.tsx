import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 bg-[#0F172A] text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-12 leading-tight">
          Secure ClassicHomesRemodeling.com <br className="hidden md:block" /> Before It's Gone
        </h2>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#D4AF37] hover:bg-white text-black hover:text-[#0F172A] px-10 py-6 md:px-16 md:py-8 rounded-full text-xl md:text-3xl font-bold uppercase transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] transform hover:-translate-y-1"
        >
          Make an Offer Now
        </button>
        <p className="mt-8 text-gray-400 text-sm md:text-base">
          Offers reviewed in the order received. Financing available.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;