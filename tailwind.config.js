/** @type {import('tailwindcss').Config} */
// ARJFIT design system.
// Rebuild the stylesheet after changing any classes in the HTML:
//   npx tailwindcss@3 -i src/input.css -o assets/styles.css --minify
module.exports = {
  content: ['./*.html', './assets/*.js'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0B',        // page ground
        surface: '#131316',    // raised panels
        surface2: '#1C1C21',   // cards on panels
        line: '#2A2A31',       // hairline borders
        bone: '#F4F2ED',       // primary text, warm white
        muted: '#9A9AA4',      // secondary text
        volt: '#CCFF33',       // single accent — used sparingly
        ember: '#FF5A1F'       // rare secondary accent
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Anton', 'Impact', 'sans-serif']
      },
      letterSpacing: {
        eyebrow: '0.22em'
      },
      maxWidth: {
        shell: '82rem'
      },
      transitionTimingFunction: {
        cine: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
}
