'use client';

import React, { useEffect, useState } from 'react';

export default function AdminFAQManager() {
  const [faqs, setFaqs] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/admin/faq')
      .then((res) => res.json())
      .then((data) => {
        if (data.faq) setFaqs(data.faq);
      });
  }, []);

  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-3xl font-extrabold text-white">FAQ Manager</h1>
      <p className="text-slate-400 text-xs">Manage public homepage and client knowledge base accordions.</p>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.id} className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl space-y-2">
            <h3 className="text-base font-bold text-white">{f.question}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{f.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
