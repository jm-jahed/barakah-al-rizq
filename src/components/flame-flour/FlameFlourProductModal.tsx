'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Plus, Minus, Check, Wheat, Flame, Award, HeartHandshake, ShieldAlert } from 'lucide-react';
import { BakeryProduct } from '@/data/flameFlourData';

interface FlameFlourProductModalProps {
  product: BakeryProduct | null;
  onClose: () => void;
  onAddToCart: (product: BakeryProduct, quantity: number, selectedSize?: string) => void;
}

export const FlameFlourProductModal: React.FC<FlameFlourProductModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Standard');
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedSize);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 900);
  };

  const totalPrice = product.priceAED * quantity;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto">
        {/* Backdrop Click */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#120f0d] border border-amber-900/40 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto text-stone-100"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-stone-300 hover:text-white border border-stone-700 transition-colors"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Visual Column */}
            <div className="relative aspect-square md:aspect-auto bg-stone-900">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d] via-transparent to-transparent md:hidden" />

              <div className="absolute bottom-4 left-4 right-4 hidden md:block p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-stone-800 text-xs">
                <div className="flex items-center gap-2 text-amber-400 font-mono uppercase mb-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Wood-Fired Craft</span>
                </div>
                <p className="text-stone-300 text-[11px] font-light">
                  Hand-shaped and baked on refractory stone deck at 245°C.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-1.5">
                  <Wheat className="w-3.5 h-3.5" />
                  <span>{product.category} · {product.bakeStyle}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif text-stone-100">
                  {product.name}
                </h2>

                <p className="mt-2 text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                  {product.description}
                </p>

                {/* Profile Matrix */}
                <div className="mt-5 space-y-2.5 bg-stone-900/70 p-4 rounded-xl border border-stone-850 text-xs">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-stone-400 font-mono">Flavor Profile:</span>
                    <span className="text-stone-200 text-right font-medium">{product.flavorProfile}</span>
                  </div>
                  <div className="flex items-start justify-between gap-2 border-t border-stone-800/60 pt-2">
                    <span className="text-stone-400 font-mono">Texture:</span>
                    <span className="text-stone-200 text-right font-medium">{product.texture}</span>
                  </div>
                  <div className="flex items-start justify-between gap-2 border-t border-stone-800/60 pt-2">
                    <span className="text-stone-400 font-mono">Serving Size:</span>
                    <span className="text-stone-200 text-right font-medium">{product.servingSize}</span>
                  </div>
                </div>

                {/* Ingredients & Allergens */}
                <div className="mt-5">
                  <div className="text-xs font-mono text-stone-400 uppercase mb-1.5">Heritage Ingredients</div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.ingredients.map((ing) => (
                      <span key={ing} className="px-2.5 py-1 rounded-lg bg-stone-900 text-stone-300 text-[11px] border border-stone-800">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {product.allergens.length > 0 && (
                  <div className="mt-4 flex items-center gap-2 text-[11px] text-amber-300/80 bg-amber-950/30 px-3 py-2 rounded-lg border border-amber-900/40">
                    <ShieldAlert className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                    <span>Contains: {product.allergens.join(', ')}</span>
                  </div>
                )}
              </div>

              {/* Quantity & CTA */}
              <div className="mt-8 pt-5 border-t border-stone-850">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-stone-400">Order Quantity</span>
                  <div className="flex items-center gap-3 bg-stone-900 px-3 py-1.5 rounded-xl border border-stone-800">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1 hover:text-amber-400 text-stone-400 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-sm font-bold text-stone-100 min-w-[20px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1 hover:text-amber-400 text-stone-400 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono text-stone-400 block">Total Price (AED)</span>
                    <span className="text-2xl font-serif font-bold text-amber-400">
                      AED {totalPrice}
                    </span>
                  </div>

                  <button
                    onClick={handleAdd}
                    className={`flex-1 py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                      isAdded
                        ? 'bg-emerald-500 text-stone-950'
                        : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 shadow-lg shadow-amber-950/40 active:scale-[0.98]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Basket</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add to Bakery Order</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
