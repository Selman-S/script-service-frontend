/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Tailwind'in tarayacağı dosyalar
  theme: {
    extend: {
      colors: {
        // Koyu mavi tonları ekleyelim
        primary: '#0d1b2a',
        secondary: '#1b263b',
        accent: '#415a77',
        light: '#e0e1dd',
      },
    },
  },
  plugins: [],
}

