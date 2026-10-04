'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Crown, Utensils, MessageSquare, Clock } from 'lucide-react';

export const RestaurantTrust: React.FC = () => {
  const promises = [
    {
      icon: Heart,
      title: "Thoughtful Hospitality",
      description: "Personalized guest host attention from arrival to farewell."
    },
    {
      icon: Utensils,
      title: "Seasonal Menu",
      description: "Ingredients sourced weekly from organic French & regional suppliers."
    },
    {
      icon: Crown,
      title: "Private Dining",
      description: "Dedicated butler, Sommelier, and tailored tasting menus."
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Concierge",
      description: "Direct instant booking coordination and menu inquiries."
    },
    {
      icon: Clock,
      title: "Flexible Reservations",
      description: "Effortless online modifications and 6-hour cancellation window."
    },
    {
      icon: ShieldCheck,
      title: "Dietary-Friendly Options",
      description: "Clear Gluten-Free, Vegan, Vegetarian, and 100% Halal choices."
    }
  ];

  return (
    <section className="py-20 bg-[#0E0C0A] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            HOSPITALITY PROMISES
          </span>
          <h2 className="text-3xl font-extrabold text-white font-serif mt-3">
            Built Around Guest Excellence.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-[#14100C] border border-amber-500/20 hover:border-amber-400/50 transition-colors flex items-start gap-4 shadow-xl"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-serif mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
