import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-gray-400 py-12 pb-24 md:pb-12">
      <div className="container mx-auto px-4 text-center">
        <img 
          src="https://i.ibb.co/gbY4JfYQ/classic-homes-remodeling-logo.png" 
          alt="Logo" 
          className="h-12 mx-auto mb-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Escrow Process</a>
        </div>
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Classic Homes Remodeling. All rights reserved. <br/>
          Transaction facilitation provided by Escrow.com.
        </p>
      </div>
    </footer>
  );
};

export default Footer;