/** @type {import('tailwindcss').Config} */
module.exports = {
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

