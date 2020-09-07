const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.jsx',
    './components/**/*.jsx'
  ],
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
