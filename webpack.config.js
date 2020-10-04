require("babel-polyfill");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});


module.exports = {
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',"postcss-loader",
            ]
          }
      ]
    },
    plugins: [  htmlPlugin,
                new MiniCssExtractPlugin()
    ]
  };