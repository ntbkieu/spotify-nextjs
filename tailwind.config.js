/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["font-Roboto"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "palettes-1": "#ECF2FF",
        "palettes-2": "#FEF5E5",
        "palettes-3": "#E8F7FF",
        "palettes-4": "#FDEDE8",
        "palettes-5": "#E6FFFA",
        "palettes-6": "#ECF3FE",
        "color-1": "#000000",
        "color-2": "#121212",
        "color-3": "#242424",
        "btn-1": "#FFFFFF",
        "text-1": "#FFFFFF",
      },
      screens: {
        mobile: "320px",
        // => @media (min-width: 320px) { ... }
        tablet: "640px",
        // => @media (min-width: 640px) { ... }
        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  plugins: [],
};
