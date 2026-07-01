/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f7', 100: '#d4dde8', 200: '#a9bbc9', 300: '#7e98a9',
          400: '#4f7286', 500: '#2a5167', 600: '#013055', 700: '#001F3F',
          800: '#001a33', 900: '#001428', 950: '#000d1a',
        },
        forest: {
          50: '#f0f5f1', 100: '#dae8df', 200: '#b4d0bf', 300: '#8eb39f',
          400: '#5a8a6e', 500: '#3a6b50', 600: '#224229', 700: '#1a3320',
          800: '#132418', 900: '#0d1810',
        },
        gold: {
          50: '#fdf8ed', 100: '#faedcf', 200: '#f5d99e', 300: '#efc46d',
          400: '#e9b04a', 500: '#DAA520', 600: '#B8860B', 700: '#946d08',
          800: '#705406', 900: '#4f3b04',
        },
        burgundy: {
          50: '#fdf2f4', 100: '#fce0e4', 200: '#fac9d0', 300: '#f6a3ad',
          400: '#ef6f80', 500: '#e23e54', 600: '#c01a33', 700: '#800020',
          800: '#6b001a', 900: '#520015',
        },
        cream: {
          50: '#fdfdf8', 100: '#F8F8F8', 200: '#F5F5DC', 300: '#f0eed4',
          400: '#e6e2b8', 500: '#d4cf9a',
        },
        warmgrey: {
          400: '#9aa0a8', 500: '#6C757D', 600: '#5a6269', 700: '#494f55',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        tilt3d: {
          '0%, 100%': { transform: 'rotateY(0deg) rotateX(0deg)' },
          '25%': { transform: 'rotateY(6deg) rotateX(-3deg)' },
          '75%': { transform: 'rotateY(-6deg) rotateX(3deg)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out both',
        scaleIn: 'scaleIn 0.3s ease-out both',
        floatY: 'floatY 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        tilt3d: 'tilt3d 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
