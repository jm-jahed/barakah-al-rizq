'use client';
import React, { useState } from 'react';
import { X, CheckCircle2, Phone } from 'lucide-react';
import { CLASSES_DATA, INSTRUCTORS_DATA } from '@/data/wellnessData';

export const WellnessBookingModal: React.FC<{ isOpen: boolean; initialClassId?: string; onClose: () => void }> = ({ isOpen, initialClassId, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedClass, setSelectedClass] = useState(initialClassId || CLASSES_DATA[0].id);
  const [selectedInstructor, setSelectedInstructor] = useState(INSTRUCTORS_DATA[0].name);
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('09:30 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const currentClassObj = CLASSES_DATA.find(c => c.id === selectedClass) || CLASSES_DATA[0];

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(6);
  };

  const waText = encodeURIComponent(`Hi AURA Wellness Studio! I submitted a booking request for ${currentClassObj.name} with ${selectedInstructor} on ${selectedDate} at ${selectedTime}. My name is ${name}.`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-[#14120F] border border-amber-500/30 rounded-3xl max-w-xl w-full p-6 md:p-8 text-white relative shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">STEP {step} OF 6</span>
          <h3 className="text-2xl font-serif font-bold text-white">Book Your Studio Session</h3>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-amber-400 block uppercase font-bold">Select Modality / Class</label>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
              {CLASSES_DATA.map(c => (
                <div key={c.id} onClick={() => setSelectedClass(c.id)} className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer ${selectedClass === c.id ? 'border-amber-400 bg-amber-500/10' : 'border-white/10 bg-white/5'}`}>
                  <div><span className="font-serif font-bold text-sm block">{c.name}</span><span className="text-[10px] font-mono text-gray-400">{c.category} • {c.duration}</span></div>
                  <span className="text-xs font-mono font-bold text-amber-200">AED {c.priceSingle}</span>
                </div>
              ))}
            </div>
            <button onClick={() => setStep(2)} className="w-full py-3 rounded-xl bg-amber-500 text-black font-mono font-bold text-xs uppercase mt-4">Next: Instructor →</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-amber-400 block uppercase font-bold">Select Master Instructor</label>
            <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto">
              {INSTRUCTORS_DATA.map(inst => (
                <div key={inst.id} onClick={() => setSelectedInstructor(inst.name)} className={`p-3 rounded-xl border cursor-pointer text-center ${selectedInstructor === inst.name ? 'border-amber-400 bg-amber-500/10' : 'border-white/10 bg-white/5'}`}>
                  <img src={inst.image} alt={inst.name} className="w-12 h-12 rounded-full mx-auto mb-2 object-cover" />
                  <span className="font-serif font-bold text-xs block">{inst.name}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2"><button onClick={() => setStep(1)} className="w-1/2 py-3 rounded-xl bg-white/10 text-white font-mono text-xs">Back</button><button onClick={() => setStep(3)} className="w-1/2 py-3 rounded-xl bg-amber-500 text-black font-mono font-bold text-xs">Next: Date →</button></div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-amber-400 block uppercase font-bold">Select Date</label>
            <div className="grid grid-cols-3 gap-3">
              {['Today', 'Tomorrow', 'In 2 Days', 'In 3 Days', 'This Weekend', 'Next Week'].map(d => (
                <button key={d} onClick={() => setSelectedDate(d)} className={`p-3 rounded-xl border text-xs font-mono ${selectedDate === d ? 'border-amber-400 bg-amber-500/10 text-amber-300 font-bold' : 'border-white/10 bg-white/5 text-gray-300'}`}>{d}</button>
              ))}
            </div>
            <div className="flex gap-2"><button onClick={() => setStep(2)} className="w-1/2 py-3 rounded-xl bg-white/10 text-white font-mono text-xs">Back</button><button onClick={() => setStep(4)} className="w-1/2 py-3 rounded-xl bg-amber-500 text-black font-mono font-bold text-xs">Next: Time →</button></div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-amber-400 block uppercase font-bold">Select Session Time Slot</label>
            <div className="grid grid-cols-3 gap-3">
              {['07:00 AM', '08:30 AM', '09:30 AM', '11:00 AM', '05:30 PM', '07:30 PM'].map(t => (
                <button key={t} onClick={() => setSelectedTime(t)} className={`p-3 rounded-xl border text-xs font-mono ${selectedTime === t ? 'border-amber-400 bg-amber-500/10 text-amber-300 font-bold' : 'border-white/10 bg-white/5 text-gray-300'}`}>{t}</button>
              ))}
            </div>
            <div className="flex gap-2"><button onClick={() => setStep(3)} className="w-1/2 py-3 rounded-xl bg-white/10 text-white font-mono text-xs">Back</button><button onClick={() => setStep(5)} className="w-1/2 py-3 rounded-xl bg-amber-500 text-black font-mono font-bold text-xs">Next: Details →</button></div>
          </div>
        )}

        {step === 5 && (
          <form onSubmit={handleFinish} className="space-y-4">
            <div><label className="text-xs font-mono text-gray-400 block mb-1">Full Name</label><input required value={name} onChange={e=>setName(e.target.value)} placeholder="Sarah Al-Maktoum" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white" /></div>
            <div><label className="text-xs font-mono text-gray-400 block mb-1">Email Address</label><input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="sarah@example.com" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white" /></div>
            <div><label className="text-xs font-mono text-gray-400 block mb-1">Phone Number (WhatsApp)</label><input required value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+971 50 123 4567" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white" /></div>
            <div className="flex gap-2 pt-2"><button type="button" onClick={() => setStep(4)} className="w-1/2 py-3 rounded-xl bg-white/10 text-white font-mono text-xs">Back</button><button type="submit" className="w-1/2 py-3 rounded-xl bg-amber-500 text-black font-mono font-bold text-xs uppercase">Submit Request</button></div>
          </form>
        )}

        {step === 6 && (
          <div className="text-center space-y-4 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto"><CheckCircle2 className="w-8 h-8" /></div>
            <h4 className="text-xl font-serif font-bold text-white">Booking Request Received</h4>
            <p className="text-xs text-gray-300">Thank you, <span className="text-amber-300">{name}</span>. Your request for <span className="text-white font-bold">{currentClassObj.name}</span> on <span className="text-amber-300">{selectedDate} at {selectedTime}</span> with {selectedInstructor} has been logged.</p>
            <a href={`https://wa.me/971523394001?text=${waText}`} target="_blank" rel="noreferrer" className="w-full py-3.5 rounded-xl bg-emerald-500 text-black font-mono font-extrabold text-xs uppercase flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> Confirm Instantly via WhatsApp</a>
          </div>
        )}
      </div>
    </div>
  );
};
