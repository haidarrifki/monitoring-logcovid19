const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/*.{js,ts,jsx,tsx}', './pages/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
}
