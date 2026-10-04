'use client';

import React from 'react';
import { Award, Droplets, Heart, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface SpaWellnessProps {
  onOpenWellnessModal: () => void;
}

export const SpaWellness: React.FC<SpaWellnessProps> = ({ onOpenWellnessModal }) => {
  const spaServices = [
    '24K Gold Leaf Royal Hammam Ritual',
    'Amber & Frankincense Deep Muscle Massage',
    'Hydrating Arabian Sea Marine Collagen Facial',
    'Himalayan Pink Salt Thermal Sauna',
    'Eucalyptus & Oud Steam Sanctuary',
    'Private Sunrise Yoga & Ocean Meditation'
  ];

  return (
    <section id="spa" className="py-24 bg-[#141210] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8">
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center gap-1.5 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              ROYAL WELLNESS & 24K GOLD HAMMAM
            </span>

            <h2 className="text-5xl sm:text-7xl font-serif text-[#F7F4EE] leading-none">
              Slow down.
            </h2>

            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
              Carved from Italian Calacatta marble and Turkish travertine, Velora Royal Spa blends ancient Arabian oud rituals, 24K gold-leaf infusions, and restorative hydrotherapy overlooking the Arabian Gulf.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {spaServices.map((service) => (
                <div key={service} className="p-3.5 rounded-2xl bg-[#29221D] border border-stone-800 text-xs text-stone-200 font-mono flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            {/* Featured Treatment Box */}
            <div className="p-6 rounded-3xl bg-[#29221D] border border-[#C5A059]/40 space-y-4">
              <div className="flex items-center justify-between gap-4 font-mono">
                <div>
                  <span className="text-[10px] text-[#C5A059] uppercase tracking-wider block">SIGNATURE ROYAL SPA RITUAL</span>
                  <h3 className="text-xl font-serif text-[#F7F4EE] mt-0.5">24K Gold Royal Hammam Reset</h3>
                </div>

                <div className="text-right">
                  <span className="text-xs text-stone-400 block">90 MINUTES</span>
                  <span className="text-lg font-bold text-[#C5A059]">AED 1,450</span>
                </div>
              </div>

              <p className="text-xs text-stone-300 font-light leading-relaxed">
                Full-body organic black soap kessa scrub, 24K gold-leaf restorative masque, frankincense scalp massage, and bespoke aromatherapeutic vitality tea.
              </p>

              <button
                onClick={onOpenWellnessModal}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#D4AF37] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-transform"
              >
                <span>Reserve 24K Gold Spa Ritual</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Spa Media Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-stone-800 shadow-2xl h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
                alt="Velora Palace Spa Soaking Tub & Hammam"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-transparent" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
