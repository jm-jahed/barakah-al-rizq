'use client';

import React from 'react';
import { Truck, Phone, Mail, MapPin, Globe, Share2, MessageSquare, ExternalLink } from 'lucide-react';
import { LOGISTICS_BRAND_INFO } from '@/data/logisticsData';

export const LogisticsFooter: React.FC = () => {
  return (
    <footer className="bg-[#05080E] border-t border-white/10 text-gray-400 font-mono text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Truck className="w-4 h-4" />
              </div>
              <span className="text-base font-black text-white tracking-widest">{LOGISTICS_BRAND_INFO.name}</span>
            </div>

            <p className="text-xs text-gray-400 font-sans leading-relaxed max-w-sm">
              {LOGISTICS_BRAND_INFO.tagline} Next-generation logistics telemetry, express same-day courier dispatch, and GCC cross-border freight infrastructure.
            </p>

            <div className="space-y-1.5 text-gray-300 text-[11px] pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{LOGISTICS_BRAND_INFO.headquarters}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{LOGISTICS_BRAND_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{LOGISTICS_BRAND_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">COMPANY</h4>
            <ul className="space-y-2.5 text-gray-400">
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">About Velox</a></li>
              <li><a href="#coverage" className="hover:text-cyan-300 transition-colors">Careers & Fleet</a></li>
              <li><a href="#dashboard" className="hover:text-cyan-300 transition-colors">Press & Media</a></li>
              <li><a href="#faq" className="hover:text-cyan-300 transition-colors">Contact Concierge</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">SERVICES</h4>
            <ul className="space-y-2.5 text-gray-400">
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Express Same-Day</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Last-Mile Fulfillment</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Heavy GCC Freight</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Climate Warehousing</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">International Air Express</a></li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">RESOURCES</h4>
            <ul className="space-y-2.5 text-gray-400">
              <li><a href="#tracking" className="hover:text-cyan-300 transition-colors">Live Tracking Portal</a></li>
              <li><a href="#calculator" className="hover:text-cyan-300 transition-colors">Instant Rate Estimator</a></li>
              <li><a href="#technology" className="hover:text-cyan-300 transition-colors">REST API Documentation</a></li>
              <li><a href="#faq" className="hover:text-cyan-300 transition-colors">Security & Compliance</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-500">
            © 2026 {LOGISTICS_BRAND_INFO.legalName}. All rights reserved. Concept Agency Build #23.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-400">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            
            <a href={LOGISTICS_BRAND_INFO.whatsapp} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
