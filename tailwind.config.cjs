/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         keyframes: {
            comeFromRight: {
               '0%': { transform: 'translateX(100%)', opacity: '0' },
               '100%': { transform: 'translateX(0)', opacity: '1' },
            },
         },
      },
   },
   plugins: [],
}
