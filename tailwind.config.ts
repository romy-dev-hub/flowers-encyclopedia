import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // if using /app router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // if using /pages
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          light: "#f9e4ec",   // pale pink background
          DEFAULT: "#f4c2c2", // main pink
          dark: "#e2a9b8",    // accent pink
        },
        green: {
          soft: "#d7e8d4",    // soft green for nature hints
        },
        beige: {
          light: "#fdf6f0",   // warm background option
        },
      },
      fontFamily: {
        serif: ["Merriweather", "serif"], // for headings / titles
        sans: ["Poppins", "sans-serif"], // for body text
      },
      boxShadow: {
        soft: "0 4px 10px rgba(244, 194, 194, 0.2)", // soft pink shadow
      },
      borderRadius: {
        xl: "1rem",   // rounded corners for cards
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
