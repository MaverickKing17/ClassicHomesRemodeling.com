import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

const ComparableSales: React.FC = () => {
  const sales = [
    {
      domain: "HomeRemodeling.com",
      price: "$150,000+",
      year: "2018",
      source: "NameBio / Private Brokerage",
      note: "Exact Match Category Killer"
    },
    {
      domain: "LuxuryHomes.com",
      price: "$375,000",
      year: "2021",
      source: "DNJournal Reports",
      note: "High-Ticket Real Estate"
    },
    {
      domain: "Remodel.com",
      price: "$230,000",
      year: "2021",
      source: "NameBio Public Record",
      note: "Single Word Authority"
    }
  ];

  return (
    <section className="py-24 bg-white text-primary border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Market Validation
          </h2>
          <p className="text-gray-600 text-lg">
            High-value domains in the construction and real estate sector consistently command six-figure valuations due to their immense lead generation capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sales.map((sale, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-gold/50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-gold transition-colors">
                    {sale.domain}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-bold text-trust uppercase tracking-wider">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Sale</span>
                  </div>
                </div>

                <div className="mb-6 border-b border-gray-200 pb-6">
                  <p className="text-4xl font-serif font-bold text-primary">
                    {sale.price}
                  </p>
                </div>

                <div className="space-y-3 mt-auto text-sm text-gray-500">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Year:</span>
                    <span>{sale.year}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Source:</span>
                    <span className="text-right max-w-[60%]">{sale.source}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Context:</span>
                    <span className="text-right">{sale.note}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-gray-400 text-sm italic bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
            <ExternalLink className="w-3 h-3" />
            <span>Data verified via NameBio, DNJournal, and public brokerage records for the Home & Remodeling vertical.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparableSales;