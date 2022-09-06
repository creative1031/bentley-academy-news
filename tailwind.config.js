/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      fontFamily: {
        bentleyLight: ['Bentley-Light', 'Noto Sans JP', 'sans-serif'],
        bentleyRegular: ['Bentley-Regular', 'Noto Sans JP', 'sans-serif'],
      },
      backgroundImage: {
        beyond100: "url('../public/images/beyond100.jpg')",
        knowledge: "url('../public/images/knowledge.jpg')",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        bentleyTheme: {
          primary: '#335B4C',
          'primary-focus': '#003220',
          secondary: '#757575',
          accent: '#94C11D',
          neutral: '#5B5B5B',
          'base-100': '#ffffff',
          'base-200': '#F5F7F6',
          'base-300': '#E6ECE9',
          'base-content': '#333333',
          error: '#e11d48',

          '--rounded-btn': '0',
        },
      },
    ],
  },
}
