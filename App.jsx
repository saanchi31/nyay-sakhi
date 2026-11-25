import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import UnderstandPage from './pages/UnderstandPage';
import FileZeroFIRPage from './pages/FileZeroFIRPage';
import EscalatePage from './pages/EscalatePage';
import NearestStationPage from './pages/NearestStationPage';
import PracticePage from './pages/PracticePage';
import EvidencePage from './pages/EvidencePage';
import DeepfakePage from './pages/DeepfakePage';
import SafetyPage from './pages/SafetyPage';
import LegalDraftsPage from './pages/LegalDraftsPage';
import LawyersPage from './pages/LawyersPage';
import TherapyPage from './pages/TherapyPage';
import NGOPage from './pages/NGOPage';
import SPDirectoryPage from './pages/SPDirectoryPage';
import CommunityPage from './pages/CommunityPage';
import ComplaintsPage from './pages/ComplaintsPage';
import LoginPage from './pages/LoginPage';
import WhatsAppPage from './pages/WhatsAppPage';
import HeatmapPage from './pages/HeatmapPage';
import LawsPage from './pages/LawsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-4">
        <Routes>
          <Route path="/"                element={<HomePage />} />
          <Route path="/understand"      element={<UnderstandPage />} />
          <Route path="/file-fir"        element={<FileZeroFIRPage />} />
          <Route path="/escalate"        element={<EscalatePage />} />
          <Route path="/nearest-station" element={<NearestStationPage />} />
          <Route path="/practice"        element={<PracticePage />} />
          <Route path="/evidence"        element={<EvidencePage />} />
          <Route path="/deepfake"        element={<DeepfakePage />} />
          <Route path="/safety"          element={<SafetyPage />} />
          <Route path="/legal-drafts"    element={<LegalDraftsPage />} />
          <Route path="/lawyers"         element={<LawyersPage />} />
          <Route path="/therapy"         element={<TherapyPage />} />
          <Route path="/ngo"             element={<NGOPage />} />
          <Route path="/sp-directory"    element={<SPDirectoryPage />} />
          <Route path="/community"       element={<CommunityPage />} />
          <Route path="/complaints/*"    element={<ComplaintsPage />} />
          <Route path="/whatsapp"        element={<WhatsAppPage />} />
          <Route path="/heatmap"         element={<HeatmapPage />} />
          <Route path="/laws"            element={<LawsPage />} />
          <Route path="/login"           element={<LoginPage />} />
          <Route path="*"               element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
