'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Box, Layers, ShieldCheck, Check, ArrowRight } from 'lucide-react';

interface PressoraPackagingStudioProps {
  onStartCustomBox: () => void;
}

export const PressoraPackagingStudio: React.FC<PressoraPackagingStudioProps> = ({
  onStartCustomBox,
}) => {
  const packagingTypes = [
    {
      title: 'E-Commerce Corrugated Mailers',
      desc: 'Heavyweight E-Flute corrugated board with full-bleed inside & outside graphic print.',
      ideal: 'D2C Retail, Cosmetics, Apparel, Electronics',
      specs: 'Edge Crush Tested · Self-Locking Dust Flaps',
      image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Luxury Rigid Presentation Boxes',
      desc: 'Solid 1200gsm greyboard with velvet art paper wrap, magnetic concealed closures, and custom foam.',
      ideal: 'Watches, Perfumes, Jewelry, VIP Onboarding',
      specs: 'Seamless Beveled Corners · Foil Debossed',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Folding Paperboard Cartons',
      desc: '350gsm SBS folding boxboard with auto-bottom tuck ends and high-gloss metallic foil highlights.',
      ideal: 'Pharmaceuticals, Food Confectionery, Beauty',
      specs: 'Food-Safe Inks · Embossed Braille Ready',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-24 bg-[#080b0f] text-[#f8fafc] px-4 sm:px-6 lg:px-8 border-t border-[#1a2536]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#38bdf8] font-mono mb-3">
            STRUCTURAL BRAND PACKAGING
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Packaging, Built Around Your Brand.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            Turn your unboxing into an unforgettable customer touchpoint. We engineer custom dielines, CAD structural prototypes, and production runs from 250 units.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packagingTypes.map((pkg, idx) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#0c131d] border border-[#1a2b40] hover:border-[#38bdf8]/50 transition-all duration-300 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="p-3 w-fit rounded-xl bg-[#081018] text-[#38bdf8] border border-[#14263a] mb-6">
                  <Box className="w-5 h-5" />
                </div>

                <h3 className="text-2xl font-bold text-[#f8fafc] mb-2 font-sans">
                  {pkg.title}
                </h3>

                <p className="text-xs text-[#94a3b8] font-light leading-relaxed mb-6">
                  {pkg.desc}
                </p>

                <div className="space-y-2 p-4 rounded-xl bg-[#080d14] border border-[#142334] font-mono text-xs mb-6">
                  <div className="text-[10px] text-[#64748b] uppercase">Ideal For:</div>
                  <div className="text-[#cbd5e1]">{pkg.ideal}</div>
                  <div className="text-[10px] text-[#38bdf8] pt-1">{pkg.specs}</div>
                </div>
              </div>

              <button
                onClick={onStartCustomBox}
                className="w-full py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-[#ffffff] text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request Custom Dieline & Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
