/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover:   'var(--color-accent-hover)',
          light:   'var(--color-accent-light)',
          text:    'var(--color-accent-text)',
          bright:  'var(--color-accent-bright)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          hover:   'var(--color-info-hover)',
          light:   'var(--color-info-light)',
          text:    'var(--color-info-text)',
        },
        active: {
          DEFAULT: 'var(--color-active)',
          hover:   'var(--color-active-hover)',
          light:   'var(--color-active-light)',
          text:    'var(--color-active-text)',
        },
        milestone: {
          DEFAULT: 'var(--color-milestone)',
          hover:   'var(--color-milestone-hover)',
          light:   'var(--color-milestone-light)',
          text:    'var(--color-milestone-text)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          light:   'var(--color-success-light)',
          text:    'var(--color-success-text)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          light:   'var(--color-warning-light)',
          text:    'var(--color-warning-text)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          light:   'var(--color-error-light)',
          text:    'var(--color-error-text)',
        },
      },
    },
  },
  plugins: [],
}
