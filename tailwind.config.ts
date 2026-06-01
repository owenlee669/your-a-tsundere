import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#fbf4e7",
        ink: "#171313",
        panel: "#fff9ed",
        punch: "#d31616",
        blush: "#f7d2c9"
      },
      boxShadow: {
        manga: "5px 5px 0 #171313"
      },
      borderWidth: {
        3: "3px"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
