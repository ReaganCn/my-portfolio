module.exports = {
  future: {},
  purge: ["./public/index.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
      },
    },
    fontFamily: {
      sans: ["Rubik", "system-ui", "sans-serif"],
      mono: ["Space Mono", "ui-monospace", "monospace"],
      serif: ["Instrument Serif", "Georgia", "serif"],
    },
  },
  variants: {},
  plugins: [],
};
