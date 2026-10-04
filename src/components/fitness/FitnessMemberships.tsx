'use client';
import React from 'react';
import { MEMBERSHIP_PLANS } from '@/data/fitnessData';

export const FitnessMemberships: React.FC = () => {
  return (
    <section id="memberships" className="py-24 bg-[#090807] border-b border-red-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full inline-block mb-3">
            COMMERCIAL PRICING • UAE AED
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">Membership Tiers.</h2>
          <p className="text-xs sm:text-sm text-gray-400">Believable monthly rates with full access options.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div key={plan.id} className={`bg-[#12100F] p-6 rounded-3xl border flex flex-col justify-between relative ${plan.isPopular ? 'border-red-500 shadow-2xl shadow-red-500/10' : 'border-red-500/15'}`}>
              {plan.isPopular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-red-600 text-white font-mono text-[9px] font-bold uppercase rounded-full">MOST POPULAR</span>}

              <div>
                <span className="text-[10px] font-mono text-red-400 uppercase block mb-1">{plan.accessHours}</span>
                <h3 className="font-serif text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-gray-400 mb-6">{plan.tagline}</p>

                <div className="mb-6 pb-6 border-b border-red-500/15">
                  <span className="font-mono text-3xl font-extrabold text-white">AED {plan.priceAEDMonthly}</span>
                  <span className="text-xs font-mono text-gray-400"> / month</span>
                </div>

                <ul className="space-y-2.5 text-xs font-mono text-gray-300 mb-8">
                  {plan.features.map(f => <li key={f} className="flex items-start gap-2"><span className="text-red-400">✓</span><span>{f}</span></li>)}
                </ul>
              </div>

              <a href="https://wa.me/971501234567?text=Hi%20APEX%20ATHLETICS!%20I%20want%20to%20inquire%20about%20the%20Membership." target="_blank" rel="noreferrer" className="w-full py-3 bg-red-600 hover:bg-red-500 text-white text-center font-mono font-extrabold text-xs uppercase tracking-wider rounded-xl">
                Inquire Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
