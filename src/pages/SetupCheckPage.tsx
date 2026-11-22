import React from 'react';
import { Link } from 'react-router-dom';

export const SetupCheckPage: React.FC = () => {
  const stackItems = [
    { name: 'Vite', status: 'Active (v6)', desc: 'Next-generation lightning-fast frontend tooling' },
    { name: 'React', status: 'Ready (v19)', desc: 'Component-based UI library' },
    { name: 'TypeScript', status: 'Strict Mode', desc: 'Type safety and autocompletion with TSX' },
    { name: 'Tailwind CSS', status: 'Active (v4)', desc: 'Modern utility-first CSS framework' },
    { name: 'React Router', status: 'Configured (v7)', desc: 'Client-side SPA page routing' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold mb-3">
          Phase 1 Complete: Initial Project Architecture
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Queue-Zero (Q0) Foundation Initialized
        </h2>
        <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base leading-relaxed">
          Smart banking queue management and customer assistance platform for bank branches across Ibadan, Oyo State.
          This initial screen confirms that our React + TypeScript + Tailwind CSS + React Router stack is correctly installed and ready.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/routes-demo"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors"
          >
            Test React Router Navigation &rarr;
          </Link>
          <a
            href="#structure"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Review Project Structure
          </a>
        </div>
      </div>

      {/* Tech Stack Health Check Grid */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-4">Core Technology Stack Verification</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stackItems.map((item) => (
            <div
              key={item.name}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">{item.name}</span>
                <span className="text-xs px-2 py-0.5 font-medium rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Architecture Overview */}
      <div id="structure" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-2">Planned Architecture Overview</h3>
        <p className="text-xs sm:text-sm text-slate-600 mb-4">
          The project is structured according to senior-level modular React practices:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-mono">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <span className="font-bold text-emerald-700">src/components/</span>
            <p className="font-sans text-slate-600 text-xs mt-1">
              Reusable UI building blocks (Header, Buttons, Badges, Cards, Queue Ticket items).
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <span className="font-bold text-emerald-700">src/pages/</span>
            <p className="font-sans text-slate-600 text-xs mt-1">
              Full-screen views (Customer Ticket Kiosk, Teller Dashboard, Manager Overview).
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <span className="font-bold text-emerald-700">src/types/</span>
            <p className="font-sans text-slate-600 text-xs mt-1">
              TypeScript interfaces ensuring data safety and preventing runtime bugs.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <span className="font-bold text-emerald-700">src/services/</span>
            <p className="font-sans text-slate-600 text-xs mt-1">
              API integration layer for mock data (now) and PostgreSQL backend (later).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
