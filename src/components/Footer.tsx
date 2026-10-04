'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Globe2, 
  ShieldCheck, 
  Cpu, 
  ArrowUpRight, 
  MapPin, 
  Clock, 
  Activity, 
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react';
import { AGENCY_BUSINESS } from '@/data/siteData';

export const Footer: React.FC = () => {
  const [uaeTime, setUaeTime] = useState<string>('');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // UAE is GST (UTC+4)
      const uaeDateString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setUaeTime(uaeDateString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#060504] border-t border-amber-500/20 py-16 text-gray-400 text-xs font-sans relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Specular Liquid Gold Top Border Glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent shadow-[0_0_12px_rgba(245,158,11,0.5)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Studio Status Ribbon with Live Dubai Telemetry & Testing Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-12 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-gray-300 font-bold uppercase tracking-wider text-[11px]">
                UAE CLUSTER: DUBAI (DXB1) &amp; ABU DHABI (AUH1)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-400">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 hover:border-amber-400/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] transition-all duration-300 text-amber-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-gray-400 text-[11px]">DUBAI TIME:</span>
              <span className="text-amber-300 font-bold font-mono">{uaeTime || 'GST (UTC+4)'}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-emerald-400">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>EDGE LATENCY: &lt; 20MS</span>
            </div>
          </div>
        </div>

        {/* Main Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="relative inline-flex items-center group">
              <div className="absolute inset-0 -inset-x-1 bg-amber-400/15 blur-lg rounded-full pointer-events-none opacity-25 group-hover:opacity-60 transition-opacity duration-500" />
              <img
                src="/webstudio-logo.png"
                alt="Web Studio AE Logo"
                className="relative z-10 h-10 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] filter drop-shadow-[0_0_8px_rgba(245,158,11,0.2)] group-hover:drop-shadow-[0_0_14px_rgba(245,158,11,0.38)] group-hover:brightness-105"
              />
            </Link>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed font-normal">
              {AGENCY_BUSINESS.subheading}
            </p>
            <div className="pt-2 text-xs font-mono space-y-1.5 text-gray-400">
              <p className="text-amber-400 font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Dubai &amp; Abu Dhabi, United Arab Emirates</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-gray-500" />
                <a href="mailto:info@webstudioae.com" className="hover:text-white transition-colors">info@webstudioae.com</a>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gray-500" />
                <a href={AGENCY_BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+971 52 339 4001</a>
              </p>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Projects & Studio */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4 font-mono">Projects</h4>
              <ul className="space-y-2.5">
                <li><Link href="/projects" className="group inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors"><span className="text-amber-500 font-bold mr-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">›</span><span>Projects Archive</span></Link></li>
                <li><a href="#work" className="group inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors"><span className="text-amber-500 font-bold mr-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">›</span><span>Selected Projects</span></a></li>
                <li><a href="#services" className="group inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors"><span className="text-amber-500 font-bold mr-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">›</span><span>Core Capabilities</span></a></li>
                <li><a href="#why" className="group inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors"><span className="text-amber-500 font-bold mr-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">›</span><span>Agency Advantage</span></a></li>
                <li><Link href="/work/artisan-bakery" className="group inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors"><span className="text-amber-500 font-bold mr-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">›</span><span>#80 Flame &amp; Flour</span></Link></li>
              </ul>
            </div>

            {/* Column 2: Engineering & Delivery */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4 font-mono">Engineering</h4>
              <ul className="space-y-2.5">
                <li><a href="#process" className="group inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors"><span className="text-amber-500 font-bold mr-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">›</span><span>Agile Delivery</span></a></li>
                <li><a href="#tech" className="group inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors"><span className="text-amber-500 font-bold mr-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">›</span><span>Connected Stack</span></a></li>
                <li><a href="#reviews" className="group inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors"><span className="text-amber-500 font-bold mr-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">›</span><span>Client Intelligence</span></a></li>
                <li><a href="#pricing" className="group inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors"><span className="text-amber-500 font-bold mr-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">›</span><span>AED Pricing</span></a></li>
                <li><a href="#faq" className="group inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors"><span className="text-amber-500 font-bold mr-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">›</span><span>FAQ &amp; SLA</span></a></li>
              </ul>
            </div>

            {/* Column 3: UAE Legal & Channels */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4 font-mono">Governance</h4>
              <ul className="space-y-2.5">
                <li><a href={AGENCY_BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"><span className="text-emerald-400 font-bold mr-1">›</span><span>WhatsApp Dispatch</span></a></li>
                <li><a href={AGENCY_BUSINESS.socials.facebook} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors"><span className="text-amber-500 font-bold mr-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">›</span><span>Facebook Page</span></a></li>
                <li><a href={AGENCY_BUSINESS.socials.linkedin} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors"><span className="text-amber-500 font-bold mr-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">›</span><span>LinkedIn</span></a></li>
                <li><span className="text-gray-500 cursor-default">DED / DTCM Registered</span></li>
                <li><span className="text-gray-500 cursor-default">NDAs &amp; IP Protection</span></li>
                <li><span className="text-gray-500 cursor-default">UAE Commercial SLA</span></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Copyright & Tech Stack Ribbon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 font-mono text-[11px]">
          <span>© {new Date().getFullYear()} {AGENCY_BUSINESS.name} ({AGENCY_BUSINESS.domain}). All rights reserved.</span>
          <span className="text-amber-400/80">
            Next.js 16 SSR • Framer Motion • UAE Multi-AZ Cloud Infrastructure
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

