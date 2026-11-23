import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export const SimpleModePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6">
      <Link
        to="/"
        className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-1.5" /> Back to Standard View
      </Link>

      <div className="bg-amber-50/90 rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-md space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="q0-badge q0-badge-amber">
            Simple Mode &bull; Easy & Assisted Access
          </div>
          <span className="text-xs font-semibold bg-white px-3 py-1 rounded-full border border-amber-300 text-amber-900">
            For Seniors, Pensioners & Assisted Banking
          </span>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            Simple Banking, Zero Confusion
          </h1>
          <p className="text-base sm:text-lg text-slate-700 mt-2 leading-relaxed">
            Simple Mode provides extra-large buttons, fewer choices on each screen, and clear step-by-step guidance 
            so anyone can book a queue ticket or check requirements without technology stress.
          </p>
        </div>

        {/* Big accessible action buttons using pure CSS .q0-simple-action-btn */}
        <div className="space-y-4 pt-2">
          {/* Button 1 */}
          <button type="button" className="q0-simple-action-btn group">
            <div>
              <div className="q0-simple-btn-title">
                1. Collect or Replace ATM Debit Card
              </div>
              <div className="q0-simple-btn-desc">
                Pick up a new or expired debit card &bull; Valid government ID and active phone number required
              </div>
            </div>
            <span className="text-3xl font-black text-blue-700 ml-4 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>

          {/* Button 2 */}
          <button type="button" className="q0-simple-action-btn group">
            <div>
              <div className="q0-simple-btn-title">
                2. Cash Deposit or Large Cash Withdrawal
              </div>
              <div className="q0-simple-btn-desc">
                Over-the-counter teller service &bull; Account number and deposit slip
              </div>
            </div>
            <span className="text-3xl font-black text-blue-700 ml-4 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>

          {/* Button 3 */}
          <button type="button" className="q0-simple-action-btn group">
            <div>
              <div className="q0-simple-btn-title">
                3. Customer Care & Account Update
              </div>
              <div className="q0-simple-btn-desc">
                Update phone number, NIN linking, or resolve POS transfer disputes
              </div>
            </div>
            <span className="text-3xl font-black text-blue-700 ml-4 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
        </div>

        {/* Assisted Booking Callout */}
        <div className="q0-card border-2 border-amber-300 space-y-2">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-base">
            <HeartHandshake className="w-5 h-5 text-amber-700" />
            <span>Assisted Booking (Book for a Parent or Relative)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            Relatives, caregivers, or branch greeters can use this mode to generate a queue ticket for elderly family members, giving them the exact time to arrive without standing in crowded halls.
          </p>
        </div>

        <div className="pt-2 border-t border-amber-200 flex flex-wrap gap-4 items-center justify-between text-xs text-amber-950">
          <div className="flex items-center gap-1.5 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-blue-700" />
            <span>High-Contrast & Large Fonts</span>
          </div>
          <div className="flex items-center gap-1.5 font-semibold">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>Zero Banking Passwords Needed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
