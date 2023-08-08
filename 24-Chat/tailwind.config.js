/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#1A1924",
        bgSecondary: "#282843",
        accent: "#00B37E",
        receivedMsg: "#633BBC",
        userMsg: "#07847E",
        text: "#E1E1E6",
      },
    },
  },
  plugins: [],
};
