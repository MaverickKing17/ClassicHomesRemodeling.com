import React from 'react';

const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="fixed top-0 left-0 z-[100] -translate-y-full bg-gold text-primary font-bold px-6 py-3 transition-transform focus:translate-y-0 focus:outline-none shadow-xl"
    >
      Skip to Main Content
    </a>
  );
};

export default SkipLink;
