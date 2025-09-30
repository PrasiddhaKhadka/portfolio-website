
/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",  
        "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      color:{
        primary: '#CEFEFF',
        secondary: '#033232',
        accent: '#021D1D',
        dark: '#010A09',
        
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }                    
    },
  },
  plugins: [],
}
