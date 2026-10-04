'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Info } from 'lucide-react';

interface SetupCalculatorProps {
  onOpenConsultationWithQuote: (quoteAmount: number, detailsText: string) => void;
}

export const SetupCalculator: React.FC<SetupCalculatorProps> = ({ onOpenConsultationWithQuote }) => {
  const [entityType, setEntityType] = useState('LLC');
  const [location, setLocation] = useState('Dubai');
  const [employeeRange, setEmployeeRange] = useState('1–5');
  const [officeType, setOfficeType] = useState('Flexi Desk');

  // Base advisory calculations
  let advisoryFee = 7500;
  if (entityType === 'Free Zone Company') advisoryFee = 5500;
  if (entityType === 'Branch') advisoryFee = 9500;
  if (entityType === 'Holding Company') advisoryFee = 14500;

  let proFee = 3500;
  if (employeeRange === '6–20') proFee = 5500;
  if (employeeRange === '21–50') proFee = 8500;
  if (employeeRange === '50+') proFee = 12500;

  let structuringFee = 2500;
  if (officeType === 'Physical Office') structuringFee = 4500;
  if (location === 'Abu Dhabi' || location === 'Dubai') structuringFee += 1000;

  const totalProfessionalFee = advisoryFee + proFee + structuringFee;
  const summaryDetails = `${entityType} in ${location} • ${employeeRange} Employees • ${officeType}`;

  return (
    <section id="calculator" className="py-24 bg-[#121417] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            INTERACTIVE ESTIMATION CONSOLE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
            Estimate Your UAE Setup.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Calculate estimated professional advisory, PRO coordination, and corporate structuring fees based on your business model.
          </p>
        </div>

        {/* Calculator Box */}
        <div className="bg-[#1A1D24] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto font-mono text-xs">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Business Type */}
            <div className="p-4 rounded-2xl bg-[#121417] border border-stone-800 space-y-1">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">BUSINESS ENTITY TYPE</label>
              <select
                value={entityType}
                onChange={(e) => setEntityType(e.target.value)}
                className="w-full bg-transparent text-[#F7F6F2] font-serif font-bold text-sm focus:outline-none"
              >
                <option value="LLC" className="bg-[#121417]">Mainland Commercial LLC</option>
                <option value="Free Zone Company" className="bg-[#121417]">Free Zone Establishment (FZE)</option>
                <option value="Branch" className="bg-[#121417]">Foreign / GCC Company Branch</option>
                <option value="Holding Company" className="bg-[#121417]">DIFC / ADGM Holding Foundation</option>
              </select>
            </div>

            {/* Jurisdiction Location */}
            <div className="p-4 rounded-2xl bg-[#121417] border border-stone-800 space-y-1">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">JURISDICTION LOCATION</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-[#F7F6F2] font-serif font-bold text-sm focus:outline-none"
              >
                <option value="Dubai" className="bg-[#121417]">Dubai (DED / IFZA / DMCC / DIFC)</option>
                <option value="Abu Dhabi" className="bg-[#121417]">Abu Dhabi (ADDED / ADGM)</option>
                <option value="Sharjah" className="bg-[#121417]">Sharjah (SEDD / Shams)</option>
                <option value="RAK" className="bg-[#121417]">Ras Al Khaimah (RAKEZ)</option>
              </select>
            </div>

            {/* Employee Count */}
            <div className="p-4 rounded-2xl bg-[#121417] border border-stone-800 space-y-1">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">EMPLOYEE / VISA COUNT</label>
              <select
                value={employeeRange}
                onChange={(e) => setEmployeeRange(e.target.value)}
                className="w-full bg-transparent text-[#F7F6F2] font-serif font-bold text-sm focus:outline-none"
              >
                <option value="1–5" className="bg-[#121417]">1–5 Visas (Startup / SME)</option>
                <option value="6–20" className="bg-[#121417]">6–20 Visas (Growth Tier)</option>
                <option value="21–50" className="bg-[#121417]">21–50 Visas (Enterprise)</option>
                <option value="50+" className="bg-[#121417]">50+ Visas (Corporate Fleet)</option>
              </select>
            </div>

            {/* Office Space Requirement */}
            <div className="p-4 rounded-2xl bg-[#121417] border border-stone-800 space-y-1">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">OFFICE REQUIREMENT</label>
              <select
                value={officeType}
                onChange={(e) => setOfficeType(e.target.value)}
                className="w-full bg-transparent text-[#F7F6F2] font-serif font-bold text-sm focus:outline-none"
              >
                <option value="Virtual" className="bg-[#121417]">Virtual Address / Smart Desk</option>
                <option value="Flexi Desk" className="bg-[#121417]">Flexi Desk / Co-working Space</option>
                <option value="Physical Office" className="bg-[#121417]">Dedicated Physical Commercial Office</option>
              </select>
            </div>

          </div>

          {/* Breakdown Result Box */}
          <div className="p-6 rounded-2xl bg-[#121417] border border-stone-800 space-y-3 font-mono text-xs mb-8">
            <div className="flex justify-between text-stone-300">
              <span>Professional Business Advisory:</span>
              <span>AED {advisoryFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-stone-400">
              <span>PRO Government Coordination:</span>
              <span>AED {proFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-stone-400">
              <span>Corporate Structuring & Banking Prep:</span>
              <span>AED {structuringFee.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-white font-bold text-base pt-3 border-t border-stone-800">
              <span>ESTIMATED PROFESSIONAL ADVISORY FEES:</span>
              <span className="text-[#D4AF37]">AED {totalProfessionalFee.toLocaleString()}+</span>
            </div>
          </div>

          {/* Notice Box */}
          <div className="p-4 rounded-xl bg-[#121417]/80 border border-stone-800 flex items-center gap-3 text-[11px] text-stone-400 mb-8">
            <Info className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
            <span>
              <strong>Crucial Distinction:</strong> Professional Advisory Fees (NEXORA service) ≠ Government / Free Zone / DED licensing fees. Official government fees apply based on exact business activity.
            </span>
          </div>

          {/* Trigger Button */}
          <button
            onClick={() => onOpenConsultationWithQuote(totalProfessionalFee, summaryDetails)}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition-all"
          >
            <span>Get Detailed Itemized Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
};
