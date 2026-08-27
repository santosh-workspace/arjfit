/** @type {import('tailwindcss').Config} */
// ARJFIT design system.
// Rebuild the stylesheet after changing any classes in the HTML:
//   npx tailwindcss@3 -i src/input.css -o assets/styles.css --minify
module.exports = {
  content: ['./*.html', './assets/*.js'],
  theme: {
    extend: {
      // Colours resolve through CSS variables so the whole palette can be
      // swapped at runtime. Values are space-separated RGB triplets so that
      // Tailwind's /opacity modifiers keep working.
      colors: {
        ink:      'rgb(var(--c-ink) / <alpha-value>)',
        surface:  'rgb(var(--c-surface) / <alpha-value>)',
        surface2: 'rgb(var(--c-surface2) / <alpha-value>)',
        line:     'rgb(var(--c-line) / <alpha-value>)',
        bone:     'rgb(var(--c-bone) / <alpha-value>)',
        muted:    'rgb(var(--c-muted) / <alpha-value>)',
        volt:     'rgb(var(--c-volt) / <alpha-value>)',
        ember:    'rgb(var(--c-ember) / <alpha-value>)',
        onAccent: 'rgb(var(--c-on-accent) / <alpha-value>)'
      },
      // Driven by CSS variables so the pairing can be swapped at runtime.
      fontFamily: {
        sans: ['var(--f-body)', 'system-ui', 'sans-serif'],
        display: ['var(--f-display)', 'Impact', 'sans-serif']
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
