import React, { useState, useEffect } from 'react';
import { X, FileText, CheckCircle } from 'lucide-react';

const ExitIntentModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // If mouse leaves to top of viewport (intent to change tab/url)
      if (e.clientY <= 0) {
        const alreadyShown = sessionStorage.getItem('exit_intent_shown');
        if (!alreadyShown && !hasTriggered) {
          setIsVisible(true);
          setHasTriggered(true);
          sessionStorage.setItem('exit_intent_shown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formspree.io/f/xgvdokqr", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          subject: "Exit Intent - Valuation Report Request ($497 Value)",
          source: "ExitIntentModal"
        })
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          setIsVisible(false);
          setStatus('idle');
        }, 4000);
      } else {
        setStatus('idle');
        alert("There was a problem requesting your report. Please try again.");
      }
    } catch (error) {
      setStatus('idle');
      alert("There was a problem requesting your report. Please try again.");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-xl max-w-[550px] w-full p-8 relative shadow-2xl animate-in zoom-in-95 duration-300 border-t-8 border-[#D4AF37]">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 text-gray-300 hover:text-gray-500 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#0F172A] mb-4">Report Sent!</h3>
            <p className="text-gray-600 mb-6">
              Check your inbox. We've sent the professional valuation report to <span className="font-semibold">{email}</span>.
            </p>
            <button onClick={() => setIsVisible(false)} className="text-[#D4AF37] font-bold hover:underline">
              Return to Site
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-serif font-bold text-[#0F172A] mb-4">
                Wait — Get the Free $497 Valuation Report
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Before you go, download the professional appraisal report for <span className="font-semibold text-black">ClassicHomesRemodeling.com</span> (includes SEO data, traffic estimates, and comparable sales).
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="email" 
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your business email" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] focus:outline-none text-lg"
              />
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[#D4AF37] hover:bg-[#c5a02e] text-[#0F172A] font-bold text-xl py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending Report...' : 'Send Me the Report Instantly'}
              </button>
              
              <div className="text-center mt-4">
                <button 
                  type="button"
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 text-sm hover:text-gray-600 transition-colors"
                >
                  No thanks, I'll pass on dominating my market.
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ExitIntentModal;