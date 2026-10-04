'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FLAVORS_COLLECTIONS } from '@/data/flavorsData';
import { FLAVORS_CATALOG, FlavorsProduct, getProductsByCategory, formatBDT } from '@/data/flavorsCatalogData';

interface FlavorsCollectionsProps {
  onAddToCart: (product: FlavorsProduct) => void;
  branchId: string;
}

export const FlavorsCollections: React.FC<FlavorsCollectionsProps> = ({ onAddToCart, branchId }) => {
  const getPreviewProducts = (categoryIds: string[]) => {
    const all = categoryIds.flatMap(id => getProductsByCategory(id)).filter(p => p.isBestseller || p.isFeatured);
    const unique = Array.from(new Map(all.map(p => [p.id, p])).values());
    return unique.slice(0, 3);
  };

  return (
    <section style={{ background: '#091a10', padding: '80px 0', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ textAlign:'center', marginBottom:'56px' }}>
          <div style={{ fontSize:'12px', color:'#f5c518', letterSpacing:'3px', textTransform:'uppercase', fontWeight:600, marginBottom:'12px' }}>Curated Selections</div>
          <h2 style={{ fontSize:'clamp(28px, 4vw, 48px)', fontWeight:900, color:'#ffffff', margin:'0 0 14px', letterSpacing:'-0.5px' }}>Signature Collections</h2>
          <p style={{ fontSize:'16px', color:'rgba(255,255,255,0.5)', maxWidth:'500px', margin:'0 auto' }}>Expertly curated selections from the FLAVORS kitchen for every need</p>
        </motion.div>

        {/* Collections grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(420px, 1fr))', gap:'24px' }}>
          {FLAVORS_COLLECTIONS.map((col, i) => {
            const previews = getPreviewProducts(col.categoryIds);
            return (
              <motion.div
                key={col.id}
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay: i * 0.1 }}
                style={{ borderRadius:'20px', overflow:'hidden', border:'1px solid rgba(255,255,255,0.08)', position:'relative' }}
              >
                {/* Hero image */}
                <div style={{ position:'relative', height:'220px', overflow:'hidden' }}>
                  <img src={col.image} alt={col.name} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s ease' }}
                    onMouseEnter={e => (e.target as HTMLImageElement).style.transform = 'scale(1.05)'}
                    onMouseLeave={e => (e.target as HTMLImageElement).style.transform = 'scale(1)'}
                  />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(9,26,16,0.95) 0%, rgba(9,26,16,0.2) 60%)' }} />
                  
                  {/* Badge */}
                  {col.badge && (
                    <div style={{ position:'absolute', top:'14px', left:'14px', background:col.accentColor, color:'#0a1f12', fontSize:'11px', fontWeight:700, padding:'4px 10px', borderRadius:'20px', letterSpacing:'0.5px' }}>
                      {col.badge}
                    </div>
                  )}

                  {/* Text on image */}
                  <div style={{ position:'absolute', bottom:'16px', left:'18px', right:'18px' }}>
                    <div style={{ fontSize:'11px', color:col.accentColor, letterSpacing:'2px', textTransform:'uppercase', fontWeight:600, marginBottom:'4px' }}>{col.tagline}</div>
                    <h3 style={{ fontSize:'22px', fontWeight:800, color:'#ffffff', margin:0, lineHeight:1.2 }}>{col.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div style={{ background:'rgba(255,255,255,0.03)', padding:'16px 18px' }}>
                  <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.55)', lineHeight:1.6, marginBottom:'14px' }}>{col.description}</p>

                  {/* Preview products */}
                  <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
                    {previews.map(p => (
                      <div key={p.id} style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'8px', padding:'6px 10px' }}>
                        <img src={p.images[0]} alt={p.name} style={{ width:'28px', height:'28px', borderRadius:'6px', objectFit:'cover' }} />
                        <div>
                          <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.7)', fontWeight:500, maxWidth:'120px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{p.name}</div>
                          <div style={{ fontSize:'11px', color:'#f5c518', fontWeight:600 }}>{formatBDT(p.price)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
