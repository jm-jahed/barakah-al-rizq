'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FLAVORS_CATALOG, FlavorsProduct, getProductsByCategory, getProductsByBranch, formatBDT } from '@/data/flavorsCatalogData';
import { FLAVORS_CATEGORIES } from '@/data/flavorsData';
import { FlavorsProductCard } from './FlavorsProductCard';

interface FlavorsProductExplorerProps {
  branchId: string;
  onAddToCart: (product: FlavorsProduct) => void;
  onViewProduct: (product: FlavorsProduct) => void;
}

const SORT_OPTIONS = [
  { value: 'default', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'new', label: 'New Arrivals' },
];

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'bestseller', label: '⭐ Bestsellers' },
  { key: 'new', label: '🆕 New' },
  { key: 'available', label: '✓ In Stock at Branch' },
  { key: 'delivery', label: '🚚 Delivery Available' },
];

export const FlavorsProductExplorer: React.FC<FlavorsProductExplorerProps> = ({ branchId, onAddToCart, onViewProduct }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const PER_PAGE = 16;

  const products = useMemo(() => {
    let p = getProductsByCategory(activeCategory);

    if (filter === 'bestseller') p = p.filter(x => x.isBestseller);
    else if (filter === 'new') p = p.filter(x => x.isNew);
    else if (filter === 'available') p = p.filter(x => x.availableBranches.includes('all') || x.availableBranches.includes(branchId));
    else if (filter === 'delivery') p = p.filter(x => x.deliveryAvailable);

    if (searchQuery.trim().length > 1) {
      const q = searchQuery.toLowerCase();
      p = p.filter(x => x.name.toLowerCase().includes(q) || x.description.toLowerCase().includes(q) || x.tags.some(t => t.includes(q)));
    }

    if (sortBy === 'price-asc') p = [...p].sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') p = [...p].sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') p = [...p].sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'popular') p = [...p].sort((a, b) => b.reviewCount - a.reviewCount);
    else if (sortBy === 'new') p = [...p].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

    return p;
  }, [activeCategory, sortBy, filter, searchQuery, branchId]);

  const paginated = products.slice(0, page * PER_PAGE);
  const hasMore = paginated.length < products.length;

  const resetFilters = () => { setActiveCategory('all'); setFilter('all'); setSortBy('default'); setSearchQuery(''); setPage(1); };

  return (
    <section id="cakes" style={{ background: '#0a1f12', padding: '80px 0', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:'40px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'12px' }}>
            <div style={{ width:'40px', height:'2px', background:'#f5c518' }} />
            <span style={{ fontSize:'12px', color:'#f5c518', letterSpacing:'3px', textTransform:'uppercase', fontWeight:600 }}>Full Collection</span>
          </div>
          <h2 style={{ fontSize:'clamp(28px, 4vw, 48px)', fontWeight:900, color:'#ffffff', margin:'0 0 10px', letterSpacing:'-0.5px' }}>
            Explore 200+ FLAVORS Products
          </h2>
          <p style={{ fontSize:'16px', color:'rgba(255,255,255,0.5)', margin:0 }}>
            Cakes · Sweets · Bakery · Frozen · Gifts — everything in one place
          </p>
        </motion.div>

        {/* Controls row */}
        <div style={{ display:'flex', gap:'12px', flexWrap:'wrap', marginBottom:'24px', alignItems:'center' }}>
          {/* Search */}
          <div style={{ position:'relative', flex:'1', minWidth:'200px', maxWidth:'320px' }}>
            <span style={{ position:'absolute', left:'12px', top:'50%', transform:'translateY(-50%)', fontSize:'14px', color:'rgba(255,255,255,0.3)' }}>🔍</span>
            <input value={searchQuery} onChange={e => { setSearchQuery(e.target.value); setPage(1); }} placeholder="Search products..." style={{ width:'100%', padding:'10px 14px 10px 36px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'10px', color:'#ffffff', fontSize:'13px', outline:'none', boxSizing:'border-box' }} />
          </div>

          {/* Sort */}
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ padding:'10px 14px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'10px', color:'#ffffff', fontSize:'13px', outline:'none', cursor:'pointer' }}>
            {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>

          {/* Filters */}
          <div style={{ display:'flex', gap:'6px', flexWrap:'wrap' }}>
            {FILTERS.map(f => (
              <button key={f.key} onClick={() => { setFilter(f.key); setPage(1); }} style={{ padding:'9px 14px', borderRadius:'20px', border:'1px solid', borderColor: filter === f.key ? '#f5c518' : 'rgba(255,255,255,0.1)', background: filter === f.key ? 'rgba(245,197,24,0.12)' : 'transparent', color: filter === f.key ? '#f5c518' : 'rgba(255,255,255,0.55)', fontSize:'12px', fontWeight: filter === f.key ? 600 : 400, cursor:'pointer', transition:'all 0.2s' }}>
                {f.label}
              </button>
            ))}
          </div>

          {/* Result count */}
          <div style={{ marginLeft:'auto', fontSize:'13px', color:'rgba(255,255,255,0.35)' }}>
            {products.length} products
          </div>
        </div>

        {/* Category tabs */}
        <div style={{ display:'flex', gap:'6px', overflowX:'auto', marginBottom:'32px', paddingBottom:'8px' }}>
          {FLAVORS_CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => { setActiveCategory(cat.id); setPage(1); }} style={{ flexShrink:0, padding:'8px 16px', borderRadius:'20px', border:'1px solid', borderColor: activeCategory === cat.id ? '#f5c518' : 'rgba(255,255,255,0.1)', background: activeCategory === cat.id ? 'rgba(245,197,24,0.12)' : 'transparent', color: activeCategory === cat.id ? '#f5c518' : 'rgba(255,255,255,0.6)', fontSize:'13px', fontWeight: activeCategory === cat.id ? 700 : 400, cursor:'pointer', transition:'all 0.2s', whiteSpace:'nowrap' }}>
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        {products.length === 0 ? (
          <div style={{ textAlign:'center', padding:'60px 20px', color:'rgba(255,255,255,0.4)' }}>
            <div style={{ fontSize:'48px', marginBottom:'16px' }}>🔍</div>
            <div style={{ fontSize:'18px', marginBottom:'12px' }}>No products found</div>
            <button onClick={resetFilters} style={{ padding:'10px 24px', background:'rgba(245,197,24,0.1)', border:'1px solid rgba(245,197,24,0.3)', borderRadius:'10px', color:'#f5c518', cursor:'pointer', fontSize:'14px' }}>Clear filters</button>
          </div>
        ) : (
          <>
            <motion.div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:'16px' }}>
              <AnimatePresence>
                {paginated.map((product, i) => (
                  <FlavorsProductCard key={product.id} product={product} onAddToCart={onAddToCart} onViewProduct={onViewProduct} branchId={branchId} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>

            {hasMore && (
              <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} style={{ textAlign:'center', marginTop:'40px' }}>
                <motion.button whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }} onClick={() => setPage(p => p+1)} style={{ padding:'14px 40px', background:'rgba(245,197,24,0.1)', border:'1px solid rgba(245,197,24,0.3)', borderRadius:'12px', color:'#f5c518', fontSize:'14px', fontWeight:600, cursor:'pointer', letterSpacing:'0.5px' }}>
                  LOAD MORE ({products.length - paginated.length} remaining)
                </motion.button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
