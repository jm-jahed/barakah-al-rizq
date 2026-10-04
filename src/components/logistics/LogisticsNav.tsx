'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Truck,
  Search,
  Phone,
  MessageCircle,
  Menu,
  X,
  Compass,
  ArrowRight,
  Shield,
  Layers,
  Activity,
  Calculator,
  Radar,
  ChevronRight
} from 'lucide-react';
import { LOGISTICS_BRAND_INFO, LOGISTICS_CATEGORIES } from '@/data/logisticsData';

interface LogisticsNavProps {
  onOpenQuoteModal: (service?: string) => void;
  onOpenTrackingModal: () => void;
  onSelectCategory?: (categorySlug: string) => void;
  activeCompareCount?: number;
  onOpenCompareDrawer?: () => void;
}

export const LogisticsNav: React.FC<LogisticsNavProps> = ({
  onOpenQuoteModal,
  onOpenTrackingModal,
  onSelectCategory,
  activeCompareCount = 0,
  onOpenCompareDrawer
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickSearchQuery, setQuickSearchQuery] = useState('');

  const handleQuickTrackingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickSearchQuery.trim()) {
      onOpenTrackingModal();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#070B14]/90 backdrop-blur-xl border-b border-cyan-900/30">
      {/* Top Operations Telemetry Ticker Strip */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 bg-gradient-to-r from-blue-950/60 via-[#0a1224] to-cyan-950/60 border-b border-blue-900/20 text-[11px] font-mono text-cyan-300">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-gray-300 font-sans font-medium">UAE Control Center:</span>
            <span className="text-emerald-400 font-bold">100% OPERATIONAL</span>
          </div>
          <span className="text-gray-600">|</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Active UAE Fleet:</span>
            <span className="text-cyan-200 font-semibold">1,450+ Units Live</span>
          </div>
          <span className="text-gray-600">|</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Cold-Chain SLA:</span>
            <span className="text-blue-300 font-semibold">99.4% On-Target</span>
          </div>
        </div>

        <div className="flex items-center gap-5 text-gray-300">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <span>Currency:</span>
            <span className="px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 text-[10px]">AED (UAE Dirham)</span>
          </div>
          <span className="text-gray-600">|</span>
          <a
            href={LOGISTICS_BRAND_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>24/7 WhatsApp Dispatch</span>
          </a>
          <span className="text-gray-600">|</span>
          <a href={`tel:${LOGISTICS_BRAND_INFO.phone}`} className="hover:text-white flex items-center gap-1 transition-colors">
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>{LOGISTICS_BRAND_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Tag */}
          <Link href="/work/logistics-delivery" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-[#070B14] rounded-[10px] flex items-center justify-center">
                <Truck className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-wider text-white">VELOX</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold">
                  PROJECT #23
                </span>
              </div>
              <p className="text-[10px] text-gray-400 tracking-wider uppercase font-mono">
                Global Logistics & Freight Platform
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-300">
            <a href="#catalog" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>200+ Solutions Catalog</span>
            </a>
            <a href="#radar" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Radar className="w-4 h-4 text-emerald-400" />
              <span>Live Fleet Radar</span>
            </a>
            <a href="#calculator" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Rate Calculator</span>
            </a>
            <a href="#cold-chain" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-blue-400" />
              <span>Cold-Chain IoT</span>
            </a>
            <a href="#tracking" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Search className="w-4 h-4 text-purple-400" />
              <span>Live Tracking</span>
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Compare Badge Button (if items selected) */}
            {activeCompareCount > 0 && onOpenCompareDrawer && (
              <button
                onClick={onOpenCompareDrawer}
                className="px-3 py-2 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold flex items-center gap-2 hover:bg-cyan-900/60 transition-all animate-pulse"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Compare ({activeCompareCount})</span>
              </button>
            )}

            <button
              onClick={onOpenTrackingModal}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-gray-200 text-xs font-bold transition-all flex items-center gap-2 hover:border-cyan-500/50"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span>Track Shipment</span>
            </button>

            <button
              onClick={() => onOpenQuoteModal()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-extrabold transition-all shadow-lg shadow-cyan-600/25 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Instant Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#070B14] border-b border-slate-800 px-6 py-6 space-y-4"
          >
            <div className="space-y-3 font-medium text-gray-200 text-sm">
              <a
                href="#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80"
              >
                📦 200+ Solutions Catalog
              </a>
              <a
                href="#radar"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80"
              >
                📡 Live Fleet Radar HUD
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80"
              >
                🧮 Freight & Parcel Rate Calculator
              </a>
              <a
                href="#cold-chain"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80"
              >
                ❄️ Cold-Chain BioPharma IoT
              </a>
              <a
                href="#tracking"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80"
              >
                🔍 Live Shipment Tracking
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrackingModal();
                }}
                className="w-full py-3 rounded-xl bg-slate-800 text-white font-bold text-sm text-center"
              >
                Track a Shipment
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-extrabold text-sm text-center"
              >
                Request Instant Freight Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
