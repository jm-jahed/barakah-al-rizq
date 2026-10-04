'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cake, Heart, Check, Plus, ShoppingBag, Palette } from 'lucide-react';

const SIZES = [
  { id: '6inch', label: '6" Petite Round', serves: '4–6 Servings', price: 220, scale: 'w-28 h-28' },
  { id: '8inch', label: '8" Classic Round', serves: '8–12 Servings', price: 340, scale: 'w-36 h-36' },
  { id: '10inch', label: '10" Grand Round', serves: '16–20 Servings', price: 480, scale: 'w-44 h-44' },
  { id: '12inch', label: '12" Banquet Tier', serves: '24–30 Servings', price: 650, scale: 'w-52 h-52' }
];

const FLAVORS = [
  { id: 'vanilla', name: 'Bourbon & Tahitian Vanilla', color: 'bg-amber-100/90 text-stone-900', desc: 'Light Madagascar sponge infused with pure vanilla bean syrup' },
  { id: 'chocolate', name: 'Valrhona Grand Cru 70%', color: 'bg-stone-800 text-stone-100', desc: 'Moist dark chocolate genoise with cacao nib crunch' },
  { id: 'pistachio', name: 'Sicilian Bronte Pistachio', color: 'bg-emerald-900/80 text-emerald-200', desc: 'Volcanic pistachio chiffon with roasted nut praline' },
  { id: 'lemon', name: 'Amalfi Lemon & Thyme', color: 'bg-yellow-800/80 text-yellow-200', desc: 'Zesty soaked sponge with delicate wild thyme infusion' },
  { id: 'redvelvet', name: 'Velvet Cacao & Buttermilk', color: 'bg-rose-950 text-rose-200', desc: 'Traditional rich cocoa buttermilk crumb' },
  { id: 'caramel', name: 'Burnt Salted Caramel', color: 'bg-amber-900 text-amber-200', desc: 'Caramelized brown sugar sponge with sea salt crystals' }
];

const FILLINGS = [
  { id: 'vanilla-cream', name: 'Tahitian Vanilla Diplomat Cream', price: 0 },
  { id: 'choc-ganache', name: '70% Valrhona Dark Ganache', price: 25 },
  { id: 'pistachio-mouss', name: 'Bronte Pistachio Mousseline', price: 35 },
  { id: 'berry-compote', name: 'Wild UAE Berry Compote', price: 20 },
  { id: 'salted-caramel', name: 'Fleur de Sel Molten Caramel', price: 25 }
];

const FINISHES = [
  { id: 'minimal', name: 'Minimalist Satin Smooth', desc: 'Clean razor-edged Swiss meringue buttercream', borderStyle: 'border-stone-400' },
  { id: 'textured', name: 'Artisan Textured Spatula', desc: 'Organic stone-like strokes with rustic edges', borderStyle: 'border-amber-400' },
  { id: 'floral', name: 'Pressed Edible UAE Florals', desc: 'Locally grown organic pansies, cornflowers & gold dust', borderStyle: 'border-pink-400' },
  { id: 'gold-leaf', name: '24K Edible Gold Leaf & Charcoal', desc: 'Deep black cacao glaze with hand-gilded flakes', borderStyle: 'border-yellow-400' },
  { id: 'signature', name: 'Flame & Flour Signature Flame-Torched', desc: 'Marshmallow meringue peaks toasted by open torch flame', borderStyle: 'border-orange-400' }
];

interface FlameFlourCakeStudioProps {
  onAddCakeToCart: (cakeConfig: {
    name: string;
    size: string;
    flavor: string;
    filling: string;
    finish: string;
    inscription: string;
    priceAED: number;
  }) => void;
}

export const FlameFlourCakeStudio: React.FC<FlameFlourCakeStudioProps> = ({
  onAddCakeToCart
}) => {
  const [selectedSize, setSelectedSize] = useState(SIZES[1]); // 8"
  const [selectedFlavor, setSelectedFlavor] = useState(FLAVORS[0]);
  const [selectedFilling, setSelectedFilling] = useState(FILLINGS[0]);
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0]);
  const [inscription, setInscription] = useState('Bonne Fête');
  const [isAdded, setIsAdded] = useState(false);

  const calculatePrice = () => {
    return selectedSize.price + selectedFilling.price;
  };

  const handleAddToCart = () => {
    onAddCakeToCart({
      name: `Custom Atelier Cake (${selectedSize.label})`,
      size: selectedSize.label,
      flavor: selectedFlavor.name,
      filling: selectedFilling.name,
      finish: selectedFinish.name,
      inscription: inscription || 'No Inscription',
      priceAED: calculatePrice()
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <section id="cake-studio" className="py-24 bg-[#0a0807] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
            <Cake className="w-3.5 h-3.5" />
            <span>CUSTOM CELEBRATION ATELIER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
            Design Your Custom Cake
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
            Craft an artisan celebration centerpiece with bespoke sponge layers, hand-cooked ganaches, and torch-finished meringues.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cake Visual Preview Simulator (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-[#120f0d] p-8 rounded-3xl border border-stone-800/80 shadow-2xl flex flex-col items-center justify-between min-h-[460px] relative overflow-hidden">
            <div className="w-full flex items-center justify-between text-xs font-mono text-stone-400 border-b border-stone-850 pb-3">
              <span>LIVE ATELIER PREVIEW</span>
              <span className="text-amber-400">{selectedSize.serves}</span>
            </div>

            {/* Layered Visual Cake Graphic */}
            <div className="relative my-8 flex items-center justify-center">
              <motion.div
                layout
                className={`rounded-full border-4 ${selectedFinish.borderStyle} ${selectedFlavor.color} shadow-2xl flex flex-col items-center justify-center p-6 text-center transition-all duration-500`}
                style={{
                  width: selectedSize.id === '6inch' ? '180px' : selectedSize.id === '8inch' ? '220px' : selectedSize.id === '10inch' ? '260px' : '290px',
                  height: selectedSize.id === '6inch' ? '180px' : selectedSize.id === '8inch' ? '220px' : selectedSize.id === '10inch' ? '260px' : '290px'
                }}
              >
                <div className="text-2xl mb-1">🎂</div>
                <div className="text-xs font-serif font-bold uppercase tracking-wider line-clamp-1">
                  {selectedFlavor.name.split('&')[0]}
                </div>
                <div className="text-[10px] font-mono opacity-80 mt-1 line-clamp-1">
                  {selectedFinish.name.split(' ')[0]} Finish
                </div>

                {inscription && (
                  <div className="mt-2 px-2.5 py-1 rounded-md bg-stone-950/80 border border-stone-700/60 text-[10px] font-serif text-amber-200 tracking-wider max-w-[150px] truncate">
                    "{inscription}"
                  </div>
                )}
              </motion.div>
            </div>

            {/* Layer Recipe Specs */}
            <div className="w-full bg-stone-900/80 p-4 rounded-2xl border border-stone-800 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-stone-400 font-mono">Sponge:</span>
                <span className="text-stone-200 font-medium truncate max-w-[180px]">{selectedFlavor.name}</span>
              </div>
              <div className="flex justify-between border-t border-stone-800 pt-1.5">
                <span className="text-stone-400 font-mono">Filling:</span>
                <span className="text-stone-200 font-medium truncate max-w-[180px]">{selectedFilling.name}</span>
              </div>
              <div className="flex justify-between border-t border-stone-800 pt-1.5">
                <span className="text-stone-400 font-mono">Exterior:</span>
                <span className="text-stone-200 font-medium truncate max-w-[180px]">{selectedFinish.name}</span>
              </div>
            </div>
          </div>

          {/* Configurator Controls (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-[#120f0d] p-6 sm:p-8 rounded-3xl border border-stone-800/80 shadow-2xl space-y-6">
            {/* Size Selector */}
            <div>
              <label className="block text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                01. Select Diameter & Servings
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {SIZES.map((sz) => (
                  <button
                    key={sz.id}
                    onClick={() => setSelectedSize(sz)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedSize.id === sz.id
                        ? 'bg-amber-950/60 border-amber-500 text-amber-200'
                        : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold font-serif text-stone-100">{sz.label}</div>
                    <div className="text-[10px] text-stone-400 mt-0.5">{sz.serves}</div>
                    <div className="text-xs font-mono text-amber-400 font-bold mt-1.5">AED {sz.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Flavor Selector */}
            <div>
              <label className="block text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                02. Choose Sponge Flavor
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {FLAVORS.map((fl) => (
                  <button
                    key={fl.id}
                    onClick={() => setSelectedFlavor(fl)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedFlavor.id === fl.id
                        ? 'bg-amber-950/60 border-amber-500 text-amber-200 ring-1 ring-amber-500/40'
                        : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-medium text-stone-100">{fl.name}</div>
                    <div className="text-[11px] text-stone-400 line-clamp-1 mt-0.5 font-light">{fl.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Filling Selector */}
            <div>
              <label className="block text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                03. Choose Interior Filling
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {FILLINGS.map((fil) => (
                  <button
                    key={fil.id}
                    onClick={() => setSelectedFilling(fil)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                      selectedFilling.id === fil.id
                        ? 'bg-amber-950/60 border-amber-500 text-amber-200'
                        : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-white'
                    }`}
                  >
                    <span className="truncate">{fil.name}</span>
                    <span className="font-mono text-[11px] text-amber-400 font-bold shrink-0 ml-2">
                      {fil.price === 0 ? 'Incl.' : `+ AED ${fil.price}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Finish Style */}
            <div>
              <label className="block text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                04. Exterior Finish & Decor
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {FINISHES.map((fin) => (
                  <button
                    key={fin.id}
                    onClick={() => setSelectedFinish(fin)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                      selectedFinish.id === fin.id
                        ? 'bg-amber-950/60 border-amber-500 text-amber-200'
                        : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-white'
                    }`}
                  >
                    <div className="font-medium text-stone-100">{fin.name}</div>
                    <div className="text-[10px] text-stone-400 truncate mt-0.5">{fin.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Inscription Plaque */}
            <div>
              <label className="block text-xs font-mono text-stone-400 mb-1">
                Custom Chocolate Plaque Inscription (Optional)
              </label>
              <input
                type="text"
                value={inscription}
                onChange={(e) => setInscription(e.target.value)}
                maxLength={36}
                placeholder="e.g. Happy 30th Birthday Elena"
                className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-xs text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500 font-mono"
              />
            </div>

            {/* Price & Add to Basket Footer */}
            <div className="pt-4 border-t border-stone-850 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-stone-400 block">Cake Atelier Total</span>
                <span className="text-2xl font-serif font-bold text-amber-400">
                  AED {calculatePrice()}
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                className={`py-3 px-6 rounded-xl font-semibold text-xs flex items-center gap-2 transition-all ${
                  isAdded
                    ? 'bg-emerald-500 text-stone-950 font-bold'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 shadow-lg shadow-amber-950/40 active:scale-95'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Basket</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Custom Cake to Basket</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
