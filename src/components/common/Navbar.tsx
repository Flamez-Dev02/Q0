import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Clock, Building2, Ticket, ShieldAlert, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/', icon: Clock },
    { label: 'Bank Branches', path: '/branches', icon: Building2 },
    { label: 'Services & Prep', path: '/services', icon: Sparkles },
    { label: 'My Ticket', path: '/ticket', icon: Ticket },
    { label: 'Staff Portal', path: '/staff', icon: ShieldAlert },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand Logo & National Scope */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:shadow-blue-200 transition-all">
                Q0
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-slate-900 leading-tight tracking-tight">
                  Queue-Zero
                </span>
                <span className="text-[11px] font-semibold text-blue-700 tracking-wide uppercase">
                  Smart Banking &bull; Nigeria
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-blue-50 text-blue-800 font-semibold border-b-2 border-blue-600'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-1.5 opacity-70" />
                  {link.label}
                </Link>
              );
            })}

            {/* Simple Mode Switch Button with English first and Yoruba translation */}
            <Link
              to="/simple-mode"
              className="ml-2 inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-950 border border-amber-300 hover:bg-amber-200 transition-colors shadow-xs"
              title="Accessible view: English first with Yoruba assistance"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 mr-1.5 animate-ping"></span>
              <span>Simple Mode</span>
              <span className="ml-1 text-[11px] font-medium text-amber-800 italic">(Ètò Rọrùn)</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Link
              to="/simple-mode"
              className="mr-2 inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-950 border border-amber-300"
            >
              Simple Mode <span className="text-[10px] ml-0.5 text-amber-800">(Rọrùn)</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium ${
                  active
                    ? 'bg-blue-50 text-blue-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-5 h-5 mr-3 text-blue-600" />
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};
