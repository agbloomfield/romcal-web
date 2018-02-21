const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  devServer: {
    inline: true,
    port: 9000,
    contentBase: './dist'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'romcal-web-local',
      template: './src/templates/index-local.html',
      minify: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]

});
