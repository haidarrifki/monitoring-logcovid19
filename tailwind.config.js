const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
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
