/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      scrollbar: {
        width: 'thin', // or any other value like 'thick'
        track: {
          background: 'gray-100', // or any other Tailwind color
        },
        thumb: {
          background: 'gray-300', // or any other Tailwind color
          border_radius: '6px', // for rounded corners
        },
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

