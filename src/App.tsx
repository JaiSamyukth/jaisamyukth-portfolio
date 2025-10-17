
import { useEffect } from 'react';
import { AppProvider } from './contexts/AppContext';
import { ActOneOrigin } from './components/Acts/ActOneOrigin';
import { ActTwoEmergence } from './components/Acts/ActTwoEmergence';
import { ActThreePhilosophy } from './components/Acts/ActThreePhilosophy';
import { ActFourBlueprint } from './components/Acts/ActFourBlueprint';
import { ActFiveSummoning } from './components/Acts/ActFiveSummoning';
import { Toolbar } from './components/UI/Toolbar';
import { MuteButton } from './components/UI/MuteButton';
import { initSmoothScroll } from './lib/gsap';

function App() {
  useEffect(() => {
    // Initialize smooth scroll and GSAP optimizations
    initSmoothScroll();
  }, []);

  return (
    <AppProvider>
      <div className="relative min-h-screen">
        {/* Mute button */}
        <MuteButton />

        {/* Main content */}
        <main className="relative">
          <ActOneOrigin />
          <ActTwoEmergence />
          <ActThreePhilosophy />
          <ActFourBlueprint />
          <ActFiveSummoning />
        </main>

        {/* Persistent toolbar */}
        <Toolbar />
      </div>
    </AppProvider>
  );
}

export default App;
