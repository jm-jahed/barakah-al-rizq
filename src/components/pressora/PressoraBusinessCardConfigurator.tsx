'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, RotateCw, Check, ShoppingCart, ArrowRight } from 'lucide-react';
import { BusinessCardConfig } from '@/data/pressoraData';

interface PressoraBusinessCardConfiguratorProps {
  onAddToCart: (item: {
    productName: string;
    configSummary: string;
    quantity: number;
    priceAED: number;
  }) => void;
}

export const PressoraBusinessCardConfigurator: React.FC<PressoraBusinessCardConfiguratorProps> = ({
  onAddToCart,
}) => {
  const [size, setSize] = useState<BusinessCardConfig['size']>('Standard (85x55mm)');
  const [paper, setPaper] = useState<BusinessCardConfig['paper']>('Luxury Cotton (450gsm)');
  const [thickness, setThickness] = useState<BusinessCardConfig['thickness']>('Heavy 350gsm');
  const [finish, setFinish] = useState<BusinessCardConfig['finish']>('Soft Touch Velvet');
  const [quantity, setQuantity] = useState<BusinessCardConfig['quantity']>(500);
  const [sides, setSides] = useState<BusinessCardConfig['sides']>('Double Sided');
  const [previewSide, setPreviewSide] = useState<'front' | 'back'>('front');
  const [companyName, setCompanyName] = useState<string>('APEX VENTURES');
  const [personName, setPersonName] = useState<string>('Alexander Vance');
  const [personTitle, setPersonTitle] = useState<string>('Managing Director');

  // Dynamic price calculation
  const basePrice = 120;
  const paperPrice = paper.includes('Cotton') ? 60 : paper.includes('Linen') ? 40 : 20;
  const finishPrice = finish.includes('Foil') ? 70 : finish.includes('Spot UV') ? 50 : finish.includes('Soft Touch') ? 35 : 0;
  const quantityMultiplier = quantity === 100 ? 0.6 : quantity === 250 ? 0.85 : quantity === 500 ? 1.0 : quantity === 1000 ? 1.6 : quantity === 2500 ? 3.2 : 5.5;
  const sidesExtra = sides === 'Double Sided' ? 30 : 0;

  const totalAED = Math.round((basePrice + paperPrice + finishPrice + sidesExtra) * quantityMultiplier);

  const handleAdd = () => {
    onAddToCart({
      productName: 'Executive Business Cards',
      configSummary: `${quantity}u • ${size} • ${paper} • ${finish} • ${sides}`,
      quantity: quantity,
      priceAED: totalAED,
    });
  };

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-[#0c131d] border border-[#1a2b40] shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Interactive 3D-Like Preview Canvas */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-[#38bdf8] font-bold">
              Interactive Card Preview
            </span>
            <button
              onClick={() => setPreviewSide((prev) => (prev === 'front' ? 'back' : 'front'))}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#142030] hover:bg-[#1a2c42] border border-[#233a56] text-xs font-mono text-[#cbd5e1] transition-colors cursor-pointer"
            >
              <RotateCw className="w-3 h-3" />
              <span>Flip to {previewSide === 'front' ? 'Back' : 'Front'}</span>
            </button>
          </div>

          {/* Card Simulation Canvas */}
          <div className="relative min-h-[260px] sm:min-h-[300px] rounded-2xl bg-[#070b10] border border-[#16293f] p-8 flex items-center justify-center overflow-hidden shadow-inner">
            <motion.div
              key={previewSide + finish + paper}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className={`relative w-72 h-44 rounded-xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 border ${
                finish.includes('Soft Touch')
                  ? 'bg-gradient-to-br from-[#12161f] to-[#0a0d14] border-[#223348]'
                  : finish.includes('Foil')
                  ? 'bg-[#0f141e] border-[#c084fc]/50 shadow-[0_0_30px_rgba(192,132,252,0.15)]'
                  : 'bg-[#131924] border-[#1d2d42]'
              }`}
            >
              {previewSide === 'front' ? (
                <>
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-mono tracking-widest text-[#38bdf8] uppercase font-bold">
                      {companyName || 'APEX VENTURES'}
                    </div>
                    <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#38bdf8] to-[#818cf8]" />
                  </div>

                  <div>
                    <div className="text-sm font-bold text-[#f8fafc]">
                      {personName || 'Alexander Vance'}
                    </div>
                    <div className="text-[10px] font-mono text-[#94a3b8]">
                      {personTitle || 'Managing Director'}
                    </div>
                  </div>

                  <div className="text-[9px] font-mono text-[#64748b] flex justify-between border-t border-[#1e2e42] pt-2">
                    <span>+971 4 800 9900</span>
                    <span>alexander@apex.ae</span>
                  </div>
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#38bdf8] to-[#c084fc] flex items-center justify-center font-bold text-white text-xs">
                    AV
                  </div>
                  <div className="text-xs font-mono font-bold text-[#f8fafc]">
                    {companyName || 'APEX VENTURES'}
                  </div>
                  <div className="text-[9px] font-mono text-[#64748b]">
                    DIFC Gate Tower, Dubai, UAE
                  </div>
                </div>
              )}

              {/* Finish Badge Overlay */}
              <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[8px] font-mono text-[#38bdf8]">
                {finish}
              </div>
            </motion.div>
          </div>

          {/* Quick Mock Card Info Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs">
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company"
              className="p-2.5 rounded-xl bg-[#09101a] border border-[#16293f] text-[#cbd5e1] text-xs focus:outline-none focus:border-[#38bdf8]"
            />
            <input
              type="text"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              placeholder="Name"
              className="p-2.5 rounded-xl bg-[#09101a] border border-[#16293f] text-[#cbd5e1] text-xs focus:outline-none focus:border-[#38bdf8]"
            />
            <input
              type="text"
              value={personTitle}
              onChange={(e) => setPersonTitle(e.target.value)}
              placeholder="Title"
              className="p-2.5 rounded-xl bg-[#09101a] border border-[#16293f] text-[#cbd5e1] text-xs focus:outline-none focus:border-[#38bdf8]"
            />
          </div>
        </div>

        {/* Right Column: Configuration Selectors */}
        <div className="lg:col-span-7 space-y-6 font-mono text-xs">
          {/* Size */}
          <div>
            <label className="text-[11px] uppercase tracking-wider text-[#38bdf8] font-bold mb-2 block">
              01 · Select Dimensions & Geometry
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {['Standard (85x55mm)', 'Square (65x65mm)', 'Slimline (90x45mm)'].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s as any)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    size === s
                      ? 'bg-[#122236] border-[#38bdf8] text-[#f8fafc] font-bold shadow-md'
                      : 'bg-[#09101a] border-[#16293f] text-[#64748b] hover:text-[#cbd5e1]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Paper Stock */}
          <div>
            <label className="text-[11px] uppercase tracking-wider text-[#38bdf8] font-bold mb-2 block">
              02 · Premium Paper Stock
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {['Luxury Cotton (450gsm)', 'Matte Coated (350gsm)', 'Textured Linen (300gsm)'].map((p) => (
                <button
                  key={p}
                  onClick={() => setPaper(p as any)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    paper === p
                      ? 'bg-[#122236] border-[#38bdf8] text-[#f8fafc] font-bold shadow-md'
                      : 'bg-[#09101a] border-[#16293f] text-[#64748b] hover:text-[#cbd5e1]'
                  }`}
                >
                  <div className="font-bold text-[11px]">{p.split(' (')[0]}</div>
                  <div className="text-[10px] text-[#64748b]">({p.split('(')[1]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Finish */}
          <div>
            <label className="text-[11px] uppercase tracking-wider text-[#38bdf8] font-bold mb-2 block">
              03 · Embellishment & Finish
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Soft Touch Velvet', 'Spot UV Glaze', 'Gold Foil Stamping', 'Rounded Corners'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFinish(f as any)}
                  className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                    finish === f
                      ? 'bg-[#122236] border-[#38bdf8] text-[#f8fafc] font-bold'
                      : 'bg-[#09101a] border-[#16293f] text-[#64748b] hover:text-[#cbd5e1]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="text-[11px] uppercase tracking-wider text-[#38bdf8] font-bold mb-2 block">
              04 · Production Run Quantity
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {[100, 250, 500, 1000, 2500, 5000].map((q) => (
                <button
                  key={q}
                  onClick={() => setQuantity(q as any)}
                  className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                    quantity === q
                      ? 'bg-[#0284c7] border-[#38bdf8] text-[#ffffff] font-bold shadow-md'
                      : 'bg-[#09101a] border-[#16293f] text-[#64748b] hover:text-[#cbd5e1]'
                  }`}
                >
                  {q.toLocaleString()}u
                </button>
              ))}
            </div>
          </div>

          {/* Price Summary & Add to Cart */}
          <div className="p-5 rounded-2xl bg-[#08101a] border border-[#14263a] flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
            <div>
              <div className="text-[10px] uppercase text-[#64748b]">Total Calculated Investment</div>
              <div className="text-3xl font-bold font-mono text-[#38bdf8]">
                AED {totalAED.toLocaleString()}
                <span className="text-xs text-[#64748b] font-normal font-sans"> (AED {(totalAED / quantity).toFixed(2)}/card)</span>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#2563eb] hover:from-[#0369a1] hover:to-[#1d4ed8] text-[#ffffff] text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add Cards to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
