/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#fffaf5', 900: '#fff7f0', 800: '#f8ede4', 700: '#f2e1d4', 600: '#e9d2c0' },
        rose: { 300: '#efb79b', 400: '#c9794e', 500: '#b85f37', 600: '#8e472d' },
        mint: { 300: '#b7c7a7', 400: '#7f9d70', 500: '#658456' },
        violet: { 400: '#9a6a85', 500: '#7b4b68' },
      },
      fontFamily: { display: ['"Sora"', 'sans-serif'], body: ['"Inter"', 'sans-serif'] },
      boxShadow: {
        glow: '0 16px 45px -16px rgba(184,95,55,.42)',
        cyan: '0 16px 45px -16px rgba(127,157,112,.30)',
        violet: '0 16px 45px -16px rgba(123,75,104,.28)',
      },
      keyframes: {
        rise: {'0%': {opacity:0, transform:'translateY(22px)'}, '100%': {opacity:1, transform:'translateY(0)'}},
        'pulse-slow': {'0%,100%': {opacity:.45, transform:'scale(1)'}, '50%': {opacity:.9, transform:'scale(1.08)'}},
        'ping-slow': {'0%': {transform:'scale(1)',opacity:1}, '75%,100%': {transform:'scale(2.6)',opacity:0}},
        float: {'0%,100%': {transform:'translate3d(0,0,0)'}, '50%': {transform:'translate3d(0,-12px,0)'}},
        drift: {'0%,100%': {transform:'translate3d(0,0,0) rotate(0deg)'}, '50%': {transform:'translate3d(18px,-10px,0) rotate(3deg)'}},
        shimmer: {'0%': {transform:'translateX(-120%)'}, '100%': {transform:'translateX(220%)'}},
        orbit: {'0%': {transform:'rotate(0deg) translateX(110px) rotate(0deg)'}, '100%': {transform:'rotate(360deg) translateX(110px) rotate(-360deg)'}},
        marquee: {'0%': {transform:'translateX(0)'}, '100%': {transform:'translateX(-50%)'}},
      },
      animation: {
        rise:'rise .8s cubic-bezier(.16,1,.3,1) both', 'pulse-slow':'pulse-slow 6s ease-in-out infinite', 'ping-slow':'ping-slow 2.2s cubic-bezier(0,0,.2,1) infinite',
        float:'float 5s ease-in-out infinite', drift:'drift 8s ease-in-out infinite', shimmer:'shimmer 2.8s ease-in-out infinite', orbit:'orbit 10s linear infinite', marquee:'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
