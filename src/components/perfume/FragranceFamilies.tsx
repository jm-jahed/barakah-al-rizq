'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, ArrowRight } from 'lucide-react';

export const FragranceFamilies: React.FC = () => {
  const families = [
    { name: "Oud", desc: "Smoky Cambodian agarwood, incense, and deep resinous woods.", notes: "Agarwood, Incense, Leather", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop" },
    { name: "Woody", desc: "Creamy Australian sandalwood, Atlas cedar, and Haitian vetiver.", notes: "Sandalwood, Cedar, Vetiver", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" },
    { name: "Floral", desc: "May rose centifolia, night-blooming jasmine, and white tuberose.", notes: "Rose, Jasmine, Tuberose", image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop" },
    { name: "Fresh", desc: "Clean linen silk, Anjou pear, ambrette seeds, and soft musks.", notes: "Clean Silk, Pear, Musk", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop" },
    { name: "Citrus", desc: "Zesty Calabrian bergamot, Sicilian lemon, and green apple.", notes: "Bergamot, Sea Salt, Lemon", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop" },
    { name: "Amber", desc: "Warm cinnamon, dark labdanum resin, benzoin, and tonka bean.", notes: "Golden Amber, Benzoin, Tonka", image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <section className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            THE OLFACTORY SPECTRUM
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mt-4 mb-4">
            Fragrance Families.
          </h2>
          <p className="text-base text-gray-400">
            Explore the primary scent families defined by French haute perfumery and Arabian incense traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {families.map((fam, idx) => (
            <motion.div
              key={fam.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-3xl bg-[#10141C] border border-amber-500/20 hover:border-amber-400/50 transition-all overflow-hidden shadow-2xl group flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={fam.image}
                  alt={fam.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10141C] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-amber-300 font-bold uppercase border border-amber-500/30">
                  {fam.name} Accord
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                    {fam.name}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed mt-1">
                    {fam.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-gray-400 flex items-center justify-between">
                  <span>Key Notes: <strong className="text-amber-300">{fam.notes}</strong></span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
