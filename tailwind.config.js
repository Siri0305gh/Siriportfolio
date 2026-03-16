/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA'
        },
        accent: {
          400: '#22D3EE',
          500: '#0EA5E9'
        }
      },
      fontFamily: {
        sans: ['system-ui', 'SF Pro Text', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(99, 102, 241, 0.45)',
        'glow-accent': '0 0 30px rgba(34, 211, 238, 0.45)'
      }
    }
  },
  plugins: []
};

