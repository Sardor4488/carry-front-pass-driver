/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
 
  theme: {
    height: {
      '16': '90px', 
      // '18': '100px'// sets the height to 16 pixels (4 times the default base size of 1rem)
    },
    minWidth:{
      'my-min' : "100px",
    },
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
   
  },
  plugins: [],
}
