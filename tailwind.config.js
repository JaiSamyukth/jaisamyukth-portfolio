/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f1ede4',
        'paper-2': '#e7e2d6',
        ink: '#0e0e0c',
        'ink-2': '#1b1b18',
        acid: '#ccff00',
        blue: '#2b59ff',
        muted: '#5f5b53',
        'muted-dark': '#a29d92',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        mega: ['clamp(3.4rem, 13.2vw, 15rem)', { lineHeight: '0.82', letterSpacing: '-0.055em' }],
        display: ['clamp(2.6rem, 7.5vw, 7.5rem)', { lineHeight: '0.9', letterSpacing: '-0.045em' }],
        title: ['clamp(2rem, 4.6vw, 4.25rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        lede: ['clamp(1.25rem, 2.1vw, 1.75rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      maxWidth: { page: '88rem' },
      transitionTimingFunction: { expo: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    },
  },
  plugins: [],
};
