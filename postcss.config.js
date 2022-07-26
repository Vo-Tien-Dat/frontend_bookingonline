const tailwind = require("tailwindcss");
module.exports = {
  content: ["./src/**/*.{jsx,js,tsx}"],
  plugins: [require("./tailwind.config.js"), require("autoprefixer")],
};
