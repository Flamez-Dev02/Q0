import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Building2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                Q0
              </span>
              <span className="font-bold text-white text-base">Queue-Zero (Q0)</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Smart banking queue management and customer assistance prototype designed to eliminate long queues, hall congestion, and avoidable delays across bank branches throughout Nigeria.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-blue-400 pt-1">
              <Building2 className="w-3.5 h-3.5" />
              <span>Pilot Scope: Sample Commercial Bank Branches (Commercial & Retail Hubs)</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">
              Explore Demo
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">Home & Overview</Link>
              </li>
              <li>
                <Link to="/branches" className="hover:text-blue-400 transition-colors">Sample Bank Branches</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">Service Prep Checklist</Link>
              </li>
              <li>
                <Link to="/simple-mode" className="hover:text-blue-400 transition-colors">
                  Simple Mode <span className="text-slate-500 italic">(Ètò Rọrùn)</span>
                </Link>
              </li>
              <li>
                <Link to="/staff" className="hover:text-blue-400 transition-colors">Staff Teller Console</Link>
              </li>
            </ul>
          </div>

          {/* Demo Guardrails */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Security Notice
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Queue-Zero is a <strong>research prototype</strong>. It uses simulated queues and sample bank data.
              It does not connect to live banking ledgers and will <strong>never</strong> ask for BVN, passwords, OTPs, or ATM PINs.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} Queue-Zero (Q0) &bull; Built for Nigerian Bank Customers & Branch Operations.
          </p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Built for Nigerian Banking Efficiency</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500 ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
