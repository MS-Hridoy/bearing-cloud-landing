/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './src/**.css'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1140px',
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        'mfc-orange' : '#EE7C32',
        'cream' : '#FFF7ED',
        'dark' : '#272220',
        'grey' : '#4D4D4D',
        'dib-orange':'#FFF8F2'
      }
    },
    fontFamily: {
      'inter' : [ "Inter", "sans-seri" ],
    }
  },
  plugins: [],
}
