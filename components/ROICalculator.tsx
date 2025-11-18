import React, { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

const ROICalculator: React.FC = () => {
  const [avgProjectValue, setAvgProjectValue] = useState(25000);
  const [monthlyLeads, setMonthlyLeads] = useState(5);
  const [closeRate, setCloseRate] = useState(20);
  const [leaseCost] = useState(1500); // Fixed lease cost for comparison

  const monthlyRevenue = monthlyLeads * (closeRate / 100) * avgProjectValue;
  const yearlyRevenue = monthlyRevenue * 12;
  const roiMultiple = Math.round(monthlyRevenue / leaseCost);
  const breakEvenLeads = Math.ceil(leaseCost / (avgProjectValue * (closeRate / 100)));

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-gold font-bold tracking-wider uppercase mb-4">
              <Calculator className="w-5 h-5" />
              <span>ROI & Lease Calculator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">The Math Makes Sense</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Even with a lease-to-own model at ${leaseCost}/mo, a single high-end remodeling job covers the cost. 
              See how many leads you need to profit instantly.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="mb-2 text-gray-400 text-xs uppercase tracking-wide">Potential Yearly Revenue</div>
                <div className="text-3xl md:text-4xl font-bold text-gold font-serif">
                  ${yearlyRevenue.toLocaleString()}
                </div>
                <div className="text-xs text-green-400 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> {roiMultiple}x return on lease cost
                </div>
              </div>

              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="mb-2 text-gray-400 text-xs uppercase tracking-wide">Leads to Break Even</div>
                <div className="text-3xl md:text-4xl font-bold text-white font-serif">
                  {breakEvenLeads}
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  Just {breakEvenLeads} job{breakEvenLeads > 1 ? 's' : ''} covers the domain
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-secondary p-8 rounded-2xl shadow-2xl border-t-4 border-gold">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold text-gray-700">Avg. Project Value</label>
                  <span className="text-gold font-bold">${avgProjectValue.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="100000" 
                  step="1000" 
                  value={avgProjectValue}
                  onChange={(e) => setAvgProjectValue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                  aria-label="Average Project Value"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold text-gray-700">Organic Leads / Month</label>
                  <span className="text-gold font-bold">{monthlyLeads}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  step="1" 
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                   aria-label="Monthly Leads"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold text-gray-700">Close Rate</label>
                  <span className="text-gold font-bold">{closeRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="50" 
                  step="1" 
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                   aria-label="Close Rate"
                />
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                 <p className="text-xs text-gray-500 italic text-center">
                   *Calculations based on conservative SEO estimates for "Classic Homes Remodeling"
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;