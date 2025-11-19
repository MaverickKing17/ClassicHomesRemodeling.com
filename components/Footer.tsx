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
      <footer className="bg-secondary text-gray-400 py-16 pb-24 md:pb-16 border-t border-gray-800 font-sans">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <img 
              src="https://i.ibb.co/gbY4JfYQ/classic-homes-remodeling-logo.png" 
              alt="Classic Homes Remodeling" 
              className="h-14 mb-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
            />

            {/* Footer Navigation Grid - Aligned with PDF Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl mb-16 text-center md:text-left">
              
              {/* 1. Legal & Trust */}
              <div className="flex flex-col items-center md:items-start space-y-4">
                <h4 className="text-white font-serif font-bold text-lg border-b-2 border-gold/50 pb-2 mb-2 inline-block">Legal & Trust</h4>
                <button onClick={() => openModal('privacy')} className="text-sm hover:text-gold transition-colors">Privacy Policy</button>
                <button onClick={() => openModal('terms')} className="text-sm hover:text-gold transition-colors">Terms of Service</button>
                <button onClick={() => openModal('disclaimer')} className="text-sm hover:text-gold transition-colors">Disclaimer</button>
              </div>

              {/* 2. Company & Credibility */}
              <div className="flex flex-col items-center md:items-start space-y-4">
                <h4 className="text-white font-serif font-bold text-lg border-b-2 border-gold/50 pb-2 mb-2 inline-block">Company & Credibility</h4>
                <button onClick={() => openModal('about')} className="text-sm hover:text-gold transition-colors">About ClassicHomes</button>
                <button onClick={() => openModal('mission')} className="text-sm hover:text-gold transition-colors">Our Mission</button>
                <button onClick={() => openModal('contact')} className="text-sm hover:text-gold transition-colors">Contact Broker</button>
              </div>

              {/* 3. Transaction & Support */}
              <div className="flex flex-col items-center md:items-start space-y-4">
                <h4 className="text-white font-serif font-bold text-lg border-b-2 border-gold/50 pb-2 mb-2 inline-block">Transaction & Support</h4>
                <button onClick={() => openModal('services')} className="text-sm hover:text-gold transition-colors">Domain Services / Transfer</button>
                <a href="#faqs" className="text-sm hover:text-gold transition-colors">Frequently Asked Questions</a>
                <a href="#pricing" className="text-sm hover:text-gold transition-colors">Make an Offer</a>
              </div>

            </div>

            <div className="w-full max-w-2xl border-t border-gray-800 pt-8 text-center">
               <p className="text-xs text-gray-500 leading-relaxed">
                © {new Date().getFullYear()} Classic Homes Remodeling. All rights reserved. <br/>
                This site is a premium digital asset sales landing page. We are not affiliated with any physical construction firm. <br/>
                <span className="text-gray-400 mt-2 block">
                  Secure Transaction Facilitation by <strong className="text-gray-300">Escrow.com</strong>
                </span>
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