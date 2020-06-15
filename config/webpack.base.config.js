const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { resolve } = require('path')
const argv = require('yargs-parser')(process.argv.slice(2))

const config = {
  mode: 'development',
  entry: {
    'main': './src/main.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.sass'],
    alias: {
      '@': resolve('src')
    }
  },
  devServer: {},
  optimization: {
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        enforce: 'pre',
        loader: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: { 
              fix: true,
              cache: true,
              emitWarning: true
            }
          }
        ],
        include: [resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              filename: "[name].css?[hash:4]"
            }
          },
          {
            loader: "css-loader",
            options: {
              import: true,
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.s[a|c]ss$/,
        loader: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              filename: "[name].css?[hash:4]"
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'img',
          name: '[name].[ext]?[hash:4]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      hash: true,
      loading: '<span>加载中...</span>'
    }),
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      filename: "./style/[name].css?[hash:4]"
    }),
  ]
}
module.exports = config;