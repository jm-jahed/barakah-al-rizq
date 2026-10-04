'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowRight, CheckCircle2, Phone, Mail, Sliders, Star, X, Send, Layers, Users, Check, ShieldCheck, Activity, Building, Menu, CreditCard, Lock, DollarSign, TrendingUp, FileText, Repeat, Link, Building2, Bell, Search, ChevronRight, Shield, Briefcase, MapPin, Clock, ArrowDown, ArrowUpRight, RefreshCw, HelpCircle, QrCode, Smartphone, ChevronDown, CheckCircle, AlertCircle, Filter } from 'lucide-react';
import { 
  CURRENCY_RATES, 
  DESTINATIONS, 
  MOCK_TRANSFERS, 
  UAE_BRANCHES, 
  FAQS,
  CurrencyRate,
  DestinationCountry,
  TransferRecord
} from '@/data/novaRemitData';

export const NovaRemitShowcase: React.FC = () => {
  // Navigation & Modal States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Hero Exchange Widget State
  const [sendAmount, setSendAmount] = useState<number>(1000);
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<string>('INR');
  
  const selectedCurrency = CURRENCY_RATES.find(c => c.code === selectedCurrencyCode) || CURRENCY_RATES[0];
  const feeAED = 15;
  const receiveValue = (sendAmount * selectedCurrency.rateToAED).toLocaleString(undefined, { maximumFractionDigits: 2 });

  // Rates Table Search & Region Filter State
  const [rateSearch, setRateSearch] = useState<string>('');
  const [activeRegion, setActiveRegion] = useState<string>('ALL');

  // Multi-Step Transfer Modal State
  const [isTransferModalOpen, setIsTransferModalOpen] = useState<boolean>(false);
  const [transferStep, setTransferStep] = useState<number>(1);
  const [recipientName, setRecipientName] = useState<string>('');
  const [recipientIban, setRecipientIban] = useState<string>('');
  const [recipientBank, setRecipientBank] = useState<string>('');
  const [recipientPhone, setRecipientPhone] = useState<string>('');
  const [transferPurpose, setTransferPurpose] = useState<string>('Family Maintenance');
  const [transferCompleteRef, setTransferCompleteRef] = useState<string>('');

  // Transfer Tracking Search State
  const [trackRef, setTrackRef] = useState<string>('NVR-2026-88192');
  const [trackedRecord, setTrackedRecord] = useState<TransferRecord | null>(MOCK_TRANSFERS[0]);

  // Rate Alert Modal State
  const [isRateAlertOpen, setIsRateAlertOpen] = useState<boolean>(false);
  const [alertTargetRate, setAlertTargetRate] = useState<number>(22.85);
  const [alertEmail, setAlertEmail] = useState<string>('');
  const [alertCreated, setAlertCreated] = useState<boolean>(false);

  // Destination Detail Drawer State
  const [selectedDestination, setSelectedDestination] = useState<DestinationCountry | null>(null);

  // Branch Locator Search
  const [branchSearch, setBranchSearch] = useState<string>('');

  // Handle Transfer Flow Submit
  const handleStartTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    if (transferStep < 4) {
      setTransferStep(transferStep + 1);
    } else {
      const generatedRef = `NVR-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setTransferCompleteRef(generatedRef);
      setTransferStep(5);
    }
  };

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = MOCK_TRANSFERS.find(t => t.ref.toLowerCase() === trackRef.trim().toLowerCase());
    setTrackedRecord(found || MOCK_TRANSFERS[0]);
  };

  const handleCreateAlert = (e: React.FormEvent) => {
    e.preventDefault();
    setAlertCreated(true);
  };

  const filteredRates = CURRENCY_RATES.filter(c => {
    const matchesSearch = c.code.toLowerCase().includes(rateSearch.toLowerCase()) || 
                          c.name.toLowerCase().includes(rateSearch.toLowerCase());
    const matchesRegion = activeRegion === 'ALL' || c.region.toUpperCase() === activeRegion;
    return matchesSearch && matchesRegion;
  });

  const filteredBranches = UAE_BRANCHES.filter(b => 
    b.city.toLowerCase().includes(branchSearch.toLowerCase()) || 
    b.branch.toLowerCase().includes(branchSearch.toLowerCase()) ||
    b.address.toLowerCase().includes(branchSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#070B12] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-300">
      
      {/* ── STICKY TOP NAVBAR ── */}
      <header className="sticky top-0 z-40 bg-[#070B12]/90 backdrop-blur-xl border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-amber-600 to-yellow-700 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <div className="w-full h-full bg-[#070B12] rounded-[10px] flex items-center justify-center">
                <Globe className="w-5 h-5 text-amber-400 animate-spin-slow" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                NOVA <span className="text-amber-400">REMIT</span>
              </span>
              <span className="block text-[10px] font-mono text-amber-400/80 tracking-widest uppercase">
                UAE GLOBAL MONEY EXCHANGE
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-wider text-slate-300">
            <a href="#hero-calculator" className="hover:text-amber-400 transition-colors">EXCHANGE</a>
            <a href="#destinations" className="hover:text-amber-400 transition-colors">DESTINATIONS</a>
            <a href="#live-rates" className="hover:text-amber-400 transition-colors">RATES ({CURRENCY_RATES.length})</a>
            <a href="#tracking" className="hover:text-amber-400 transition-colors">TRACKING</a>
            <a href="#business" className="hover:text-amber-400 transition-colors">BUSINESS</a>
            <a href="#branches" className="hover:text-amber-400 transition-colors">BRANCHES</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">SUPPORT</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsRateAlertOpen(true)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-amber-400 transition-all cursor-pointer flex items-center gap-2 font-mono text-xs"
            >
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">RATE ALERT</span>
            </button>

            <button
              onClick={() => {
                setTransferStep(1);
                setIsTransferModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 hover:from-amber-300 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center gap-2 cursor-pointer"
            >
              <span>START TRANSFER</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0C121D] border-b border-amber-500/20 p-4 space-y-3 font-mono text-xs">
            <a href="#hero-calculator" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-amber-400">EXCHANGE</a>
            <a href="#destinations" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-amber-400">DESTINATIONS</a>
            <a href="#live-rates" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-amber-400">RATES ({CURRENCY_RATES.length})</a>
            <a href="#tracking" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-amber-400">TRACKING</a>
            <a href="#business" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-amber-400">BUSINESS</a>
            <a href="#branches" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-amber-400">BRANCHES</a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsTransferModalOpen(true);
              }}
              className="w-full py-3 text-center bg-amber-400 text-black font-bold rounded-xl"
            >
              START TRANSFER
            </button>
          </div>
        )}
      </header>

      {/* ── HERO SECTION & EXCHANGE CALCULATOR ── */}
      <section id="hero-calculator" className="relative py-20 lg:py-32 overflow-hidden border-b border-amber-500/15 bg-gradient-to-b from-[#070B12] via-[#0D1524] to-[#070B12]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-amber-500/10 blur-[200px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>UAE Licensed Remittance & Global FX Engine</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] font-mono">
                Move Money <br />
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Beyond Borders.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl font-sans">
                Exchange AED (UAE Dirham) to all world currencies with transparent exchange rates, instant mobile wallet payouts, and 0 hidden fees.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 font-mono text-xs">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-lg font-bold text-amber-400 block">{CURRENCY_RATES.length}+</span>
                  <span className="text-slate-400 text-[11px]">Global Currencies</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-lg font-bold text-white block">60 Secs</span>
                  <span className="text-slate-400 text-[11px]">Instant Payouts</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-lg font-bold text-amber-400 block">AED 15</span>
                  <span className="text-slate-400 text-[11px]">Flat Fee</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-lg font-bold text-white block">5 UAE</span>
                  <span className="text-slate-400 text-[11px]">Branch Pavilions</span>
                </div>
              </div>
            </div>

            {/* HERO EXCHANGE CALCULATOR WIDGET */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-6 bg-[#0E1624] border border-amber-500/30 shadow-2xl space-y-6">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
                  <span className="font-bold text-white uppercase flex items-center gap-2">
                    <Activity className="w-4 h-4 text-amber-400 animate-pulse" />
                    AED TO ALL CURRENCIES CONVERTER
                  </span>
                  <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                    Rate Locked 15M
                  </span>
                </div>

                {/* You Send Input */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                    <span>YOU SEND (SOURCE CURRENCY)</span>
                    <span className="text-white font-bold">UNITED ARAB EMIRATES</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <input 
                      type="number"
                      value={sendAmount}
                      onChange={(e) => setSendAmount(Number(e.target.value))}
                      className="w-full bg-transparent text-2xl font-bold font-mono text-white outline-none"
                    />
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 font-mono text-xs text-amber-400 font-bold border border-white/10 flex-shrink-0">
                      <span>🇦🇪 AED</span>
                    </div>
                  </div>
                </div>

                {/* Conversion Details */}
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 font-mono text-xs space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span>Exchange Rate:</span>
                    <span className="text-amber-400 font-bold">1 AED = {selectedCurrency.rateToAED} {selectedCurrency.code}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transfer Fee:</span>
                    <span className="text-white font-bold">AED {feeAED}.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Delivery:</span>
                    <span className="text-emerald-400 font-bold">Instant (Sub-60s)</span>
                  </div>
                </div>

                {/* Recipient Gets Input */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                    <span>RECIPIENT GETS (DESTINATION CURRENCY)</span>
                    <span className="text-amber-400 font-bold">{selectedCurrency.name}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-2xl font-bold font-mono text-amber-400">
                      {receiveValue}
                    </div>
                    <select
                      value={selectedCurrencyCode}
                      onChange={(e) => setSelectedCurrencyCode(e.target.value)}
                      className="px-3 py-1.5 rounded-xl bg-white/10 font-mono text-xs text-white font-bold outline-none border border-white/10 cursor-pointer max-w-[160px]"
                    >
                      {CURRENCY_RATES.map((c) => (
                        <option key={c.code} value={c.code} className="bg-[#0E1624]">
                          {c.flag} {c.code} - {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setTransferStep(1);
                    setIsTransferModalOpen(true);
                  }}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 text-black font-extrabold font-mono text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>CONTINUE SECURE TRANSFER</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── LIVE EXCHANGE RATES TABLE (AED TO ALL CURRENCIES) ── */}
      <section id="live-rates" className="py-24 bg-[#070B12] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>AED TO ALL GLOBAL CURRENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
              Live AED Exchange Rates ({filteredRates.length} Currencies)
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-sans">
              Base Currency: 1 AED (UAE Dirham). Direct wholesale FX pricing.
            </p>
          </div>

          {/* Region Filters & Search Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 font-mono text-xs">
            <div className="flex flex-wrap items-center gap-2">
              {['ALL', 'ASIA & PACIFIC', 'MIDDLE EAST & AFRICA', 'EUROPE & AMERICAS'].map((reg) => (
                <button
                  key={reg}
                  onClick={() => setActiveRegion(reg)}
                  className={`px-3 py-1.5 rounded-xl border transition-all ${
                    activeRegion === reg 
                      ? 'bg-amber-400 text-black font-bold border-amber-400' 
                      : 'bg-white/5 text-slate-300 border-white/10 hover:border-amber-400/50'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Search currency (USD, INR, EGP...)"
                value={rateSearch}
                onChange={(e) => setRateSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#0E1624] border border-amber-500/30 text-white outline-none"
              />
            </div>
          </div>

          <div className="bg-[#0E1624] rounded-3xl border border-amber-500/30 shadow-2xl overflow-hidden font-mono text-xs">
            <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5">
              <span className="text-slate-300 font-bold">Showing {filteredRates.length} of {CURRENCY_RATES.length} Currencies</span>
              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Live Feed Updated: Today at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-black/50 text-slate-400 uppercase text-[10px] border-b border-white/10">
                  <tr>
                    <th className="p-4">Currency Code</th>
                    <th className="p-4">Currency Name</th>
                    <th className="p-4">Region</th>
                    <th className="p-4">We Buy (AED)</th>
                    <th className="p-4">We Sell (AED)</th>
                    <th className="p-4">1 AED Converts To</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredRates.map((c) => (
                    <tr key={c.code} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-bold text-white flex items-center gap-2">
                        <span className="text-lg">{c.flag}</span>
                        <span>{c.code}</span>
                      </td>
                      <td className="p-4 text-slate-300">{c.name}</td>
                      <td className="p-4 text-slate-400 text-[11px]">{c.region}</td>
                      <td className="p-4 text-emerald-400 font-bold">{c.buyRate}</td>
                      <td className="p-4 text-amber-400 font-bold">{c.sellRate}</td>
                      <td className="p-4 text-white font-bold">{c.rateToAED} {c.code}</td>
                      <td className="p-4">
                        <button
                          onClick={() => {
                            setSelectedCurrencyCode(c.code);
                            setTransferStep(1);
                            setIsTransferModalOpen(true);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-amber-400 text-black font-bold hover:bg-amber-300 transition-all text-[11px] cursor-pointer"
                        >
                          SEND AED → {c.code}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ── DESTINATIONS NETWORK ── */}
      <section id="destinations" className="py-24 bg-[#090E17] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Globe className="w-3.5 h-3.5" />
              <span>GLOBAL REMITTANCE NETWORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
              From the UAE to Everywhere.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map((d) => (
              <div 
                key={d.id}
                onClick={() => setSelectedDestination(d)}
                className="bg-[#0E1624] p-6 rounded-3xl border border-amber-500/20 hover:border-amber-400 transition-all cursor-pointer space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex justify-between items-center">
                  <span className="text-3xl">{d.flag}</span>
                  <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
                    {d.speed}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-mono">{d.name}</h3>
                  <span className="text-xs text-amber-400 font-mono font-bold block mt-1">1 AED = {d.rate} {d.currency}</span>
                </div>

                <div className="pt-3 border-t border-white/10 font-mono text-xs text-slate-300">
                  <span className="text-[10px] text-slate-400 block uppercase">Supported Delivery:</span>
                  <span className="line-clamp-1">{d.deliveryMethods.join(', ')}</span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-400 pt-2">
                  <span>VIEW COUNTRY SPECS</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DESTINATION SPEC MODAL */}
      <AnimatePresence>
        {selectedDestination && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0E1624] border border-amber-500/40 rounded-3xl p-6 sm:p-8 max-w-xl w-full relative space-y-6 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedDestination(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-2"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <span className="text-4xl">{selectedDestination.flag}</span>
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">DESTINATION COUNTRY</span>
                  <h3 className="text-2xl font-bold text-white font-mono">{selectedDestination.name} ({selectedDestination.currency})</h3>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Locked Exchange Rate:</span>
                  <span className="text-amber-400 font-bold">1 AED = {selectedDestination.rate} {selectedDestination.currency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Speed SLA:</span>
                  <span className="text-emerald-400 font-bold">{selectedDestination.speed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Standard Transfer Fee:</span>
                  <span className="text-white font-bold">AED 15.00</span>
                </div>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <span className="text-slate-400 uppercase font-bold block">Available Delivery Rails:</span>
                <div className="space-y-1.5">
                  {selectedDestination.deliveryMethods.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-200">
                      <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedCurrencyCode(selectedDestination.currency);
                  setSelectedDestination(null);
                  setTransferStep(1);
                  setIsTransferModalOpen(true);
                }}
                className="w-full py-4 rounded-2xl bg-amber-400 text-black font-extrabold font-mono text-xs uppercase"
              >
                SEND MONEY TO {selectedDestination.name.toUpperCase()} NOW →
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── LIVE TRANSFER TRACKER ── */}
      <section id="tracking" className="py-24 bg-[#070B12] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>24/7 REMITTANCE TRACKING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
              Track Your Transfer Status
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-[#0E1624] p-8 rounded-3xl border border-amber-500/30 shadow-2xl space-y-8 font-mono">
            
            <form onSubmit={handleTrackSubmit} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="text"
                placeholder="Enter Reference (e.g. NVR-2026-88192)"
                value={trackRef}
                onChange={(e) => setTrackRef(e.target.value)}
                className="flex-1 px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-white text-xs outline-none uppercase font-bold"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs uppercase tracking-wider cursor-pointer"
              >
                TRACK NOW
              </button>
            </form>

            {trackedRecord && (
              <div className="space-y-6 pt-6 border-t border-white/10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/5">
                  <div>
                    <span className="text-[10px] text-slate-400 block">REFERENCE ID</span>
                    <span className="text-base font-bold text-amber-400">{trackedRecord.ref}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">RECIPIENT</span>
                    <span className="text-xs font-bold text-white">{trackedRecord.recipient} ({trackedRecord.country})</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">AMOUNT SENT</span>
                    <span className="text-xs font-bold text-emerald-400">AED {trackedRecord.sendAED.toLocaleString()}</span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-4 text-xs">
                  {[
                    { title: 'Transfer Request Created', desc: 'Authorized at UAE Hub', done: true },
                    { title: 'Emirates ID Verification Passed', desc: 'Central Bank KYC Validated', done: true },
                    { title: 'Processing FX Settlement', desc: 'Rate locked at 1 AED = 22.65 INR', done: true },
                    { title: 'Dispatched to Banking Network', desc: 'Dispatched via IMPS / SWIFT Rail', done: trackedRecord.status === 'Completed' },
                    { title: 'Delivered to Recipient Account', desc: 'Completed & Confirmed', done: trackedRecord.status === 'Completed' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        step.done ? 'bg-emerald-400 text-black' : 'bg-white/10 text-slate-500'
                      }`}>
                        {step.done ? '✓' : idx + 1}
                      </div>
                      <div>
                        <span className="text-white font-bold block">{step.title}</span>
                        <span className="text-[11px] text-slate-400">{step.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ── UAE BRANCH LOCATOR ── */}
      <section id="branches" className="py-24 bg-[#090E17] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>UAE BRANCH & CASH EXCHANGE LOCATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
              Find a Nova Remit Location
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <input 
              type="text"
              placeholder="Filter by city or street (Dubai, Abu Dhabi, Sharjah...)"
              value={branchSearch}
              onChange={(e) => setBranchSearch(e.target.value)}
              className="w-full p-4 rounded-2xl bg-[#0E1624] border border-amber-500/30 text-white font-mono text-xs outline-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
              {filteredBranches.map((b, idx) => (
                <div key={idx} className="bg-[#0E1624] p-6 rounded-3xl border border-white/10 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-amber-400">{b.city}</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">OPEN NOW</span>
                  </div>
                  <h3 className="text-base font-bold text-white">{b.branch}</h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed">{b.address}</p>
                  
                  <div className="pt-3 border-t border-white/10 space-y-1">
                    <div className="text-white">{b.phone}</div>
                    <div className="text-slate-400 text-[10px]">{b.hours}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* MULTI-STEP TRANSFER MODAL */}
      <AnimatePresence>
        {isTransferModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0E1624] border border-amber-500/40 rounded-3xl p-6 sm:p-8 max-w-xl w-full relative space-y-6 shadow-2xl font-mono"
            >
              <button 
                onClick={() => setIsTransferModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-2"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Steps Indicator */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs">
                <span className="text-amber-400 font-bold">STEP {transferStep} OF 4</span>
                <span className="text-slate-400">
                  {transferStep === 1 ? 'Amount & Rate' : transferStep === 2 ? 'Destination' : transferStep === 3 ? 'Recipient Info' : 'Review & Confirm'}
                </span>
              </div>

              {transferStep === 5 ? (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-white">Transfer Request Received</h3>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1 text-xs">
                    <span className="text-slate-400 block">REFERENCE ID:</span>
                    <span className="text-lg font-bold text-amber-400">{transferCompleteRef}</span>
                  </div>
                  <p className="text-xs text-slate-300">Funds are being routed via UAE settlement hub to recipient account.</p>
                  <button 
                    onClick={() => setIsTransferModalOpen(false)} 
                    className="w-full py-4 rounded-2xl bg-amber-400 text-black font-extrabold text-xs uppercase"
                  >
                    CLOSE & TRACK STATUS
                  </button>
                </div>
              ) : (
                <form onSubmit={handleStartTransfer} className="space-y-4 text-xs">
                  {transferStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-slate-300 block mb-1">Transfer Amount (AED)</label>
                        <input 
                          type="number"
                          value={sendAmount}
                          onChange={(e) => setSendAmount(Number(e.target.value))}
                          className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white text-base font-bold outline-none"
                        />
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Target Currency:</span>
                          <span className="text-amber-400 font-bold">{selectedCurrency.code} ({selectedCurrency.name})</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Recipient Receives:</span>
                          <span className="text-emerald-400 font-bold">{receiveValue} {selectedCurrency.code}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {transferStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-slate-300 block mb-1">Delivery Rail</label>
                        <select className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none">
                          <option className="bg-[#0E1624]">Direct Bank Account (Instant IMPS/SWIFT)</option>
                          <option className="bg-[#0E1624]">Mobile Wallet (bKash / GCash / Easypaisa)</option>
                          <option className="bg-[#0E1624]">Over-the-Counter Cash Pickup</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {transferStep === 3 && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-slate-300 block mb-1">Recipient Full Legal Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Rajesh Kumar" 
                          value={recipientName}
                          onChange={(e) => setRecipientName(e.target.value)}
                          className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-slate-300 block mb-1">Bank Name / Wallet Provider *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. State Bank of India / HDFC" 
                          value={recipientBank}
                          onChange={(e) => setRecipientBank(e.target.value)}
                          className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-slate-300 block mb-1">Account Number / IBAN / Wallet Mobile *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. 38402910492" 
                          value={recipientIban}
                          onChange={(e) => setRecipientIban(e.target.value)}
                          className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
                        />
                      </div>
                    </div>
                  )}

                  {transferStep === 4 && (
                    <div className="space-y-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Total Debit Amount:</span>
                        <span className="text-white font-bold">AED {(sendAmount + feeAED).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Exchange Rate:</span>
                        <span className="text-amber-400 font-bold">1 AED = {selectedCurrency.rateToAED} {selectedCurrency.code}</span>
                      </div>
                      <div className="flex justify-between border-t border-white/10 pt-2">
                        <span className="text-slate-400">Recipient Gets:</span>
                        <span className="text-emerald-400 font-bold text-base">{receiveValue} {selectedCurrency.code}</span>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                  >
                    {transferStep === 4 ? 'AUTHORIZE SECURE TRANSFER →' : 'NEXT STEP →'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── FAQ ACCORDION (8 ITEMS) ── */}
      <section id="faq" className="py-24 bg-[#070B12] border-b border-amber-500/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-[#0E1624] rounded-2xl border border-white/10 overflow-hidden font-mono text-xs">
                <div className="p-5 font-bold text-sm text-white flex justify-between items-center gap-4">
                  <span>{faq.q}</span>
                  <span className="text-amber-400 text-lg">+</span>
                </div>
                <div className="px-5 pb-5 text-slate-300 leading-relaxed font-sans border-t border-white/5 pt-3">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-20 bg-[#04070D] text-slate-400 text-xs font-mono border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-amber-400" />
              <span className="text-2xl font-extrabold text-white tracking-tight font-mono">
                NOVA <span className="text-amber-400">REMIT</span>
              </span>
            </div>
            <p className="text-slate-400 text-center md:text-right">
              UAE Licensed Money Exchange & Global Remittance Platform • Portfolio Concept
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 NOVA REMIT FINANCIAL EXCHANGE LLC. ALL RIGHTS RESERVED.</p>
            <span className="text-amber-400">256-BIT ENCRYPTED REMITTANCE ENGINE</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default NovaRemitShowcase;
