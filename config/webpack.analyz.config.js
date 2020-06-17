const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = {
  output: {
    filename: 'static/[name].[chunkhash:4].bundle.js',
    chunkFilename: 'static/[id].[chunkhash:4].bundle.js'
  },
  mode: 'production',
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    // 默认自带的压缩
    // minimize: true,
    // 第三方的压缩插件在这里配置
    minimizer: [new UglifyJsPlugin({
      parallel: true
    })],
    splitChunks: {
      // chunks: "async”,//默认作用于异步chunk，值为all/initial/async/function(chunk),值为function时第一个参数为遍历所有入口chunk时的chunk模块，chunk._modules为chunk所有依赖的模块，通过chunk的名字和所有依赖模块的resource可以自由配置,会抽取所有满足条件chunk的公有模块，以及模块的所有依赖模块，包括css",
      // minSize: 30000,  //表示在压缩前的最小模块大小,默认值是30kb
      // minChunks: 1,  // 表示被引用次数，默认为1；
      // maxAsyncRequests: 5,  //所有异步请求不得超过5个
      // maxInitialRequests: 3,  //初始话并行请求不得超过3个
      // automaticNameDelimiter:'~',//名称分隔符，默认是~
      // name: true,  //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔
      cacheGroups: { //设置缓存组用来抽取满足不同规则的chunk
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: false,
          test: /[\\/]node_modules[\\/]/
        },
        comons: {
          chunks: 'initial',
          minChunks: 2,
          minSize: 0,
          name: 'commons'
        }
      }
    }
  },
  plugins: [
    new ManifestPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      generateStatsFile: true,
      statsOptions: { source: false }
    })
  ]
}
module.exports = merge(baseConfig, config);