import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowLeft } from 'lucide-react';

export const BranchFinderPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6">
      <Link
        to="/"
        className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
      </Link>

      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
          <MapPin className="w-6 h-6" />
        </div>
        <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
          Scheduled for Phase 3
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Find a Bank Branch in Ibadan
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          In Phase 3, this screen will allow customers to filter sample branches across key commercial hubs in Ibadan, including:
        </p>
        <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <li>📍 Dugbe Commercial Hub</li>
          <li>📍 Bodija Market Area</li>
          <li>📍 Challenge Junction</li>
          <li>📍 Sango / UI Axis</li>
          <li>📍 Iwo Road Interchange</li>
          <li>📍 Ring Road Commercial District</li>
        </ul>
        <div className="pt-4 flex gap-3">
          <Link
            to="/services"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Preview Service Checklist &rarr;
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
