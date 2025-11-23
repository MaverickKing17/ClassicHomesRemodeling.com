import React from 'react';
import SkipLink from './components/SkipLink';
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
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <SkipLink />
      
      <div id="main-content">
        <Hero />
        <TrustSafety />
        <BenefitsGrid />
        <ComparableSales />
        <ROICalculator />
        <PurchaseOptions />
        <FAQs />
        <FinalCTA />
        <Footer />
      </div>

      <StickyCTA />
      <FloatingCTAButton />
      <ExitIntentModal />
    </main>
  );
}

export default App;