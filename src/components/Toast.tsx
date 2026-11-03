import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed top-6 right-6 z-50 max-w-md bg-[#09152e] border-2 border-orange-500 rounded-2xl p-4 shadow-2xl shadow-orange-500/20 flex items-start gap-3 text-left animate-bounce-subtle">
      <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-5 h-5 text-orange-400" />
      </div>
      <div className="flex-1">
        <h5 className="font-montserrat font-bold text-sm text-white">
          Notification
        </h5>
        <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
          {message}
        </p>
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-md text-slate-400 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
