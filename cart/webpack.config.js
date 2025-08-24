let HtmlWebpackPlugin = require("html-webpack-plugin");
let moduleFederationPlugin = require("webpack/lib/container/moduleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new moduleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartShow": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
