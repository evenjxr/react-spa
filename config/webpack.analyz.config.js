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
      name: 'manifest'
    },
    minimizer: [new UglifyJsPlugin({
      parallel: true
    })],
    splitChunks: {
      cacheGroups: {
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