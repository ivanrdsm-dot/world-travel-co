import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem", xl: "3rem" },
      screens: { "2xl": "1360px" }
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F1A24",
          900: "#0F1A24",
          800: "#1A2A38",
          700: "#22303C",
          600: "#3A4A58",
          500: "#5C6B78",
          400: "#8A97A2",
          300: "#C2CAD2",
          200: "#E4E8EC",
          100: "#F2F4F6",
          50: "#F8FAFB"
        },
        sun: {
          DEFAULT: "#F26B3A",
          700: "#C84F22",
          600: "#E25C2C",
          500: "#F26B3A",
          400: "#F58C63",
          300: "#FBB395",
          200: "#FED9C6",
          100: "#FFEEE3",
          50: "#FFF6EF"
        },
        sand: "#F6F1EA",
        bone: "#FBF8F3",
        sea: "#0B2B3B",
        gold: "#C9A14A"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"]
      },
      fontSize: {
        "display-2xl": ["clamp(3.25rem, 7.6vw, 6.75rem)",{ lineHeight: "1.0",  letterSpacing: "-0.025em" }],
        "display-xl":  ["clamp(2.5rem, 5.6vw, 5rem)",    { lineHeight: "1.02", letterSpacing: "-0.022em" }],
        "display-lg":  ["clamp(2rem, 4vw, 3.5rem)",      { lineHeight: "1.08", letterSpacing: "-0.018em" }],
        "display-md":  ["clamp(1.5rem, 2.6vw, 2.25rem)", { lineHeight: "1.18", letterSpacing: "-0.012em" }]
      },
      borderRadius: {
        xl2: "1.25rem",
        "4xl": "2rem"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,26,36,.06), 0 8px 24px -8px rgba(15,26,36,.12)",
        glow: "0 20px 60px -20px rgba(242,107,58,.45)"
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
      },
      keyframes: {
        marquee: {
          "0%":  { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-6px)" }
        }
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        floaty:  "floaty 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
export default config;
