import { useEffect, useState } from 'react';
import SkipLink from './components/SkipLink.tsx';
import Hero from './components/Hero.tsx';
import HeroVideoBackground from './components/HeroVideoBackground.tsx';
import TrustSafety from './components/TrustSafety.tsx';
import BenefitsGrid from './components/BenefitsGrid.tsx';
import ComparableSales from './components/ComparableSales.tsx';
import ROICalculator from './components/ROICalculator.tsx';
import PurchaseOptions from './components/PurchaseOptions.tsx';
import FAQs from './components/FAQs.tsx';
import FloatingCTAButton from './components/FloatingCTAButton.tsx';
import StickyCTA from './components/StickyCTA.tsx';
import Footer from './components/Footer.tsx';
import ExitIntentModal from './components/ExitIntentModal.tsx';
import TawkToChat from './components/TawkToChat.tsx';

export default function App() {
  const [showExitModal, setShowExitModal] = useState(false);

  useEffect(() => {
    const handleMouseLeave = () => {
      if (!sessionStorage.getItem('exitIntentShown')) {
        setShowExitModal(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <>
      <SkipLink />
      <div className="min-h-screen bg-[#FAFAFA] text-[#111111]">
        <HeroVideoBackground />
        <Hero />
        <TrustSafety />
        <BenefitsGrid />
        <ComparableSales />
        <ROICalculator />
        <PurchaseOptions />
        <FAQs />
        <Footer />
        <FloatingCTAButton />
        <StickyCTA />
        {showExitModal && <ExitIntentModal onClose={() => setShowExitModal(false)} />}
      </div>
      <TawkToChat />
    </>
  );
}
