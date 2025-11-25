import React, { useState } from 'react';
import { X, Shield, FileText, AlertTriangle, Info, Award, Server, HelpCircle, ShoppingCart, Eye, Cookie } from 'lucide-react';
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

  // Helper for link styling
  const FooterLink = ({ icon: Icon, label, onClick }: { icon: React.ComponentType<any>, label: string, onClick: () => void }) => (
    <button onClick={onClick} className="flex items-center gap-3 text-sm text-gray-100 hover:text-gold transition-colors group text-left py-1">
      <Icon className="w-4 h-4 text-gold/80 group-hover:text-gold transition-colors flex-shrink-0" />
      <span className="font-medium drop-shadow-sm tracking-wide">{label}</span>
    </button>
  );

  // Luxury Basement Background - Direct Image Link
  const BG_IMAGE = "https://i.ibb.co/49hB8Z3/basement.jpg";

  return (
    <>
      <footer className="relative bg-secondary text-gray-200 py-16 pb-24 md:pb-16 border-t border-gray-800 font-sans overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${BG_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Vignette Overlay: 75% opacity to show image details */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px] z-0" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center">
            <img 
              src="https://i.ibb.co/gbY4JfYQ/classic-homes-remodeling-logo.png" 
              alt="Classic Homes Remodeling" 
              className="h-16 mb-12 drop-shadow-2xl"
            />

            {/* Footer Navigation Grid - Aligned with PDF Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 w-full max-w-6xl mb-16 px-4 md:px-0">
              
              {/* 1. Legal & Trust */}
              <div className="flex flex-col items-center md:items-start space-y-4">
                <h4 className="text-white font-serif font-bold text-xl border-b-2 border-gold pb-2 mb-4 inline-block shadow-sm tracking-wide">Legal & Trust</h4>
                <FooterLink icon={Shield} label="Privacy Policy" onClick={() => openModal('privacy')} />
                <FooterLink icon={FileText} label="Terms of Service" onClick={() => openModal('terms')} />
                <FooterLink icon={AlertTriangle} label="Disclaimer" onClick={() => openModal('disclaimer')} />
                <FooterLink icon={Eye} label="Accessibility Statement" onClick={() => openModal('accessibility')} />
                <FooterLink icon={Cookie} label="Cookie Policy" onClick={() => openModal('cookies')} />
              </div>

              {/* 2. Company & Credibility */}
              <div className="flex flex-col items-center md:items-start space-y-4">
                <h4 className="text-white font-serif font-bold text-xl border-b-2 border-gold pb-2 mb-4 inline-block shadow-sm tracking-wide">Company & Credibility</h4>
                <FooterLink icon={Info} label="About the Seller" onClick={() => openModal('about')} />
                <FooterLink icon={Award} label="Our Mission" onClick={() => openModal('mission')} />
                {/* Contact Broker removed as requested */}
              </div>

              {/* 3. Transaction & Support */}
              <div className="flex flex-col items-center md:items-start space-y-4">
                <h4 className="text-white font-serif font-bold text-xl border-b-2 border-gold pb-2 mb-4 inline-block shadow-sm tracking-wide">Transaction & Support</h4>
                <FooterLink icon={Server} label="Domain Services / Transfer" onClick={() => openModal('services')} />
                <a href="#faqs" className="flex items-center gap-3 text-sm text-gray-100 hover:text-gold transition-colors group text-left py-1">
                  <HelpCircle className="w-4 h-4 text-gold/80 group-hover:text-gold transition-colors flex-shrink-0" />
                  <span className="font-medium drop-shadow-sm tracking-wide">Frequently Asked Questions</span>
                </a>
                <FooterLink icon={ShoppingCart} label="Buy Now / Offer" onClick={() => openModal('offer')} />
              </div>

            </div>

            <div className="w-full max-w-3xl border-t border-white/10 pt-8 text-center relative">
               <p className="text-xs text-gray-300 leading-relaxed font-medium drop-shadow-md">
                © {new Date().getFullYear()} Classic Homes Remodeling. All rights reserved. <br/>
                This site is a premium digital asset sales landing page. We are not affiliated with any physical construction firm. <br/>
                <span className="text-gray-200 mt-3 block text-sm">
                  Secure Transaction Facilitation by <strong className="text-white">Escrow.com</strong>
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
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 overflow-y-auto">
              {footerPages[activeModal].content}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end sticky bottom-0 z-10">
              <button 
                onClick={closeModal}
                className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-slate-800 transition-colors focus:ring-2 focus:ring-gold"
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