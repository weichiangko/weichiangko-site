'use client';

import { create } from 'zustand';
import { SiteMode, PresentStep } from '@/types/site';

interface SiteStore {
  mode: SiteMode;
  presentStep: PresentStep;
  showNotes: boolean;
  setMode: (mode: SiteMode) => void;
  setPresentStep: (step: PresentStep) => void;
  setShowNotes: (show: boolean) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const presentSteps: PresentStep[] = [
  'overview',
  'case:mionext',
  'case:visionmax',
  'case:edge-ai-surveillance',
  'webmcp',
  'close'
];

export const useSiteStore = create<SiteStore>((set, get) => ({
  mode: 'public',
  presentStep: 'overview',
  showNotes: false,
  
  setMode: (mode) => set({ mode }),
  
  setPresentStep: (step) => set({ presentStep: step }),
  
  setShowNotes: (show) => set({ showNotes: show }),
  
  nextStep: () => {
    const currentIndex = presentSteps.indexOf(get().presentStep);
    if (currentIndex < presentSteps.length - 1) {
      set({ presentStep: presentSteps[currentIndex + 1] });
    }
  },
  
  prevStep: () => {
    const currentIndex = presentSteps.indexOf(get().presentStep);
    if (currentIndex > 0) {
      set({ presentStep: presentSteps[currentIndex - 1] });
    }
  },
}));
