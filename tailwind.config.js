/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        xxxl: "1600px",
      },
      colors: {
        p1: "#07205d", //primary color
        s1: "#07205d", //secondary color
        s2: "#F6C324",
        s3: "#F6C324",
        s4: "#FFB280",
        softBg: "#F7F7F7",
        softBg1: "#EAFAF8",
        bodyText: "#3B4A46",
        mainTextColor: "#060B1E",
        strokeColor: "#E4E4E4",
      },
      padding: {
        30: "120px",
        15: "60px",
      },
    },
  },
  plugins: [],
};
