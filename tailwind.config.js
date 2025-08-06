/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // important for React
  ],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono , monospace',
    },
    extend: {
      colors: {
        primary: '#791524',
        secondary: '#E0E1DD',
        accent: '#FF6B6B',
        brand: {
          light: '#98182B',
          DEFAULT: '#3a86ff',
          dark: '#1a53c0',
        },
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
