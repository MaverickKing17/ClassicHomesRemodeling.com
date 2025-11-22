// src/App.tsx
import { useEffect, useState } from 'react';
import HeroVideoBackground from '@/components/HeroVideoBackground';
import ExitIntentModal from '@/components/ExitIntentModal';
import TawkToChat from '@/components/TawkToChat';

export default function App() {
  const [daysLeft, setDaysLeft] = useState(13);

  // Countdown: Ends December 2, 2025
  useEffect(() => {
    const end = new Date('2025-12-02T23:59:59').getTime();
    const timer = setInterval(() => {
      const left = Math.ceil((end - Date.now()) / (1000 * 60 * 60 * 24));
      setDaysLeft(left > 0 ? left : 0);
    }, 3600000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-[9999] bg-[#0F172A] text-white px-6 py-3 rounded-lg font-medium focus:ring-4 focus:ring-[#D4AF37] focus:ring-offset-4"
      >
        Skip to main content
      </a>

      <div id="main-content" className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans">

        {/* HERO WITH VIDEO BACKGROUND */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <HeroVideoBackground />

          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <img
              src="https://i.ibb.co/gbY4JfYQ/classic-homes-remodeling-logo.png"
              alt="ClassicHomesRemodeling.com"
              className="mx-auto h-32 mb-8"
            />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Own the #1 Luxury Remodeling Domain
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-12 max-w-3xl mx-auto">
              ClassicHomesRemodeling.com — instant authority, SEO dominance, and high-value leads.
            </p>

            <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-md px-8 py-4 rounded-full text-white text-xl mb-12">
              Only {daysLeft} Days of Exclusivity Left — Ends December 2, 2025
            </div>

            <form className="max-w-2xl mx-auto bg-white/95 backdrop-blur p-10 rounded-2xl shadow-2xl">
              <h2 className="text-3xl font-bold mb-8">Make Your Confidential Offer</h2>
              <input required placeholder="Name" className="w-full p-4 mb-4 border rounded-lg focus:ring-4 focus:ring-[#D4AF37]" />
              <input required type="email" placeholder="Email" className="w-full p-4 mb-4 border rounded-lg focus:ring-4 focus:ring-[#D4AF37]" />
              <input required placeholder="Offer Amount ($USD)" className="w-full p-4 mb-6 border rounded-lg focus:ring-4 focus:ring-[#D4AF37]" />
              <button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#0F172A] text-black hover:text-white py-5 text-xl font-bold rounded-lg transition"
              >
                Submit Offer — Instant Response
              </button>
            </form>
          </div>
        </section>

        {/* Trust & Safety */}
        <section className="py-24 bg-white text-center">
          <h2 className="text-5xl font-bold mb-12">Secure Transaction Guaranteed</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto px-6">
            <div className="bg-[#FAFAFA] p-8 rounded-xl shadow-lg">
              <p className="text-6xl mb-4">Escrow.com</p>
              <p className="text-xl">100% Buyer Protection</p>
            </div>
            <div className="bg-[#FAFAFA] p-8 rounded-xl shadow-lg">
              <p className="text-6xl mb-4">24–72h</p>
              <p className="text-xl">Fast Transfer</p>
            </div>
            <div className="bg-[#FAFAFA] p-8 rounded-xl shadow-lg">
              <p className="text-6xl mb-4">Lease-to-Own</p>
              <p className="text-xl">From ~$18,500/mo</p>
            </div>
          </div>
        </section>

        {/* Why This Domain Wins */}
        <section className="py-24 bg-[#FAFAFA]">
          <h2 className="text-5xl font-bold text-center mb-16">Why This Domain Wins</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
            {[
              { title: "Instant Authority", desc: "Exact-match .com = immediate trust with luxury clients" },
              { title: "SEO Dominance", desc: "12,100+ monthly searches · $30–$68 CPC" },
              { title: "Category Ownership", desc: "Be the undisputed leader for decades" },
              { title: "Memorability", desc: "Radio-test perfect, easy to share" },
              { title: "Lead-Gen ROI", desc: "Pays for itself on 1–3 high-end jobs" },
              { title: "Fast & Secure", desc: "Escrow.com protected transfer" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg">{item.desc}</p>
              </div>
            ))}
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
            Secure ClassicHomesRemodeling.com Before It's Gone
          </h2>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#D4AF37] hover:bg-white text-black hover:text-[#0F172A] px-16 py-8 text-2xl font-bold rounded-lg transition"
          >
            Make Your Offer Now
          </button>
        </section>

        {/* Exit-Intent Lead Magnet Modal */}
        <ExitIntentModal />

        {/* Tawk.to Live Chat */}
        <TawkToChat />
      </div>
    </>
  );
}
