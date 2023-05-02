const defaultTheme = require('tailwindcss/defaultTheme');
const windmill = require('@windmill/react-ui/config');

module.exports = windmill({
  mode: 'jit',
  dark: 'media',
  experimental: {
      darkModeVariant: true,
  },
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './**/*.{js,ts,jsx,tsx}',
    // Add more here
  ],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
        lsOne: ['Delius Swash Caps', 'cursive'],
        ubuntu: ['Ubuntu', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        bottom:
          '0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)',
      },
    },
  },
});