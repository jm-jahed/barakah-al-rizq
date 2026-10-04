'use client';
import React, { useState } from 'react';
import { X, CheckCircle2, Phone } from 'lucide-react';
import { TREATMENTS_DATA, DENTISTS_DATA } from '@/data/dentalData';

export const AppointmentBookingModal: React.FC<{ isOpen: boolean; initialDentistId?: string; onClose: () => void }> = ({ isOpen, initialDentistId, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedTreatment, setSelectedTreatment] = useState(TREATMENTS_DATA[0].id);
  const [selectedDentist, setSelectedDentist] = useState(initialDentistId || DENTISTS_DATA[0].id);
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const currentTreatmentObj = TREATMENTS_DATA.find(t => t.id === selectedTreatment) || TREATMENTS_DATA[0];
  const currentDentistObj = DENTISTS_DATA.find(d => d.id === selectedDentist) || DENTISTS_DATA[0];

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(6);
  };

  const waText = encodeURIComponent(`Hi LUMINA Dental! I submitted a booking request for ${currentTreatmentObj.name} with ${currentDentistObj.name} on ${selectedDate} at ${selectedTime}. Patient: ${name}.`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl max-w-xl w-full p-6 md:p-8 text-white relative shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-white"><X className="w-5 h-5" /></button>
        <div className="text-center"><span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">STEP {step} OF 6</span><h3 className="text-2xl font-sans font-bold text-white">Book Dental Visit</h3></div>

        {step === 1 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-cyan-400 block uppercase font-bold">Select Treatment</label>
            <div className="space-y-2 max-h-56 overflow-y-auto">
              {TREATMENTS_DATA.map(t => (
                <div key={t.id} onClick={() => setSelectedTreatment(t.id)} className={`p-3 rounded-xl border flex justify-between cursor-pointer ${selectedTreatment === t.id ? 'border-cyan-400 bg-cyan-500/10' : 'border-slate-800 bg-slate-950'}`}>
                  <span className="font-sans font-bold text-xs">{t.name}</span><span className="text-xs font-mono text-teal-300">AED {t.price}</span>
                </div>
              ))}
            </div>
            <button onClick={() => setStep(2)} className="w-full py-3 rounded-xl bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase mt-4">Next: Dentist →</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-cyan-400 block uppercase font-bold">Select Dentist</label>
            <div className="grid grid-cols-2 gap-3 max-h-56 overflow-y-auto">
              {DENTISTS_DATA.map(doc => (
                <div key={doc.id} onClick={() => setSelectedDentist(doc.id)} className={`p-3 rounded-xl border cursor-pointer text-center ${selectedDentist === doc.id ? 'border-cyan-400 bg-cyan-500/10' : 'border-slate-800 bg-slate-950'}`}>
                  <span className="font-sans font-bold text-xs block">{doc.name}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2"><button onClick={() => setStep(1)} className="w-1/2 py-3 rounded-xl bg-slate-800 font-mono text-xs">Back</button><button onClick={() => setStep(3)} className="w-1/2 py-3 rounded-xl bg-cyan-400 text-slate-950 font-mono font-bold text-xs">Next: Date →</button></div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-cyan-400 block uppercase font-bold">Select Date</label>
            <div className="grid grid-cols-3 gap-3">
              {['Today', 'Tomorrow', 'In 2 Days', 'This Saturday', 'Next Week'].map(d => (
                <button key={d} onClick={() => setSelectedDate(d)} className={`p-3 rounded-xl border text-xs font-mono ${selectedDate === d ? 'border-cyan-400 bg-cyan-500/10 text-cyan-300 font-bold' : 'border-slate-800 bg-slate-950'}`}>{d}</button>
              ))}
            </div>
            <div className="flex gap-2"><button onClick={() => setStep(2)} className="w-1/2 py-3 rounded-xl bg-slate-800 font-mono text-xs">Back</button><button onClick={() => setStep(4)} className="w-1/2 py-3 rounded-xl bg-cyan-400 text-slate-950 font-mono font-bold text-xs">Next: Time →</button></div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <label className="text-xs font-mono text-cyan-400 block uppercase font-bold">Select Time Slot</label>
            <div className="grid grid-cols-3 gap-3">
              {['09:00 AM', '11:00 AM', '02:00 PM', '04:30 PM', '06:00 PM'].map(t => (
                <button key={t} onClick={() => setSelectedTime(t)} className={`p-3 rounded-xl border text-xs font-mono ${selectedTime === t ? 'border-cyan-400 bg-cyan-500/10 text-cyan-300 font-bold' : 'border-slate-800 bg-slate-950'}`}>{t}</button>
              ))}
            </div>
            <div className="flex gap-2"><button onClick={() => setStep(3)} className="w-1/2 py-3 rounded-xl bg-slate-800 font-mono text-xs">Back</button><button onClick={() => setStep(5)} className="w-1/2 py-3 rounded-xl bg-cyan-400 text-slate-950 font-mono font-bold text-xs">Next: Details →</button></div>
          </div>
        )}

        {step === 5 && (
          <form onSubmit={handleFinish} className="space-y-4">
            <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Full Patient Name" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white" />
            <input required value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone Number (WhatsApp)" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white" />
            <div className="flex gap-2 pt-2"><button type="button" onClick={() => setStep(4)} className="w-1/2 py-3 rounded-xl bg-slate-800 font-mono text-xs">Back</button><button type="submit" className="w-1/2 py-3 rounded-xl bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase">Submit Request</button></div>
          </form>
        )}

        {step === 6 && (
          <div className="text-center space-y-4 py-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-xl font-sans font-bold text-white">Appointment Request Received</h4>
            <p className="text-xs text-slate-300">Thank you, <span className="text-cyan-300">{name}</span>. Request for {currentTreatmentObj.name} with {currentDentistObj.name} on {selectedDate} at {selectedTime} received.</p>
            <a href={`https://wa.me/971523394001?text=${waText}`} target="_blank" rel="noreferrer" className="w-full py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-mono font-bold text-xs uppercase flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> Confirm via WhatsApp</a>
          </div>
        )}
      </div>
    </div>
  );
};
