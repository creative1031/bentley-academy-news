/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bentleyLight: ['Bentley-Light', 'Noto Sans JP', 'sans-serif'],
        bentleyRegular: ['Bentley-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        bentleyTheme: {
          primary: '#335B4C',
          secondary: '#757575',
          accent: '#94C11D',
          neutral: '#5B5B5B',
          'base-100': '#ffffff',
          'base-200': '#F5F7F6',
          'base-300': '#E6ECE9',
          'base-content': '#333333',

          '--rounded-btn': '0',
        },
      },
    ],
  },
}
