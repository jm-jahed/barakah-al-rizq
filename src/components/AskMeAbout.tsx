'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function AskMeAbout() {
  const topics = [
    { title: "Next.js 16 & React 19", icon: "⚡", category: "Frameworks", detail: "App Router, SSG, Server Components, and Webpack build pipelines." },
    { title: "TypeScript Architecture", icon: "🛡️", category: "Language", detail: "Strict static typing, modular schemas, and zero-leak props." },
    { title: "Tailwind CSS & UI/UX", icon: "🎨", category: "Design System", detail: "Custom color tokens, dark mode systems, and responsive layouts." },
    { title: "AI Agent Integration", icon: "🤖", category: "AI & Automation", detail: "LLM prompt engineering, dynamic workflows, and automated builders." },
    { title: "REST & GraphQL APIs", icon: "🔌", category: "Backend", detail: "Node.js endpoints, JSON schemas, and third-party integrations." },
    { title: "Performance & SEO", icon: "🚀", category: "Optimization", detail: "100% static prerendering, sub-second loads, and JSON-LD schemas." },
  ];

  return (
    <section className="py-20 bg-[#0F172A] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            Areas of Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Ask Me About / Technical Consultations
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Core domain capabilities I engineer and advise on for clients, startups, and tech teams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 p-6 rounded-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{t.icon}</span>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  {t.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                {t.title}
              </h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                {t.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
