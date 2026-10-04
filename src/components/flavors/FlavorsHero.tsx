'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlavorsBranch } from '@/data/flavorsData';

interface FlavorsHeroProps {
  selectedBranch: FlavorsBranch | null;
  onOrderNow: () => void;
  onCakeBuilder: () => void;
}

const SLIDES = [
  { id: 1, headline: 'Every Celebration Begins with FLAVORS', sub: 'Premium celebration cakes, Bengali sweets, bakery products and savouries — crafted for extraordinary moments.', bg: 'linear-gradient(135deg, #0a1f12 0%, #0f2a1a 50%, #1a3c2a 100%)', accent: '#f5c518', image: 'https://loremflickr.com/1200/800/cake?lock=100', badge: '✦ Bangladesh\'s Premium Sweets Brand' },
  { id: 2, headline: 'Authentic Bengali Sweets, Elevated', sub: 'From classic rasgulla and payesh to premium sandesh and kaju barfi — the finest mishti from our heritage kitchen.', bg: 'linear-gradient(135deg, #1a0f08 0%, #2d1a0d 50%, #3d2415 100%)', accent: '#c9963b', image: 'https://loremflickr.com/1200/800/sweets,indian?lock=101', badge: '🌸 Traditional · Premium · Authentic' },
  { id: 3, headline: 'Custom Cakes, Designed for You', sub: 'Build your dream cake with our premium Custom Cake Builder. 100+ combinations for any occasion, delivered to your door.', bg: 'linear-gradient(135deg, #12080f 0%, #2a0f20 50%, #3a1530 100%)', accent: '#e05a7c', image: 'https://loremflickr.com/1200/800/wedding,cake?lock=102', badge: '✨ Fully Customisable' },
];

const STATS = [
  { value: '200+', label: 'Products' },
  { value: '15', label: 'Branches' },
  { value: '50K+', label: 'Happy Customers' },
  { value: '18+', label: 'Years of Craft' },
];

export const FlavorsHero: React.FC<FlavorsHeroProps> = ({ selectedBranch, onOrderNow, onCakeBuilder }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveSlide(p => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[activeSlide];

  return (
    <section id="top" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Background transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          style={{ position: 'absolute', inset: 0, background: slide.bg }}
        />
      </AnimatePresence>

      {/* Hero image (right side) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`img-${activeSlide}`}
          initial={{ opacity: 0, x: 60, scale: 1.05 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 1.0 }}
          style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center', maskImage: 'linear-gradient(to right, transparent 0%, black 30%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)' }}
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,31,18,0.95) 45%, rgba(10,31,18,0.3) 100%)' }} />

      {/* Decorative particles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[...Array(12)].map((_, i) => (
          <motion.div key={i} style={{ position: 'absolute', width: '2px', height: '2px', borderRadius: '50%', background: slide.accent, left: `${(i * 8.3) % 60}%`, top: `${(i * 11.7) % 90}%`, opacity: 0.4 }}
            animate={{ y: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      {/* Content */}
      <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: '120px 24px 80px', width: '100%' }}>
        <AnimatePresence mode="wait">
          <motion.div key={`content-${activeSlide}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.7 }} style={{ maxWidth: '620px' }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `rgba(${slide.accent === '#f5c518' ? '245,197,24' : slide.accent === '#c9963b' ? '201,150,59' : '224,90,124'},0.12)`, border: `1px solid ${slide.accent}30`, borderRadius: '20px', padding: '6px 16px', marginBottom: '28px' }}
            >
              <span style={{ fontSize: '12px', color: slide.accent, fontWeight: 600, letterSpacing: '0.5px' }}>{slide.badge}</span>
            </motion.div>

            {/* Headline */}
            <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 62px)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-1px' }}>
              {slide.headline}
            </h1>

            {/* Sub */}
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '40px', maxWidth: '520px' }}>
              {slide.sub}
            </p>

            {/* Branch info pill */}
            {selectedBranch && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '10px 16px', marginBottom: '32px' }}
              >
                <span style={{ fontSize: '14px' }}>📍</span>
                <div>
                  <div style={{ fontSize: '12px', color: '#f5c518', fontWeight: 600 }}>{selectedBranch.name}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)' }}>
                    {selectedBranch.deliveryAvailable && '🚚 Delivery'}{selectedBranch.deliveryAvailable && selectedBranch.pickupAvailable && ' · '}{selectedBranch.pickupAvailable && '🏪 Pickup'} · {selectedBranch.estimatedDelivery}
                  </div>
                </div>
              </motion.div>
            )}

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(245,197,24,0.4)' }}
                whileTap={{ scale: 0.97 }}
                onClick={onOrderNow}
                style={{ padding: '16px 32px', background: 'linear-gradient(135deg, #f5c518, #e6a800)', border: 'none', borderRadius: '12px', color: '#0a1f12', fontSize: '15px', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.5px', boxShadow: '0 8px 32px rgba(245,197,24,0.3)' }}
              >
                ORDER NOW
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onCakeBuilder}
                style={{ padding: '16px 28px', background: 'transparent', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: '12px', color: '#ffffff', fontSize: '15px', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.3px' }}
              >
                ✦ Build Your Cake
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide dots */}
        <div style={{ position: 'absolute', bottom: '80px', left: '24px', display: 'flex', gap: '8px' }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setActiveSlide(i)} style={{ width: i === activeSlide ? '28px' : '8px', height: '8px', borderRadius: '4px', background: i === activeSlide ? '#f5c518' : 'rgba(255,255,255,0.3)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0 }} />
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(245,197,24,0.06)', borderTop: '1px solid rgba(245,197,24,0.15)', backdropFilter: 'blur(10px)' }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '16px' }}>
          {STATS.map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '26px', fontWeight: 900, color: '#f5c518', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
