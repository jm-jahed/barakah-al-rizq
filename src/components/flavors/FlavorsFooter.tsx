'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FLAVORS_BRANCHES, FLAVORS_BRAND } from '@/data/flavorsData';

export const FlavorsFooter: React.FC = () => {
  return (
    <footer style={{ background: '#07150c', borderTop: '1px solid rgba(245,197,24,0.1)', padding: '80px 0 40px', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px', marginBottom: '80px' }}>
          
          {/* Brand */}
          <div>
            <img 
              src="/flavors-logo.jpg" 
              alt="FLAVORS Logo" 
              style={{ height: '60px', width: 'auto', borderRadius: '6px', marginBottom: '24px' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling!.setAttribute('style', 'display: flex; align-items: center; gap: 12px; margin-bottom: 24px;');
              }}
            />
            <div style={{ display: 'none' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'linear-gradient(135deg, #f5c518, #e6a800)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>✦</div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff', letterSpacing: '3px', lineHeight: 1 }}>FLAVORS</div>
                <div style={{ fontSize: '10px', color: '#f5c518', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 500, marginTop: '2px' }}>Premium Sweets & Bakers</div>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '24px' }}>
              {FLAVORS_BRAND.description}
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['Facebook', 'Instagram', 'LinkedIn'].map(social => (
                <a key={social} href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', textDecoration: 'none', fontSize: '14px', transition: 'all 0.2s' }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#f5c518'} onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'}>
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '24px' }}>Explore</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Our Story', 'Menu', 'Custom Cakes', 'Corporate Orders', 'Careers'].map(link => (
                <li key={link}><a href="#" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#f5c518'} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'}>{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Branches (Main ones) */}
          <div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '24px' }}>Key Branches</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {FLAVORS_BRANCHES.filter(b => b.isMainBranch).map(branch => (
                <li key={branch.id}>
                  <div style={{ fontSize: '14px', color: '#ffffff', fontWeight: 600, marginBottom: '4px' }}>{branch.shortName}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{branch.address}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '24px' }}>Contact Us</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '16px' }}>📞</span>
                <div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '2px' }}>Hotline</div>
                  <div style={{ fontSize: '14px', color: '#ffffff', fontWeight: 600 }}>{FLAVORS_BRAND.phone || '+880 9600-000000'}</div>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '16px' }}>💬</span>
                <div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '2px' }}>WhatsApp</div>
                  <div style={{ fontSize: '14px', color: '#ffffff', fontWeight: 600 }}>{FLAVORS_BRAND.whatsapp}</div>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '16px' }}>✉️</span>
                <div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '2px' }}>Email</div>
                  <div style={{ fontSize: '14px', color: '#ffffff', fontWeight: 600 }}>{FLAVORS_BRAND.email}</div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} {FLAVORS_BRAND.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
