/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'dots-light': 'radial-gradient(circle, rgba(0, 0, 0, 0.2) 1px, transparent 1px)',
        'dots-dark': 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots': '30px 30px', // Size of each dot
      },  
    },
  },
  variants: {
    extend: {
      scrollbar: ['hover'],
    },
  },
  plugins: [
  ],
}

