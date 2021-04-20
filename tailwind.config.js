module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary' : '#1b2033',
        'secondary' : '#0c1124',
        'primary-light' : '#208cd4',
        'body-clr' : '#eaebf5',
        'light-red'  : '#ffeceb',
        'red' : '#e64b4a',          },
      fontSize: {
        'text-md' : '1.125rem', //18px
        'text-lg' : '1.25', //20px
        'text-xl' : '1.375', //22px
        '2xl' : '1.563rem', //25px
        '3xl' : '1.625rem', //26px
      },
      spacing: {
        '96': '23.375rem',
        '24': '5.688rem',
      },
      colors: {
        'white' : '#ffffff',
        'primary-light' : '#208cd4',
        'orange' : '#fca64d',
        'dark-gray' : '#4e4c5e',
        'red' : '#df4300',
        'light-gray' : '#515974',
        'blood-red' : '#e64b4a',
      },
      borderWidth: {
        '5' : '5px'
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
