import React from 'react';

const StickyCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-50 flex items-center gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex-1">
        <div className="text-xs text-gray-500 uppercase font-bold">Current Status</div>
        <div className="text-green-600 font-bold flex items-center gap-1 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span> Available
        </div>
      </div>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-gold text-primary font-bold py-3 px-6 rounded-lg shadow-lg flex-2 h-touch"
      >
        Make Offer
      </button>
    </div>
  );
};

export default StickyCTA;
