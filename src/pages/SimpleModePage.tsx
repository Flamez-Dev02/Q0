import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Volume2, Users } from 'lucide-react';

export const SimpleModePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6">
      <Link
        to="/"
        className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-1.5" /> Pada si Ojúlówó (Back to Standard View)
      </Link>

      <div className="bg-amber-50 rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-sm space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="inline-block px-4 py-1.5 bg-amber-200 text-amber-900 text-sm font-black rounded-full">
            Ètò Rọrùn (Simple Mode &bull; Phase 5 Preview)
          </div>
          <span className="text-xs font-semibold bg-white px-3 py-1 rounded-full border border-amber-300 text-amber-800">
            For Seniors & Assisted Banking
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
          Bánkì Lọ́fẹ̀ẹ́, Láì Sí Wàhálà
        </h1>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          Simple Mode provides extra-large buttons, reduced choices per screen, high contrast for poor eyesight, 
          and bilingual guidance (English + Yoruba) so every resident in Ibadan can access bank services with dignity.
        </p>

        {/* Big accessible buttons preview */}
        <div className="space-y-3 pt-2">
          <button
            type="button"
            className="w-full text-left p-5 bg-white hover:bg-emerald-50 rounded-2xl border-2 border-slate-300 hover:border-emerald-600 transition-all shadow-xs flex items-center justify-between"
          >
            <div>
              <div className="text-lg font-black text-slate-900">1. Mo fẹ́ gba Káàdì Tuntun (ATM Card)</div>
              <div className="text-sm text-slate-600">I want to collect or replace an ATM card</div>
            </div>
            <span className="text-2xl font-bold text-emerald-700">&rarr;</span>
          </button>

          <button
            type="button"
            className="w-full text-left p-5 bg-white hover:bg-emerald-50 rounded-2xl border-2 border-slate-300 hover:border-emerald-600 transition-all shadow-xs flex items-center justify-between"
          >
            <div>
              <div className="text-lg font-black text-slate-900">2. Mo fẹ́ san owó tàbí gba owó (Deposit / Withdraw)</div>
              <div className="text-sm text-slate-600">Cash deposit or over-the-counter withdrawal</div>
            </div>
            <span className="text-2xl font-bold text-emerald-700">&rarr;</span>
          </button>
        </div>

        <div className="pt-4 border-t border-amber-200 flex flex-wrap gap-4 items-center justify-between text-xs text-amber-900">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-amber-800" />
            <span>Spoken audio guidance planned for Phase 5</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-800" />
            <span>Assisted-booking option for relatives/greeters</span>
          </div>
        </div>
      </div>
    </div>
  );
};
