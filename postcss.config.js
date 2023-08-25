const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const postUrl = require('postcss-url');

module.exports = {
    plugins: [tailwindcss('./tailwind.config.js'), autoprefixer, postUrl],
};