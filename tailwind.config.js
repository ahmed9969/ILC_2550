/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: '#C1440E',
        cream: '#FAF3E0',
        olive: '#4A5240',
        charcoal: '#2C2C2C',
        'terracotta-light': '#D9622E',
        'terracotta-dark': '#9E3509',
        'cream-dark': '#F0E6CC',
        'olive-light': '#6B7560',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


