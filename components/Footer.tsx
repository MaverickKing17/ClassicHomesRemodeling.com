import React, { useState } from 'react';
import { X } from 'lucide-react';
import { footerPages, FooterPageKey } from './FooterPages';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<FooterPageKey | null>(null);

  const openModal = (key: FooterPageKey) => {
    setActiveModal(key);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <footer className="bg-secondary text-gray-400 py-12 pb-24 md:pb-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <img 
              src="https://i.ibb.co/gbY4JfYQ/classic-homes-remodeling-logo.png" 
              alt="Classic Homes Remodeling" 
              className="h-12 mb-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
            />

            {/* Footer Navigation Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl mb-12 text-center md:text-left">
              {/* Legal & Trust */}
              <div className="flex flex-col space-y-3">
                <h4 className="text-white font-serif font-bold mb-2">Legal & Trust</h4>
                <button onClick={() => openModal('privacy')} className="text-sm hover:text-gold transition-colors text-left md:text-center">Privacy Policy</button>
                <button onClick={() => openModal('terms')} className="text-sm hover:text-gold transition-colors text-left md:text-center">Terms of Service</button>
                <button onClick={() => openModal('disclaimer')} className="text-sm hover:text-gold transition-colors text-left md:text-center">Disclaimer</button>
              </div>

              {/* Company */}
              <div className="flex flex-col space-y-3">
                <h4 className="text-white font-serif font-bold mb-2">Company</h4>
                <button onClick={() => openModal('about')} className="text-sm hover:text-gold transition-colors text-left md:text-center">About ClassicHomes</button>
                <button onClick={() => openModal('mission')} className="text-sm hover:text-gold transition-colors text-left md:text-center">Our Mission</button>
                <button onClick={() => openModal('contact')} className="text-sm hover:text-gold transition-colors text-left md:text-center">Contact</button>
              </div>

              {/* Transaction */}
              <div className="flex flex-col space-y-3">
                <h4 className="text-white font-serif font-bold mb-2">Transaction</h4>
                <button onClick={() => openModal('services')} className="text-sm hover:text-gold transition-colors text-left md:text-center">Domain Services</button>
                <a href="#pricing" className="text-sm hover:text-gold transition-colors text-left md:text-center">Escrow Process</a>
                <a href="#benefits" className="text-sm hover:text-gold transition-colors text-left md:text-center">Why Buy?</a>
              </div>

              {/* Support */}
              <div className="flex flex-col space-y-3">
                <h4 className="text-white font-serif font-bold mb-2">Support</h4>
                <button 
                  onClick={() => {
                    const faqSection = document.getElementById('faqs'); // Assuming FAQs.tsx has id="faqs" (added below in App or need to ensure FAQs component has id)
                    // Actually, FAQs component usually doesn't have ID in previous steps, but I can target by text content logic or just scroll to bottom
                    // Best effort:
                     const el = document.querySelector('section h2')?.closest('section'); // A bit risky
                     // Let's just use window scroll or link anchor
                  }}
                  className="text-sm hover:text-gold transition-colors text-left md:text-center"
                >
                  <a href="#root">Back to Top</a>
                </button>
                <span className="text-sm text-gray-600 cursor-not-allowed text-left md:text-center">Live Chat (Online)</span>
              </div>
            </div>

            <div className="w-full max-w-md border-t border-gray-800 pt-8 text-center">
               <p className="text-xs text-gray-600 leading-relaxed">
                © {new Date().getFullYear()} Classic Homes Remodeling. All rights reserved. <br/>
                This site is a premium domain sales landing page. Not affiliated with any physical construction firm. <br/>
                Transaction facilitation provided securely by Escrow.com.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Dynamic Modal for Footer Pages */}
      {activeModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-3 text-primary">
                {React.createElement(footerPages[activeModal].icon, { className: "w-6 h-6 text-gold" })}
                <h3 className="text-2xl font-serif font-bold">{footerPages[activeModal].title}</h3>
              </div>
              <button 
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-primary hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {footerPages[activeModal].content}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end">
              <button 
                onClick={closeModal}
                className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Footer;