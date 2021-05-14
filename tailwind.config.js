const plugin = require('tailwindcss/plugin');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#322FF2',
        royalblue: {
          '50':  '#f7f9fb',
          '100': '#e3f0fd',
          '200': '#c5d8fb',
          '300': '#9eb4f5',
          '400': '#7d8ced',
          '500': '#6667e8',
          '600': '#544bdc',
          '700': '#4038bf',
          '800': '#2c2691',
          '900': '#18185c',
        },
        grey: {
          '50':  '#f8f9f8',
          '100': '#fafaff',
          '200': '#ddd9e3',
          '300': '#bbb6c4',
          '400': '#968ea0',
          '500': '#7a6e81',
          '600': '#645365',
          '700': '#4d3e4d',
          '800': '#362b36',
          '900': '#221c23',
        },
        steel: {
          '50':  '#f7f9f9',
          '100': '#ebeef6',
          '200': '#e2e3fd',
          '300': '#b2b6d8',
          '400': '#8c8fbe',
          '500': '#726da6',
          '600': '#5d518b',
          '700': '#483d6b',
          '800': '#322b4b',
          '900': '#1e1b2f',
        },
      },
      height:{
          "vh":"100vh"
      },
      fontSize:{
        "3x":"2rem"
      },
      fontFamily: {
        body: ['Quicksand',"sans-serif"]
      }
    },
  },
  variants: {
    extend: {
},
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(({addUtilities}) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
          position:"absolute",
          width:"12px",
          height: "12px",
          backgroundColor: "#322FF2",
          
        },
      }
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    })
  ],
}
