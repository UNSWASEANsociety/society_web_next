const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([
  [withSass], 
  [withImages],
], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: "html-loader"
        },
        {
          loader: "markdown-loader",
          options: {
            
          }
        }
      ],
    })
    return config;
  }
});
