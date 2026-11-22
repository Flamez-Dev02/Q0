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
        <ArrowLeft className="w-5 h-5 mr-1.5" /> Back to Standard View &bull; <span className="text-slate-500 italic ml-1">(Pada si Ojúlówó)</span>
      </Link>

      <div className="bg-amber-50/90 rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-md space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="inline-block px-4 py-1.5 bg-amber-200 text-amber-950 text-sm font-black rounded-full">
            Simple Mode &bull; Easy & Assisted Access
          </div>
          <span className="text-xs font-semibold bg-white px-3 py-1 rounded-full border border-amber-300 text-amber-900">
            English First + Yoruba Assistance
          </span>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            Simple Banking, Zero Confusion
          </h1>
          <p className="text-lg text-amber-950/80 italic mt-1">
            Bánkì Lọ́fẹ̀ẹ́, Láì Sí Wàhálà
          </p>
        </div>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          Simple Mode provides extra-large buttons, fewer choices on each screen, and bilingual guidance 
          so anyone can book a queue ticket or check requirements without stress.
        </p>

        {/* Big accessible action buttons with English first and Yoruba translation underneath */}
        <div className="space-y-4 pt-2">
          {/* Button 1 */}
          <button
            type="button"
            className="w-full text-left p-6 bg-white hover:bg-blue-50 rounded-2xl border-2 border-slate-300 hover:border-blue-600 transition-all shadow-sm flex items-center justify-between group"
          >
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-800 transition-colors">
                1. Collect or Replace ATM Debit Card
              </div>
              <div className="text-sm sm:text-base font-semibold text-blue-700 italic">
                (Gba Káàdì ATM tuntun tàbí èyí tó bàjẹ́)
              </div>
              <div className="text-xs sm:text-sm text-slate-600 pt-1">
                Pick up a new or expired card &bull; Valid ID and phone number required
              </div>
            </div>
            <span className="text-3xl font-black text-blue-700 ml-4 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>

          {/* Button 2 */}
          <button
            type="button"
            className="w-full text-left p-6 bg-white hover:bg-blue-50 rounded-2xl border-2 border-slate-300 hover:border-blue-600 transition-all shadow-sm flex items-center justify-between group"
          >
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-800 transition-colors">
                2. Cash Deposit or Large Cash Withdrawal
              </div>
              <div className="text-sm sm:text-base font-semibold text-blue-700 italic">
                (Fífi owó pamọ́ tàbí gbígba owó lórí tábìlì)
              </div>
              <div className="text-xs sm:text-sm text-slate-600 pt-1">
                Over-the-counter teller service &bull; Account number and deposit slip
              </div>
            </div>
            <span className="text-3xl font-black text-blue-700 ml-4 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>

          {/* Button 3 */}
          <button
            type="button"
            className="w-full text-left p-6 bg-white hover:bg-blue-50 rounded-2xl border-2 border-slate-300 hover:border-blue-600 transition-all shadow-sm flex items-center justify-between group"
          >
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-800 transition-colors">
                3. Customer Care & Account Update
              </div>
              <div className="text-sm sm:text-base font-semibold text-blue-700 italic">
                (Àtúnṣe àkọọ́lẹ̀ àti ìrànwọ́ oníbàárà)
              </div>
              <div className="text-xs sm:text-sm text-slate-600 pt-1">
                Update phone number, NIN linking, or resolve POS transfer disputes
              </div>
            </div>
            <span className="text-3xl font-black text-blue-700 ml-4 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
        </div>

        {/* Assisted Booking Callout */}
        <div className="p-6 bg-white rounded-2xl border-2 border-amber-300 space-y-2">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-base">
            <HeartHandshake className="w-5 h-5 text-amber-700" />
            <span>Assisted Booking (Book for a Parent or Relative)</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-amber-900 italic">
            (Ìfọwọ́sowọ́pọ̀ fún àwọn òbí tàbí ẹbí láti gba nọ́mbà)
          </p>
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
