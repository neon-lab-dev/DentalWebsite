import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Amiri: ["Amiri", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: {
          10: "#FF7F50",
        },
        secondary: {
          10: "#ADD8E6",
        },
        neutral: {
          10: "#333333",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
