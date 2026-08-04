# Portfolio Content

## App.tsx

```tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Approach } from './pages/Approach';
import { Experimental } from './pages/Experimental';
import { ScrollToTop } from './components/ScrollToTop';

// Helper component to handle scrolling
const ScrollHandler = () => {
  return <ScrollToTop />;
};

import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/experimental" element={<Experimental />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <ScrollHandler />
        <Navigation />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

```

## components\Footer.tsx

```tsx
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t-4 border-neo-green py-12 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-3xl font-black uppercase mb-2">Jai Samyukth B U</h2>
          <p className="font-mono text-gray-400">Built with React and sheer stubbornness.</p>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          <a href="https://github.com/JaiSamyukth" target="_blank" rel="noopener noreferrer" className="hover:text-neo-green transition-colors font-bold uppercase underline decoration-2">GitHub</a>
          <a href="https://linkedin.com/in/jaisamyukth" target="_blank" rel="noopener noreferrer" className="hover:text-neo-pink transition-colors font-bold uppercase underline decoration-2">LinkedIn</a>
          <a href="https://x.com/JaiSamyukth17" target="_blank" rel="noopener noreferrer" className="hover:text-neo-blue transition-colors font-bold uppercase underline decoration-2">X/Twitter</a>
          <a href="mailto:jaisamyukth@gmail.com" className="hover:text-neo-yellow transition-colors font-bold uppercase underline decoration-2">Email</a>
          <a href="https://www.instagram.com/jaisamyukth17/" target="_blank" rel="noopener noreferrer" className="hover:text-neo-red transition-colors font-bold uppercase underline decoration-2">Instagram</a>

        </div>

        <div className="text-right">
          <p className="font-mono text-xs text-gray-500">© {new Date().getFullYear()} | JAI SAMYUKTH</p>
        </div>
      </div>
    </footer>
  );
};

```

## components\Hero.tsx

```tsx
import React, { useRef, useState, useEffect } from 'react';
import portfolioFace from '../images/Portfolio-Face.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { NeoButton } from './NeoButton';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    const navigate = useNavigate();
    const imgRef = useRef<HTMLDivElement>(null);
    const [isColored, setIsColored] = useState(false);

    useEffect(() => {
        // Only hook up IntersectionObserver for touch devices —
        // desktop gets the CSS hover effect via group-hover.
        const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (!isTouchDevice) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Reveal color once the image is at least 50% in the viewport
                if (entry.isIntersecting) {
                    setIsColored(true);
                } else {
                    setIsColored(false);
                }
            },
            { threshold: 0.75 }
        );

        if (imgRef.current) observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-4 py-12 md:py-20 bg-neo-white overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start z-10"
                >
                    <div className="flex items-center gap-2 mb-6 border-b-4 border-black pb-2 w-fit">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-black"></div>
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-500 rounded-full border-2 border-black"></div>
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-black"></div>
                    </div>

                    <h1 className="text-[1.75rem] md:text-[2.35rem] lg:text-[3.2rem] font-black uppercase leading-[1.1] mb-8">
                        Yep, that's me.<br />
                        The idiot with 30+ repositories<br />
                        <span className="text-neo-blue bg-neo-yellow px-2 inline-block transform -rotate-1">who can't stop building.</span>
                    </h1>

                    <p className="text-lg md:text-xl font-medium font-mono mb-4 max-w-lg leading-relaxed">
                        I write code until it works. Sometimes it breaks production at 2 AM. Most of the time it actually solves someone's problem. I build things for paying clients, and use the money to fund my own terrible ideas.
                    </p>

                    <p className="text-base md:text-lg font-bold font-mono mb-8 text-gray-700">
                        I have a suspiciously personal grudge against AWS invoices.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
                        <NeoButton onClick={() => navigate('/work')}>
                            See My Messes <ArrowRight className="inline ml-2" />
                        </NeoButton>
                        <NeoButton variant="secondary" onClick={() => navigate('/contact')}>
                            Let Me Break Your Code
                        </NeoButton>
                    </div>

                    <div className="mb-6 text-base font-medium max-w-xl">
                        <div className="flex items-start gap-2">
                            <span className="text-neo-green font-bold">→</span>
                            <div>
                                <div className="font-bold uppercase text-sm text-gray-500 mb-1">Currently taking on:</div>
                                <div>• Fixing whatever your previous dev abandoned</div>
                                <div>• Full-stack builds that actually need to ship</div>
                                <div>• Arguing with cloud infrastructure on your behalf</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm font-mono text-gray-600">
                        STATUS: <span className="text-neo-blue font-bold">ONLINE</span> · <span className="text-neo-blue font-bold">AVOIDING TERMINAL WARNINGS</span>
                    </div>
                </motion.div>

                {/* Right Side: Image */}
                <motion.div
                    ref={imgRef}
                    initial={{ opacity: 0, x: 50, rotate: 5 }}
                    animate={{ opacity: 1, x: 0, rotate: 3 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative group"
                >
                    {/* Decorative Elements behind image */}
                    <div className="absolute -top-2.5 right-0 w-full h-full bg-neo-green border-4 border-black box-shadow-neo z-0" />

                    <div className="relative z-10 bg-white overflow-hidden transform transition-transform duration-300 hover:scale-[1.01] hover:rotate-0">
                        <img
                            src={portfolioFace}
                            alt="Jai Samyukth B U"
                            className={[
                                "w-full h-auto object-cover transition-all duration-700",
                                // Touch devices: state-driven color reveal on scroll
                                isColored
                                    ? "grayscale-0 contrast-100"
                                    : "grayscale contrast-125",
                                // Desktop: CSS hover via parent group (overrides state)
                                "group-hover:grayscale-0 group-hover:contrast-100",
                            ].join(" ")}
                        />
                    </div>

                    {/* Floater decoration */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -bottom-12 -left-10 bg-neo-purple border-4 border-black p-4 shadow-neo z-20 hidden md:block"
                    >
                        <p className="font-mono font-bold text-sm">STATUS: DEBUGGING</p>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

```

## components\Marquee.tsx

```tsx
import React from 'react';

interface MarqueeProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  direction?: 'left' | 'right';
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  bgColor = 'bg-black', 
  textColor = 'text-white',
  direction = 'left' 
}) => {
  return (
    <div className={`w-full overflow-hidden border-y-4 border-black py-3 ${bgColor} ${textColor}`}>
      <div className={`whitespace-nowrap animate-marquee flex gap-8 ${direction === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Repeat enough times to cover typical screen widths smoothly */}
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-2xl md:text-4xl font-mono font-bold uppercase tracking-wider">
            {text} •
          </span>
        ))}
      </div>
    </div>
  );
};

```

## components\Navigation.tsx

```tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Survivors', path: '/work' },
  { label: 'The Idiot', path: '/about' },
  { label: 'My Method', path: '/approach' },
  { label: 'Complain', path: '/contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-neo-white border-b-4 border-black px-4 py-5 md:py-7">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl md:text-3xl font-black uppercase tracking-tighter hover:text-neo-blue transition-colors">
          JAI SAMYUKTH
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-bold font-mono uppercase hover:bg-black hover:text-white px-2 py-1 inline-flex items-center transition-all ${isActive ? 'bg-neo-green border-2 border-black shadow-[4px_4px_0px_0px_#000]' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 border-2 border-black bg-neo-yellow shadow-[4px_4px_0px_0px_#000] active:translate-y-1 active:shadow-none transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-neo-white border-t-4 border-black mt-3"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-xl font-bold font-mono uppercase border-2 border-black p-3 text-center ${isActive ? 'bg-neo-green shadow-[4px_4px_0px_0px_#000]' : 'bg-white hover:bg-gray-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

```

## components\NeoButton.tsx

```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'black';
  children: React.ReactNode;
}

export const NeoButton: React.FC<NeoButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyle = "px-6 py-3 font-bold border-4 border-black text-lg transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none shadow-[4px_4px_0px_0px_#000]";

  const variants = {
    primary: "bg-neo-green text-black hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:-translate-x-1",
    black: "bg-black text-white shadow-neo-sm border-white hover:bg-neo-purple hover:text-black hover:border-black",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

```

## components\ProjectCard.tsx

```tsx
import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

import { Link } from 'react-router-dom';

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/work/${project.id}`} className="block h-full no-underline text-inherit group">
      <div
        className="group relative bg-white border-4 border-black shadow-neo hover:shadow-neo-hover transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 flex flex-col h-full"
      >
        {/* Header / Status Bar */}
        <div className="flex justify-between items-center p-3 border-b-4 border-black bg-neo-yellow">
          <span className="font-mono text-sm font-bold uppercase tracking-tight">
            {project.status}
          </span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-black rounded-full" />
            <div className="w-3 h-3 bg-transparent border-2 border-black rounded-full" />
          </div>
        </div>

        {/* Image Container (if available) or Pattern */}
        <div className="h-48 w-full border-b-4 border-black overflow-hidden relative bg-gray-100 flex items-center justify-center">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:16px_16px]"></div>
          )}
          <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-mono">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-3xl font-black mb-4 uppercase leading-none">
            {project.title}
          </h3>

          <p className="text-black font-medium mb-6 leading-relaxed flex-grow">
            {project.description}
          </p>

          <div className="flex justify-between items-end border-t-2 border-dashed border-black pt-4">
            <div className="w-3/4">
              <p className="font-mono text-xs text-gray-600 uppercase">What It Does</p>
              <p className="font-bold text-sm leading-tight">{project.focus}</p>
            </div>
            <ArrowUpRight size={32} className="text-black group-hover:text-neo-pink transition-colors" />
          </div>
        </div>
      </div>
    </Link>
  );
};

```

## components\RevealCard.tsx

```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface RevealCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const RevealCard: React.FC<RevealCardProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1], // Custom cubic bezier (easeOutQuint-ish)
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

```

## components\ScrollToTop.tsx

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

```

## data\projects.ts

```tsx
import { Project } from '../types';
import genrecAIImg from '../images/GenrecAI.jpg';
import luminaIntro from '../images/LuminaIQ/Intro.png';
import luminaScreenshot from '../images/LuminaIQ/Screenshot 2026-01-28 134255.png';
import tabbleIntro from '../images/Tabble/Intro.png';
import tabbleImage2 from '../images/Tabble/image (2).png';
import tabbleUnnamed from '../images/Tabble/unnamed.png';

export const projects: Project[] = [
    {
        id: 'genrec-ai',
        title: 'Genrec AI',
        category: 'Services / Cloud Bills Funder',
        description: 'Building software for people who pay me, so I can afford to build software for myself.',
        longDescription: 'This is the engine. Clients need software, they pay me, and I use that money to keep Lumina IQ and Tabble running. I don\'t have investors or a rich uncle. If I build something terrible, I don\'t get a referral, which is a far better motivator than any agile sprint planning meeting.',
        challenge: 'Most students wait until they feel "ready" to build for clients. Waiting usually just means reading tutorials until you give up. I decided to learn on the job.',
        solution: 'I just started saying yes to things I didn\'t fully know how to build yet, and then stayed up until 4 AM figuring out how to build them. Turns out, real client pressure teaches you full-stack development much faster than a YouTube playlist.',
        outcomes: [
            'Actually shipped things people use instead of just making GitHub repos',
            'Made enough money to ignore AWS invoices for a while',
            'Learned how to tell clients "no" politely',
        ],
        gallery: [
            genrecAIImg,
        ],
        techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS (The ex. We don\'t talk about the invoices.)'],
        status: 'PAYING FOR SERVERS',
        focus: 'Writing code that people pay for',
        imageUrl: genrecAIImg,
        liveLink: 'https://genrecai.com',
        traction: [
            'Built real things for real people',
            'Zero marketing budget',
            'Surviving entirely on referrals',
        ],
    },
    {
        id: 'lumina-iq',
        title: 'Lumina IQ',
        category: 'AI / Education',
        description: 'Forcing students to actually remember things instead of just highlighting PDFs.',
        longDescription: 'I watched people highlight entire PDFs and somehow expect their brain to cooperate. So I built this. You paste your syllabus in, it creates a structured path, and then violently forces you to recall the information. It\'s currently being tested by real students right before their exams, which is terrifying but useful.',
        challenge: 'Rereading notes the night before an exam feels like studying, but it\'s just creating a false sense of familiarity. The exam usually disagrees with your confidence level.',
        solution: 'People were already pasting their notes into ChatGPT, but without any structure. I built a proper loop: explanation, prioritization, and active recall. It doesn\'t let you pretend you know the answer.',
        outcomes: [
            'Deployed and somewhat stable',
            'Real students are using it to pass exams (I hope)',
            'Constantly fixing edge cases because students paste weird things',
        ],
        gallery: [
            luminaIntro,
            luminaScreenshot,
        ],
        techStack: ['Python', 'TypeScript', 'LLMs', 'React', 'PostgreSQL (Has survived every terrible schema I\'ve invented.)'],
        status: 'BREAKING IN PRODUCTION',
        focus: 'Forced active recall',
        imageUrl: luminaIntro,
        liveLink: 'https://luminaiq.fun',
        traction: [
            'Actual humans are logging in',
            'Getting angry feedback when a question is too hard (which means it\'s working)',
            'Iterating based on reality, not assumptions',
        ],
    },
    {
        id: 'tabble',
        title: 'Tabble',
        category: 'Restaurant / Chaos Reduction',
        description: 'Stopping waiters from having to memorize 14 things at once.',
        longDescription: 'Three interfaces: Customer taps what they want. Chef sees it instantly. Admin watches the chaos. No shouting, no illegible handwritten notes, no forgotten extra-spicy requests. I wired the whole thing together with WebSockets and tested the entire flow. Now I just need to convince a restaurant to let me put cheap Android tablets on their tables.',
        challenge: 'Go to a small restaurant and watch how orders happen. It\'s usually a guy trying to write on a tiny pad while balancing plates, or shouting across the room. Small places can\'t drop ₹2 lakh on a fancy POS system.',
        solution: 'Turns out a ₹5,000 tablet and a basic cloud setup solves the entire problem. Nobody built it because the small restaurant market isn\'t glamorous enough for VC money. I built it because I hate watching bad workflows.',
        outcomes: [
            'The WebSockets actually stay connected most of the time',
            'Three different UIs talking to each other without catching fire',
            'Ready for a real restaurant to break it',
        ],
        gallery: [
            tabbleIntro,
            tabbleImage2,
            tabbleUnnamed,
        ],
        techStack: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'PWA'],
        status: 'WAITING FOR HARDWARE',
        focus: 'Making restaurants slightly less loud',
        imageUrl: tabbleIntro,
        liveLink: 'https://tabble.in',
        traction: [
            'Works perfectly on my machine',
            'Architecture is solid',
            'Looking for a brave restaurant owner',
        ],
    },
];

```

## images.d.ts

```tsx
declare module '*.png' {
    const src: string;
    export default src;
}
declare module '*.jpg' {
    const src: string;
    export default src;
}
declare module '*.jpeg' {
    const src: string;
    export default src;
}

```

## index.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## pages\About.tsx

```tsx
import React from 'react';
import { RevealCard } from '../components/RevealCard';
import { Marquee } from '../components/Marquee';
import { useSEO } from '../src/hooks/useSEO';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
    useSEO({
        title: 'About | Jai Samyukth B U',
        description: 'The guy with 30+ repositories, a grudge against AWS, and a compulsion to build.',
        canonical: '#/about',
    });
    return (
        <div className="min-h-screen bg-neo-white">
            {/* Hero */}
            <div className="bg-neo-black text-white py-20 px-4 border-b-8 border-neo-yellow">
                <div className="max-w-4xl mx-auto">
                    <RevealCard>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-20 h-2 bg-neo-yellow"></div>
                            <span className="font-mono text-neo-yellow uppercase">SERIAL_BUILDER_V1.0</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8">
                            Jai <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-yellow to-neo-green" style={{ WebkitTextStroke: '2px white' }}>Samyukth</span> B U.
                        </h1>
                        <p className="text-xl md:text-2xl font-medium font-mono text-gray-300 max-w-2xl">
                            3rd year B.Tech. I write code until it works. Sometimes it survives production. Sometimes I spend all night fixing it.
                        </p>
                    </RevealCard>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Biography */}
                    <div className="space-y-8">
                        <RevealCard className="bg-white border-4 border-black p-8 shadow-neo-lg">
                            <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2">Background</h2>
                            <div className="space-y-4 font-medium text-lg leading-relaxed">
                                <p>
                                    I started building things because I couldn't stop. Eventually, someone paid me for it.
                                    Then the first AWS invoice arrived, politely informing me that curiosity isn't free. I learned infrastructure the only way that works: by breaking it at 1 AM and frantically trying to fix it before anyone noticed.
                                </p>
                                <p>
                                    My projects usually start because I watch people do something stupid. Lumina IQ exists because I watched students highlight entire PDFs and somehow expect their brains to cooperate. Tabble exists because every waiter eventually develops superhero-level memory because the software doesn't.
                                </p>
                                <p>
                                    I write code until it solves the problem. Sometimes it's messy, but messy code running in production beats clean code sitting in a private repo forever.
                                </p>
                            </div>
                        </RevealCard>

                        {/* Philosophy */}
                        <RevealCard delay={0.2} className="bg-neo-yellow border-4 border-black p-8 shadow-neo">
                            <h2 className="text-2xl font-black uppercase mb-4">Why I Build</h2>
                            <p className="font-medium text-lg leading-relaxed">
                                I don't like software that needs training manuals. There's always a gap between how people actually do things and how the software assumes they do them. I just try to close that gap before the user gives up.
                            </p>
                        </RevealCard>

                        {/* Skills Grid */}
                        <RevealCard delay={0.3}>
                            <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-2">
                                <div className="w-4 h-4 bg-neo-blue rounded-full"></div>
                                Things I Argue With
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { cat: "Core", items: ["TypeScript (Annoyingly correct)", "Python", "Java", "C#", "C", "C++"] },
                                    { cat: "Frontend", items: ["React", "Next.js", "Tailwind"] },
                                    { cat: "Backend", items: ["FastAPI", "Node.js", "PostgreSQL", "MySQL"] },
                                    { cat: "Infra", items: ["Docker (Works on attempt #17)", "AWS", "Azure", "Supabase"] }
                                ].map((skill, i) => (
                                    <div key={i} className="border-2 border-black bg-neo-white p-4">
                                        <h4 className="font-mono font-bold uppercase mb-2 bg-black text-white px-2 inline-block text-sm">{skill.cat}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map(item => (
                                                <span key={item} className="text-sm font-bold border border-black px-2 py-1 bg-white hover:bg-neo-yellow transition-colors cursor-default">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </RevealCard>

                        {/* Testimonial */}
                        <RevealCard delay={0.4} className="bg-black border-4 border-black p-8 text-white">
                            <h2 className="text-2xl font-black uppercase mb-4 text-neo-green">// WHAT OTHERS SAY</h2>
                            <div className="border-l-4 border-neo-yellow pl-6">
                                <p className="text-lg font-medium italic text-gray-300 mb-4">
                                    "He leads by example. Working alongside him, I've seen him bring the team together, make honest decisions under pressure, and push us to build things that actually matter. That's rare."
                                </p>
                                <p className="font-mono text-sm text-gray-500">— <a href="https://linkedin.com/in/shyamnath-sankar" target="_blank" rel="noopener noreferrer" className="hover:text-neo-yellow transition-colors">Shyamnath Sankar</a>, Fellow Builder</p>
                            </div>
                        </RevealCard>
                    </div>

                    {/* Experience Timeline */}
                    <div>
                        <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-2">Timeline of Mistakes & Fixes</h2>
                        <div className="border-l-4 border-black ml-4 space-y-12 pl-8 relative">
                            {[
                                {
                                    period: "May 2023",
                                    title: "STARTED BUILDING",
                                    desc: "Got college lab access by offering to build tools they'd actually use. Turns out if you automate someone's boring job, they let you use their computers."
                                },
                                {
                                    period: "2024",
                                    title: "PEOPLE PAID ME",
                                    desc: "Shipped 3 full projects. Learned that clients don't care about your clean architecture, they care if the button works."
                                },
                                {
                                    period: "2024",
                                    title: "THE CLOUD INCIDENTS",
                                    desc: "AWS charged me for experimenting. Azure later handed me startup credits like an apology from the cloud industry. Git has faithfully recorded all my terrible decisions."
                                },
                                {
                                    period: "Late 2024",
                                    title: "LUMINA IQ MVP",
                                    desc: "Turned exam-cram frustration into a product. Got first external testers. Some feedback was angry, which meant it was actually forcing them to think."
                                },
                                {
                                    period: "2025",
                                    title: "TABBLE ARCHITECTURE",
                                    desc: "Complete restaurant sync system. Wired it all together. Tested locally. Now I just need to find a restaurant owner brave enough to let me install it."
                                },
                                {
                                    period: "Now",
                                    title: "THE CURRENT LOOP",
                                    desc: "Client builds pay for the servers. Products break and get fixed. I still have 30 abandoned repos I pretend don't exist."
                                }
                            ].map((job, idx) => (
                                <RevealCard key={idx} delay={idx * 0.1} className="relative">
                                    <div className="absolute -left-[42px] top-0 w-6 h-6 bg-neo-pink border-4 border-black rounded-full z-10"></div>
                                    <div className="bg-neo-white border-4 border-black p-6 shadow-neo hover:shadow-neo-hover transition-all">
                                        <span className="font-mono text-sm font-bold bg-black text-white px-2 py-1 mb-2 inline-block">
                                            {job.period}
                                        </span>
                                        <h3 className="text-xl font-black uppercase leading-none mb-2">{job.title}</h3>
                                        <p className="font-medium text-sm">{job.desc}</p>
                                    </div>
                                </RevealCard>
                            ))}
                        </div>

                        {/* Writing Section */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-2">// NOTES TO SELF</h2>
                            <div className="space-y-4">
                                <p className="font-mono text-gray-600 mb-4">Occasional rants about broken workflows and things I built.</p>
                                <a href="https://dev.to/jaisamyukth" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 border-4 border-black bg-neo-white hover:bg-neo-yellow transition-colors group">
                                    <span className="font-bold">READ ON DEV.TO</span>
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Marquee text="AVAILABLE FOR CONTRACTS • FIXING BROKEN CODE • IGNORING BEST PRACTICES TO GET THINGS DONE •" bgColor="bg-neo-blue" textColor="text-white" />
        </div>
    );
};

```

## pages\Approach.tsx

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../src/hooks/useSEO';

export const Approach: React.FC = () => {
  useSEO({
    title: 'Approach | Jai Samyukth B U',
    description: 'My highly technical process: watch people do stupid things, build a tool to stop them, try to keep the servers running.',
    canonical: '#/approach',
  });
  const steps = [
    { title: "Observe", text: "Watch how humans actually use things, which is rarely how the documentation says they should." },
    { title: "Panic", text: "Realize how much time and money is being burned by manual copy-pasting." },
    { title: "Build", text: "Write code that absorbs the chaos instead of just putting a nice UI on top of it." },
    { title: "Break & Fix", text: "Deploy it. Watch users break it in ways you never imagined. Fix it at 2 AM." }
  ];

  return (
    <div className="min-h-screen bg-neo-purple py-12 px-4 border-l-[20px] border-black">
      <div className="max-w-5xl mx-auto bg-white border-4 border-black shadow-neo-lg p-8 md:p-16 relative">
        {/* Decorative Tape */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-neo-yellow text-black font-mono text-sm px-4 py-2 border-2 border-black rotate-2 shadow-sm">
            CONFIDENTIAL // APPROACH_DOC_V1
        </div>

        <h1 className="text-5xl md:text-7xl font-black uppercase mb-12 text-center decoration-wavy underline decoration-neo-green">
          The Approach
        </h1>

        <div className="mb-12">
            <h2 className="text-3xl font-bold uppercase mb-4 bg-black text-white inline-block px-2">Objective</h2>
            <p className="text-2xl font-medium leading-relaxed border-l-4 border-neo-green pl-6 py-2">
                Stop doing boring things manually.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, i) => (
                <motion.div 
                    key={i}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="border-4 border-black p-6 bg-neo-white shadow-neo hover:bg-neo-blue hover:text-white transition-colors group"
                >
                    <div className="text-4xl font-black mb-2 opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                    <h3 className="text-2xl font-bold uppercase mb-2">{step.title}</h3>
                    <p className="font-mono text-sm leading-relaxed">{step.text}</p>
                </motion.div>
            ))}
        </div>

        <div className="bg-black text-white p-8 border-4 border-dashed border-gray-500">
            <h3 className="text-2xl font-bold uppercase mb-4 text-neo-green">// THE RESULT:</h3>
            <p className="text-xl font-mono">
                Software that you forget exists because it actually works. That's the only compliment I care about.
            </p>
            <p className="text-lg font-mono text-gray-400 mt-4">
                This is also why I don't do "3-week discovery phases." The fastest way to test whether an idea works is to write the code and find out.
            </p>
        </div>
      </div>
    </div>
  );
};

```

## pages\Contact.tsx

```tsx
import React from 'react';
import { RevealCard } from '../components/RevealCard';
import { Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { useSEO } from '../src/hooks/useSEO';

export const Contact: React.FC = () => {
    useSEO({
        title: 'Contact | Jai Samyukth B U',
        description: 'Send me broken code, angry AWS bills, or something you need built before Friday.',
        canonical: '#/contact',
    });
    return (
        <div className="min-h-screen bg-neo-yellow flex flex-col items-center justify-center p-4 relative overflow-hidden">

            {/* Background Noise */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}>
            </div>

            <RevealCard className="max-w-3xl w-full bg-white border-8 border-black p-8 md:p-16 shadow-[16px_16px_0px_0px_#000] relative z-10">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 md:text-xl font-mono font-bold rotate-2 border-2 border-white">
                    OPEN FREQUENCY
                </div>

                <h1 className="text-6xl md:text-8xl font-black uppercase text-center mb-8 leading-[0.9]">
                    Say <br /> <span className="text-neo-blue">Hi.</span>
                </h1>

                <p className="text-xl font-medium text-center mb-6 max-w-xl mx-auto">
                    If you have a broken workflow, a messy codebase, or just need something built so you can actually start selling it — reach out.<br />
                    I read everything and usually reply before the next deployment finishes.
                </p>

                <p className="text-lg font-mono text-center mb-8 max-w-xl mx-auto text-gray-700">
                    <span className="font-bold text-black">What I respond to:</span><br />
                    → "My dev abandoned this and it's on fire"<br />
                    → "I need this MVP built yesterday"<br />
                    → "How do I make my AWS bill stop looking like a phone number?"
                </p>

                <p className="text-base font-medium text-center mb-8 max-w-xl mx-auto text-gray-600">
                    (Also happy to talk if you want to put Tabble hardware in an actual restaurant)
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <a href="mailto:jaisamyukth@gmail.com" className="group flex-1 min-w-[140px] max-w-[200px]">
                        <div className="bg-neo-white border-4 border-black p-4 flex flex-col items-center hover:bg-black hover:text-white transition-colors cursor-pointer w-full h-full">
                            <Mail size={32} className="mb-2 group-hover:animate-bounce" />
                            <span className="font-mono font-bold uppercase text-sm">[EMAIL]</span>
                            <span className="text-xs text-gray-500 mt-1 group-hover:text-gray-400">for actual work</span>
                        </div>
                    </a>

                    <a href="https://linkedin.com/in/jaisamyukth" target="_blank" rel="noopener noreferrer" className="group flex-1 min-w-[140px] max-w-[200px]">
                        <div className="bg-neo-white border-4 border-black p-4 flex flex-col items-center hover:bg-neo-blue hover:text-white transition-colors cursor-pointer w-full h-full">
                            <Linkedin size={32} className="mb-2 group-hover:animate-pulse" />
                            <span className="font-mono font-bold uppercase text-sm">[LINKEDIN]</span>
                            <span className="text-xs text-gray-500 mt-1 group-hover:text-gray-400">for the recruiter bots</span>
                        </div>
                    </a>

                    <a href="https://x.com/JaiSamyukth17" target="_blank" rel="noopener noreferrer" className="group flex-1 min-w-[140px] max-w-[200px]">
                        <div className="bg-neo-white border-4 border-black p-4 flex flex-col items-center hover:bg-neo-pink hover:text-white transition-colors cursor-pointer w-full h-full">
                            <Twitter size={32} className="mb-2 group-hover:animate-bounce" />
                            <span className="font-mono font-bold uppercase text-sm">[X/TWITTER]</span>
                        </div>
                    </a>

                    <a href="https://github.com/JaiSamyukth" target="_blank" rel="noopener noreferrer" className="group flex-1 min-w-[140px] max-w-[200px]">
                        <div className="bg-neo-white border-4 border-black p-4 flex flex-col items-center hover:bg-neo-green transition-colors cursor-pointer w-full h-full">
                            <Github size={32} className="mb-2 group-hover:animate-pulse" />
                            <span className="font-mono font-bold uppercase text-sm">[GITHUB]</span>
                            <span className="text-xs text-gray-500 mt-1 group-hover:text-gray-800">my graveyard of repos</span>
                        </div>
                    </a>

                    <a href="https://instagram.com/jaisamyukth17" target="_blank" rel="noopener noreferrer" className="group flex-1 min-w-[140px] max-w-[200px]">
                        <div className="bg-neo-white border-4 border-black p-4 flex flex-col items-center hover:bg-neo-yellow transition-colors cursor-pointer w-full h-full">
                            <Instagram size={32} className="mb-2 group-hover:animate-bounce" />
                            <span className="font-mono font-bold uppercase text-sm">[INSTAGRAM]</span>
                        </div>
                    </a>
                </div>

                <div className="text-center">
                    <p className="font-mono font-bold text-sm text-gray-500 uppercase">
                        RESPONSE LATENCY: {'<'} 24H
                    </p>
                </div>
            </RevealCard>

            <div className="mt-12 font-mono font-bold text-center opacity-40">
                // END OF TRANSMISSION
            </div>
        </div>
    );
};

```

## pages\Experimental.tsx

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Archive } from 'lucide-react';
import { useSEO } from '../src/hooks/useSEO';

export const Experimental: React.FC = () => {
  useSEO({
    title: 'The Graveyard | Jai Samyukth B U',
    description: 'Half-finished ideas, things that almost worked, and repos I pretend don\'t exist.',
    canonical: '#/experimental',
  });
  const experiments = [
    { title: "Tabble V1 & V2", desc: "Before I realized WebSockets were the actual problem." },
    { title: "Revolvo AI", desc: "A knowledge retrieval bot that hallucinated with extreme confidence." },
    { title: "CRM Clones", desc: "Because everyone tries to build Jira once before giving up." },
    { title: "Feedback Forms", desc: "Built for college. Mostly used to submit blank responses." },
  ];

  return (
    <div className="min-h-screen bg-neo-green py-12 px-4 text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-black pb-4">
            <div>
                <h1 className="text-5xl md:text-8xl font-black uppercase mb-2">Graveyard</h1>
                <p className="font-mono text-lg font-bold">The 90% that didn't make it</p>
            </div>
            <div className="mt-4 md:mt-0 bg-white border-2 border-black px-4 py-2 font-mono text-sm">
                STATUS: MOSTLY BROKEN
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Content Area */}
            <div className="bg-white border-4 border-black shadow-neo-lg p-8">
                <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                    <Archive className="w-8 h-8" />
                    Failed Experiments
                </h2>
                <p className="mb-8 text-lg">
                    If you build enough things, most of them will be terrible. 
                    These are the projects that taught me what not to do.
                </p>

                <ul className="space-y-4">
                    {experiments.map((exp, i) => (
                        <motion.li 
                            key={i}
                            whileHover={{ x: 10 }}
                            className="border-2 border-black p-4 flex justify-between items-center bg-neo-white hover:bg-neo-yellow transition-colors cursor-default"
                        >
                            <div>
                                <span className="font-bold uppercase block">{exp.title}</span>
                                <span className="text-sm font-mono text-gray-700">{exp.desc}</span>
                            </div>
                            <Layers size={20} />
                        </motion.li>
                    ))}
                </ul>
            </div>

            {/* Side Panel */}
            <div className="space-y-8">
                <div className="bg-black text-white border-4 border-white p-8 shadow-neo-lg">
                    <h3 className="text-2xl font-bold uppercase mb-4 text-neo-pink">Other Repos</h3>
                    <ul className="list-disc pl-5 font-mono space-y-2 mb-6">
                        <li>This exact portfolio, rewritten 4 times</li>
                        <li>Random python scripts to automate boring tasks</li>
                        <li>Abandoned hackathon code</li>
                        <li>Proof of concepts that proved I was wrong</li>
                    </ul>
                    <a href="https://github.com/JaiSamyukth" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 font-bold border-2 border-gray-400 hover:bg-neo-green hover:border-black transition-colors">
                        <Github size={18} /> Enter at your own risk
                    </a>
                </div>

                <div className="bg-neo-purple border-4 border-black p-8 shadow-neo text-center flex flex-col items-center justify-center min-h-[200px]">
                    <h3 className="text-4xl font-black uppercase mb-2">?</h3>
                    <p className="font-bold">I will undoubtedly break more things soon.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

```

## pages\Home.tsx

```tsx
import React from 'react';
import { Marquee } from '../components/Marquee';
import { Hero } from '../components/Hero';
import { NeoButton } from '../components/NeoButton';
import { RevealCard } from '../components/RevealCard';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '../src/hooks/useSEO';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.slice(0, 3);
  useSEO({
    title: 'Jai Samyukth B U | Serial Builder',
    description: 'I build software until it works. Mostly client projects to pay for AWS, occasionally my own bad ideas.',
    canonical: 'https://jaisamyukth.genrecai.com/',
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero />

      <div className="mt-8">
        <Marquee text="CURRENTLY TAKING ON: → FIXING BROKEN PRODUCTIONS → WRITING CODE PEOPLE PAY FOR → IGNORING AWS BILLS •" bgColor="bg-neo-yellow" textColor="text-black" />
      </div>

      {/* Positioning Statement */}
      <section className="py-16 px-4 bg-neo-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-black text-white uppercase leading-tight">
            If you want a 30-page proposal and 3 weeks of meetings,<br />
            <span className="text-neo-yellow">I'm not your guy.</span>
          </p>
          <p className="text-xl md:text-2xl font-bold text-white mt-6">
            If you want something built, broken, fixed, and shipped before Friday,<br />
            <span className="text-neo-green">we'll get along fine.</span>
          </p>
        </div>
      </section>

      {/* Validation / Social Proof Strip */}
      <section className="py-8 px-4 bg-neo-black border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-lg text-white">
            <span className="text-neo-yellow">// TRACK RECORD</span>
            <span className="mx-4">→</span>
            <span>30+ repos. Most are terrible. The rest are paying for servers.</span>
            <span className="mx-4">•</span>
            <span>Lumina IQ: Actually used by real students right now</span>
            <span className="mx-4">•</span>
            <span>Tabble: Survived local testing, waiting for hardware</span>
            <span className="mx-4">•</span>
            <span>Built entirely without permission or adult supervision</span>
          </p>
        </div>
      </section>


      {/* Selected Work Section */}
      <section className="py-20 px-4 bg-neo-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto">
          <RevealCard className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4 border-b-8 border-black pb-8">
            <div>
              <h2 className="text-5xl font-black uppercase mb-2">Things That Survived</h2>
              <p className="font-mono text-gray-600">The projects that didn't get abandoned after 48 hours.</p>
            </div>
            <NeoButton variant="secondary" onClick={() => navigate('/work')}>
              View All The Messes <ArrowRight className="inline ml-2" />
            </NeoButton>
          </RevealCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <RevealCard key={project.id} delay={index * 0.1}>
                <ProjectCard project={project} index={index} />
              </RevealCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

```

## pages\ProjectDetail.tsx

```tsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { RevealCard } from '../components/RevealCard';
import { NeoButton } from '../components/NeoButton';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ScrollToTop } from '../components/ScrollToTop';
import { useSEO } from '../src/hooks/useSEO';

export const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    useSEO({
        title: project ? `${project.title} | Jai Samyukth B U` : 'Project | Jai Samyukth B U',
        description: project
            ? (project.description || `${project.title} — a system built by Jai Samyukth. ${project.category || ''}`).slice(0, 160)
            : 'Project details by Jai Samyukth B U.',
        canonical: project ? `#/work/${project.id}` : '#/work',
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-neo-white">
                <h1 className="text-4xl font-black mb-4">REPO DELETED (OR NEVER EXISTED)</h1>
                <NeoButton onClick={() => navigate('/work')}>Go look at things that actually exist</NeoButton>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neo-white">
            <ScrollToTop />

            {/* Hero Header */}
            <div className="bg-black text-white pt-24 pb-12 px-4 border-b-8 border-neo-green">
                <div className="max-w-7xl mx-auto">
                    <button
                        onClick={() => navigate('/work')}
                        className="flex items-center gap-2 font-mono text-neo-yellow mb-8 hover:underline"
                    >
                        <ArrowLeft size={16} /> BACK TO SURVIVORS
                    </button>

                    <RevealCard>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                            <div>
                                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-2 text-white">
                                    {project.title}
                                </h1>
                                <p className="font-mono text-xl text-neo-green">{project.category}</p>
                            </div>

                            <div className="flex gap-4">
                                {project.liveLink ? (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                                        className="bg-neo-blue text-white font-bold uppercase px-4 py-2 border-2 border-white hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                                        <ExternalLink size={18} /> See It Broken In Prod
                                    </a>
                                ) : (
                                    <span className="bg-white text-black font-bold uppercase px-4 py-2 border-2 border-white font-mono text-sm flex items-center">
                                        Only works on my machine
                                    </span>
                                )}
                            </div>
                        </div>
                    </RevealCard>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Sidebar Meta */}
                    <div className="lg:col-span-1">
                        <RevealCard delay={0.1} className="bg-white border-4 border-black p-6 shadow-neo sticky top-24">
                            <div className="mb-6">
                                <h3 className="font-black uppercase text-lg mb-2 border-b-2 border-black pb-1">Status</h3>
                                <p className="font-mono font-medium">{project.status}</p>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-black uppercase text-lg mb-2 border-b-2 border-black pb-1">Focus Area</h3>
                                <p className="font-medium leading-tight">{project.focus}</p>
                            </div>

                            <div>
                                <h3 className="font-black uppercase text-lg mb-2 border-b-2 border-black pb-1">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="bg-black text-white text-xs font-bold px-2 py-1">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </RevealCard>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <RevealCard delay={0.2}>
                            <h2 className="text-3xl font-black uppercase mb-4 flex items-center gap-2">
                                <span className="w-4 h-4 bg-neo-pink border-2 border-black"></span>
                                What Is This Mess?
                            </h2>
                            <p className="text-xl font-medium leading-relaxed border-l-4 border-black pl-6">
                                {project.longDescription || project.description}
                            </p>
                        </RevealCard>

                        {project.challenge && (
                            <RevealCard delay={0.3} className="bg-red-50 border-4 border-black p-8 relative">
                                <div className="absolute -top-4 -left-2 bg-red-500 text-white font-black px-4 py-1 border-2 border-black transform -rotate-2">
                                    THE FRUSTRATION
                                </div>
                                <p className="text-lg font-medium mt-2">{project.challenge}</p>
                            </RevealCard>
                        )}

                        {project.solution && (
                            <RevealCard delay={0.4} className="bg-green-50 border-4 border-black p-8 relative">
                                <div className="absolute -top-4 -right-2 bg-neo-green text-black font-black px-4 py-1 border-2 border-black transform rotate-2">
                                    THE CODE
                                </div>
                                <p className="text-lg font-medium mt-2">{project.solution}</p>
                            </RevealCard>
                        )}

                        {/* Outcomes */}
                        {project.outcomes && project.outcomes.length > 0 && (
                            <RevealCard delay={0.45} className="bg-neo-blue border-4 border-black p-8 relative">
                                <div className="absolute -top-4 -left-2 bg-black text-white font-black px-4 py-1 border-2 border-neo-blue transform -rotate-1">
                                    DID IT WORK?
                                </div>
                                <ul className="space-y-3 mt-2">
                                    {project.outcomes.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 font-medium">
                                            <span className="text-neo-yellow font-black text-xl leading-none">→</span>
                                            <span className="text-white">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </RevealCard>
                        )}

                        {/* Traction / Progress */}
                        {project.traction && project.traction.length > 0 && (
                            <RevealCard delay={0.5} className="bg-neo-yellow border-4 border-black p-8">
                                <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
                                    <span className="w-4 h-4 bg-neo-green border-2 border-black"></span>
                                    Current State of Chaos
                                </h2>
                                <ul className="space-y-3">
                                    {project.traction.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 font-medium">
                                            <span className="text-neo-green font-bold text-xl">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </RevealCard>
                        )}

                        {/* Gallery */}
                        {project.gallery && project.gallery.length > 0 && (
                            <div className="space-y-8 mt-12">
                                <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black inline-block">Proof It Exists</h2>
                                {project.gallery.map((img, idx) => (
                                    <RevealCard key={idx} delay={0.2 + (idx * 0.1)}>
                                        <div className="border-4 border-black p-2 bg-white shadow-neo">
                                            <img src={img} alt={`Artifact ${idx + 1}`} className="w-full h-auto transition-all duration-500" />
                                        </div>
                                    </RevealCard>
                                ))}
                            </div>
                        )}

                        {/* Built-independently micro-detail */}
                        <p className="font-mono text-xs text-gray-400 border-t border-dashed border-gray-200 pt-4 mt-4">
                            Built independently. Has survived at least one catastrophic failure.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

```

## pages\Work.tsx

```tsx
import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { RevealCard } from '../components/RevealCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { useSEO } from '../src/hooks/useSEO';

export const Work: React.FC = () => {
  useSEO({
    title: 'Things That Survived | Jai Samyukth B U',
    description: 'The projects that actually made it to production without me deleting the repo.',
    canonical: '#/work',
  });
  return (
    <div className="min-h-screen bg-neo-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <RevealCard>
          <div className="mb-16 border-b-8 border-black pb-8">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
              Things That <span className="text-neo-pink stroke-black" style={{ WebkitTextStroke: '3px black', color: '#ff0099' }}>Survived</span>
            </h1>
            <p className="text-xl font-mono max-w-2xl bg-neo-yellow inline-block px-2 border-2 border-black">
              I have dozens of abandoned repositories. These are the ones that actually made it. 
              Mostly because someone paid me, or because I got annoyed enough to finish them.
            </p>
          </div>
        </RevealCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <RevealCard key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} index={index} />
            </RevealCard>
          ))}
        </div>
      </div>
    </div>
  );
};

```

## src\components\Hero.tsx

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { NeoButton } from './NeoButton';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-4 py-12 md:py-20 bg-neo-white overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start z-10"
                >
                    <div className="flex items-center gap-2 mb-6 border-b-4 border-black pb-2 w-fit">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-black"></div>
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-500 rounded-full border-2 border-black"></div>
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-black"></div>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] mb-8">
                        Building <span className="text-neo-blue bg-neo-yellow px-2 inline-block transform -rotate-2">Systems</span> <br />
                        <span className="block mt-2">That Handle</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-800" style={{ WebkitTextStroke: '2px black' }}> Reality.</span>
                    </h1>

                    <p className="text-lg md:text-xl font-medium font-mono mb-10 max-w-lg leading-relaxed border-l-4 border-neo-purple pl-6">
                        Jai Samyukth B U constructs applied software infrastructure for live environments.
                        Focusing on synchronization, operational data, and stability over simulation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <NeoButton onClick={() => navigate('/work')}>
                            Explore Systems <ArrowRight className="inline ml-2" />
                        </NeoButton>
                        <NeoButton variant="secondary" onClick={() => navigate('/approach')}>
                            Read Philosophy
                        </NeoButton>
                    </div>
                </motion.div>

                {/* Right Side: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 5 }}
                    animate={{ opacity: 1, x: 0, rotate: 3 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative group"
                >
                    {/* Decorative Elements behind image */}
                    <div className="absolute -top-4 -right-4 w-full h-full bg-neo-green border-4 border-black box-shadow-neo z-0" />

                    <div className="relative z-10 border-4 border-black shadow-neo-lg bg-white overflow-hidden transform transition-transform duration-300 hover:scale-[1.01] hover:rotate-0">
                        <img
                            src="https://www.genrecai.com/images/1771422131845-205aj.png"
                            alt="Jai Samyukth B U"
                            className="w-full h-auto object-cover grayscale-0 filter-none"
                        />
                        {/* Glitch/Overlay effect on hover could go here, keeping it clean for now as requested "best in class" usually means polished but not overdone unless specifically requested */}
                    </div>

                    {/* Floater decoration */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -bottom-8 -left-8 bg-neo-purple border-4 border-black p-4 shadow-neo z-20 hidden md:block"
                    >
                        <p className="font-mono font-bold text-sm">STATUS: ONLINE</p>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

```

## src\hooks\useSEO.ts

```tsx
import { useEffect } from 'react';

interface SEOOptions {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const BASE_TITLE = 'Jai Samyukth B U';
const BASE_URL   = 'https://jaisamyukth.com';

export function useSEO({ title, description, canonical, ogImage }: SEOOptions) {
  useEffect(() => {
    // Document title
    document.title = title.includes(BASE_TITLE)
      ? title
      : `${title} | ${BASE_TITLE}`;

    const setMeta = (selector: string, value: string, attr: 'content' | 'href' = 'content') => {
      let el = document.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
      if (!el) return;
      (el as any)[attr] = value;
    };

    // Primary meta
    setMeta('meta[name="description"]', description);

    // Open Graph
    setMeta('meta[property="og:title"]', document.title);
    setMeta('meta[property="og:description"]', description);
    if (canonical) setMeta('meta[property="og:url"]', `${BASE_URL}/${canonical}`);
    if (ogImage)   setMeta('meta[property="og:image"]', ogImage);

    // Twitter Card
    setMeta('meta[property="twitter:title"]', document.title);
    setMeta('meta[property="twitter:description"]', description);
    if (canonical) setMeta('meta[property="twitter:url"]', `${BASE_URL}/${canonical}`);
    if (ogImage)   setMeta('meta[property="twitter:image"]', ogImage);

    // Canonical link
    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (link) link.href = `${BASE_URL}/${canonical}`;
    }
  }, [title, description, canonical, ogImage]);
}

```

## types.ts

```tsx
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  status: string;
  focus: string;
  imageUrl?: string;
  itemLink?: string;

  // Detail Page
  longDescription?: string;
  challenge?: string;
  solution?: string;
  outcomes?: string[];    // Buyer-facing result bullets
  gallery?: string[];
  liveLink?: string;
  traction?: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

```

## vite.config.ts

```tsx
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Generate source maps for debugging
        sourcemap: mode !== 'production',
        // Optimize chunk size
        rollupOptions: {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'router': ['react-router-dom'],
              'animation': ['framer-motion'],
              'icons': ['lucide-react'],
            },
          },
        },
        // Minify options (using esbuild which is built-in)
        minify: 'esbuild',
      },
      // Optimize dependency pre-bundling
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
      },
    };
});

```

