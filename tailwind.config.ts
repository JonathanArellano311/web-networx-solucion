import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090909",
        charcoal: "#141414",
        ember: "#F04438",
        flame: "#E52B20",
        paper: "#F5F5F3",
        muted: "#8C8C8C",
        line: "rgba(255,255,255,.12)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 30px 90px rgba(240, 68, 56, .2)",
        panel: "0 30px 90px rgba(0, 0, 0, .32)"
      }
    }
  },
  plugins: []
};

export default config;
