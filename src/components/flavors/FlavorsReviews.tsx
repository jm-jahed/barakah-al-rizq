'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FLAVORS_REVIEWS } from '@/data/flavorsData';

export const FlavorsReviews: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Cakes', 'Sweets', 'Bakery', 'Corporate', 'Frozen'];

  const filtered = activeFilter === 'All' ? FLAVORS_REVIEWS : FLAVORS_REVIEWS.filter(r => r.category === activeFilter);

  const avgRating = (FLAVORS_REVIEWS.reduce((s, r) => s + r.rating, 0) / FLAVORS_REVIEWS.length).toFixed(1);

  return (
    <section style={{ background:'#091a10', padding:'80px 0', fontFamily:'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth:'1400px', margin:'0 auto', padding:'0 24px' }}>
        {/* Header */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:'48px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px' }}>
            <div style={{ width:'40px', height:'2px', background:'#f5c518' }} />
            <span style={{ fontSize:'12px', color:'#f5c518', letterSpacing:'3px', textTransform:'uppercase', fontWeight:600 }}>Customer Stories</span>
          </div>
          <div style={{ display:'flex', gap:'32px', alignItems:'flex-end', flexWrap:'wrap' }}>
            <div>
              <h2 style={{ fontSize:'clamp(28px, 4vw, 48px)', fontWeight:900, color:'#ffffff', margin:'0 0 10px', letterSpacing:'-0.5px' }}>What Our Customers Say</h2>
              <p style={{ fontSize:'16px', color:'rgba(255,255,255,0.5)', margin:0 }}>Real reviews from real FLAVORS customers across all 15 branches</p>
            </div>
            <div style={{ background:'rgba(245,197,24,0.08)', border:'1px solid rgba(245,197,24,0.15)', borderRadius:'16px', padding:'16px 24px', textAlign:'center', flexShrink:0 }}>
              <div style={{ fontSize:'40px', fontWeight:900, color:'#f5c518', lineHeight:1 }}>{avgRating}</div>
              <div style={{ display:'flex', justifyContent:'center', gap:'3px', margin:'6px 0' }}>
                {[1,2,3,4,5].map(s => <span key={s} style={{ fontSize:'16px', color:'#f5c518' }}>★</span>)}
              </div>
              <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.4)' }}>{FLAVORS_REVIEWS.length} verified reviews</div>
            </div>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <div style={{ display:'flex', gap:'8px', marginBottom:'32px', flexWrap:'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveFilter(cat)} style={{ padding:'8px 18px', borderRadius:'20px', border:'1px solid', borderColor: activeFilter === cat ? '#f5c518' : 'rgba(255,255,255,0.1)', background: activeFilter === cat ? 'rgba(245,197,24,0.1)' : 'transparent', color: activeFilter === cat ? '#f5c518' : 'rgba(255,255,255,0.55)', fontSize:'13px', fontWeight: activeFilter === cat ? 600 : 400, cursor:'pointer', transition:'all 0.2s' }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews grid */}
        <motion.div layout style={{ columns:'1 350px', gap:'16px' }}>
          <AnimatePresence>
            {filtered.map((review, i) => (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity:0, y:20 }}
                animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, scale:0.95 }}
                transition={{ delay: i * 0.05 }}
                style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'16px', padding:'20px', marginBottom:'16px', breakInside:'avoid' }}
              >
                {/* Stars */}
                <div style={{ display:'flex', gap:'2px', marginBottom:'12px' }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ fontSize:'14px', color: s <= review.rating ? '#f5c518' : 'rgba(255,255,255,0.15)' }}>★</span>)}
                </div>
                {/* Review text */}
                <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.75)', lineHeight:1.7, margin:'0 0 16px', fontStyle:'italic' }}>"{review.reviewText}"</p>
                {/* Product */}
                <div style={{ fontSize:'11px', color:'rgba(245,197,24,0.65)', marginBottom:'10px', fontWeight:500 }}>📦 {review.productPurchased}</div>
                {/* Footer */}
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', borderTop:'1px solid rgba(255,255,255,0.05)', paddingTop:'12px' }}>
                  <div>
                    <div style={{ fontSize:'13px', fontWeight:700, color:'#ffffff' }}>{review.customerName}</div>
                    <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.35)', marginTop:'2px' }}>📍 {review.branch} · {review.date}</div>
                  </div>
                  {review.verified && <span style={{ fontSize:'10px', color:'#4caf7d', background:'rgba(76,175,125,0.1)', border:'1px solid rgba(76,175,125,0.2)', padding:'3px 8px', borderRadius:'20px' }}>✓ Verified</span>}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
