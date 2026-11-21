const crypto = require("crypto");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// webpack 5.3 hashes with md4, which OpenSSL 3 (Node 17+) no longer provides.
// Swapping it for sha256 here keeps the build working on every Node version,
// without the --openssl-legacy-provider flag that Node 16 and older reject.
const createHash = crypto.createHash;
crypto.createHash = (algorithm, ...rest) =>
  createHash(algorithm === "md4" ? "sha256" : algorithm, ...rest);

module.exports = {
  devServer: {
    // Serve the repo root so "public/imgs/..." paths resolve like they do in dist/.
    static: { directory: __dirname, watch: false },
    port: 8080,
  },
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
          "css-loader", "postcss-loader",
          ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    }),
    new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
  }),
]
};