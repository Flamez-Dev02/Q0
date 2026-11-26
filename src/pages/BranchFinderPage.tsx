/**
 * ============================================================================
 * BRANCH FINDER PAGE (PHASE 3: BRANCH SELECTION)
 * ============================================================================
 * 
 * BEGINNER GUIDE TO THIS COMPONENT:
 * This page displays a list of sample bank branches in Nigeria.
 * 
 * Key concepts used here:
 * 1. "useState": React's memory box.
 *    - 'searchTerm' remembers what the user typed in the search bar.
 *    - 'selectedArea' remembers which filter button the user clicked (e.g. "Dugbe").
 * 
 * 2. "filter()": Standard JavaScript array method.
 *    - It looks through our SAMPLE_BRANCHES list and only keeps the branches 
 *      that match the user's search text or selected area.
 * 
 * 3. "useNavigate()": React Router's page switcher.
 *    - When the user clicks "Select Branch", navigate() takes them to the next page
 *      (/services?branchId=...) without a slow page reload!
 * ============================================================================
 */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Search, 
  MapPin, 
  Users, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Filter
} from 'lucide-react';
import { SAMPLE_BRANCHES } from '../data/sampleData';
import { BankBranch } from '../types/queue';

export const BranchFinderPage: React.FC = () => {
  // Hook to navigate between pages programmatically
  const navigate = useNavigate();

  // State 1: Stores whatever the user types in the search input box
  const [searchTerm, setSearchTerm] = useState<string>('');

  // State 2: Stores the currently selected area filter button (defaults to 'All')
  const [selectedArea, setSelectedArea] = useState<string>('All');

  // List of area filter options
  const areas = ['All', 'Dugbe', 'Bodija', 'Challenge', 'Ring Road', 'Sango', 'Iwo Road'];

  /**
   * JAVASCRIPT FILTER LOGIC:
   * Looks through the SAMPLE_BRANCHES array.
   * If a branch name, bank name, or area contains what the user typed, we keep it.
   */
  const filteredBranches = SAMPLE_BRANCHES.filter((branch) => {
    const searchLower = searchTerm.toLowerCase();
    
    // Check if the search term matches bank name, branch name, or address
    const matchesSearch = 
      branch.bankName.toLowerCase().includes(searchLower) ||
      branch.branchName.toLowerCase().includes(searchLower) ||
      branch.area.toLowerCase().includes(searchLower) ||
      branch.address.toLowerCase().includes(searchLower);

    // Check if the branch area matches the selected filter pill
    const matchesArea = 
      selectedArea === 'All' || 
      branch.area.toLowerCase() === selectedArea.toLowerCase();

    return matchesSearch && matchesArea;
  });

  /**
   * Called when customer clicks "Select Branch & Choose Service".
   * Takes them to the service page and passes the branch's ID in the URL.
   */
  const handleSelectBranch = (branch: BankBranch) => {
    navigate(`/services?branchId=${branch.id}`);
  };

  return (
    <div className="space-y-8 py-4 sm:py-6">
      {/* 1. Header Box */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200 mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Phase 3: Branch Selection</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Select a Commercial Bank Branch
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Find a participating sample branch in your area. View simulated active counter counts, 
              current waiting numbers, and estimated wait times before visiting.
            </p>
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 max-w-xs self-start sm:self-auto">
            <span className="font-bold flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
              Prototype Sample Data
            </span>
            <span>All branch capacities and queues are simulated for demo purposes.</span>
          </div>
        </div>

        {/* 2. Search Box & Area Filter Buttons */}
        <div className="pt-4 border-t border-slate-100 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input Field */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by bank name, branch, or area..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>

          {/* Area Filter Buttons (rendered with JavaScript .map) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 mr-1 shrink-0" />
            {areas.map((area) => (
              <button
                key={area}
                type="button"
                onClick={() => setSelectedArea(area)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedArea === area
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Branch Cards Display */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
            Available Sample Branches ({filteredBranches.length})
          </h2>
          <span className="text-xs text-slate-500">
            Showing branches across commercial districts
          </span>
        </div>

        {/* If no branches matched search, show friendly reset prompt */}
        {filteredBranches.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No branches match your search</h3>
            <p className="text-xs text-slate-500">Try searching for "First Bank", "Bodija", or select "All" areas.</p>
            <button
              type="button"
              onClick={() => { setSearchTerm(''); setSelectedArea('All'); }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Render all matching branches using .map() */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBranches.map((branch) => {
              const isCrowded = branch.status === 'Crowded';
              return (
                <div
                  key={branch.id}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group"
                >
                  <div className="space-y-4">
                    {/* Top bank initial avatar & traffic status badge */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-extrabold text-lg">
                        {branch.bankName.charAt(0)}
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          isCrowded
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${isCrowded ? 'bg-amber-600' : 'bg-emerald-600'}`}></span>
                        {branch.status} Queue
                      </span>
                    </div>

                    {/* Branch Title & Area */}
                    <div>
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                        {branch.bankName}
                      </h3>
                      <p className="text-xs font-semibold text-blue-800 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{branch.branchName} ({branch.area})</span>
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1 italic">
                        {branch.address}
                      </p>
                    </div>

                    {/* Operational Stats: waiting count & estimated minutes */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="flex items-center gap-1 text-slate-500 text-[11px]">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          <span>Queue Length</span>
                        </div>
                        <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                          {branch.waitingCustomers} waiting
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="flex items-center gap-1 text-slate-500 text-[11px]">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>Est. Wait</span>
                        </div>
                        <div className="text-sm font-extrabold text-blue-700 mt-0.5">
                          ~{branch.averageWaitMinutes} mins
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button to proceed to services */}
                  <div className="pt-5 mt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => handleSelectBranch(branch)}
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs hover:shadow-blue-200 transition-all gap-1.5"
                    >
                      <span>Select Branch & Choose Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Help Banner */}
      <div className="bg-slate-100 p-5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Selected branches allow you to review all required documents before taking a ticket.</span>
        </div>
        <Link
          to="/"
          className="font-bold text-blue-700 hover:underline shrink-0"
        >
          &larr; Return to Homepage
        </Link>
      </div>
    </div>
  );
};
