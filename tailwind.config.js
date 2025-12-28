/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Monochrome foundation
        black: '#000000',
        white: '#ffffff',
        gray: {
          100: '#f5f5f5',
          500: '#737373',
          900: '#171717',
        },
        // Brand color - single accent color
        primary: {
          50: '#f5f3f7',
          100: '#e9e3ed',
          200: '#d3c7db',
          300: '#bda5c9',
          400: '#8f6fa5',
          500: '#6C4971',
          600: '#5a3d5e',
          700: '#48314b',
          800: '#362538',
          900: '#241925',
        },
      },
      fontFamily: {
        // System fonts first
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      spacing: {
        // 8px base scale
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}

