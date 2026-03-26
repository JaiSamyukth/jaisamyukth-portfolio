/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
    "!./node_modules/**",
  ],
  theme: {
    extend: {
      colors: {
        'neo-white': '#fdfbf7', // slightly off-white parchment
        'neo-black': '#0a0a0a',
        'neo-green': '#ccff00', // Acid green
        'neo-purple': '#b983ff', // Electric purple
        'neo-pink': '#ff0099',  // Hot pink
        'neo-blue': '#2b59ff',  // Electric Blue
        'neo-yellow': '#fff500', // Intense Yellow
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'neo': '6px 6px 0px 0px #000000',
        'neo-lg': '10px 10px 0px 0px #000000',
        'neo-sm': '4px 4px 0px 0px #000000',
        'neo-hover': '12px 12px 0px 0px #000000',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    }
  },
  plugins: [],
}
