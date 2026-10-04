'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Utensils, ArrowRight } from 'lucide-react';

interface RestaurantEventsProps {
  onOpenReservation: () => void;
}

export const RestaurantEvents: React.FC<RestaurantEventsProps> = ({ onOpenReservation }) => {
  const events = [
    { title: "Weekend Sunset Terrace Brunch", date: "Every Friday & Saturday", desc: "Unlimited hot mezze, grilled sea bass, and live cardamon dallah station.", price: "AED 149" },
    { title: "Saffron & Open-Fire Chef Session", date: "First Wednesday Monthly", desc: "Live masterclass cooking with Executive Chef Omar Rahman in our open kitchen.", price: "AED 220" },
    { title: "DIFC Golden Hour Lounge", date: "Daily 5:00 PM – 8:00 PM", desc: "Chilled pomegranate mocktails and cold mezze platters with terrace views.", price: "AED 110" }
  ];

  return (
    <section className="py-24 bg-[#0A0D14] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            SPECIAL DINING EVENTS & BRUNCHES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mt-4 mb-4">
            Upcoming Events.
          </h2>
          <p className="text-base text-gray-400">
            Sample event highlights showcasing weekend brunches and culinary masterclasses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((evt, idx) => (
            <motion.div
              key={evt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-[#10141C] border border-amber-500/20 hover:border-amber-400/50 transition-all shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-amber-400">{evt.date}</span>
                  <span className="text-xs font-mono font-extrabold text-white bg-white/10 px-2.5 py-1 rounded-lg">
                    {evt.price}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-serif group-hover:text-amber-300 transition-colors mb-2">
                  {evt.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed font-sans mb-4">
                  {evt.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[9px] font-mono text-amber-300">Concept Event</span>
                <button
                  onClick={onOpenReservation}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center gap-1"
                >
                  <Calendar className="w-3.5 h-3.5" /> Reserve Event
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
