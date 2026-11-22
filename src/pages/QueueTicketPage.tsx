import React from 'react';
import { Link } from 'react-router-dom';
import { Ticket, ArrowLeft, Clock } from 'lucide-react';

export const QueueTicketPage: React.FC = () => {
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
          <Ticket className="w-6 h-6" />
        </div>
        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200">
          Scheduled for Phase 4
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Customer Virtual Ticket & Queue Tracker
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          In Phase 4, after choosing a branch and service, you will receive a simulated virtual ticket here stored locally in your browser:
        </p>
        <div className="border-2 border-dashed border-blue-300 bg-blue-50/50 p-6 rounded-2xl max-w-sm mx-auto text-center space-y-2">
          <span className="text-xs font-bold text-blue-800 tracking-wider uppercase">Sample Prototype Ticket</span>
          <div className="text-4xl font-black text-slate-900">QZ-024</div>
          <p className="text-xs text-slate-600">Sample Branch: Dugbe Commercial Hub</p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mt-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Position: #3 in line &bull; ~12 mins wait</span>
          </div>
        </div>
        <div className="pt-4 flex gap-3 justify-center">
          <Link
            to="/"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Return to Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
};
