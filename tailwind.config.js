module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        neonGreen: '#39ff14',
        darkBackground: '#121212',
        'dark-primary': '#1a1a1a',
        'dark-secondary': '#2a2a2a',
        'orange-500': '#f97316',
        'orange-600': '#ea580c',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cursive: ['Dancing Script', 'cursive'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'neon-flicker': 'neon-flicker 3s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { 
            opacity: '0.8',
            transform: 'translate(-50%, -50%) scale(1)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1.1)'
          },
        },
        'neon-flicker': {
          '0%, 100%': {
            textShadow: '0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14, 0 0 20px #39ff14'
          },
          '50%': {
            textShadow: '0 0 2px #39ff14, 0 0 5px #39ff14, 0 0 8px #39ff14, 0 0 12px #39ff14'
          },
        },
      },
    },
  },
  plugins: [],
};