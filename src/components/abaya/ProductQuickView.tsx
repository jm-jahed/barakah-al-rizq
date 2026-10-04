'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, Star, CheckCircle2, MessageCircle, Ruler } from 'lucide-react';
import { AbayaProduct, ABAYA_BRAND } from '@/data/abayaData';

interface ProductQuickViewProps {
  product: AbayaProduct | null;
  onClose: () => void;
  onAddToCart: (p: AbayaProduct, selectedSize: string) => void;
  onOpenSizeGuide: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (p: AbayaProduct) => void;
}

export const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSizeGuide,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  if (!product) return null;

  const activeImage = product.secondaryImages[activeImageIdx] || product.image;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#121212] border border-stone-700 rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl relative font-sans text-stone-100 max-h-[92vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-stone-400 hover:text-white z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Left Image Gallery */}
            <div className="space-y-4">
              <div className="relative h-96 sm:h-[450px] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-stone-800">
                <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {product.secondaryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all bg-[#0A0A0A] ${
                      activeImageIdx === idx ? 'border-[#C5A059]' : 'border-stone-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Product Details */}
            <div className="space-y-6">
              
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#C5A059] mb-1">
                  <span>{product.category.toUpperCase()}</span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{product.rating.toFixed(1)} ({product.reviewsCount} Reviews)</span>
                  </div>
                </div>

                <h3 className="text-3xl font-serif font-extrabold text-[#FAFAFA]">{product.name}</h3>
                
                <div className="flex items-baseline gap-3 font-mono mt-2">
                  <span className="text-3xl font-serif font-bold text-[#FAFAFA]">
                    AED {product.priceAED.toLocaleString()}
                  </span>
                  {product.originalPriceAED && (
                    <span className="text-sm text-stone-500 line-through">
                      AED {product.originalPriceAED.toLocaleString()}
                    </span>
                  )}
                  <span className="text-xs px-2.5 py-1 rounded-md bg-[#0A0A0A] text-emerald-400 border border-emerald-500/30 font-bold">
                    IN STOCK (SAME-DAY UAE)
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 text-[10px] font-bold uppercase">SELECT ABAYA LENGTH / SIZE:</span>
                  <button
                    onClick={onOpenSizeGuide}
                    className="text-[#C5A059] text-[10px] flex items-center gap-1 hover:underline font-bold"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>UAE Size Guide</span>
                  </button>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2.5 rounded-xl font-bold transition-all border text-xs ${
                        selectedSize === sz
                          ? 'bg-[#C5A059] text-black border-[#C5A059]'
                          : 'bg-[#0A0A0A] text-stone-300 border-stone-800 hover:text-white'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-2 font-mono text-xs border-t border-b border-stone-800 py-4">
                {product.details.map((dt) => (
                  <div key={dt} className="flex items-center gap-2 text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                    <span>{dt}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 font-mono text-xs">
                <button
                  onClick={() => {
                    onAddToCart(product, selectedSize);
                    onClose();
                  }}
                  className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Shopping Bag</span>
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-4 rounded-xl border flex items-center justify-center transition-all ${
                    isWishlisted ? 'bg-rose-950 border-rose-500 text-rose-400' : 'bg-[#0A0A0A] border-stone-800 text-stone-300'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-400' : ''}`} />
                </button>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
