const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');
const argv = require('yargs-parser')(process.argv.slice(2));

const config = {
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.sass'],
    alias: {
      '@': resolve('src')
    }
  },
  devServer: {},
  optimization: {},
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: [
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              filename: '[name].css?[hash:4]'
            }
          },
          {
            loader: 'css-loader',
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              filename: '[name].css?[hash:4]'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset/inlne'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      filename: './style/[name].css?[hash:4]'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      hash: true,
      loading: '<span>加载中...</span>'
    }),
  ]
};
module.exports = config;
