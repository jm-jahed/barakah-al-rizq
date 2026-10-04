'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Coins, TrendingUp, Activity, ArrowRight, CheckCircle2, MapPin, Phone, Mail, Clock, MessageSquare, Building2, Sliders, X, Send, Award, Wallet, ArrowUpDown, KeyRound, FileText, DollarSign, ChevronRight } from 'lucide-react';

// Custody Assets Data
const CUSTODY_ASSETS = [
  {
    id: 'aedt',
    name: 'UAE Dirham Stablecoin (AEDT)',
    type: 'Fiat-Backed Stablecoin',
    apy: 6.8,
    apyFormatted: '6.8% APY',
    minDeposit: 'AED 250,000',
    description: 'VARA-regulated 1:1 UAE Dirham backed digital asset yielding daily compounding interest backed by Central Bank short-term Sukuk.',
    features: ['Instant T+0 UAE IBAN Settlement', '100% Cash-Backed Reserve Audits', 'Zero Slippage Conversion', 'DIFC Legal Title Custody'],
    badge: 'High Yield',
    icon: '🇦🇪'
  },
  {
    id: 'eth-staking',
    name: 'Ethereum (ETH) Institutional Staking',
    type: 'Proof-of-Stake Yield',
    apy: 4.2,
    apyFormatted: '4.2% APY',
    minDeposit: '32 ETH (~AED 420,000)',
    description: 'Non-custodial validator node infrastructure running on dedicated Swiss and UAE nodes with slashed-asset insurance protection.',
    features: ['Slashing Insurance Coverage', 'Daily Staking Rewards Payout', 'MPC Key Isolation', 'Institutional Telemetry'],
    badge: 'Core Staking',
    icon: 'Ξ'
  },
  {
    id: 'btc-cold',
    name: 'Bitcoin (BTC) Subterranean Cold Vault',
    type: 'Ultra-Secure Storage',
    apy: 0,
    apyFormatted: 'Cold Storage',
    minDeposit: 'AED 500,000',
    description: 'Air-gapped offline Hardware Security Modules (HSM) stored in subterranean vaults with 3-of-5 threshold signing keys across DIFC & Zurich.',
    features: ['Air-Gapped Hardware Security', 'Lloyds of London $250M Insurance', '3-of-5 Multi-Sig Approval', 'Biometric Vault Access'],
    badge: 'Maximum Defense',
    icon: '₿'
  },
  {
    id: 'sol-staking',
    name: 'Solana (SOL) High-Performance Staking',
    type: 'Delegated Proof-of-Stake',
    apy: 7.1,
    apyFormatted: '7.1% APY',
    minDeposit: 'AED 150,000',
    description: 'Enterprise validator nodes optimized for high MEV yields and continuous compounding returns for institutional treasuries.',
    features: ['MEV Rewards Boost Included', 'Instant Unstaking Liquidity Buffer', '24/7 Node Telemetry', 'Quarterly Deloitte Audit'],
    badge: 'Top Return',
    icon: '◎'
  }
];

// OTC Liquidity Pairs
const OTC_PAIRS = [
  { pair: 'BTC/AED', rate: 242500, spread: '0.05%' },
  { pair: 'ETH/AED', rate: 13150, spread: '0.08%' },
  { pair: 'USDT/AED', rate: 3.673, spread: '0.01%' },
  { pair: 'SOL/AED', rate: 580, spread: '0.12%' },
];

export const NexusShowcase: React.FC = () => {
  // ── ADVANCED FUNCTION 1: STAKING YIELD ESTIMATOR STATE ──
  const [selectedAssetId, setSelectedAssetId] = useState<string>('aedt');
  const [depositAmount, setDepositAmount] = useState<number>(1000000); // AED 1M
  const [lockupMonths, setLockupMonths] = useState<number>(12);

  // ── ADVANCED FUNCTION 2: OTC LIQUIDITY QUOTE ENGINE STATE ──
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [selectedPairIdx, setSelectedPairIdx] = useState<number>(0);
  const [tradeVolumeAed, setTradeVolumeAed] = useState<number>(500000);
  const [quoteLocked, setQuoteLocked] = useState<boolean>(false);

  // ── ADVANCED FUNCTION 3: MPC VAULT KEY CONFIGURATOR STATE ──
  const [thresholdScheme, setThresholdScheme] = useState<string>('3-of-5');
  const [timeLockHours, setTimeLockHours] = useState<number>(24);
  const [hasZurichBackup, setHasZurichBackup] = useState<boolean>(true);

  // ── ADVANCED FUNCTION 4: CONTACT & KYC FORM STATE ──
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [service, setService] = useState<string>('mpc-custody');
  const [message, setMessage] = useState<string>('');

  // Calculations for Function 1 (Yield)
  const activeAsset = CUSTODY_ASSETS.find(a => a.id === selectedAssetId) || CUSTODY_ASSETS[0];
  const annualYieldAed = Math.round((depositAmount * activeAsset.apy) / 100);
  const monthlyPayoutAed = Math.round(annualYieldAed / 12);
  const totalReturnAed = Math.round(depositAmount + (annualYieldAed * (lockupMonths / 12)));

  // Calculations for Function 2 (OTC Quote)
  const activePair = OTC_PAIRS[selectedPairIdx];
  const cryptoReceived = (tradeVolumeAed / activePair.rate).toFixed(4);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#05090E] text-gray-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* ── TOP NAV BAR ── */}
      <header className="sticky top-0 z-40 bg-[#05090E]/90 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <div className="w-full h-full bg-[#05090E] rounded-[10px] flex items-center justify-center">
                <Lock className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                NEXUS <span className="text-cyan-400">VAULT</span>
              </span>
              <span className="block text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">
                VARA License #90481 • DIFC Dubai
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-gray-300">
            <a href="#yield-calc" className="hover:text-cyan-400 transition-colors">YIELD ENGINE</a>
            <a href="#otc-desk" className="hover:text-cyan-400 transition-colors">OTC LIQUIDITY</a>
            <a href="#mpc-config" className="hover:text-cyan-400 transition-colors">MPC SECURITY</a>
            <a href="#assets" className="hover:text-cyan-400 transition-colors">CUSTODY ASSETS</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">ONBOARDING HUB</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer flex items-center gap-2"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>INSTITUTIONAL KYC</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-cyan-500/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[180px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Dubai Virtual Assets Regulatory Authority (VARA) Licensed</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Institutional Crypto <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-500 bg-clip-text text-transparent">
                  Custody & Yield.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
                Dubai’s premier VARA-regulated Multi-Party Computation (MPC) cold custody vault, instant AED fiat settlement, and high-yield staking for GCC family offices and asset managers.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#yield-calc"
                  className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
                >
                  <span>CALCULATE STAKING YIELD</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#otc-desk"
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <ArrowUpDown className="w-4 h-4 text-cyan-400" />
                  <span>OTC AED SETTLEMENT</span>
                </a>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">AED 8.4B</span>
                  <span className="text-xs text-gray-400 font-mono">Assets Under Custody</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">$250M</span>
                  <span className="text-xs text-gray-400 font-mono">Lloyd's Insured Vault</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">6.8%</span>
                  <span className="text-xs text-gray-400 font-mono">Max AEDT Stablecoin APY</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-cyan-500/30 to-blue-600/10 border border-cyan-500/30 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img 
                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80" 
                    alt="Nexus Vault Control" 
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05090E] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#05090E]/90 border border-cyan-500/30 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                        <Lock className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-white uppercase">DIFC Innovation One • Level 14</h4>
                        <p className="text-[11px] text-gray-400">24/7 Sovereign MPC Vault Telemetry</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ADVANCED FUNCTION 1: STAKING & YIELD CALCULATOR ── */}
      <section id="yield-calc" className="py-24 bg-[#080E17] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 1: INSTITUTIONAL YIELD ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
              Calculate Staking Returns
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Project daily compounding interest and total returns across VARA-compliant stablecoins and proof-of-stake assets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Controls */}
            <div className="lg:col-span-7 bg-[#0E1624] p-8 rounded-3xl border border-white/10 space-y-6">
              
              {/* Asset Selector */}
              <div>
                <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-3">Select Yield Asset</label>
                <div className="grid grid-cols-2 gap-3">
                  {CUSTODY_ASSETS.map((ast) => (
                    <button
                      key={ast.id}
                      type="button"
                      onClick={() => setSelectedAssetId(ast.id)}
                      className={`p-3.5 rounded-xl font-mono text-xs font-bold uppercase text-left transition-all cursor-pointer border flex items-center justify-between ${
                        selectedAssetId === ast.id
                          ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                          : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                      }`}
                    >
                      <span>{ast.icon} {ast.name.split(' ')[0]}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-black/30">{ast.apyFormatted}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Deposit Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">Principal Allocation</label>
                  <span className="text-sm font-mono font-extrabold text-cyan-400">AED {depositAmount.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min={250000} 
                  max={10000000} 
                  step={250000}
                  value={depositAmount} 
                  onChange={(e) => setDepositAmount(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Lockup Duration */}
              <div>
                <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-2">Staking Lockup Duration</label>
                <div className="grid grid-cols-3 gap-3">
                  {[3, 6, 12].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setLockupMonths(m)}
                      className={`py-2.5 rounded-xl font-mono text-xs font-bold uppercase transition-all cursor-pointer ${
                        lockupMonths === m 
                          ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
                          : 'bg-white/5 text-gray-400 border border-white/10 hover:text-white'
                      }`}
                    >
                      {m} Months
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Output Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#132034] to-[#080E17] p-8 rounded-3xl border border-cyan-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest block">
                Projected Staking Yield ({activeAsset.apyFormatted})
              </span>

              <div className="text-5xl font-extrabold font-mono text-white tracking-tight">
                AED {annualYieldAed.toLocaleString()} <span className="text-xs text-cyan-400 font-sans font-bold">/ Year</span>
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full font-mono text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                Monthly Payout: AED {monthlyPayoutAed.toLocaleString()} / Mo
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="block text-[11px] font-mono text-gray-400 uppercase">Total Portfolio Value At Maturity</span>
                <span className="text-3xl font-extrabold text-white font-mono">AED {totalReturnAed.toLocaleString()}</span>
              </div>

              <a
                href="#contact"
                className="block w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
              >
                ENABLE INSTITUTIONAL STAKING
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── ADVANCED FUNCTION 2: LIVE OTC LIQUIDITY QUOTE ENGINE ── */}
      <section id="otc-desk" className="py-24 bg-[#05090E] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 2: LIVE OTC AED SETTLEMENT ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
              Institutional OTC Liquidity Desk
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Convert large digital asset volumes into UAE Dirhams (AED) with zero slippage and sub-15 minute bank wire settlement.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-[#0E1624] p-8 rounded-3xl border border-cyan-500/30 shadow-2xl">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              
              {/* Pair Selector */}
              <div>
                <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-2">Select OTC Currency Pair</label>
                <select
                  value={selectedPairIdx}
                  onChange={(e) => setSelectedPairIdx(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none"
                >
                  {OTC_PAIRS.map((p, idx) => (
                    <option key={p.pair} value={idx} className="bg-[#0E1624]">
                      {p.pair} (Spread: {p.spread})
                    </option>
                  ))}
                </select>
              </div>

              {/* Trade Volume */}
              <div>
                <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-2">Trade Volume in AED</label>
                <input 
                  type="number"
                  step={50000}
                  value={tradeVolumeAed}
                  onChange={(e) => setTradeVolumeAed(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none"
                />
              </div>

            </div>

            {/* Live Rate Box */}
            <div className="p-6 rounded-2xl bg-[#05090E] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mb-6">
              <div>
                <span className="text-xs font-mono text-gray-400 block uppercase">Reference Rate</span>
                <span className="text-xl font-extrabold text-white font-mono">1 Asset = {activePair.rate.toLocaleString()} AED</span>
              </div>
              <div>
                <span className="text-xs font-mono text-gray-400 block uppercase">Estimated Digital Asset Units</span>
                <span className="text-xl font-extrabold text-cyan-400 font-mono">{cryptoReceived} {activePair.pair.split('/')[0]}</span>
              </div>
            </div>

            <button
              onClick={() => setQuoteLocked(true)}
              className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
            >
              {quoteLocked ? '✓ OTC QUOTE LOCKED (VALID FOR 60 SECONDS)' : 'LOCK INSTANT OTC AED QUOTE'}
            </button>

          </div>

        </div>
      </section>

      {/* ── ADVANCED FUNCTION 3: MPC VAULT KEY CONFIGURATOR ── */}
      <section id="mpc-config" className="py-24 bg-[#080E17] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <KeyRound className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 3: MPC CUSTODY KEY CONFIGURATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
              MPC Security Key Architecture
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Configure threshold signing shares, subterranean air-gap locations, and automated time-lock delay controls.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#0E1624] p-8 rounded-3xl border border-cyan-500/30 shadow-2xl space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['2-of-3', '3-of-5', '4-of-7'].map((scheme) => (
                <button
                  key={scheme}
                  type="button"
                  onClick={() => setThresholdScheme(scheme)}
                  className={`p-4 rounded-xl font-mono text-xs font-bold uppercase transition-all cursor-pointer border ${
                    thresholdScheme === scheme
                      ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:text-white'
                  }`}
                >
                  Threshold Scheme: {scheme}
                </button>
              ))}
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono font-bold text-gray-300 uppercase">Withdrawal Time-Lock Delay</label>
                <span className="text-sm font-mono font-extrabold text-cyan-400">{timeLockHours} Hours</span>
              </div>
              <input 
                type="range" 
                min={0} 
                max={48} 
                step={6}
                value={timeLockHours} 
                onChange={(e) => setTimeLockHours(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-white/10 h-2 rounded-lg cursor-pointer"
              />
            </div>

            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-between text-xs font-mono">
              <span>Selected Architecture: <strong>{thresholdScheme} Threshold + {timeLockHours}h Time-Lock</strong></span>
              <span className="text-cyan-400 font-bold">100/100 Sovereign Rating</span>
            </div>

          </div>

        </div>
      </section>

      {/* ── FULL REAL-WORLD CONTACT & ONBOARDING HUB ── */}
      <section id="contact" className="py-24 bg-[#05090E] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>FULL CONTACT & ONBOARDING EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
              Connect With Nexus Vault
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Direct connection to our DIFC Institutional Custody Desk and VARA Compliance Officers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="p-8 rounded-3xl bg-[#0E1624] border border-cyan-500/30 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">DIFC Institutional HQ</h3>
                    <p className="text-xs font-mono text-gray-400">Innovation One, Level 14, Dubai</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs font-mono text-gray-300 border-t border-white/10 pt-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>DIFC Innovation One, Level 14, Gate District, Dubai, UAE</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a href="tel:+97144882211" className="hover:text-cyan-400 transition-colors">+971 4 488 2211 (Custody Desk)</a>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a href="https://wa.me/971503349900" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">+971 50 334 9900 (WhatsApp Institutional)</a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a href="mailto:custody@nexusvault.ae" className="hover:text-cyan-400 transition-colors">custody@nexusvault.ae</a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <span>24/7/365 Automated Vault & OTC Trading Desk</span>
                  </div>
                </div>

                {/* Direct Action CTAs */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a 
                    href="tel:+97144882211"
                    className="py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono text-xs text-center transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>CALL DESK</span>
                  </a>
                  <a 
                    href="https://wa.me/971503349900" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 hover:text-black text-emerald-400 font-bold font-mono text-xs text-center border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WHATSAPP</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-[#0E1624] p-8 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl relative">
              
              {formSubmitted ? (
                <div className="text-center py-16 space-y-6">
                  <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
                  <h3 className="text-3xl font-extrabold text-white font-mono">Institutional Onboarding Initiated</h3>
                  <p className="text-xs text-gray-300 font-mono max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. Our VARA Compliance Officer at DIFC Innovation One will transmit the KYC onboarding pack to <strong>{email}</strong> within 1 hour.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-cyan-500 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-mono">Institutional Onboarding Form</h3>
                    <p className="text-xs font-mono text-gray-400 mt-1">Direct request for VARA compliant vault custody & OTC liquidity desk.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Full Legal Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Mansoor Al-Ghurair"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Corporate Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="mansoor@alghurair.ae"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Phone Number (UAE/Intl) *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+971 50 334 9900"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Institution / Entity Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Gulf Sovereign Asset Mgmt"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Custody & Yield Requirement</label>
                    <select 
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none"
                    >
                      <option value="mpc-custody" className="bg-[#0E1624]">MPC Cold Vault Custody (Lloyds Insured)</option>
                      <option value="aedt-staking" className="bg-[#0E1624]">UAE Dirham Stablecoin (AEDT 6.8% APY)</option>
                      <option value="eth-staking" className="bg-[#0E1624]">Institutional ETH / SOL Staking Node</option>
                      <option value="otc-desk" className="bg-[#0E1624]">OTC Liquidity & AED Bank Settlement</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Target Asset Allocation & Requirements</label>
                    <textarea 
                      rows={4}
                      placeholder="Specify total target custody volume (e.g. AED 10M+), preferred lockup, and regulatory jurisdiction..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT INSTITUTIONAL KYC INQUIRY</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-20 bg-[#030508] text-gray-400 text-xs font-mono border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-cyan-400" />
              <span className="text-2xl font-extrabold text-white tracking-tight font-mono">
                NEXUS <span className="text-cyan-400">VAULT</span> DUBAI
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              Innovation One Level 14 • DIFC Gate District, Dubai, UAE
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 NEXUS DIGITAL ASSET CUSTODY FZ-LLC. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-6">
              <span className="text-cyan-400">VARA LICENSE #90481</span>
              <span>DIFC AUTHORIZED CUSTODIAN</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default NexusShowcase;
