'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, ShieldCheck, Plus, Minus, Check, ArrowRight, ArrowLeft, Heart, Gift, MessageSquare, ShoppingBag } from 'lucide-react';
import { BAKERY_PRODUCTS, BakeryProduct } from '@/data/flameFlourData';

interface BoxTypeOption {
  id: string;
  name: string;
  tagline: string;
  basePrice: number;
  maxItems: number;
  icon: string;
}

const BOX_OPTIONS: BoxTypeOption[] = [
  { id: 'breakfast', name: 'Breakfast Box', tagline: 'Croissants, brioche & morning viennoiserie for early gatherings', basePrice: 145, maxItems: 6, icon: '🥐' },
  { id: 'pastry', name: 'Pastry Box', tagline: 'Curated assortment of tarts, babka slices & financiers', basePrice: 175, maxItems: 6, icon: '🍰' },
  { id: 'family', name: 'Family Weekend Box', tagline: 'Signature sourdough, focaccia slabs & mixed pastries', basePrice: 220, maxItems: 8, icon: '🥖' },
  { id: 'celebration', name: 'Celebration Box', tagline: 'Basque cheesecake slices, chocolate tarts & luxury cookies', basePrice: 280, maxItems: 10, icon: '✨' },
  { id: 'corporate', name: 'Corporate Meeting Box', tagline: 'Savory sourdough sandwiches & assorted sweet pastries', basePrice: 340, maxItems: 12, icon: '💼' },
  { id: 'custom', name: 'Custom Baker Box', tagline: 'Build completely to your taste from today’s fresh bake', basePrice: 195, maxItems: 8, icon: '🌾' }
];

const PACKAGING_OPTIONS = [
  { id: 'classic', name: 'Classic Bakery Kraft', price: 0, description: 'Eco-friendly natural unbleached kraft box with twine wrap' },
  { id: 'artisan', name: 'Artisan Linen Wrap', price: 20, description: 'Reusable French linen bread cloth with baker seal' },
  { id: 'signature', name: 'Flame & Flour Signature Box', price: 35, description: 'Rigid matte charcoal box with debossed copper foil' },
  { id: 'gift', name: 'Luxury Gift Hamper', price: 55, description: 'Handmade wooden presentation crate with dried lavender and wheat stems' }
];

interface FlameFlourBoxBuilderProps {
  onAddBoxToCart: (boxConfig: {
    boxName: string;
    items: Array<{ name: string; quantity: number }>;
    packaging: string;
    message: string;
    priceAED: number;
  }) => void;
}

export const FlameFlourBoxBuilder: React.FC<FlameFlourBoxBuilderProps> = ({
  onAddBoxToCart
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedBox, setSelectedBox] = useState<BoxTypeOption>(BOX_OPTIONS[0]);
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({
    'prod-04': 2, // French Butter Croissant
    'prod-07': 2, // Pain au Chocolat
    'prod-08': 2  // Cinnamon Morning Bun
  });
  const [selectedPackaging, setSelectedPackaging] = useState(PACKAGING_OPTIONS[2]);
  const [giftMessage, setGiftMessage] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const totalItemCount = Object.values(selectedItems).reduce((sum, count) => sum + count, 0);

  const handleItemCountChange = (productId: string, delta: number) => {
    const current = selectedItems[productId] || 0;
    const next = current + delta;

    if (next <= 0) {
      const copy = { ...selectedItems };
      delete copy[productId];
      setSelectedItems(copy);
    } else {
      if (delta > 0 && totalItemCount >= selectedBox.maxItems) {
        return; // Max items reached
      }
      setSelectedItems({
        ...selectedItems,
        [productId]: next
      });
    }
  };

  const calculateTotalPrice = () => {
    return selectedBox.basePrice + selectedPackaging.price;
  };

  const handleFinish = () => {
    const itemsList = Object.entries(selectedItems).map(([id, qty]) => {
      const prod = BAKERY_PRODUCTS.find(p => p.id === id);
      return {
        name: prod ? prod.name : id,
        quantity: qty
      };
    });

    onAddBoxToCart({
      boxName: selectedBox.name,
      items: itemsList,
      packaging: selectedPackaging.name,
      message: giftMessage ? `To: ${recipientName || 'Friend'} — "${giftMessage}"` : 'Standard Baker Ribbon',
      priceAED: calculateTotalPrice()
    });

    setIsCompleted(true);
    setTimeout(() => {
      setIsCompleted(false);
      setCurrentStep(1);
    }, 1500);
  };

  const stepTitles = [
    '01. Choose Box',
    '02. Select Bakes',
    '03. Quantities',
    '04. Packaging',
    '05. Dedication',
    '06. Review & Order'
  ];

  return (
    <section id="box-builder" className="py-24 bg-[#0d0a08] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
            <Gift className="w-3.5 h-3.5" />
            <span>INTERACTIVE SIGNATURE EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
            Build Your Custom Bakery Box
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
            Curate fresh wood-fired loaves, viennoiserie, and signature tarts into handcrafted packaging.
          </p>
        </div>

        {/* Step Progress Navigation */}
        <div className="mb-12 bg-stone-900/60 p-3 rounded-2xl border border-stone-800/80 overflow-x-auto scrollbar-none">
          <div className="flex items-center justify-between min-w-[600px] gap-2">
            {stepTitles.map((title, idx) => {
              const stepNum = idx + 1;
              const isCurrent = currentStep === stepNum;
              const isPast = currentStep > stepNum;
              return (
                <button
                  key={title}
                  onClick={() => setCurrentStep(stepNum)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                    isCurrent
                      ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-950/40'
                      : isPast
                      ? 'bg-stone-850 text-amber-300'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {isPast && <Check className="w-3 h-3" />}
                  <span>{title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Step Content */}
        <div className="bg-[#120f0d] p-6 sm:p-10 rounded-3xl border border-stone-800/80 shadow-2xl min-h-[420px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {/* STEP 1: CHOOSE BOX */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-stone-100">Step 01: Select Your Box Concept</h3>
                  <p className="text-xs sm:text-sm text-stone-400 mt-1">Choose the box volume and theme for your custom batch.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {BOX_OPTIONS.map((box) => {
                    const isSelected = selectedBox.id === box.id;
                    return (
                      <div
                        key={box.id}
                        onClick={() => setSelectedBox(box)}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-amber-950/40 border-amber-500 ring-1 ring-amber-500/50 shadow-lg shadow-black/60'
                            : 'bg-stone-900/60 border-stone-800/80 hover:border-stone-700 hover:bg-stone-850/60'
                        }`}
                      >
                        <div>
                          <div className="text-3xl mb-3">{box.icon}</div>
                          <h4 className="text-lg font-serif text-stone-100">{box.name}</h4>
                          <p className="text-xs text-stone-400 mt-1 font-light leading-relaxed">{box.tagline}</p>
                        </div>
                        <div className="mt-5 pt-3 border-t border-stone-800 flex items-center justify-between text-xs font-mono">
                          <span className="text-amber-400 font-bold">AED {box.basePrice}</span>
                          <span className="text-stone-400">Up to {box.maxItems} items</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 2 & 3: CHOOSE ITEMS & QUANTITY */}
            {(currentStep === 2 || currentStep === 3) && (
              <motion.div
                key="step2-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif text-stone-100">
                      Step 02 & 03: Select Bakes & Quantities
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-400 mt-1">
                      Choose items from today's fresh bake for your {selectedBox.name}.
                    </p>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-stone-900 border border-stone-800 text-xs font-mono">
                    Capacity:{' '}
                    <span className={`font-bold ${totalItemCount >= selectedBox.maxItems ? 'text-amber-400' : 'text-stone-200'}`}>
                      {totalItemCount} / {selectedBox.maxItems} Items
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[420px] overflow-y-auto pr-1">
                  {BAKERY_PRODUCTS.slice(0, 15).map((prod) => {
                    const count = selectedItems[prod.id] || 0;
                    return (
                      <div
                        key={prod.id}
                        className="p-4 rounded-xl bg-stone-900/70 border border-stone-800 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-12 h-12 rounded-lg object-cover shrink-0 border border-stone-800"
                          />
                          <div className="overflow-hidden">
                            <h4 className="text-sm font-medium text-stone-100 truncate">{prod.name}</h4>
                            <span className="text-[11px] font-mono text-amber-400/80">{prod.category}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 bg-stone-950 p-1.5 rounded-lg border border-stone-800">
                          <button
                            onClick={() => handleItemCountChange(prod.id, -1)}
                            disabled={count === 0}
                            className="p-1 text-stone-400 hover:text-white disabled:opacity-30"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs font-bold text-stone-100 min-w-[16px] text-center">
                            {count}
                          </span>
                          <button
                            onClick={() => handleItemCountChange(prod.id, 1)}
                            disabled={totalItemCount >= selectedBox.maxItems}
                            className="p-1 text-stone-400 hover:text-white disabled:opacity-30"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 4: PACKAGING */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-stone-100">Step 04: Select Packaging Style</h3>
                  <p className="text-xs sm:text-sm text-stone-400 mt-1">
                    Choose the presentation aesthetic for your curated assortment.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PACKAGING_OPTIONS.map((pack) => {
                    const isSelected = selectedPackaging.id === pack.id;
                    return (
                      <div
                        key={pack.id}
                        onClick={() => setSelectedPackaging(pack)}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-amber-950/40 border-amber-500 ring-1 ring-amber-500/50 shadow-lg shadow-black/60'
                            : 'bg-stone-900/60 border-stone-800/80 hover:border-stone-700 hover:bg-stone-850/60'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-serif text-stone-100">{pack.name}</h4>
                            <span className="text-xs font-mono font-bold text-amber-400">
                              {pack.price === 0 ? 'Included' : `+ AED ${pack.price}`}
                            </span>
                          </div>
                          <p className="text-xs text-stone-400 mt-2 font-light leading-relaxed">{pack.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 5: ADD MESSAGE */}
            {currentStep === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-stone-100">Step 05: Personalized Dedication</h3>
                  <p className="text-xs sm:text-sm text-stone-400 mt-1">
                    Add a hand-calligraphed note card or baker instructions.
                  </p>
                </div>

                <div className="space-y-4 max-w-xl">
                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-1">Recipient Name / For</label>
                    <input
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="e.g. Elena Vance or The Morning Team"
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-1">Custom Message / Note Card</label>
                    <textarea
                      rows={4}
                      value={giftMessage}
                      onChange={(e) => setGiftMessage(e.target.value)}
                      placeholder="Warm morning wishes from Flame & Flour..."
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 6: REVIEW & FINALIZE */}
            {currentStep === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-stone-100">Step 06: Review Your Curated Box</h3>
                  <p className="text-xs sm:text-sm text-stone-400 mt-1">
                    Confirm your items and add directly to your bakery basket.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-stone-900/60 p-6 rounded-2xl border border-stone-800">
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">Box Summary</div>
                    <div className="text-lg font-serif text-stone-100">{selectedBox.name}</div>
                    <div className="text-xs text-stone-400 font-mono">Packaging: {selectedPackaging.name}</div>
                    {giftMessage && (
                      <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs italic text-stone-300">
                        "{giftMessage}" — {recipientName || 'Gift Card'}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">Selected Items ({totalItemCount})</div>
                    <ul className="space-y-1 text-xs text-stone-300 max-h-36 overflow-y-auto">
                      {Object.entries(selectedItems).map(([id, qty]) => {
                        const p = BAKERY_PRODUCTS.find(item => item.id === id);
                        return (
                          <li key={id} className="flex justify-between py-1 border-b border-stone-850">
                            <span>{p ? p.name : id}</span>
                            <span className="font-mono text-amber-400">×{qty}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Action Footer */}
          <div className="mt-8 pt-6 border-t border-stone-850 flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs font-mono text-stone-400 block">Box Subtotal</span>
              <span className="text-2xl font-serif font-bold text-amber-400">
                AED {calculateTotalPrice()}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-medium border border-stone-800 flex items-center gap-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
              )}

              {currentStep < 6 ? (
                <button
                  onClick={() => setCurrentStep(Math.min(6, currentStep + 1))}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center gap-2 shadow-md shadow-amber-950/40"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  className={`px-8 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                    isCompleted
                      ? 'bg-emerald-500 text-stone-950'
                      : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 shadow-lg shadow-amber-950/50'
                  }`}
                >
                  {isCompleted ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Curated Box Added!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add Box to Bakery Basket</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
