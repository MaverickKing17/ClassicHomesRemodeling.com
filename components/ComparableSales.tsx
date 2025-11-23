import React from 'react';

const ComparableSales: React.FC = () => {
  return (
    <section className="py-24 bg-white text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
          Recent Comparable Sales
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">
          <div className="space-y-4 p-6 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gold/20">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#D4AF37]">
              HomeRemodeling.com
            </p>
            <p className="text-2xl md:text-3xl font-serif font-medium text-gray-900">
              $325,000
            </p>
          </div>
          
          <div className="space-y-4 p-6 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gold/20">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#D4AF37]">
              LuxuryHomes.com
            </p>
            <p className="text-2xl md:text-3xl font-serif font-medium text-gray-900">
              $460,000
            </p>
          </div>
          
          <div className="space-y-4 p-6 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gold/20">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#D4AF37]">
              KitchenRemodel.com
            </p>
            <p className="text-2xl md:text-3xl font-serif font-medium text-gray-900">
              $689,000
            </p>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-16 italic">
          *Publicly reported sales data for category-defining domains.
        </p>
      </div>
    </section>
  );
};

export default ComparableSales;