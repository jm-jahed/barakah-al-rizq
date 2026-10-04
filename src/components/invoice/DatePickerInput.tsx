"use client";

import React, { useRef } from "react";
import { Calendar } from "lucide-react";

interface DatePickerInputProps {
  value: string; // DD-MM-YYYY
  onChange: (formattedDate: string) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

// Convert DD-MM-YYYY to YYYY-MM-DD for native input
function toIsoDate(dmy: string): string {
  if (!dmy) return "";
  const parts = dmy.split("-");
  if (parts.length === 3) {
    if (parts[0].length === 2 && parts[2].length === 4) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
  }
  return dmy;
}

// Convert YYYY-MM-DD to DD-MM-YYYY
function toDmyDate(iso: string): string {
  if (!iso) return "";
  const parts = iso.split("-");
  if (parts.length === 3 && parts[0].length === 4) {
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
  return iso;
}

export function DatePickerInput({
  value,
  onChange,
  className = "",
  placeholder = "DD-MM-YYYY",
  required = false,
  disabled = false,
}: DatePickerInputProps) {
  const hiddenDateRef = useRef<HTMLInputElement>(null);

  const handleOpenCalendar = () => {
    if (disabled) return;
    try {
      if (hiddenDateRef.current?.showPicker) {
        hiddenDateRef.current.showPicker();
      } else {
        hiddenDateRef.current?.focus();
        hiddenDateRef.current?.click();
      }
    } catch {
      hiddenDateRef.current?.click();
    }
  };

  const handleNativeDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isoVal = e.target.value;
    if (isoVal) {
      const dmy = toDmyDate(isoVal);
      onChange(dmy);
    }
  };

  return (
    <div className="relative flex items-center">
      {/* Visual Display Input with Calendar Icon */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onClick={handleOpenCalendar}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`w-full pr-10 pl-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-mono text-[13.5px] text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all cursor-pointer ${className}`}
      />

      {/* Calendar Icon Button */}
      <button
        type="button"
        onClick={handleOpenCalendar}
        disabled={disabled}
        className="absolute right-2.5 p-1 text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors cursor-pointer"
        tabIndex={-1}
        title="Open Calendar"
      >
        <Calendar className="w-4 h-4" />
      </button>

      {/* Hidden Native Date Input for Browser Calendar Picker */}
      <input
        ref={hiddenDateRef}
        type="date"
        value={toIsoDate(value)}
        onChange={handleNativeDateChange}
        tabIndex={-1}
        className="opacity-0 absolute right-0 bottom-0 w-0 h-0 pointer-events-none -z-10"
      />
    </div>
  );
}

export default DatePickerInput;
