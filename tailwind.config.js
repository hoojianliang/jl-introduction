// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        "dark-primary": "#000000",
        secondary: "#b0b7cf",
        "dark-secondary": "#13263b",
        accent: "#0d0b0d",
        "dark-accent": "#dff2f2",
      },
    },
  },
};
