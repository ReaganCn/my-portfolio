module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
      colors: {
        "react-blue": "#00d8ff",
      },
      fill: (theme) => ({
        red: theme("colors.red.500"),
        green: theme("colors.green.500"),
        blue: theme("colors.blue.500"),
        black: theme("colors.black")
      }),
    },
    fontFamily: {
      "space-mono": ["Space Mono"],
    },
  },
  variants: {},
  plugins: [],
};
