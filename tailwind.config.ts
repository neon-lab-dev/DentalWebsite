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
        black: "#000",
        primary: {
          10: "#FF7F50",
        },
        secondary: {
          10: "#ADD8E6",
          20 : "#DCDCDC"
        },
        neutral: {
          10: "#333333",
          15 : "#101010",
        },
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(180deg, #FF7F50 0%, #F07F38 90.13%)',
        'orange-gradient' : 'linear-gradient(180deg, rgba(255, 127, 80, 0.00) 0%, #D04B1A 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
