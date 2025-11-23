import React from 'react';
import { ComparableSale } from '../types';

const ComparableSales: React.FC = () => {
  const sales: ComparableSale[] = [
    { domain: "HomeRemodeling.com", price: 150000, year: 2021, industry: "Construction" },
    { domain: "ClassicHomes.com", price: 85000, year: 2019, industry: "Real Estate" },
    { domain: "Remodel.com", price: 230000, year: 2020, industry: "Construction" },
    { domain: "LuxuryBath.com", price: 45000, year: 2022, industry: "Home Improvement" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">Comparable Sales</h2>
        
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sales.map((sale, idx) => (
              <div key={idx} className="border border-gold/40 rounded-lg p-6 bg-[#1E1E1E] hover:border-gold transition-colors shadow-lg group">
                <div className="text-sm text-gray-400 mb-2 font-mono uppercase tracking-wide">{sale.year} • {sale.industry}</div>
                <div className="text-xl font-bold text-[#E0E0E0] mb-2">{sale.domain}</div>
                <div className="text-2xl font-serif text-gold font-bold group-hover:text-gold-light transition-colors">
                  ${sale.price.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-8">
          *Publicly reported sales data. Premium domains in the home improvement sector consistently appreciate.
        </p>
      </div>
    </section>
  );
};

export default ComparableSales;
