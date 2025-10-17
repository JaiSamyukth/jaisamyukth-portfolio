import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tech-dark': '#FFFFFF',
        'tech-charcoal': '#F8F9FA',
        'tech-gray': '#E9ECEF',
        'tech-light': '#212529',
        'tech-blue': '#007BFF',
        'tech-blue-dark': '#0056b3',
        'grid-pattern': '#F1F3F4'
      },
      fontFamily: {
        'sans': ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        'tech': ['Inter', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-blue': 'pulseBlue 2s ease-in-out infinite',
        'grid-fade': 'gridFade 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseBlue: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 123, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 123, 255, 0.6)' }
        },
        gridFade: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' }
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem'
      },
      backdropBlur: {
        'xs': '2px'
      }
    },
  },
  plugins: [],
}
export default config