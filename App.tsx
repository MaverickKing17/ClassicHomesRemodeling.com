import React from 'react';
import SkipLink from './components/SkipLink';
import TawkToChat from './components/TawkToChat';
import Hero from './components/Hero';
import TrustSafety from './components/TrustSafety';
import BenefitsGrid from './components/BenefitsGrid';
import ComparableSales from './components/ComparableSales';
import ROICalculator from './components/ROICalculator';
import PurchaseOptions from './components/PurchaseOptions';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import FloatingCTAButton from './components/FloatingCTAButton';
import ExitIntentModal from './components/ExitIntentModal';

function App() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <SkipLink />
      <TawkToChat />
      
      <div id="main-content">
        <Hero />
        <TrustSafety />
        <BenefitsGrid />
        <ComparableSales />
        <ROICalculator />
        <PurchaseOptions />
        <FAQs />
        <div className="bg-surface py-20 px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Don't Let Your Competitor Buy This.</h2>
          <p className="mb-8 text-gray-600">The auction timer is ticking. Make your move.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-primary text-white font-bold py-4 px-12 rounded-lg shadow-lg hover:bg-slate-800 transition-colors inline-block h-touch"
          >
            Make Final Offer
          </button>
        </div>
        <Footer />
      </div>

      <StickyCTA />
      <FloatingCTAButton />
      <ExitIntentModal />
    </main>
  );
}

export default App;