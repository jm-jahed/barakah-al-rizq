'use client';
import React, { useState } from 'react';
import { X, CheckCircle2, Phone } from 'lucide-react';
import { SERVICES_DATA, OPTOMETRISTS_DATA } from '@/data/opticalData';

export const EyeTestBookingModal: React.FC<{ isOpen: boolean; initialOptometristId?: string; onClose: () => void }> = ({ isOpen, initialOptometristId, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0].id);
  const [selectedDoc, setSelectedDoc] = useState(initialOptometristId || OPTOMETRISTS_DATA[0].id);
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-slate-900 border border-sky-500/30 rounded-3xl max-w-xl w-full p-6 md:p-8 text-white relative shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-white"><X className="w-5 h-5" /></button>
        <div className="text-center"><span className="text-[10px] font-mono text-sky-400 font-bold uppercase">STEP {step} OF 6</span><h3 className="text-2xl font-sans font-bold text-white">Book Eye Examination</h3></div>

        {step === 1 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-sky-400 block uppercase font-bold">Select Service</label>
            <div className="space-y-2">
              {SERVICES_DATA.map(s => (
                <div key={s.id} onClick={() => setSelectedService(s.id)} className={`p-3 rounded-xl border flex justify-between cursor-pointer ${selectedService === s.id ? 'border-sky-400 bg-sky-500/10' : 'border-slate-800 bg-slate-950'}`}>
                  <span className="font-sans font-bold text-xs">{s.name}</span><span className="text-xs font-mono text-sky-300">AED {s.price}</span>
                </div>
              ))}
            </div>
            <button onClick={() => setStep(2)} className="w-full py-3 rounded-xl bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase mt-4">Next: Optometrist →</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-sky-400 block uppercase font-bold">Select Optometrist</label>
            <div className="space-y-2">
              {OPTOMETRISTS_DATA.map(doc => (
                <div key={doc.id} onClick={() => setSelectedDoc(doc.id)} className={`p-3 rounded-xl border cursor-pointer ${selectedDoc === doc.id ? 'border-sky-400 bg-sky-500/10' : 'border-slate-800 bg-slate-950'}`}>
                  <span className="font-sans font-bold text-xs">{doc.name} ({doc.specialty})</span>
                </div>
              ))}
            </div>
            <button onClick={() => setStep(3)} className="w-full py-3 rounded-xl bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase mt-4">Next: Date →</button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-sky-400 block uppercase font-bold">Select Date</label>
            <div className="grid grid-cols-3 gap-2">
              {['Today', 'Tomorrow', 'In 2 Days'].map(d => (
                <button key={d} onClick={() => setSelectedDate(d)} className={`p-3 rounded-xl border text-xs font-mono ${selectedDate === d ? 'border-sky-400 bg-sky-500/10 text-sky-300 font-bold' : 'border-slate-800 bg-slate-950'}`}>{d}</button>
              ))}
            </div>
            <button onClick={() => setStep(4)} className="w-full py-3 rounded-xl bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase mt-4">Next: Time →</button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-sky-400 block uppercase font-bold">Select Time Slot</label>
            <div className="grid grid-cols-3 gap-2">
              {['10:00 AM', '02:00 PM', '05:00 PM'].map(t => (
                <button key={t} onClick={() => setSelectedTime(t)} className={`p-3 rounded-xl border text-xs font-mono ${selectedTime === t ? 'border-sky-400 bg-sky-500/10 text-sky-300 font-bold' : 'border-slate-800 bg-slate-950'}`}>{t}</button>
              ))}
            </div>
            <button onClick={() => setStep(5)} className="w-full py-3 rounded-xl bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase mt-4">Next: Details →</button>
          </div>
        )}

        {step === 5 && (
          <form onSubmit={(e)=>{e.preventDefault(); setStep(6);}} className="space-y-4">
            <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Full Customer Name" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white" />
            <button type="submit" className="w-full py-3 rounded-xl bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase">Submit Request</button>
          </form>
        )}

        {step === 6 && (
          <div className="text-center space-y-4 py-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-xl font-sans font-bold text-white">Eye Test Request Confirmed</h4>
            <p className="text-xs text-slate-300">Thank you, <span className="text-sky-300">{name}</span>. Your request for {selectedDate} at {selectedTime} has been submitted.</p>
            <a href="https://wa.me/971523394001" target="_blank" rel="noreferrer" className="w-full py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-mono font-bold text-xs uppercase flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> Confirm via WhatsApp</a>
          </div>
        )}
      </div>
    </div>
  );
};
