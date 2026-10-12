import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        accent: {
          300: "#a5f3fc",
          400: "#67e8f9",
          500: "#22d3ee",
          600: "#0891b2",
        },
        surface: {
          DEFAULT: "#0d1322",
          2: "#131b2e",
        },
        success: {
          DEFAULT: "#34d399",
        },
        danger: {
          DEFAULT: "#f87171",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(139, 92, 246, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
