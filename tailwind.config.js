/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#051A24',
        'secondary-dark': '#0D212C',
        'muted-dark': '#273C46',
        'light-surface': '#F6FCFF',
        'light-surface-alt': '#E0EBF0',
      },
      fontFamily: {
        sans: ['"PP Neue Montreal"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"PP Mondwest"', 'Georgia', 'serif'],
        mondwest: ['"PP Mondwest"', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'primary-btn': '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)',
        'secondary-btn': '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)',
        'tertiary-btn': '0 0 0 1px rgba(5,26,36,0.08), 0 2px 10px rgba(5,26,36,0.04)',
        'card': '0 4px 20px -2px rgba(5,26,36,0.06), 0 1px 4px rgba(5,26,36,0.04)',
        'dock': '0 12px 40px -10px rgba(5,26,36,0.15), 0 0 0 1px rgba(5,26,36,0.06)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-mobile': 'marquee 12s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
