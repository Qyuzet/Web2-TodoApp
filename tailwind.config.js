/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e58964",

          secondary: "#4ab3b5",

          accent: "#a90cd1",

          neutral: "#252e41",

          "base-100": "#efeef7",

          info: "#5fbcf2",

          success: "#15c188",

          warning: "#eeb558",

          error: "#e6566c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
