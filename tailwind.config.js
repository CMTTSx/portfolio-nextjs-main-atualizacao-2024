module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',

      'sm2': '375px',

      'sm3': '425px',

      'md': '768px',
      
      'lg': '1024px',
      
      'xl': '1440px',
    },
    backgroundImage: {
      'contact': "url('assets/pexels-contact.jpg')",
    },
    extend: {
      colors: {
        'footer': '#1E2019',
        'tab': 'rgb(0,255,128)'
      },
    },
  },
  plugins: [],
}
