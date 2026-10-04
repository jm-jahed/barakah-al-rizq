'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const PLANS = [
  {
    id: 'essential',
    name: 'Silver Guardian Club',
    price: 149,
    suitableFor: 'Young Healthy Pets (1 – 6 Yrs)',
    inclusions: [
      'Unlimited routine clinical consultations',
      'All annual core vaccinations + Rabies stamp',
      '10% off all grooming and resort boarding stays',
      'Annual basic blood biochemistry screen'
    ],
    popular: false
  },
  {
    id: 'gold',
    name: 'Gold Sovereign Wellness VIP',
    price: 269,
    suitableFor: 'Active Dogs, Felines & Working Breeds',
    inclusions: [
      'Unlimited 24/7 priority emergency triage consultations',
      'Full annual dental ultrasonic scaling and polish',
      'All annual core vaccinations & deworming tablets',
      'Comprehensive annual organ panel & digital X-rays',
      '20% off all resort suites & aroma spa grooming'
    ],
    popular: true
  },
  {
    id: 'platinum',
    name: 'Platinum Longevity & Geriatric Care',
    price: 399,
    suitableFor: 'Senior Companions (7+ Yrs)',
    inclusions: [
      'Unlimited 24/7 priority emergency & specialist visits',
      'Bi-annual cardiac echocardiogram & abdominal ultrasound',
      'Full dental scaling & digital radiographs',
      'Monthly complimentary hydrotherapy physio session',
      'Complimentary priority pet ambulance dispatch in UAE'
    ],
    popular: false
  }
];

export const PetWellnessMembership: React.FC<any> = () => {
  return (
    <section id="membership" className="py-24 sm:py-32 bg-[#080E14] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
            <Crown className="w-3.5 h-3.5" />
            <span>ANNUAL VIP WELLNESS MEMBERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Comprehensive Preventative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Wellness Membership Plans.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Protect your companion with structured annual preventative care plans including unlimited visits, vaccinations, dental prophylaxis, and diagnostics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between space-y-6 backdrop-blur-md relative overflow-hidden ${
                plan.popular
                  ? 'bg-[#111C27] border-2 border-emerald-400 shadow-2xl shadow-emerald-500/15'
                  : 'bg-[#0E1620] border-white/10'
              }`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 px-3 py-1 rounded-xl bg-emerald-400 text-slate-950 font-mono font-black text-[10px] uppercase tracking-wider">
                  MOST POPULAR
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-sans">
                    {plan.name}
                  </h3>
                  <span className="text-xs font-mono text-emerald-300 font-bold block mt-1">
                    {plan.suitableFor}
                  </span>
                </div>

                <div className="py-3 border-y border-white/10">
                  <span className="text-3xl font-black text-emerald-400 font-mono">
                    AED {plan.price}
                  </span>
                  <span className="text-xs font-mono text-slate-400"> / month</span>
                </div>

                <ul className="space-y-2.5 text-xs font-mono text-slate-300">
                  {plan.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => window.location.assign('#hero')}
                className={`w-full py-3.5 rounded-2xl font-extrabold text-xs uppercase font-mono tracking-wider transition-all cursor-pointer ${
                  plan.popular
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20 hover:scale-102'
                    : 'bg-white/[0.04] text-white border border-white/10 hover:bg-emerald-500/15'
                }`}
              >
                Enroll in {plan.name.split(' ')[0]} Plan
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PetWellnessMembership;
