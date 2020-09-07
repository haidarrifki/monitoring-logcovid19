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
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
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
