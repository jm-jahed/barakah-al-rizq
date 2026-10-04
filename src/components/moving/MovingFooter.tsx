'use client';

import React from 'react';
import { Home, Phone, Mail, MapPin, Globe, Share2, MessageSquare } from 'lucide-react';
import { NESTMOVE_BRAND } from '@/data/movingData';

export const MovingFooter: React.FC = () => {
  return (
    <footer className="bg-[#141210] border-t border-stone-800 text-stone-400 font-sans text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#D96B27] flex items-center justify-center text-white">
                <Home className="w-4 h-4" />
              </div>
              <span className="text-lg font-extrabold text-[#FDFBF7] tracking-tight font-serif">{NESTMOVE_BRAND.name}</span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {NESTMOVE_BRAND.subheading} Premium residential, office, and international relocation services across Dubai, Abu Dhabi, and worldwide.
            </p>

            <div className="space-y-1.5 text-stone-300 text-[11px] font-mono pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D96B27]" />
                <span>{NESTMOVE_BRAND.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D96B27]" />
                <span>{NESTMOVE_BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D96B27]" />
                <span>{NESTMOVE_BRAND.email}</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-4">COMPANY</h4>
            <ul className="space-y-2.5 text-stone-400">
              <li><a href="#services" className="hover:text-[#E87A36] transition-colors">About NestMove</a></li>
              <li><a href="#reviews" className="hover:text-[#E87A36] transition-colors">Client Reviews</a></li>
              <li><a href="#locations" className="hover:text-[#E87A36] transition-colors">Careers & Crew</a></li>
              <li><a href="#faq" className="hover:text-[#E87A36] transition-colors">Contact Concierge</a></li>
            </ul>
          </div>

          {/* Moving */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-4">MOVING SERVICES</h4>
            <ul className="space-y-2.5 text-stone-400">
              <li><a href="#services" className="hover:text-[#E87A36] transition-colors">Home Moving</a></li>
              <li><a href="#services" className="hover:text-[#E87A36] transition-colors">Office Relocation</a></li>
              <li><a href="#services" className="hover:text-[#E87A36] transition-colors">International Moving</a></li>
              <li><a href="#services" className="hover:text-[#E87A36] transition-colors">Full Packing Service</a></li>
              <li><a href="#services" className="hover:text-[#E87A36] transition-colors">Climate Storage</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-4">RESOURCES</h4>
            <ul className="space-y-2.5 text-stone-400">
              <li><a href="#checklist" className="hover:text-[#E87A36] transition-colors">Moving Checklist</a></li>
              <li><a href="#calculator" className="hover:text-[#E87A36] transition-colors">Move Cost Estimator</a></li>
              <li><a href="#faq" className="hover:text-[#E87A36] transition-colors">Insurance Policy</a></li>
              <li><a href="#faq" className="hover:text-[#E87A36] transition-colors">Building Permit Advisory</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p className="text-stone-500">
            © 2026 {NESTMOVE_BRAND.name} UAE Relocation LLC. All rights reserved. Concept Agency Build #24.
          </p>

          <div className="flex items-center gap-4 text-stone-400">
            
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#E87A36] transition-colors flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              <span>Facebook</span>
            </a>
            <a href={NESTMOVE_BRAND.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#E87A36] transition-colors flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
