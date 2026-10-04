import React, { useState, useMemo } from 'react';
import { Crown, Check, ShieldCheck, ArrowRight, Award, Gem, Sparkles } from 'lucide-react';

interface MetalChoice {
  id: string;
  name: string;
  karat: string;
  priceDeltaAED: number;
}

const METALS: MetalChoice[] = [
  { id: '18k-yellow', name: '18K Sovereign Yellow Gold', karat: '750 Pure Gold', priceDeltaAED: 0 },
  { id: '18k-white', name: '18K Rhodium White Gold', karat: '750 Pure Gold', priceDeltaAED: 600 },
  { id: '18k-rose', name: '18K Vintage Rose Gold', karat: '750 Pure Gold', priceDeltaAED: 400 },
  { id: 'platinum-950', name: 'Imperial 950 Platinum', karat: '95% Pure Platinum', priceDeltaAED: 3200 }
];

interface DiamondChoice {
  id: string;
  carat: string;
  cut: string;
  colorClarity: string;
  basePriceAED: number;
}

const DIAMOND_TIERS: DiamondChoice[] = [
  { id: '1ct', carat: '1.00 Carat', cut: 'Round Brilliant (Triple Excellent)', colorClarity: 'E Color / VVS1 Clarity', basePriceAED: 16500 },
  { id: '1.5ct', carat: '1.50 Carat', cut: 'Oval Cut (Ideal Symmetry)', colorClarity: 'D Color / VVS1 Clarity', basePriceAED: 28000 },
  { id: '2ct', carat: '2.00 Carat', cut: 'Emerald Cut (Step Facets)', colorClarity: 'E Color / IF (Internally Flawless)', basePriceAED: 48000 },
  { id: '3ct', carat: '3.00 Carat', cut: 'Cushion Modified Brilliant', colorClarity: 'D Color / VVS1 Clarity', basePriceAED: 89000 },
  { id: '5ct', carat: '5.00 Carat', cut: 'Radiant Cut Sovereign', colorClarity: 'D Color / Flawless', basePriceAED: 185000 }
];

interface SettingStyle {
  id: string;
  name: string;
  description: string;
  priceDeltaAED: number;
}

const SETTINGS: SettingStyle[] = [
  { id: 'solitaire-6prong', name: 'Imperial 6-Prong Royal Crown', description: 'Maximum light entry and optical elevation', priceDeltaAED: 0 },
  { id: 'french-pave-halo', name: 'French Pavé Hidden Halo', description: 'Micro-pavé diamonds under the center stone', priceDeltaAED: 2200 },
  { id: 'cathedral-tapered', name: 'Cathedral Tapered Band', description: 'Graceful architectural arch supporting stone', priceDeltaAED: 1800 },
  { id: 'tri-stone-pears', name: 'Three-Stone Pear Side Accents', description: 'Flanked by two 0.35ct matched pear diamonds', priceDeltaAED: 5800 }
];

interface CustomBespokeBuilderProps {
  onAcquireBespoke?: (quote: any) => void;
}

export const CustomBespokeBuilder: React.FC<CustomBespokeBuilderProps> = ({
  onAcquireBespoke
}) => {
  const [selectedMetalId, setSelectedMetalId] = useState<string>('18k-yellow');
  const [selectedDiamondId, setSelectedDiamondId] = useState<string>('2ct');
  const [selectedSettingId, setSelectedSettingId] = useState<string>('solitaire-6prong');
  const [engravingText, setEngravingText] = useState<string>('DUBAI • FOREVER');
  const [ringSize, setRingSize] = useState<string>('US 6.5');

  const selectedMetal = METALS.find(m => m.id === selectedMetalId) || METALS[0];
  const selectedDiamond = DIAMOND_TIERS.find(d => d.id === selectedDiamondId) || DIAMOND_TIERS[2];
  const selectedSetting = SETTINGS.find(s => s.id === selectedSettingId) || SETTINGS[0];

  const totalCalculatedAED = useMemo(() => {
    return selectedDiamond.basePriceAED + selectedMetal.priceDeltaAED + selectedSetting.priceDeltaAED;
  }, [selectedDiamond, selectedMetal, selectedSetting]);

  const handleAcquire = () => {
    const quote = {
      title: `Bespoke Sovereign Solitaire (${selectedDiamond.carat} / ${selectedMetal.name})`,
      metal: selectedMetal.name,
      diamond: selectedDiamond.carat,
      clarity: selectedDiamond.colorClarity,
      setting: selectedSetting.name,
      engraving: engravingText,
      size: ringSize,
      priceAED: totalCalculatedAED
    };

    if (onAcquireBespoke) {
      onAcquireBespoke(quote);
    } else {
      const msg = `Hi Maison D'Or Dubai! I have configured a Bespoke Solitaire Ring:%0A- Center Stone: ${selectedDiamond.carat} (${selectedDiamond.colorClarity})%0A- Metal: ${selectedMetal.name}%0A- Setting: ${selectedSetting.name}%0A- Engraving: "${engravingText}"%0A- Ring Size: ${ringSize}%0A- Quoted Rate: AED ${totalCalculatedAED.toLocaleString()}%0A%0APlease arrange a private atelier viewing at DIFC.`;
      window.open(`https://wa.me/971508822000?text=${msg}`, '_blank');
    }
  };

  return (
    <section id="bespoke-builder" className="py-24 bg-[#0A0908] text-zinc-100 border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>Dubai Bespoke Commissioning Atelier</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Configure Your Sovereign Solitaire
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Customize every parameter in real-time — from GIA certified diamond carat and laser engraving to hand-forged 18K gold and platinum crown settings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Configuration Form */}
          <div className="lg:col-span-7 space-y-8 bg-zinc-900/40 p-6 sm:p-8 rounded-3xl border border-zinc-800">
            
            {/* Step 1: Select Diamond Weight */}
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold block mb-3">
                01. Certified Diamond Carat &amp; Clarity
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DIAMOND_TIERS.map(d => {
                  const isSelected = selectedDiamondId === d.id;
                  return (
                    <div
                      key={d.id}
                      onClick={() => setSelectedDiamondId(d.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 ring-1 ring-amber-500/50'
                          : 'bg-zinc-950/70 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-serif font-bold text-white">{d.carat}</span>
                        <span className="text-xs font-mono text-amber-300 font-bold">AED {d.basePriceAED.toLocaleString()}</span>
                      </div>
                      <p className="text-[10px] font-mono text-zinc-400 mt-1">{d.colorClarity}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Precious Metal */}
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold block mb-3">
                02. Solid Precious Metal Alloy
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {METALS.map(m => {
                  const isSelected = selectedMetalId === m.id;
                  return (
                    <div
                      key={m.id}
                      onClick={() => setSelectedMetalId(m.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 ring-1 ring-amber-500/50'
                          : 'bg-zinc-950/70 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{m.name}</span>
                        {m.priceDeltaAED > 0 ? (
                          <span className="text-[10px] font-mono text-amber-400">+{m.priceDeltaAED} AED</span>
                        ) : (
                          <span className="text-[10px] font-mono text-zinc-500">Standard</span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">{m.karat}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Crown Setting Architecture */}
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold block mb-3">
                03. Crown &amp; Setting Architecture
              </span>
              <div className="space-y-2.5">
                {SETTINGS.map(s => {
                  const isSelected = selectedSettingId === s.id;
                  return (
                    <div
                      key={s.id}
                      onClick={() => setSelectedSettingId(s.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 ring-1 ring-amber-500/50'
                          : 'bg-zinc-950/70 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold text-white block">{s.name}</span>
                        <span className="text-[10px] text-zinc-400">{s.description}</span>
                      </div>
                      <span className="text-xs font-mono text-amber-300 font-bold shrink-0 ml-3">
                        {s.priceDeltaAED > 0 ? `+AED ${s.priceDeltaAED.toLocaleString()}` : 'Included'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Size & Engraving */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-[10px] font-mono text-zinc-400 uppercase block mb-1.5">
                  Ring Size (UAE / US Standard)
                </label>
                <select
                  value={ringSize}
                  onChange={(e) => setRingSize(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white font-mono focus:outline-none focus:border-amber-500"
                >
                  <option value="US 5 (49.3mm)">US 5.0 (49.3mm)</option>
                  <option value="US 5.5 (50.6mm)">US 5.5 (50.6mm)</option>
                  <option value="US 6 (51.9mm)">US 6.0 (51.9mm)</option>
                  <option value="US 6.5 (53.1mm)">US 6.5 (53.1mm)</option>
                  <option value="US 7 (54.4mm)">US 7.0 (54.4mm)</option>
                  <option value="US 7.5 (55.7mm)">US 7.5 (55.7mm)</option>
                  <option value="US 8 (57.0mm)">US 8.0 (57.0mm)</option>
                  <option value="Custom Quarter-Size">Custom Quarter Size (Bespoke)</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-mono text-zinc-400 uppercase block mb-1.5">
                  Complimentary Inside Band Engraving
                </label>
                <input
                  type="text"
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value)}
                  placeholder="e.g. A &amp; J • 2026"
                  maxLength={28}
                  className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white font-mono focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Live Atelier Quotation & Order Summary */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 sm:p-8 rounded-3xl border border-amber-500/30 sticky top-28 shadow-2xl shadow-amber-950/40 space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400 block mb-1">
                Atelier Commission Dossier
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Bespoke Solitaire Quote
              </h3>
            </div>

            {/* Spec breakdown table */}
            <div className="space-y-3 font-mono text-xs divide-y divide-zinc-800">
              <div className="flex items-center justify-between pt-2">
                <span className="text-zinc-400">Center Stone:</span>
                <span className="text-white font-bold">{selectedDiamond.carat} ({selectedDiamond.colorClarity})</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-zinc-400">Alloy Selection:</span>
                <span className="text-white font-bold">{selectedMetal.name}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-zinc-400">Setting Style:</span>
                <span className="text-white font-bold">{selectedSetting.name}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-zinc-400">Inside Engraving:</span>
                <span className="text-amber-300 font-bold">&quot;{engravingText || 'None'}&quot;</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-zinc-400">Ring Size:</span>
                <span className="text-white font-bold">{ringSize}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-zinc-400">Certification:</span>
                <span className="text-emerald-400 font-bold">GIA Origin Dossier</span>
              </div>
            </div>

            {/* Total Price Box */}
            <div className="p-5 rounded-2xl bg-black/60 border border-amber-500/20">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                Total Sovereign Investment
              </span>
              <div className="text-3xl font-mono font-bold text-amber-300">
                AED {totalCalculatedAED.toLocaleString()}
              </div>
              <span className="text-[10px] text-zinc-500 font-mono block mt-1">
                Includes statutory UAE VAT, GIA report &amp; insured armored delivery.
              </span>
            </div>

            {/* Action CTA */}
            <div className="space-y-2.5">
              <button
                onClick={handleAcquire}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-zinc-950 font-black font-mono text-xs uppercase tracking-widest shadow-xl shadow-amber-950/50 transition-all flex items-center justify-center gap-2"
              >
                <span>Reserve Custom Commission</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center">
                <span className="text-[10px] font-mono text-zinc-500">
                  Lead time: 10–14 days handcrafted at DIFC Gate Village Atelier
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
