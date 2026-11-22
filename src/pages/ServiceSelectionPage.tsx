import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const ServiceSelectionPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6">
      <Link
        to="/"
        className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
      </Link>

      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full border border-purple-200">
          Scheduled for Phase 3
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Service Selection & Document Preparation Checklist
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          In Phase 3, this module will show banking customers the exact requirements needed before visiting the branch:
        </p>
        <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>ATM Card Replacement / Collection:</strong> Valid Govt ID (NIN Slip, Voter Card, Driver License) + Active Phone Number.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Account Reactivation / Update:</strong> Proof of address (IBEDC utility bill &lt; 3 months old) + passport photograph.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Dispute & POS Reversal:</strong> Transaction date, amount, and terminal reference receipt.</span>
          </div>
        </div>
        <div className="pt-4 flex gap-3">
          <Link
            to="/branches"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Find Sample Branch &rarr;
          </Link>
          <Link
            to="/"
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
          >
            Return to Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
};
