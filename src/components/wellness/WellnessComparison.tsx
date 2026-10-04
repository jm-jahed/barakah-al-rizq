'use client';
import React from 'react';

export const WellnessComparison: React.FC<any> = () => {
  const comparisonData = [
    { feature: 'Studio Yoga & Mat Classes', essential: '4/mo', unlimited: 'Unlimited', vip: 'Unlimited', private: 'Unlimited' },
    { feature: 'Reformer Pilates Passes', essential: '—', unlimited: '2/mo', vip: 'Unlimited', private: 'Unlimited' },
    { feature: 'Sound Bath Audio Immersion', essential: '10% Off', unlimited: '15% Off', vip: 'Weekly Included', private: 'Included' },
    { feature: 'Assisted Stretch Therapy', essential: '—', unlimited: '—', vip: '1 Session/mo', private: 'Included' },
    { feature: 'Guest Class Passes', essential: '1/mo', unlimited: '2/mo', vip: '4/mo', private: 'Unlimited' },
    { feature: 'Dedicated Private 1-on-1 Session', essential: '—', unlimited: '—', vip: '—', private: '4 Sessions/mo' },
    { feature: 'Valet Parking & Lockers', essential: 'Standard', unlimited: 'Priority', vip: 'VIP Dedicated', private: 'VIP Suite' }
  ];

  return (
    <section className="py-20 bg-[#0E0D0B] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">PLAN MATRIX</span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-2">Detailed Feature Comparison</h2>
        </div>

        <div className="bg-[#161411] rounded-3xl border border-amber-500/20 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-amber-500/20 bg-white/5 text-xs font-mono text-amber-300">
                <th className="p-4 pl-6">Feature</th>
                <th className="p-4 text-center">Essential (AED 299)</th>
                <th className="p-4 text-center text-amber-400 font-bold">Unlimited (AED 499)</th>
                <th className="p-4 text-center">VIP Reformer (AED 799)</th>
                <th className="p-4 text-center">Private (AED 1,499)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs font-sans text-gray-300">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5">
                  <td className="p-4 pl-6 font-medium text-white">{row.feature}</td>
                  <td className="p-4 text-center font-mono text-gray-400">{row.essential}</td>
                  <td className="p-4 text-center font-mono text-amber-200 font-bold">{row.unlimited}</td>
                  <td className="p-4 text-center font-mono text-gray-300">{row.vip}</td>
                  <td className="p-4 text-center font-mono text-amber-300 font-bold">{row.private}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
