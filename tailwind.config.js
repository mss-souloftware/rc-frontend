module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // default font
        poppins: ['var(--font-poppins)', 'sans-serif'], // custom font-poppins class
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
