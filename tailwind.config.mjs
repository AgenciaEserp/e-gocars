/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // E-Go Cars Brand Colors
        'black-brand': '#0D0E12',
        'surface-dark': '#11151A',
        'border-gray': '#1F2937',
        'text-primary': '#FFFFFF',
        'text-secondary': '#E5E7EB',
        'yellow-ego': '#FFD20A',
        'yellow-hover': '#FFC107',
        'yellow-focus': '#E0A800',
        'yellow-soft': '#FFF4BF',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'yellow': '0 0 20px rgba(255, 210, 10, 0.3)',
        'yellow-lg': '0 10px 30px rgba(255, 210, 10, 0.4)',
        'yellow-xl': '0 20px 40px rgba(255, 210, 10, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(2rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
  safelist: [
    // Asegurar que estas clases se incluyan siempre
    'shadow-yellow',
    'shadow-yellow-lg', 
    'shadow-yellow-xl',
    'bg-yellow-ego',
    'text-yellow-ego',
    'border-yellow-ego',
    'ring-yellow-focus',
    'bg-black-brand',
    'bg-surface-dark',
    'text-text-primary',
    'text-text-secondary',
    'border-border-gray'
  ]
}