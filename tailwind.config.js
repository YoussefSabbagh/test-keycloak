/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      title: ['DM Serif', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },

    extend: {
      colors: {
        primary: '#fc6e5b',
        darkBlue: '#193047',
        lightGray: '#d3d3d3',
        darkGray: '#a3a3a3',
        myWhite: '#f8f9fa',
        myBlack: '#212529',
      },
      backgroundImage: {
        contact: "url('assets/image/bgs/1.jpg')",
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
      },
      objectPosition: {
        center: 'center center',
      },
    },
  },
  plugins: [],
};
