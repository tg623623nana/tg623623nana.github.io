/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#4F9D9D", // 240,86,199
        primaryDark: "#808040", // 80,230,217
        primaryLight: "#E8E8D0",
        primaryRed: "#D9006C"
      },
      
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        heart: 'V',
      }
    },
  },
  plugins: [],
}

