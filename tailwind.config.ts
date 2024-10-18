import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        vt323: ["var(--font-vt323)", "monospace"],
      },
      colors: {
        "pokedex-red": "#dc0a2d",
        "pokedex-red-darken": "#990000",
        "pokedex-gray": "#232323",
      },
      keyframes: {
        pulse: {
          "0, 100": { transform: "scale(1)", opacity: "1" },
          "50": { transform: "scale(1.5)", opacity: "0.8" },
        },
        glow: {
          0: { boxShadow: "0 0 5px rgba(42, 169, 254, 0.7)" },
          50: { boxShadow: "0 0 40px rgba(42, 169, 254, 0.7)" },
          100: { boxShadow: "0 0 5px rgba(42, 169, 254, 0.7)" },
        },
      },
      animation: {
        glow: "pulse 0.5s, glow 2s alternate",
      },
    },
  },
  plugins: [require("tailwindcss-3d"), require("tailwindcss-animate")],
};
export default config;
