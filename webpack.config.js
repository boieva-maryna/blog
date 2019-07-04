const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: __dirname+"/src/main.js",

  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          use: "css-loader",
        }),
      },
    ],
  },
  plugins: [new ExtractTextWebpackPlugin("styles.css")],
};