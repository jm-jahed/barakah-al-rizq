'use client';

import React from 'react';
import { Users, ShieldCheck, Sun, Check, ArrowRight } from 'lucide-react';

interface CorporateEventsProps {
  onOpenBookingModal: (expId?: string) => void;
}

export const CorporateEvents: React.FC<CorporateEventsProps> = ({ onOpenBookingModal }) => {
  const corpFeatures = [
    { title: "Full Private Camp Buyouts", desc: "Exclusive reservation of our Al Awir or Al Khatim conservation camps for up to 200+ delegates." },
    { title: "Coordinated 4x4 Land Cruiser Convoys", desc: "Fleet pickup logistics with licensed RTA safari leads and real-time convoy tracking." },
    { title: "Stage AV, Sound & Branded Decor", desc: "Custom stage setups, LED ambient lighting, company branding banners, and live Arabian shows." },
    { title: "Team-Building Dune Rallies", desc: "Organized quad bike challenges, sandboarding tournaments, and camel relay races." }
  ];

  return (
    <section id="corporate" className="py-24 bg-[#2A1405] text-white relative border-y border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">
              <Users className="w-3.5 h-3.5" />
              <span>CORPORATE DESERT EVENTS &amp; OFFSITES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-sans">
              Take Your Team to the Desert.
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              We design tailor-made corporate offsites, team-building dune rallies, and gala award dinners in our private desert reserve camps.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corpFeatures.map((feat, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#1C0D02] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-white font-mono">
                    <Check className="w-4 h-4 text-amber-400" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-gray-400 font-light leading-relaxed pl-6">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenBookingModal('corporate-desert-event')}
                className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-2xl transition-all flex items-center gap-2"
              >
                <span>PLAN A CORPORATE EVENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#1C0D02] p-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1200&auto=format&fit=crop"
                  alt="DUNECRAFT Corporate Desert Event Camp"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-amber-500/30">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase block">
                    PRIVATE CAMP BUYOUT
                  </span>
                  <span className="text-sm font-bold text-white block mt-1 font-sans">
                    Capacity Up to 200+ Guests • Stage AV &amp; Live Shows
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};