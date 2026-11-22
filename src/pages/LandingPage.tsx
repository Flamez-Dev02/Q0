import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  MapPin, 
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
  const ibadanAreas = [
    'Dugbe (Commercial Hub)', 
    'Bodija (Market & Res.)', 
    'Challenge', 
    'Sango', 
    'Iwo Road', 
    'Ring Road'
  ];

  const targetUsers = [
    {
      title: 'Traders & Small Businesses',
      location: 'Dugbe, Bodija & Gbagi Markets',
      desc: 'Cannot afford to abandon their stalls for 3 to 4 hours in a crowded banking hall just to resolve a POS dispute or cash issue.',
      icon: Store,
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200'
    },
    {
      title: 'Elderly Customers',
      location: 'Pensioners & Seniors across Oyo State',
      desc: 'Standing for long hours is physically painful. Need larger text, simpler steps, Yoruba language options, and assisted booking by family.',
      icon: HeartHandshake,
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200'
    },
    {
      title: 'Students & Young Adults',
      location: 'UI, Poly Ibadan, Lead City',
      desc: 'Need to collect new ATM cards or verify student bank accounts between tight lecture schedules without guessing wait times.',
      icon: GraduationCap,
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    {
      title: 'Busy Professionals',
      location: 'Secretariat, Commercial Banks & Offices',
      desc: 'Need predictable branch visits during lunch breaks or before work starts, knowing exactly when their ticket will be called.',
      icon: Briefcase,
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200'
    }
  ];

  const journeySteps = [
    {
      step: '01',
      title: 'Choose Bank & Branch',
      desc: 'Select a sample bank in Ibadan (e.g. Dugbe Commercial or Bodija Market branch) and view live simulated queue capacity.',
      link: '/branches'
    },
    {
      step: '02',
      title: 'Check Required Documents',
      desc: 'Avoid wasted trips. See exactly what you need before travelling (NIN, utility bill, passport photo, or reference form).',
      link: '/services'
    },
    {
      step: '03',
      title: 'Receive Virtual Ticket',
      desc: 'Join the demo queue from your phone and receive a unique ticket number (e.g., QZ-042) with an estimated waiting time.',
      link: '/branches'
    },
    {
      step: '04',
      title: 'Arrive Right on Time',
      desc: 'Monitor your place in line. Walk into the banking hall right when your number is approaching the counter.',
      link: '/ticket'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-4 sm:py-8">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-emerald-900 via-emerald-800 to-slate-900 text-white p-6 sm:p-12 lg:p-16 shadow-xl border border-emerald-700/40">
        <div className="relative z-10 max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/50 text-xs sm:text-sm font-medium text-emerald-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Focus Area: Ibadan, Oyo State, Nigeria</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Skip the Banking Hall Rush in <span className="text-emerald-400 underline decoration-emerald-500/50">Ibadan</span>.
          </h1>

          <p className="text-base sm:text-xl text-emerald-100/90 leading-relaxed font-normal mb-8 max-w-2xl">
            Queue-Zero (Q0) is a smart customer assistance platform. Join a virtual banking queue before leaving home, check required documents in advance, and walk in right when your turn arrives.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
            <Link
              to="/branches"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg hover:shadow-emerald-400/20 text-sm sm:text-base group"
            >
              <span>Explore Sample Branches</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/simple-mode"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-amber-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md text-sm sm:text-base"
            >
              <span>Simple Mode (Ètò Rọrùn)</span>
              <Sparkles className="w-5 h-5 ml-2 text-amber-900" />
            </Link>

            <Link
              to="/staff"
              className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-semibold text-emerald-200 bg-emerald-950/60 hover:bg-emerald-950 border border-emerald-700/60 transition-colors text-sm sm:text-base"
            >
              Staff View
            </Link>
          </div>

          {/* Focus Areas Ticker */}
          <div className="pt-6 border-t border-emerald-700/50">
            <p className="text-xs uppercase tracking-wider text-emerald-300/80 font-semibold mb-2.5">
              Target Neighborhoods in Prototype Scope:
            </p>
            <div className="flex flex-wrap gap-2">
              {ibadanAreas.map((area) => (
                <span
                  key={area}
                  className="px-2.5 py-1 rounded-md bg-emerald-800/60 text-xs text-emerald-200 border border-emerald-700/40"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative backdrop glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* 2. THE PROBLEM WE ARE EXPLORING */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            The Ibadan Banking Challenge
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Why Do Banking Halls Get So Congested?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Based on preliminary observations and research across bank branches in Oyo State:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Hours of Unpredictable Waiting</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Customers often arrive at 8:00 AM, take a paper slip, and sit for 2 to 4 hours in crowded waiting halls without knowing when they will be served.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Missing Document Frustration</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              After waiting for hours, customers frequently learn at the counter that their utility bill or ID is invalid, turning a whole morning into a wasted trip.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Elderly & Walk-in Barriers</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Older customers and residents who are less comfortable with digital banking apps are left stranded unless a simple, assisted pathway is built for them.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHO Q0 HELPS (PERSONAS) */}
      <section className="bg-slate-100/70 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 rounded-3xl border border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200">
              User-Centred Design
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Designed for Real People in Ibadan
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Every feature in the Q0 prototype is mapped directly to the daily routine of local banking customers:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {targetUsers.map((user) => {
              const Icon = user.icon;
              return (
                <div
                  key={user.title}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{user.title}</h3>
                      <p className="text-xs text-emerald-700 font-semibold">{user.location}</p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{user.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (CUSTOMER JOURNEY) */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
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
              className="group block bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all relative overflow-hidden"
            >
              <div className="text-3xl font-black text-slate-200 group-hover:text-emerald-500/30 transition-colors mb-3">
                {step.step}
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition-colors flex items-center justify-between">
                <span>{step.title}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. ACCESSIBLE SIMPLE MODE CALLOUT */}
      <section className="bg-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold">
              <span>♿ Accessibility & Inclusion</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-amber-950">
              Simple Mode (Ètò Rọrùn) for Elderly & Assisted Users
            </h2>
            <p className="text-sm sm:text-base text-amber-900/90 leading-relaxed">
              Not everyone is comfortable with complicated smartphone applications. Q0 includes an accessible 
              mode featuring <strong>larger fonts, high-contrast buttons, simple English / Yoruba translations</strong>, 
              and an <strong>assisted-booking pathway</strong> so family members or branch greeters can secure a ticket on someone else's behalf.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/simple-mode"
                className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-colors"
              >
                Launch Simple Mode &rarr;
              </Link>
              <div className="flex items-center gap-2 text-xs text-amber-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>Large Buttons</span>
                <CheckCircle2 className="w-4 h-4 text-amber-700 ml-2" />
                <span>Audio-Friendly Guidance</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-amber-200 shadow-sm text-center space-y-3">
            <div className="text-amber-600 font-bold text-xs uppercase tracking-wider">
              Yoruba Language Preview
            </div>
            <p className="text-lg font-bold text-slate-900">
              &ldquo;Ẹ káàbọ̀ sí Queue-Zero. Yan ẹ̀ka bánkì rẹ kí o sì gba nọ́mbà ìdúró rẹ láì fi àkókò ṣòfò.&rdquo;
            </p>
            <p className="text-xs text-slate-500 italic">
              (Welcome to Queue-Zero. Select your bank branch and take your waiting ticket without wasting time.)
            </p>
          </div>
        </div>
      </section>

      {/* 6. PROTOTYPE DEMO GUARANTEES & SECURITY */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <span>Demonstration Prototype Guardrails</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Transparent design standards for research, evaluation, and safe testing.
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 self-start sm:self-auto">
            Zero Financial Risk
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>No Sensitive Banking Info</span>
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs">
              Q0 will <strong>never</strong> ask for or store Bank Verification Numbers (BVN), ATM PINs, OTP codes, account passwords, or card digits.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Simulated Sample Data</span>
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs">
              All bank names, branch addresses, and teller queues are sample demonstration models specifically created to test user experience.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Bank Partnership Ready</span>
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs">
              Designed as a proposal ready for presentation to branch managers and banking operations executives across Oyo State.
            </p>
          </div>
        </div>
      </section>

      {/* 7. QUICK ACTION PREVIEW CARDS */}
      <section className="space-y-6">
        <h3 className="text-lg font-bold text-slate-900">Explore Demo Modules</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/branches"
            className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                1. Find an Ibadan Branch
              </span>
              <MapPin className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explore sample branches in Dugbe, Bodija, Challenge, and Sango with simulated wait times.
            </p>
          </Link>

          <Link
            to="/services"
            className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                2. Preparation Checklist
              </span>
              <FileText className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Review document requirements for ATM card replacement, account reactivation, and inquiries.
            </p>
          </Link>

          <Link
            to="/staff"
            className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                3. Staff Queue Dashboard
              </span>
              <Users className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
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
