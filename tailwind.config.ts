import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          400: "#FEDB75",
        },
        primary: {
          400: "#50B8AA",
          600: "#059A86",
          900: "#00332C",
          1000: "#002C15",
        },
        gray: {
          50: "#F2F5F7",
          100: "#EDEFEB",
          200: "#E5EBE5",
          300: "#C9CBCE",
          400: "#A7A9AB",
          500: "#6A6C6A",
          600: "#454745",
          900: "#0E0F0C",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
