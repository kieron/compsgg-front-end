//tailwind.config.js
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ["./public/**/*.html", "./src/**/*.vue", "./src/assets/js/app.js"],
  },
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#131c2e',
      'darker': '#0e1726',
      'lighter': '#202b43',
      'middle': '#182338',
    })
  },
  variants: {
    borderStyle: ["responsive"],
    borderWidth: ["responsive"]
  },
  plugins: [],
};