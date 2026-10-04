'use client';

import React from 'react';
import { MapPin, Navigation, Compass, Plane, Car, Anchor, Sparkles } from 'lucide-react';
import { VELORA_BRAND } from '@/data/hotelData';

export const HotelLocation: React.FC = () => {
  const distances = [
    { title: 'Dubai International Airport (DXB)', detail: '18 min Private Rolls-Royce Chauffeur', icon: <Plane className="w-4 h-4 text-[#C5A059]" /> },
    { title: 'Al Maktoum International (DWC VIP Terminal)', detail: '35 min VIP Airport Chauffeur', icon: <Plane className="w-4 h-4 text-[#C5A059]" /> },
    { title: 'Downtown Dubai & Burj Khalifa', detail: '12 min Chauffeur Service', icon: <Car className="w-4 h-4 text-[#C5A059]" /> },
    { title: 'Velora Private Superyacht Marina', detail: 'Direct Access on Jumeirah Bay Island', icon: <Anchor className="w-4 h-4 text-[#C5A059]" /> },
  ];

  return (
    <section id="location" className="py-24 bg-[#1C1917] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center gap-1.5 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              EXCLUSIVE ISLAND PALACE LOCATION
            </span>

            <h2 className="text-4xl sm:text-6xl font-serif text-[#F7F4EE] leading-tight">
              A private island sanctuary.
            </h2>

            <p className="text-base text-stone-300 font-light leading-relaxed">
              Perched on the secluded shores of Jumeirah Bay Island and Palm Jumeirah, Velora Palace offers 360-degree vistas of the turquoise Arabian Gulf and Dubai's iconic skyline while remaining moments from Downtown Dubai.
            </p>

            <div className="space-y-3 font-mono text-xs pt-2">
              {distances.map((d) => (
                <div key={d.title} className="p-3.5 rounded-xl bg-[#29221D] border border-stone-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {d.icon}
                    <span className="text-white font-bold">{d.title}</span>
                  </div>
                  <span className="text-stone-400 text-[11px]">{d.detail}</span>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=Jumeirah+Bay+Island+Dubai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-[#F7F4EE] text-xs font-serif transition-all"
            >
              <Navigation className="w-4 h-4 text-[#C5A059]" />
              <span>Get Dubai Island Directions</span>
            </a>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden border border-stone-800 shadow-2xl h-[440px]">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
                alt="Dubai Jumeirah Bay & Skyline Coast View"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 bg-[#29221D]/90 backdrop-blur-md p-4 rounded-2xl border border-[#C5A059]/40 font-mono text-xs text-stone-200">
                <span className="text-[#C5A059] font-bold block">{VELORA_BRAND.name}</span>
                <span className="text-[10px] text-stone-400 block">{VELORA_BRAND.coordinates} • Jumeirah Bay Island</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
