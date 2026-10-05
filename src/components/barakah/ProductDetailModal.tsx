'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Globe, Package, Lock, Store, TrendingUp, TrendingDown, Minus, CheckCircle2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useWholesaleCart } from '@/context/WholesaleCartContext';

export interface ModalProductData {
  id: string;
  name: string;
  arabicName?: string;
  category: string;
  origin?: string;
  grade?: string;
  image: string;
  description?: string;
  packaging?: string;
  packagingUnit?: string;
  minOrderQuantity?: string;
  containerPriceAED?: number | null;
  marketPriceAED?: number | null;
  trend?: 'UP' | 'DOWN' | 'STABLE' | null;
  changePercent?: number | null;
}

interface ProductDetailModalProps {
  product: ModalProductData | null;
  onClose: () => void;
  onOpenQuoteModal: (productName?: string, orderType?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ 
  product, 
  onClose, 
  onOpenQuoteModal 
}) => {
  const { addToCart, openCart } = useWholesaleCart();
  const [addedContainerSuccess, setAddedContainerSuccess] = useState(false);
  const [addedSpotSuccess, setAddedSpotSuccess] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const packagingUnit = product.packagingUnit || 'CTN';
  const containerPrice = product.containerPriceAED !== undefined && product.containerPriceAED !== null 
    ? product.containerPriceAED 
    : (product.marketPriceAED ? parseFloat((product.marketPriceAED * 0.8).toFixed(2)) : null);
  const marketPrice = product.marketPriceAED !== undefined && product.marketPriceAED !== null
    ? product.marketPriceAED
    : (product.containerPriceAED ? parseFloat((product.containerPriceAED * 1.25).toFixed(2)) : null);

  const isUp = product.trend === 'UP';
  const isDown = product.trend === 'DOWN';

  const handleAddContainer = () => {
    if (containerPrice !== null && containerPrice > 0) {
      addToCart({
        productId: product.id,
        productName: product.name,
        productArabicName: product.arabicName,
        orderType: 'CONTAINER',
        packagingUnit: packagingUnit,
        pricePerCtn: containerPrice,
        quantityCtn: 100,
        image: product.image,
      });
      setAddedContainerSuccess(true);
      setTimeout(() => setAddedContainerSuccess(false), 2500);
    } else {
      onClose();
      onOpenQuoteModal(product.name, 'Container Wholesale');
    }
  };

  const handleAddSpot = () => {
    if (marketPrice !== null && marketPrice > 0) {
      addToCart({
        productId: product.id,
        productName: product.name,
        productArabicName: product.arabicName,
        orderType: 'DUBAI_WHOLESALE',
        packagingUnit: packagingUnit,
        pricePerCtn: marketPrice,
        quantityCtn: 10,
        image: product.image,
      });
      setAddedSpotSuccess(true);
      setTimeout(() => setAddedSpotSuccess(false), 2500);
    } else {
      onClose();
      onOpenQuoteModal(product.name, 'Dubai Wholesale (Spot)');
    }
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm transition-all overflow-y-auto"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-lg w-full rounded-3xl bg-white p-5 sm:p-7 text-[#111827] shadow-2xl relative border border-emerald-200 font-sans my-auto max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-[#063D24] transition-all cursor-pointer z-20 shadow-xs"
            title="Close popup (or click outside)"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Image Header */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-gray-200 shadow-inner">
            <img 
              src={product.image || 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop'} 
              alt={product.name} 
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop';
              }}
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-amber-300 font-mono text-[10px] font-bold shadow-sm">
              {product.category}
            </div>
            {product.origin && (
              <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#063D24] font-mono text-[10px] font-bold shadow-sm border border-emerald-200">
                {product.origin}
              </div>
            )}
          </div>

          {/* Titles */}
          {product.arabicName && (
            <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest block mb-0.5">
              {product.arabicName}
            </span>
          )}
          <h3 className="text-xl sm:text-2xl font-black mb-4 font-sans text-[#063D24] leading-tight">
            {product.name}
          </h3>

          {/* ============================================================= */}
          {/* TWO COHESIVE PROCUREMENT TILES (EXACTLY MATCHING SPEC)        */}
          {/* ============================================================= */}
          <div className="space-y-3 mb-5">
            
            {/* 1. CONTAINER WHOLESALE TILE */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#062417] via-[#093522] to-[#041B11] text-white border border-[#D4AF37]/50 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#D4AF37]/20 border border-[#D4AF37]/60 text-[10px] font-sans font-black text-[#F8D879] uppercase tracking-wide">
                  <Lock className="w-3 h-3 text-[#F8D879]" />
                  <span>CONTAINER WHOLESALE</span>
                </span>
                <span className="text-xs font-sans text-emerald-100 font-semibold">
                  Direct Importer FCL
                </span>
              </div>

              {containerPrice !== null ? (
                <div>
                  <div className="flex items-baseline gap-1.5 my-1">
                    <span className="text-base font-sans font-black text-[#F8D879]">
                      Dhs
                    </span>
                    <span className="text-3xl font-black text-white font-sans tracking-tight">
                      {containerPrice.toFixed(2)}
                    </span>
                    <span className="text-xs font-sans text-emerald-200 font-bold">
                      / {packagingUnit}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-sans mt-2 pt-1.5 border-t border-emerald-700/50 text-emerald-100">
                    <span>MOQ: <strong className="text-white font-black">100 CTN</strong></span>
                    <span className="text-xs text-[#F8D879] font-bold">Direct Container Pricing</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddContainer}
                    className="w-full mt-2.5 py-3 rounded-xl bg-gradient-to-r from-[#E6BD56] via-[#F8DA84] to-[#D4AF37] hover:brightness-105 active:scale-[0.98] text-[#1A1300] font-sans font-black text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                  >
                    {addedContainerSuccess ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-950" />
                        <span>ADDED TO CART (100 CTN)</span>
                      </>
                    ) : (
                      <span>+ ADD CONTAINER (100 CTN)</span>
                    )}
                  </button>
                </div>
              ) : (
                <div className="py-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#D4AF37]/20 text-[#F8D879] border border-[#D4AF37]/50 text-xs font-bold">
                    PRICE ON REQUEST
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenQuoteModal(product.name, 'Container Wholesale');
                    }}
                    className="w-full mt-2.5 py-3 rounded-xl bg-black/50 hover:bg-black/70 text-[#F8D879] border border-[#D4AF37]/50 font-sans font-black text-xs uppercase tracking-wide transition-all flex items-center justify-center cursor-pointer"
                  >
                    Inquire Container Rate
                  </button>
                </div>
              )}
            </div>

            {/* 2. DUBAI WHOLESALE MARKET (SPOT) TILE */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#F5FAF7] via-white to-[#EEF8F2] text-[#063D24] border border-emerald-300 shadow-xs relative overflow-hidden">
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-100 border border-emerald-300 text-[10px] font-sans font-black text-[#063D24] uppercase tracking-wide">
                  <Store className="w-3 h-3 text-emerald-800 shrink-0" />
                  <span>DUBAI WHOLESALE MARKET</span>
                </span>
                
                {product.trend && (
                  <span className={`flex items-center gap-0.5 text-[10px] font-sans font-extrabold px-2 py-0.5 rounded-md bg-white border border-emerald-300 shadow-2xs ${
                    isUp ? 'text-rose-600' : isDown ? 'text-emerald-700' : 'text-slate-600'
                  }`}>
                    {isUp && <TrendingUp className="w-3 h-3 text-rose-600" />}
                    {isDown && <TrendingDown className="w-3 h-3 text-emerald-700" />}
                    {!isUp && !isDown && <Minus className="w-3 h-3 text-slate-500" />}
                    <span>{product.trend}</span>
                  </span>
                )}
              </div>

              {marketPrice !== null ? (
                <div>
                  <div className="flex items-baseline gap-1.5 my-1">
                    <span className="text-base font-sans font-black text-[#063D24]">
                      Dhs
                    </span>
                    <span className="text-3xl font-black text-[#063D24] font-sans tracking-tight">
                      {marketPrice.toFixed(2)}
                    </span>
                    <span className="text-xs font-sans text-emerald-700 font-bold">
                      / {packagingUnit}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-sans mt-2 pt-1.5 border-t border-emerald-100 text-gray-700">
                    <span>MOQ: <strong className="text-[#063D24] font-black">10 CTN</strong></span>
                    <span className="text-xs text-emerald-800 font-bold">Dubai Spot Pricing</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddSpot}
                    className="w-full mt-2.5 py-3 rounded-xl bg-[#063D24] hover:bg-[#042A18] active:scale-[0.98] text-white font-sans font-black text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                  >
                    {addedSpotSuccess ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-amber-300" />
                        <span>ADDED TO CART (10 CTN)</span>
                      </>
                    ) : (
                      <span>+ ADD SPOT (10 CTN)</span>
                    )}
                  </button>
                </div>
              ) : (
                <div className="py-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 text-[#063D24] border border-emerald-300 text-xs font-bold">
                    SPOT PRICE ON REQUEST
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenQuoteModal(product.name, 'Dubai Wholesale (Spot)');
                    }}
                    className="w-full mt-2.5 py-3 rounded-xl bg-[#063D24] hover:bg-[#042A18] text-white font-sans font-black text-xs uppercase tracking-wide transition-all flex items-center justify-center cursor-pointer"
                  >
                    Inquire Spot Rate
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Wholesale Specs & Packaging */}
          <div className="space-y-2 bg-[#F8FAF8] p-4 rounded-2xl border border-emerald-200 text-xs shadow-2xs mb-4">
            <span className="text-[11px] font-mono font-bold text-amber-700 uppercase tracking-widest block mb-1">
              WHOLESALE SPECIFICATIONS &amp; PACKAGING
            </span>
            <div className="flex items-center gap-2 text-gray-700">
              <Package className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Packaging: <strong className="text-gray-900 font-semibold">{product.packaging || '10kg Polybag Carton'}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Min Order Quantity: <strong className="text-gray-900 font-semibold">{product.minOrderQuantity || '500 KG / 100 CTN'}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Globe className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Compliance: <strong className="text-gray-900 font-semibold">GSO &amp; Dubai Municipality Approved</strong></span>
            </div>
          </div>

          {/* Quick Cart Drawer Action */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                openCart();
              }}
              className="w-full py-3.5 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-[#063D24] font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border border-emerald-300"
            >
              <ShoppingBag className="w-4 h-4 text-[#063D24]" />
              <span>VIEW WHOLESALE CART / CHECKOUT</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};