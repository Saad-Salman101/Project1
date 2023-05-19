module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      'custom-golden': '#BE9F56'
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
