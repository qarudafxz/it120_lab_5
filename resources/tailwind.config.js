/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xxxxs: '250px',
        xxxs: '320px',
        xxs: '375px',
        xs: '425px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
        xxxl: '1536px'
      },
      fontFamily: {
        main: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};
