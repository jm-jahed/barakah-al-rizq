'use client';

import React, { useState } from 'react';
import { Cpu, Code, Compass, ShieldCheck, Activity, CheckCircle2, Copy, Check } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const apiSnippet = `{
  "action": "create_express_shipment",
  "apiKey": "vlx_live_99281038491823",
  "shipment": {
    "origin": "Dubai South Logistics Hub 4A",
    "destination": "Al Maryah Island Tower, Abu Dhabi",
    "service_tier": "EXPRESS_SAME_DAY",
    "package": {
      "weight_kg": 14.2,
      "type": "HIGH_VALUE_PARCEL",
      "temperature_zone": "AMBIENT_25C"
    },
    "recipient": {
      "name": "Al Futtaim Commerce Desk",
      "phone": "+971504928102",
      "notifications": ["SMS", "WHATSAPP"]
    }
  }
}`;

  const responseSnippet = `{
  "status": "success",
  "code": 201,
  "data": {
    "tracking_id": "VLX-2048-7391",
    "status": "DISPATCH_ASSIGNED",
    "assigned_vehicle": "VAN_408_DUBAI",
    "estimated_eta": "Today, 18:40 GST",
    "tracking_url": "https://veloxlogistics.ae/track/VLX-2048-7391"
  }
}`;

  const [activeCodeTab, setActiveCodeTab] = useState<'request' | 'response'>('request');

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCodeTab === 'request' ? apiSnippet : responseSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techFeatures = [
    { title: 'Real-Time Satellite GPS', desc: 'Sub-meter driver telemetry updated every 3 seconds.' },
    { title: 'AI Route Optimization', desc: 'Neural route algorithms cutting mileage by up to 28%.' },
    { title: 'Automated Webhooks', desc: 'Instant HTTP callbacks on every status milestone event.' },
    { title: 'Digital Proof of Delivery', desc: 'High-res signature photo & geotagged timestamp capture.' },
  ];

  return (
    <section id="technology" className="py-24 bg-[#0B1120] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              DEVELOPER & TELEMETRY ENGINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              Logistics powered by technology.
            </h2>
            <p className="text-base text-gray-400 mt-2 max-w-xl">
              Connect your online store, ERP, or warehouse software directly to our logistics API in minutes with zero-latency webhook telemetry.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-300 font-bold uppercase">REST API v1.4 ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Tech Feature Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {techFeatures.map((tf) => (
              <div key={tf.title} className="p-5 rounded-2xl bg-[#0F172A] border border-blue-500/20 hover:border-cyan-400/50 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">{tf.title}</h3>
                </div>
                <p className="text-xs text-gray-300 pl-6">{tf.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Code/API Console Box */}
          <div className="lg:col-span-7 bg-[#070B14] rounded-3xl border border-blue-500/40 shadow-2xl overflow-hidden font-mono">
            
            {/* Console Bar */}
            <div className="bg-[#0F172A] px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs text-gray-400 font-bold">api.veloxlogistics.ae/v1</span>
              </div>

              {/* Request / Response Switcher */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveCodeTab('request')}
                  className={`px-3 py-1 rounded-md text-[11px] font-bold transition-colors ${
                    activeCodeTab === 'request'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  POST /shipments
                </button>
                <button
                  onClick={() => setActiveCodeTab('response')}
                  className={`px-3 py-1 rounded-md text-[11px] font-bold transition-colors ${
                    activeCodeTab === 'response'
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  201 Created Response
                </button>

                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white"
                  title="Copy code"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-6 overflow-x-auto text-xs text-cyan-300 leading-relaxed bg-[#05080E]">
              <pre>
                <code>{activeCodeTab === 'request' ? apiSnippet : responseSnippet}</code>
              </pre>
            </div>

            {/* Console Footer */}
            <div className="px-6 py-3 bg-[#0F172A] border-t border-white/10 flex items-center justify-between text-[10px] text-gray-400">
              <span>Latency: 18ms • SSL TLS 1.3 Encrypted</span>
              <span className="text-emerald-400">Webhook Registered</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
