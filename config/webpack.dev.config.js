const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const webpack = require("webpack");

const config = {
  devtool: "eval-source-map",
  devServer: {
    port: 8888,
    host: "localhost",
    open: true,
    quiet: true,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "构建完成提示",
      // logo: path.resolve("./img/favicon.png"),
      suppressSuccess: true
    }),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(baseConfig, config);
