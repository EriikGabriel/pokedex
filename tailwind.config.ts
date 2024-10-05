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
    },
  },
  plugins: [require("tailwindcss-3d")],
};
export default config;
