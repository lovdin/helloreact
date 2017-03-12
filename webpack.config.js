const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    hello: path.join(__dirname, './src/js/hello.js'),
    react: ['react', 'react-dom']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  },
  output: {
    path: path.join(__dirname, './dist/js'),
    filename: '[name].[chunkhash:7].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'react',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      filename: '../html/hello.html',
      minify: {
        collapseWhitespace: false,
        removeComments: true
      },
      template: path.join(__dirname, './src/html/hello.html')
    })
  ]
};
