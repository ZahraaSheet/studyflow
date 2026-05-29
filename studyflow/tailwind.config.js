/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: '#0f0e17',
        cream: '#fffcf2',
        accent: '#ff6b35',
        teal: '#0d9488',
        muted: '#a7a9be',
      },
    },
  },
  plugins: [],
}
