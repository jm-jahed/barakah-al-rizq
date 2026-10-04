'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare 
} from 'lucide-react';
import { REEFER_ROUTES } from '@/data/reeferData';
import { useReeferTheme } from './ReeferThemeContext';

interface ReeferQuoteCalculatorProps {
  onSuccess?: (summary: string) => void;
}

export default function ReeferQuoteCalculator({ onSuccess }: ReeferQuoteCalculatorProps) {
  const [fromLocation, setFromLocation] = useState<'Al Aweer' | 'JAFZA'>('Al Aweer');
  const [toDestination, setToDestination] = useState<string>('Saudi Arabia');
  const [cargoType, setCargoType] = useState<string>('Frozen Food');
  const [temperature, setTemperature] = useState<number>(-18);
  const [weightTons, setWeightTons] = useState<number>(25);
  const [serviceType, setServiceType] = useState<'Spot / Trip' | 'Annual Contract'>('Spot / Trip');

  // Contact inputs
  const [companyName, setCompanyName] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { isDark } = useReeferTheme();

  const cargoOptions = [
    'Frozen Food',
    'Chilled',
    'Foodstuff',
    'Dairy',
    'Meat',
    'Fruits',
    'Vegetables',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) {
      onSuccess(`From: ${fromLocation} | To: ${toDestination} | Cargo: ${cargoType} | Temp: ${temperature}°C | Payload: ${weightTons} Tons | Service: ${serviceType}`);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Khaleej Reefer Logistics, I would like to request a formal transport quote:
• Origin: ${fromLocation} (Dubai, UAE)
• Destination: ${toDestination}
• Cargo Type: ${cargoType}
• Required Temperature: ${temperature}°C
• Cargo Weight: ${weightTons} Tons (25-Ton Reefer)
• Service Type: ${serviceType}
• Company: ${companyName || 'N/A'}
• Contact: ${contactName || 'N/A'}
• Phone: ${phone || 'N/A'}`;
    return encodeURIComponent(text);
  };

  return (
    <section id="calculator" className={`relative py-24 border-b overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#080C14] border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-mono font-bold shadow-xs ${
            isDark ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-white border-slate-200 text-amber-700'
          }`}>
            <Calculator className="w-4 h-4 text-amber-500" />
            <span>DISPATCH & RATE CONFIGURATOR</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#111111]'}`}>
            REQUEST A TRANSPORT QUOTE
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#4B5563]'}`}>
            Configure your route parameters, required temperature range, and commercial freight requirements for rapid operational assessment.
          </p>
        </div>

        {/* Interactive Calculator Form Container */}
        <div className={`rounded-3xl border shadow-xl p-6 sm:p-12 ${
          isDark ? 'bg-[#0F172A] border-slate-800 text-white' : 'bg-white border-slate-200 text-[#111111]'
        }`}>
          
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto text-emerald-500 shadow-xs ${
                isDark ? 'bg-emerald-950/40 border-emerald-500' : 'bg-emerald-50 border-emerald-500'
              }`}>
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <div className="space-y-2">
                <span className="text-sm font-mono uppercase tracking-widest text-emerald-500 font-bold">
                  INQUIRY REGISTERED SUCCESSFULLY
                </span>
                <h3 className={`text-2xl sm:text-3xl font-black ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                  Transport Quotation Under Review
                </h3>
                <p className={`text-base max-w-lg mx-auto font-medium ${isDark ? 'text-slate-300' : 'text-[#374151]'}`}>
                  Our Dubai logistics team has received your parameters for{' '}
                  <strong className="text-amber-500">{fromLocation} → {toDestination}</strong> at{' '}
                  <strong className="text-sky-400">{temperature}°C</strong>.
                </p>
              </div>

              {/* Summary Card */}
              <div className={`p-5 rounded-2xl border text-sm font-mono max-w-md mx-auto space-y-2 text-left shadow-2xs font-semibold ${
                isDark ? 'bg-slate-900/90 border-slate-800 text-slate-200' : 'bg-[#F8FAFC] border-slate-200 text-[#111111]'
              }`}>
                <div>• ROUTE: Dubai ({fromLocation}) → {toDestination}</div>
                <div>• CARGO: {cargoType} ({weightTons} Tons Payload)</div>
                <div>• TEMPERATURE: {temperature}°C (Carrier Vector Dual-Temp)</div>
                <div>• SERVICE TIER: {serviceType}</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/971508924471?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Directly via WhatsApp For Fast Dispatch</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className={`w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-mono border font-bold cursor-pointer ${
                    isDark ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700' : 'bg-[#F8FAFC] hover:bg-slate-100 text-[#111111] border-slate-300'
                  }`}
                >
                  Adjust Parameters
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Field 01: FROM & TO */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* FROM */}
                <div className="space-y-2.5">
                  <label className="text-sm font-mono uppercase tracking-wider font-bold flex items-center justify-between">
                    <span className={isDark ? 'text-white' : 'text-[#111111]'}>FROM (DUBAI LOADING LOCATION)</span>
                    <span className="text-amber-500 text-xs">ORIGIN HUB</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFromLocation('Al Aweer')}
                      className={`p-4 rounded-2xl border text-sm font-mono font-bold transition-all cursor-pointer ${
                        fromLocation === 'Al Aweer'
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-xs'
                          : isDark
                            ? 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600'
                            : 'bg-[#F8FAFC] text-[#374151] border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      Al Aweer Fruit & Veg
                    </button>
                    <button
                      type="button"
                      onClick={() => setFromLocation('JAFZA')}
                      className={`p-4 rounded-2xl border text-sm font-mono font-bold transition-all cursor-pointer ${
                        fromLocation === 'JAFZA'
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-xs'
                          : isDark
                            ? 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600'
                            : 'bg-[#F8FAFC] text-[#374151] border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      JAFZA Free Zone
                    </button>
                  </div>
                </div>

                {/* TO */}
                <div className="space-y-2.5">
                  <label className="text-sm font-mono uppercase tracking-wider font-bold flex items-center justify-between">
                    <span className={isDark ? 'text-white' : 'text-[#111111]'}>TO (SELECT GCC DESTINATION)</span>
                    <span className="text-sky-400 text-xs">6 DESTINATIONS</span>
                  </label>
                  <select
                    value={toDestination}
                    onChange={(e) => setToDestination(e.target.value)}
                    className={`w-full p-4 rounded-2xl border font-mono text-sm focus:border-amber-500 focus:outline-none shadow-2xs font-bold ${
                      isDark 
                        ? 'bg-slate-900 border-slate-700 text-white' 
                        : 'bg-[#F8FAFC] border-slate-200 text-[#111111]'
                    }`}
                  >
                    {REEFER_ROUTES.map((r) => (
                      <option key={r.id} value={r.country} className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-[#111111]'}>
                        {r.flag} {r.country} (Via {r.borderPost})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Field 02: CARGO TYPE & TEMPERATURE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* CARGO TYPE */}
                <div className="space-y-2.5">
                  <label className={`text-sm font-mono uppercase tracking-wider font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                    CARGO TYPE
                  </label>
                  <select
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                    className={`w-full p-4 rounded-2xl border font-mono text-sm focus:border-amber-500 focus:outline-none shadow-2xs font-bold ${
                      isDark 
                        ? 'bg-slate-900 border-slate-700 text-white' 
                        : 'bg-[#F8FAFC] border-slate-200 text-[#111111]'
                    }`}
                  >
                    {cargoOptions.map((c) => (
                      <option key={c} value={c} className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-[#111111]'}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* TEMPERATURE */}
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-sm font-mono">
                    <span className={`uppercase font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>SELECT REQUIRED TEMPERATURE</span>
                    <span className="text-sky-400 font-black text-base">{temperature > 0 ? `+${temperature}` : temperature}°C</span>
                  </div>
                  <input
                    type="range"
                    min="-18"
                    max="6"
                    step="1"
                    value={temperature}
                    onChange={(e) => setTemperature(parseInt(e.target.value))}
                    className={`w-full h-3 rounded-lg appearance-none cursor-pointer accent-amber-500 ${
                      isDark ? 'bg-slate-800' : 'bg-slate-200'
                    }`}
                  />
                  <div className="flex justify-between text-xs sm:text-sm font-mono text-slate-400 font-semibold">
                    <span>-18°C (Frozen)</span>
                    <span>-10°C</span>
                    <span>0°C (Chill)</span>
                    <span>+4°C (Produce)</span>
                  </div>
                </div>

              </div>

              {/* Field 03: WEIGHT & SERVICE TYPE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* WEIGHT (Up to 25 tons) */}
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-sm font-mono">
                    <span className={`uppercase font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>PAYLOAD WEIGHT (UP TO 25 TONS)</span>
                    <span className="text-amber-500 font-black text-base">{weightTons} TONS</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="25"
                    step="1"
                    value={weightTons}
                    onChange={(e) => setWeightTons(parseInt(e.target.value))}
                    className={`w-full h-3 rounded-lg appearance-none cursor-pointer accent-amber-500 ${
                      isDark ? 'bg-slate-800' : 'bg-slate-200'
                    }`}
                  />
                  <div className="flex justify-between text-xs sm:text-sm font-mono text-slate-400 font-semibold">
                    <span>5 Tons (LTL Min)</span>
                    <span>15 Tons</span>
                    <span className="text-amber-500 font-bold">25 Tons (Full Reefer FTL)</span>
                  </div>
                </div>

                {/* SERVICE TYPE */}
                <div className="space-y-2.5">
                  <label className={`text-sm font-mono uppercase tracking-wider font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                    SERVICE TYPE
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setServiceType('Spot / Trip')}
                      className={`p-3.5 rounded-2xl border text-sm font-mono font-bold transition-all cursor-pointer ${
                        serviceType === 'Spot / Trip'
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-xs'
                          : isDark
                            ? 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600'
                            : 'bg-[#F8FAFC] text-[#374151] border-slate-200'
                      }`}
                    >
                      Spot / Trip Basis
                    </button>
                    <button
                      type="button"
                      onClick={() => setServiceType('Annual Contract')}
                      className={`p-3.5 rounded-2xl border text-sm font-mono font-bold transition-all cursor-pointer ${
                        serviceType === 'Annual Contract'
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-xs'
                          : isDark
                            ? 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600'
                            : 'bg-[#F8FAFC] text-[#374151] border-slate-200'
                      }`}
                    >
                      Annual Contract
                    </button>
                  </div>
                </div>

              </div>

              {/* Company & Contact Information Fields */}
              <div className={`p-6 rounded-3xl border space-y-4 shadow-2xs ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
              }`}>
                <div className="text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-wider font-bold">
                  CONSIGNOR / COMPANY CONTACT DETAILS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Company / Distributor Name *"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className={`p-3.5 rounded-2xl border text-sm font-mono placeholder:text-slate-500 focus:outline-none focus:border-amber-500 font-medium ${
                      isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-[#111111]'
                    }`}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Contact Officer Name *"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className={`p-3.5 rounded-2xl border text-sm font-mono placeholder:text-slate-500 focus:outline-none focus:border-amber-500 font-medium ${
                      isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-[#111111]'
                    }`}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp (+971...) *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`p-3.5 rounded-2xl border text-sm font-mono placeholder:text-slate-500 focus:outline-none focus:border-amber-500 font-medium ${
                      isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-[#111111]'
                    }`}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Official Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`p-3.5 rounded-2xl border text-sm font-mono placeholder:text-slate-500 focus:outline-none focus:border-amber-500 font-medium ${
                      isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-[#111111]'
                    }`}
                  />
                </div>
              </div>

              {/* Pricing Policy Statement */}
              <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-2xs ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
              }`}>
                <div className="flex items-center gap-2.5 text-sm font-mono">
                  <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className={`font-bold tracking-wider uppercase ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                    QUOTE BASED ON ROUTE + CARGO + REQUIREMENTS
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-mono text-slate-400 font-medium">
                  Zero fabricated pricing. Tailored to exact GCC diesel tariffs & customs scope.
                </span>
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-4 px-8 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>REQUEST TRANSPORT QUOTE</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href={`https://wa.me/971508924471?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto px-7 py-4 rounded-xl border font-mono text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-2xs ${
                    isDark 
                      ? 'bg-emerald-950/40 hover:bg-emerald-950/60 border-emerald-500/30 text-emerald-400' 
                      : 'bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-800'
                  }`}
                >
                  <MessageSquare className="w-5 h-5 text-emerald-500" />
                  <span>Instant WhatsApp Inquiry</span>
                </a>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
