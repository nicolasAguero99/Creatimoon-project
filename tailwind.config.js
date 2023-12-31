/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {},
    colors: {
      background: "#292929",
      primary: "#FDFF85",
      secondary: "#FB5ECF",
      tertiary: "#393939",
      error: "#FF4B3E",
      success: "#138A36",
      paragraph: "#1E1E1E",
      adminInput: "#252525",
    },
  },
  plugins: [],
}