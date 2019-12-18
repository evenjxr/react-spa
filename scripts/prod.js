#!/usr/bin/env node 

const webpack = require('webpack')
const ora = require('ora')
const chalk = require('chalk')
const webpackConfig = require('../config/webpack.prod.config')

const spinner = ora('building for production...')
spinner.start()
webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
})