'use client';
import React from 'react';

export default function AdminMediaCMS() {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-3xl font-extrabold text-white">Media Library</h1>
      <p className="text-slate-400 text-xs">Manage uploaded imagery, hero assets, and client logo vectors.</p>
      <div className="p-8 bg-[#0F172A] border border-slate-800 rounded-3xl text-center space-y-4">
        <div className="w-16 h-16 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center text-3xl mx-auto">
          🖼️
        </div>
        <h3 className="text-lg font-bold text-white">Local Asset Optimization Ready</h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Media assets are served via high-speed CDN and Unsplash image proxies across 51 standalone project repositories.
        </p>
      </div>
    </div>
  );
}
