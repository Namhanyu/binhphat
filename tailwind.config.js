/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xl: "1140px",
      },
    },
    extend: {
      colors: {
        default: "hsl(var(--pale-ash))",
        black: "hsl(var(--black))",
        white: "hsl(var(--white))",
        gray: "hsl(var(--gray))",
        "smoke-white": "hsl(var(--smoke-white))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1600px",
      },
      fontSize: {
        xxs: ["0.625rem", { lineHeight: "0.75rem" }], // 10px
        xs: ["0.75rem", { lineHeight: "0.875rem" }], // 12px
        sm: ["0.875rem", { lineHeight: "1rem" }], // 14px
        base: ["1rem", { lineHeight: "1.125rem" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.25rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.375rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "5xl": ["3.25rem", { lineHeight: "3.5rem" }], // 52px
        "6xl": ["4.5rem", { lineHeight: 1 }], // 72px
      },
      gap: {
        13: "3.25rem", // 52px
        17: "4.25rem", // 68px
        18: "4.5rem", // 72px
        19: "4.75rem", // 76px
      },
      width: {
        17: "4.25rem", // 68px
        18: "4.5rem", // 72px
        19: "4.75rem", // 76px
      },
      padding: {
        13: "3.25rem", // 52px
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
