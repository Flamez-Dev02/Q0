import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowLeft } from 'lucide-react';

export const BranchFinderPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6">
      <Link
        to="/"
        className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-blue-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
      </Link>

      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
          <Building2 className="w-6 h-6" />
        </div>
        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200">
          Scheduled for Phase 3
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Sample Bank Branch Discovery
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          In Phase 3, customers can search and filter sample branches of leading Nigerian commercial banks:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <li>🏦 First Bank &bull; Dugbe Commercial Branch</li>
          <li>🏦 GTBank &bull; Bodija Market Branch</li>
          <li>🏦 Zenith Bank &bull; Challenge Branch</li>
          <li>🏦 Access Bank &bull; Ring Road Branch</li>
          <li>🏦 UBA &bull; Sango / UI Branch</li>
          <li>🏦 Stanbic IBTC &bull; Iwo Road Branch</li>
        </ul>
        <div className="pt-4 flex gap-3">
          <Link
            to="/services"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors"
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
