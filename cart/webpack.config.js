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
        "./CartShow": "./src/bootstrap",
      },
      shared: ["faker"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
