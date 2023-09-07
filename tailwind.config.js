/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F95C19',
        'borderColor': '#FFB800',
        'overlay': '#0A090DCC',
        'navItems': 'rgba(255, 255, 255, .7)'
      },
      maxWidth: {
        'container': '1320px',
      },
      fontFamily: {
        'oxanium': ['Oxanium', 'cursive'],
        'raleway': ['Raleway', 'sans-serif']
      },
      transitionTimingFunction: {
        'myTrans': 'all liner .4s'
      },
      boxShadow: {
        'navShadow': '0px 0px 20px 0px rgba(0, 0, 0, .05)',
        'cardShadow': '0px 0px 20px 5px rgba(63, 61, 86, 0.05)',
        'monialShadow': '0px 0px 20px 5px rgba(0, 19, 119, 0.05)',
      },
      backgroundImage: {
        'video': "url('./src/assets/video.jpg')"
      }
    },
  },
  plugins: [],
}