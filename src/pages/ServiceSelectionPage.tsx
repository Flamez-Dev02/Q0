import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { 
  Building2, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  FileText, 
  Clock, 
  ShieldCheck, 
  AlertCircle,
  User,
  Phone
} from 'lucide-react';
import { SAMPLE_BRANCHES, SAMPLE_SERVICES } from '../data/sampleData';
import { BankingService, BankBranch, QueueTicket } from '../types/queue';
import { generateTicketNumber, calculateEstimatedWait, setActiveTicket } from '../utils/queueHelpers';

export const ServiceSelectionPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const branchIdParam = searchParams.get('branchId');

  // Selected branch state (defaults to first branch if none selected)
  const [selectedBranch, setSelectedBranch] = useState<BankBranch>(() => {
    const found = SAMPLE_BRANCHES.find((b) => b.id === branchIdParam);
    return found || SAMPLE_BRANCHES[0];
  });

  // Selected service state
  const [selectedService, setSelectedService] = useState<BankingService>(SAMPLE_SERVICES[0]);

  // Document checklist confirmation state (track checked document IDs)
  const [confirmedDocs, setConfirmedDocs] = useState<Record<string, boolean>>({});

  // Form inputs
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [formError, setFormError] = useState('');

  // Update selected branch if query param changes
  useEffect(() => {
    if (branchIdParam) {
      const found = SAMPLE_BRANCHES.find((b) => b.id === branchIdParam);
      if (found) setSelectedBranch(found);
    }
  }, [branchIdParam]);

  // Reset document checklist when service changes
  useEffect(() => {
    setConfirmedDocs({});
    setFormError('');
  }, [selectedService]);

  const toggleDocConfirmation = (docId: string) => {
    setConfirmedDocs((prev) => ({
      ...prev,
      [docId]: !prev[docId],
    }));
  };

  const handleJoinQueue = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setFormError('Please enter your full name or initials.');
      return;
    }

    // Check if mandatory documents have been checked
    const requiredDocs = selectedService.requiredDocuments.filter((d) => d.required);
    const missingDocs = requiredDocs.some((d) => !confirmedDocs[d.id]);

    if (missingDocs) {
      setFormError('Please verify that you have all required documents before taking a ticket.');
      return;
    }

    // Generate unique demo ticket
    const ticketNumber = generateTicketNumber(selectedService.prefix);
    const position = selectedBranch.waitingCustomers + 1;
    const estimatedWaitMinutes = calculateEstimatedWait(position, selectedService.estimatedServiceMinutes);

    const newTicket: QueueTicket = {
      id: `ticket-${Date.now()}`,
      ticketNumber,
      customerName: customerName.trim(),
      phone: customerPhone.trim() || undefined,
      branchId: selectedBranch.id,
      branchName: selectedBranch.branchName,
      bankName: selectedBranch.bankName,
      serviceId: selectedService.id,
      serviceName: selectedService.title,
      status: 'waiting',
      issuedAt: new Date().toISOString(),
      position,
      estimatedWaitMinutes,
      documentsConfirmed: true,
    };

    // Save ticket to LocalStorage
    setActiveTicket(newTicket);

    // Route directly to Phase 4 Queue Tracker
    navigate('/ticket');
  };

  const requiredCount = selectedService.requiredDocuments.filter((d) => d.required).length;
  const confirmedCount = selectedService.requiredDocuments.filter((d) => d.required && confirmedDocs[d.id]).length;

  return (
    <div className="space-y-8 py-4 sm:py-6">
      {/* Top Navigation & Selected Branch Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <Link
          to="/branches"
          className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Branch Finder
        </Link>

        {/* Active Branch Display */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-xl text-xs">
          <Building2 className="w-4 h-4 text-blue-700" />
          <span className="text-slate-600">Selected Branch:</span>
          <strong className="text-blue-900">{selectedBranch.bankName} - {selectedBranch.branchName}</strong>
          <Link
            to="/branches"
            className="text-blue-700 underline font-bold ml-1 hover:text-blue-800"
          >
            Change
          </Link>
        </div>
      </div>

      {/* Main Grid: Left = Service Picker, Right = Document Checklist & Booking Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Services Selection (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Step 1: Choose Your Banking Service</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              What do you need help with today?
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Select the service you are visiting the branch for. The platform will automatically 
              load the required document checklist for that specific counter.
            </p>

            {/* Services Options Cards */}
            <div className="space-y-3 pt-2">
              {SAMPLE_SERVICES.map((service) => {
                const isSelected = selectedService.id === service.id;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-blue-50/70 border-blue-600 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {service.category}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> ~{service.estimatedServiceMinutes} mins service time
                        </span>
                      </div>
                      <h2 className="text-base font-bold text-slate-900">
                        {service.title}
                      </h2>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="shrink-0 mt-1">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? 'border-blue-600 bg-blue-600 text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isSelected && <span className="w-2 h-2 rounded-full bg-white"></span>}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Document Checklist & Queue Booking (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Document Checklist Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <h2 className="font-bold text-slate-900 text-base">
                  Document Preparation Checklist
                </h2>
              </div>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                confirmedCount === requiredCount
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  : 'bg-amber-100 text-amber-900 border border-amber-200'
              }`}>
                {confirmedCount} / {requiredCount} Ready
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              To prevent wasted transport and avoid counter rejection, check off each item you have ready:
            </p>

            <div className="space-y-3 pt-1">
              {selectedService.requiredDocuments.map((doc) => {
                const isChecked = !!confirmedDocs[doc.id];
                return (
                  <label
                    key={doc.id}
                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      isChecked
                        ? 'bg-emerald-50/60 border-emerald-300'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleDocConfirmation(doc.id)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="text-xs leading-relaxed">
                      <span className={`font-semibold ${isChecked ? 'text-emerald-950 line-through opacity-85' : 'text-slate-900'}`}>
                        {doc.label}
                      </span>
                      {doc.required && (
                        <span className="ml-1.5 text-[10px] font-bold uppercase text-red-600">
                          (Required)
                        </span>
                      )}
                      {doc.notes && (
                        <p className="text-[11px] text-slate-500 mt-0.5">{doc.notes}</p>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Join Queue Form Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <h2 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              <span>Step 2: Enter Details & Join Queue</span>
            </h2>

            {formError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleJoinQueue} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name or Alias *
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => { setCustomerName(e.target.value); setFormError(''); }}
                  placeholder="e.g. Adebayo Ogunlesi"
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile Phone Number (Optional Demo SMS)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="e.g. 0803 123 4567"
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Zero Sensitive Data Disclaimer */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Zero Credentials:</strong> Queue-Zero will never ask for your BVN, ATM PIN, OTP, or passwords.
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-md hover:shadow-blue-200 transition-all flex items-center justify-center gap-2"
              >
                <span>Join Virtual Queue & Get Ticket</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
