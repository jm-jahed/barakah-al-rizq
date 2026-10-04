'use client';
import React from 'react';
import { KineticLogo } from './KineticLogo';
import { ShieldCheck, Award, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

export const FitnessFooter: React.FC = () => {
  return (
    <footer className="bg-[#070605] border-t border-red-500/20 text-gray-400 font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <KineticLogo size="lg" />
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Dubai&apos;s apex athletic facility combining collegiate-level strength periodization, high-velocity biomechanics lab, sub-zero biohacking cryo, and bespoke Olympic coaching across DIFC Gate Avenue and Palm Jumeirah.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-[10px] font-mono text-red-400">
              <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20">
                <ShieldCheck className="w-3 h-3 text-red-400" /> Dubai Sports Council #DSC-2026-8942
              </span>
              <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                <Award className="w-3 h-3 text-orange-400" /> DHA Biohacking License #4821
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#catalog" className="hover:text-red-400 transition-colors">Hypertrophy &amp; Power</a></li>
              <li><a href="#catalog" className="hover:text-red-400 transition-colors">High-Velocity Conditioning</a></li>
              <li><a href="#catalog" className="hover:text-red-400 transition-colors">Combat &amp; Striking</a></li>
              <li><a href="#catalog" className="hover:text-red-400 transition-colors">Cryo &amp; Biohacking</a></li>
              <li><a href="#catalog" className="hover:text-red-400 transition-colors">Olympic Lifting Lab</a></li>
              <li><a href="#catalog" className="hover:text-red-400 transition-colors">Rehab &amp; Biomechanics</a></li>
            </ul>
          </div>

          {/* UAE Locations */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              UAE Clubs
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="font-bold text-gray-200">DIFC Gate Avenue Club</p>
                <p className="text-[11px] text-gray-500">Level 2, South Zone, DIFC</p>
                <p className="text-[11px] text-red-400">+971 4 399 2200 • 24/7 Access</p>
              </div>
              <div>
                <p className="font-bold text-gray-200">Palm Jumeirah Club</p>
                <p className="text-[11px] text-gray-500">Golden Mile Galleria 4, Palm</p>
                <p className="text-[11px] text-red-400">+971 4 456 8800 • 24/7 Access</p>
              </div>
            </div>
          </div>

          {/* VIP Concierge */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              VIP Inquiries
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-[11px] text-gray-400">
                Direct WhatsApp consultation with our Master Performance Director:
              </p>
              <a
                href="https://wa.me/971509922000?text=Hi%20KINETIC%20ATHLETICA!%20I%20would%20like%20to%20schedule%20a%20private%20tour."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold hover:underline"
              >
                +971 50 992 2000 <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-[10px] text-gray-500 pt-1">
                Mon - Sun: Open 24 Hours (Biometrics Lab: 06:00 - 22:00)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>© {new Date().getFullYear()} KINETIC ATHLETICA DUBAI LLC. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Statutory UAE Commercial License #891044</span>
            <span>•</span>
            <a href="https://webstudioae.com" className="text-gray-400 hover:text-white transition-colors">
              Engineered by WebStudio UAE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
