/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B2942',
          deep: '#071A2C',
          light: '#123A5C',
        },
        petrol: '#12414D',
        gold: {
          DEFAULT: '#B8935F',
          light: '#D4B483',
          dark: '#8F6E3F',
        },
        cream: '#FAF8F4',
        stone: '#F1EEE7',
        ink: '#1B2830',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(11, 41, 66, 0.18)',
        card: '0 8px 30px -10px rgba(11, 41, 66, 0.12)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        drawLine: 'drawLine 2.4s ease forwards',
        glow: 'glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
