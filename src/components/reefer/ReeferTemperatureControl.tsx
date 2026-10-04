'use client';

import React, { useState } from 'react';
import { 
  ThermometerSnowflake, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Wind 
} from 'lucide-react';
import { useReeferTheme } from './ReeferThemeContext';

export default function ReeferTemperatureControl() {
  const [selectedTemp, setSelectedTemp] = useState<number>(-12.4);
  const { isDark } = useReeferTheme();

  // Derive status and cargo category from current temperature
  const getTempDetails = (t: number) => {
    if (t <= -15) {
      return {
        zone: 'Frozen',
        cargo: 'DEEP FROZEN (MEAT / SEAFOOD / ICE CREAM)',
        status: 'OPTIMAL',
        statusColor: isDark ? 'text-emerald-400' : 'text-emerald-700',
        bgPill: isDark ? 'bg-emerald-950/40 border-emerald-500/40' : 'bg-emerald-50 border-emerald-300',
        compressorMode: 'High Freeze Cycle (Carrier Vector)',
        airflow: 'Continuous 100% Circulation',
        icon: '❄️'
      };
    } else if (t <= -5) {
      return {
        zone: 'Deep Cold',
        cargo: 'FROZEN FOOD & PREPARED MEALS',
        status: 'OPTIMAL',
        statusColor: isDark ? 'text-sky-400' : 'text-[#0369A1]',
        bgPill: isDark ? 'bg-sky-950/40 border-sky-500/40' : 'bg-sky-50 border-sky-300',
        compressorMode: 'Pulse Freeze Modulation',
        airflow: 'Calibrated Static Airflow',
        icon: '🧊'
      };
    } else if (t <= 4) {
      return {
        zone: 'Chilled',
        cargo: 'DAIRY, FRESH POULTRY & DELICATESSEN',
        status: 'OPTIMAL',
        statusColor: isDark ? 'text-emerald-400' : 'text-emerald-700',
        bgPill: isDark ? 'bg-emerald-950/40 border-emerald-500/40' : 'bg-emerald-50 border-emerald-300',
        compressorMode: 'Constant Soft Chill Loop',
        airflow: 'Anti-Freeze High Flow',
        icon: '🥛'
      };
    } else {
      return {
        zone: 'Temperature Controlled',
        cargo: 'FRESH PRODUCE, FRUITS & CONFECTIONERY',
        status: 'OPTIMAL',
        statusColor: isDark ? 'text-amber-400' : 'text-amber-700',
        bgPill: isDark ? 'bg-amber-950/40 border-amber-500/40' : 'bg-amber-50 border-amber-300',
        compressorMode: 'Micro-Dehumidified Ventilation',
        airflow: 'Controlled Humidity Air Sweep',
        icon: '🍎'
      };
    }
  };

  const currentDetails = getTempDetails(selectedTemp);

  const presetTemps = [
    { label: 'Deep Freeze', val: -18.0, desc: 'Frozen Meat & Ice Cream' },
    { label: 'Frozen Standard', val: -12.4, desc: 'Frozen Cargo Master' },
    { label: 'Fresh Chill', val: 0.0, desc: 'Fresh Poultry & Seafood' },
    { label: 'Dairy & Produce', val: 3.5, desc: 'Milk, Cheese & Fruits' },
  ];

  return (
    <section id="temperature" className={`relative py-24 border-b overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#0B0F17] border-slate-800' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-mono font-bold ${
            isDark ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-[#F8FAFC] border-slate-200 text-amber-700'
          }`}>
            <ThermometerSnowflake className="w-4 h-4 text-amber-500" />
            <span>THERMAL COMPLIANCE ENGINE</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#111111]'}`}>
            YOUR CARGO. THE RIGHT TEMPERATURE.
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#4B5563]'}`}>
            From deep freeze ice cream to fragile berries, our Carrier and Thermo King telematics maintain exact thermal stability under GCC 50°C summer desert ambient heat.
          </p>
        </div>

        {/* 4 Temperature Zones Scale Visualization */}
        <div className={`p-6 sm:p-10 rounded-3xl border shadow-xl space-y-7 ${
          isDark ? 'bg-[#0F172A] border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between border-b pb-5 gap-3 ${
            isDark ? 'border-slate-800' : 'border-slate-200'
          }`}>
            <div>
              <span className="text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-wider font-bold">
                THERMAL SPECTRUM
              </span>
              <div className="flex items-center gap-2 text-base sm:text-2xl font-mono font-black mt-0.5">
                <span className="text-sky-500">-18°C</span>
                <span className={`flex-1 h-0.5 min-w-[30px] mx-1 ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`} />
                <span className="text-amber-500">+4°C</span>
              </div>
            </div>
            <div className={`text-xs sm:text-sm font-mono flex items-center gap-2 font-bold px-4 py-2 rounded-xl border shadow-2xs ${
              isDark ? 'bg-slate-900 border-slate-700 text-sky-400' : 'bg-white border-slate-200 text-[#0369A1]'
            }`}>
              <Activity className="w-4 h-4 text-sky-500" />
              <span>INDEPENDENT DIGITAL TEMPERATURE DATALOGGERS</span>
            </div>
          </div>

          {/* 4 Visual Stage Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className={`p-5 rounded-2xl border transition-all ${
              selectedTemp <= -15 
                ? isDark ? 'bg-sky-950/40 border-sky-500 shadow-md' : 'bg-sky-50 border-[#0369A1] shadow-xs'
                : isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center justify-between text-sm font-mono text-sky-400 font-bold">
                <span>❄️ FROZEN</span>
                <span>-18°C to -15°C</span>
              </div>
              <div className={`text-base sm:text-lg font-bold mt-1.5 ${isDark ? 'text-white' : 'text-[#111111]'}`}>Deep Frozen</div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Meat, poultry, seafood, frozen goods</p>
            </div>

            <div className={`p-5 rounded-2xl border transition-all ${
              selectedTemp > -15 && selectedTemp <= -5 
                ? isDark ? 'bg-sky-950/40 border-sky-500 shadow-md' : 'bg-sky-50 border-[#0369A1] shadow-xs'
                : isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center justify-between text-sm font-mono text-sky-400 font-bold">
                <span>🧊 DEEP COLD</span>
                <span>-14°C to -5°C</span>
              </div>
              <div className={`text-base sm:text-lg font-bold mt-1.5 ${isDark ? 'text-white' : 'text-[#111111]'}`}>Frozen Logistics</div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Pre-packaged foods, butter blocks</p>
            </div>

            <div className={`p-5 rounded-2xl border transition-all ${
              selectedTemp > -5 && selectedTemp <= 2 
                ? isDark ? 'bg-emerald-950/40 border-emerald-500 shadow-md' : 'bg-emerald-50 border-emerald-500 shadow-xs'
                : isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center justify-between text-sm font-mono text-emerald-400 font-bold">
                <span>🥛 CHILLED</span>
                <span>-2°C to +2°C</span>
              </div>
              <div className={`text-base sm:text-lg font-bold mt-1.5 ${isDark ? 'text-white' : 'text-[#111111]'}`}>Fresh Cold-Chain</div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Dairy, fresh milk, yogurts, beef</p>
            </div>

            <div className={`p-5 rounded-2xl border transition-all ${
              selectedTemp > 2 
                ? isDark ? 'bg-amber-950/40 border-amber-500 shadow-md' : 'bg-amber-50 border-amber-500 shadow-xs'
                : isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center justify-between text-sm font-mono text-amber-400 font-bold">
                <span>🍎 TEMP CONTROL</span>
                <span>+2°C to +6°C</span>
              </div>
              <div className={`text-base sm:text-lg font-bold mt-1.5 ${isDark ? 'text-white' : 'text-[#111111]'}`}>Regulated Fresh</div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Fruits, vegetables, chocolate, bakery</p>
            </div>
          </div>

          {/* Interactive Setpoint Slider & Preset Toggles */}
          <div className={`p-6 sm:p-7 rounded-2xl border space-y-6 shadow-2xs ${
            isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs sm:text-sm font-mono text-slate-400 uppercase font-bold">
                  SIMULATE REEFER TEMPERATURE CONTROLLER
                </span>
                <div className={`text-sm font-medium mt-0.5 ${isDark ? 'text-slate-300' : 'text-[#374151]'}`}>
                  Drag the slider to test micro-controller calibration and compressor response
                </div>
              </div>

              {/* Preset Buttons */}
              <div className="flex items-center gap-2.5 flex-wrap">
                {presetTemps.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTemp(p.val)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono border transition-all font-bold cursor-pointer ${
                      Math.abs(selectedTemp - p.val) < 0.5
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-2xs'
                        : isDark
                          ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          : 'bg-[#F8FAFC] text-[#374151] border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {p.label} ({p.val > 0 ? `+${p.val}` : p.val}°C)
                  </button>
                ))}
              </div>
            </div>

            {/* Slider */}
            <div className="space-y-2.5">
              <input
                type="range"
                min="-18"
                max="6"
                step="0.2"
                value={selectedTemp}
                onChange={(e) => setSelectedTemp(parseFloat(e.target.value))}
                className={`w-full h-3 rounded-lg appearance-none cursor-pointer accent-amber-500 ${
                  isDark ? 'bg-slate-800' : 'bg-slate-200'
                }`}
              />
              <div className="flex justify-between text-xs sm:text-sm font-mono text-slate-400 font-bold">
                <span>-18.0°C (Deep Frozen)</span>
                <span>-10.0°C</span>
                <span>0.0°C (Freezing Point)</span>
                <span>+4.0°C (Chilled Max)</span>
                <span>+6.0°C (Produce)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Monitoring Dashboard */}
        <div className={`rounded-3xl border shadow-xl p-6 sm:p-10 ${
          isDark ? 'bg-[#0F172A] border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className={`flex items-center justify-between border-b pb-5 mb-7 ${
            isDark ? 'border-slate-800' : 'border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className={`font-mono text-sm sm:text-base uppercase font-bold tracking-wider ${
                isDark ? 'text-white' : 'text-[#111111]'
              }`}>
                REEFER TELEMETRY CONSOLE — UNIT #DXB-RF-01
              </span>
            </div>
            <span className="text-xs sm:text-sm font-mono text-slate-400 font-bold">
              SATELLITE COMPLIANCE AUDIT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Live Temperature */}
            <div className={`p-6 rounded-2xl border space-y-2 ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
            }`}>
              <div className="text-xs sm:text-sm font-mono text-slate-400 uppercase font-bold">LIVE TEMPERATURE</div>
              <div className={`text-4xl sm:text-5xl lg:text-6xl font-mono font-black tracking-tight ${
                isDark ? 'text-white' : 'text-[#111111]'
              }`}>
                {selectedTemp > 0 ? `+${selectedTemp.toFixed(1)}` : selectedTemp.toFixed(1)}°C
              </div>
              <div className="text-xs sm:text-sm font-mono text-slate-400 pt-1 flex items-center gap-2 font-semibold">
                <ThermometerSnowflake className="w-4 h-4 text-sky-400" />
                <span>Probe 1: Rear Dock | Probe 2: Bulkhead</span>
              </div>
            </div>

            {/* Status */}
            <div className={`p-6 rounded-2xl border space-y-2 ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
            }`}>
              <div className="text-xs sm:text-sm font-mono text-slate-400 uppercase font-bold">STATUS</div>
              <div className={`text-4xl sm:text-5xl lg:text-6xl font-mono font-black ${currentDetails.statusColor} tracking-tight`}>
                {currentDetails.status}
              </div>
              <div className="text-xs sm:text-sm font-mono text-slate-400 pt-1 flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Variance: ±0.2°C Continuous Guard</span>
              </div>
            </div>

            {/* Cargo */}
            <div className={`p-6 rounded-2xl border space-y-2 ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
            }`}>
              <div className="text-xs sm:text-sm font-mono text-slate-400 uppercase font-bold">CARGO ZONE</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-mono font-black text-amber-500 tracking-tight truncate">
                {currentDetails.zone.toUpperCase()}
              </div>
              <div className="text-xs sm:text-sm font-mono text-slate-400 pt-1 truncate font-bold">
                {currentDetails.cargo}
              </div>
            </div>

          </div>

          {/* Detailed Compressor Telematics Bar */}
          <div className={`mt-8 pt-5 border-t grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-mono font-medium ${
            isDark ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-[#374151]'
          }`}>
            <div className="flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-sky-400" />
              <span>Mode: <strong className={isDark ? 'text-white' : 'text-[#111111]'}>{currentDetails.compressorMode}</strong></span>
            </div>
            <div className="flex items-center gap-2.5">
              <Wind className="w-5 h-5 text-emerald-500" />
              <span>Airflow: <strong className={isDark ? 'text-white' : 'text-[#111111]'}>{currentDetails.airflow}</strong></span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              <span>Certified: <strong className={isDark ? 'text-white' : 'text-[#111111]'}>EN 12830 Cold-Chain Standard</strong></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
