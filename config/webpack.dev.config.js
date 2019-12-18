const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const config = {
    devServer: {
        port: 8888,
        host: 'localhost',
        open: true,
        quiet: true,
    }, 
    plugins: [
        new WebpackBuildNotifierPlugin({
            title: "构建完成提示",
            // logo: path.resolve("./img/favicon.png"),
            suppressSuccess: true
          }),
        new FriendlyErrorsWebpackPlugin(),
    ]
}

module.exports = smp.wrap(merge(config, baseConfig));