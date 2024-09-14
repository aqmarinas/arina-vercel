/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    // Add any other paths to your files here
  ],
  theme: {
    extend: {
      fontFamily: {
        // newsreader: ['Newsreader', 'serif'],
        // playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
