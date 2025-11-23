import React, { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface OfferFormProps {
  variant?: 'hero' | 'modal' | 'footer';
}

const OfferForm: React.FC<OfferFormProps> = ({ variant = 'hero' }) => {
  const [email, setEmail] = useState('');
  const [offer, setOffer] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formspree.io/f/xgvdokqr", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          offer,
          source: `OfferForm - ${variant}`,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setOffer('');
      } else {
        setStatus('idle');
        alert("There was a problem submitting your offer. Please try again.");
      }
    } catch (error) {
      setStatus('idle');
      alert("There was a problem submitting your offer. Please try again.");
    }
  };

  if (status === 'success') {
    return (
      <div className={`bg-trust/10 border border-trust rounded-xl p-6 text-center ${variant === 'hero' ? 'text-white' : 'text-secondary'}`}>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-trust text-white mb-4">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">Offer Received</h3>
        <p className="mb-4">A senior broker will review your offer and contact you shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-sm underline hover:text-gold transition-colors"
        >
          Submit another offer
        </button>
      </div>
    );
  }

  const isHero = variant === 'hero';
  
  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-md ${isHero ? 'bg-white/10 backdrop-blur-lg border-white/20' : 'bg-white border-gray-200'} border p-6 md:p-8 rounded-2xl shadow-2xl`}>
      <div className="mb-6">
        <h3 className={`text-xl md:text-2xl font-serif font-bold mb-2 ${isHero ? 'text-white' : 'text-primary'}`}>
          Secure This Asset
        </h3>
        <p className={`text-sm ${isHero ? 'text-gray-200' : 'text-gray-600'}`}>
          Enter your opening offer. All negotiations are confidential and handled by Escrow.com.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor={`email-${variant}`} className="sr-only">Email Address</label>
          <input
            id={`email-${variant}`}
            name="email"
            type="email"
            required
            placeholder="ceo@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-4 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all h-touch"
          />
        </div>
        
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
          <label htmlFor={`offer-${variant}`} className="sr-only">Offer Amount</label>
          <input
            id={`offer-${variant}`}
            name="offer"
            type="number"
            required
            min="5000"
            placeholder="25,000"
            value={offer}
            onChange={(e) => setOffer(e.target.value)}
            className="w-full pl-8 pr-4 py-4 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all h-touch"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full group flex items-center justify-center gap-2 bg-gold hover:bg-yellow-500 text-primary font-bold text-lg py-4 px-6 rounded-lg shadow-lg transform transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed h-touch"
        >
          {status === 'submitting' ? 'Processing...' : 'Make an Offer'}
          {!status && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
        </button>
        
        <div className="flex items-center justify-center gap-2 text-xs opacity-70 mt-2">
           <ShieldCheck className={`w-3 h-3 ${isHero ? 'text-gold' : 'text-trust'}`} />
           <span className={isHero ? 'text-gray-300' : 'text-gray-500'}>Secure transaction via Escrow.com</span>
        </div>
      </div>
    </form>
  );
};

export default OfferForm;
