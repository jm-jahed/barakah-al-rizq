'use client';
import React, { useState } from 'react';
import { X, CheckCircle2, Phone } from 'lucide-react';
import { SERVICES_DATA, BARBERS_DATA } from '@/data/barberData';

export const BarberBookingModal: React.FC<{ isOpen: boolean; initialBarberId?: string; onClose: () => void }> = ({ isOpen, initialBarberId, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0].id);
  const [selectedBarber, setSelectedBarber] = useState(initialBarberId || BARBERS_DATA[0].id);
  const [selectedLocation, setSelectedLocation] = useState('DIFC Studio');
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedTime, setSelectedTime] = useState('04:00 PM');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-neutral-900 border border-amber-500/30 rounded-3xl max-w-xl w-full p-6 md:p-8 text-white relative shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 text-white"><X className="w-5 h-5" /></button>
        <div className="text-center"><span className="text-[10px] font-mono text-amber-400 font-bold uppercase">STEP {step} OF 7</span><h3 className="text-2xl font-sans font-bold text-white">Book Barber Visit</h3></div>

        {step === 1 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-amber-400 block uppercase font-bold">Select Service</label>
            <div className="space-y-2 max-h-56 overflow-y-auto">
              {SERVICES_DATA.map(s => (
                <div key={s.id} onClick={() => setSelectedService(s.id)} className={`p-3 rounded-xl border flex justify-between cursor-pointer ${selectedService === s.id ? 'border-amber-400 bg-amber-500/10' : 'border-neutral-800 bg-neutral-950'}`}>
                  <span className="font-sans font-bold text-xs">{s.name}</span><span className="text-xs font-mono text-amber-300">AED {s.price}</span>
                </div>
              ))}
            </div>
            <button onClick={() => setStep(2)} className="w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase mt-4">Next: Barber →</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-amber-400 block uppercase font-bold">Select Barber</label>
            <div className="space-y-2">
              {BARBERS_DATA.map(doc => (
                <div key={doc.id} onClick={() => setSelectedBarber(doc.id)} className={`p-3 rounded-xl border cursor-pointer ${selectedBarber === doc.id ? 'border-amber-400 bg-amber-500/10' : 'border-neutral-800 bg-neutral-950'}`}>
                  <span className="font-sans font-bold text-xs">{doc.name} ({doc.title})</span>
                </div>
              ))}
            </div>
            <button onClick={() => setStep(3)} className="w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase mt-4">Next: Location →</button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-amber-400 block uppercase font-bold">Select Dubai Location</label>
            <div className="grid grid-cols-2 gap-2">
              {['DIFC Studio', 'Downtown Boulevard', 'Dubai Marina', 'Jumeirah Studio', 'Business Bay'].map(l => (
                <button key={l} onClick={() => setSelectedLocation(l)} className={`p-3 rounded-xl border text-xs font-mono ${selectedLocation === l ? 'border-amber-400 bg-amber-500/10 text-amber-300 font-bold' : 'border-neutral-800 bg-neutral-950'}`}>{l}</button>
              ))}
            </div>
            <button onClick={() => setStep(4)} className="w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase mt-4">Next: Date →</button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-amber-400 block uppercase font-bold">Select Date</label>
            <div className="grid grid-cols-3 gap-2">
              {['Today', 'Tomorrow', 'This Saturday'].map(d => (
                <button key={d} onClick={() => setSelectedDate(d)} className={`p-3 rounded-xl border text-xs font-mono ${selectedDate === d ? 'border-amber-400 bg-amber-500/10 text-amber-300 font-bold' : 'border-neutral-800 bg-neutral-950'}`}>{d}</button>
              ))}
            </div>
            <button onClick={() => setStep(5)} className="w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase mt-4">Next: Time →</button>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-amber-400 block uppercase font-bold">Select Time Slot</label>
            <div className="grid grid-cols-3 gap-2">
              {['02:00 PM', '04:00 PM', '06:30 PM'].map(t => (
                <button key={t} onClick={() => setSelectedTime(t)} className={`p-3 rounded-xl border text-xs font-mono ${selectedTime === t ? 'border-amber-400 bg-amber-500/10 text-amber-300 font-bold' : 'border-neutral-800 bg-neutral-950'}`}>{t}</button>
              ))}
            </div>
            <button onClick={() => setStep(6)} className="w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase mt-4">Next: Customer Details →</button>
          </div>
        )}

        {step === 6 && (
          <form onSubmit={(e)=>{e.preventDefault(); setStep(7);}} className="space-y-4">
            <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name" className="w-full p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white" />
            <button type="submit" className="w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase">Submit Request</button>
          </form>
        )}

        {step === 7 && (
          <div className="text-center space-y-4 py-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-xl font-sans font-bold text-white">Appointment Request Received</h4>
            <p className="text-xs text-neutral-300">Thank you, <span className="text-amber-300">{name}</span>. Request for {selectedDate} at {selectedTime} ({selectedLocation}) received.</p>
            <a href="https://wa.me/971523394001" target="_blank" rel="noreferrer" className="w-full py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-mono font-bold text-xs uppercase flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> Confirm via WhatsApp</a>
          </div>
        )}
      </div>
    </div>
  );
};
