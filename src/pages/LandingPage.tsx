import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  ShieldCheck, 
  FileText, 
  HeartHandshake, 
  Sparkles,
  Store,
  GraduationCap,
  Briefcase
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  // Sample Commercial Bank Branches
  const sampleBankBranches = [
    { bank: 'First Bank', branch: 'Dugbe Commercial Branch', type: 'Main Commercial Hub' },
    { bank: 'GTBank', branch: 'Bodija Market Branch', type: 'Retail & Market Hub' },
    { bank: 'Zenith Bank', branch: 'Challenge Branch', type: 'Transit Hub' },
    { bank: 'Access Bank', branch: 'Ring Road Branch', type: 'Business District' },
    { bank: 'UBA', branch: 'Sango / UI Branch', type: 'Student & Academic Axis' },
    { bank: 'Stanbic IBTC', branch: 'Iwo Road Branch', type: 'Commercial Interchange' }
  ];

  const targetUsers = [
    {
      title: 'Traders & Small Businesses',
      subtitle: 'Market Vendors & Business Owners',
      location: 'Commercial Hubs Nationwide',
      desc: 'Cannot afford to abandon their shops or stalls for 3 to 4 hours in a crowded banking hall just to resolve a POS dispute, cash issue, or change request.',
      icon: Store,
    },
    {
      title: 'Elderly Customers & Pensioners',
      subtitle: 'Senior Citizens & Retirees',
      location: 'Senior Citizens Across Nigeria',
      desc: 'Standing for hours in humid queues is physically exhausting. They need larger text, fewer steps, clear assistance, and assisted booking by family members.',
      icon: HeartHandshake,
    },
    {
      title: 'Students & Young Adults',
      subtitle: 'Undergraduates & Youth Corps Members',
      location: 'Campuses & Higher Institutions',
      desc: 'Need to collect new debit cards, update account details, or verify student accounts between tight lecture schedules without guessing wait times.',
      icon: GraduationCap,
    },
    {
      title: 'Busy Working Professionals',
      subtitle: 'Office Workers & Public Servants',
      location: 'Corporate Offices & Public Sector',
      desc: 'Need predictable branch visits during lunch breaks or early mornings, knowing their queue status before walking through the security doors.',
      icon: Briefcase,
    }
  ];

  const journeySteps = [
    {
      step: '01',
      title: 'Select Bank & Branch',
      subtitle: 'Choose your nearby branch',
      desc: 'Choose a participating sample bank and branch near you and view simulated live customer volume before leaving your location.',
      link: '/branches'
    },
    {
      step: '02',
      title: 'Check Required Documents',
      subtitle: 'Confirm documents before you travel',
      desc: 'Avoid wasted trips. See exactly what you need before travelling (NIN, valid ID, utility bill, or passport photos).',
      link: '/services'
    },
    {
      step: '03',
      title: 'Receive Virtual Ticket',
      subtitle: 'Get your digital queue number',
      desc: 'Join the demo queue from your phone and receive a unique ticket number (e.g., QZ-042) with an estimated waiting time.',
      link: '/branches'
    },
    {
      step: '04',
      title: 'Arrive Right on Time',
      subtitle: 'Walk in when your turn is called',
      desc: 'Monitor your place in line. Walk into the banking hall right when your number is approaching the teller counter.',
      link: '/ticket'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-4 sm:py-8">
      {/* 1. HERO SECTION - Styled with .q0-hero-container CSS class */}
      <section className="q0-hero-container">
        <div className="relative z-10 max-w-3xl">
          {/* Tagline Badge */}
          <div className="q0-badge q0-badge-hero mb-6">
            <span className="q0-live-dot"></span>
            <span>Smart Queue Management &bull; Nigerian Commercial Banking</span>
          </div>

          <h1 className="q0-hero-title">
            Skip the Banking Hall Rush Across <span className="text-cyan-400 underline decoration-blue-500/50">Nigeria</span>.
          </h1>

          <p className="q0-hero-subtitle">
            Queue-Zero (Q0) is a customer assistance platform designed to end hours of standing in crowded Nigerian banking halls. 
            Join a virtual line before you travel, confirm required documents in advance, and walk in right when your turn arrives.
          </p>

          {/* Action Buttons styled with CSS classes */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
            <Link to="/branches" className="q0-hero-btn-primary group">
              <span>Explore Sample Bank Branches</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link to="/simple-mode" className="q0-btn-amber">
              <span>Simple Mode (Easy Access)</span>
              <Sparkles className="w-4 h-4 ml-1.5" />
            </Link>

            <Link to="/staff" className="q0-btn-secondary">
              Staff Portal
            </Link>
          </div>

          {/* Sample Bank Branches Ticker */}
          <div className="pt-6 border-t border-blue-900/60">
            <p className="text-xs uppercase tracking-wider text-blue-300 font-bold mb-2.5 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sample Bank Branches in Prototype Scope:</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {sampleBankBranches.map((item) => (
                <span
                  key={item.branch}
                  className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/15 text-xs text-sky-100 border border-white/15 backdrop-blur-sm flex items-center gap-1.5 transition-colors"
                >
                  <strong className="text-white">{item.bank}:</strong> {item.branch}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative backdrop glow */}
        <div className="q0-glow-orb"></div>
      </section>

      {/* 2. THE PROBLEM WE ARE SOLVING */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="q0-badge q0-badge-blue">
            The Nigerian Banking Reality
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Why Are Banking Halls Always Congested?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A universal reality experienced by everyday customers across bank branches nationwide:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="q0-card space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Hours of Unpredictable Waiting</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Crowded halls with slow-moving lines</p>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Customers queue outside security doors as early as 7:30 AM, pick paper slips, and sit through hours of slow lines without knowing their true expected service time.
            </p>
          </div>

          <div className="q0-card space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Missing Document Frustration</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Turned away after waiting for hours</p>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              After waiting for hours, customers frequently discover at the teller counter that their utility bill or ID does not meet requirements, wasting transport money and productive hours.
            </p>
          </div>

          <div className="q0-card space-y-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Elderly & Walk-in Barriers</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Lack of assistance for non-digital users</p>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Seniors, pensioners, and traders who are uncomfortable with mobile banking apps struggle in fast-paced halls without dedicated simple or assisted booking options.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHO Q0 HELPS (PERSONAS ACROSS NIGERIA) */}
      <section className="q0-soft-section space-y-8">
        <div className="max-w-2xl space-y-2">
            <span className="q0-badge bg-white text-slate-700 border border-slate-200">
              User-Centred Design
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Built for Real Everyday Bank Customers
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Designed around the daily routines and common frustrations of people visiting Nigerian bank branches:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {targetUsers.map((user) => {
              const Icon = user.icon;
              return (
                <div
                  key={user.title}
                  className="q0-card flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{user.title}</h3>
                      <p className="text-xs text-blue-700 font-medium">{user.subtitle}</p>
                      <p className="text-[11px] text-slate-500 font-semibold mt-0.5">{user.location}</p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{user.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
      </section>

      {/* 4. HOW IT WORKS (CUSTOMER JOURNEY) */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="q0-badge q0-badge-blue">
            Four-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            How Queue-Zero Solves the Waiting Game
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Simple, transparent, and completely free for the bank customer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeySteps.map((step) => (
            <Link
              key={step.step}
              to={step.link}
              className="q0-card-interactive"
            >
              <div className="q0-step-number">
                {step.step}
              </div>
              <div className="mb-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center justify-between">
                  <span>{step.title}</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </h3>
                <p className="text-[11px] text-blue-600 font-medium">{step.subtitle}</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. ACCESSIBLE SIMPLE MODE CALLOUT */}
      <section className="bg-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="q0-badge q0-badge-amber">
              <span>Accessibility & Easy Access</span>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-amber-950">
                Simple Mode: Easy, Stress-Free Banking for Everyone
              </h2>
              <p className="text-sm text-amber-900 font-medium mt-0.5">
                Clear instructions, large buttons, and assisted booking for stress-free bank visits.
              </p>
            </div>
            <p className="text-sm sm:text-base text-amber-900 leading-relaxed">
              Not everyone is comfortable with complicated smartphone applications. Q0 includes a dedicated 
              <strong> Simple Mode</strong> featuring <strong>extra-large text, high-contrast buttons, simple instructions</strong>, 
              and an <strong>assisted-booking option</strong> so family members, relatives, or bank greeters can secure a ticket on behalf of seniors and non-smartphone users.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/simple-mode" className="q0-btn-amber">
                Try Simple Mode &rarr;
              </Link>
              <div className="flex items-center gap-2 text-xs text-amber-900 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>Large Touch Targets</span>
                <CheckCircle2 className="w-4 h-4 text-amber-700 ml-2" />
                <span>Zero Complex Menus</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-3">
            <div className="text-amber-800 font-bold text-xs uppercase tracking-wider">
              Accessibility Highlights
            </div>
            <ul className="text-xs text-slate-700 space-y-2">
              <li className="flex items-start gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                <span>Fewer choices per screen for easy decision-making</span>
              </li>
              <li className="flex items-start gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                <span>High color contrast for low-vision readability</span>
              </li>
              <li className="flex items-start gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                <span>Clear preparation checklist before travelling</span>
              </li>
              <li className="flex items-start gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                <span>Assisted booking for relatives and walk-in visitors</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. PROTOTYPE DEMO GUARANTEES & SECURITY */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
              <span>Demonstration Prototype Guardrails</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Transparent design standards for research, evaluation, and safe testing across Nigerian banks.
            </p>
          </div>
          <span className="q0-badge q0-badge-blue self-start sm:self-auto">
            Zero Financial Risk
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>No Sensitive Banking Info</span>
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs">
              Q0 will <strong>never</strong> ask for or store Bank Verification Numbers (BVN), ATM PINs, OTP codes, account passwords, or card digits.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Simulated Sample Data</span>
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs">
              All bank names, branch addresses, and teller queues are sample demonstration models specifically created to test user experience.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Bank Partnership Ready</span>
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs">
              Designed as a professional proposal ready for presentation to Nigerian commercial banks and branch operations leadership.
            </p>
          </div>
        </div>
      </section>

      {/* 7. QUICK ACTION PREVIEW CARDS */}
      <section className="space-y-6">
        <h3 className="text-lg font-bold text-slate-900">Explore Demo Modules</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/branches" className="q0-card-interactive">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900">
                1. Select a Bank Branch
              </span>
              <Building2 className="w-4 h-4 text-slate-400" />
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explore sample branches (First Bank, GTBank, Zenith, Access, UBA) with simulated live wait times.
            </p>
          </Link>

          <Link to="/services" className="q0-card-interactive">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900">
                2. Preparation Checklist
              </span>
              <FileText className="w-4 h-4 text-slate-400" />
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Review document requirements for debit card replacement, account reactivation, and inquiries.
            </p>
          </Link>

          <Link to="/staff" className="q0-card-interactive">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900">
                3. Staff Queue Dashboard
              </span>
              <Users className="w-4 h-4 text-slate-400" />
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Teller control console to call the next customer, mark tickets served, or recall numbers.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};
