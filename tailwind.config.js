// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Adjust paths as necessary
  theme: {
    extend: {
      colors: {
        primary: '#ffffff', // White for primary text
        secondary: '#abb8c3', // Light gray for subtext
        accent: '#fcb900', // Gold (if needed for specific accents)
        background: '#000000', // Black background
        navbar: '#000000', // Black for navbar
        footer: '#000000', // Black for footer
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Modern sans-serif fonts
      },
      fontSize: {
        heading: ['3rem', '1.2'], // 48px headings
        subheading: ['1.5rem', '1.5'], // 24px subheadings
        body: ['1rem', '1.5'], // 16px body text
        small: ['0.875rem', '1.4'], // 14px small text
      },
    },
  },
  plugins: [],
};
