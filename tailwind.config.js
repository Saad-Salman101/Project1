module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'customgolden': '#BE9F56', // Replace with your desired color value
      },

    },
  },
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.filter-invert': {
          filter: 'invert(100%)',
        },
      });
    },
  ],
};
