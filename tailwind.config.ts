import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF2F7",
          100: "#D6DEEA",
          200: "#A9B8CD",
          300: "#7B91B0",
          400: "#4D6B93",
          500: "#2F5078",
          600: "#1E3A5F",
          700: "#172E4D",
          800: "#10223B",
          900: "#0B1320",
          950: "#060B14",
        },
        teal: {
          50: "#EAFAFA",
          100: "#CDF3F3",
          200: "#9BE7E7",
          300: "#69DBDB",
          400: "#37CFCF",
          500: "#1FB6B6",
          600: "#188F8F",
          700: "#106969",
          800: "#0B4A4A",
          900: "#062929",
        },
        cyan: {
          DEFAULT: "#22D3EE",
        },
        ink: "#0B1320",
        sand: "#F5F7FA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(11,19,32,0) 0%, rgba(11,19,32,0.85) 100%)",
        "ocean":
          "linear-gradient(135deg, #0B1320 0%, #10223B 50%, #062929 100%)",
        "wave":
          "radial-gradient(1200px 400px at 50% 100%, rgba(31,182,182,0.25), transparent 60%)",
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
        "marquee-rev": "marquee-rev 35s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
