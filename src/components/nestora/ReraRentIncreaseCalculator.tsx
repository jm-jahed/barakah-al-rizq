'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, 
  ShieldCheck, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  Building, 
  Calendar,
  Sparkles,
  Info
} from 'lucide-react';

interface ReraRentIncreaseCalculatorProps {
  onOpenConsultation?: (mandateText?: string) => void;
}

interface CommunityBenchmark {
  name: string;
  benchmarks: {
    [unitType: string]: number; // average annual rent AED
  };
}

const RERA_COMMUNITY_BENCHMARKS: CommunityBenchmark[] = [
  {
    name: 'Downtown Dubai',
    benchmarks: {
      'Studio': 85000,
      '1 Bedroom': 135000,
      '2 Bedroom': 220000,
      '3 Bedroom': 340000,
      '4BR+ Luxury Villa/Penthouse': 550000,
    }
  },
  {
    name: 'Dubai Marina',
    benchmarks: {
      'Studio': 72000,
      '1 Bedroom': 110000,
      '2 Bedroom': 170000,
      '3 Bedroom': 260000,
      '4BR+ Luxury Villa/Penthouse': 420000,
    }
  },
  {
    name: 'Palm Jumeirah',
    benchmarks: {
      'Studio': 95000,
      '1 Bedroom': 160000,
      '2 Bedroom': 260000,
      '3 Bedroom': 420000,
      '4BR+ Luxury Villa/Penthouse': 850000,
    }
  },
  {
    name: 'Dubai Hills Estate',
    benchmarks: {
      'Studio': 68000,
      '1 Bedroom': 98000,
      '2 Bedroom': 165000,
      '3 Bedroom': 280000,
      '4BR+ Luxury Villa/Penthouse': 490000,
    }
  },
  {
    name: 'Business Bay',
    benchmarks: {
      'Studio': 65000,
      '1 Bedroom': 95000,
      '2 Bedroom': 150000,
      '3 Bedroom': 230000,
      '4BR+ Luxury Villa/Penthouse': 380000,
    }
  },
  {
    name: 'DIFC',
    benchmarks: {
      'Studio': 90000,
      '1 Bedroom': 140000,
      '2 Bedroom': 230000,
      '3 Bedroom': 360000,
      '4BR+ Luxury Villa/Penthouse': 600000,
    }
  },
  {
    name: 'Jumeirah Village Circle (JVC)',
    benchmarks: {
      'Studio': 48000,
      '1 Bedroom': 70000,
      '2 Bedroom': 105000,
      '3 Bedroom': 155000,
      '4BR+ Luxury Villa/Penthouse': 210000,
    }
  },
  {
    name: 'Dubai Creek Harbour',
    benchmarks: {
      'Studio': 70000,
      '1 Bedroom': 105000,
      '2 Bedroom': 165000,
      '3 Bedroom': 250000,
      '4BR+ Luxury Villa/Penthouse': 450000,
    }
  }
];

export const ReraRentIncreaseCalculator: React.FC<ReraRentIncreaseCalculatorProps> = ({
  onOpenConsultation
}) => {
  const [selectedCommunity, setSelectedCommunity] = useState<string>('Downtown Dubai');
  const [unitType, setUnitType] = useState<string>('2 Bedroom');
  const [currentRent, setCurrentRent] = useState<number>(180000);

  // Get benchmark average rent
  const benchmarkAverageRent = useMemo(() => {
    const comm = RERA_COMMUNITY_BENCHMARKS.find((c) => c.name === selectedCommunity);
    if (comm && comm.benchmarks[unitType]) {
      return comm.benchmarks[unitType];
    }
    return 180000;
  }, [selectedCommunity, unitType]);

  // RERA Decree No. 43 of 2013 Calculation
  const reraResult = useMemo(() => {
    const diff = benchmarkAverageRent - currentRent;
    const percentageBelow = (diff / benchmarkAverageRent) * 100;

    let allowedIncreasePercent = 0;
    let decreeTier = 'Tier 0: Current rent is within 10% of market average.';

    if (percentageBelow <= 10) {
      allowedIncreasePercent = 0;
      decreeTier = 'Decree Tier 1: Current rent is within 10% of RERA market average. 0% increase permitted.';
    } else if (percentageBelow > 10 && percentageBelow <= 20) {
      allowedIncreasePercent = 5;
      decreeTier = 'Decree Tier 2: Current rent is 11%–20% below RERA benchmark. 5% max increase permitted.';
    } else if (percentageBelow > 20 && percentageBelow <= 30) {
      allowedIncreasePercent = 10;
      decreeTier = 'Decree Tier 3: Current rent is 21%–30% below RERA benchmark. 10% max increase permitted.';
    } else if (percentageBelow > 30 && percentageBelow <= 40) {
      allowedIncreasePercent = 15;
      decreeTier = 'Decree Tier 4: Current rent is 31%–40% below RERA benchmark. 15% max increase permitted.';
    } else if (percentageBelow > 40) {
      allowedIncreasePercent = 20;
      decreeTier = 'Decree Tier 5: Current rent is >40% below RERA benchmark. Statutory maximum 20% increase permitted.';
    }

    const annualIncreaseAmount = (currentRent * allowedIncreasePercent) / 100;
    const newPermissibleRent = currentRent + annualIncreaseAmount;

    return {
      percentageBelow: Math.max(0, percentageBelow).toFixed(1),
      allowedIncreasePercent,
      annualIncreaseAmount,
      newPermissibleRent,
      decreeTier
    };
  }, [currentRent, benchmarkAverageRent]);

  const handleDispatchNotice = () => {
    if (onOpenConsultation) {
      onOpenConsultation(
        `RERA Rent Increase Mandate: ${selectedCommunity} (${unitType}), Current Rent AED ${currentRent.toLocaleString()}, Permitted Increase +${reraResult.allowedIncreasePercent}% (New Rent: AED ${reraResult.newPermissibleRent.toLocaleString()})`
      );
    } else {
      const el = document.getElementById('consultation-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rera-calculator" className="py-24 bg-[#06181A] relative border-b border-[#C5A059]/20">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#0C2D31]/50 blur-[200px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#C5A059]/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C2D31] border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-xl">
            <Scale className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>OFFICIAL DUBAI LAND DEPARTMENT (DLD) LEGAL RULING</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#F4EFE6] tracking-tight leading-tight">
            RERA Rent Increase Calculator.
          </h2>

          <p className="text-sm sm:text-base text-stone-300 font-light mt-3 leading-relaxed">
            Verify the exact legally permitted rent increase for your Dubai property under <strong>Dubai Decree No. 43 of 2013</strong> and prepare formal 90-day renewal notices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Inputs Column */}
          <div className="lg:col-span-6 bg-[#0A2226]/90 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 flex flex-col justify-between">
            
            <div className="space-y-5">
              
              {/* Community Selector */}
              <div>
                <label className="text-xs font-mono text-[#C5A059] uppercase tracking-wider block mb-2 font-semibold">
                  1. SELECT DUBAI PRIME COMMUNITY
                </label>
                <select
                  value={selectedCommunity}
                  onChange={(e) => setSelectedCommunity(e.target.value)}
                  className="w-full bg-[#06181A] border border-stone-700/80 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#F4EFE6] focus:outline-none focus:border-[#C5A059] cursor-pointer"
                >
                  {RERA_COMMUNITY_BENCHMARKS.map((c) => (
                    <option key={c.name} value={c.name} className="bg-[#0A2226] text-[#F4EFE6]">
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Unit Type */}
              <div>
                <label className="text-xs font-mono text-[#C5A059] uppercase tracking-wider block mb-2 font-semibold">
                  2. PROPERTY BEDROOM CONFIGURATION
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Studio', '1 Bedroom', '2 Bedroom', '3 Bedroom', '4BR+ Luxury Villa/Penthouse'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setUnitType(type)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-mono transition-all cursor-pointer ${
                        unitType === type
                          ? 'bg-[#C5A059] text-black font-bold border-[#C5A059]'
                          : 'bg-[#06181A] text-stone-300 border-stone-800 hover:border-stone-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Rent Slider */}
              <div className="space-y-2 pt-2 border-t border-stone-800">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-stone-300">Current Tenancy Contract Rent:</span>
                  <span className="text-sm font-bold text-[#C5A059]">
                    AED {currentRent.toLocaleString()} / year
                  </span>
                </div>
                <input
                  type="range"
                  min={35000}
                  max={700000}
                  step={5000}
                  value={currentRent}
                  onChange={(e) => setCurrentRent(Number(e.target.value))}
                  className="w-full accent-[#C5A059] bg-[#06181A] h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-stone-500">
                  <span>AED 35K</span>
                  <span>AED 350K</span>
                  <span>AED 700K+</span>
                </div>
              </div>

              {/* Benchmark Reference */}
              <div className="p-4 rounded-2xl bg-[#06181A] border border-stone-800 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase">OFFICIAL RERA BENCHMARK AVERAGE:</span>
                  <span className="text-sm font-bold text-white">
                    AED {benchmarkAverageRent.toLocaleString()} / year
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-stone-400 block uppercase">GAP TO AVERAGE:</span>
                  <span className="text-xs font-bold text-amber-300">
                    {reraResult.percentageBelow}% Below Index
                  </span>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-stone-800 flex items-center gap-2 text-[11px] font-mono text-stone-400">
              <Info className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Article 14 of Law No. 33 of 2008 requires 90 days notice prior to lease expiry.</span>
            </div>

          </div>

          {/* Results & Legal Verdict Column */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#0C2D31] to-[#0A2226] border border-[#C5A059]/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider block font-bold">
                    RERA DECREE NO. 43/2013 VERDICT
                  </span>
                  <span className="text-2xl font-serif font-extrabold text-[#F4EFE6]">
                    Legal Rent Increase
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-emerald-400">
                    +{reraResult.allowedIncreasePercent}%
                  </span>
                  <span className="text-[10px] font-mono text-emerald-300 uppercase block font-bold">
                    MAX ALLOWED
                  </span>
                </div>
              </div>

              {/* Big Cards */}
              <div className="grid grid-cols-2 gap-3 my-6 font-mono">
                <div className="p-4 rounded-2xl bg-[#06181A]/90 border border-white/5">
                  <span className="text-[10px] text-stone-400 uppercase block">ANNUAL RENT HIKE:</span>
                  <span className="text-lg font-bold text-emerald-400 block mt-1">
                    +AED {Math.round(reraResult.annualIncreaseAmount).toLocaleString()}
                  </span>
                  <span className="text-[10px] text-stone-500">per annum gain</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#06181A]/90 border border-white/5">
                  <span className="text-[10px] text-stone-400 uppercase block">NEW LEGAL CEILING:</span>
                  <span className="text-lg font-bold text-[#C5A059] block mt-1">
                    AED {Math.round(reraResult.newPermissibleRent).toLocaleString()}
                  </span>
                  <span className="text-[10px] text-stone-500">new tenancy contract</span>
                </div>
              </div>

              {/* Legal Explanation Box */}
              <div className="p-4 rounded-2xl bg-[#06181A] border border-stone-800 space-y-2">
                <span className="text-xs font-mono text-[#C5A059] font-bold uppercase block">
                  STATUTORY RULING SUMMARY:
                </span>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  {reraResult.decreeTier}
                </p>
                <div className="pt-2 border-t border-stone-800/80 flex items-center gap-2 text-[10px] font-mono text-stone-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Legally binding across all Dubai Rental Dispute Settlement Centre tribunals.</span>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleDispatchNotice}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#C5A059]/20 hover:scale-[1.02] transition-transform cursor-pointer"
              >
                <span>Draft 90-Day Landlord Renewal Notice</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] font-mono text-stone-400 text-center">
                Prepared by NESTORA Certified RERA Property Managers
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
