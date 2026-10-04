'use client';
import React from 'react';

export const MembershipSection: React.FC<any> = () => {
  const tiers = [
    { title: 'Essential', price: 299, desc: '2 Haircuts + 1 Beard Trim / Mo', bg: 'bg-neutral-900' },
    { title: 'Gentleman', price: 499, desc: 'Unlimited Haircuts + Hot Shaves', bg: 'bg-gradient-to-b from-amber-950/40 to-neutral-900' },
    { title: 'Elite VIP', price: 799, desc: 'Unlimited Grooming + VIP Suite', bg: 'bg-neutral-900' }
  ];

  return (
    <section id="memberships" className="py-24 bg-neutral-900/90 text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Barber Studio Memberships</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((t, idx) => (
            <div key={idx} className={`${t.bg} p-8 rounded-3xl border border-amber-500/30 flex flex-col justify-between`}>
              <div>
                <h3 className="font-sans font-bold text-2xl text-white">{t.title}</h3>
                <span className="text-3xl font-mono font-bold text-amber-300 block my-4">AED {t.price}<span className="text-xs text-neutral-400">/mo</span></span>
                <p className="text-xs text-neutral-300">{t.desc}</p>
              </div>
              <button className="w-full py-3 mt-6 bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl">Join Membership</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
