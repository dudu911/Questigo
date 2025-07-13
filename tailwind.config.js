/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Web app
    "./apps/web/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./apps/web/src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./apps/web/src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./apps/web/src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Mobile app
    "./apps/mobile/**/*.{js,jsx,ts,tsx}",
    "./apps/mobile/src/**/*.{js,jsx,ts,tsx}",
    "./apps/mobile/app/**/*.{js,jsx,ts,tsx}",
    "./apps/mobile/components/**/*.{js,jsx,ts,tsx}",

    // Shared UI components
    "./packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "./packages/shared/src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      // Questigo brand colors
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6", // Main brand blue
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9", // Secondary cyan
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        accent: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef", // Purple accent
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
          950: "#4a044e",
        },
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e", // Success green
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b", // Warning amber
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
        danger: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444", // Danger red
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        // Quest difficulty colors
        "quest-easy": "#22c55e",
        "quest-medium": "#f59e0b",
        "quest-hard": "#ef4444",
        "quest-expert": "#8b5cf6",
      },

      // Custom fonts for Questigo
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      // Custom spacing for quest cards and layouts
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },

      // Custom border radius for consistent design
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },

      // Custom shadows for quest cards
      boxShadow: {
        "quest-card":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "quest-card-hover":
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        "quest-card-active": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },

      // Animation configurations
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "bounce-subtle": "bounceSubtle 0.6s ease-in-out",
        "progress-fill": "progressFill 1s ease-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        progressFill: {
          "0%": { width: "0%" },
          "100%": { width: "var(--progress-width)" },
        },
      },
    },
  },

  plugins: [
    // Add forms plugin for better form styling
    require("@tailwindcss/forms")({
      strategy: "class",
    }),

    // Typography plugin for rich text content
    require("@tailwindcss/typography"),

    // Custom plugin for Questigo-specific utilities
    function ({ addUtilities, addComponents, theme }) {
      addUtilities({
        ".quest-gradient": {
          background:
            "linear-gradient(135deg, rgb(59 130 246) 0%, rgb(147 51 234) 100%)",
        },
        ".quest-gradient-hover": {
          background:
            "linear-gradient(135deg, rgb(37 99 235) 0%, rgb(124 58 237) 100%)",
        },
        ".quest-text-gradient": {
          background:
            "linear-gradient(135deg, rgb(59 130 246) 0%, rgb(147 51 234) 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
        },
      });

      addComponents({
        ".quest-card": {
          "@apply bg-white rounded-2xl shadow-quest-card hover:shadow-quest-card-hover transition-all duration-200 p-6":
            {},
        },
        ".quest-button": {
          "@apply px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2":
            {},
        },
        ".quest-button-primary": {
          "@apply quest-button bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500":
            {},
        },
        ".quest-button-secondary": {
          "@apply quest-button bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500":
            {},
        },
      });
    },
  ],

  // Ensure compatibility with both React and React Native
  corePlugins: {
    // Disable preflight for React Native compatibility
    preflight: process.env.PLATFORM !== "mobile",
  },
};
