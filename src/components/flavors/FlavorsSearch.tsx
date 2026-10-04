'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FLAVORS_CATALOG, FlavorsProduct, formatBDT } from '@/data/flavorsCatalogData';

interface FlavorsSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: FlavorsProduct) => void;
  onViewProduct: (product: FlavorsProduct) => void;
  branchId: string;
}

export const FlavorsSearch: React.FC<FlavorsSearchProps> = ({ isOpen, onClose, onAddToCart, onViewProduct, branchId }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const results = query.length >= 2 ? FLAVORS_CATALOG.filter(p => {
    const q = query.toLowerCase();
    return p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)) || p.categoryId.includes(q) || p.subcategory.toLowerCase().includes(q);
  }).slice(0, 12) : [];

  const popular = FLAVORS_CATALOG.filter(p => p.isBestseller).slice(0, 6);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', fontFamily: 'Inter, system-ui, sans-serif' }} onClick={onClose}>
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '720px', margin: '80px auto 0', background: '#0f1f14', borderRadius: '20px', border: '1px solid rgba(245,197,24,0.2)', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}
          >
            {/* Search Input */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', gap: '14px' }}>
              <span style={{ fontSize: '20px', color: 'rgba(255,255,255,0.4)' }}>🔍</span>
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search cakes, sweets, brownies, breads..."
                style={{ flex: 1, background: 'none', border: 'none', outline: 'none', fontSize: '17px', color: '#ffffff', fontFamily: 'Inter, sans-serif' }}
              />
              {query && <button onClick={() => setQuery('')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', fontSize: '18px' }}>✕</button>}
              <kbd style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '4px 8px', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>ESC</kbd>
            </div>

            {/* Results */}
            <div style={{ maxHeight: '520px', overflowY: 'auto', padding: '16px 24px 24px' }}>
              {query.length < 2 && (
                <>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>Popular Items</div>
                  <div style={{ display: 'grid', gap: '6px' }}>
                    {popular.map(p => (
                      <SearchResultRow key={p.id} product={p} onAdd={() => { onAddToCart(p); onClose(); }} onView={() => { onViewProduct(p); onClose(); }} branchId={branchId} />
                    ))}
                  </div>
                </>
              )}

              {query.length >= 2 && results.length > 0 && (
                <>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>{results.length} Results for "{query}"</div>
                  <div style={{ display: 'grid', gap: '6px' }}>
                    {results.map(p => (
                      <SearchResultRow key={p.id} product={p} onAdd={() => { onAddToCart(p); onClose(); }} onView={() => { onViewProduct(p); onClose(); }} branchId={branchId} />
                    ))}
                  </div>
                </>
              )}

              {query.length >= 2 && results.length === 0 && (
                <div style={{ textAlign: 'center', padding: '40px', color: 'rgba(255,255,255,0.4)' }}>
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>🔍</div>
                  <div style={{ fontSize: '16px', marginBottom: '8px' }}>No results found</div>
                  <div style={{ fontSize: '13px' }}>Try "cake", "rasgulla", "croissant", or "spring roll"</div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SearchResultRow: React.FC<{ product: FlavorsProduct; onAdd: () => void; onView: () => void; branchId: string }> = ({ product, onAdd, onView, branchId }) => {
  const available = product.availableBranches.includes('all') || product.availableBranches.includes(branchId);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer', transition: 'background 0.15s' }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'}
    >
      <img src={product.images[0]} alt={product.name} style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }} onClick={onView}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.name}</div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>{product.subcategory} · {product.weight}</div>
      </div>
      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        <div style={{ fontSize: '15px', fontWeight: 700, color: '#f5c518' }}>{formatBDT(product.price)}</div>
        <button onClick={onAdd} disabled={!available} style={{ marginTop: '4px', padding: '4px 10px', background: available ? 'rgba(245,197,24,0.15)' : 'rgba(255,255,255,0.04)', border: `1px solid ${available ? 'rgba(245,197,24,0.3)' : 'rgba(255,255,255,0.05)'}`, borderRadius: '6px', color: available ? '#f5c518' : 'rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: 600, cursor: available ? 'pointer' : 'not-allowed' }}>
          {available ? '+ Add' : 'N/A'}
        </button>
      </div>
    </div>
  );
};
