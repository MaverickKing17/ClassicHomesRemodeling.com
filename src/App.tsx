import { useEffect, useState } from 'react';

export default function App() {
  const [daysLeft, setDaysLeft] = useState(13);
  const [showExitModal, setShowExitModal] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Countdown
  useEffect(() => {
    const end = new Date('2025-12-02T23:59:59').getTime();
    const timer = setInterval(() => {
      const left = Math.ceil((end - Date.now()) / (1000 * 60 * 60 * 24));
      setDaysLeft(left > 0 ? left : 0);
    }, 3600000);
    return () => clearInterval(timer);
  }, []);

  // Reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Exit-intent
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

  // Tawk.to
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://embed.tawk.to/69161393fd8dcd195946f907/1j9v3oujf';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    const s0 = document.getElementsByTagName('script')[0];
    s0.parentNode?.insertBefore(s1, s0);
  }, []);

  const handleOffer = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Offer received! We will contact you within 24 hours.');
  };

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed top-4 left-4 z-50 bg-[#0F172A] text-white px-4 py-2 rounded">
        Skip to main content
      </a>

      <div id="main" className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans">
        {/* HERO WITH VIDEO */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          {!prefersReducedMotion ? (
            <video autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover -z-10">
              <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-corridor-with-columns-31892-large.mp4" type="video/mp4" />
            </video>
          ) : (
            <div className="absolute inset-0 -z-10 bg-[#0F172A]">
              <img src="https://i.ibb.co/gbY4JfYQ/classic-homes-remodeling-logo.png" alt="" className="w-full h-full object-cover opacity-10" />
            </div>
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <img src="https://i.ibb.co/gbY4JfYQ/classic-homes-remodeling-logo.png" alt="ClassicHomesRemodeling.com" className="mx-auto h-32 mb-8" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Own the #1 Domain in Luxury Home Remodeling
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-12 max-w-3xl mx-auto">
              ClassicHomesRemodeling.com – the category-defining exact-match .com that instantly establishes authority and captures high-value leads.
            </p>
            <div className="bg-[#D4AF37]/20 backdrop-blur-md inline-block px-8 py-4 rounded-full text-white text-xl mb-12">
              Only {daysLeft} Days Left – Ends December 2, 2025
            </div>
            <form onSubmit={handleOffer} className="max-w-2xl mx-auto bg-white/95 backdrop-blur p-10 rounded-2xl shadow-2xl">
              <h2 className="text-3xl font-bold mb-8">Make Your Confidential Offer</h2>
              <input required placeholder="Name" className="w-full p-4 mb-4 border rounded-lg" />
              <input required type="email" placeholder="Email" className="w-full p-4 mb-4 border rounded-lg" />
              <input required placeholder="Offer Amount ($USD)" className="w-full p-4 mb-6 border rounded-lg" />
              <button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#0F172A] text-black hover:text-white py-5 text-xl font-bold rounded-lg transition">
                Submit Offer – Instant Response
              </button>
            </form>
          </div>
        </section>

        {/* Trust & Safety */}
        <section className="py-24 bg-white text-center">
          <h2 className="text-5xl font-bold mb-12">Secure Transaction Guaranteed</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto px-6">
            <div className="bg-[#FAFAFA] p-8 rounded-xl shadow">
              <p className="text-6xl mb-4">Escrow.com</p>
              <p className="text-xl">100% Buyer Protection</p>
            </div>
            <div className="bg-[#FAFAFA] p-8 rounded-xl shadow">
              <p className="text-6xl mb-4">24-72h</p>
              <p className="text-xl">Fast Transfer</p>
            </div>
            <div className="bg-[#FAFAFA] p-8 rounded-xl shadow">
              <p className="text-6xl mb-4">Lease-to-Own</p>
              <p className="text-xl">From ~$18,500/mo</p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-[#FAFAFA]">
          <h2 className="text-5xl font-bold text-center mb-16">Why This Domain Wins</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <h3 className="text-3xl font-bold mb-4">Instant Brand Authority</h3>
              <p>Exact-match .com gives immediate trust with high-net-worth clients</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <h3 className="text-3xl font-bold mb-4">SEO Dominance</h3>
              <p>12,100+ related searches/mo · $30–$68 CPC</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <h3 className="text-3xl font-bold mb-4">Category Ownership</h3>
              <p>Be the undisputed leader for the next 20 years</p>
            </div>
          </div>
        </section>

        {/* Comparable Sales */}
        <section className="py-24 bg-white">
          <h2 className="text-5xl font-bold text-center mb-16">Recent Comparable Sales</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            <div>
              <p className="text-5xl font-bold text-[#D4AF37]">HomeRemodeling.com</p>
              <p className="text-3xl">$325,000</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-[#D4AF37]">LuxuryHomes.com</p>
              <p className="text-3xl">$460,000</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-[#D4AF37]">KitchenRemodel.com</p>
              <p className="text-3xl">$689,000</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-[#0F172A] text-white text-center">
          <h2 className="text-6xl font-bold mb-8">
            Secure This Domain Before Your Competitor Does
          </h2>
          <button onClick={() => document.querySelector('form')?.scrollIntoView({behavior: 'smooth'})} className="bg-[#D4AF37] hover:bg-white text-black hover:text-[#0F172A] px-16 py-8 text-2xl font-bold rounded-lg transition">
            Make Your Offer Now
          </button>
        </section>

        {/* Exit Intent Modal */}
        {showExitModal && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
            <div className="bg-white text-black p-10 rounded-2xl max-w-lg relative">
              <button onClick={() => setShowExitModal(false)} className="absolute top-4 right-4 text-3xl">&times;</button>
              <h3 className="text-3xl font-bold mb-4">Wait — Get the Free Valuation Report</h3>
              <p className="mb-6">Not ready to offer? Download the professional valuation report ($497 value) for ClassicHomesRemodeling.com</p>
              <input type="email" placeholder="Enter your email" className="w-full p-4 border rounded-lg mb-4" />
              <button className="w-full bg-[#D4AF37] py-4 text-xl font-bold">Send Me The Report</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
