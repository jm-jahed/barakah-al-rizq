'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlavorsProduct, formatBDT } from '@/data/flavorsCatalogData';
import { FlavorsBranch } from '@/data/flavorsData';
import { CartItem } from '@/app/projects/flavors/page';

interface FlavorsProductModalProps {
  product: FlavorsProduct | null;
  onClose: () => void;
  onAddToCart: (product: FlavorsProduct, qty: number, note: string) => void;
  selectedBranch: FlavorsBranch | null;
}

export const FlavorsProductModal: React.FC<FlavorsProductModalProps> = ({ product, onClose, onAddToCart, selectedBranch }) => {
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState('');
  const [imgIndex, setImgIndex] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const isAvailable = selectedBranch ? (product.availableBranches.includes('all') || product.availableBranches.includes(selectedBranch.id)) : true;
  const discount = product.previousPrice ? Math.round((1 - product.price / product.previousPrice) * 100) : 0;

  const handleAdd = () => {
    onAddToCart(product, qty, note);
    setAdded(true);
    setTimeout(() => { setAdded(false); onClose(); }, 1200);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', fontFamily: 'Inter, system-ui, sans-serif', padding: '0' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          onClick={e => e.stopPropagation()}
          style={{ width: '100%', maxWidth: '680px', maxHeight: '92vh', overflowY: 'auto', background: '#0f1f14', borderRadius: '24px 24px 0 0', border: '1px solid rgba(245,197,24,0.15)', borderBottom: 'none' }}
        >
          {/* Drag handle */}
          <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 0' }}>
            <div style={{ width: '40px', height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.15)' }} />
          </div>

          {/* Image */}
          <div style={{ position: 'relative', height: '260px', margin: '12px 16px 0', borderRadius: '16px', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.img key={imgIndex} src={product.images[imgIndex] || product.images[0]} alt={product.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </AnimatePresence>
            {/* Close */}
            <button onClick={onClose} style={{ position: 'absolute', top: '12px', right: '12px', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(0,0,0,0.6)', border: 'none', color: '#ffffff', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            {/* Badges */}
            <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px' }}>
              {product.isBestseller && <span style={{ background: '#f5c518', color: '#0a1f12', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '20px' }}>⭐ BESTSELLER</span>}
              {discount > 0 && <span style={{ background: '#e05a7c', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '20px' }}>-{discount}% OFF</span>}
            </div>
            {/* Image dots */}
            {product.images.length > 1 && (
              <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px' }}>
                {product.images.map((_, i) => (
                  <button key={i} onClick={() => setImgIndex(i)} style={{ width: i === imgIndex ? '20px' : '8px', height: '8px', borderRadius: '4px', background: i === imgIndex ? '#f5c518' : 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.2s' }} />
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div style={{ padding: '20px 20px 32px' }}>
            {/* Category */}
            <div style={{ fontSize: '11px', color: '#f5c518', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>{product.subcategory}</div>

            {/* Name */}
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', margin: '0 0 10px', lineHeight: 1.2 }}>{product.name}</h2>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1,2,3,4,5].map(s => <span key={s} style={{ color: s <= Math.round(product.rating) ? '#f5c518' : 'rgba(255,255,255,0.15)' }}>★</span>)}
              </div>
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{product.rating} · {product.reviewCount} reviews</span>
            </div>

            {/* Description */}
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '16px' }}>{product.description}</p>

            {/* Info chips */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <span style={{ padding: '5px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>📦 {product.weight}</span>
              <span style={{ padding: '5px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>👥 {product.serving}</span>
              <span style={{ padding: '5px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>⏱ {product.estimatedPrepTime}</span>
              {product.deliveryAvailable ? <span style={{ padding: '5px 10px', background: 'rgba(76,175,125,0.1)', border: '1px solid rgba(76,175,125,0.2)', borderRadius: '8px', fontSize: '12px', color: '#4caf7d' }}>🚚 Delivery available</span>
                : <span style={{ padding: '5px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>🏪 In-store only</span>}
            </div>

            {/* Prep info */}
            <div style={{ background: 'rgba(245,197,24,0.06)', border: '1px solid rgba(245,197,24,0.12)', borderRadius: '10px', padding: '10px 14px', marginBottom: '16px', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
              ⚡ <strong style={{ color: '#f5c518' }}>Preparation:</strong> {product.preparationInfo}
            </div>

            {/* Allergens */}
            {product.allergens.length > 0 && (
              <div style={{ marginBottom: '16px', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                ⚠️ Contains: {product.allergens.join(', ')}
              </div>
            )}

            {/* Branch availability */}
            {selectedBranch && !isAvailable && (
              <div style={{ background: 'rgba(224,90,124,0.08)', border: '1px solid rgba(224,90,124,0.2)', borderRadius: '10px', padding: '12px 14px', marginBottom: '16px', fontSize: '13px', color: '#e05a7c' }}>
                ⚠️ This product is not available at <strong>{selectedBranch.shortName}</strong>. Please check another branch.
              </div>
            )}

            {/* Special note */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: '8px', fontWeight: 500 }}>Special Instructions (optional)</label>
              <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="e.g. No nuts, extra cream, write 'Happy Birthday Rina'" rows={2} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '10px 12px', color: '#ffffff', fontSize: '13px', outline: 'none', resize: 'vertical', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }} />
            </div>

            {/* Qty + Add */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Quantity */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: '40px', height: '44px', background: 'none', border: 'none', color: '#ffffff', fontSize: '18px', cursor: 'pointer' }}>−</button>
                <span style={{ width: '36px', textAlign: 'center', color: '#ffffff', fontSize: '16px', fontWeight: 600 }}>{qty}</span>
                <button onClick={() => setQty(qty + 1)} style={{ width: '40px', height: '44px', background: 'none', border: 'none', color: '#ffffff', fontSize: '18px', cursor: 'pointer' }}>+</button>
              </div>

              {/* Add button */}
              <motion.button
                whileHover={{ scale: isAvailable ? 1.02 : 1 }}
                whileTap={{ scale: isAvailable ? 0.98 : 1 }}
                onClick={handleAdd}
                disabled={!isAvailable || added}
                style={{ flex: 1, height: '44px', background: added ? 'linear-gradient(135deg, #4caf7d, #27ae60)' : (isAvailable ? 'linear-gradient(135deg, #f5c518, #e6a800)' : 'rgba(255,255,255,0.06)'), border: 'none', borderRadius: '10px', color: added ? '#ffffff' : (isAvailable ? '#0a1f12' : 'rgba(255,255,255,0.3)'), fontSize: '15px', fontWeight: 700, cursor: isAvailable ? 'pointer' : 'not-allowed', letterSpacing: '0.3px' }}
              >
                {added ? '✓ Added to Cart!' : `ADD TO CART · ${formatBDT(product.price * qty)}`}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
