/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agentix: {
          orange: '#FF7A00',
          darkOrange: '#EA580C',
          lightOrange: '#FFF7ED',
          dark: '#121212',
          card: '#18181B',
          gray: '#52525B',
          border: '#E4E4E7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Geist', 'Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'cta-gradient': 'linear-gradient(135deg, #FF6B00 0%, #FF2E93 50%, #C837AB 100%)',
        'hero-glow': 'radial-gradient(circle at center, rgba(255, 107, 0, 0.25) 0%, rgba(255, 46, 147, 0.15) 50%, transparent 80%)'
      }
    },
  },
  plugins: [],
}
