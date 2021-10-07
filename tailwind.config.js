module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cr-blue": "#526EFF",
        "cr-red": "#D40C00",
        "cr-indigo": "#3E49BB",
      },
      zIndex: {
        "-10": "-10",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      titillium: ["Titillium Web", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
