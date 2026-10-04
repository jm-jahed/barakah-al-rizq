'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Layers,
  ShieldCheck,
  Plus
} from 'lucide-react';
import { FrozenProduct } from '@/data/frozenSupplyData';
import { useFrozenSupplyTheme } from '@/context/FrozenSupplyThemeContext';
import { useFrozenSupplyLanguage } from '@/context/FrozenSupplyLanguageContext';

interface FrozenSupplyCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  comparedProducts: FrozenProduct[];
  onRemoveFromCompare: (productId: string) => void;
  onClearCompare: () => void;
  onAddToCart: (product: FrozenProduct, quantity: number) => void;
  onQuickView: (product: FrozenProduct) => void;
}

export const FrozenSupplyCompareModal: React.FC<FrozenSupplyCompareModalProps> = ({
  isOpen,
  onClose,
  comparedProducts,
  onRemoveFromCompare,
  onClearCompare,
  onAddToCart,
}) => {
  const { isDark } = useFrozenSupplyTheme();
  const { isRtl, t } = useFrozenSupplyLanguage();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`relative w-full max-w-6xl border rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col font-sans ${
            isDark 
              ? 'bg-[#0A1120] border-cyan-900/50 text-white' 
              : 'bg-white border-slate-200 text-slate-900 shadow-slate-400/40'
          }`}
        >
          {/* Header */}
          <div className={`flex items-center justify-between px-6 py-4 border-b ${
            isDark ? 'bg-[#050B14] border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
                isDark ? 'bg-cyan-950 border-cyan-500/40 text-cyan-400' : 'bg-cyan-100 border-cyan-300 text-cyan-700'
              }`}>
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className={`text-base font-bold font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {isRtl ? 'مصفوفة مقارنة المواصفات' : 'Product Comparison Matrix'}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {isRtl ? `مقارنة ${comparedProducts.length} من أصل 4 منتجات كحد أقصى` : `Comparing ${comparedProducts.length} of 4 Max Commercial Items`}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {comparedProducts.length > 0 && (
                <button
                  onClick={onClearCompare}
                  className="text-xs font-mono text-rose-500 hover:text-rose-600 underline"
                >
                  {isRtl ? 'مسح الكل' : 'Clear All'}
                </button>
              )}
              <button
                onClick={onClose}
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isDark ? 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Comparison Table / Grid */}
          <div className="p-6 overflow-y-auto overflow-x-auto flex-1">
            {comparedProducts.length === 0 ? (
              <div className="py-20 text-center space-y-4 font-mono">
                <Layers className="w-12 h-12 text-slate-400 mx-auto" />
                <p className={`font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {isRtl ? 'لم يتم تحديد أي منتجات للمقارنة' : 'No Products Selected for Comparison'}
                </p>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  {isRtl 
                    ? 'انقر على أيقونة المقارنة على بطاقة أي منتج لمقارنة المواصفات والأسعار جنباً إلى جنب.' 
                    : 'Click the comparison icon on any product card or quick view modal to evaluate specifications side by side.'}
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-sans font-bold"
                >
                  {t('heroExploreCatalog')}
                </button>
              </div>
            ) : (
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                    <th className={`p-3 w-48 uppercase font-semibold ${
                      isDark ? 'text-slate-400 bg-slate-900/40' : 'text-slate-600 bg-slate-100'
                    }`}>
                      {t('productSpecs')}
                    </th>
                    {comparedProducts.map((p) => (
                      <th key={p.id} className={`p-3 min-w-[220px] max-w-[260px] align-top ${
                        isDark ? 'bg-slate-900/60' : 'bg-slate-50'
                      }`}>
                        <div className="relative space-y-2">
                          <button
                            onClick={() => onRemoveFromCompare(p.id)}
                            className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-slate-800 hover:bg-rose-900 text-slate-400 hover:text-rose-300 flex items-center justify-center"
                            title="Remove item"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                          <div className="h-32 rounded-xl overflow-hidden bg-slate-950">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold block">{p.sku}</span>
                          <h4 className={`text-xs font-bold font-sans line-clamp-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {isRtl && p.nameAr ? p.nameAr : p.name}
                          </h4>
                          <span className="text-sm font-black text-cyan-600 dark:text-cyan-300 block">AED {p.priceAED}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className={`divide-y ${isDark ? 'divide-slate-800/60' : 'divide-slate-200'}`}>
                  <tr>
                    <td className={`p-3 font-semibold ${isDark ? 'text-slate-400 bg-slate-900/40' : 'text-slate-600 bg-slate-100'}`}>
                      {t('categoriesTitle')}
                    </td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className={`p-3 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{p.category}</td>
                    ))}
                  </tr>

                  <tr>
                    <td className={`p-3 font-semibold ${isDark ? 'text-slate-400 bg-slate-900/40' : 'text-slate-600 bg-slate-100'}`}>
                      {isRtl ? 'القسم الفرعي' : 'Subcategory'}
                    </td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className="p-3 text-cyan-600 dark:text-cyan-400 font-bold">{p.subcategory}</td>
                    ))}
                  </tr>

                  <tr>
                    <td className={`p-3 font-semibold ${isDark ? 'text-slate-400 bg-slate-900/40' : 'text-slate-600 bg-slate-100'}`}>
                      {t('filterOrigin')}
                    </td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className={`p-3 flex items-center gap-1.5 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{p.origin}</span>
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className={`p-3 font-semibold ${isDark ? 'text-slate-400 bg-slate-900/40' : 'text-slate-600 bg-slate-100'}`}>
                      {t('coldChainSpecs')}
                    </td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className="p-3 text-cyan-600 dark:text-cyan-300 font-bold">{p.storageTemp}</td>
                    ))}
                  </tr>

                  <tr>
                    <td className={`p-3 font-semibold ${isDark ? 'text-slate-400 bg-slate-900/40' : 'text-slate-600 bg-slate-100'}`}>
                      {t('pricePerKg')}
                    </td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className={`p-3 font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>~AED {p.pricePerKgAED}/kg</td>
                    ))}
                  </tr>

                  <tr>
                    <td className={`p-3 font-semibold ${isDark ? 'text-slate-400 bg-slate-900/40' : 'text-slate-600 bg-slate-100'}`}>
                      {isRtl ? 'تعبئة الكرتون' : 'Pack Format'}
                    </td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className={`p-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{p.packSize}</td>
                    ))}
                  </tr>

                  <tr>
                    <td className={`p-3 font-semibold ${isDark ? 'text-slate-400 bg-slate-900/40' : 'text-slate-600 bg-slate-100'}`}>
                      {t('moqBadge')}
                    </td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className="p-3 text-amber-600 dark:text-amber-400 font-bold">{p.moq} {p.unit}s</td>
                    ))}
                  </tr>

                  <tr>
                    <td className={`p-3 font-semibold ${isDark ? 'text-slate-400 bg-slate-900/40' : 'text-slate-600 bg-slate-100'}`}>
                      Action
                    </td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className="p-3">
                        <button
                          onClick={() => {
                            onAddToCart(p, p.moq);
                          }}
                          className="w-full py-2 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>{isRtl ? `إضافة ${p.moq} كرتون` : `Add ${p.moq} Cartons`}</span>
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
