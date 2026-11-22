import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Play, CheckCircle } from 'lucide-react';

export const StaffDashboardPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-6">
      <Link
        to="/"
        className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-blue-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Customer View
      </Link>

      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center">
              <ShieldAlert className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="inline-block px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-full mb-1">
                Phase 6 Preview
              </div>
              <h1 className="text-2xl font-extrabold text-slate-900">
                Staff & Teller Queue Console
              </h1>
            </div>
          </div>
          <span className="text-xs px-3 py-1 bg-blue-50 text-blue-800 font-semibold rounded-full border border-blue-200">
            Dugbe Commercial Branch &bull; Counter 03
          </span>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          In Phase 6, this separate view will allow bank staff and branch supervisors in Nigeria to manage the simulated queue:
        </p>

        {/* Mock Queue Control Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-xs text-slate-500 font-medium">Currently Serving</span>
            <div className="text-2xl font-black text-blue-700">QZ-023</div>
            <p className="text-[11px] text-slate-500">Service: ATM Card Collection</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-xs text-slate-500 font-medium">Next in Line</span>
            <div className="text-2xl font-black text-slate-900">QZ-024</div>
            <p className="text-[11px] text-slate-500">Wait time: ~12 mins</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-xs text-slate-500 font-medium">Waiting Queue Total</span>
            <div className="text-2xl font-black text-amber-600">7 Customers</div>
            <p className="text-[11px] text-slate-500">Status: Manageable</p>
          </div>
        </div>

        <div className="p-4 bg-slate-100 rounded-xl flex flex-wrap gap-3 items-center justify-between text-xs">
          <div className="flex gap-2">
            <span className="px-3 py-1.5 bg-blue-600 text-white font-bold rounded-lg flex items-center gap-1.5 opacity-90 cursor-not-allowed">
              <Play className="w-3.5 h-3.5" /> Call Next Customer
            </span>
            <span className="px-3 py-1.5 bg-slate-800 text-white font-bold rounded-lg flex items-center gap-1.5 opacity-90 cursor-not-allowed">
              <CheckCircle className="w-3.5 h-3.5" /> Mark as Served
            </span>
          </div>
          <span className="text-slate-500 italic">Actions will become interactive in Phase 6.</span>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="text-xs font-semibold text-blue-700 hover:underline"
          >
            &larr; Return to Customer Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
};
