import React from 'react';
import { Check, CreditCard, Key, Briefcase } from 'lucide-react';
import { PurchaseOption } from '../types';

const PurchaseOptions: React.FC = () => {
  const options: PurchaseOption[] = [
    {
      title: "Lease to Own",
      price: "$1,500",
      features: [
        "Low initial capital outlay",
        "20% down payment",
        "Payments apply to purchase",
        "Immediate domain usage",
        "Cancel anytime option"
      ],
      isPrimary: false
    },
    {
      title: "Broker-Assisted Installment",
      price: "$8,000",
      features: [
        "12-month term",
        "0% Interest financing",
        "Secure Escrow Service",
        "Ownership transfer on completion",
        "Predictable monthly cost"
      ],
      isPrimary: false
    },
    {
      title: "Outright Acquisition (Buy It Now)",
      price: "Make Offer",
      features: [
        "Instant 100% ownership",
        "Secure Escrow.com transfer",
        "Tax deductible asset",
        "No monthly payments",
        "Full resale rights immediately"
      ],
      isPrimary: true
    }
  ];

  // Luxury Kitchen Background - Updated to provided URL
  const BG_IMAGE = "https://i.ibb.co/5XcQjXDG/luxury-kitchen.jpg";

  const getSubtext = (title: string) => {
    if (title.includes('Lease')) return '/month';
    if (title.includes('Installment')) return ' down pmt';
    return ' market value';
  };

  return (
    <section className="py-24 relative bg-primary" id="pricing">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Vignette Overlay: Dark edges for text contrast, Transparent center for maximum image clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/0 to-primary/95 z-0" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 drop-shadow-2xl">Flexible Acquisition Options</h2>
          <p className="text-white text-lg font-medium drop-shadow-2xl">
            Whether you prefer a low monthly lease or an outright asset purchase, we have a secure structure for you.
          </p>
        </div>

        {/* Updated Grid to support 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {options.map((option, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 flex flex-col ${
                option.isPrimary 
                  ? 'bg-primary border-gold shadow-2xl scale-105 z-10' // Solid background for max contrast
                  : 'bg-white border-gray-200 hover:border-primary/50 shadow-xl' // Solid background for max contrast
              }`}
            >
              {option.isPrimary && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-primary font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider shadow-lg whitespace-nowrap">
                  Best Value
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-full ${option.isPrimary ? 'bg-white/10 text-gold' : 'bg-primary/5 text-primary'}`}>
                  {option.title.includes('Installment') ? <Briefcase className="w-6 h-6" /> : (option.isPrimary ? <Key className="w-6 h-6" /> : <CreditCard className="w-6 h-6" />)}
                </div>
                <h3 className={`text-xl font-bold ${option.isPrimary ? 'text-white' : 'text-primary'}`}>
                  {option.title}
                </h3>
              </div>

              <div className="mb-8">
                <span className={`text-4xl font-serif font-bold ${option.isPrimary ? 'text-gold' : 'text-primary'}`}>
                  {option.price}
                </span>
                <span className={`text-sm ${option.isPrimary ? 'text-gray-400' : 'text-gray-500'}`}>
                  {getSubtext(option.title)}
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {option.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 ${option.isPrimary ? 'text-gold' : 'text-green-600'}`} />
                    <span className={`text-sm ${option.isPrimary ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`w-full py-4 px-6 rounded-lg font-bold transition-all h-touch ${
                  option.isPrimary
                    ? 'bg-gold text-primary hover:bg-yellow-500 shadow-lg hover:shadow-gold/20'
                    : 'bg-primary text-white hover:bg-slate-800 shadow-md'
                }`}
              >
                {option.isPrimary ? 'Make An Offer' : 'Start Lease'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurchaseOptions;