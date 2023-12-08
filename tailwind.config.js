const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        russonOne: ["Rosson One"],
        petitFormal: ["Petit Formal Script"]
      },
    },
  },
  plugins: [],
});
