/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0407',
          900: '#120810',
          800: '#1b0e17',
          700: '#26141f',
        },
        rose: {
          400: '#ff5d7e',
          500: '#f5385f',
          600: '#e01e50',
        },
        mint: {
          400: '#3fd68a',
          500: '#22c37a',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(245, 56, 95, 0.45)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.08)' },
        },
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '75%, 100%': { transform: 'scale(2.4)', opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        rise: 'rise 0.8s cubic-bezier(0.16,1,0.3,1) both',
        'pulse-slow': 'pulse-slow 6s ease-in-out infinite',
        'ping-slow': 'ping-slow 2.2s cubic-bezier(0,0,0.2,1) infinite',
        float: 'float 5s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
