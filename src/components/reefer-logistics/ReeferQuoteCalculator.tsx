'use client';

import React, { useState } from 'react';
import {
  Calculator,
  Truck,
  MapPin,
  Thermometer,
  Scale,
  Layers,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Info
} from 'lucide-react';
import { GCC_ROUTES, REEFER_COMPANY_INFO } from '@/data/reeferLogisticsData';

export function ReeferQuoteCalculator() {
  const [origin, setOrigin] = useState('Al Aweer Central Fruit & Vegetable Terminal, Dubai');
  const [destination, setDestination] = useState('Saudi Arabia (Riyadh / Jeddah / Dammam)');
  const [cargoType, setCargoType] = useState('Fresh Fruits & Vegetables');
  const [temperature, setTemperature] = useState('+4°C (Chilled)');
  const [weightTons, setWeightTons] = useState<number>(25);
  const [serviceType, setServiceType] = useState('Spot / Trip Basis');
  const [palletCount, setPalletCount] = useState('33 Euro Pallets (Full Trailer)');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const cargoOptions = [
    'Fresh Fruits & Vegetables',
    'Chilled Dairy Products',
    'Fresh Chilled Meat',
    'Frozen Poultry & Meat',
    'Deep Frozen Food (-18°C)',
    'Commercial Foodstuff & Chocolate',
    'Temperature-Sensitive FMCG',
    'Other Specialized Perishable Cargo'
  ];

  const tempOptions = [
    '-18°C to -25°C (Deep Frozen)',
    '-10°C to -15°C (Deep Cold)',
    '0°C to +2°C (Chilled Meat)',
    '+2°C to +4°C (Chilled Dairy & Berries)',
    '+4°C to +8°C (Fresh Vegetables & Produce)',
    '+12°C to +18°C (Chocolate & Ambient Confectionery)',
    '+18°C to +25°C (Climate Controlled FMCG)'
  ];

  const generateWhatsAppMessage = () => {
    const text = `*TRANS-GCC REEFER TRANSPORT QUOTE INQUIRY*%0A%0A` +
      `*Origin:* ${encodeURIComponent(origin)}%0A` +
      `*Destination:* ${encodeURIComponent(destination)}%0A` +
      `*Cargo Type:* ${encodeURIComponent(cargoType)}%0A` +
      `*Temperature Requirement:* ${encodeURIComponent(temperature)}%0A` +
      `*Weight / Payload:* ${weightTons} Tons (${encodeURIComponent(palletCount)})%0A` +
      `*Service Model:* ${encodeURIComponent(serviceType)}%0A` +
      (companyName ? `*Company:* ${encodeURIComponent(companyName)}%0A` : '') +
      (contactName ? `*Contact Person:* ${encodeURIComponent(contactName)}%0A` : '') +
      (contactPhone ? `*Phone:* ${encodeURIComponent(contactPhone)}%0A` : '') +
      (notes ? `*Special Notes:* ${encodeURIComponent(notes)}%0A` : '') +
      `%0A*Reference:* Dubai to GCC 25-Ton Reefer Logistics Portal`;

    return `https://wa.me/971508924477?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.open(generateWhatsAppMessage(), '_blank');
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-[#070b14] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARENT COMMERCIAL DISPATCH TOOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono uppercase">
            QUOTE CALCULATOR
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Specify your origin hub, GCC destination, temperature range, and cargo payload. Our 24/7 central logistics desk prepares immediate, transparent transport pricing.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0e1628] to-[#080d1a] border border-sky-500/40 p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            
            {/* Left Parameters Configuration */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Origin Selection */}
              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>FROM (DUBAI ORIGIN HUB):</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setOrigin('Al Aweer Central Fruit & Vegetable Terminal, Dubai')}
                    className={`p-3.5 rounded-xl border text-xs font-mono text-left transition-all ${
                      origin.includes('Al Aweer')
                        ? 'bg-sky-950/70 border-sky-400 text-white shadow-lg ring-1 ring-sky-400'
                        : 'bg-black/40 border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className="font-bold">Al Aweer Terminal</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Produce & Fresh Wholesale</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrigin('JAFZA Cold Logistics Corridor, Dubai')}
                    className={`p-3.5 rounded-xl border text-xs font-mono text-left transition-all ${
                      origin.includes('JAFZA')
                        ? 'bg-sky-950/70 border-sky-400 text-white shadow-lg ring-1 ring-sky-400'
                        : 'bg-black/40 border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className="font-bold">JAFZA South Docks</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Port Re-Export & Deep-Frozen</div>
                  </button>
                </div>
              </div>

              {/* Destination Selection */}
              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-amber-400" />
                  <span>TO (GCC DESTINATION):</span>
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-sky-400"
                >
                  {GCC_ROUTES.map((r) => (
                    <option key={r.id} value={`${r.country} (${r.destinationHubs[0]?.split(' ')[0]})`}>
                      {r.flag} {r.country} — {r.destinationHubs.join(', ')}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cargo Type & Temperature in 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    CARGO TYPE:
                  </label>
                  <select
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-sky-400"
                  >
                    {cargoOptions.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    TEMPERATURE REQUIREMENT:
                  </label>
                  <select
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-sky-300 font-bold focus:outline-none focus:border-sky-400"
                  >
                    {tempOptions.map((t, i) => (
                      <option key={i} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Weight / Payload Slider (up to 25 tons) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-sky-400" />
                    <span>WEIGHT / PAYLOAD (UP TO 25 TONS):</span>
                  </label>
                  <span className="text-sm font-bold font-mono text-sky-400 bg-sky-950/40 px-3 py-1 rounded border border-sky-500/30">
                    {weightTons} TONS
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="1"
                  value={weightTons}
                  onChange={(e) => setWeightTons(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
                  <span>5 Tons (Part-Load)</span>
                  <span>15 Tons</span>
                  <span className="text-sky-300 font-bold">25 Tons (Max Reefer Capacity)</span>
                </div>
              </div>

              {/* Service Type Selection */}
              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  <span>SERVICE CONTRACT TYPE:</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setServiceType('Spot / Trip Basis')}
                    className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                      serviceType.includes('Spot')
                        ? 'bg-sky-950/70 border-sky-400 text-white ring-1 ring-sky-400'
                        : 'bg-black/40 border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className="font-bold">Spot / Trip Basis</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Single consignment</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('Fixed Annual Contract')}
                    className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                      serviceType.includes('Annual')
                        ? 'bg-sky-950/70 border-sky-400 text-white ring-1 ring-sky-400'
                        : 'bg-black/40 border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className="font-bold">Annual Contract</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Dedicated weekly capacity</div>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Summary & Submission Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#060a14] p-6 sm:p-8 rounded-2xl border border-white/10">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                    SPECIFICATION BREAKDOWN
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    25T Euro Reefer
                  </span>
                </div>

                {/* Honest Pricing Banner */}
                <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-500/30 mb-6 space-y-1 text-left">
                  <div className="text-[11px] font-mono font-bold text-sky-300 uppercase flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" />
                    <span>QUOTE CALCULATION MODEL</span>
                  </div>
                  <div className="text-sm font-bold text-white font-mono">
                    QUOTE BASED ON ROUTE + CARGO + REQUIREMENTS
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed pt-1">
                    No fabricated or deceptive static pricing. We calculate current fuel index, border customs tariffs, and seasonal capacity for 100% accurate quotes.
                  </p>
                </div>

                {/* Contact Inputs */}
                <div className="space-y-3 text-xs font-mono mb-4">
                  <input
                    type="text"
                    placeholder="Company / Business Name *"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Contact Name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full p-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile / WhatsApp *"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full p-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>
                  <textarea
                    placeholder="Special requirements (e.g., loading date, multi-drop, tail-lift)..."
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 resize-none"
                  />
                </div>
              </div>

              {/* Action Submit Buttons */}
              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 hover:from-sky-400 hover:to-blue-600 text-white font-mono text-xs sm:text-sm font-bold tracking-wider shadow-xl shadow-sky-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>REQUEST TRANSPORT QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 hover:bg-emerald-600/30 text-emerald-300 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant Dispatch via WhatsApp</span>
                </a>
              </div>

            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
