'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, CheckCircle2, Package, ShieldCheck } from 'lucide-react';
import { PRESSORA_ORDERS } from '@/data/pressoraData';

export const PressoraSmartReorder: React.FC<{ onAddToCart?: (item: any) => void }> = ({ onAddToCart }) => {
  const [reorderedId, setReorderedId] = useState<string | null>(null);

  const pastOrders = PRESSORA_ORDERS.slice(0, 3);

  const handleReorder = (order: typeof pastOrders[0]) => {
    setReorderedId(order.id);
    if (onAddToCart) {
      onAddToCart({
        id: `reorder-${order.id}-${Date.now()}`,
        productId: 'reorder',
        productName: `Reorder: ${order.product}`,
        specs: `${order.configSummary} (${order.quantity} units)`,
        quantity: order.quantity,
        priceAED: order.totalAED
      });
    }
    setTimeout(() => {
      setReorderedId(null);
    }, 2500);
  };

  return (
    <section className="py-20 bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ONE-TOUCH PRODUCTION RE-RUN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
            Smart Corporate <span className="font-serif italic text-amber-400">Reorders</span>
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            Archived vector plates, color profiles, and die-lines remain locked in the PRESSORA Vault. Re-run standard collateral in 1-click.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pastOrders.map((order) => (
            <motion.div
              key={order.id}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-mono text-amber-400">{order.id}</span>
                  <span className="text-neutral-500 font-mono">Last run: {order.date}</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-1">{order.product}</h3>
                <div className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {order.configSummary}
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-neutral-300 py-3 border-t border-b border-neutral-800/80 mb-6">
                  <div>
                    <span className="text-neutral-500">Qty: </span>
                    <span className="text-white">{order.quantity.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500">Price: </span>
                    <span className="text-emerald-400 font-medium">AED {order.totalAED}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleReorder(order)}
                disabled={reorderedId === order.id}
                className={`w-full py-3 px-4 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                  reorderedId === order.id
                    ? 'bg-emerald-500 text-neutral-950 font-bold'
                    : 'bg-amber-500 hover:bg-amber-400 text-neutral-950'
                }`}
              >
                {reorderedId === order.id ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Added to Trip Bag</span>
                  </>
                ) : (
                  <>
                    <RotateCw className="w-4 h-4" />
                    <span>Re-Run This Print Job</span>
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
