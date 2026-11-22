import React from 'react';

interface HeaderProps {
  appName: string;
  tagline: string;
  location: string;
}

export const Header: React.FC<HeaderProps> = ({ appName, tagline, location }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-sm">
            Q0
          </div>
          <div>
            <h1 className="font-bold text-lg text-slate-900 leading-tight">{appName}</h1>
            <p className="text-xs text-slate-500 hidden sm:block">{tagline}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
            {location}
          </span>
          <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded border border-slate-200">
            Phase 1: Setup
          </span>
        </div>
      </div>
    </header>
  );
};
