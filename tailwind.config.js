/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef5ff",
          100: "#dbe9ff",
          200: "#b8d4ff",
          300: "#8bb8ff",
          400: "#5a96ff",
          500: "#2f74ff",
          600: "#1a56ef",
          700: "#1442c4",
          800: "#0f349e",
          900: "#0b2877",
          950: "#06184a",
        },
        cyanx: {
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
        graphite: {
          50:  "#f6f7f9",
          100: "#eceef2",
          200: "#d5dae3",
          300: "#aab2c0",
          400: "#7a8497",
          500: "#535e75",
          600: "#3b465c",
          700: "#2b3346",
          800: "#1c2233",
          900: "#0f1422",
          950: "#070a14",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
        "brand-gradient": "linear-gradient(135deg, #06184a 0%, #1442c4 50%, #06b6d4 100%)",
        "soft-gradient": "linear-gradient(135deg, #eef5ff 0%, #ffffff 60%, #e0f7fa 100%)",
      },
      boxShadow: {
        glow: "0 10px 40px -10px rgba(26,86,239,0.45)",
        card: "0 4px 24px -8px rgba(15,52,158,0.18)",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          "0%":   { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-6px)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
