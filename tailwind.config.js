/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm' : '120px'
      },
      backgroundImage: {
        'card-1' : "url('/assets/images/bg-2.jpg')",
        'card-2' : "url('/assets/images/bg-3.jpg')",
        'midBannerLeft' : "url('/assets/images/bg-4.jpg')",
        'midBannerRight' : "url('/assets/images/bg-5.jpg')",
      },
      backgroundSize: {
        '200' : '200%',
      },
      backgroundPosition: {
        '25-top': '25% top', 
      },
      colors: {
        'base-color' : '#8A33FD',
        't-color' : '#3C4242'
      }
    },
  },
  plugins: [],
}