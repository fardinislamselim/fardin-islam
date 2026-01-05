/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Example primary color
        secondary: "#10B981", // Example secondary color
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
      animation: {
        shine: 'shine 0.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
