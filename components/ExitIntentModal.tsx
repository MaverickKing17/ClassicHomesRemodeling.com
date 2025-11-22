'use client';

import { useEffect, useRef, useState } from 'react';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('exitIntent2025');
    if (hasSeen) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true);
        sessionStorage.setItem('exitIntent2025', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  // Focus trap + ESC close
  useEffect(() => {
    if (!isOpen) return;

    const focusable = modalRef.current?.querySelectorAll(
      'button, [href], input, textarea'
    );
    const first = focusable?.[0] as HTMLElement;
    const last = focusable?.[focusable.length - 1] as HTMLElement;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    first?.focus();
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-2xl p-8 shadow-2xl"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-6 text-3xl text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          ×
        </button>

        <h3 className="text-3xl font-bold text-[#111111] mb-4">
          Wait — Get the Free $497 Valuation Report
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Before you go, download the professional appraisal report for ClassicHomesRemodeling.com (includes SEO data, traffic estimates, and comparable sales).
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your business email"
            required
            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/50 text-lg"
          />
          <button
            type="submit"
            className="w-full bg-[#D4AF37] hover:bg-[#0F172A] text-black hover:text-white font-bold py-5 rounded-lg text-xl transition"
          >
            Send Me the Report Instantly
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-500">
          No thanks, I’ll pass on dominating my market.
        </p>
      </div>
    </div>
  );
}
