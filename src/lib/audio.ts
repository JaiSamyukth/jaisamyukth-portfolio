// Audio management with Howler.js
import { Howl } from 'howler';

// Audio sprite configuration
const AUDIO_SPRITES = {
  rumble: [0, 8000] as [number, number], // 8 second loop
  city: [8000, 12000] as [number, number], // 12 second loop
  pen: [20000, 1000] as [number, number], // 1 second sound
  hum: [21000, 8000] as [number, number], // 8 second loop
  seal: [29000, 600] as [number, number], // 0.6 second sound
};

class AudioManager {
  private howl: Howl | null = null;
  private isEnabled = true;
  private volume = 0.2;

  constructor() {
    // Load audio preferences from localStorage
    const savedEnabled = localStorage.getItem('audioEnabled');
    this.isEnabled = savedEnabled !== null ? JSON.parse(savedEnabled) : true;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.isEnabled = false;
    }
  }

  async init() {
    if (!this.isEnabled) return;

    // TODO: Replace with actual audio file path when available
    this.howl = new Howl({
      src: ['/assets/audio/portfolio-sounds.mp3'], // Placeholder
      sprite: AUDIO_SPRITES,
      volume: this.volume,
      preload: true,
    });
  }

  play(spriteName: keyof typeof AUDIO_SPRITES, loop = false) {
    if (!this.isEnabled || !this.howl) return;
    
    const id = this.howl.play(spriteName);
    if (loop) {
      this.howl.loop(true, id);
    }
    return id;
  }

  stop(id?: number) {
    if (!this.howl) return;
    this.howl.stop(id);
  }

  setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
    localStorage.setItem('audioEnabled', JSON.stringify(enabled));
    
    if (!enabled) {
      this.stop();
    }
  }

  getEnabled() {
    return this.isEnabled;
  }

  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
    if (this.howl) {
      this.howl.volume(this.volume);
    }
  }
}

export const audioManager = new AudioManager();
