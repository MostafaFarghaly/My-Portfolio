import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#07080b",
        surface: "#111218",
        "surface-card": "rgba(255, 255, 255, 0.03)",
        border: "rgba(255, 255, 255, 0.08)",
        primary: {
          DEFAULT: "#8b5cf6",
          hover: "#7c3aed",
          glow: "rgba(139, 92, 246, 0.35)",
        },
        cyan: {
          DEFAULT: "#06b6d4",
          glow: "rgba(6, 182, 212, 0.3)",
        },
        emerald: {
          DEFAULT: "#10b981",
        }
      },
      boxShadow: {
        "glow-violet": "0 0 50px -10px rgba(139, 92, 246, 0.3)",
        "glow-cyan": "0 0 50px -10px rgba(6, 182, 212, 0.25)",
        "card-glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        "pulse-subtle": "pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
