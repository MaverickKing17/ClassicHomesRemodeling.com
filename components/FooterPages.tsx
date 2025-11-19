import React from 'react';
import { Shield, AlertTriangle, Info, FileText, Mail, Server, Award } from 'lucide-react';

export type FooterPageKey = 'privacy' | 'terms' | 'disclaimer' | 'about' | 'mission' | 'contact' | 'services';

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
          <p className="text-yellow-700 text-sm">We are a digital asset holding company, not a construction firm.</p>
        </div>
        <p>
          <strong>Not a Construction Entity:</strong> We are selling the premium domain name <em>classichomesremodeling.com</em>. We are not a construction, architecture, or remodeling firm and do not provide physical renovation services. Any images used on this site are for illustrative purposes to demonstrate the branding potential of the domain.
        </p>
        <p>
          <strong>Valuation:</strong> Any mention of "ROI", "Value", "Appraisal", or "Traffic" is based on industry averages, keyword search volume estimates, and comparable sales data. Actual results from using this domain will vary based on the buyer's business execution and marketing strategy.
        </p>
        <p>
          <strong>No Affiliation:</strong> This domain is sold as an independent asset and is not affiliated with any existing business entity unless explicitly stated in the final sales agreement.
        </p>
      </div>
    )
  },
  about: {
    title: "About ClassicHomes",
    icon: Info,
    content: (
      <div className="space-y-4 text-gray-600 text-base leading-relaxed">
        <p>
          <strong>Classic Homes</strong> is a boutique digital real estate portfolio specializing in high-value, industry-defining domain names for the construction and luxury home improvement sectors.
        </p>
        <p>
          We acquire, curate, and release category-killing domains that allow elite contractors and builders to bypass decades of brand building and establish immediate market authority.
        </p>
        <p>
          Our team consists of domain brokers and SEO experts who understand the immense leverage a "Type-In" premium .com domain provides to a growing enterprise. We have successfully brokered over $2M in digital assets since 2018.
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
  contact: {
    title: "Contact Us",
    icon: Mail,
    content: (
      <div className="space-y-4 text-gray-600 text-base leading-relaxed">
        <p>
          For serious inquiries regarding the acquisition of this asset, please use the primary "Make an Offer" form on the homepage.
        </p>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
          <h4 className="font-bold text-primary mb-4 text-lg border-b border-gray-200 pb-2">Direct Inquiries</h4>
          <div className="space-y-3">
            <p className="flex items-center justify-between">
              <span className="font-medium">Email:</span> 
              <span className="text-primary font-mono select-all">acquisitions@classichomesremodeling.com</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="font-medium">Phone:</span> 
              <span className="text-primary font-mono select-all">+1 (555) 019-2834</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="font-medium">Hours:</span> 
              <span className="text-primary">Mon-Fri, 9AM - 6PM EST</span>
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-500 italic mt-4">
          *Please note: We receive a high volume of inquiries. Offers submitted through the official form take priority over general email correspondence.
        </p>
        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gold font-bold hover:underline">
            Go to Make an Offer Form
          </button>
        </div>
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
  }
};