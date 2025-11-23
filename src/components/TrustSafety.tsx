import React from 'react';
import { Shield, Lock, Globe, CheckCircle } from 'lucide-react';

const TrustSafety: React.FC = () => {
  const items = [
    { icon: Shield, text: "Escrow.com Protected" },
    { icon: Lock, text: "Secure Transfer" },
    { icon: Globe, text: "Global Authority" },
    { icon: CheckCircle, text: "One-Time Payment" },
  ];

  return (
    <section className="bg-white border-b border-gray-200 py-6" aria-label="Trust and Safety">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center justify-center gap-2 text-primary/80">
              <item.icon className="w-6 h-6 text-trust" />
              <span className="font-semibold text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSafety;
