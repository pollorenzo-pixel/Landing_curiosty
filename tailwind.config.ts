import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "vexis-black": "#030303",
        "vexis-charcoal": "#121212",
        "vexis-stone": "#f5f3ee",
        "vexis-muted": "#a3a3a3",
      },
    },
  },
  plugins: [],
} satisfies Config;
