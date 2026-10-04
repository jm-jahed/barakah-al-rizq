'use client';

import React, { useState } from 'react';
import { ShieldCheck, Building2, UserCheck, Video, Key, Calendar, MapPin, ArrowRight, CheckCircle2, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';
import { AEGIS_BRAND } from '@/data/aegisSecurityData';

export default function InteractiveSecurityAssessment() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  // Step 1: Property
  const [propertyType, setPropertyType] = useState<string>('Corporate');
  
  // Step 2: Requirements (Multi-select)
  const [selectedRequirements, setSelectedRequirements] = useState<string[]>(['Manned Guarding', 'AI Surveillance']);

  // Step 3: Coverage Scope & Scale
  const [coverageScope, setCoverageScope] = useState<string>('24/7 Continuous');
  const [guardsCount, setGuardsCount] = useState<number>(4);
  const [emirateLocation, setEmirateLocation] = useState<string>('Dubai');

  // Step 4: Contact & Submission
  const [fullName, setFullName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [assessmentRef, setAssessmentRef] = useState<string>('');

  const propertyOptions = [
    { id: 'Corporate', label: 'Corporate Headquarters / Tower', desc: 'DIFC, Downtown, Business Bay' },
    { id: 'Residential', label: 'Luxury Villa / Private Estate', desc: 'Palm Jumeirah, Emirates Hills' },
    { id: 'Retail', label: 'Luxury Boutique / Mall Asset', desc: 'High-Value Horology & Retail' },
    { id: 'Industrial', label: 'Industrial Facility / Warehouse', desc: 'JAFZA, KIZAD, Port Hubs' },
    { id: 'Construction', label: 'Construction & Mega-Project', desc: 'Development Site & Material Security' },
    { id: 'Event', label: 'VIP Gala / Global Summit', desc: 'Conference & Delegation Protection' }
  ];

  const requirementOptions = [
    { id: 'Manned Guarding', label: 'Manned Static Guarding', icon: ShieldCheck },
    { id: 'Executive Protection', label: 'Executive VIP Protection (CPO)', icon: UserCheck },
    { id: 'AI Surveillance', label: 'AI CCTV & Remote SOC Monitoring', icon: Video },
    { id: 'Access Control', label: 'Biometric Access & Smart Gates', icon: Key },
    { id: 'Event Security', label: 'Event Crowd & Protocol Security', icon: Calendar },
    { id: 'Consultancy', label: 'Risk Assessment & SIRA Audit', icon: ShieldAlert }
  ];

  const toggleRequirement = (id: string) => {
    if (selectedRequirements.includes(id)) {
      if (selectedRequirements.length > 1) {
        setSelectedRequirements(selectedRequirements.filter(r => r !== id));
      }
    } else {
      setSelectedRequirements([...selectedRequirements, id]);
    }
  };

  // Estimate Calculation in AED
  let baseMonthlyAED = 14500;
  if (propertyType === 'Corporate') baseMonthlyAED = 18000;
  if (propertyType === 'Industrial') baseMonthlyAED = 16000;
  if (propertyType === 'Residential') baseMonthlyAED = 15000;
  if (propertyType === 'Event') baseMonthlyAED = 12000;

  const guardsMultiplier = Math.max(1, guardsCount * 0.85);
  const reqMultiplier = 1 + (selectedRequirements.length - 1) * 0.25;

  const estimatedMonthlyAED = Math.round(baseMonthlyAED * guardsMultiplier * reqMultiplier);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `AEGIS-RA-${Math.floor(100000 + Math.random() * 900000)}`;
    setAssessmentRef(refCode);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello AEGIS Sovereign Command,\n\nI completed a Security Risk Assessment on your portal:\n• Ref: ${assessmentRef || 'AEGIS-RA-DEMO'}\n• Principal: ${fullName || 'Client'}\n• Organization: ${companyName || 'Enterprise'}\n• Property: ${propertyType}\n• Emirates: ${emirateLocation}\n• Requirements: ${selectedRequirements.join(', ')}\n• Coverage: ${coverageScope} (${guardsCount} Personnel Assigned)\n• Estimated Budget: AED ${estimatedMonthlyAED.toLocaleString()} / month\n\nPlease assign a Senior Security Advisor to review our operational threat profile.`
  );

  return (
    <section id="assessment" className="py-24 bg-[#03060C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>DISCRETE THREAT AUDIT &bull; 4-STEP WIZARD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Understand Your Risk. Build Your Security.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Select your property category, protection disciplines, and coverage parameters to receive an instant UAE threat profile and indicative AED budget.
          </p>
        </div>

        {/* Multi-step Assessment Wizard Box */}
        <div className="max-w-5xl mx-auto bg-[#080D18] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {!submitted ? (
            <div>
              {/* Progress Steps Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
                {[
                  { step: 1, label: '01 &bull; PROPERTY' },
                  { step: 2, label: '02 &bull; REQUIREMENT' },
                  { step: 3, label: '03 &bull; COVERAGE' },
                  { step: 4, label: '04 &bull; CONTACT' }
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                        currentStep >= s.step
                          ? 'bg-cyan-500 text-slate-950 font-black'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {s.step}
                    </div>
                    <span
                      className={`text-xs font-mono font-bold hidden md:inline ${
                        currentStep >= s.step ? 'text-white' : 'text-slate-500'
                      }`}
                      dangerouslySetInnerHTML={{ __html: s.label }}
                    />
                  </div>
                ))}
              </div>

              {/* STEP 1: PROPERTY */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Step 1: What type of environment requires protection?
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Select the primary facility category to tailor the threat matrix.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {propertyOptions.map((prop) => (
                      <button
                        key={prop.id}
                        type="button"
                        onClick={() => setPropertyType(prop.id)}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          propertyType === prop.id
                            ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-950/40'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                        }`}
                      >
                        <span className="text-xs font-bold text-white block font-mono">{prop.label}</span>
                        <span className="text-[10px] text-slate-400 block mt-1">{prop.desc}</span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition font-mono flex items-center gap-2"
                    >
                      <span>Proceed to Requirements</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: REQUIREMENT */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Step 2: Select Required Security Disciplines
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Multi-select all capabilities you wish to integrate.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {requirementOptions.map((req) => {
                      const IconComp = req.icon;
                      const isSelected = selectedRequirements.includes(req.id);

                      return (
                        <button
                          key={req.id}
                          type="button"
                          onClick={() => toggleRequirement(req.id)}
                          className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-950/40'
                              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <IconComp className={`w-5 h-5 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                            <span className="text-xs font-bold text-white font-mono">{req.label}</span>
                          </div>
                          {isSelected && <span className="text-cyan-400 text-xs font-bold">✓</span>}
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-6 py-3.5 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700 transition font-mono"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition font-mono flex items-center gap-2"
                    >
                      <span>Proceed to Coverage Scope</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: COVERAGE */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Step 3: Define Coverage Scope &amp; Deployment Scale
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Specify site parameters, operational schedule, and guard count.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
                        Operational Coverage Schedule
                      </label>
                      <select
                        value={coverageScope}
                        onChange={(e) => setCoverageScope(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-xs font-mono focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="24/7 Continuous">24/7/365 Continuous Static &amp; Patrol</option>
                        <option value="Day Shift Only (12h)">Day Business Shift Only (12 Hours)</option>
                        <option value="Night Surveillance (12h)">Night Perimeter Watch Only (12 Hours)</option>
                        <option value="Event Specific">Event-Based Specific Mobilization</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
                        Primary UAE Emirate
                      </label>
                      <select
                        value={emirateLocation}
                        onChange={(e) => setEmirateLocation(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-xs font-mono focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="Dubai">Dubai (DIFC, Downtown, Marina, Palm, Industrial)</option>
                        <option value="Abu Dhabi">Abu Dhabi (ADGM, Saadiyat, Yas, Mussafah)</option>
                        <option value="Al Ain">Al Ain (Eastern Region)</option>
                        <option value="Sharjah">Sharjah (SAIF Zone &amp; Commercial)</option>
                        <option value="Ras Al Khaimah">Ras Al Khaimah (Al Marjan &amp; Freezone)</option>
                        <option value="Ajman">Ajman (Free Zone &amp; Corniche)</option>
                        <option value="Fujairah">Fujairah (Port &amp; Energy Zone)</option>
                      </select>
                    </div>
                  </div>

                  {/* Guard Slider */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                        Estimated Security Personnel Count
                      </label>
                      <span className="text-sm font-bold text-white font-mono bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                        {guardsCount} {guardsCount === 1 ? 'Officer' : 'Officers'}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={guardsCount}
                      onChange={(e) => setGuardsCount(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                  </div>

                  {/* Quick Estimate Preview Pill */}
                  <div className="p-4 bg-slate-950 rounded-2xl border border-cyan-500/30 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Indicative Monthly Commitment</span>
                      <span className="text-xl font-black text-cyan-400 font-mono">
                        AED {estimatedMonthlyAED.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ month</span>
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-500/30">
                      SIRA &amp; MOI Certified
                    </span>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3.5 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700 transition font-mono"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition font-mono flex items-center gap-2"
                    >
                      <span>Proceed to Final Verification</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT & SUBMISSION */}
              {currentStep === 4 && (
                <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Step 4: Confidential Security Advisor Allocation
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Provide authorized corporate contact details to receive your formal Threat Analysis &amp; SIRA compliance report.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-2 font-mono">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Al-Mansoor"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-xs focus:border-cyan-400 focus:outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-2 font-mono">Organization / Entity *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sovereign Asset Management"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-xs focus:border-cyan-400 focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-2 font-mono">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="tariq@sovereign.ae"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-xs focus:border-cyan-400 focus:outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-2 font-mono">UAE Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-xs focus:border-cyan-400 focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-6 py-3.5 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700 transition font-mono"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition shadow-xl shadow-cyan-500/25 font-mono"
                    >
                      Request Formal Security Assessment 🚀
                    </button>
                  </div>
                </form>
              )}

            </div>
          ) : (
            /* Submission Confirmation State */
            <div className="text-center py-8 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center text-3xl mx-auto">
                ✓
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold block">
                  SECURITY ASSESSMENT DOSSIER GENERATED
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Thank You, {fullName || 'Valued Principal'}
                </h3>
                <p className="text-slate-300 text-sm mt-2 max-w-lg mx-auto">
                  Your risk profile for <strong className="text-white">{companyName || propertyType}</strong> in <strong className="text-cyan-400">{emirateLocation}</strong> has been assigned to our Senior Security Directorate.
                </p>
              </div>

              {/* Assessment Telemetry Card */}
              <div className="max-w-md mx-auto bg-slate-950 p-6 rounded-2xl border border-cyan-500/40 text-left space-y-2.5 font-mono text-xs">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500 uppercase">Assessment Ref</span>
                  <span className="text-cyan-400 font-bold">{assessmentRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Property Category:</span>
                  <span className="text-white">{propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Disciplines:</span>
                  <span className="text-white truncate max-w-[200px]">{selectedRequirements.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Estimated Monthly:</span>
                  <span className="text-emerald-400 font-bold">AED {estimatedMonthlyAED.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={`https://wa.me/971507719900?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition font-mono"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp Command</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 text-slate-300 hover:text-white text-xs font-bold rounded-xl transition font-mono"
                >
                  Configure Another Site
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
