import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        loader: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(180deg)" },
          "50%": { transform: "rotate(180deg)" },
          "75%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        'loader-inner': {
          '0%': {height: '0%'},
          '25%': {height: '0%'},
          '50%': {height: '100%'},
          '75%': {height: '100%'},
          '100%': {height: '0%'},
        },
      },
      animation: {
        loader: "loader 2s infinite ease",
        'loader-inner': 'loader-inner 2s infinite ease-in'
      },
    },
  },
  plugins: [],
};
export default config;
