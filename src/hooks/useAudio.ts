import { useState, useEffect } from 'react';
import { audioManager } from '../lib/audio';

export function useAudio() {
  const [isEnabled, setIsEnabled] = useState(audioManager.getEnabled());

  useEffect(() => {
    audioManager.init();
  }, []);

  const toggleAudio = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    audioManager.setEnabled(newState);
  };

  const playSound = (spriteName: string, loop = false) => {
    return audioManager.play(spriteName as any, loop);
  };

  const stopSound = (id?: number) => {
    audioManager.stop(id);
  };

  return {
    isEnabled,
    toggleAudio,
    playSound,
    stopSound,
  };
}
