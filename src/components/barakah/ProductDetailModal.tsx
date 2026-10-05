'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Globe, Package, ShoppingBag, ArrowRight } from 'lucide-react';
import { BarakahProduct } from '@/data/barakahData';

interface ProductDetailModalProps {
  product: BarakahProduct | null;
  onClose: () => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ 
  product, 
  onClose, 
  onOpenQuoteModal 
}) => {
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

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all"
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
          className="max-w-xl w-full rounded-3xl bg-white p-6 sm:p-8 text-[#111827] shadow-2xl relative border border-emerald-200 font-sans max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-[#063D24] transition-all cursor-pointer z-10"
            title="Close modal (or click outside)"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-slate-900 border border-gray-200 shadow-inner">
            <img 
              src={product.image || 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop'} 
              alt={product.name} 
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop';
              }}
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-amber-300 font-mono text-xs font-bold shadow-sm">
              {product.category}
            </div>
            {product.origin && (
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#063D24] font-mono text-xs font-bold shadow-sm border border-emerald-200">
                {product.origin}
              </div>
            )}
          </div>

          {/* Product Titles */}
          {product.arabicName && (
            <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-1">
              {product.arabicName}
            </span>
          )}
          <h3 className="text-2xl font-black mb-3 font-sans text-[#063D24] leading-tight">
            {product.name}
          </h3>

          {/* Pricing & Unit Spec Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F8FAF8] border border-emerald-200 mb-5 font-mono text-center text-xs shadow-xs">
            <div>
              <span className="text-gray-500 block text-[10px] uppercase font-bold">CURRENT PRICE</span>
              <span className="text-[#063D24] font-black text-sm sm:text-base">
                {typeof product.price === 'number' && product.price > 0 ? (
                  <>AED {product.price.toFixed(2)}</>
                ) : (
                  'SPOT INQUIRY'
                )}
              </span>
            </div>
            <div>
              <span className="text-gray-500 block text-[10px] uppercase font-bold">UNIT SPEC</span>
              <span className="text-gray-900 font-bold text-xs sm:text-sm">{product.unit || 'CTN'}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-gray-500 block text-[10px] uppercase font-bold">ORIGIN</span>
              <span className="text-emerald-700 font-bold text-xs sm:text-sm truncate block">{product.origin || 'Imported'}</span>
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <p className="text-gray-700 text-sm leading-relaxed mb-5 font-light">
              {product.description}
            </p>
          )}

          {/* Wholesale Specs & Packaging */}
          <div className="space-y-2.5 mb-6 bg-[#F8FAF8] p-5 rounded-2xl border border-emerald-200 text-xs shadow-xs">
            <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-2">
              WHOLESALE SPECIFICATIONS &amp; PACKAGING
            </span>
            <div className="flex items-center gap-2.5 text-gray-700">
              <Package className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Packaging: <strong className="text-gray-900 font-semibold">{product.packaging || 'Standard Export Carton'}</strong></span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-700">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Min Order Quantity: <strong className="text-gray-900 font-semibold">{product.minOrderQuantity || '100 CTN / Pallet'}</strong></span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-700">
              <Globe className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Compliance: <strong className="text-gray-900 font-semibold">GSO &amp; Dubai Municipality Approved</strong></span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const name = product.name;
                onClose();
                onOpenQuoteModal(name);
              }}
              className="w-full py-4 rounded-xl bg-[#063D24] hover:bg-[#042A18] text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="text-amber-300">REQUEST WHOLESALE QUOTE FOR THIS PRODUCT</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};