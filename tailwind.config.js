/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./src/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-login":
          "url('/public/SVG/Login/AAYQAgSrAAgAAQAAAAAAAEFQ0SVTwDSXRqWvckCS4gYqEA.svg')",
      },
    },
  },
  plugins: [],
};
