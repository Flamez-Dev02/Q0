import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Ticket, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Printer, 
  XCircle, 
  ArrowLeft, 
  RefreshCw, 
  BellRing,
  User,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { QueueTicket } from '../types/queue';
import { 
  getActiveTicket, 
  clearActiveTicket, 
  formatBankingTime, 
  calculateEstimatedWait, 
  updateTicketStatusInQueue 
} from '../utils/queueHelpers';

export const QueueTicketPage: React.FC = () => {
  const [ticket, setTicket] = useState<QueueTicket | null>(null);
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  // Load ticket from LocalStorage on mount
  useEffect(() => {
    const loaded = getActiveTicket();
    setTicket(loaded);
  }, []);

  // Handler to cancel active ticket
  const handleCancelTicket = () => {
    if (window.confirm('Are you sure you want to cancel your queue ticket? This cannot be undone.')) {
      clearActiveTicket();
      setTicket(null);
    }
  };

  // Handler to print physical ticket slip (using clean print CSS)
  const handlePrint = () => {
    window.print();
  };

  // Simulation: Advance queue (moves position closer to counter)
  const handleSimulateAdvance = () => {
    if (!ticket) return;

    if (ticket.position > 1) {
      const newPos = ticket.position - 1;
      const newWait = calculateEstimatedWait(newPos);
      const updated: QueueTicket = {
        ...ticket,
        position: newPos,
        estimatedWaitMinutes: newWait,
      };
      setTicket(updated);
      updateTicketStatusInQueue(ticket.id, 'waiting');
      setNotificationMsg(`Queue moved! You are now #${newPos} in line (~${newWait} mins).`);
    } else if (ticket.position === 1 && ticket.status === 'waiting') {
      const counterNum = Math.floor(Math.random() * 4) + 1;
      const updated: QueueTicket = {
        ...ticket,
        position: 0,
        estimatedWaitMinutes: 0,
        status: 'called',
        counterNumber: counterNum,
      };
      setTicket(updated);
      updateTicketStatusInQueue(ticket.id, 'called', counterNum);
      setNotificationMsg(`Your ticket is CALLED! Please proceed immediately to Counter 0${counterNum}.`);
    } else if (ticket.status === 'called') {
      const updated: QueueTicket = {
        ...ticket,
        status: 'completed',
      };
      setTicket(updated);
      updateTicketStatusInQueue(ticket.id, 'completed');
      setNotificationMsg('Your service is complete! Thank you for using Queue-Zero.');
    }
  };

  // 1. EMPTY STATE (No ticket in LocalStorage)
  if (!ticket) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center space-y-6">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-xs">
          <Ticket className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            No Active Queue Ticket
          </h1>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            You do not currently have an active waiting ticket. Choose a sample bank branch 
            and select your service to join the virtual line before you travel.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/branches"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-md transition-all gap-2"
          >
            <span>Find a Branch & Join Queue</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // 2. ACTIVE TICKET TRACKING SCREEN
  const isCalled = ticket.status === 'called';
  const isCompleted = ticket.status === 'completed';

  return (
    <div className="max-w-4xl mx-auto py-4 sm:py-6 space-y-8">
      {/* Simulation Banner Notification */}
      {notificationMsg && (
        <div className="p-4 bg-blue-50 border border-blue-200 text-blue-900 rounded-2xl flex items-center justify-between text-xs sm:text-sm animate-fade-in shadow-xs">
          <div className="flex items-center gap-2">
            <BellRing className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{notificationMsg}</span>
          </div>
          <button
            type="button"
            onClick={() => setNotificationMsg(null)}
            className="text-xs font-bold text-blue-700 underline ml-2"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Top back navigation */}
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
        </Link>
        <span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full font-bold">
          Phase 4: Virtual Queue Simulation
        </span>
      </div>

      {/* TICKET DISPLAY CONTAINER (Formatted for screen and clean physical printing) */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
        {/* Top Header of Ticket */}
        <div className={`p-6 sm:p-8 text-white ${
          isCalled
            ? 'bg-gradient-to-r from-amber-600 to-amber-700 animate-pulse'
            : isCompleted
            ? 'bg-gradient-to-r from-emerald-600 to-teal-700'
            : 'bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold opacity-80">
                Digital Queue Pass &bull; Nigerian Commercial Banking
              </span>
              <h1 className="text-xl sm:text-2xl font-black mt-1">
                {ticket.bankName}
              </h1>
              <p className="text-xs opacity-90 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{ticket.branchName}</span>
              </p>
            </div>

            {/* Status Pill */}
            <div className="self-start sm:self-auto">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                {ticket.status === 'waiting' && '● Waiting in Line'}
                {ticket.status === 'called' && '🔔 Now Serving at Counter'}
                {ticket.status === 'completed' && '✓ Service Completed'}
              </span>
            </div>
          </div>
        </div>

        {/* Core Ticket Number & Metric Box */}
        <div className="p-6 sm:p-10 text-center space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Your Queue Ticket Number
            </span>
            <div className="text-5xl sm:text-7xl font-black tracking-tight text-slate-900 font-mono">
              {ticket.ticketNumber}
            </div>
            <p className="text-sm font-semibold text-blue-700 pt-1">
              {ticket.serviceName}
            </p>
          </div>

          {/* Real-time Position & Wait Estimation Bar */}
          {!isCompleted ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                <span className="text-xs text-blue-700 font-semibold uppercase tracking-wider">
                  Position in Line
                </span>
                <div className="text-2xl sm:text-3xl font-black text-blue-950 mt-1">
                  {ticket.position > 0 ? `#${ticket.position}` : 'Called'}
                </div>
                <p className="text-[11px] text-blue-800 mt-0.5">
                  {ticket.position > 1 ? `${ticket.position - 1} customers ahead of you` : isCalled ? 'Proceed to counter' : 'You are next!'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider">
                  Estimated Waiting Time
                </span>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 flex items-center justify-center gap-1">
                  <Clock className="w-6 h-6 text-slate-400" />
                  <span>~{ticket.estimatedWaitMinutes} mins</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Calculated from active tellers
                </p>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 max-w-md mx-auto text-xs">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
              <strong>Ticket Served:</strong> Thank you for participating in this banking queue simulation demo.
            </div>
          )}

          {/* Called Counter Callout Banner */}
          {isCalled && (
            <div className="p-5 rounded-2xl bg-amber-500 text-slate-950 font-bold max-w-md mx-auto shadow-lg space-y-1 animate-bounce">
              <div className="text-xs uppercase tracking-wider">Attention Required</div>
              <div className="text-xl sm:text-2xl font-black">
                PROCEED TO COUNTER 0{ticket.counterNumber || 2}
              </div>
              <p className="text-xs font-normal text-slate-900">
                Have your valid ID and documents in hand for the teller.
              </p>
            </div>
          )}

          {/* Customer Metadata Line */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>Customer: <strong>{ticket.customerName}</strong></span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Issued at: <strong>{formatBankingTime(ticket.issuedAt)}</strong></span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Demo Ticket</span>
            </span>
          </div>
        </div>

        {/* BOTTOM ACTION BAR (Print, Cancel, and Simulation Buttons) */}
        <div className="bg-slate-50 p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Simulation Tools */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {!isCompleted && (
              <button
                type="button"
                onClick={handleSimulateAdvance}
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
                title="Simulate queue moving forward in demonstration"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Simulate Teller Calling Next</span>
              </button>
            )}
            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5"
              title="Print physical paper slip"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Slip</span>
            </button>
          </div>

          {/* Cancel Ticket Option */}
          <div>
            <button
              type="button"
              onClick={handleCancelTicket}
              className="text-xs text-red-600 hover:text-red-700 font-semibold hover:underline flex items-center gap-1"
            >
              <XCircle className="w-3.5 h-3.5" />
              <span>Cancel Ticket</span>
            </button>
          </div>
        </div>
      </div>

      {/* Helpful preparation guidance card */}
      <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 space-y-2 text-xs text-slate-700">
        <h3 className="font-bold text-blue-950 flex items-center gap-1.5 text-sm">
          <CheckCircle2 className="w-4 h-4 text-blue-600" />
          <span>Preparation Guidance for Your Visit</span>
        </h3>
        <p className="leading-relaxed">
          While you monitor your estimated wait time, please ensure you have your required documents in hand. 
          When your ticket number shows as <strong>"Now Serving"</strong>, proceed directly to the designated counter without waiting in line.
        </p>
      </div>
    </div>
  );
};
