import React, { useState, useEffect } from 'react';
import { X, FileText } from 'lucide-react';

const ExitIntentModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // If mouse leaves to top of viewport (intent to change tab/url)
      if (e.clientY <= 0) {
        const alreadyShown = sessionStorage.getItem('exit_intent_shown');
        if (!alreadyShown && !hasTriggered) {
          setIsVisible(true);
          setHasTriggered(true);
          sessionStorage.setItem('exit_intent_shown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/5 rounded-full text-primary mb-4">
            <FileText className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-primary mb-2">Wait! Get the Valuation Report</h3>
          <p className="text-gray-600">
            Not ready to offer? Download the free professional valuation report ($497 value) breaking down the exact SEO and brand value of <span className="font-bold">ClassicHomesRemodeling.com</span>.
          </p>
        </div>

        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="Where should we send the report?" 
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:outline-none"
          />
          <button 
             onClick={() => setIsVisible(false)} // Simulating submit
             className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors h-touch"
          >
            Send Me The Report
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="w-full text-sm text-gray-400 hover:text-gray-600"
          >
            No thanks, I don't want to dominate my market.
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;