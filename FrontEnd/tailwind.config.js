/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
      },
      colors: {
        facebook: '#1877F2',
        instagram: '#E4405F',
        youtube: '#FF0000',
        twitter: '#1DA1F2',
      },
    },
  },
  plugins: [],
}

