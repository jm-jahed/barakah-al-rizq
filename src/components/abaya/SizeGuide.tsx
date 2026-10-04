'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler, CheckCircle2 } from 'lucide-react';

interface SizeGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuide: React.FC<SizeGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const chart = [
    { abayaSize: '50"', heightFeet: '4\'10" – 5\'0"', heightCM: '148 – 153 cm', recommended: 'XS / Petite' },
    { abayaSize: '52"', heightFeet: '5\'1" – 5\'3"', heightCM: '154 – 160 cm', recommended: 'Small' },
    { abayaSize: '54"', heightFeet: '5\'4" – 5\'5"', heightCM: '161 – 165 cm', recommended: 'Medium' },
    { abayaSize: '56"', heightFeet: '5\'6" – 5\'7"', heightCM: '166 – 170 cm', recommended: 'Large' },
    { abayaSize: '58"', heightFeet: '5\'8" – 5\'9"', heightCM: '171 – 175 cm', recommended: 'XL' },
    { abayaSize: '60"', heightFeet: '5\'10" – 6\'0"', heightCM: '176 – 182 cm', recommended: 'Tall' },
    { abayaSize: 'Custom', heightFeet: 'Bespoke Tailoring', heightCM: 'Tailored in Dubai', recommended: 'Free Tailoring' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto font-sans">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#121212] border border-stone-700 rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative text-stone-100"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-stone-400 hover:text-white z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4 font-mono text-xs text-[#C5A059]">
            <Ruler className="w-5 h-5" />
            <span>UAE ABAYA TAILORING & LENGTH GUIDE</span>
          </div>

          <h3 className="text-3xl font-serif font-extrabold text-[#FAFAFA] mb-2">Abaya Length Guide</h3>
          <p className="text-xs text-stone-300 font-light leading-relaxed mb-6">
            In the UAE, abaya sizing is based on your total height from shoulders to floor (measured in inches).
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="bg-[#0A0A0A] border-b border-stone-800 text-[#C5A059]">
                  <th className="p-3">ABAYA SIZE</th>
                  <th className="p-3">YOUR HEIGHT (FEET)</th>
                  <th className="p-3">YOUR HEIGHT (CM)</th>
                  <th className="p-3">FIT PROFILE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 text-stone-300">
                {chart.map((row) => (
                  <tr key={row.abayaSize} className="hover:bg-[#0A0A0A]">
                    <td className="p-3 font-bold text-white">{row.abayaSize}</td>
                    <td className="p-3">{row.heightFeet}</td>
                    <td className="p-3">{row.heightCM}</td>
                    <td className="p-3 text-[#C5A059] font-bold">{row.recommended}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-2xl bg-[#0A0A0A] border border-stone-800 space-y-2 font-mono text-xs mb-6">
            <div className="flex items-center gap-2 text-[#C5A059] font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>COMPLIMENTARY UAE CUSTOM LENGTH TAILORING</span>
            </div>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              Wearing heels or prefer a floor-sweeping train? Select "Custom Fit" when adding your abaya to bag or message our Dubai tailoring desk on WhatsApp.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-xl bg-[#C5A059] text-black font-serif font-bold text-xs uppercase tracking-wider"
          >
            Got It — Close Size Guide
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
