import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, DollarSign, ShieldCheck, Server } from 'lucide-react';

interface FaqCategory {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  questions: { q: string; a: string }[];
}

const FAQs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('value');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories: FaqCategory[] = [
    {
      id: 'value',
      label: 'Value & Usage',
      icon: DollarSign,
      questions: [
        { q: "What is the suggested use case for this domain name?", a: "This domain is the ultimate digital asset for a high-end custom home builder, renovation firm, or a lead generation network targeting the luxury remodeling market. It instantly establishes authority." },
        { q: "What is the current, estimated market value or appraisal?", a: "Premium two-word and three-word .com domains in the 'Home' and 'Remodeling' sector frequently sell in the mid-five to six-figure range. Examples include HomeRemodeling.com ($150k+) and Remodel.com ($230k+)." },
        { q: "Why is the asking price set at this premium level?", a: "The price reflects the 'Exact Match' nature of the keyword, the high CPC (Cost Per Click) of remodeling terms in Google Ads, and the instant credibility it confers to the brand." },
        { q: "Can I use this domain for a business outside of the high-end renovation market?", a: "Yes. While optimized for remodeling, it is also suitable for Interior Designers, Architects, Real Estate Developers, or Home Warranty services looking for a prestige address." },
        { q: "Has the domain ever been used to host an active website?", a: "The domain has a clean history and has primarily been held as an investment asset. It does not have a history of spam or low-quality content." },
        { q: "Is the domain currently receiving any organic search traffic?", a: "As a premium undeveloped asset, current traffic is primarily 'type-in' traffic from users directly typing the name. The true value lies in its potential for SEO dominance once developed." },
        { q: "Can I see the historical traffic data (if any)?", a: "Since the domain has not been actively developed, historical analytics are minimal. We can provide standard domain registrar parking stats upon request." },
        { q: "Are there any known trademark conflicts associated with this domain name?", a: "'Classic', 'Homes', and 'Remodeling' are generic, descriptive dictionary terms. We are not aware of any trademark conflicts, but buyers are encouraged to perform their own due diligence." },
        { q: "Is the domain eligible for immediate transfer and monetization?", a: "Yes. There are no holds or locks on the domain. You can begin using it for your website, email, or marketing campaigns immediately after transfer." },
        { q: "Does the sale include any associated assets?", a: "The sale is for the premium domain name 'ClassicHomesRemodeling.com' only. We can include the logo design used on this landing page free of charge if desired." }
      ]
    },
    {
      id: 'purchase',
      label: 'Purchase Process',
      icon: HelpCircle,
      questions: [
        { q: "How do I make an offer on the domain?", a: "Please use the secure 'Make an Offer' form located in the hero section or the 'Purchase Options' section of this page. All offers are reviewed by our brokerage team." },
        { q: "Is the listed price negotiable?", a: "We are open to reasonable offers from serious buyers. However, due to the high interest in this specific keyword set, significant discounts are unlikely." },
        { q: "What payment methods are accepted for the purchase?", a: "Through Escrow.com, we accept Wire Transfer, Credit Card (American Express, MasterCard, Visa), and PayPal. Wire transfer is recommended for transactions over $5,000." },
        { q: "Is the sale subject to a broker's commission?", a: "No. You are buying directly from the portfolio holder. There are no buyer-side broker fees unless you choose to hire your own representation." },
        { q: "What are the typical closing costs associated with this transaction?", a: "Standard Escrow.com fees apply (typically 0.89% - 3.25% depending on method). We often agree to split these fees 50/50 with the buyer." },
        { q: "How long do I have to complete the purchase after my offer is accepted?", a: "Once an agreement is reached, we open the Escrow transaction immediately. Funds are typically required within 3-5 business days." },
        { q: "What happens if the domain transfer fails?", a: "In the extremely rare event of a technical failure preventing transfer, Escrow.com will return 100% of your funds. Your money is never released to us until you possess the domain." }
      ]
    },
    {
      id: 'security',
      label: 'Security & Escrow',
      icon: ShieldCheck,
      questions: [
        { q: "What is the role of Escrow.com in this transaction?", a: "Escrow.com acts as a neutral third party. They hold your funds in a secure trust account and only release them to us AFTER you confirm you have received the domain." },
        { q: "How does Escrow.com ensure the security of my funds?", a: "Your funds are kept in a regulated trust account. We literally cannot access the money until the domain Whois record reflects your ownership." },
        { q: "Will I receive proof of ownership before the funds are released to the seller?", a: "Yes. You will have full control of the domain in your registrar account, and can verify ownership publicly before you authorize Escrow.com to release the funds." },
        { q: "Who is responsible for the Escrow.com fees?", a: "This is negotiable. Typically, for a premium asset like this, we split the fee 50/50, or the buyer pays the fee in exchange for a slightly lower purchase price." },
        { q: "What is your refund policy if the domain cannot be transferred?", a: "If we cannot deliver the domain for any reason, the transaction is cancelled and Escrow.com refunds your payment in full." }
      ]
    },
    {
      id: 'technical',
      label: 'Technical Transfer',
      icon: Server,
      questions: [
        { q: "Which domain registrar is the domain currently held with?", a: "The domain is currently registered at a major tier-1 registrar (e.g., Namecheap or GoDaddy) ensuring easy transfer to any provider you choose." },
        { q: "What are the steps and time estimate for transferring the domain?", a: "1. Funds secured in Escrow (1-3 days). 2. We unlock domain & send Auth Code (24 hours). 3. You initiate transfer (1-5 days depending on registrar). Total time: approx. 3-7 days." },
        { q: "Is the domain eligible for an Instant Transfer?", a: "Yes. If you have an account at the same registrar, we can 'Push' the domain to your account instantly (within minutes) after Escrow clearance." },
        { q: "Who is responsible for the domain renewal fees after the transfer?", a: "Once transferred, you are responsible for the annual renewal fee (typically ~$15/year) charged by your registrar." },
        { q: "Is there a waiting period (like a 60-day lock) after the transfer?", a: "If we 'Push' the domain to the same registrar, there is often a 60-day lock before you can move it to a *different* registrar, but you have full control (DNS, hosting) immediately." },
        { q: "What documentation will I receive confirming my new ownership?", a: "You will receive a transaction completion record from Escrow.com, and the public Whois database will update to reflect your organization's details." }
      ]
    }
  ];

  // Luxury Bathroom Background
  const BG_IMAGE = "https://i.ibb.co/tpQF1JLB/luxury-bathroom.jpg";

  const activeQuestions = categories.find(c => c.id === activeCategory)?.questions || [];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative bg-primary text-white" id="faqs">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Vignette Gradient Overlay: Readable Text, Visible Image */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/50 to-primary/90 z-0" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 drop-shadow-lg">Frequently Asked Questions</h2>
          <p className="text-gray-300 drop-shadow-md font-medium">
            Due diligence is key to a smart acquisition. Here is everything you need to know about valuing, securing, and transferring this asset.
          </p>
        </div>
        
        {/* Category Tabs - Increased padding for touch targets */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
              className={`flex items-center gap-2 px-6 py-4 rounded-full text-sm md:text-base font-bold transition-all duration-300 border ${
                activeCategory === cat.id 
                  ? 'bg-gold text-primary border-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]' 
                  : 'bg-primary/40 backdrop-blur text-gray-300 border-white/20 hover:bg-primary/60 hover:border-gold/50'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Questions List */}
        <div className="max-w-3xl mx-auto min-h-[400px]">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {activeQuestions.map((faq, idx) => (
              <div key={idx} className="bg-white/95 backdrop-blur rounded-lg overflow-hidden border border-white/10 hover:border-gold/50 transition-colors shadow-lg">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:bg-gray-50 min-h-[44px]"
                  aria-expanded={openIndex === idx}
                >
                  <span className="font-bold text-primary pr-4">{faq.q}</span>
                  {openIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === idx && (
                  <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100 animate-in slide-in-from-top-2 duration-200 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
