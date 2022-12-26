/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      // 'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      // 'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xsm': {'min-width': '1px', 'max-width': '649px'},
      'sm': {'min-width': '650px', 'max-width': '1029px'},
      'md': {'min-width': '1030px', 'max-width': '1099px'},
      'lg': {'min-width': '1100px', 'max-width': '1299px'},
      'xl': {'min-width': '1300px', 'max-width': '2000px'},
      '2xl': {'min-width': '2001px', 'max-width': '5000px'}
      // '2x-lg': '1500px'
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
