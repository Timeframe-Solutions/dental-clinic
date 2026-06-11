import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
      },
      colors: {
        pd: {
          primary: 'var(--pd-primary)',
          'primary-dark': 'var(--pd-primary-dark)',
          'primary-mid': 'var(--pd-primary-mid)',
          'primary-light': 'var(--pd-primary-light)',
          accent: 'var(--pd-accent)',
          'accent-hover': 'var(--pd-accent-hover)',
          'accent-light': 'var(--pd-accent-light)',
          white: 'var(--pd-white)',
          'off-white': 'var(--pd-off-white)',
          neutral: {
            50: 'var(--pd-neutral-50)',
            100: 'var(--pd-neutral-100)',
            200: 'var(--pd-neutral-200)',
            400: 'var(--pd-neutral-400)',
            600: 'var(--pd-neutral-600)',
            800: 'var(--pd-neutral-800)',
            900: 'var(--pd-neutral-900)',
          },
          success: 'var(--pd-success)',
          warning: 'var(--pd-warning)',
          error: 'var(--pd-error)',
          star: 'var(--pd-star)',
        }
      },
      spacing: {
        'section': 'var(--pd-spacing-section)',
        'component': 'var(--pd-spacing-component)',
        'container': 'var(--pd-spacing-container)',
      },
      borderRadius: {
        'sm': 'var(--pd-radius-sm)',
        'md': 'var(--pd-radius-md)',
        'lg': 'var(--pd-radius-lg)',
        'xl': 'var(--pd-radius-xl)',
        '2xl': 'var(--pd-radius-2xl)',
      },
      boxShadow: {
        'card': 'var(--pd-shadow-card)',
        'elevated': 'var(--pd-shadow-elevated)',
        'premium': 'var(--pd-shadow-premium)',
      }
    }
  }
}
