import { createContext, useContext, ReactNode } from 'react';
import { useAudio } from '../hooks/useAudio';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useScrollSection } from '../hooks/useScrollSection';

interface AppContextType {
  audioEnabled: boolean;
  toggleAudio: () => void;
  playSound: (spriteName: string, loop?: boolean) => number | undefined;
  stopSound: (id?: number) => void;
  reducedMotion: boolean;
  currentAct: 1 | 2 | 3 | 4 | 5;
  registerSection: (element: HTMLElement | null, actNumber: 1 | 2 | 3 | 4 | 5) => void;
  unregisterSection: (element: HTMLElement | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const { isEnabled: audioEnabled, toggleAudio, playSound, stopSound } = useAudio();
  const reducedMotion = useReducedMotion();
  const { currentAct, registerSection, unregisterSection } = useScrollSection();

  const value: AppContextType = {
    audioEnabled,
    toggleAudio,
    playSound,
    stopSound,
    reducedMotion,
    currentAct,
    registerSection,
    unregisterSection,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
