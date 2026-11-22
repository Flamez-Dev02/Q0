import React from 'react';
import { AlertCircle } from 'lucide-react';

export const DemoBanner: React.FC = () => {
  return (
    <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-amber-900 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Demonstration Prototype:</strong> Using sample branches and simulated queue activity for Ibadan, Oyo State.
            Never enter BVN, ATM PINs, OTPs, or financial secrets.
          </span>
        </div>
        <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-amber-200 text-amber-800">
          Demo Mode
        </span>
      </div>
    </div>
  );
};
