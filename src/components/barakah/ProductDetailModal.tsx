'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, ShieldCheck, Globe, Package } from 'lucide-react';
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
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="max-w-xl w-full rounded-3xl bg-white p-6 sm:p-8 text-[#111827] shadow-2xl relative border border-emerald-200 font-sans max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-black border border-gray-200 shadow-inner">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-amber-300 font-mono text-xs font-bold">
            {product.category}
          </div>
        </div>

        <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-1">
          {product.arabicName}
        </span>
        <h3 className="text-2xl font-bold mb-4 font-sans text-[#063D24]">{product.name}</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F8FAF8] border border-emerald-200 mb-6 font-mono text-center text-xs shadow-sm">
          <div>
            <span className="text-gray-500 block text-[10px]">CURRENT PRICE</span>
            <span className="text-[#063D24] font-black text-sm">
              {product.unit.includes('Bag') || product.unit.includes('Box') ? '' : 'AED '}{product.price.toFixed(2)}
            </span>
          </div>
          <div>
            <span className="text-gray-500 block text-[10px]">UNIT SPEC</span>
            <span className="text-gray-900 font-bold text-xs">{product.unit}</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="text-gray-500 block text-[10px]">COUNTRY OF ORIGIN</span>
            <span className="text-emerald-700 font-bold text-xs">{product.origin}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
          {product.description}
        </p>

        <div className="space-y-2 mb-8 bg-[#F8FAF8] p-5 rounded-2xl border border-emerald-200 text-xs shadow-sm">
          <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-3">
            WHOLESALE SPECIFICATIONS &amp; PACKAGING
          </span>
          <div className="flex items-center gap-2.5 text-gray-700">
            <Package className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Packaging: <strong className="text-gray-900">{product.packaging}</strong></span>
          </div>
          <div className="flex items-center gap-2.5 text-gray-700">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Min Order Quantity: <strong className="text-gray-900">{product.minOrderQuantity}</strong></span>
          </div>
          <div className="flex items-center gap-2.5 text-gray-700">
            <Globe className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Compliance: <strong className="text-gray-900">GSO &amp; Dubai Municipality Approved</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              const name = product.name;
              onClose();
              onOpenQuoteModal(name);
            }}
            className="w-full py-4 rounded-xl bg-[#063D24] hover:bg-[#042A18] text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-md hover:scale-[1.01] transition-transform"
          >
            <span className="text-amber-300">REQUEST WHOLESALE QUOTE FOR THIS PRODUCT</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};