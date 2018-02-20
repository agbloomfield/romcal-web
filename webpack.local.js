const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  devServer: {
    inline: true,
    port: 9000,
    contentBase: './dist'
  }

});
