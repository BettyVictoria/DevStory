/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'devstory': {
          'bg-dark': '#050505',
          'bg-darker': '#0B0B0B',
          'bg-black': '#111111',
          'accent-cyan': '#00F5FF',
          'accent-purple': '#7B61FF',
          'accent-green': '#00FF9D',
          'text-primary': '#FFFFFF',
          'text-secondary': '#B8B8B8',
        }
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 245, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(123, 97, 255, 0.3)',
        'glow-green': '0 0 20px rgba(0, 255, 157, 0.3)',
      }
    },
  },
  plugins: [],
}
