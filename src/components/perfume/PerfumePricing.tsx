'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, CheckCircle2 } from 'lucide-react';

export const PerfumePricing: React.FC = () => {
  const tiers = [
    {
      title: "Discovery Set",
      price: "AED 129",
      sub: "6 × 2ml atomizer sprays",
      desc: "Includes 6 flagship samples and a redeemable AED 100 digital voucher.",
      features: ["6 x 2ml Sample Sprays", "AED 100 Full-Bottle Voucher", "Olfactory Guide Cards", "Free UAE Shipping"]
    },
    {
      title: "50ml Eau de Parfum",
      price: "AED 249",
      sub: "compact travel size",
      desc: "Signature Eau de Parfum in elegant 50ml glass flacon with magnetic cap.",
      features: ["50ml Glass Flacon", "15–20% Oil Concentrate", "Complimentary Gift Box", "Same-Day Dubai Delivery"]
    },
    {
      title: "100ml Extrait de Parfum",
      price: "AED 329",
      isPopular: true,
      sub: "flagship full size",
      desc: "Maximum oil concentration in 100ml heavy glass flacon with complimentary cap engraving.",
      features: ["100ml Heavy Glass Flacon", "25–35% Oil Concentrate", "Free Cap Engraving", "Signature Wax Box"]
    },
    {
      title: "Royal Oud Collection",
      price: "AED 399",
      sub: "aged Cambodian agarwood",
      desc: "Small-batch Extrait containing 30-year aged Cambodian agarwood oil.",
      features: ["30-Yr Aged Cambodian Oud", "14+ Hour Sillage Longevity", "12ml Pure Attar Included", "VIP Concierge Service"]
    }
  ];

  return (
    <section className="py-24 bg-[#0A0D12] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
            <Droplets className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Fragrance Retail Pricing
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mb-4">
            Collection Price Tiers.
          </h2>

          <p className="text-base text-gray-400">
            Realistic UAE market retail pricing across discovery kits, 50ml, 100ml Extraits, and Royal Oud collections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t, idx) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`rounded-3xl p-6 flex flex-col justify-between shadow-2xl relative ${
                t.isPopular
                  ? 'bg-gradient-to-b from-[#18202A] via-[#10151D] to-[#0A0D12] border-2 border-amber-400'
                  : 'bg-[#10141C] border border-amber-500/20 hover:border-amber-400/50'
              }`}
            >
              {t.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-400 text-black font-extrabold text-[10px] uppercase tracking-wider font-mono">
                  FLAGSHIP SIZE
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white font-serif mb-2">{t.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-extrabold text-amber-400 font-mono">{t.price}</span>
                  <span className="text-[10px] text-gray-400 font-mono block">{t.sub}</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">{t.desc}</p>

                <div className="space-y-2 border-t border-white/10 pt-3 mb-6">
                  {t.features.map((f, fIdx) => (
                    <div key={fIdx} className="text-xs text-gray-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById('collection');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3 rounded-xl font-extrabold text-xs transition-all ${
                  t.isPopular
                    ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg'
                    : 'bg-white/10 hover:bg-white/15 text-white'
                }`}
              >
                Shop Collection →
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs font-mono text-gray-400">
          Sample Pricing — Concept Project Build • Demonstrating AED 2,499 Agency Architecture
        </div>
      </div>
    </section>
  );
};
