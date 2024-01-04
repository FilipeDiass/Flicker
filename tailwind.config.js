/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorLogo: '#E93232'
      },
      fontFamily: {
        primary: ['WFVisualSans', 'sans-serif'],
        secondary: ['SuperGroteskPro', 'sans-serif']
      }
    }
  },
  plugins: []
}
