import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#006488",
        secondary: "#ffd60a",
        accent: "#0094b8",
        text: "#d0d0d0",
      },
      animation: {
        scale: "scale 0.25s linear forwards",
        lift: "lift 0.25s linear forwards",
      },
      keyframes: {
        scale: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.06)",
          },
        },
        lift: {
          "0%": {
            transform: "translateY(0px)",
          },
          "100%": {
            transform: "translateY(-2.5px)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
