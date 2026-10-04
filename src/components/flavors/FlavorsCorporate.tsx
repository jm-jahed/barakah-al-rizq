'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CORPORATE_PACKAGES } from '@/data/flavorsData';
import { formatBDT } from '@/data/flavorsCatalogData';

export const FlavorsCorporate: React.FC = () => {
  return (
    <section id="corporate" style={{ background: '#0a1f12', padding: '100px 0', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '60px' }}>
          {/* Text Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', background: '#f5c518' }} />
              <span style={{ fontSize: '12px', color: '#f5c518', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600 }}>Corporate & Events</span>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 900, color: '#ffffff', margin: '0 0 20px', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Elevate Your Corporate Gifting
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: '0 0 32px' }}>
              Make a lasting impression with FLAVORS premium corporate packages. Whether it's employee appreciation, client gifting, or grand event catering, we offer customisable, high-end solutions tailored to your brand.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Volume discounts for large orders',
                'Custom corporate branding on packaging',
                'Dedicated account manager',
                'Multi-location delivery across Dhaka'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#ffffff', fontWeight: 500 }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(245,197,24,0.15)', color: '#f5c518', fontSize: '12px' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <motion.a href="mailto:corporate@flavors.com.bd" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block', padding: '16px 36px', background: 'linear-gradient(135deg, #f5c518, #e6a800)', borderRadius: '12px', color: '#0a1f12', fontSize: '15px', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.5px' }}>
              CONTACT CORPORATE TEAM
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', minHeight: '400px' }}>
            <img src="https://loremflickr.com/1200/800/gift,corporate?lock=888" alt="Corporate Gifting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,31,18,0.9) 0%, transparent 100%)' }} />
            <div style={{ position: 'absolute', bottom: '32px', left: '32px', right: '32px', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>Trusted by 50+ Brands</div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>Join Bangladesh's leading companies who choose FLAVORS for their most important events and celebrations.</p>
            </div>
          </motion.div>
        </div>

        {/* Packages Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {CORPORATE_PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '32px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{pkg.id === 'corp-starter' ? '🎁' : pkg.id === 'corp-enterprise' ? '🏢' : '🎉'}</div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', margin: '0 0 12px' }}>{pkg.name}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '24px', minHeight: '66px' }}>{pkg.description}</p>
              <div style={{ fontSize: '12px', color: '#f5c518', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Includes:</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {pkg.includes.map((item, j) => (
                  <li key={j} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span> {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>Starting From</div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#f5c518' }}>{formatBDT(pkg.pricePerUnit)}</div>
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '8px' }}>
                  Min {pkg.minQuantity}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
