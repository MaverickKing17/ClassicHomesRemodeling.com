import React from 'react';
import { Shield, AlertTriangle, Info, FileText, Server, Award, Eye, Cookie, ShoppingCart } from 'lucide-react';
import OfferForm from './OfferForm';

export type FooterPageKey = 'privacy' | 'terms' | 'disclaimer' | 'about' | 'mission' | 'services' | 'accessibility' | 'cookies' | 'offer';

interface PageContent {
  title: string;
  icon: React.ComponentType<any>;
  content: React.ReactNode;
}

export const footerPages: Record<FooterPageKey, PageContent> = {
  privacy: {
    title: "Privacy Policy",
    icon: Shield,
    content: (
      <div className="space-y-4 text-gray-600 text-base leading-relaxed">
        <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-2">Effective Date: {new Date().getFullYear()}</p>
        <p>
          At <strong>Classic Homes Remodeling</strong>, we prioritize the privacy and security of our potential buyers. This policy outlines how we handle the information collected through our inquiry and offer forms.
        </p>
        <h4 className="font-bold text-primary mt-6 mb-2 text-lg">1. Information Collection</h4>
        <p>
          We collect only necessary contact information (Name, Email, Offer Amount) required to facilitate the negotiation and sale of the domain name <em>classichomesremodeling.com</em>. We do not use cookies for tracking personal behavior outside of this session.
        </p>
        <h4 className="font-bold text-primary mt-6 mb-2 text-lg">2. Data Usage</h4>
        <p>
          Your data is used exclusively for:
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Communicating counter-offers or acceptance of your bid.</li>
            <li>Drafting the secure Escrow.com transaction agreement.</li>
            <li>Transferring domain ownership credentials to your registrar.</li>
        </ul>
        <h4 className="font-bold text-primary mt-6 mb-2 text-lg">3. No Third-Party Sharing</h4>
        <p>
          We do not sell, trade, or rent your personal identification information to others. All transaction details are kept strictly confidential between the Buyer, Seller, and Escrow Agent.
        </p>
      </div>
    )
  },
  terms: {
    title: "Terms of Service",
    icon: FileText,
    content: (
      <div className="space-y-4 text-gray-600 text-base leading-relaxed">
        <p>
          By submitting an offer for <strong>classichomesremodeling.com</strong>, you agree to the following terms:
        </p>
        <h4 className="font-bold text-primary mt-6 mb-2 text-lg">1. Offer Binding</h4>
        <p>
          Submission of an offer constitutes a serious intent to purchase. While non-binding until a formal Escrow.com transaction is initiated, frivolous offers may result in IP blocking to preserve the integrity of the sale process.
        </p>
        <h4 className="font-bold text-primary mt-6 mb-2 text-lg">2. Transaction Platform</h4>
        <p>
          All sales are final and must be conducted through <strong>Escrow.com</strong> to ensure the safety of both buyer and seller. We do not accept direct wire transfers without escrow protection unless explicitly agreed upon in writing.
        </p>
        <h4 className="font-bold text-primary mt-6 mb-2 text-lg">3. Domain Transfer</h4>
        <p>
          Ownership transfer is initiated immediately upon confirmation of secured funds by Escrow.com. The buyer is responsible for providing valid registrar account details (e.g., GoDaddy, Namecheap) to receive the asset.
        </p>
      </div>
    )
  },
  disclaimer: {
    title: "Disclaimer",
    icon: AlertTriangle,
    content: (
      <div className="space-y-4 text-gray-600 text-base leading-relaxed">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="font-bold text-yellow-800">Important Notice</p>
          <p className="text-yellow-700 text-sm">Seller is an individual entrepreneur, not a construction firm or brokerage.</p>
        </div>
        <p>
          <strong>Not a Construction Entity:</strong> We are selling the premium domain name <em>classichomesremodeling.com</em>. We are not a construction, architecture, or remodeling firm and do not provide physical renovation services. Any images used on this site are for illustrative purposes to demonstrate the branding potential of the domain.
        </p>
        <p>
          <strong>Individual Seller:</strong> This asset is owned and sold by an individual investor and technology entrepreneur. It is not held by a digital asset holding company or a real estate brokerage.
        </p>
        <p>
          <strong>Valuation:</strong> Any mention of "ROI", "Value", "Appraisal", or "Traffic" is based on industry averages, keyword search volume estimates, and comparable sales data (e.g., HomeRemodeling.com). Actual results will vary based on the buyer's execution.
        </p>
      </div>
    )
  },
  about: {
    title: "About the Seller",
    icon: Info,
    content: (
      <div className="space-y-4 text-gray-600 text-base leading-relaxed">
        <p>
          I am a <strong>tech-savvy entrepreneur</strong> and digital asset investor, not a large agency or brokerage firm.
        </p>
        <p>
          I acquire high-leverage domains that have the potential to define a category. <em>ClassicHomesRemodeling.com</em> was selected for its precise keyword match and authority in the luxury renovation sector.
        </p>
        <p>
          My goal is to transfer this asset directly to a visionary builder or creative entrepreneur who can utilize it to dominate their local market. By selling directly, I ensure a smooth, transparent transaction without unnecessary middleman fees.
        </p>
      </div>
    )
  },
  mission: {
    title: "Our Mission",
    icon: Award,
    content: (
      <div className="space-y-6 text-gray-600 text-base leading-relaxed">
        <div className="border-l-4 border-gold pl-6 py-2 italic text-xl text-primary font-serif">
          "To provide the ultimate digital foundation for the next leader in luxury home renovation."
        </div>
        <p>
          We believe that the best craftsmanship deserves the best digital address. A superior builder should not be hidden on page 5 of Google.
        </p>
        <p>
          Our mission is to connect this powerful asset—<em>classichomesremodeling.com</em>—with a visionary builder or firm capable of delivering the quality implied by the name.
        </p>
        <p>
          We aren't just selling a domain; we are handing over the keys to online market dominance. We ensure this asset goes to a serious operator who understands the value of a premium brand.
        </p>
      </div>
    )
  },
  services: {
    title: "Domain Services & Transfer",
    icon: Server,
    content: (
      <div className="space-y-4 text-gray-600 text-base leading-relaxed">
        <p>
          We provide a "White Glove" transfer service to ensure a seamless transition of ownership. You do not need technical expertise to acquire this domain; we handle the logistics.
        </p>
        <h4 className="font-bold text-primary mt-6 mb-4 text-lg">Our Standard Transfer Process</h4>
        <ol className="list-decimal ml-5 space-y-4">
          <li className="pl-2"><strong>Agreement:</strong> Price and terms accepted via Escrow.com.</li>
          <li className="pl-2"><strong>Security:</strong> Buyer deposits funds into Escrow.com's secure vault.</li>
          <li className="pl-2"><strong>Transfer:</strong> We unlock the domain and provide the Authorization Code (EPP) or "Push" the domain to your account (if on the same registrar).</li>
          <li className="pl-2"><strong>Confirmation:</strong> You confirm control of the domain in your own account.</li>
          <li className="pl-2"><strong>Release:</strong> Escrow.com releases funds to us.</li>
        </ol>
        <div className="bg-blue-50 p-4 rounded-lg mt-6 border border-blue-100">
           <p className="text-blue-800 text-sm font-medium">
             <strong>Bonus Service:</strong> We assist with DNS setup (pointing the domain to your website) and email forwarding setup at no extra cost after the purchase.
           </p>
        </div>
      </div>
    )
  },
  accessibility: {
    title: "Accessibility Statement",
    icon: Eye,
    content: (
      <div className="space-y-4 text-gray-600 text-base leading-relaxed">
        <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6">
           <p className="font-bold text-green-800">Commitment to Inclusion</p>
           <p className="text-green-700 text-sm">We believe the internet should be available and accessible to anyone.</p>
        </div>
        <p>
          <strong>Classic Homes Remodeling</strong> is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
        </p>
        <h4 className="font-bold text-primary mt-6 mb-2 text-lg">Conformance Status</h4>
        <p>
          The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
        </p>
        <p>
          <strong>classichomesremodeling.com</strong> is partially conformant with <strong>WCAG 2.2 level AA</strong>. Partially conformant means that some parts of the content may not fully conform to the accessibility standard, though we strive for full compliance.
        </p>
        <h4 className="font-bold text-primary mt-6 mb-2 text-lg">Accessibility Features</h4>
        <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Keyboard navigation support with visible focus indicators.</li>
            <li>Semantic HTML structure for Screen Reader compatibility.</li>
            <li>High contrast text and background colors (WCAG AA compliant).</li>
            <li>Alt text provided for all functional images.</li>
            <li>Reduced motion support for video backgrounds.</li>
        </ul>
        <h4 className="font-bold text-primary mt-6 mb-2 text-lg">Feedback</h4>
        <p>
          We welcome your feedback on the accessibility of our site. Please let us know if you encounter accessibility barriers:
        </p>
        <p className="mt-2">
          <span className="font-medium">Email:</span> <span className="text-primary font-mono">accessibility@classichomesremodeling.com</span>
        </p>
      </div>
    )
  },
  cookies: {
    title: "Cookie Policy",
    icon: Cookie,
    content: (
      <div className="space-y-4 text-gray-600 text-base leading-relaxed">
        <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-2">Last Updated: {new Date().getFullYear()}</p>
        <p>
          This Cookie Policy explains how <strong>Classic Homes Remodeling</strong> uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>
        <h4 className="font-bold text-primary mt-6 mb-2 text-lg">What are cookies?</h4>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </p>
        <h4 className="font-bold text-primary mt-6 mb-2 text-lg">How We Use Cookies</h4>
        <div className="space-y-3 mt-2">
          <div className="p-3 bg-gray-50 rounded border border-gray-100">
            <p className="font-bold text-primary text-sm">Essential Cookies</p>
            <p className="text-sm mt-1">These are strictly necessary to provide you with services available through our website. For example, we use a session cookie to ensure the "Exit Intent" modal does not annoy you by appearing multiple times in a single session.</p>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-100">
            <p className="font-bold text-primary text-sm">Performance & Analytics</p>
            <p className="text-sm mt-1">We use minimal analytics to understand traffic sources (e.g., knowing if you came from a specific marketing campaign). These are anonymized and do not track your personal history across other websites.</p>
          </div>
        </div>
        <h4 className="font-bold text-primary mt-6 mb-2 text-lg">Data Governance</h4>
        <p>
          We respect "Do Not Track" (DNT) signals from modern web browsers. If your browser sends a DNT signal, we do not load non-essential analytics scripts.
        </p>
      </div>
    )
  },
  offer: {
    title: "Make an Offer / Checkout",
    icon: ShoppingCart,
    content: (
      <div className="space-y-6">
        <div className="text-center mb-6">
           <p className="text-gray-600">
             You are initiating a secure acquisition process for the digital asset: <br/>
             <span className="font-bold text-primary text-lg">classichomesremodeling.com</span>
           </p>
        </div>

        {/* 3 Purchase Options Grid - Matching Main Page */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
           {/* Option 1: Lease */}
          <div className="border border-gray-200 rounded-lg p-3 bg-white hover:border-gold/50 transition-colors">
             <div className="text-[10px] text-gray-500 uppercase font-bold mb-1">Lease-to-Own</div>
             <div className="text-xl font-serif text-primary font-bold">$1,500<span className="text-xs text-gray-400 font-sans font-normal">/mo</span></div>
             <div className="text-[10px] text-gray-500 mt-1">Cancel anytime</div>
          </div>
          
           {/* Option 2: Installment */}
          <div className="border border-gray-200 rounded-lg p-3 bg-white hover:border-gold/50 transition-colors">
             <div className="text-[10px] text-gray-500 uppercase font-bold mb-1">Broker Installment</div>
             <div className="text-xl font-serif text-primary font-bold">$8,000<span className="text-xs text-gray-400 font-sans font-normal"> down</span></div>
             <div className="text-[10px] text-gray-500 mt-1">0% Financing</div>
          </div>

           {/* Option 3: Outright (Best Value) */}
          <div className="border-2 border-gold/30 rounded-lg p-3 bg-gold/5 hover:border-gold transition-colors relative">
             <div className="absolute top-0 right-0 bg-gold text-primary text-[9px] font-bold px-2 py-0.5 rounded-bl-md">THE ANCHOR</div>
             <div className="text-[10px] text-gray-500 uppercase font-bold mb-1">Outright Purchase</div>
             <div className="text-xl font-serif text-gold font-bold">$40,000<span className="text-xs text-gray-400 font-sans font-normal"> (OBO)</span></div>
             <div className="text-[10px] text-gray-500 mt-1">Full Ownership</div>
          </div>
        </div>

        <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
          <OfferForm variant="modal" />
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
           <p>By submitting this form, you are opening a preliminary inquiry. No funds are required today.</p>
           <p className="mt-1">Secure Transaction Facilitated by Escrow.com</p>
        </div>
      </div>
    )
  }
};