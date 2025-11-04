/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}", // 👈 This line is critical
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  