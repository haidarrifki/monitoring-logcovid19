const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: [
  //   // Use *.tsx if using TypeScript
  //   './pages/**/*.jsx',
  //   './components/**/*.jsx'
  // ],
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
