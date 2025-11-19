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
      <div className="space-y-4 text-gray-600">
        <p>Effective Date: {new Date().getFullYear()}</p>
        <p>
          At <strong>Classic Homes Remodeling</strong>, we prioritize the privacy and security of our potential buyers. This policy outlines how we handle the information collected through our inquiry and offer forms.
        </p>
        <h4 className="font-bold text-primary mt-4">1. Information Collection</h4>
        <p>
          We collect only necessary contact information (Name, Email, Offer Amount) required to facilitate the negotiation and sale of the domain name <em>classichomesremodeling.com</em>.
        </p>
        <h4 className="font-bold text-primary mt-4">2. Data Usage</h4>
        <p>
          Your data is used exclusively for:
          <ul className="list-disc ml-5 mt-1">
            <li>Communicating counter-offers or acceptance.</li>
            <li>Drafting the Escrow.com transaction agreement.</li>
            <li>Transferring domain ownership credentials.</li>
          </ul>
        </p>
        <h4 className="font-bold text-primary mt-4">3. No Third-Party Sharing</h4>
        <p>
          We do not sell, trade, or rent your personal identification information to others. All transaction details are kept strictly confidential.
        </p>
      </div>
    )
  },
  terms: {
    title: "Terms of Service",
    icon: FileText,
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          By submitting an offer for <strong>classichomesremodeling.com</strong>, you agree to the following terms:
        </p>
        <h4 className="font-bold text-primary mt-4">1. Offer Binding</h4>
        <p>
          Submission of an offer constitutes a serious intent to purchase. While non-binding until a formal Escrow.com transaction is initiated, frivolous offers may result in IP blocking.
        </p>
        <h4 className="font-bold text-primary mt-4">2. Transaction Platform</h4>
        <p>
          All sales are final and must be conducted through <strong>Escrow.com</strong> to ensure the safety of both buyer and seller. We do not accept direct wire transfers without escrow protection.
        </p>
        <h4 className="font-bold text-primary mt-4">3. Domain Transfer</h4>
        <p>
          Ownership transfer is initiated immediately upon confirmation of secured funds by Escrow.com. The buyer is responsible for providing valid registrar account details (e.g., GoDaddy, Namecheap).
        </p>
      </div>
    )
  },
  disclaimer: {
    title: "Disclaimer",
    icon: AlertTriangle,
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          <strong>Not a Construction Entity:</strong> We are a premium digital asset holding company. We are selling the domain name <em>classichomesremodeling.com</em>. We are not a construction, architecture, or remodeling firm and do not provide physical renovation services.
        </p>
        <p>
          <strong>Valuation:</strong> Any mention of "ROI", "Value", or "Traffic" is based on industry averages, keyword search volume estimates, and comparable sales data. Actual results from using this domain will vary based on the buyer's business execution.
        </p>
        <p>
          <strong>No Affiliation:</strong> This domain is sold as an independent asset and is not affiliated with any existing business entity unless explicitly stated in the final sales agreement.
        </p>
      </div>
    )
  },
  about: {
    title: "About Classic Homes",
    icon: Info,
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          <strong>Classic Homes</strong> is a boutique digital real estate portfolio specializing in high-value, industry-defining domain names for the construction and luxury home improvement sectors.
        </p>
        <p>
          We acquire, curate, and release category-killing domains that allow elite contractors and builders to bypass decades of brand building and establish immediate market authority.
        </p>
        <p>
          Our team consists of domain brokers and SEO experts who understand the immense leverage a "Type-In" premium .com domain provides to a growing enterprise.
        </p>
      </div>
    )
  },
  mission: {
    title: "Our Mission",
    icon: Award,
    content: (
      <div className="space-y-4 text-gray-600">
        <p className="text-xl font-serif italic text-primary">
          "To provide the ultimate digital foundation for the next leader in luxury home renovation."
        </p>
        <p>
          We believe that the best craftsmanship deserves the best digital address. Our mission is to connect this powerful asset—<em>classichomesremodeling.com</em>—with a visionary builder or firm capable of delivering the quality implied by the name.
        </p>
        <p>
          We aren't just selling a domain; we are handing over the keys to online market dominance.
        </p>
      </div>
    )
  },
  contact: {
    title: "Contact Us",
    icon: Mail,
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          For serious inquiries regarding the acquisition of this asset, please use the primary "Make an Offer" form on the homepage.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-bold text-primary mb-2">Direct Inquiries</h4>
          <p><strong>Email:</strong> acquisitions@classichomesremodeling.com</p>
          <p><strong>Phone:</strong> +1 (555) 019-2834 (Broker Desk)</p>
          <p><strong>Hours:</strong> Mon-Fri, 9AM - 6PM EST</p>
        </div>
        <p className="text-sm text-gray-500">
          *Please note: We receive a high volume of inquiries. Offers submitted through the official form take priority over general email correspondence.
        </p>
      </div>
    )
  },
  services: {
    title: "Domain Services & Transfer",
    icon: Server,
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          We provide a "White Glove" transfer service to ensure a seamless transition of ownership.
        </p>
        <h4 className="font-bold text-primary mt-4">Our Transfer Process</h4>
        <ol className="list-decimal ml-5 space-y-2">
          <li><strong>Agreement:</strong> Price and terms accepted via Escrow.com.</li>
          <li><strong>Security:</strong> Buyer deposits funds into Escrow.com's secure vault.</li>
          <li><strong>Transfer:</strong> We unlock the domain and provide the Authorization Code (EPP) or "Push" the domain to your account (if on the same registrar).</li>
          <li><strong>Confirmation:</strong> You confirm control of the domain.</li>
          <li><strong>Release:</strong> Escrow.com releases funds to us.</li>
        </ol>
        <p className="mt-4">
          We assist with DNS setup and registrar migration guidance at no extra cost.
        </p>
      </div>
    )
  }
};