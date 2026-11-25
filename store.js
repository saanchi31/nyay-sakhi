// Global Zustand store used across the app
import { create } from 'zustand';

export const useStore = create(set => ({
  // Language handling
  lang: 'en',
  setLang: (l) => set({ lang: l }),

  // Authentication
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),

  // Case information (shared across many pages)
  caseDetails: {},
  setCaseDetails: (details) => set({ caseDetails: details }),

  // Selected police station (used for FIR, SP complaint, etc.)
  selectedStation: null,
  setSelectedStation: (station) => set({ selectedStation: station }),

  // Refusal log – array of { station, officerBadge, whatSaid, date, refusalDate, refusalTime }
  refusalLog: [],
  addRefusalEntry: (entry) => set(state => ({ refusalLog: [...state.refusalLog, { id: Date.now(), ...entry }] })),

  // PDF registry – keep track of generated PDFs (name, type, date)
  pdfs: [],
  addPDF: (pdf) => set(state => ({ pdfs: [...state.pdfs, pdf] })),

  // FIR status tracking (pending / registered / investigation)
  firStatus: 'pending',
  setFirStatus: (status) => set({ firStatus: status }),

  // Evidence Vault – list of sealed artifacts
  evidenceFiles: [],
  addEvidence: (artifact) => set(state => ({ evidenceFiles: [artifact, ...state.evidenceFiles] })),
}));
