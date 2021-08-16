const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    user: "./src/user.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name]_[chunkhash:8].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:8].css",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/app/index.html"),
      filename: "index.html",
      chunks: ["index"],
      favicon: path.join(__dirname, "../public/image/wiki.svg"),
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false,
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/user/index.html"),
      filename: "user.html",
      chunks: ["user"],
      favicon: path.join(__dirname, "../public/image/wiki.svg"),
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        loader: "file-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
