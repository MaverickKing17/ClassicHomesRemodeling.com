import { useEffect, useState } from 'react';
import SkipLink from '@/components/SkipLink';
import HeroVideoBackground from '@/components/HeroVideoBackground';
import Hero from '@/components/Hero';
import TrustSafety from '@/components/TrustSafety';
import BenefitsGrid from '@/components/BenefitsGrid';
import ComparableSales from '@/components/ComparableSales';
import ROICalculator from '@/components/ROICalculator';
import PurchaseOptions from '@/components/PurchaseOptions';
import FAQs from '@/components/FAQs';
import FloatingCTAButton from '@/components/FloatingCTAButton';
import StickyCTA from '@/components/StickyCTA';
import Footer from '@/components/Footer';
import ExitIntentModal from '@/components/ExitIntentModal';
import TawkToChat from '@/components/TawkToChat';

export default function App() {
  const [showExitModal, setShowExitModal] = useState(false);

  // Exit-intent modal (once per session)
  useEffect(() => {
    const handleMouseLeave = () => {
      if (!sessionStorage.getItem('exitIntentShown2025')) {
        setShowExitModal(true);
        sessionStorage.setItem('exitIntentShown2025', 'true');
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <>
      <SkipLink />
      <div className="min-h-screen bg-[#FAFAFA] text-[#111111] overflow-x-hidden">
        <HeroVideoBackground />
        <Hero />
        <TrustSafety />
        <BenefitsGrid />
        <ComparableSales />
        <ROICalculator />
        <PurchaseOptions />
        <FAQs />
        <Footer />

        {/* Floating & sticky CTAs */}
        <FloatingCTAButton />
        <StickyCTA />

        {/* Exit-intent valuation report modal */}
        {showExitModal && <ExitIntentModal onClose={() => setShowExitModal(false)} />}
      </div>

      {/* Tawk.to live chat – loads globally */}
      <TawkToChat />
    </>
  );
}
