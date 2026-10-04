'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Star, MessageCircle, Ruler } from 'lucide-react';
import { NouraProduct, NOURA_BRAND, getDiverseAbayaImage } from '@/data/nouraAbayaData';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

interface ProductQuickViewProps {
  product: NouraProduct | null;
  onClose: () => void;
  onOpenDetail: (p: NouraProduct) => void;
  onAddToCart: (p: NouraProduct, selectedSize: string, selectedColor: string, qty: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (p: NouraProduct) => void;
}

export const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  onClose,
  onOpenDetail,
  onAddToCart,
}) => {
  const { isRtl, t, translateProductName, translateProductOverview, translateCollection, translateColorName, formatPrice } = useNouraLanguage();
  const [selectedSize, setSelectedSize] = useState<string>('56"');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImgIdx, setActiveImgIdx] = useState<number>(0);

  if (!product) return null;

  const currentColor = selectedColor || product.colorOptions[0]?.name || 'Classic Black';
  const galleryImages = [
    getDiverseAbayaImage(product.id, 0),
    getDiverseAbayaImage(product.id, 1),
    getDiverseAbayaImage(product.id, 2)
  ];
  const activeImage = galleryImages[activeImgIdx] || galleryImages[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto font-sans">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#121212] border border-stone-800 rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl relative text-stone-100 max-h-[92vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 rtl:left-6 rtl:right-auto p-2.5 rounded-xl bg-[#0A0A0A] border border-stone-800 text-stone-400 hover:text-white z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Gallery Images */}
            <div className="space-y-4">
              <div className="relative h-96 sm:h-[420px] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-stone-800">
                <img src={activeImage} alt={translateProductName(product.name)} className="w-full h-full object-cover" />
              </div>

              <div className="flex gap-3">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIdx(idx)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all bg-[#0A0A0A] ${
                      activeImgIdx === idx ? 'border-[#C5A059]' : 'border-stone-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Quick Info */}
            <div className="space-y-5">
              
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#C5A059] mb-1">
                  <span>{translateCollection(product.collection)}</span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{product.rating.toFixed(1)} ({product.reviewsCount} {isRtl ? 'تقييم' : 'Reviews'})</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#FAFAFA]">
                  {translateProductName(product.name)}
                </h3>

                <div className="flex items-baseline gap-3 font-mono mt-2">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#FAFAFA]">
                    {formatPrice(product.priceAED)}
                  </span>
                  {product.originalPriceAED && (
                    <span className="text-sm text-stone-500 line-through">
                      {formatPrice(product.originalPriceAED)}
                    </span>
                  )}
                  <span className="text-xs px-2.5 py-1 rounded-md bg-[#0A0A0A] text-emerald-400 border border-emerald-500/30 font-bold">
                    {t('inStock')}
                  </span>
                </div>
              </div>

              {/* Overview */}
              <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
                {translateProductOverview(product.overview)}
              </p>

              {/* Color Options */}
              <div className="space-y-2 font-mono text-xs">
                <span className="text-stone-400 text-[10px] font-bold uppercase">
                  {t('selectColor')} {translateColorName(currentColor)}
                </span>
                <div className="flex items-center gap-2">
                  {product.colorOptions.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                        currentColor === c.name ? 'border-[#C5A059] scale-110' : 'border-stone-800 opacity-80'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 text-[10px] font-bold uppercase">{t('selectSize')}</span>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDetail(product);
                    }}
                    className="text-[#C5A059] text-[10px] flex items-center gap-1 hover:underline font-bold"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>{t('viewDetails')}</span>
                  </button>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 rounded-xl font-bold transition-all border text-xs ${
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

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 font-mono text-xs">
                <button
                  onClick={() => {
                    onAddToCart(product, selectedSize, currentColor, quantity);
                    onClose();
                  }}
                  className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#8C6D2D] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t('addToCart')} ({formatPrice(product.priceAED * quantity)})</span>
                </button>

                <a
                  href={NOURA_BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{isRtl ? 'طلب عبر واتساب' : 'WhatsApp Order'}</span>
                </a>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
