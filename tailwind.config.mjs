/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand colors for Milton Keynes Solar
        accent: '#5be761', // Primary accent green
        'accent-hover': '#4bd158', // Darker green for hover states
        'text-dark': '#000000', // Primary text
        'text-light': '#666666', // Secondary text
        'bg-light': '#f8f9fa', // Light section backgrounds
        'border-gray': '#e5e7eb', // Borders and dividers
        
        // Supporting colors
        success: '#5be761',
        warning: '#fbbf24',
        error: '#ef4444',
        
        // Legacy colors (keeping for compatibility)
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        lufga: ['Lufga Regular', 'system-ui', 'sans-serif'],
        sans: ['Lufga Regular', 'system-ui', 'sans-serif'], // Default to Lufga
      },
      letterSpacing: {
        'tight-custom': '-0.02em', // For headings
      },
      lineHeight: {
        'tight-custom': '1.1', // For headings
        'relaxed-custom': '1.6', // For body text
      },
      boxShadow: {
        'button-3d': '0 4px 0 0 #000000, 0 4px 8px rgba(0, 0, 0, 0.2)',
        'button-3d-hover': '0 2px 0 0 #000000, 0 2px 4px rgba(0, 0, 0, 0.2)',
        'button-3d-active': '0 1px 0 0 #000000, 0 1px 2px rgba(0, 0, 0, 0.2)',
      },
      borderWidth: {
        '3': '3px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.700'),
            maxWidth: 'none',
            h1: {
              color: theme('colors.neutral.900'),
              fontWeight: '700',
            },
            h2: {
              color: theme('colors.neutral.900'),
              fontWeight: '600',
            },
            h3: {
              color: theme('colors.neutral.800'),
              fontWeight: '600',
            },
            'h4,h5,h6': {
              color: theme('colors.neutral.800'),
            },
            strong: {
              color: theme('colors.neutral.900'),
              fontWeight: '600',
            },
            a: {
              color: theme('colors.primary.600'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.primary.700'),
                textDecoration: 'underline',
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.primary.200'),
              color: theme('colors.neutral.600'),
            },
            code: {
              color: theme('colors.neutral.800'),
              backgroundColor: theme('colors.neutral.100'),
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};