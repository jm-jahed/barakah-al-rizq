'use client';

import React from 'react';
import { Feather, Shield, Hammer, Clock, TreePine, Crown } from 'lucide-react';

const CHAPTERS = [
  {
    num: '01',
    title: 'MATERIAL',
    subtitle: 'Selected from Ancient Limestone Beds & Sustainable Forestry',
    desc: 'Every block of Roman Navona travertine and slab of Appalachian black walnut is selected for geological uniqueness, structural density, and harmonious grain continuity.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80'
  },
  {
    num: '02',
    title: 'FORM',
    subtitle: 'Calibrated to the Human Scale & Architectural Light',
    desc: 'We sketch and refine in 1:1 physical plaster prototypes. Horizontal planes, radiused chamfers, and balanced proportions ensure each piece feels grounded yet weightless.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    num: '03',
    title: 'CRAFT',
    subtitle: 'Traditional Mortise-and-Tenon Interlocking Joinery',
    desc: 'Concealed hardwood tenons and walnut dowels unite structural components without relying on vulnerable modern screws, creating an heirloom capable of lasting centuries.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80'
  },
  {
    num: '04',
    title: 'FINISH',
    subtitle: 'Hand-Buffed Organic Plant Oils & Protective Beeswax',
    desc: 'Surface treatments penetrate deeply into open wood pores rather than forming a plastic film on top, inviting natural skin contact and allowing the timber to breathe.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
  },
  {
    num: '05',
    title: 'TIME',
    subtitle: 'Furniture that Grows Richer with Every Passing Decade',
    desc: 'Unlike disposable fast-furniture that deteriorates, authentic full-grain Tuscan leather and unsealed travertine acquire character, stories, and soft amber patina with living.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80'
  }
];

export const FormaCraftsmanshipStory: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#151412] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6AF73]/10 border border-[#E6AF73]/20 text-[#E6AF73] text-xs font-mono tracking-widest uppercase">
            <Feather className="w-3.5 h-3.5" />
            <span>Master Artisan Manifesto</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F2EB] tracking-tight font-serif">
            Crafted with <span className="italic text-[#E6AF73]">Intention.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A8A096] leading-relaxed">
            The five pillars governing every furniture work created within our Treviso workshop and Dubai Design District atelier.
          </p>
        </div>

        {/* 5-Chapter Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {CHAPTERS.map((ch) => (
            <div
              key={ch.num}
              className="group rounded-3xl bg-[#1A1815] border border-[#2F2B26] hover:border-[#E6AF73]/40 p-5 flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                  <img src={ch.image} alt={ch.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#E6AF73]">{ch.num} • {ch.title}</span>
                  <h4 className="text-sm font-bold text-[#F5F2EB] font-serif mt-1">{ch.subtitle}</h4>
                  <p className="text-[11px] text-[#A8A096] leading-relaxed mt-2 font-light">{ch.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
