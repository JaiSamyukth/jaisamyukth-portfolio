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
          <p className="font-mono text-gray-400">The name is copyrighted from 2005</p>
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
                        A CS student who somehow ended up building full systems<br />
                        <span className="text-neo-blue bg-neo-yellow px-2 inline-block transform -rotate-1">and calling himself a founder.</span>
                    </h1>

                    <p className="text-lg md:text-xl font-medium font-mono mb-4 max-w-lg leading-relaxed">
                        Co-founder of Genrec AI. I build things that actually get used —<br />
                        AI backends, full-stack products, the kind of stuff that breaks<br />
                        at 2am and you fix it because real people are depending on it.
                    </p>

                    <p className="text-base md:text-lg font-bold font-mono mb-8 text-gray-700">
                        I didn't plan any of this. I just kept building.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
                        <NeoButton onClick={() => navigate('/work')}>
                            See What I've Shipped <ArrowRight className="inline ml-2" />
                        </NeoButton>
                        <NeoButton variant="secondary" onClick={() => navigate('/contact')}>
                            Let's Build Something
                        </NeoButton>
                    </div>

                    <div className="mb-6 text-base font-medium max-w-xl">
                        <div className="flex items-start gap-2">
                            <span className="text-neo-green font-bold">→</span>
                            <div>
                                <div className="font-bold uppercase text-sm text-gray-500 mb-1">Currently taking on:</div>
                                <div>• Full-stack product builds (idea to deployed)</div>
                                <div>• AI integrations — LLMs, automation, internal tooling</div>
                                <div>• System redesigns for speed, scale, and clarity</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm font-mono text-gray-600">
                        STATUS: <span className="text-neo-blue font-bold">ONLINE</span> · <span className="text-neo-blue font-bold">AVAILABLE</span> · <span className="text-neo-blue font-bold">OPEN TO WORK</span>
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
                        <p className="font-mono font-bold text-sm">STATUS: ONLINE</p>
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
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Approach', path: '/approach' },
  { label: 'Contact', path: '/contact' },
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
              <p className="font-mono text-xs text-gray-600 uppercase">Focus Area</p>
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
        category: 'Services / Revenue Engine',
        description: 'Custom software builds that fund internal product work.',
        longDescription: 'Simple loop — clients pay me to build their software, that money funds Lumina IQ and Tabble. No investors, no grants. Every project has to be good enough to generate the next referral, which honestly keeps the quality honest in a way no process document ever could.',
        challenge: 'Most student founders wait. For funding, for the right moment, for someone to give them permission. Waiting mostly just means you never find out if your idea was any good.',
        solution: "Cloud is cheap now. AI tools are everywhere. One person can ship what used to take a whole team — and if you do it for paying clients first, you learn deployment, client pressure, and real user feedback before you ever need to raise a rupee.",
        outcomes: [
            'Multiple full-stack products delivered for paying clients',
            'All revenue reinvested directly into Lumina IQ and Tabble',
            'Zero external marketing — all work from direct network',
        ],
        gallery: [
            genrecAIImg,
        ],
        techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
        status: 'REVENUE ACTIVE',
        focus: 'Software development and product building',
        imageUrl: genrecAIImg,
        liveLink: 'https://genrecai.com',
        traction: [
            'Multiple full-stack products delivered for paying clients',
            'All revenue reinvested directly into Lumina IQ and Tabble',
            'Zero external marketing — all work from direct network',
        ],
    },
    {
        id: 'lumina-iq',
        title: 'Lumina IQ',
        category: 'AI / Education',
        description: 'AI-assisted path-building, revision, and self-testing for students.',
        longDescription: 'You paste in what you need to study. It turns that into an actual revision plan — structured explanations, what to prioritize, then questions that force you to recall it. Not highlight-and-hope. Active recall with a feedback loop. Currently out with real testers who are using it before actual exams, which is the only honest way to find out what\'s broken.',
        challenge: "Students reread notes the night before and feel like they're studying. They're not. They're just creating the feeling of familiarity without actually testing whether it's in their head. The exam then disagrees.",
        solution: "Students already paste syllabus content into ChatGPT and ask it to explain things. That's basically Lumina IQ but without structure, without a revision loop, and without anything that makes you actually prove you retained it. We just built the thing they were doing informally into something that works properly.",
        outcomes: [
            'Functional product deployed and accessible',
            'External testers actively using the revision and recall system',
            'Feedback loop running — improving from real usage, not assumptions',
        ],
        gallery: [
            luminaIntro,
            luminaScreenshot,
        ],
        techStack: ['Python', 'TypeScript', 'LLM Integration', 'React', 'PostgreSQL'],
        status: 'EXTERNAL TESTING',
        focus: 'AI-personalised learning and revision',
        imageUrl: luminaIntro,
        liveLink: 'https://luminaiq.fun',
        traction: [
            'Functional product deployed and accessible',
            'External testers actively using the revision and recall system',
            'Feedback loop running — improving from real usage, not assumptions',
        ],
    },
    {
        id: 'tabble',
        title: 'Tabble',
        category: 'Restaurant / Operations',
        description: 'Table-to-kitchen ordering and service sync for small restaurants.',
        longDescription: 'Three screens. Customer sees the menu and taps their order. Chef sees it come in immediately. Admin watches the whole floor in real time. Nobody shouts, nobody retypes anything, nobody loses an order because they were handling two tables at once. Built it, wired it together with WebSockets, tested the full flow end to end. Works. Now it needs hardware in an actual restaurant.',
        challenge: "Go sit in any small restaurant in India and watch how orders actually move from a table to the kitchen. It's a person writing on paper, or shouting, or typing into a phone they share with two other people. For a 25-seat place that can't justify a ₹2 lakh POS system, that's just... what they do. Every day.",
        solution: "A cheap Android tablet per table and a ₹500/month cloud subscription is genuinely all this needs. The infrastructure problem is basically solved. Nobody built the simple software layer for the small guys because the market looked too messy. It's not. It's just unglamorous.",
        outcomes: [
            'Complete three-interface system built (customer, chef, admin)',
            'Full flow tested locally end-to-end',
            'Architecture ready for hardware deployment on cheap Android tablets',
        ],
        gallery: [
            tabbleIntro,
            tabbleImage2,
            tabbleUnnamed,
        ],
        techStack: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'PWA'],
        status: 'HARDWARE READY',
        focus: 'Order from where you are',
        imageUrl: tabbleIntro,
        liveLink: 'https://tabble.in',
        traction: [
            'Complete three-interface system built (customer, chef, admin)',
            'Full flow tested locally end-to-end',
            'Architecture ready for hardware deployment on cheap Android tablets',
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
        description: 'Learn about Jai Samyukth — CS student, founder, and builder of full-stack systems, AI tools, and operational software. Background, philosophy, and technical stack.',
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
                            <span className="font-mono text-neo-yellow uppercase">FOUNDER_V1.0</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8">
                            Jai <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-yellow to-neo-green" style={{ WebkitTextStroke: '2px white' }}>Samyukth</span> B U.
                        </h1>
                        <p className="text-xl md:text-2xl font-medium font-mono text-gray-300 max-w-2xl">
                            3rd year B.Tech. India. I build AI systems and software that's<br />
                            supposed to survive actual use — not just a demo to a panel.
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
                                    Started with whatever seemed useful to build. Then someone paid me for it.
                                    Then the AWS bill arrived and I learned infrastructure the way everyone learns infrastructure — 
                                    painfully, at 1am, with something half-broken in production.
                                </p>
                                <p>
                                    That loop turned into Genrec AI. Lumina IQ came from watching how my batchmates actually 
                                    studied for exams (not how they said they studied). Tabble came from sitting in a restaurant, 
                                    watching the chaos, and thinking — this is a software problem with a solved answer that nobody 
                                    bothered to build cheaply enough.
                                </p>
                                <p>
                                    I build complete systems with my team. Frontend, backend, deployed, initial users.
                                    I'd rather ship something messy that gets used than something clean that lives in a private repo forever.
                                </p>
                            </div>
                        </RevealCard>

                        {/* Philosophy */}
                        <RevealCard delay={0.2} className="bg-neo-yellow border-4 border-black p-8 shadow-neo">
                            <h2 className="text-2xl font-black uppercase mb-4">Why I Build</h2>
                            <p className="font-medium text-lg leading-relaxed">
                                There's always a gap between how people actually do something and how the software assumes they do it.
                                Every project I've built came from noticing that gap. Probably where the next ones will come from too.
                            </p>
                        </RevealCard>

                        {/* Skills Grid */}
                        <RevealCard delay={0.3}>
                            <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-2">
                                <div className="w-4 h-4 bg-neo-blue rounded-full"></div>
                                Technical Arsenal
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { cat: "Core", items: ["TypeScript", "Python", "Rust", "Go"] },
                                    { cat: "Frontend", items: ["React", "Next.js", "Tailwind", "Framer Motion"] },
                                    { cat: "Backend", items: ["FastAPI", "Node.js", "PostgreSQL", "Redis"] },
                                    { cat: "Infra", items: ["Docker", "AWS", "Terraform", "CI/CD"] }
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
                                    "He leads by example. Working alongside him at Genrec, I've seen him bring the team together, make honest decisions under pressure, and push us to build things that actually matter. That's rare."
                                </p>
                                <p className="font-mono text-sm text-gray-500">— <a href="https://linkedin.com/in/shyamnath-sankar" target="_blank" rel="noopener noreferrer" className="hover:text-neo-yellow transition-colors">Shyamnath Sankar</a>, Co-founder, Genrec AI</p>
                            </div>
                        </RevealCard>
                    </div>

                    {/* Experience Timeline */}
                    <div>
                        <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-2">Timeline</h2>
                        <div className="border-l-4 border-black ml-4 space-y-12 pl-8 relative">
                            {[
                                {
                                    period: "May 2023",
                                    title: "TOOK DEV WORK SERIOUSLY",
                                    desc: "Formed a small build group. Got college lab access by offering to build tools they'd actually use. First time building under real constraints with real stakes."
                                },
                                {
                                    period: "2024",
                                    title: "FIRST PAID CLIENT BUILDS",
                                    desc: "Delivered 3 full projects through personal network. Still in college. No agency, no platform. Just people who needed something built and trusted me to build it."
                                },
                                {
                                    period: "2024",
                                    title: "LEARNED INFRA THE PAINFUL WAY",
                                    desc: "Deployed on AWS. Made expensive mistakes. Now I know exactly what survives production traffic and what only survives a demo. The money was a fair price for that knowledge."
                                },
                                {
                                    period: "Late 2024",
                                    title: "BUILT & SHIPPED LUMINA IQ MVP",
                                    desc: "Turned exam-cram frustration into a testable product. Got first external testers. Feedback started coming in. Some of it was uncomfortable. All of it was useful."
                                },
                                {
                                    period: "2025",
                                    title: "BUILT TABBLE END-TO-END",
                                    desc: "Complete restaurant sync system. Customer, chef, admin — all three interfaces, all wired together. Tested locally. Now it needs hardware in an actual restaurant."
                                },
                                {
                                    period: "Now",
                                    title: "PARALLEL ITERATION",
                                    desc: "Client builds fund the products. Products improve from real feedback. The loop continues. No roadmap, just problems that need fixing."
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
                            <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-2">// WRITING</h2>
                            <div className="space-y-4">
                                <p className="font-mono text-gray-600 mb-4">Occasional pieces on AI, systems, and building in public.</p>
                                <a href="https://dev.to/jaisamyukth" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 border-4 border-black bg-neo-white hover:bg-neo-yellow transition-colors group">
                                    <span className="font-bold">READ ON DEV.TO</span>
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Marquee text="AVAILABLE FOR CONTRACTS • SYSTEMS DESIGN • TECHNICAL AUDITS •" bgColor="bg-neo-blue" textColor="text-white" />
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
    description: 'How Jai Samyukth approaches software: observe real friction, structure systems that absorb complexity, refine through deployment feedback — not presentation cycles.',
    canonical: '#/approach',
  });
  const steps = [
    { title: "Observe", text: "How people actually interact with processes in the wild." },
    { title: "Identify", text: "Friction created by repetition, fragmentation, or bad tools." },
    { title: "Structure", text: "Software that absorbs complexity rather than exposing it to the user." },
    { title: "Refine", text: "Improvement through deployment feedback, not presentation cycles." }
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
                Design systems that handle reality without requiring constant supervision.
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
                Software that behaves like infrastructure. The kind you stop thinking about because it just works — 
                which is the only real compliment software can receive.
            </p>
            <p className="text-lg font-mono text-gray-400 mt-4">
                This is also why there's no 3-week discovery phase. The fastest way to test whether something works is to build a version of it and find out.
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
        description: 'Get in touch with Jai Samyukth for client builds, AI integrations, full-stack systems, or early-stage product collaborations. Response within 24 hours.',
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
                    If you're building something and need it done right — reach out.<br />
                    I read everything and reply within 24 hours. No pitch decks needed.<br />
                    Just tell me what you're trying to build.
                </p>

                <p className="text-lg font-mono text-center mb-8 max-w-xl mx-auto text-gray-700">
                    <span className="font-bold text-black">Available for:</span><br />
                    → Client work (systems, AI, full-stack)<br />
                    → Early-stage product builds<br />
                    → Select collaborations
                </p>

                <p className="text-base font-medium text-center mb-8 max-w-xl mx-auto text-gray-600">
                    Also open to pre-seed conversations for Lumina IQ and Tabble.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <a href="mailto:jaisamyukth@gmail.com" className="group flex-1 min-w-[140px] max-w-[200px]">
                        <div className="bg-neo-white border-4 border-black p-4 flex flex-col items-center hover:bg-black hover:text-white transition-colors cursor-pointer w-full h-full">
                            <Mail size={32} className="mb-2 group-hover:animate-bounce" />
                            <span className="font-mono font-bold uppercase text-sm">[EMAIL]</span>
                            <span className="text-xs text-gray-500 mt-1 group-hover:text-gray-400">best for project stuff</span>
                        </div>
                    </a>

                    <a href="https://linkedin.com/in/jaisamyukth" target="_blank" rel="noopener noreferrer" className="group flex-1 min-w-[140px] max-w-[200px]">
                        <div className="bg-neo-white border-4 border-black p-4 flex flex-col items-center hover:bg-neo-blue hover:text-white transition-colors cursor-pointer w-full h-full">
                            <Linkedin size={32} className="mb-2 group-hover:animate-pulse" />
                            <span className="font-mono font-bold uppercase text-sm">[LINKEDIN]</span>
                            <span className="text-xs text-gray-500 mt-1 group-hover:text-gray-400">if you want context first</span>
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
    title: 'Playground | Jai Samyukth B U',
    description: 'Experimental and supporting projects by Jai Samyukth — technical studies informing larger systems: Tabble iterations, AI experiments, CRM tools, and more.',
    canonical: '#/experimental',
  });
  const experiments = [
    { title: "Tabble Versions", desc: "Interface-driven ordering and coordination environments." },
    { title: "Revolvo AI", desc: "Librarian systems focused on retrieval and knowledge access." },
    { title: "CRM Experiments", desc: "Organizational data management platforms." },
    { title: "Feedback Tools", desc: "Supporting institutional workflows." },
  ];

  return (
    <div className="min-h-screen bg-neo-green py-12 px-4 text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-black pb-4">
            <div>
                <h1 className="text-5xl md:text-8xl font-black uppercase mb-2">Playground</h1>
                <p className="font-mono text-lg font-bold">Experimental & Supporting Work</p>
            </div>
            <div className="mt-4 md:mt-0 bg-white border-2 border-black px-4 py-2 font-mono text-sm">
                STATUS: ITERATIVE
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Content Area */}
            <div className="bg-white border-4 border-black shadow-neo-lg p-8">
                <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                    <Archive className="w-8 h-8" />
                    Broader Ecosystem
                </h2>
                <p className="mb-8 text-lg">
                    These projects serve as technical studies that inform larger systems. 
                    They are attempts to solve shared problem spaces rather than isolated releases.
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
                    <h3 className="text-2xl font-bold uppercase mb-4 text-neo-pink">Additional Repos</h3>
                    <ul className="list-disc pl-5 font-mono space-y-2 mb-6">
                        <li>Portfolio implementations</li>
                        <li>Data collection systems</li>
                        <li>Learning experiments</li>
                        <li>File-handling utilities</li>
                    </ul>
                    <a href="#" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 font-bold border-2 border-gray-400 hover:bg-neo-green hover:border-black transition-colors">
                        <Github size={18} /> View on GitHub
                    </a>
                </div>

                <div className="bg-neo-purple border-4 border-black p-8 shadow-neo text-center flex flex-col items-center justify-center min-h-[200px]">
                    <h3 className="text-4xl font-black uppercase mb-2">?</h3>
                    <p className="font-bold">More experiments incoming.</p>
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
    title: 'Jai Samyukth B U | Systems Builder & AI Founder',
    description: 'Co-founder of Genrec AI. I build production-grade AI systems, full-stack products, and LLM integrations for startups. Based in Coimbatore, India.',
    canonical: 'https://jaisamyukth.genrecai.com/',
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero />

      <div className="mt-8">
        <Marquee text="CURRENTLY TAKING ON: → FULL-STACK PRODUCT BUILDS → AI INTEGRATIONS → SYSTEM REDESIGNS •" bgColor="bg-neo-yellow" textColor="text-black" />
      </div>

      {/* Positioning Statement */}
      <section className="py-16 px-4 bg-neo-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-black text-white uppercase leading-tight">
            If you're expecting a 30-page proposal and 3 weeks of meetings,<br />
            <span className="text-neo-yellow">I'm not your guy.</span>
          </p>
          <p className="text-xl md:text-2xl font-bold text-white mt-6">
            If you want a working system in your hands fast,<br />
            <span className="text-neo-green">we'll get along.</span>
          </p>
        </div>
      </section>

      {/* Validation / Social Proof Strip */}
      <section className="py-8 px-4 bg-neo-black border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-lg text-white">
            <span className="text-neo-yellow">// VALIDATION</span>
            <span className="mx-4">→</span>
            <span>3 client projects delivered while still in college</span>
            <span className="mx-4">•</span>
            <span>Lumina IQ: functional AI product with external testers</span>
            <span className="mx-4">•</span>
            <span>Tabble: complete multi-interface system, hardware-ready</span>
            <span className="mx-4">•</span>
            <span>All built without a funding round, a co-working space, or permission</span>
          </p>
        </div>
      </section>


      {/* Selected Work Section */}
      <section className="py-20 px-4 bg-neo-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto">
          <RevealCard className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4 border-b-8 border-black pb-8">
            <div>
              <h2 className="text-5xl font-black uppercase mb-2">Selected Systems</h2>
              <p className="font-mono text-gray-600">Featured engineering artifacts and deployments.</p>
            </div>
            <NeoButton variant="secondary" onClick={() => navigate('/work')}>
              View All Systems <ArrowRight className="inline ml-2" />
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
                <h1 className="text-4xl font-black mb-4">SYSTEM NOT FOUND</h1>
                <NeoButton onClick={() => navigate('/work')}>Return to Index</NeoButton>
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
                        <ArrowLeft size={16} /> BACK TO INDEX
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
                                        <ExternalLink size={18} /> Live System
                                    </a>
                                ) : (
                                    <span className="bg-white text-black font-bold uppercase px-4 py-2 border-2 border-white font-mono text-sm flex items-center">
                                        Demo available on request
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
                                System Overview
                            </h2>
                            <p className="text-xl font-medium leading-relaxed border-l-4 border-black pl-6">
                                {project.longDescription || project.description}
                            </p>
                        </RevealCard>

                        {project.challenge && (
                            <RevealCard delay={0.3} className="bg-red-50 border-4 border-black p-8 relative">
                                <div className="absolute -top-4 -left-2 bg-red-500 text-white font-black px-4 py-1 border-2 border-black transform -rotate-2">
                                    THE PROBLEM
                                </div>
                                <p className="text-lg font-medium mt-2">{project.challenge}</p>
                            </RevealCard>
                        )}

                        {project.solution && (
                            <RevealCard delay={0.4} className="bg-green-50 border-4 border-black p-8 relative">
                                <div className="absolute -top-4 -right-2 bg-neo-green text-black font-black px-4 py-1 border-2 border-black transform rotate-2">
                                    THE SOLUTION
                                </div>
                                <p className="text-lg font-medium mt-2">{project.solution}</p>
                            </RevealCard>
                        )}

                        {/* Outcomes */}
                        {project.outcomes && project.outcomes.length > 0 && (
                            <RevealCard delay={0.45} className="bg-neo-blue border-4 border-black p-8 relative">
                                <div className="absolute -top-4 -left-2 bg-black text-white font-black px-4 py-1 border-2 border-neo-blue transform -rotate-1">
                                    OUTCOMES
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
                                    Progress / Traction
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
                                <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black inline-block">Visual Artifacts</h2>
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
                            Built and deployed independently, handling real-world usage constraints.
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
    title: 'Selected Systems | Jai Samyukth B U',
    description: 'Engineering projects built and shipped by Jai Samyukth — full-stack systems, AI platforms, and operational tools built from scratch to production.',
    canonical: '#/work',
  });
  return (
    <div className="min-h-screen bg-neo-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <RevealCard>
          <div className="mb-16 border-b-8 border-black pb-8">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
              Selected <span className="text-neo-pink stroke-black" style={{ WebkitTextStroke: '3px black', color: '#ff0099' }}>Systems</span>
            </h1>
            <p className="text-xl font-mono max-w-2xl bg-neo-yellow inline-block px-2 border-2 border-black">
              Not side projects. Not demos.
              Systems built to be deployed, used, and improved from real feedback.
              Each one started because something was genuinely broken.
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

