import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const FAQs: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "How does the transfer process work?",
      answer: "We use Escrow.com for a 100% secure transaction. Once funds are secured, we push the domain to your registrar account (GoDaddy, Namecheap, etc.) typically within 24 hours."
    },
    {
      question: "Is this a one-time payment?",
      answer: "Yes. Once you purchase the domain, you own it 100%. There are no recurring lease fees or royalties to us, only your standard annual renewal fee (~$15/year) to your registrar."
    },
    {
      question: "Can I lease the domain instead?",
      answer: "We are open to Lease-to-Own agreements starting at $1,500/month with a 20% down payment. Select 'Lease' in the offer form notes to discuss this option."
    },
    {
      question: "Do you offer logo or web design services?",
      answer: "This sale is for the premium domain name 'ClassicHomesRemodeling.com' only. However, the logo used on this page can be included free of charge upon request."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"
                aria-expanded={openIndex === idx}
              >
                <span className="font-bold text-primary">{faq.question}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-gold" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-in slide-in-from-top-2 fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;