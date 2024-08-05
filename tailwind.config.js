/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: 'Karla, sans-serif',
        inter: 'Inter, sans-serif',
        anton: 'Anton, sans-serif'
      }
    }
  },
  plugins: []
}
