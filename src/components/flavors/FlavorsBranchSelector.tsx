'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FLAVORS_BRANCHES, FlavorsBranch } from '@/data/flavorsData';

interface FlavorsBranchSelectorProps {
  onBranchSelect: (branch: FlavorsBranch) => void;
}

const AREAS = ['All Areas', 'Gulshan', 'Banani', 'Dhanmondi', 'Uttara', 'Mirpur', 'Mohammadpur', 'Bashundhara', 'Baridhara', 'Motijheel', 'Old Dhaka', 'Badda', 'Rampura', 'Narayanganj'];

export const FlavorsBranchSelector: React.FC<FlavorsBranchSelectorProps> = ({ onBranchSelect }) => {
  const [search, setSearch] = useState('');
  const [selectedArea, setSelectedArea] = useState('All Areas');
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return FLAVORS_BRANCHES.filter(b => {
      const matchArea = selectedArea === 'All Areas' || b.area === selectedArea;
      const matchSearch = b.name.toLowerCase().includes(search.toLowerCase()) || b.area.toLowerCase().includes(search.toLowerCase()) || b.address.toLowerCase().includes(search.toLowerCase());
      return matchArea && matchSearch;
    });
  }, [search, selectedArea]);

  return (
    <div style={{ position:'fixed', inset:0, zIndex:9999, background:'#0a1f12', overflowY:'auto', fontFamily:'Inter, system-ui, sans-serif' }}>
      {/* Animated background */}
      <div style={{ position:'fixed', inset:0, pointerEvents:'none', overflow:'hidden' }}>
        {[...Array(6)].map((_, i) => (
          <motion.div key={i} style={{ position:'absolute', borderRadius:'50%', background:`radial-gradient(circle, rgba(245,197,24,${0.03 + i*0.01}) 0%, transparent 70%)`, width: `${300 + i*150}px`, height:`${300 + i*150}px`, left:`${(i*17)%90}%`, top:`${(i*23)%80}%` }}
            animate={{ x:[0,30,-20,0], y:[0,-25,15,0], scale:[1,1.05,0.98,1] }}
            transition={{ duration: 8 + i*2, repeat:Infinity, ease:'easeInOut', delay:i*1.2 }}
          />
        ))}
      </div>

      <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'40px 24px 80px' }}>
        {/* Header */}
        <motion.div initial={{ opacity:0, y:-30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }} style={{ textAlign:'center', marginBottom:'48px' }}>
          {/* Logo */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'14px', marginBottom:'32px' }}>
            <div style={{ width:'52px', height:'52px', borderRadius:'12px', background:'linear-gradient(135deg, #f5c518 0%, #e6a800 100%)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 8px 32px rgba(245,197,24,0.4)' }}>
              <span style={{ fontSize:'22px' }}>✦</span>
            </div>
            <div>
              <div style={{ fontSize:'28px', fontWeight:900, color:'#ffffff', letterSpacing:'4px', lineHeight:1 }}>FLAVORS</div>
              <div style={{ fontSize:'11px', color:'#f5c518', letterSpacing:'3px', textTransform:'uppercase', fontWeight:500 }}>Premium Sweets & Bakers</div>
            </div>
          </div>

          <div style={{ width:'60px', height:'2px', background:'linear-gradient(90deg, transparent, #f5c518, transparent)', margin:'0 auto 24px' }} />

          <h1 style={{ fontSize:'clamp(26px, 4vw, 44px)', fontWeight:800, color:'#ffffff', letterSpacing:'-0.5px', margin:'0 0 16px', lineHeight:1.1 }}>
            SELECT YOUR FLAVORS BRANCH
          </h1>
          <p style={{ fontSize:'16px', color:'rgba(255,255,255,0.6)', maxWidth:'520px', margin:'0 auto', lineHeight:1.7 }}>
            Choose your nearest branch to explore available products, pricing, ordering and delivery options.
          </p>
        </motion.div>

        {/* Search + Filter */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3, duration:0.6 }} style={{ marginBottom:'32px' }}>
          {/* Search */}
          <div style={{ position:'relative', maxWidth:'480px', margin:'0 auto 20px' }}>
            <span style={{ position:'absolute', left:'16px', top:'50%', transform:'translateY(-50%)', fontSize:'18px', color:'rgba(255,255,255,0.4)' }}>🔍</span>
            <input
              type="text"
              placeholder="Search branches, areas or addresses..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width:'100%', padding:'14px 16px 14px 48px', background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:'12px', color:'#ffffff', fontSize:'15px', outline:'none', boxSizing:'border-box', transition:'border-color 0.2s' }}
              onFocus={e => e.target.style.borderColor = 'rgba(245,197,24,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
            />
          </div>

          {/* Area filter */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', justifyContent:'center' }}>
            {AREAS.map(area => (
              <button key={area} onClick={() => setSelectedArea(area)} style={{ padding:'7px 16px', borderRadius:'20px', border:'1px solid', borderColor: selectedArea === area ? '#f5c518' : 'rgba(255,255,255,0.12)', background: selectedArea === area ? 'rgba(245,197,24,0.15)' : 'transparent', color: selectedArea === area ? '#f5c518' : 'rgba(255,255,255,0.55)', fontSize:'13px', fontWeight: selectedArea === area ? 600 : 400, cursor:'pointer', transition:'all 0.2s', letterSpacing:'0.3px' }}>
                {area}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Branch count */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4 }} style={{ textAlign:'center', marginBottom:'24px' }}>
          <span style={{ fontSize:'13px', color:'rgba(255,255,255,0.4)', letterSpacing:'1px', textTransform:'uppercase' }}>
            {filtered.length} Branch{filtered.length !== 1 ? 'es' : ''} Available
          </span>
        </motion.div>

        {/* Branch Grid */}
        <motion.div layout style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(340px, 1fr))', gap:'16px' }}>
          <AnimatePresence>
            {filtered.map((branch, i) => (
              <motion.div
                key={branch.id}
                layout
                initial={{ opacity:0, y:20 }}
                animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, scale:0.95 }}
                transition={{ delay: i * 0.04, duration:0.4 }}
                onHoverStart={() => setHoveredBranch(branch.id)}
                onHoverEnd={() => setHoveredBranch(null)}
                style={{
                  background: hoveredBranch === branch.id ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)',
                  border: hoveredBranch === branch.id ? '1px solid rgba(245,197,24,0.4)' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius:'16px',
                  padding:'20px',
                  cursor:'pointer',
                  transition:'all 0.25s ease',
                  position:'relative',
                  overflow:'hidden',
                }}
                onClick={() => onBranchSelect(branch)}
              >
                {branch.isMainBranch && (
                  <div style={{ position:'absolute', top:'12px', right:'12px', background:'linear-gradient(135deg, #f5c518, #e6a800)', color:'#0a1f12', fontSize:'10px', fontWeight:700, padding:'3px 8px', borderRadius:'20px', letterSpacing:'0.5px', textTransform:'uppercase' }}>
                    Main Branch
                  </div>
                )}

                {/* Branch name & area */}
                <div style={{ marginBottom:'12px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'4px' }}>
                    <span style={{ fontSize:'16px' }}>📍</span>
                    <div style={{ fontSize:'16px', fontWeight:700, color:'#ffffff' }}>{branch.shortName}</div>
                  </div>
                  <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.4)', letterSpacing:'1px', textTransform:'uppercase', marginLeft:'24px' }}>{branch.area}</div>
                </div>

                {/* Address */}
                <div style={{ fontSize:'13px', color:'rgba(255,255,255,0.6)', marginBottom:'14px', lineHeight:1.5, paddingLeft:'24px' }}>
                  {branch.address}
                </div>

                {/* Info grid */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginBottom:'16px' }}>
                  <div style={{ background:'rgba(255,255,255,0.04)', borderRadius:'8px', padding:'8px 10px' }}>
                    <div style={{ fontSize:'10px', color:'rgba(255,255,255,0.35)', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:'3px' }}>Weekdays</div>
                    <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.75)', fontWeight:500 }}>{branch.hours.weekdays}</div>
                  </div>
                  <div style={{ background:'rgba(255,255,255,0.04)', borderRadius:'8px', padding:'8px 10px' }}>
                    <div style={{ fontSize:'10px', color:'rgba(255,255,255,0.35)', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:'3px' }}>Weekends</div>
                    <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.75)', fontWeight:500 }}>{branch.hours.weekends}</div>
                  </div>
                </div>

                {/* Tags row */}
                <div style={{ display:'flex', gap:'6px', flexWrap:'wrap', marginBottom:'16px' }}>
                  {branch.deliveryAvailable && (
                    <span style={{ fontSize:'11px', color:'#4caf7d', background:'rgba(76,175,125,0.12)', padding:'3px 8px', borderRadius:'20px', fontWeight:500 }}>🚚 Delivery</span>
                  )}
                  {branch.pickupAvailable && (
                    <span style={{ fontSize:'11px', color:'#f5c518', background:'rgba(245,197,24,0.12)', padding:'3px 8px', borderRadius:'20px', fontWeight:500 }}>🏪 Pickup</span>
                  )}
                  <span style={{ fontSize:'11px', color:'rgba(255,255,255,0.45)', background:'rgba(255,255,255,0.06)', padding:'3px 8px', borderRadius:'20px' }}>⏱ {branch.estimatedDelivery}</span>
                  <span style={{ fontSize:'11px', color:'rgba(255,255,255,0.45)', background:'rgba(255,255,255,0.06)', padding:'3px 8px', borderRadius:'20px' }}>৳{branch.deliveryFee} delivery</span>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale:1.02 }}
                  whileTap={{ scale:0.98 }}
                  style={{ width:'100%', padding:'11px', background: hoveredBranch === branch.id ? 'linear-gradient(135deg, #f5c518, #e6a800)' : 'rgba(245,197,24,0.1)', border:'1px solid', borderColor: hoveredBranch === branch.id ? 'transparent' : 'rgba(245,197,24,0.3)', borderRadius:'10px', color: hoveredBranch === branch.id ? '#0a1f12' : '#f5c518', fontSize:'13px', fontWeight:700, cursor:'pointer', letterSpacing:'1px', textTransform:'uppercase', transition:'all 0.25s' }}
                  onClick={() => onBranchSelect(branch)}
                >
                  SELECT THIS BRANCH
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} style={{ textAlign:'center', padding:'60px 20px' }}>
            <div style={{ fontSize:'48px', marginBottom:'16px' }}>🔍</div>
            <div style={{ fontSize:'18px', color:'rgba(255,255,255,0.5)' }}>No branches match your search</div>
            <button onClick={() => { setSearch(''); setSelectedArea('All Areas'); }} style={{ marginTop:'16px', padding:'10px 24px', background:'rgba(245,197,24,0.15)', border:'1px solid rgba(245,197,24,0.3)', borderRadius:'8px', color:'#f5c518', cursor:'pointer', fontSize:'14px' }}>Clear filters</button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
