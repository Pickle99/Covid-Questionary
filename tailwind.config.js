module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mob: { max: "600px" },
      },
    },
  },
  plugins: [],
};
