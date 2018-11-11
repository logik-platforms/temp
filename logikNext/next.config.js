// CSS
const withCSS = require("@zeit/next-css")
// Images
const withImages = require("next-images")
// Sass
const withSass = require("@zeit/next-sass")

module.exports = withCSS(withSass(withImages()))