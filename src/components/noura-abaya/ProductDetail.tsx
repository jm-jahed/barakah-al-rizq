'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Star, MessageCircle, Truck, RefreshCw } from 'lucide-react';
import { NouraProduct, NOURA_PRODUCTS, NOURA_BRAND, getDiverseAbayaImage } from '@/data/nouraAbayaData';
import { ProductCard } from './ProductCard';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

interface ProductDetailProps {
  product: NouraProduct | null;
  onClose: () => void;
  onAddToCart: (p: NouraProduct, selectedSize: string, selectedColor: string, qty: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (p: NouraProduct) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  const { isRtl, t, translateProductName, translateProductOverview, translateCollection, translateFabric, translateOccasion, translateFit, translateColorName, formatPrice } = useNouraLanguage();
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

  // Related products (same collection or category)
  const relatedProducts = NOURA_PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.collection === product.collection)
  ).slice(0, 4);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-lg overflow-y-auto font-sans">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="bg-[#0A0A0A] border border-stone-800 rounded-3xl max-w-5xl w-full p-6 sm:p-12 shadow-2xl relative text-stone-100 max-h-[94vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 rtl:left-6 rtl:right-auto p-3 rounded-xl bg-[#121212] border border-stone-800 text-stone-400 hover:text-white z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Top Main Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-stone-800">
            
            {/* Left Image Gallery (7 Cols) */}
            <div className="md:col-span-6 space-y-4">
              <div className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden bg-[#121212] border border-stone-800">
                <img src={activeImage} alt={translateProductName(product.name)} className="w-full h-full object-cover" />
                {product.badge && (
                  <span className="absolute top-4 left-4 rtl:right-4 rtl:left-auto px-3.5 py-1.5 rounded-full bg-[#0A0A0A]/90 text-[#C5A059] border border-[#C5A059]/40 font-mono text-[10px] font-bold tracking-widest backdrop-blur-md">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIdx(idx)}
                    className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all bg-[#121212] ${
                      activeImgIdx === idx ? 'border-[#C5A059]' : 'border-stone-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Product Information (6 Cols) */}
            <div className="md:col-span-6 space-y-6">
              
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#C5A059] mb-1">
                  <span>{translateCollection(product.collection)}</span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{product.rating.toFixed(1)} ({product.reviewsCount} {isRtl ? 'تقييم موثق' : 'Verified Reviews'})</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#FAFAFA]">
                  {translateProductName(product.name)}
                </h2>

                <div className="flex items-baseline gap-3 font-mono mt-3">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#FAFAFA]">
                    {formatPrice(product.priceAED)}
                  </span>
                  {product.originalPriceAED && (
                    <span className="text-base text-stone-500 line-through">
                      {formatPrice(product.originalPriceAED)}
                    </span>
                  )}
                  <span className="text-xs px-3 py-1 rounded-lg bg-[#121212] text-emerald-400 border border-emerald-500/30 font-bold">
                    {t('inStock')}
                  </span>
                </div>
              </div>

              {/* Overview */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-stone-400 font-bold uppercase block">{t('productOverview')}</span>
                <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
                  {translateProductOverview(product.overview)}
                </p>
              </div>

              {/* Structured Details Specs List */}
              <div className="p-5 rounded-2xl bg-[#121212] border border-stone-800 space-y-2.5 font-mono text-xs">
                <span className="text-[10px] text-[#C5A059] font-bold uppercase block">{t('finishingDetails')}</span>
                
                <div className="grid grid-cols-2 gap-2 text-stone-300 text-[11px] pt-1">
                  <div>{t('filterFabric')}: <strong className="text-white">{translateFabric(product.fabric)}</strong></div>
                  <div>القصة: <strong className="text-white">{translateFit(product.fit)}</strong></div>
                  <div>الإغلاق: <strong className="text-white">{isRtl ? 'مفتوحة مع أزرار طقطق وحزام' : product.closure}</strong></div>
                  <div>{t('filterOccasion')}: <strong className="text-white">{translateOccasion(product.occasion)}</strong></div>
                </div>

                <div className="text-[11px] text-stone-300 pt-2 border-t border-stone-800">
                  {t('fabricAndCare')}: <strong className="text-stone-200">{isRtl ? 'تنظيف جاف موصى به / كوي بارد على الوجه الخلفي' : product.care}</strong>
                </div>
              </div>

              {/* Color Selector */}
              <div className="space-y-2 font-mono text-xs">
                <span className="text-stone-400 text-[10px] font-bold uppercase">{t('selectColor')} {translateColorName(currentColor)}</span>
                <div className="flex items-center gap-3">
                  {product.colorOptions.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                        currentColor === c.name
                          ? 'bg-[#121212] border-[#C5A059] text-white shadow-md'
                          : 'bg-[#0A0A0A] border-stone-800 text-stone-400'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full border border-stone-700" style={{ backgroundColor: c.hex }} />
                      <span>{translateColorName(c.name)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 text-[10px] font-bold uppercase">{t('selectSize')}</span>
                  <span className="text-[#C5A059] text-[10px] font-bold">{t('customFitAvailable')}</span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2.5 rounded-xl font-bold transition-all border text-xs ${
                        selectedSize === sz
                          ? 'bg-[#C5A059] text-black border-[#C5A059]'
                          : 'bg-[#121212] text-stone-300 border-stone-800 hover:text-white'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 font-mono text-xs">
                <span className="text-stone-400 uppercase text-[10px] font-bold">{t('quantity')}</span>
                <div className="flex items-center gap-3 bg-[#121212] px-3 py-1.5 rounded-xl border border-stone-800">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-stone-400 font-bold hover:text-white"
                  >
                    -
                  </button>
                  <span className="text-white font-bold text-sm w-4 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-stone-400 font-bold hover:text-white"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 font-mono text-xs">
                <button
                  onClick={() => {
                    onAddToCart(product, selectedSize, currentColor, quantity);
                    onClose();
                  }}
                  className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#8C6D2D] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t('addToCart')} ({formatPrice(product.priceAED * quantity)})</span>
                </button>

                <a
                  href={NOURA_BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="py-4 px-6 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{isRtl ? 'طلب عبر واتساب' : 'WhatsApp Order'}</span>
                </a>
              </div>

              {/* Shipping & Returns Bar */}
              <div className="p-4 rounded-2xl bg-[#121212] border border-stone-800 space-y-2 font-mono text-[11px] text-stone-300">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Truck className="w-4 h-4" />
                  <span>{t('topBarDelivery').split('•')[0]}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-400">
                  <RefreshCw className="w-4 h-4 text-[#C5A059]" />
                  <span>{isRtl ? 'استبدال منزلي سهل خلال 7 أيام لكافة إمارات الدولة' : '7-Day Home Exchange across Dubai, Abu Dhabi, and all 7 Emirates'}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Related Products Grid ("You May Also Like") */}
          {relatedProducts.length > 0 && (
            <div className="pt-12">
              <h4 className="text-2xl font-serif font-extrabold text-[#FAFAFA] mb-6">
                {t('relatedProducts')}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      setSelectedSize('56"');
                      setActiveImgIdx(0);
                    }}
                  >
                    <ProductCard
                      product={rel}
                      onQuickView={() => {}}
                      onOpenDetail={() => {}}
                      onAddToCart={(p) => onAddToCart(p, '56"', p.colorOptions[0]?.name || 'Classic Black', 1)}
                      onToggleWishlist={onToggleWishlist}
                      isWishlisted={isWishlisted}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
