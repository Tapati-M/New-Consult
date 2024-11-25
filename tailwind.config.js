/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Custom breakpoint for Galaxy Tab S7 (portrait mode)
        'galaxy-tab-s7': '800px', // For Portrait
        'galaxy-tab-s7-landscape': '1280px', // For Landscape
      },
    },
  },
  plugins: [],
}
