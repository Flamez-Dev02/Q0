import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DemoBanner } from './components/common/DemoBanner';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { LandingPage } from './pages/LandingPage';
import { BranchFinderPage } from './pages/BranchFinderPage';
import { ServiceSelectionPage } from './pages/ServiceSelectionPage';
import { QueueTicketPage } from './pages/QueueTicketPage';
import { SimpleModePage } from './pages/SimpleModePage';
import { StaffDashboardPage } from './pages/StaffDashboardPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top persistent prototype disclaimer */}
      <DemoBanner />

      {/* Main navigation header */}
      <Navbar />

      {/* Primary content area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/branches" element={<BranchFinderPage />} />
          <Route path="/services" element={<ServiceSelectionPage />} />
          <Route path="/ticket" element={<QueueTicketPage />} />
          <Route path="/simple-mode" element={<SimpleModePage />} />
          <Route path="/staff" element={<StaffDashboardPage />} />
          {/* Fallback redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Institutional and demo footer */}
      <Footer />
    </div>
  );
};

export default App;
