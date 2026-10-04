'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Search,
  Truck,
  MapPin,
  Clock,
  CheckCircle2,
  Phone,
  MessageCircle,
  Copy,
  Check,
  ShieldCheck,
  Activity,
  ArrowRight
} from 'lucide-react';
import { MOCK_TRACKING_DATABASE, ShipmentRecord, LOGISTICS_BRAND_INFO } from '@/data/logisticsData';

interface ShipmentTrackingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrackingId?: string;
}

export const ShipmentTrackingDrawer: React.FC<ShipmentTrackingDrawerProps> = ({
  isOpen,
  onClose,
  initialTrackingId = 'VLX-2048-7391'
}) => {
  const [searchQuery, setSearchQuery] = useState(initialTrackingId);
  const [activeShipment, setActiveShipment] = useState<ShipmentRecord | null>(
    MOCK_TRACKING_DATABASE[initialTrackingId] || MOCK_TRACKING_DATABASE['VLX-2048-7391']
  );
  const [isCopied, setIsCopied] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = searchQuery.trim().toUpperCase();
    if (MOCK_TRACKING_DATABASE[cleanId]) {
      setActiveShipment(MOCK_TRACKING_DATABASE[cleanId]);
    } else {
      // Fallback for any entered ID
      setActiveShipment({
        trackingId: cleanId,
        sender: 'Dubai CommerCity Master Hub',
        recipient: 'Consignee Address, UAE',
        origin: 'Dubai Logistics Corridor',
        destination: 'Consignee Destination',
        currentLocation: 'Dubai Central Sorting Terminal 3',
        status: 'In Transit',
        statusStep: 3,
        estimatedDelivery: 'Today, 19:30 GST',
        weight: '6.4 kg',
        packageType: 'Priority Commercial Consignment',
        carrier: 'Velox Fleet Express Unit 22',
        lastUpdated: 'Just now',
        driverName: 'Saeed Al-Nuaimi',
        driverPhone: '+971 50 892 4110',
        timeline: [
          { title: 'Electronic Shipping Manifest Generated', location: 'Dubai CommerCity', timestamp: 'Today, 09:00 AM', completed: true },
          { title: 'Picked Up by Velox Courier', location: 'Sender Facility', timestamp: 'Today, 11:30 AM', completed: true },
          { title: 'In Transit via Main Highway', location: 'Dubai Central Sorting Terminal 3', timestamp: 'Today, 02:45 PM', completed: true },
          { title: 'Out for Destination Delivery', location: 'Local Delivery Hub', timestamp: 'Estimated 05:00 PM', completed: false },
          { title: 'Final Handover & Signature POD', location: 'Recipient Doorstep', timestamp: 'Estimated 07:30 PM', completed: false },
        ]
      });
    }
  };

  const handleCopyId = () => {
    if (activeShipment) {
      navigator.clipboard.writeText(activeShipment.trackingId);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 220 }}
          className="relative w-full max-w-2xl bg-[#0A0E1A] border-l border-cyan-500/30 p-6 sm:p-8 z-10 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 shadow-2xl flex flex-col justify-between"
        >
          <div>
            
            {/* Top Close & Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Live Consignment Tracking</h3>
                  <p className="text-xs text-slate-400 font-mono">Real-Time UAE GPS Telemetry & Chain of Custody</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Demo ID Clickers */}
            <div className="my-4">
              <span className="text-[10px] font-mono text-slate-400 block mb-2 uppercase">Quick Demo IDs:</span>
              <div className="flex flex-wrap gap-2">
                {Object.keys(MOCK_TRACKING_DATABASE).map((id) => (
                  <button
                    key={id}
                    onClick={() => {
                      setSearchQuery(id);
                      setActiveShipment(MOCK_TRACKING_DATABASE[id]);
                    }}
                    className={`text-[10px] font-mono px-2.5 py-1 rounded-lg border transition-all ${
                      activeShipment?.trackingId === id
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {id}
                  </button>
                ))}
              </div>
            </div>

            {/* Tracking Search Input */}
            <form onSubmit={handleSearch} className="relative mb-6">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Consignment ID (e.g. VLX-2048-7391)..."
                className="w-full pl-11 pr-24 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm font-mono focus:outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition-colors"
              >
                Track
              </button>
            </form>

            {/* Shipment Result Card */}
            {activeShipment && (
              <div className="space-y-6">
                
                {/* Status Hero Badge */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border border-cyan-500/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono font-bold text-white">
                        {activeShipment.trackingId}
                      </span>
                      <button
                        onClick={handleCopyId}
                        className="p-1 rounded bg-slate-900 text-slate-400 hover:text-white text-[10px]"
                        title="Copy Tracking ID"
                      >
                        {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-mono">
                      ● {activeShipment.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                    <div>
                      <span className="text-slate-400 block">ESTIMATED DELIVERY:</span>
                      <span className="text-white font-bold">{activeShipment.estimatedDelivery}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">CURRENT LOCATION:</span>
                      <span className="text-cyan-300 font-bold">{activeShipment.currentLocation}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Timeline Stepper */}
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">
                    Chain of Custody & Telemetry Milestones:
                  </h4>

                  <div className="space-y-4 pl-2 relative">
                    {activeShipment.timeline.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 relative">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          step.completed
                            ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/40'
                            : 'bg-slate-800 text-slate-500 border border-slate-700'
                        }`}>
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <div className="flex-1 text-xs">
                          <div className={`font-bold ${step.completed ? 'text-white' : 'text-slate-500'}`}>
                            {step.title}
                          </div>
                          <div className="text-slate-400 text-[11px]">{step.location}</div>
                          <div className="text-slate-500 text-[10px] font-mono mt-0.5">{step.timestamp}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Driver & Carrier Direct Contact */}
                {activeShipment.driverName && (
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">ASSIGNED CAPTAIN</span>
                      <div className="font-bold text-white">{activeShipment.driverName}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{activeShipment.carrier}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${activeShipment.driverPhone}`}
                        className="p-2.5 rounded-xl bg-slate-800 text-cyan-400 hover:text-white hover:bg-slate-700 transition-colors"
                        title="Call Driver"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                      <a
                        href={`https://wa.me/971508924110?text=Inquiry%20regarding%20Shipment%20${activeShipment.trackingId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 transition-colors"
                        title="WhatsApp Dispatch"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>

          {/* Drawer Footer CTA */}
          <div className="pt-6 border-t border-slate-800 mt-6 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Biometric POD Verification Active</span>
            </span>
            <button
              onClick={onClose}
              className="text-cyan-400 hover:underline font-bold"
            >
              Close Drawer
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
