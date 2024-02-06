import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "560px",
        xg: "1200px",
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: false,
    darkTheme: "none",
  },
};
