'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FlavorsProduct, formatBDT } from '@/data/flavorsCatalogData';

interface FlavorsProductCardProps {
  product: FlavorsProduct;
  onAddToCart: (product: FlavorsProduct) => void;
  onViewProduct: (product: FlavorsProduct) => void;
  branchId: string;
  index?: number;
}

export const FlavorsProductCard: React.FC<FlavorsProductCardProps> = ({ product, onAddToCart, onViewProduct, branchId, index = 0 }) => {
  const isAvailableAtBranch = product.availableBranches.includes('all') || product.availableBranches.includes(branchId);
  const discount = product.previousPrice ? Math.round((1 - product.price / product.previousPrice) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 8) * 0.06, duration: 0.5 }}
      whileHover={{ y: -4 }}
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', transition: 'border-color 0.2s', fontFamily: 'Inter, system-ui, sans-serif', position: 'relative' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,197,24,0.3)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }} onClick={() => onViewProduct(product)}>
        <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          onMouseEnter={e => (e.target as HTMLImageElement).style.transform = 'scale(1.05)'}
          onMouseLeave={e => (e.target as HTMLImageElement).style.transform = 'scale(1)'}
        />
        {/* Badges */}
        <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {product.isBestseller && <span style={{ background: '#f5c518', color: '#0a1f12', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '20px', letterSpacing: '0.3px' }}>⭐ BESTSELLER</span>}
          {product.isNew && <span style={{ background: '#4caf7d', color: '#ffffff', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '20px' }}>NEW</span>}
          {discount > 0 && <span style={{ background: '#e05a7c', color: '#ffffff', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '20px' }}>-{discount}%</span>}
        </div>
        {/* Availability */}
        {!isAvailableAtBranch && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', color: '#ffffff', fontSize: '12px', padding: '8px 14px', borderRadius: '8px', textAlign: 'center' }}>Not available<br/>at this branch</span>
          </div>
        )}
        {!product.deliveryAvailable && (
          <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.7)', color: 'rgba(255,255,255,0.7)', fontSize: '10px', padding: '3px 7px', borderRadius: '6px' }}>In-store only</div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '14px' }}>
        {/* Category tag */}
        <div style={{ fontSize: '10px', color: 'rgba(245,197,24,0.7)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, marginBottom: '6px' }}>
          {product.subcategory}
        </div>

        {/* Name */}
        <h3
          onClick={() => onViewProduct(product)}
          style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', marginBottom: '6px', lineHeight: 1.4, cursor: 'pointer' }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '10px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {product.description}
        </p>

        {/* Meta */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>📦 {product.weight}</span>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>👥 {product.serving}</span>
        </div>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', gap: '2px' }}>
            {[1,2,3,4,5].map(s => (
              <span key={s} style={{ fontSize: '11px', color: s <= Math.round(product.rating) ? '#f5c518' : 'rgba(255,255,255,0.15)' }}>★</span>
            ))}
          </div>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>{product.rating} ({product.reviewCount})</span>
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: '#f5c518', lineHeight: 1 }}>{formatBDT(product.price)}</div>
            {product.previousPrice && (
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textDecoration: 'line-through', marginTop: '2px' }}>{formatBDT(product.previousPrice)}</div>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => isAvailableAtBranch && onAddToCart(product)}
            disabled={!isAvailableAtBranch}
            style={{ padding: '9px 16px', background: isAvailableAtBranch ? 'linear-gradient(135deg, #f5c518, #e6a800)' : 'rgba(255,255,255,0.06)', border: 'none', borderRadius: '8px', color: isAvailableAtBranch ? '#0a1f12' : 'rgba(255,255,255,0.3)', fontSize: '12px', fontWeight: 700, cursor: isAvailableAtBranch ? 'pointer' : 'not-allowed', letterSpacing: '0.3px' }}
          >
            {isAvailableAtBranch ? 'ADD' : 'N/A'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
