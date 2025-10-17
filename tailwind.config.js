/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        parchment: {
          light: '#F4E4BC',
          dark: '#1B1712',
          darker: '#221D16',
        },
        dust: {
          light: '#C6A779',
          dark: '#9B7E51',
        },
        twilight: {
          light: '#1B263B',
          dark: '#0D1B2A',
        },
        glow: {
          gold: '#E2C275',
          blue: '#7FD1FF',
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'typewriter': 'typewriter 3s steps(40) 1s 1 normal both',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { opacity: '0.6', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'typewriter': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
