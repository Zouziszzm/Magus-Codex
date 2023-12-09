/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        vs: "350px",
        xs: "480px",
        sm: "640px", // custom small breakpoint
        md: "768px", // custom medium breakpoint
        lg: "1024px", // custom large breakpoint
        xl: "1280px", // custom extra-large breakpoint
        "2xl": "1536px", // custom 2xl breakpoint
      },
      fontFamily: {
        noto: ["Noto Sans Mono", "monospace"], // Replace 'YourFontFamily' with the actual font family name
      },
    },
  },
  plugins: [],
};
